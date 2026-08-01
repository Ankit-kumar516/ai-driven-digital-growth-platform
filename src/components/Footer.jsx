import { FiInstagram, FiLinkedin, FiMail, FiPhone, FiTwitter } from "react-icons/fi";

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-slate-200 bg-white px-6 py-12 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
        <div>
          <div className="flex items-center gap-3 text-lg font-semibold text-slate-900">
            <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 text-white shadow-lg">
              AI
            </span>
            <span>GrowthPilot</span>
          </div>
          <p className="mt-4 max-w-md text-sm leading-7 text-slate-600">
            Modern digital growth guidance for small businesses ready to scale with confidence.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2">
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Quick Links</h4>
            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              <li><a href="#home" className="transition hover:text-blue-600">Home</a></li>
              <li><a href="#pricing" className="transition hover:text-blue-600">Pricing</a></li>
              <li><a href="#referral" className="transition hover:text-blue-600">Referral Program</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Contact</h4>
            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              <li className="flex items-center gap-2"><FiMail /> hello@growthpilot.ai</li>
              <li className="flex items-center gap-2"><FiPhone /> +91 98765 43210</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-8 flex max-w-7xl flex-col gap-4 border-t border-slate-200 pt-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-slate-500">© 2026 GrowthPilot. All rights reserved.</p>
        <div className="flex gap-3 text-slate-500">
          <a href="#" className="rounded-full border border-slate-200 p-2 transition hover:border-blue-200 hover:text-blue-600"><FiInstagram /></a>
          <a href="#" className="rounded-full border border-slate-200 p-2 transition hover:border-blue-200 hover:text-blue-600"><FiTwitter /></a>
          <a href="#" className="rounded-full border border-slate-200 p-2 transition hover:border-blue-200 hover:text-blue-600"><FiLinkedin /></a>
        </div>
      </div>
    </footer>
  );
}