export default function ResultCard({ title, children }) {
  return (
    <div
      className="
      bg-white
      rounded-3xl
      p-7
      shadow-md
      hover:shadow-xl
      transition"
    >
      <h3 className="text-xl font-bold text-blue-600 mb-5">
        {title}
      </h3>

      {children}
    </div>
  );
}