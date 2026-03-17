export default function AvowIDSiteStarter() {
  const sections = [
    {
      title: "Identity Security for Modern Enterprises",
      body:
        "Deploy enterprise SSO, MFA, passwordless authentication, and conditional access with a platform designed to work alongside DriveStrike device intelligence.",
    },
    {
      title: "Device Trust Changes the Access Decision",
      body:
        "AvowID adds device-aware context to identity workflows so security teams can evaluate both the user and the endpoint before granting access.",
    },
    {
      title: "Built for Security and IT Teams",
      body:
        "Centralize authentication, streamline onboarding, and reduce risk with policy-based controls designed for operational scale.",
    },
  ];

  const features = [
    "Enterprise SSO",
    "Adaptive MFA",
    "Passwordless login",
    "Conditional access",
    "Device trust with DriveStrike",
    "Directory and app integrations",
  ];

  const compareRows = [
    ["Identity and access management", "Yes", "Yes"],
    ["Enterprise SSO and MFA", "Yes", "Yes"],
    ["Passwordless support", "Yes", "Varies by plan"],
    ["Device posture context via DriveStrike", "Native strategic advantage", "Typically external tooling"],
    ["Focused identity + endpoint trust story", "Yes", "Identity-first"],
  ];

  const faqs = [
    {
      q: "What is AvowID?",
      a: "AvowID is an identity platform for organizations that need secure authentication, streamlined access management, and stronger trust decisions informed by device context.",
    },
    {
      q: "How does AvowID relate to DriveStrike?",
      a: "AvowID is designed to complement DriveStrike MDM so access decisions can incorporate device trust and endpoint posture alongside identity controls.",
    },
    {
      q: "Who is AvowID for?",
      a: "AvowID is built for IT and security teams that want enterprise-grade identity controls without sacrificing operational clarity or extensibility.",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <div className="mx-auto max-w-7xl px-6 py-8">
        <header className="flex items-center justify-between rounded-3xl border border-white/10 bg-white/5 px-6 py-4 backdrop-blur">
          <div>
            <div className="text-xl font-semibold tracking-tight">AvowID</div>
            <div className="text-sm text-slate-400">Enterprise identity with device trust</div>
          </div>
          <div className="flex gap-3">
            <button className="rounded-2xl border border-white/15 px-4 py-2 text-sm font-medium text-slate-200 hover:bg-white/5">Request a Demo</button>
            <button className="rounded-2xl bg-white px-4 py-2 text-sm font-semibold text-slate-950">Sign Up</button>
          </div>
        </header>

        <main className="pt-10">
          <section className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div>
              <div className="mb-4 inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-1 text-sm text-cyan-200">
                Launch draft for avowidweb.vercel.app
              </div>
              <h1 className="max-w-4xl text-5xl font-semibold tracking-tight text-white md:text-6xl">
                Enterprise Identity, Strengthened by Device Trust
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
                AvowID secures workforce access with enterprise-grade authentication and deeper security context from DriveStrike integration, helping teams make better access decisions with fewer blind spots.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <button className="rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-white/10">
                  Sign Up
                </button>
                <button className="rounded-2xl border border-white/15 px-5 py-3 text-sm font-medium text-slate-100 hover:bg-white/5">
                  Request a Demo
                </button>
              </div>
              <div className="mt-8 flex flex-wrap gap-6 text-sm text-slate-400">
                <span>SSO</span>
                <span>MFA</span>
                <span>Passwordless</span>
                <span>Conditional Access</span>
                <span>Device Trust</span>
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-slate-900 to-slate-800 p-6 shadow-2xl shadow-cyan-950/20">
              <div className="rounded-3xl border border-cyan-400/20 bg-slate-900/80 p-5">
                <div className="text-sm font-medium text-cyan-200">Why AvowID</div>
                <div className="mt-3 text-2xl font-semibold text-white">Identity + endpoint trust in one security story</div>
                <div className="mt-4 space-y-3 text-sm leading-6 text-slate-300">
                  <p>Move beyond identity-only access decisions.</p>
                  <p>Use DriveStrike device intelligence to strengthen authentication and access policy outcomes.</p>
                  <p>Give security teams clearer signals, cleaner policy logic, and a more defensible enterprise access model.</p>
                </div>
              </div>
            </div>
          </section>

          <section className="mt-20 grid gap-6 md:grid-cols-3">
            {sections.map((section) => (
              <div key={section.title} className="rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-xl shadow-black/20">
                <h2 className="text-xl font-semibold text-white">{section.title}</h2>
                <p className="mt-3 text-sm leading-7 text-slate-300">{section.body}</p>
              </div>
            ))}
          </section>

          <section className="mt-20 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8">
              <div className="text-sm font-medium uppercase tracking-[0.2em] text-slate-400">Core capabilities</div>
              <h2 className="mt-3 text-3xl font-semibold text-white">A focused platform for enterprise identity operations</h2>
              <ul className="mt-6 space-y-4 text-slate-300">
                {features.map((feature) => (
                  <li key={feature} className="rounded-2xl border border-white/10 bg-slate-900/70 px-4 py-3">
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8">
              <div className="text-sm font-medium uppercase tracking-[0.2em] text-slate-400">Positioning</div>
              <h2 className="mt-3 text-3xl font-semibold text-white">An alternative to identity-only platforms</h2>
              <p className="mt-4 text-slate-300 leading-7">
                AvowID should compete on context, control, and security architecture. The message is not just that AvowID offers identity features — it is that AvowID helps enterprises make stronger access decisions by pairing identity controls with device trust intelligence.
              </p>
              <div className="mt-6 overflow-hidden rounded-3xl border border-white/10">
                <table className="w-full text-left text-sm">
                  <thead className="bg-slate-900/90 text-slate-300">
                    <tr>
                      <th className="px-4 py-3">Capability</th>
                      <th className="px-4 py-3">AvowID</th>
                      <th className="px-4 py-3">Typical identity-only vendor</th>
                    </tr>
                  </thead>
                  <tbody>
                    {compareRows.map((row) => (
                      <tr key={row[0]} className="border-t border-white/10">
                        <td className="px-4 py-3 text-slate-200">{row[0]}</td>
                        <td className="px-4 py-3 text-slate-300">{row[1]}</td>
                        <td className="px-4 py-3 text-slate-400">{row[2]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          <section className="mt-20 rounded-[2rem] border border-cyan-400/20 bg-cyan-400/10 p-8">
            <div className="max-w-3xl">
              <div className="text-sm font-medium uppercase tracking-[0.2em] text-cyan-200">FAQ-ready content</div>
              <h2 className="mt-3 text-3xl font-semibold text-white">Built for search visibility and answer engines</h2>
              <p className="mt-4 leading-7 text-slate-200">
                This launch direction is structured for enterprise buyers and machine-readable discovery: explicit product language, distinct category framing, strong comparison positioning, and FAQ blocks that can be expanded into schema-backed content.
              </p>
            </div>
            <div className="mt-8 grid gap-4">
              {faqs.map((faq) => (
                <div key={faq.q} className="rounded-3xl border border-white/10 bg-slate-950/50 p-5">
                  <div className="text-base font-semibold text-white">{faq.q}</div>
                  <div className="mt-2 text-sm leading-7 text-slate-300">{faq.a}</div>
                </div>
              ))}
            </div>
          </section>

          <section className="mt-20 rounded-[2rem] border border-white/10 bg-white/5 p-10 text-center">
            <div className="mx-auto max-w-3xl">
              <h2 className="text-4xl font-semibold tracking-tight text-white">Launch AvowID with a stronger access story</h2>
              <p className="mt-4 text-lg leading-8 text-slate-300">
                Bring together enterprise identity controls and device trust signals to create a more complete access platform for modern organizations.
              </p>
              <div className="mt-8 flex justify-center gap-3">
                <button className="rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-slate-950">Sign Up</button>
                <button className="rounded-2xl border border-white/15 px-5 py-3 text-sm font-medium text-slate-100">Request a Demo</button>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
