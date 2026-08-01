import { useEffect, useState } from "react";
import Loader from "./Loader";
import SkeletonCard from "./SkeletonCard";
import ResultCard from "./ResultCard";
import { analyzeBusiness } from "../services/aiService";

const initialForm = {
  businessName: "",
  ownerName: "",
  category: "",
  location: "",
  years: "",
  revenue: "",
  website: "",
  social: "",
  challenges: "",
  audience: "",
  goals: "",
};

const STORAGE_KEY = "painpoint-form-draft";

const fieldSuggestions = {
  businessName: ["Bright Studio", "Growth Hub", "NextGen Retail", "Local Eats"],
  category: ["Retail", "Restaurant", "Education", "Healthcare", "Services"],
  location: ["Delhi", "Mumbai", "Bengaluru", "Pune", "Hyderabad"],
  challenges: ["Low website traffic", "Poor lead generation", "Weak local SEO", "Low conversion rate"],
  audience: ["Small business owners", "Young professionals", "Local families", "Online shoppers"],
  goals: ["Increase leads", "Improve brand visibility", "Grow monthly sales", "Launch online store"],
};

export default function PainPointForm() {
  const [form, setForm] = useState(initialForm);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [errors, setErrors] = useState({});
  const [draftStatus, setDraftStatus] = useState("Autosave is on");
  const [hasLoadedDraft, setHasLoadedDraft] = useState(false);

  useEffect(() => {
    const savedDraft = localStorage.getItem(STORAGE_KEY);

    if (savedDraft) {
      try {
        const parsedDraft = JSON.parse(savedDraft);
        setForm({ ...initialForm, ...parsedDraft });
        setDraftStatus("Draft restored");
      } catch (error) {
        console.error("Failed to parse saved draft", error);
      }
    }

    setHasLoadedDraft(true);
  }, []);

  useEffect(() => {
    if (!hasLoadedDraft) return;

    const hasContent = Object.values(form).some((value) => String(value).trim().length > 0);

    if (!hasContent) {
      localStorage.removeItem(STORAGE_KEY);
      setDraftStatus("Draft cleared");
      return;
    }

    localStorage.setItem(STORAGE_KEY, JSON.stringify(form));
    setDraftStatus("Draft saved");
  }, [form, hasLoadedDraft]);

  const validate = () => {
    let err = {};

    Object.keys(form).forEach((key) => {
      if (!form[key]) err[key] = "This field is required";
    });

    setErrors(err);

    return Object.keys(err).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) return;

    setLoading(true);

    const response = await analyzeBusiness(form);

    setResult(response);
    setLoading(false);
  };

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSuggestionClick = (name, value) => {
    setForm({
      ...form,
      [name]: value,
    });

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  const getSuggestions = (name) => {
    const currentValue = form[name].trim().toLowerCase();
    const options = fieldSuggestions[name] || [];

    if (!currentValue) return options.slice(0, 3);

    return options.filter((option) => {
      const optionValue = option.toLowerCase();
      return optionValue.includes(currentValue) || currentValue.includes(optionValue);
    });
  };

  return (
    <section
      id="analysis"
      className="py-24 bg-white"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold">
            Customer Pain Point Analysis
          </h2>

          <p className="mt-4 text-slate-600">
            Tell us about your business.
          </p>
        </div>

        <div className="mb-6 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-600">
          <span className="font-semibold text-slate-800">Autosave is on.</span> Your draft is stored automatically while you type.
          <span className="ml-2 text-blue-600">{draftStatus}</span>
        </div>

        <form
          onSubmit={handleSubmit}
          className="grid md:grid-cols-2 gap-6"
        >
          {[
            ["businessName", "Business Name"],
            ["ownerName", "Owner Name"],
            ["category", "Business Category"],
            ["location", "Location"],
            ["years", "Years in Business"],
            ["revenue", "Monthly Revenue"],
            ["website", "Website (Yes/No)"],
            ["social", "Social Media (Yes/No)"],
            ["challenges", "Biggest Challenges"],
            ["audience", "Target Audience"],
            ["goals", "Business Goals"],
          ].map(([name, label]) => {
            const suggestions = getSuggestions(name);

            return (
              <div key={name} className="flex flex-col">
                <label className="font-semibold mb-2">
                  {label}
                </label>

                <input
                  name={name}
                  value={form[name]}
                  onChange={handleChange}
                  className="border rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder={name === "website" || name === "social" ? "Yes or No" : "Type here"}
                />

                {suggestions.length > 0 && (
                  <div className="mt-2 flex flex-wrap gap-2">
                    {suggestions.map((suggestion) => (
                      <button
                        key={suggestion}
                        type="button"
                        onClick={() => handleSuggestionClick(name, suggestion)}
                        className="rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-sm text-blue-700 transition hover:bg-blue-100"
                      >
                        {suggestion}
                      </button>
                    ))}
                  </div>
                )}

                {errors[name] && (
                  <span className="text-red-500 text-sm mt-1">
                    {errors[name]}
                  </span>
                )}
              </div>
            );
          })}

          <button className="md:col-span-2 bg-blue-600 text-white py-4 rounded-xl hover:bg-blue-700 transition">
            Analyze Business
          </button>
        </form>

        {loading && (
          <>
            <Loader />

            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <SkeletonCard />
              <SkeletonCard />
              <SkeletonCard />
              <SkeletonCard />
            </div>
          </>
        )}

        {result && (
          <div className="grid lg:grid-cols-2 gap-8 mt-12">
            <ResultCard title="Business Score">
              <h2 className="text-6xl font-bold text-emerald-500">
                {result.businessScore}%
              </h2>
            </ResultCard>

            <ResultCard title="Website Recommendation">
              <p>{result.websiteRecommendation}</p>
            </ResultCard>

            <ResultCard title="SEO Suggestions">
              <ul className="space-y-2">
                {result.seoSuggestions.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </ResultCard>

            <ResultCard title="Marketing Strategy">
              <ul className="space-y-2">
                {result.marketingStrategy.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </ResultCard>

            <ResultCard title="Growth Opportunities">
              <ul className="space-y-2">
                {result.growthOpportunities.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </ResultCard>
          </div>
        )}
      </div>
    </section>
  );
}