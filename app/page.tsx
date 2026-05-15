import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BadgeCheck,
  Building2,
  CheckCircle2,
  Cpu,
  Database,
  FileSearch,
  Fingerprint,
  Globe2,
  Layers3,
  LockKeyhole,
  Mail,
  Network,
  Radar,
  Server,
  ShieldCheck,
  Sparkles,
  Workflow,
  Zap
} from "lucide-react";
function Button({ children, className = "", variant = "default" }: any) {
  return (
    <button className={`inline-flex items-center justify-center ${className}`}>
      {children}
    </button>
  );
}

function Card({ children, className = "" }: any) {
  return <div className={className}>{children}</div>;
}

function CardContent({ children, className = "" }: any) {
  return <div className={className}>{children}</div>;
}

function CHILogo({ compact = false }) {
  return (
    <div className="flex items-center gap-4">
      <div className="relative grid h-14 w-14 place-items-center rounded-2xl border border-amber-300/40 bg-gradient-to-br from-amber-200/20 via-yellow-500/10 to-cyan-300/10 shadow-[0_0_45px_rgba(245,158,11,0.26)]">
        <div className="absolute inset-1 rounded-[1rem] border border-cyan-200/20" />
        <div className="relative h-9 w-9">
          <div className="absolute left-1 top-1 h-7 w-7 rounded-lg border-[5px] border-amber-300 border-r-transparent shadow-[0_0_24px_rgba(251,191,36,0.35)]" />
          <div className="absolute right-0 top-0 h-5 w-5 rotate-45 border border-amber-200/80 bg-amber-300/20" />
          <div className="absolute bottom-0 right-1 h-4 w-4 rotate-45 border border-cyan-200/70 bg-cyan-300/10" />
        </div>
      </div>
      {!compact && (
        <div>
          <p className="text-2xl font-black tracking-tight text-white">CHI</p>
          <p className="text-xs uppercase tracking-[0.38em] text-amber-200/80">Capitol Haptics Intel</p>
        </div>
      )}
    </div>
  );
}

