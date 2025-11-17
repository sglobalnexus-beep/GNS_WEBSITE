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
      {/* Top bar / logo */}
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
            <a href="#quote" className="hover:text-emerald-400">
              Request a quote
            </a>
          </nav>
        </div>
      </header>

      {/* Hero / intro */}
      <main className="max-w-5xl mx-auto px-4 py-10 space-y-12">
        <section className="grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <h1 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">
              Capacity you can trust.{" "}
              <span className="text-emerald-400">Visibility you need.</span>
            </h1>
            <p className="text-slate-300 text-sm md:text-base mb-4">
              Global Nexus Shipping connects shippers with reliable truckload,
              LTL, and intermodal capacity across North America. Get fast,
              accurate quotes and hands-on support on every load.
            </p>
            <ul className="text-slate-300 text-sm space-y-1 mb-6">
              <li>• Full truckload &amp; LTL</li>
              <li>• Time-sensitive &amp; dedicated lanes</li>
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

        {/* Services */}
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
                for a full trailer.
              </p>
            </div>
            <div className="border border-slate-800 rounded-xl p-4 bg-slate-900/40">
              <h3 className="font-semibold mb-2">Time-sensitive</h3>
              <p className="text-slate-300">
                Expedited and time-critical solutions for freight that simply
                cannot be late.
              </p>
            </div>
          </div>
        </section>

        {/* Quote form */}
        <section
          id="quote"
          className="border border-slate-800 rounded-2xl p-6 bg-slate-900/40"
        >
          <h2 className="text-xl font-semibold mb-2">
            Request a freight quote
          </h2>
          <p className="text-sm text-slate-300 mb-4">
            Share a few details about your shipment and we&apos;ll follow up
            with pricing and options.
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
              <p className="text-xs text-emerald-400">
                Thank you — your request was sent. We&apos;ll follow up shortly.
              </p>
            )}
            {status === "error" && (
              <p className="text-xs text-rose-400">
                Something went wrong sending your request. Please try again, or
                email us directly.
              </p>
            )}
          </form>
        </section>

        <footer className="py-4 text-xs text-slate-500">
          &copy; {new Date().getFullYear()} Global Nexus Shipping. All rights
          reserved.
        </footer>
      </main>
    </div>
  );
}

export default App;
