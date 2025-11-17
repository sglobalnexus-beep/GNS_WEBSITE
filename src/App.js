import React, { useState } from "react";
import "./index.css";

function App() {
  const [status, setStatus] = useState(null);

  const handleQuoteSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    const form = e.target;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/mdkybolv", {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: formData,
      });

      if (response.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      {/* Header */}
      <header className="border-b border-slate-800">
        <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-500 text-slate-950 font-bold">
              GNS
            </span>
            <div className="leading-tight">
              <div className="font-semibold tracking-tight">
                Global Nexus Shipping
              </div>
              <div className="text-xs text-slate-400">
                Freight brokerage · North America
              </div>
            </div>
          </div>
          <nav className="hidden sm:flex gap-6 text-sm text-slate-300">
            <a href="#services" className="hover:text-emerald-400">
              Services
            </a>
            <a href="#shippers" className="hover:text-emerald-400">
              Shippers
            </a>
            <a href="#carriers" className="hover:text-emerald-400">
              Carriers
            </a>
            <a href="#about" className="hover:text-emerald-400">
              About
            </a>
            <a href="#quote" className="hover:text-emerald-400">
              Request Quote
            </a>
          </nav>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 py-10 space-y-12">
        {/* Hero */}
        <section className="grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <h1 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">
              Capacity you can trust.{" "}
              <span className="text-emerald-400">Visibility you need.</span>
            </h1>
            <p className="text-slate-300 text-sm md:text-base mb-4">
              Global Nexus Shipping connects shippers with reliable truckload,
              LTL, and time-sensitive capacity across North America. Get fast,
              accurate quotes and hands-on support on every load.
            </p>
            <ul className="text-slate-300 text-sm space-y-1 mb-6">
              <li>• Full truckload &amp; LTL</li>
              <li>• Same-day and next-day LTL within 500 miles</li>
              <li>• Single point of contact for every shipment</li>
            </ul>
            <a
              href="#quote"
              className="inline-flex items-center justify-center rounded-md bg-emerald-500 px-4 py-2 text-sm font-medium text-slate-950 hover:bg-emerald-400"
            >
              Request a freight quote
            </a>
          </div>

          <div className="border border-slate-800 rounded-xl p-4 bg-slate-900/40">
            <h2 className="text-lg font-semibold mb-3">
              Why work with Global Nexus Shipping?
            </h2>
            <ul className="text-sm text-slate-300 space-y-2">
              <li>✓ Carrier relationships built on reliability and safety</li>
              <li>✓ Direct communication: no call centers, no confusion</li>
              <li>✓ Transparent pricing and status updates on every load</li>
            </ul>
          </div>
        </section>

        {/* Core Services */}
        <section id="services">
          <h2 className="text-xl font-semibold mb-4">Core services</h2>
          <div className="grid gap-4 md:grid-cols-3 text-sm">
            <div className="border border-slate-800 rounded-xl p-4 bg-slate-900/40">
              <h3 className="font-semibold mb-2">Truckload (FTL)</h3>
              <p className="text-slate-300">
                Dry van, reefer, and flatbed capacity for full truckload
                shipments across regional and long-haul lanes.
              </p>
            </div>
            <div className="border border-slate-800 rounded-xl p-4 bg-slate-900/40">
              <h3 className="font-semibold mb-2">Less-Than-Truckload (LTL)</h3>
              <p className="text-slate-300">
                Cost-effective options for palletized freight without paying
                for a full trailer, with same-day/next-day options under 500
                miles where capacity allows.
              </p>
            </div>
            <div className="border border-slate-800 rounded-xl p-4 bg-slate-900/40">
              <h3 className="font-semibold mb-2">Time-sensitive</h3>
              <p className="text-slate-300">
                Expedited and time-critical solutions for freight that cannot
                be late, with proactive updates from pickup to delivery.
              </p>
            </div>
          </div>
        </section>

        {/* Shippers */}
        <section id="shippers" className="mt-20">
          <h2 className="text-2xl font-semibold mb-4">For Shippers</h2>

          <p className="text-slate-300 text-sm mb-4 leading-relaxed">
            Whether you're moving a single pallet or recurring truckload
            volume, Global Nexus Shipping provides dependable capacity and clear
            communication on every shipment. We focus on lanes where we can
            consistently execute, not on trying to be everything to everyone.
          </p>

          <div className="grid gap-4 md:grid-cols-3 text-sm">
            <div className="border border-slate-800 rounded-xl p-4 bg-slate-900/40">
              <h3 className="font-semibold mb-2">Truckload &amp; LTL</h3>
              <p className="text-slate-300">
                Dry van, reefer, flatbed, and LTL options for regional and
                long-haul freight across the U.S. and Canada.
              </p>
            </div>

            <div className="border border-slate-800 rounded-xl p-4 bg-slate-900/40">
              <h3 className="font-semibold mb-2">Same-Day LTL (≤ 500 miles)</h3>
              <p className="text-slate-300">
                Time-sensitive LTL shipments with same-day and next-day delivery
                options within a 500-mile radius, where capacity and transit
                allow.
              </p>
            </div>

            <div className="border border-slate-800 rounded-xl p-4 bg-slate-900/40">
              <h3 className="font-semibold mb-2">Single Point of Contact</h3>
              <p className="text-slate-300">
                One dedicated point of contact for quoting, scheduling,
                tracking, and delivery confirmation—no call centers or
                passed-around calls.
              </p>
            </div>
          </div>

          <p className="text-slate-300 text-sm mt-4 leading-relaxed">
            Share your lane details and service requirements, and we'll come
            back with clear options and honest pricing.
          </p>

          <a
            href="#quote"
            className="inline-flex mt-4 items-center justify-center rounded-md bg-emerald-500 px-4 py-2 text-sm font-medium text-slate-950 hover:bg-emerald-400"
          >
            Request a freight quote
          </a>
        </section>

        {/* Carriers */}
        <section id="carriers" className="mt-20">
          <h2 className="text-2xl font-semibold mb-4">For Carriers</h2>

          <p className="text-slate-300 text-sm mb-4 leading-relaxed">
            We build long-term relationships with carriers who value clear
            communication, fair treatment, and consistent freight. If you run
            dry van, reefer, flatbed, hotshot, or dedicated equipment, we want
            to hear about your preferred lanes and schedule.
          </p>

          <div className="grid gap-4 md:grid-cols-3 text-sm">
            <div className="border border-slate-800 rounded-xl p-4 bg-slate-900/40">
              <h3 className="font-semibold mb-2">Consistent Lanes</h3>
              <p className="text-slate-300">
                Opportunities for repeat lanes and steady freight with shippers
                who value reliability and performance.
              </p>
            </div>

            <div className="border border-slate-800 rounded-xl p-4 bg-slate-900/40">
              <h3 className="font-semibold mb-2">Straightforward Communication</h3>
              <p className="text-slate-300">
                Direct access to decision-makers, fast answers on loads, and no
                over-promising on rates or freight.
              </p>
            </div>

            <div className="border border-slate-800 rounded-xl p-4 bg-slate-900/40">
              <h3 className="font-semibold mb-2">Quick Pay Friendly</h3>
              <p className="text-slate-300">
                We work with factoring and quick pay options so you can keep
                trucks moving and cash flow steady.
              </p>
            </div>
          </div>

          <p className="text-slate-300 text-sm mt-4 leading-relaxed">
            To start the onboarding process, share your MC/DOT, equipment type,
            preferred lanes, and insurance details. We'll reach out as new
            opportunities match your profile.
          </p>

          <a
            href="#quote"
            className="inline-flex mt-4 items-center justify-center rounded-md bg-emerald-500 px-4 py-2 text-sm font-medium text-slate-950 hover:bg-emerald-400"
          >
            Register your interest as a carrier
          </a>
        </section>

        {/* About */}
        <section id="about" className="mt-20">
          <h2 className="text-2xl font-semibold mb-4">
            About Global Nexus Shipping
          </h2>

          <p className="text-slate-300 text-sm mb-4 leading-relaxed">
            Global Nexus Shipping connects shippers with dependable
            transportation capacity across the U.S. and Canada. We specialize
            in providing fast, reliable truckload and LTL solutions, including{" "}
            <span className="text-emerald-400 font-medium">
              same-day and next-day delivery options on LTL freight within a
              500-mile radius.
            </span>
          </p>

          <p className="text-slate-300 text-sm mb-4 leading-relaxed">
            Our network includes dry van, reefer, flatbed, and specialized
            carriers vetted for safety, performance, and consistency. We support
            industries such as manufacturing, distribution, food and beverage,
            building materials, e-commerce, and regional supply chains.
          </p>

          <p className="text-slate-300 text-sm mb-4 leading-relaxed">
            At Global Nexus Shipping, we believe freight should move without
            friction. That means clear expectations, honest pricing, and real
            accountability—not just technology or empty claims. Every customer
            receives a dedicated point of contact for planning, carrier
            selection, tracking, and delivery confirmation.
          </p>

          <p className="text-slate-300 text-sm leading-relaxed">
            Our commitment is simple:{" "}
            <span className="text-emerald-400 font-medium">
              deliver every load with integrity, precision, and the
              responsiveness today's supply chains demand.
            </span>
          </p>
        </section>

        {/* Quote form */}
        <section
          id="quote"
          className="mt-20 border border-slate-800 rounded-2xl p-6 bg-slate-900/40"
        >
          <h2 className="text-xl font-semibold mb-2">
            Request a freight quote
          </h2>
          <p className="text-sm text-slate-300 mb-4">
            Share a few details about your shipment and we'll follow up with
            pricing and options.
          </p>

          <form onSubmit={handleQuoteSubmit} className="space-y-4">
            {/* Contact info */}
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-1">
                <label className="block text-xs text-slate-300" htmlFor="name">
                  Name *
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="w-full rounded-md bg-slate-900 border border-slate-700 px-3 py-2 text-sm text-slate-50 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  placeholder="Your full name"
                />
              </div>

              <div className="space-y-1">
                <label
                  className="block text-xs text-slate-300"
                  htmlFor="company"
                >
                  Company
                </label>
                <input
                  id="company"
                  name="company"
                  type="text"
                  className="w-full rounded-md bg-slate-900 border border-slate-700 px-3 py-2 text-sm text-slate-50 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  placeholder="Company name"
                />
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-1">
                <label
                  className="block text-xs text-slate-300"
                  htmlFor="email"
                >
                  Email *
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="w-full rounded-md bg-slate-900 border border-slate-700 px-3 py-2 text-sm text-slate-50 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  placeholder="you@example.com"
                />
              </div>

              <div className="space-y-1">
                <label
                  className="block text-xs text-slate-300"
                  htmlFor="phone"
                >
                  Phone
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  className="w-full rounded-md bg-slate-900 border border-slate-700 px-3 py-2 text-sm text-slate-50 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  placeholder="+1 (555) 000-0000"
                />
              </div>
            </div>

            {/* Shipment details */}
            <div className="grid gap-4 md:grid-cols-3">
              <div className="space-y-1">
                <label
                  className="block text-xs text-slate-300"
                  htmlFor="origin"
                >
                  Origin *
                </label>
                <input
                  id="origin"
                  name="origin"
                  type="text"
                  required
                  className="w-full rounded-md bg-slate-900 border border-slate-700 px-3 py-2 text-sm text-slate-50 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  placeholder="City, State"
                />
              </div>

              <div className="space-y-1">
                <label
                  className="block text-xs text-slate-300"
                  htmlFor="destination"
                >
                  Destination *
                </label>
                <input
                  id="destination"
                  name="destination"
                  type="text"
                  required
                  className="w-full rounded-md bg-slate-900 border border-slate-700 px-3 py-2 text-sm text-slate-50 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  placeholder="City, State"
                />
              </div>

              <div className="space-y-1">
                <label className="block text-xs text-slate-300" htmlFor="mode">
                  Mode
                </label>
                <select
                  id="mode"
                  name="mode"
                  className="w-full rounded-md bg-slate-900 border border-slate-700 px-3 py-2 text-sm text-slate-50 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  defaultValue="Truckload"
                >
                  <option>Truckload</option>
                  <option>LTL</option>
                  <option>Flatbed</option>
                  <option>Reefer</option>
                  <option>Other</option>
                </select>
              </div>
            </div>

            <div className="space-y-1">
              <label
                className="block text-xs text-slate-300"
                htmlFor="details"
              >
                Freight details *
              </label>
              <textarea
                id="details"
                name="details"
                required
                rows="4"
                className="w-full rounded-md bg-slate-900 border border-slate-700 px-3 py-2 text-sm text-slate-50 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                placeholder="Pallet count, weight, commodity, pickup date, special handling, etc."
              ></textarea>
            </div>

            {/* Optional: hidden subject for your email */}
            <input
              type="hidden"
              name="_subject"
              value="New freight inquiry from GlobalNexusShipping.com"
            />

            <button
              type="submit"
              disabled={status === "loading"}
              className="inline-flex items-center justify-center rounded-md bg-emerald-500 px-4 py-2 text-sm font-medium text-slate-950 hover:bg-emerald-400 disabled:opacity-60 disabled:cursor-wait"
            >
              {status === "loading" ? "Sending..." : "Submit request"}
            </button>

            {status === "success" && (
              <p className="text-xs text-emerald-400 mt-2">
                Thank you — your request was sent. We'll follow up shortly.
              </p>
            )}
            {status === "error" && (
              <p className="text-xs text-rose-400 mt-2">
                Something went wrong sending your request. Please try again, or
                email us directly.
              </p>
            )}
          </form>
        </section>

        {/* Footer */}
        <footer className="mt-20 border-t border-slate-800 py-6 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Global Nexus Shipping LLC</p>
          <p>Seattle, Washington</p>
          <p>globalnexusshipping.com</p>
        </footer>
      </main>
    </div>
  );
}

export default App;
