import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import CustomerForm from "../components/CustomerForm";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Navbar />
      <Hero />
      <CustomerForm />
      <Footer />
    </div>
  );
}