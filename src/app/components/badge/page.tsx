"use client";

import React from "react";
import DocPage, {
  Section,
  Preview,
  CodeBlock,
  PropsTable,
  DosAndDonts,
} from "@/components/DocPage";

/* ------------------------------------------------------------------ */
/*  Helper                                                             */
/* ------------------------------------------------------------------ */

const colorMap: Record<string, string> = {
  neutral: "bg-neutral-100 text-neutral-700",
  brand: "bg-brand-50 text-brand-700",
  success: "bg-success-50 text-success-700",
  warning: "bg-warning-50 text-warning-700",
  error: "bg-error-50 text-error-700",
  info: "bg-info-50 text-info-700",
};

const dotColorMap: Record<string, string> = {
  neutral: "bg-neutral-500",
  brand: "bg-brand-500",
  success: "bg-success-500",
  warning: "bg-warning-500",
  error: "bg-error-500",
  info: "bg-info-500",
};

function Badge({
  variant = "neutral",
  size = "md",
  dot = false,
  rounded = false,
  children,
}: {
  variant?: keyof typeof colorMap;
  size?: "sm" | "md";
  dot?: boolean;
  rounded?: boolean;
  children: React.ReactNode;
}) {
  const sizeClasses = size === "sm" ? "text-[11px] px-1.5 py-0.5" : "text-xs px-2.5 py-0.5";
  const radiusClass = rounded ? "rounded-full" : "rounded-md";

  return (
    <span
      className={`inline-flex items-center gap-1.5 font-medium ${colorMap[variant]} ${sizeClasses} ${radiusClass}`}
    >
      {dot && <span className={`w-1.5 h-1.5 rounded-full ${dotColorMap[variant]}`} />}
      {children}
    </span>
  );
}

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export default function BadgePage() {
  return (
    <DocPage
      title="Badge"
      description="Badges highlight status, categories, or counts. They draw attention to important information at a glance."
    >
      {/* Variants */}
      <Section title="Variants" description="Six color variants for different semantic meanings.">
        <Preview>
          <div className="flex flex-wrap gap-2">
            <Badge variant="neutral">Neutral</Badge>
            <Badge variant="brand">Brand</Badge>
            <Badge variant="success">Success</Badge>
            <Badge variant="warning">Warning</Badge>
            <Badge variant="error">Error</Badge>
            <Badge variant="info">Info</Badge>
          </div>
        </Preview>
        <CodeBlock
          code={`<Badge variant="neutral">Neutral</Badge>
<Badge variant="success">Success</Badge>
<Badge variant="error">Error</Badge>`}
        />
      </Section>

      {/* Sizes */}
      <Section title="Sizes">
        <Preview>
          <div className="flex flex-wrap items-center gap-2">
            <Badge size="sm" variant="brand">Small</Badge>
            <Badge size="md" variant="brand">Medium</Badge>
          </div>
        </Preview>
        <CodeBlock
          code={`<Badge size="sm">Small</Badge>
<Badge size="md">Medium</Badge>`}
        />
      </Section>

      {/* Dot indicator */}
      <Section title="With Dot Indicator" description="Use a dot to reinforce status or draw extra attention.">
        <Preview>
          <div className="flex flex-wrap gap-2">
            <Badge variant="success" dot>Active</Badge>
            <Badge variant="warning" dot>Pending</Badge>
            <Badge variant="error" dot>Failed</Badge>
            <Badge variant="neutral" dot>Inactive</Badge>
            <Badge variant="info" dot>In review</Badge>
          </div>
        </Preview>
        <CodeBlock code={`<Badge variant="success" dot>Active</Badge>`} />
      </Section>

      {/* Rounded */}
      <Section title="Pill & Rounded" description="Square (rounded-md) vs pill (rounded-full) shapes.">
        <Preview>
          <div className="flex flex-wrap gap-2">
            <Badge variant="brand">Default</Badge>
            <Badge variant="brand" rounded>Pill</Badge>
            <Badge variant="success">Default</Badge>
            <Badge variant="success" rounded>Pill</Badge>
            <Badge variant="error">Default</Badge>
            <Badge variant="error" rounded>Pill</Badge>
          </div>
        </Preview>
        <CodeBlock
          code={`<Badge>Default</Badge>
<Badge rounded>Pill</Badge>`}
        />
      </Section>

      {/* Use in context */}
      <Section title="In Context" description="Badges used alongside other UI elements.">
        <Preview>
          <div className="space-y-4">
            {/* Table-like row */}
            <div className="flex items-center justify-between p-3 border border-neutral-200 rounded-lg">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-brand-100 flex items-center justify-center text-xs font-semibold text-brand-700">
                  JD
                </div>
                <div>
                  <p className="text-sm font-medium text-neutral-900">John Doe</p>
                  <p className="text-xs text-neutral-500">john@example.com</p>
                </div>
              </div>
              <Badge variant="success" dot rounded>Active</Badge>
            </div>
            <div className="flex items-center justify-between p-3 border border-neutral-200 rounded-lg">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-warning-50 flex items-center justify-center text-xs font-semibold text-warning-700">
                  AS
                </div>
                <div>
                  <p className="text-sm font-medium text-neutral-900">Alice Smith</p>
                  <p className="text-xs text-neutral-500">alice@example.com</p>
                </div>
              </div>
              <Badge variant="warning" dot rounded>Pending</Badge>
            </div>
          </div>
        </Preview>
      </Section>

      {/* Count badges */}
      <Section title="Count Badges" description="Compact numeric badges for notification counts.">
        <Preview>
          <div className="flex items-center gap-6">
            <div className="relative">
              <div className="w-10 h-10 rounded-lg bg-neutral-100 flex items-center justify-center text-neutral-500 text-sm">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>
              </div>
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-error-500 text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                3
              </span>
            </div>
            <div className="relative">
              <div className="w-10 h-10 rounded-lg bg-neutral-100 flex items-center justify-center text-neutral-500 text-sm">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
              </div>
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-brand-600 text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                12
              </span>
            </div>
          </div>
        </Preview>
      </Section>

      {/* Props */}
      <Section title="Props">
        <PropsTable
          props={[
            { name: "variant", type: '"neutral" | "brand" | "success" | "warning" | "error" | "info"', default: '"neutral"', description: "Color variant" },
            { name: "size", type: '"sm" | "md"', default: '"md"', description: "Badge size" },
            { name: "dot", type: "boolean", default: "false", description: "Shows a colored dot before the label" },
            { name: "rounded", type: "boolean", default: "false", description: "Uses pill shape (rounded-full) instead of rounded-md" },
            { name: "children", type: "ReactNode", description: "Badge content" },
          ]}
        />
      </Section>

      {/* Dos and Don'ts */}
      <Section title="Best Practices">
        <DosAndDonts
          dos={[
            "Use badges to highlight status or category information",
            "Keep badge labels short (1-2 words)",
            "Use color consistently for the same meaning across the app",
            "Use dot indicators for status badges in tables/lists",
          ]}
          donts={[
            "Don't use too many badges in one view (they lose impact)",
            "Don't use badges for actions (use buttons instead)",
            "Don't use red/error badges for non-error states",
            "Don't put long text in badges",
          ]}
        />
      </Section>
    </DocPage>
  );
}
