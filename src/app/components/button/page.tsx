"use client";

import React, { useState } from "react";
import DocPage, {
  Section,
  Preview,
  CodeBlock,
  PropsTable,
  DosAndDonts,
} from "@/components/DocPage";
import { ArrowRight, Download, Plus, Search, Loader2, Mail, ChevronDown } from "lucide-react";

/* ------------------------------------------------------------------ */
/*  Shared button base                                                 */
/* ------------------------------------------------------------------ */

const base =
  "inline-flex items-center justify-center font-medium rounded-lg transition-all focus:outline-none focus:ring-2 focus:ring-brand-500/40 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";

const variants: Record<string, string> = {
  primary: "bg-brand-600 text-white hover:bg-brand-700 active:bg-brand-800 shadow-xs",
  secondary:
    "bg-white text-neutral-700 border border-neutral-300 hover:bg-neutral-50 active:bg-neutral-100 shadow-xs",
  ghost: "bg-transparent text-neutral-600 hover:bg-neutral-100 active:bg-neutral-200",
  destructive: "bg-error-500 text-white hover:bg-error-700 active:bg-error-700 shadow-xs",
};

const sizes: Record<string, string> = {
  sm: "text-xs px-3 py-1.5 gap-1.5",
  md: "text-sm px-4 py-2 gap-2",
  lg: "text-base px-5 py-2.5 gap-2",
};

