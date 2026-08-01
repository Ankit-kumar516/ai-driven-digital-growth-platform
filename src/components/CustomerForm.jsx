import { useState } from "react";
import { FiCheckCircle, FiMail, FiPhone } from "react-icons/fi";
import { FaStore } from "react-icons/fa";
import AIRecommendation from "./AIRecommendation";
import Button from "./Button";
import Loader from "./Loader";
import { getAIRecommendation } from "../services/aiService";

const initialForm = {
    businessName: "",
    ownerName: "",
    category: "",
    location: "",
    phone: "",
    email: "",
    website: "Yes",
    marketing: "Yes",
    budget: "",
    challenges: "",
};

export default function CustomerForm() {
    const [form, setForm] = useState(initialForm);
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);
    const [recommendation, setRecommendation] = useState(null);
    const [error, setError] = useState("");

    const validate = () => {
        const nextErrors = {};

        if (!form.businessName.trim()) nextErrors.businessName = "Business name is required.";
        if (!form.ownerName.trim()) nextErrors.ownerName = "Owner name is required.";
        if (!form.category.trim()) nextErrors.category = "Business category is required.";
        if (!form.location.trim()) nextErrors.location = "Location is required.";
        if (!form.budget.trim()) nextErrors.budget = "Budget is required.";

        if (!/^\S+@\S+\.\S+$/.test(form.email)) nextErrors.email = "Please enter a valid email address.";
        if (!/^\d{10}$/.test(form.phone.replace(/\D/g, ""))) nextErrors.phone = "Please enter a valid 10-digit phone number.";
        if (form.challenges.trim().length < 20) nextErrors.challenges = "Please describe your challenges in at least 20 characters.";

        setErrors(nextErrors);
        return Object.keys(nextErrors).length === 0;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
        setErrors((prev) => ({ ...prev, [name]: "" }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");

        if (!validate()) {
            return;
        }

        setLoading(true);

        try {
            const result = await getAIRecommendation(form);
            setRecommendation(result);
        } catch (err) {
            setError("We could not generate recommendations right now. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <section id="pricing" className="bg-slate-50 px-6 py-20 lg:px-8">
            <div className="mx-auto max-w-7xl">
                <div className="mb-10 text-center">
                    <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-3 py-1 text-sm font-medium text-blue-700 shadow-sm">
                        <FaStore />
                        AI-powered business analysis
                    </div>
                    <h2 className="text-3xl font-semibold text-slate-900 sm:text-4xl">
                        Tell us about your business and we’ll shape your next move.
                    </h2>
                    <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
                        Share a few details and receive a practical growth blueprint tailored to your industry and goals.
                    </p>
                </div>

                <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
                    <form onSubmit={handleSubmit} className="rounded-[2rem] border border-white/80 bg-white/80 p-6 shadow-2xl shadow-slate-200 backdrop-blur-xl sm:p-8">
                        <div className="grid gap-5 md:grid-cols-2">
                            {[
                                ["businessName", "Business Name", "text"],
                                ["ownerName", "Owner Name", "text"],
                                ["category", "Business Category", "text"],
                                ["location", "Location", "text"],
                                ["phone", "Phone Number", "tel"],
                                ["email", "Email Address", "email"],
                            ].map(([name, label, type]) => (
                                <div key={name} className="flex flex-col">
                                    <label className="mb-2 text-sm font-semibold text-slate-700">{label}</label>
                                    <input
                                        type={type}
                                        name={name}
                                        value={form[name]}
                                        onChange={handleChange}
                                        className={`rounded-2xl border px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100 ${errors[name] ? "border-red-400 bg-red-50" : "border-slate-200 bg-slate-50"}`}
                                    />
                                    {errors[name] && <p className="mt-2 text-sm text-red-500">{errors[name]}</p>}
                                </div>
                            ))}

                            <div className="flex flex-col">
                                <label className="mb-2 text-sm font-semibold text-slate-700">Do you already have a website?</label>
                                <select name="website" value={form.website} onChange={handleChange} className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100">
                                    <option value="Yes">Yes</option>
                                    <option value="No">No</option>
                                </select>
                            </div>

                            <div className="flex flex-col">
                                <label className="mb-2 text-sm font-semibold text-slate-700">Need digital marketing?</label>
                                <select name="marketing" value={form.marketing} onChange={handleChange} className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100">
                                    <option value="Yes">Yes</option>
                                    <option value="No">No</option>
                                </select>
                            </div>

                            <div className="flex flex-col md:col-span-2">
                                <label className="mb-2 text-sm font-semibold text-slate-700">Monthly Budget</label>
                                <input
                                    type="number"
                                    name="budget"
                                    value={form.budget}
                                    onChange={handleChange}
                                    placeholder="e.g. 15000"
                                    className={`rounded-2xl border px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100 ${errors.budget ? "border-red-400 bg-red-50" : "border-slate-200 bg-slate-50"}`}
                                />
                                {errors.budget && <p className="mt-2 text-sm text-red-500">{errors.budget}</p>}
                            </div>

                            <div className="flex flex-col md:col-span-2">
                                <label className="mb-2 text-sm font-semibold text-slate-700">Describe your biggest business challenges</label>
                                <textarea
                                    name="challenges"
                                    rows="4"
                                    value={form.challenges}
                                    onChange={handleChange}
                                    placeholder="Tell us what is slowing your growth right now..."
                                    className={`rounded-2xl border px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100 ${errors.challenges ? "border-red-400 bg-red-50" : "border-slate-200 bg-slate-50"}`}
                                />
                                {errors.challenges && <p className="mt-2 text-sm text-red-500">{errors.challenges}</p>}
                            </div>
                        </div>

                        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                            <div className="flex items-center gap-2 text-sm text-slate-500">
                                <FiCheckCircle className="text-emerald-500" />
                                Secure. Fast. Personalized.
                            </div>
                            <Button variant="primary" className="w-full sm:w-auto" disabled={loading}>
                                {loading ? "Analyzing..." : "Analyze My Business"}
                            </Button>
                        </div>
                    </form>

                    <div className="space-y-4">
                        <div className="rounded-[2rem] border border-blue-100 bg-gradient-to-br from-blue-600 to-indigo-600 p-6 text-white shadow-xl">
                            <div className="flex items-center gap-3">
                                <div className="rounded-2xl bg-white/20 p-3">
                                    <FiMail />
                                </div>
                                <div>
                                    <p className="text-sm font-medium text-blue-100">Instant guidance</p>
                                    <p className="text-xl font-semibold">A practical roadmap in seconds.</p>
                                </div>
                            </div>
                        </div>
                        <div className="rounded-[2rem] border border-slate-200 bg-white/80 p-6 shadow-lg backdrop-blur">
                            <div className="flex items-center gap-3">
                                <div className="rounded-2xl bg-blue-50 p-3 text-blue-600">
                                    <FiPhone />
                                </div>
                                <div>
                                    <p className="text-sm font-medium text-slate-500">What you get</p>
                                    <p className="text-lg font-semibold text-slate-900">Website, marketing, and growth priorities</p>
                                </div>
                            </div>
                        </div>
                        {loading && <Loader />}
                        {error && <div className="rounded-2xl border border-red-200 bg-red-50 p-4 text-sm text-red-600">{error}</div>}
                    </div>
                </div>

                <div className="mt-10">
                    <AIRecommendation recommendation={recommendation} loading={loading} error={error} />
                </div>
            </div>
        </section>
    );
}
