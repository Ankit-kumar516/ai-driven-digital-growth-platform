import {
  FaChartLine,
  FaBullhorn,
  FaRobot,
  FaGlobe,
} from "react-icons/fa";

import FeatureCard from "./FeatureCard";
import Counter from "./Counter";
import Reveal from "./Reveal";

const features = [
  {
    title: "AI Business Analysis",
    icon: <FaRobot />,
    description:
      "Analyze business challenges using AI and discover opportunities for rapid growth.",
  },
  {
    title: "Website Recommendation",
    icon: <FaGlobe />,
    description:
      "Receive personalized recommendations to improve your digital presence.",
  },
  {
    title: "Digital Marketing Strategy",
    icon: <FaBullhorn />,
    description:
      "Generate modern marketing strategies powered by AI insights.",
  },
  {
    title: "Growth Insights",
    icon: <FaChartLine />,
    description:
      "Understand customer behavior and unlock business growth opportunities.",
  },
];

export default function Features() {
  return (
    <section
      id="features"
      className="py-24 bg-slate-50"
    >
      <div className="max-w-7xl mx-auto px-6">
        <Reveal>
          <div className="text-center">
            <span className="text-blue-600 font-semibold">
              FEATURES
            </span>

            <h2 className="text-4xl font-bold mt-3">
              Everything You Need
            </h2>

            <p className="text-slate-600 mt-5 max-w-2xl mx-auto">
              AI-driven solutions to help businesses
              grow faster and smarter.
            </p>
          </div>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          {features.map((feature) => (
            <Reveal key={feature.title}>
              <FeatureCard {...feature} />
            </Reveal>
          ))}
        </div>

        {/* Statistics */}

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-24">
          <Reveal>
            <div className="text-center">
              <Counter end={500} suffix="+" />
              <p className="mt-3 text-slate-600">
                Businesses
              </p>
            </div>
          </Reveal>

          <Reveal>
            <div className="text-center">
              <Counter end={98} suffix="%" />
              <p className="mt-3 text-slate-600">
                Success Rate
              </p>
            </div>
          </Reveal>

          <Reveal>
            <div className="text-center">
              <Counter end={120} suffix="+" />
              <p className="mt-3 text-slate-600">
                AI Reports
              </p>
            </div>
          </Reveal>

          <Reveal>
            <div className="text-center">
              <Counter end={24} suffix="/7" />
              <p className="mt-3 text-slate-600">
                Support
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}