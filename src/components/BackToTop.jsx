import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

export default function BackToTop() {

  const [show, setShow] = useState(false);

  useEffect(() => {

    const handleScroll = () => {
      setShow(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener("scroll", handleScroll);

  }, []);

  if (!show) return null;

  return (
    <button
      aria-label="Back to Top"
      onClick={() =>
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        })
      }
      className="
      fixed
      bottom-8
      right-8
      w-12
      h-12
      rounded-full
      bg-blue-600
      text-white
      shadow-lg
      hover:bg-blue-700
      hover:scale-110
      transition
      z-50"
    >
      <FaArrowUp className="mx-auto" />
    </button>
  );
}