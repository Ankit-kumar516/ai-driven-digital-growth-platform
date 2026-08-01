export default function SkeletonCard() {
  return (
    <div className="bg-white rounded-2xl p-6 shadow animate-pulse">
      <div className="h-5 bg-slate-200 rounded w-1/2"></div>

      <div className="h-4 bg-slate-200 rounded mt-5"></div>
      <div className="h-4 bg-slate-200 rounded mt-3"></div>
      <div className="h-4 bg-slate-200 rounded mt-3 w-2/3"></div>
    </div>
  );
}