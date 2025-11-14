import React from "react";

function App() {
  const handleQuoteSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const subject = `New freight inquiry from ${formData.get("name") || "Global Nexus Shipping website"}`;

    const bodyLines = [
      `Name: ${formData.get("name") || ""}`,
      `Company: ${formData.get("company") || ""}`,
      `Email: ${formData.get("email") || ""}`,
      `Phone: ${formData.get("phone") || ""}`,
      "",
      `Origin: ${formData.get("origin") || ""}`,
      `Destination: ${formData.get("destination") || ""}`,
      `Mode: ${formData.get("mode") || ""}`,
      "",
      "Freight details:",
      `${formData.get("details") || ""}`
    ];

    const params = new URLSearchParams({
      subject,
      body: bodyLines.join("\n")
    });

    window.location.href = `mailto:sglobalnexus@gmail.com?${params.toString()}`;
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      {/* Top nav */}
      <header className="border-b border-slate-800 bg-slate-950/80 backdrop-blur sticky top-0 z-20">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-emerald-400 to-cyan-500 flex items-center justify-center font-bold text-slate-950">
              GN
            </div>
            <div>
              <div className="font-semibold tracking-tight">
                Global Nexus Shipping
              </div>
              <div className="text-xs text-slate-400">
                Freight Brokerage & Logistics
              </div>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-6 text-sm text-slate-300">
            <a href="#services" className="hover:text-emerald-400">Services</a>
            <a href="#industries" className="hover:text-emerald-400">Industries</a>
            <a href="#process" className="hover:text-emerald-400">How it works</a>
            <a href="#contact" className="hover:text-emerald-400">Contact</a>
          </nav>

          <a
            href="#contact"
            className="hidden sm:inline-flex items-center rounded-full border border-emerald-400/70 px-4 py-1.5 text-sm font-medium hover:bg-emerald-400 hover:text-slate-950 transition"
          >
            Get a quote
          </a>
        </div>
      </header>

      {/* Hero */}
      <main className="max-w-6xl mx-auto px-4 pb-16">
        <section className="pt-10 pb-12 md:pt-16 md:pb-20 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-xs font-semibold tracking-[0.2em] text-emerald-400 uppercase mb-3">
              Freight Brokerage • North America
            </p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight mb-4">
              Reliable freight capacity,
              <span className="text-emerald-400"> without the hassle.</span>
            </h1>
            <p className="text-slate-300 text-sm md:text-base mb-6 max-w-xl">
              Global Nexus Shipping connects your freight with trusted carriers,
              so you get on-time, trackable deliveries—without spending all day
              chasing trucks and rates.
            </p>
            <div className="flex flex-wrap gap-3 mb-5">
              <a
                href="#contact"
                className="inline-flex items-center rounded-full bg-emerald-400 px-5 py-2 text-sm font-semibold text-slate-950 shadow-lg shadow-emerald-500/25 hover:bg-emerald-300 transition"
              >
                Request a quote
              </a>
              <a
                href="mailto:sglobalnexus@gmail.com"
                className="inline-flex items-center rounded-full border border-slate-600 px-5 py-2 text-sm font-medium text-slate-100 hover:border-emerald-400 hover:text-emerald-300 transition"
              >
                Email: sglobalnexus@gmail.com
              </a>
            </div>
            <p className="text-xs text-slate-400">
              Fast response from a real person. No call centers, no endless menus.
            </p>
          </div>

          <div className="md:pl-6">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4 md:p-5 shadow-xl shadow-slate-950/60">
              <p className="text-xs font-semibold text-emerald-400 mb-2">
                At-a-glance
              </p>
              <ul className="space-y-3 text-sm text-slate-200">
                <li className="flex justify-between">
                  <span>Primary lanes</span>
                  <span className="text-slate-400">U.S. & Canada</span>
                </li>
                <li className="flex justify-between">
                  <span>Modes</span>
                  <span className="text-slate-400">FTL • LTL • Expedited</span>
                </li>
                <li className="flex justify-between">
                  <span>Shipper size</span>
                  <span className="text-slate-400">Small & mid-market</span>
                </li>
                <li className="flex justify-between">
                  <span>Response time</span>
                  <span className="text-slate-400">Same-day on most quotes</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Services */}
        <section id="services" className="py-10 border-t border-slate-800">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-6">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight mb-2">
                Freight services
              </h2>
              <p className="text-sm text-slate-300 max-w-xl">
                Capacity for the shipments you move every week—from full
                truckloads to last-minute hotshot runs.
              </p>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            <ServiceCard
              title="Full Truckload (FTL)"
              body="Dry van, reefer, and flatbed coverage for regional and long-haul lanes. One point of contact from quote to delivery."
            />
            <ServiceCard
              title="Less-Than-Truckload (LTL)"
              body="Consolidated freight solutions for palletized shipments—ideal for growing shippers who don’t always fill a trailer."
            />
            <ServiceCard
              title="Expedited & Hotshot"
              body="Time-critical shipments when every hour matters. We move fast so your freight does too."
            />
            <ServiceCard
              title="Dedicated & Contract"
              body="If you run the same lanes again and again, we’ll help you lock in reliable capacity and predictable pricing."
            />
            <ServiceCard
              title="Cross-border"
              body="Support for U.S.–Canada moves with guidance on transit times and documentation requirements."
            />
            <ServiceCard
              title="Project & Oversized"
              body="Special handling for construction, industrial, and oversized freight, with careful planning and carrier selection."
            />
          </div>
        </section>

        {/* Why us */}
        <section className="py-10 border-t border-slate-800">
          <h2 className="text-2xl font-semibold tracking-tight mb-4">
            Why shippers choose Global Nexus Shipping
          </h2>
          <div className="grid md:grid-cols-3 gap-5 text-sm">
            <FeatureCard
              title="Owner-driven attention"
              body="You work directly with decision-makers, not a rotating support queue. We learn your lanes, preferences, and constraints."
            />
            <FeatureCard
              title="Carrier relationships"
              body="We build long-term partnerships with reliable carriers so your freight gets priority, even when capacity is tight."
            />
            <FeatureCard
              title="Clear communication"
              body="Proactive updates and honest ETAs. If something changes on the road, you hear it from us—before your customer does."
            />
          </div>
        </section>

        {/* Industries */}
        <section id="industries" className="py-10 border-t border-slate-800">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-6">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight mb-2">
                Industries we support
              </h2>
              <p className="text-sm text-slate-300 max-w-xl">
                We specialize in freight that needs to move reliably, with
                minimal drama and strong communication.
              </p>
            </div>
          </div>
          <div className="grid md:grid-cols-4 gap-4 text-sm">
            <IndustryPill label="Food & beverage (shelf-stable)" />
            <IndustryPill label="Retail & e-commerce" />
            <IndustryPill label="Construction & building materials" />
            <IndustryPill label="Industrial & manufacturing" />
            <IndustryPill label="Consumer packaged goods" />
            <IndustryPill label="Automotive parts" />
            <IndustryPill label="Trade show & events" />
            <IndustryPill label="General dry freight" />
          </div>
        </section>

        {/* Process */}
        <section id="process" className="py-10 border-t border-slate-800">
          <h2 className="text-2xl font-semibold tracking-tight mb-4">
            Simple process, from quote to delivery
          </h2>
          <ol className="grid md:grid-cols-3 gap-5 text-sm">
            <StepCard
              step="01"
              title="Share your shipment details"
              body="Origin, destination, timing, and any special handling. Use the form below or email us directly."
            />
            <StepCard
              step="02"
              title="We match you with the right carrier"
              body="We source capacity from our network and come back with options that balance rate, service, and timing."
            />
            <StepCard
              step="03"
              title="Ship, track, and deliver"
              body="We coordinate pickup, monitor transit, and keep you updated through delivery, with PODs on request."
            />
          </ol>
        </section>

        {/* Contact / Quote form */}
        <section
          id="contact"
          className="py-12 mt-4 border-t border-slate-800 grid lg:grid-cols-2 gap-8"
        >
          <div>
            <h2 className="text-2xl font-semibold tracking-tight mb-3">
              Request a quote
            </h2>
            <p className="text-sm text-slate-300 mb-4 max-w-md">
              Send us your shipment details and we’ll follow up with pricing and
              options. For urgent loads, mention timing in the message.
            </p>
            <div className="text-sm mb-4">
              <p className="text-slate-300 mb-1">Direct contact:</p>
              <a
                href="mailto:sglobalnexus@gmail.com"
                className="text-emerald-400 hover:text-emerald-300"
              >
                sglobalnexus@gmail.com
              </a>
            </div>
            <p className="text-xs text-slate-500">
              By sending an email, you agree we can contact you about your
              freight needs. We don’t sell or share your information.
            </p>
          </div>

          <div className="lg:pl-4">
            <form
              onSubmit={handleQuoteSubmit}
              className="space-y-4 rounded-2xl border border-slate-800 bg-slate-900/70 p-5 text-sm"
            >
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block mb-1 text-slate-200">
                    Name
                  </label>
                  <input
                    name="name"
                    type="text"
                    className="w-full rounded-md bg-slate-950 border border-slate-700 px-3 py-2 text-slate-100 text-sm focus:outline-none focus:border-emerald-400"
                    required
                  />
                </div>
                <div>
                  <label className="block mb-1 text-slate-200">
                    Company (optional)
                  </label>
                  <input
                    name="company"
                    type="text"
                    className="w-full rounded-md bg-slate-950 border border-slate-700 px-3 py-2 text-slate-100 text-sm focus:outline-none focus:border-emerald-400"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block mb-1 text-slate-200">
                    Email
                  </label>
                  <input
                    name="email"
                    type="email"
                    className="w-full rounded-md bg-slate-950 border border-slate-700 px-3 py-2 text-slate-100 text-sm focus:outline-none focus:border-emerald-400"
                    required
                  />
                </div>
                <div>
                  <label className="block mb-1 text-slate-200">
                    Phone (optional)
                  </label>
                  <input
                    name="phone"
                    type="tel"
                    className="w-full rounded-md bg-slate-950 border border-slate-700 px-3 py-2 text-slate-100 text-sm focus:outline-none focus:border-emerald-400"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block mb-1 text-slate-200">
                    Origin city / state
                  </label>
                  <input
                    name="origin"
                    type="text"
                    className="w-full rounded-md bg-slate-950 border border-slate-700 px-3 py-2 text-slate-100 text-sm focus:outline-none focus:border-emerald-400"
                  />
                </div>
                <div>
                  <label className="block mb-1 text-slate-200">
                    Destination city / state
                  </label>
                  <input
                    name="destination"
                    type="text"
                    className="w-full rounded-md bg-slate-950 border border-slate-700 px-3 py-2 text-slate-100 text-sm focus:outline-none focus:border-emerald-400"
                  />
                </div>
              </div>

              <div>
                <label className="block mb-1 text-slate-200">
                  Mode
                </label>
                <select
                  name="mode"
                  className="w-full rounded-md bg-slate-950 border border-slate-700 px-3 py-2 text-slate-100 text-sm focus:outline-none focus:border-emerald-400"
                >
                  <option value="">Select an option</option>
                  <option>Full Truckload (FTL)</option>
                  <option>Less-Than-Truckload (LTL)</option>
                  <option>Expedited / Hotshot</option>
                  <option>Dedicated / Contract</option>
                  <option>Cross-border</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label className="block mb-1 text-slate-200">
                  Freight details
                </label>
                <textarea
                  name="details"
                  rows="4"
                  placeholder="Pallet count, weight, commodity, timing, special requirements…"
                  className="w-full rounded-md bg-slate-950 border border-slate-700 px-3 py-2 text-slate-100 text-sm focus:outline-none focus:border-emerald-400"
                ></textarea>
              </div>

              <button
                type="submit"
                className="inline-flex items-center justify-center w-full rounded-full bg-emerald-400 px-5 py-2.5 text-sm font-semibold text-slate-950 shadow-lg shadow-emerald-500/25 hover:bg-emerald-300 transition"
              >
                Open email with my quote request
              </button>

              <p className="text-[11px] text-slate-500 mt-1">
                This button opens your email app with all details pre-filled,
                addressed to <span className="text-emerald-400">sglobalnexus@gmail.com</span>.
              </p>
            </form>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-800 py-5 text-xs text-slate-500">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between gap-2">
          <p>© {new Date().getFullYear()} Global Nexus Shipping. All rights reserved.</p>
          <p>Freight brokerage & logistics services.</p>
        </div>
      </footer>
    </div>
  );
}

function ServiceCard({ title, body }) {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4">
      <h3 className="font-semibold mb-1 text-slate-50">{title}</h3>
      <p className="text-xs text-slate-300">{body}</p>
    </div>
  );
}

function FeatureCard({ title, body }) {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4">
      <h3 className="font-semibold mb-1 text-slate-50">{title}</h3>
      <p className="text-xs text-slate-300">{body}</p>
    </div>
  );
}

function IndustryPill({ label }) {
  return (
    <div className="rounded-full border border-slate-700 bg-slate-900/40 px-3 py-2 text-xs text-slate-200">
      {label}
    </div>
  );
}

function StepCard({ step, title, body }) {
  return (
    <li className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4">
      <div className="text-[10px] font-semibold tracking-[0.2em] uppercase text-emerald-400 mb-1">
        Step {step}
      </div>
      <h3 className="font-semibold text-slate-50 mb-1">{title}</h3>
      <p className="text-xs text-slate-300">{body}</p>
    </li>
  );
}

export default App;
