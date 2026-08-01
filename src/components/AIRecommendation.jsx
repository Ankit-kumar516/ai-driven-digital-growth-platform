export default function AIRecommendation({ recommendation, loading, error }) {
    if (!recommendation && !loading && !error) {
        return (
            <div className="rounded-[2rem] border border-dashed border-slate-300 bg-white/70 p-10 text-center shadow-sm">
                <p className="text-lg font-semibold text-slate-800">Your AI recommendations will appear here.</p>
                <p className="mt-2 text-sm text-slate-500">Fill the form and submit to get a tailored growth plan.</p>
            </div>
        );
    }

    if (loading) return null;

    if (!recommendation) return null;

    const cards = [
        { title: "Business Summary", content: recommendation.businessSummary },
        { title: "Website Recommendation", content: recommendation.websiteRecommendation },
        { title: "Marketing Recommendation", content: recommendation.marketingRecommendation },
        { title: "Estimated Cost", content: recommendation.estimatedCost },
        { title: "Priority", content: recommendation.priority },
    ];

    return (
        <div className="rounded-[2rem] border border-slate-200 bg-white/90 p-6 shadow-xl shadow-slate-200 backdrop-blur-xl sm:p-8">
            <div className="mb-6 flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
                <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">AI Growth Plan</p>
                    <h3 className="text-2xl font-semibold text-slate-900">Your tailored digital growth blueprint</h3>
                </div>
            </div>

            <div className="grid gap-4 lg:grid-cols-2">
                {cards.map((card) => (
                    <div key={card.title} className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                        <h4 className="text-lg font-semibold text-slate-900">{card.title}</h4>
                        <p className="mt-3 text-sm leading-7 text-slate-600">{card.content}</p>
                    </div>
                ))}
            </div>

            <div className="mt-6 rounded-2xl border border-blue-100 bg-blue-50 p-5">
                <h4 className="text-lg font-semibold text-slate-900">Next Steps</h4>
                <ul className="mt-3 space-y-2 text-sm text-slate-700">
                    {recommendation.nextSteps.map((step) => (
                        <li key={step} className="flex gap-2">
                            <span className="mt-1 h-2.5 w-2.5 rounded-full bg-blue-600" />
                            <span>{step}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
