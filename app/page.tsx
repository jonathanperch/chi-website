"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BadgeCheck,
  Building2,
  CheckCircle2,
  Database,
  FileSearch,
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

function Button({ children, className = "" }: any) {
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
      <img
        src="/chi-logo.jpg"
        alt="CHI Logo"
        className={compact ? "h-16 w-16 object-contain" : "h-14 w-14 object-contain"}
      />

      {!compact && (
        <div>
          <p className="text-2xl font-black tracking-tight text-white">CHI</p>
          <p className="text-xs uppercase tracking-[0.38em] text-[#b0b0b0]">
            Capitol Haptics Intel
          </p>
        </div>
      )}
    </div>
  );
}

export default function CHIWebsite() {
  const capabilities = [
    [
      <ShieldCheck className="h-7 w-7" />,
      "Secure Federal Document Environments",
      "SharePoint and Teams architectures for proposal files, contract folders, controlled access, CUI-aware organization, and operational transparency."
    ],
    [
      <Workflow className="h-7 w-7" />,
      "Automation & Process Engineering",
      "Power Automate workflows, metadata routing, intake pipelines, recurring scans, approvals, and backend processes that reduce manual work."
    ],
    [
      <Database className="h-7 w-7" />,
      "Data Architecture & Dashboards",
      "Structured records, opportunity tracking, data cleanup, reporting tables, dashboards, and usable systems for federal-market operations."
    ],
    [
      <Network className="h-7 w-7" />,
      "Microsoft 365 Systems Integration",
      "Connected environments across SharePoint, Teams, OneDrive, Power Apps, Copilot, and Microsoft 365 governance tools."
    ],
    [
      <FileSearch className="h-7 w-7" />,
      "CUI & Compliance-Oriented File Control",
      "File labeling, access review support, sensitive-data organization, controlled libraries, permission structures, and audit-friendly documentation."
    ],
    [
      <Server className="h-7 w-7" />,
      "IT Infrastructure Support",
      "Cloud productivity setup, secure collaboration workspaces, permission cleanups, system documentation, and scalable support for growing teams."
    ]
  ];

  const proofPoints = [
    "Operates in the federal technology space",
    "GSA Schedule proposal submitted",
    "Secure IT, automation, data systems, and document control",
    "Built for federal contractors and agency-facing operations"
  ];

  const stack = [
    "SharePoint",
    "Teams",
    "Power Automate",
    "Power Apps",
    "Copilot",
    "Microsoft 365",
    "Dashboards",
    "CUI Workflows"
  ];

  return (
    <div className="min-h-screen overflow-hidden bg-[#111111] text-white">
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_15%,rgba(0,13,100,0.22),transparent_28%),radial-gradient(circle_at_85%_5%,rgba(148,0,0,0.18),transparent_24%),radial-gradient(circle_at_70%_85%,rgba(68,68,68,0.18),transparent_30%)]" />

        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:radial-gradient(circle_at_center,black,transparent_78%)]" />

        <div className="absolute left-1/2 top-0 h-[900px] w-[900px] -translate-x-1/2 rounded-full border border-[#000d64]/20" />
      </div>

      <header className="sticky top-0 z-50 border-b border-[#444444]/40 bg-[#111111]/80 backdrop-blur-2xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <CHILogo />

          <nav className="hidden items-center gap-8 text-sm text-[#b0b0b0] md:flex">
            <a href="#capabilities" className="hover:text-[#000d64]">
              Capabilities
            </a>

            <a href="#federal" className="hover:text-[#000d64]">
              Federal Space
            </a>

            <a href="#systems" className="hover:text-[#000d64]">
              Systems
            </a>

            <a href="#contact" className="hover:text-[#000d64]">
              Contact
            </a>
          </nav>

          <a
            href="https://calendly.com/jperch-chi-tech"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="rounded-2xl bg-[#940000] px-5 py-3 font-semibold text-white shadow-[0_0_28px_rgba(148,0,0,0.35)] hover:bg-[#7a0000]">
              Contact CHI
            </Button>
          </a>
        </div>
      </header>

      <main className="relative z-10">
        <section className="relative px-6 py-24 md:py-32">
          <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65 }}
            >
              <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#444444]/50 bg-[#222222]/70 px-4 py-2 text-sm text-[#b0b0b0] shadow-[0_0_35px_rgba(0,13,100,0.18)]">
                <Radar className="h-4 w-4 text-[#000d64]" />
                Federal technology systems engineered for modern operations
              </div>

              <h1 className="max-w-5xl text-5xl font-black leading-[0.95] tracking-[-0.06em] md:text-7xl lg:text-8xl">
                Secure federal tech with a futuristic edge.
              </h1>

              <p className="mt-7 max-w-2xl text-lg leading-8 text-[#b0b0b0] md:text-xl">
                CHI operates in the federal space, building secure IT environments,
                automation systems, SharePoint architectures, data workflows, and
                document-control infrastructure for government-facing operations.
              </p>

              <div className="mt-8 grid max-w-2xl gap-3 sm:grid-cols-2">
                {proofPoints.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 rounded-2xl border border-[#444444]/40 bg-[#222222]/70 p-4 backdrop-blur-xl"
                  >
                    <CheckCircle2 className="mt-0.5 h-5 w-5 flex-none text-[#000d64]" />

                    <p className="text-sm leading-6 text-[#d1d1d1]">{item}</p>
                  </div>
                ))}
              </div>

              <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                <a
                  href="https://calendly.com/jperch-chi-tech"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="rounded-2xl bg-[#940000] px-7 py-6 text-base font-semibold text-white shadow-[0_0_42px_rgba(148,0,0,0.35)] hover:bg-[#7a0000]">
                    Build the System
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </a>

                <Button className="rounded-2xl border border-[#444444]/50 bg-[#222222]/60 px-7 py-6 text-base text-white hover:bg-[#2a2a2a]">
                  Explore Capabilities
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.75, delay: 0.1 }}
              className="relative"
            >
              <div className="absolute -inset-8 rounded-[3rem] bg-[#000d64]/10 blur-3xl" />

              <Card className="relative overflow-hidden rounded-[2.25rem] border border-[#444444]/40 bg-[#1a1a1a]/80 text-white shadow-[0_0_80px_rgba(0,13,100,0.18)] backdrop-blur-2xl">
                <CardContent className="p-0">
                  <div className="border-b border-[#444444]/40 bg-[#222222]/60 p-5">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="h-3 w-3 rounded-full bg-[#940000]" />
                        <span className="h-3 w-3 rounded-full bg-[#000d64]" />
                        <span className="h-3 w-3 rounded-full bg-[#444444]" />
                      </div>

                      <p className="text-xs uppercase tracking-[0.3em] text-[#8a8a8a]">
                        CHI Command Layer
                      </p>
                    </div>
                  </div>

                  <div className="p-8">
                    <div className="mb-8 flex items-center justify-center rounded-[2rem] border border-[#444444]/40 bg-gradient-to-br from-[#444444]/30 via-[#000d64]/20 to-[#940000]/10 p-10">
                      <div className="text-center">
                        <CHILogo compact />

                        <p className="mt-5 text-5xl font-black tracking-[-0.08em] text-white">
                          CHI
                        </p>

                        <p className="mt-2 text-xs uppercase tracking-[0.45em] text-[#b0b0b0]">
                          Capitol Haptics Intel
                        </p>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      {[
                        ["Federal", "Operating Space"],
                        ["Submitted", "GSA Schedule Proposal"],
                        ["Secure", "Document Control"],
                        ["Automated", "Workflow Layer"]
                      ].map(([big, small], index) => (
                        <div
                          key={index}
                          className="rounded-3xl border border-[#444444]/40 bg-[#222222]/70 p-5"
                        >
                          <p className="text-2xl font-black text-white">{big}</p>

                          <p className="mt-1 text-sm text-[#8a8a8a]">{small}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  );
}