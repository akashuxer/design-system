import Link from "next/link";

const stats = [
  { label: "Components", value: "20+" },
  { label: "Foundations", value: "6" },
  { label: "Patterns", value: "4" },
];

const principles = [
  {
    title: "Consistency",
    description:
      "Unified visual language and interaction patterns across every surface of your product, reducing cognitive load for users.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
      </svg>
    ),
  },
  {
    title: "Accessibility",
    description:
      "WCAG 2.1 AA compliant by default. Every component is keyboard navigable, screen-reader friendly, and works with assistive technologies.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: "Scalability",
    description:
      "Token-driven architecture that scales from a single product to an entire suite. Theming and customization built into the core.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
      </svg>
    ),
  },
  {
    title: "Performance",
    description:
      "Tree-shakeable, lightweight components with zero runtime CSS-in-JS. Optimized bundle size for fast enterprise applications.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
  },
];

const foundations = [
  { title: "Colors", href: "/foundations/colors", description: "Brand, neutral, and semantic color palettes with accessibility guidance." },
  { title: "Typography", href: "/foundations/typography", description: "Type scale, font weights, and text styles for hierarchy and readability." },
  { title: "Spacing", href: "/foundations/spacing", description: "Consistent spacing scale for padding, margins, and layout gaps." },
  { title: "Grid & Layout", href: "/foundations/grid", description: "12-column grid system, containers, and responsive breakpoints." },
  { title: "Shadows", href: "/foundations/shadows", description: "Elevation system with shadow tokens for depth and layering." },
  { title: "Icons", href: "/foundations/icons", description: "Icon library with sizing guidelines and usage patterns." },
];

export default function HomePage() {
  return (
    <div className="max-w-5xl">
      {/* Hero */}
      <div className="mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 border border-brand-200 text-brand-700 text-xs font-medium mb-5">
          <span className="w-1.5 h-1.5 rounded-full bg-brand-500" />
          v1.0.0
        </div>
        <h1 className="text-4xl font-extrabold text-neutral-900 tracking-tight mb-4 leading-tight">
          Spectra Design System
        </h1>
        <p className="text-lg text-neutral-500 leading-relaxed max-w-2xl mb-8">
          A comprehensive design system for building consistent, accessible, and
          performant B2B enterprise products. From foundations to patterns, Spectra
          provides everything your team needs to ship with confidence.
        </p>

        {/* Stats */}
        <div className="flex gap-8 mb-10">
          {stats.map((stat) => (
            <div key={stat.label}>
              <div className="text-2xl font-bold text-neutral-900">{stat.value}</div>
              <div className="text-sm text-neutral-500">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Quick Start */}
        <div className="rounded-xl border border-neutral-200 bg-white overflow-hidden">
          <div className="px-5 py-3 border-b border-neutral-100 bg-neutral-50">
            <span className="text-xs font-semibold text-neutral-500 uppercase tracking-wider">Quick Start</span>
          </div>
          <div className="p-5">
            <pre className="!mb-0">{`# Install the Spectra design system
npm install @spectra-ds/core @spectra-ds/react

# Import in your project
import { Button, Input, Card } from '@spectra-ds/react';
import '@spectra-ds/core/styles.css';`}</pre>
          </div>
        </div>
      </div>

      {/* Principles */}
      <div className="mb-16">
        <h2 className="text-lg font-semibold text-neutral-900 mb-1">Design Principles</h2>
        <p className="text-sm text-neutral-500 mb-6">
          The guiding principles that inform every decision in the Spectra system.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {principles.map((p) => (
            <div
              key={p.title}
              className="rounded-xl border border-neutral-200 bg-white p-5 hover:border-brand-200 hover:shadow-sm transition-all"
            >
              <div className="w-10 h-10 rounded-lg bg-brand-50 text-brand-600 flex items-center justify-center mb-4">
                {p.icon}
              </div>
              <h3 className="text-sm font-semibold text-neutral-900 mb-1">{p.title}</h3>
              <p className="text-sm text-neutral-500 leading-relaxed">{p.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Foundations Grid */}
      <div>
        <h2 className="text-lg font-semibold text-neutral-900 mb-1">Foundations</h2>
        <p className="text-sm text-neutral-500 mb-6">
          The building blocks that underpin every component and pattern in the system.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {foundations.map((f) => (
            <Link
              key={f.title}
              href={f.href}
              className="group rounded-xl border border-neutral-200 bg-white p-5 hover:border-brand-300 hover:shadow-md transition-all"
            >
              <h3 className="text-sm font-semibold text-neutral-900 mb-1 group-hover:text-brand-700 transition-colors">
                {f.title}
              </h3>
              <p className="text-sm text-neutral-500 leading-relaxed">{f.description}</p>
              <div className="mt-3 text-xs font-medium text-brand-600 group-hover:text-brand-700 transition-colors">
                View documentation &rarr;
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
