export default function Button({ children, variant = "primary", className = "", ...props }) {
    const baseClasses = "inline-flex items-center justify-center rounded-full px-5 py-3 font-semibold transition duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2";

    const variants = {
        primary: "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-200 hover:shadow-xl hover:scale-[1.02] focus:ring-blue-500",
        secondary: "border border-slate-200 bg-white text-slate-700 hover:border-blue-200 hover:text-blue-700 focus:ring-blue-400",
        ghost: "bg-transparent text-slate-700 hover:bg-slate-100 focus:ring-slate-300",
    };

    return (
        <button className={`${baseClasses} ${variants[variant]} ${className}`} {...props}>
            {children}
        </button>
    );
}