export default function CHIWebsite() {
  const capabilities = [
    [<ShieldCheck className="h-7 w-7" />, "Secure Federal Document Environments", "SharePoint and Teams architectures for proposal files, contract folders, controlled access, CUI-aware organization, and operational transparency."],
    [<Workflow className="h-7 w-7" />, "Automation & Process Engineering", "Power Automate workflows, metadata routing, intake pipelines, recurring scans, approvals, and backend processes that reduce manual work."],
    [<Database className="h-7 w-7" />, "Data Architecture & Dashboards", "Structured records, opportunity tracking, data cleanup, reporting tables, dashboards, and usable systems for federal-market operations."],
    [<Network className="h-7 w-7" />, "Microsoft 365 Systems Integration", "Connected environments across SharePoint, Teams, OneDrive, Power Apps, Copilot, and Microsoft 365 governance tools."],
    [<FileSearch className="h-7 w-7" />, "CUI & Compliance-Oriented File Control", "File labeling, access review support, sensitive-data organization, controlled libraries, permission structures, and audit-friendly documentation."],
    [<Server className="h-7 w-7" />, "IT Infrastructure Support", "Cloud productivity setup, secure collaboration workspaces, permission cleanups, system documentation, and scalable support for growing teams."]
  ];

  const proofPoints = [
    "Operates in the federal technology space",
    "GSA Schedule proposal submitted",
    "Secure IT, automation, data systems, and document control",
    "Built for federal contractors, small businesses, and agency-facing operations"
  ];

  const stack = ["SharePoint", "Teams", "Power Automate", "Power Apps", "Copilot", "Microsoft 365", "Data Dashboards", "CUI Workflows"];

  return (
    <div className="min-h-screen overflow-hidden bg-[#020617] text-white">
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_15%,rgba(14,165,233,0.24),transparent_28%),radial-gradient(circle_at_85%_5%,rgba(245,158,11,0.22),transparent_24%),radial-gradient(circle_at_70%_85%,rgba(20,184,166,0.16),transparent_30%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:radial-gradient(circle_at_center,black,transparent_78%)]" />
        <div className="absolute left-1/2 top-0 h-[900px] w-[900px] -translate-x-1/2 rounded-full border border-cyan-300/10" />
      </div>

      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/65 backdrop-blur-2xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <CHILogo />
          <nav className="hidden items-center gap-8 text-sm text-slate-300 md:flex">
            <a href="#capabilities" className="hover:text-amber-200">Capabilities</a>
            <a href="#federal" className="hover:text-amber-200">Federal Space</a>
            <a href="#systems" className="hover:text-amber-200">Systems</a>
            <a href="#contact" className="hover:text-amber-200">Contact</a>
          </nav>
          <Button className="rounded-2xl bg-amber-300 px-5 font-semibold text-slate-950 shadow-[0_0_28px_rgba(245,158,11,0.32)] hover:bg-amber-200">
            Initiate Contact
          </Button>
        </div>
      </header>

      <main className="relative z-10">
        <section className="relative px-6 py-24 md:py-32">
          <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
            <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65 }}>
              <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-amber-300/25 bg-amber-300/10 px-4 py-2 text-sm text-amber-100 shadow-[0_0_35px_rgba(245,158,11,0.12)]">
                <Radar className="h-4 w-4" />
                Federal-space technology systems for the next operating era
              </div>
              <h1 className="max-w-5xl text-5xl font-black leading-[0.95] tracking-[-0.06em] md:text-7xl lg:text-8xl">
                Secure federal tech with a 2070-grade digital edge.
              </h1>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300 md:text-xl">
                Capitol Haptics Intel, LLC operates in the federal space, building secure IT environments, automation systems, SharePoint architectures, data workflows, and document-control infrastructure for government-facing operations.
              </p>
              <div className="mt-8 grid max-w-2xl gap-3 sm:grid-cols-2">
                {proofPoints.map((item) => (
                  <div key={item} className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.055] p-4 backdrop-blur-xl">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 flex-none text-amber-200" />
                    <p className="text-sm leading-6 text-slate-200">{item}</p>
                  </div>
                ))}
              </div>
              <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                <Button className="rounded-2xl bg-amber-300 px-7 py-6 text-base font-semibold text-slate-950 shadow-[0_0_42px_rgba(245,158,11,0.35)] hover:bg-amber-200">
                  Build the System <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button variant="outline" className="rounded-2xl border-white/15 bg-white/[0.06] px-7 py-6 text-base text-white hover:bg-white/10">
                  Explore Capabilities
                </Button>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.75, delay: 0.1 }} className="relative">
              <div className="absolute -inset-8 rounded-[3rem] bg-amber-300/10 blur-3xl" />
              <Card className="relative overflow-hidden rounded-[2.25rem] border-amber-300/20 bg-slate-950/70 text-white shadow-[0_0_80px_rgba(245,158,11,0.18)] backdrop-blur-2xl">
                <CardContent className="p-0">
                  <div className="border-b border-white/10 bg-white/[0.045] p-5">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="h-3 w-3 rounded-full bg-amber-300" />
                        <span className="h-3 w-3 rounded-full bg-cyan-300" />
                        <span className="h-3 w-3 rounded-full bg-indigo-400" />
                      </div>
                      <p className="text-xs uppercase tracking-[0.3em] text-slate-400">CHI Command Layer</p>
                    </div>
                  </div>
                  <div className="p-8">
                    <div className="mb-8 flex items-center justify-center rounded-[2rem] border border-amber-300/20 bg-gradient-to-br from-amber-300/10 via-cyan-500/10 to-indigo-500/10 p-10">
                      <div className="text-center">
                        <CHILogo compact />
                        <p className="mt-5 text-5xl font-black tracking-[-0.08em] text-white">CHI</p>
                        <p className="mt-2 text-xs uppercase tracking-[0.45em] text-amber-100/75">Capitol Haptics Intel</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      {[["Federal", "Operating Space"], ["Submitted", "GSA Schedule Proposal"], ["Secure", "Document Control"], ["Automated", "Workflow Layer"]].map(([big, small]) => (
                        <div key={small} className="rounded-3xl border border-white/10 bg-white/[0.055] p-5">
                          <p className="text-2xl font-black text-amber-100">{big}</p>
                          <p className="mt-1 text-sm text-slate-400">{small}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>

        <section id="capabilities" className="px-6 py-20">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div className="max-w-3xl">
                <p className="text-sm font-semibold uppercase tracking-[0.34em] text-amber-200">Capabilities</p>
                <h2 className="mt-4 text-4xl font-black tracking-[-0.04em] md:text-6xl">Built like a federal systems lab.</h2>
                <p className="mt-5 text-lg leading-8 text-slate-300">
                  CHI combines secure document operations, cloud system design, workflow automation, and practical data architecture into one lean delivery model.
                </p>
              </div>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {capabilities.map(([icon, title, text], index) => (
                <motion.div key={title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45, delay: index * 0.04 }}>
                  <Card className="group h-full overflow-hidden rounded-[2rem] border-white/10 bg-white/[0.055] text-white shadow-xl backdrop-blur-xl transition hover:-translate-y-1 hover:border-amber-300/30 hover:bg-white/[0.075] hover:shadow-[0_0_55px_rgba(245,158,11,0.13)]">
                    <CardContent className="p-7">
                      <div className="mb-6 inline-flex rounded-2xl border border-amber-300/20 bg-amber-300/10 p-3 text-amber-200 transition group-hover:scale-105">
                        {icon}
                      </div>
                      <h3 className="mb-3 text-2xl font-bold tracking-tight">{title}</h3>
                      <p className="leading-7 text-slate-300">{text}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="federal" className="px-6 py-20">
          <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <Card className="rounded-[2rem] border-amber-300/20 bg-amber-300/10 text-white backdrop-blur-xl">
              <CardContent className="p-8 md:p-10">
                <div className="mb-6 inline-flex rounded-2xl bg-amber-300/15 p-4 text-amber-100">
                  <Building2 className="h-9 w-9" />
                </div>
                <p className="text-sm font-semibold uppercase tracking-[0.34em] text-amber-200">Federal Position</p>
                <h2 className="mt-4 text-4xl font-black tracking-[-0.04em] md:text-5xl">Federal-space operator with GSA momentum.</h2>
                <p className="mt-5 text-lg leading-8 text-slate-200">
                  CHI operates in the federal space and has submitted its GSA Schedule proposal, positioning the company to support government-facing technology, document management, data, and automation needs.
                </p>
              </CardContent>
            </Card>
            <div className="grid gap-5">
              {[[<BadgeCheck className="h-6 w-6" />, "GSA Schedule Proposal Submitted", "CHI has submitted its GSA Schedule proposal as part of its federal market positioning."], [<LockKeyhole className="h-6 w-6" />, "Security-Conscious Delivery", "Solutions are structured around controlled access, clean permissions, documented processes, and sensitive-file organization."], [<Layers3 className="h-6 w-6" />, "Contractor-Ready Systems", "Designed for proposal teams, contract folders, capture workflows, file libraries, and operational growth."], [<Globe2 className="h-6 w-6" />, "Federal-Market Orientation", "Built for organizations that need practical systems while preparing for or operating inside government-sector work."]].map(([icon, title, text]) => (
                <div key={title} className="flex gap-5 rounded-[1.75rem] border border-white/10 bg-white/[0.055] p-6 backdrop-blur-xl">
                  <div className="grid h-12 w-12 flex-none place-items-center rounded-2xl bg-amber-300/10 text-amber-200">{icon}</div>
                  <div>
                    <h3 className="text-xl font-bold">{title}</h3>
                    <p className="mt-2 leading-7 text-slate-300">{text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="systems" className="px-6 py-20">
          <div className="mx-auto max-w-7xl rounded-[2.5rem] border border-white/10 bg-white/[0.045] p-8 backdrop-blur-2xl md:p-12">
            <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.34em] text-amber-200">Systems Stack</p>
                <h2 className="mt-4 text-4xl font-black tracking-[-0.04em] md:text-6xl">A clean operating layer for messy work.</h2>
                <p className="mt-5 text-lg leading-8 text-slate-300">
                  CHI turns scattered files, permissions, dashboards, and workflows into structured, searchable, permissioned, automated systems.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                {stack.map((item) => (
                  <div key={item} className="rounded-3xl border border-white/10 bg-slate-950/55 p-5 text-center shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">
                    <Sparkles className="mx-auto mb-3 h-5 w-5 text-amber-200" />
                    <p className="text-sm font-semibold text-slate-100">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="px-6 py-20">
          <div className="mx-auto max-w-5xl rounded-[2.5rem] border border-amber-300/20 bg-gradient-to-br from-amber-500/20 via-cyan-500/10 to-slate-950 p-10 text-center shadow-[0_0_90px_rgba(245,158,11,0.16)] backdrop-blur-2xl md:p-16">
            <div className="mb-6 flex justify-center"><CHILogo compact /></div>
            <h2 className="text-4xl font-black tracking-[-0.04em] md:text-6xl">Build the next CHI system layer.</h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-200">
              Organize your Microsoft 365 environment, automate document workflows, and create secure data systems for federal-sector operations.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button className="rounded-2xl bg-amber-300 px-6 py-6 text-base font-semibold text-slate-950 hover:bg-amber-200">
                <Mail className="mr-2 h-5 w-5" /> jperch@chi-tech.net
              </Button>
              <Button variant="outline" className="rounded-2xl border-white/20 bg-white/10 px-6 py-6 text-base text-white hover:bg-white/20">
                Schedule Consultation <Zap className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </section>
      </main>

      <footer className="relative z-10 border-t border-white/10 px-6 py-8">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 text-sm text-slate-400 md:flex-row">
          <p>© 2026 Capitol Haptics Intel, LLC. All rights reserved.</p>
          <p>Federal Space • Secure IT • Automation • Data Architecture</p>
        </div>
      </footer>
    </div>
  );
}
