import { useState } from "react";
import { HiMenuAlt3, HiX } from "react-icons/hi";

const links = [
  { name: "Home", href: "#" },
  { name: "Features", href: "#features" },
  { name: "Analysis", href: "#analysis" },
  { name: "Contact", href: "#footer" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200">
      <nav className="max-w-7xl mx-auto px-6 lg:px-8 h-20 flex items-center justify-between">

        {/* Logo */}
        <a
          href="#"
          className="flex items-center gap-2 font-bold text-2xl text-blue-600"
        >
          <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center">
            AI
          </div>

          Growth
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">

          {links.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-slate-600 hover:text-blue-600 transition"
            >
              {item.name}
            </a>
          ))}

          <button className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition shadow-md">
            Get Started
          </button>

        </div>

        {/* Mobile */}

        <button
          className="md:hidden text-3xl"
          onClick={() => setOpen(!open)}
        >
          {open ? <HiX /> : <HiMenuAlt3 />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden bg-white border-t">

          {links.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block px-6 py-4 hover:bg-slate-100"
            >
              {item.name}
            </a>
          ))}

          <div className="p-5">
            <button className="w-full bg-blue-600 text-white py-3 rounded-xl">
              Get Started
            </button>
          </div>

        </div>
      )}
    </header>
  );
}