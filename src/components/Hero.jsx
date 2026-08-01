import { FiArrowRight, FiBarChart2, FiGlobe } from "react-icons/fi";
import { FaMagic } from "react-icons/fa";
import Button from "./Button";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50 px-6 py-20 lg:px-8 lg:py-28">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.16),_transparent_40%)]" />
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
        <div className="max-w-2xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700">
            <FaMagic />
            AI-powered growth for modern businesses
          </div>
          <h1 className="text-4xl font-semibold leading-tight text-slate-900 sm:text-5xl lg:text-6xl">
            Grow your business with <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">intelligent recommendations</span>
          </h1>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            Understand your business challenges and receive tailored website, SEO, and marketing strategies designed for your growth.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button variant="primary" className="gap-2">
              Analyze My Business <FiArrowRight />
            </Button>
            <Button variant="secondary" className="gap-2">
              Learn More
            </Button>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {[
              { label: "Website Strategy", value: "+42%" },
              { label: "Lead Growth", value: "+3x" },
              { label: "Local Reach", value: "24/7" },
            ].map((item) => (
              <div key={item.label} className="rounded-2xl border border-slate-200 bg-white/80 p-4 shadow-sm backdrop-blur">
                <p className="text-2xl font-semibold text-slate-900">{item.value}</p>
                <p className="mt-1 text-sm text-slate-500">{item.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-blue-500/20 via-indigo-400/10 to-purple-400/20 blur-3xl" />
          <div className="relative overflow-hidden rounded-[2rem] border border-white/60 bg-white/70 p-6 shadow-2xl shadow-blue-100 backdrop-blur-xl">
            <div className="rounded-[1.5rem] bg-gradient-to-br from-blue-600 to-indigo-700 p-6 text-white">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-blue-100">Business Health</p>
                  <p className="mt-2 text-3xl font-semibold">87 / 100</p>
                </div>
                <div className="rounded-2xl bg-white/20 p-3">
                  <FiBarChart2 size={24} />
                </div>
              </div>
            </div>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <div className="flex items-center gap-2 text-blue-600">
                  <FiGlobe />
                  <span className="font-medium">Website</span>
                </div>
                <p className="mt-3 text-sm text-slate-600">Your online presence can reach more local customers with better structure and faster speed.</p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <div className="flex items-center gap-2 text-indigo-600">
                  <FaMagic />
                  <span className="font-medium">Marketing</span>
                </div>
                <p className="mt-3 text-sm text-slate-600">Personalized ideas for social campaigns, referrals, and customer attraction.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}