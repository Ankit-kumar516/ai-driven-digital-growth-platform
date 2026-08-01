const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export const getAIRecommendation = async (formData) => {
  await delay(2000);

  const budget = Number(formData.budget || 0);
  const websiteRecommendation = formData.website === "No"
    ? "Launch a polished, mobile-friendly website with clear service pages and a lead collection form."
    : "Improve the existing site with faster load speed, stronger SEO, and better conversion design.";

  const marketingRecommendation = formData.marketing === "No"
    ? "Start with local SEO, Google Business Profile updates, and simple social posts to build visibility."
    : "Focus on Google Ads, Instagram Reels, content marketing, and referral campaigns for measurable growth.";

  return {
    businessSummary: `Based on ${formData.category || "your business"} operating in ${formData.location || "your area"}, the strongest opportunity is to improve visibility, trust, and conversion with a practical digital growth plan.`,
    websiteRecommendation,
    marketingRecommendation,
    estimatedCost: `₹${budget > 0 ? budget : 15000} for a strong launch and optimization setup`,
    priority: budget > 20000 ? "High Impact" : "Balanced Growth",
    nextSteps: [
      "Define a stronger homepage message and call-to-action",
      "Improve local SEO and business listings",
      "Launch a simple content and referral funnel",
    ],
  };
};