function Btn({
  variant = "primary",
  size = "md",
  className = "",
  children,
  ...rest
}: React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: keyof typeof variants;
  size?: keyof typeof sizes;
}) {
  return (
    <button className={`${base} ${variants[variant]} ${sizes[size]} ${className}`} {...rest}>
      {children}
    </button>
  );
}

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export default function ButtonPage() {
  const [loading, setLoading] = useState(false);

  const handleLoadingClick = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 2000);
  };

  return (
    <DocPage
      title="Button"
      description="Buttons trigger actions or navigate. Use the right variant to communicate importance and hierarchy."
    >
      {/* Variants */}
      <Section title="Variants" description="Choose a variant based on the visual weight needed.">
        <Preview>
          <div className="flex flex-wrap items-center gap-3">
            <Btn variant="primary">Primary</Btn>
            <Btn variant="secondary">Secondary</Btn>
            <Btn variant="ghost">Ghost</Btn>
            <Btn variant="destructive">Destructive</Btn>
          </div>
        </Preview>
        <CodeBlock
          code={`<Button variant="primary">Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="destructive">Destructive</Button>`}
        />
      </Section>

      {/* Sizes */}
      <Section title="Sizes" description="Three sizes to fit different density contexts.">
        <Preview>
          <div className="flex flex-wrap items-center gap-3">
            <Btn size="sm">Small</Btn>
            <Btn size="md">Medium</Btn>
            <Btn size="lg">Large</Btn>
          </div>
        </Preview>
        <CodeBlock
          code={`<Button size="sm">Small</Button>
<Button size="md">Medium</Button>
<Button size="lg">Large</Button>`}
        />
      </Section>

      {/* States */}
      <Section title="States" description="Buttons communicate interaction states visually.">
        <Preview>
          <div className="flex flex-wrap items-center gap-3">
            <Btn>Default</Btn>
            <Btn className="bg-brand-700 text-white shadow-xs">Hover</Btn>
            <Btn className="bg-brand-800 text-white shadow-xs">Active</Btn>
            <Btn disabled>Disabled</Btn>
            <Btn onClick={handleLoadingClick} disabled={loading}>
              {loading && <Loader2 className="w-4 h-4 animate-spin" />}
              {loading ? "Loading..." : "Click to load"}
            </Btn>
          </div>
        </Preview>
        <CodeBlock
          code={`<Button>Default</Button>
<Button disabled>Disabled</Button>
<Button loading>Loading...</Button>`}
        />
      </Section>

      {/* Icon buttons */}
      <Section title="Icon Buttons" description="Buttons can include leading icons, trailing icons, or be icon-only.">
        <Preview>
          <div className="flex flex-wrap items-center gap-3">
            <Btn>
              <Mail className="w-4 h-4" />
              Send email
            </Btn>
            <Btn>
              Continue
              <ArrowRight className="w-4 h-4" />
            </Btn>
            <Btn variant="secondary">
              <Download className="w-4 h-4" />
              Export
            </Btn>
            <Btn className="!px-2.5">
              <Plus className="w-4 h-4" />
            </Btn>
            <Btn variant="secondary" className="!px-2.5">
              <Search className="w-4 h-4" />
            </Btn>
          </div>
        </Preview>
        <CodeBlock
          code={`{/* Left icon */}
<Button><Mail /> Send email</Button>

{/* Right icon */}
<Button>Continue <ArrowRight /></Button>

{/* Icon only */}
<Button iconOnly><Plus /></Button>`}
        />
      </Section>

      {/* Button group */}
      <Section title="Button Group" description="Group related actions together with a shared visual container.">
        <Preview>
          <div className="inline-flex rounded-lg border border-neutral-300 overflow-hidden shadow-xs">
            <button className="px-4 py-2 text-sm font-medium text-neutral-700 bg-white hover:bg-neutral-50 border-r border-neutral-300">
              Day
            </button>
            <button className="px-4 py-2 text-sm font-medium text-brand-700 bg-brand-50 border-r border-neutral-300">
              Week
            </button>
            <button className="px-4 py-2 text-sm font-medium text-neutral-700 bg-white hover:bg-neutral-50 border-r border-neutral-300">
              Month
            </button>
            <button className="px-4 py-2 text-sm font-medium text-neutral-700 bg-white hover:bg-neutral-50">
              Year
            </button>
          </div>
        </Preview>
        <CodeBlock
          code={`<ButtonGroup>
  <Button>Day</Button>
  <Button active>Week</Button>
  <Button>Month</Button>
  <Button>Year</Button>
</ButtonGroup>`}
        />
      </Section>

      {/* Split button */}
      <Section title="Split Button" description="Combine a primary action with a dropdown of secondary actions.">
        <Preview>
          <div className="inline-flex rounded-lg overflow-hidden shadow-xs">
            <button className="px-4 py-2 text-sm font-medium text-white bg-brand-600 hover:bg-brand-700">
              Save changes
            </button>
            <button className="px-2 py-2 text-white bg-brand-600 hover:bg-brand-700 border-l border-brand-500">
              <ChevronDown className="w-4 h-4" />
            </button>
          </div>
        </Preview>
      </Section>

      {/* Props */}
      <Section title="Props">
        <PropsTable
          props={[
            { name: "variant", type: '"primary" | "secondary" | "ghost" | "destructive"', default: '"primary"', description: "Visual style of the button" },
            { name: "size", type: '"sm" | "md" | "lg"', default: '"md"', description: "Size of the button" },
            { name: "disabled", type: "boolean", default: "false", description: "Disables the button" },
            { name: "loading", type: "boolean", default: "false", description: "Shows a spinner and disables interaction" },
            { name: "iconOnly", type: "boolean", default: "false", description: "Renders as a square icon button" },
            { name: "leftIcon", type: "ReactNode", description: "Icon rendered before button text" },
            { name: "rightIcon", type: "ReactNode", description: "Icon rendered after button text" },
            { name: "asChild", type: "boolean", default: "false", description: "Merge props onto child element (e.g. Link)" },
            { name: "onClick", type: "() => void", description: "Click handler" },
            { name: "type", type: '"button" | "submit" | "reset"', default: '"button"', description: "HTML button type" },
            { name: "children", type: "ReactNode", description: "Button content" },
          ]}
        />
      </Section>

      {/* Dos and Don'ts */}
      <Section title="Best Practices">
        <DosAndDonts
          dos={[
            "Use primary for the single most important action on screen",
            "Use sentence case for button labels",
            "Start labels with a verb (Save, Create, Delete)",
            "Provide an accessible label for icon-only buttons",
            "Show loading state for async actions",
          ]}
          donts={[
            "Don't use more than one primary button in a section",
            "Don't use vague labels like \"Click here\"",
            "Don't disable without explaining why (use a tooltip)",
            "Don't use destructive variant for non-destructive actions",
            "Don't mix different sizes in the same button group",
          ]}
        />
      </Section>
    </DocPage>
  );
}
