export default function FeatureCard({
  icon,
  title,
  description,
}) {
  return (
    <div
      className="
      bg-white
      rounded-3xl
      p-8
      shadow-sm
      hover:shadow-xl
      hover:-translate-y-2
      transition
      duration-300
      border
      border-slate-100"
    >
      <div
        className="
        w-16
        h-16
        rounded-2xl
        bg-blue-100
        text-blue-600
        flex
        items-center
        justify-center
        text-3xl"
      >
        {icon}
      </div>

      <h3 className="mt-6 text-2xl font-bold">
        {title}
      </h3>

      <p className="mt-4 text-slate-600 leading-7">
        {description}
      </p>
    </div>
  );
}