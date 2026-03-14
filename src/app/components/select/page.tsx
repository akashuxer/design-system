"use client";

import React from "react";
import DocPage, {
  Section,
  Preview,
  CodeBlock,
  PropsTable,
  DosAndDonts,
} from "@/components/DocPage";
import { ChevronDown } from "lucide-react";

/* ------------------------------------------------------------------ */
/*  Helper                                                             */
/* ------------------------------------------------------------------ */

const sizeClasses: Record<string, string> = {
  sm: "text-xs px-3 py-1.5 pr-8",
  md: "text-sm px-3.5 py-2 pr-9",
  lg: "text-base px-4 py-2.5 pr-10",
};

function SelectField({
  label,
  helper,
  error,
  size = "md",
  disabled,
  children,
  wrapperClass = "",
  defaultValue,
}: {
  label?: string;
  helper?: string;
  error?: string;
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
  children: React.ReactNode;
  wrapperClass?: string;
  defaultValue?: string;
}) {
  const ring = error
    ? "border-error-500 focus:ring-error-500/20"
    : "border-neutral-300 focus:ring-brand-500/20 focus:border-brand-500";
  return (
    <div className={wrapperClass}>
      {label && (
        <label className="block text-sm font-medium text-neutral-700 mb-1.5">{label}</label>
      )}
      <div className="relative">
        <select
          disabled={disabled}
          defaultValue={defaultValue}
          className={`w-full appearance-none rounded-lg border bg-white outline-none transition-all focus:ring-2 text-neutral-900 ${ring} ${sizeClasses[size]} ${
            disabled ? "bg-neutral-50 opacity-60 cursor-not-allowed" : "cursor-pointer"
          }`}
        >
          {children}
        </select>
        <ChevronDown className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" />
      </div>
      {error && <p className="mt-1.5 text-xs text-error-500">{error}</p>}
      {helper && !error && <p className="mt-1.5 text-xs text-neutral-500">{helper}</p>}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export default function SelectPage() {
  return (
    <DocPage
      title="Select"
      description="Select fields let users choose a single option from a predefined list using the native OS dropdown."
    >
      {/* Default */}
      <Section title="Default" description="A basic select with options.">
        <Preview>
          <div className="max-w-xs">
            <SelectField>
              <option value="react">React</option>
              <option value="vue">Vue</option>
              <option value="angular">Angular</option>
              <option value="svelte">Svelte</option>
            </SelectField>
          </div>
        </Preview>
        <CodeBlock
          code={`<Select>
  <option value="react">React</option>
  <option value="vue">Vue</option>
</Select>`}
        />
      </Section>

      {/* With placeholder */}
      <Section title="With Placeholder" description="Use a disabled first option as placeholder.">
        <Preview>
          <div className="max-w-xs">
            <SelectField defaultValue="">
              <option value="" disabled>
                Select a framework...
              </option>
              <option value="react">React</option>
              <option value="vue">Vue</option>
              <option value="angular">Angular</option>
            </SelectField>
          </div>
        </Preview>
        <CodeBlock
          code={`<Select placeholder="Select a framework...">
  <option value="react">React</option>
</Select>`}
        />
      </Section>

      {/* With label & helper */}
      <Section title="With Label & Helper Text">
        <Preview>
          <div className="max-w-xs space-y-5">
            <SelectField label="Country" helper="We use this for tax calculation.">
              <option value="" disabled>
                Choose a country
              </option>
              <option value="us">United States</option>
              <option value="uk">United Kingdom</option>
              <option value="de">Germany</option>
              <option value="fr">France</option>
            </SelectField>
            <SelectField label="Region" error="Please select a region">
              <option value="" disabled>
                Select region
              </option>
              <option value="na">North America</option>
              <option value="eu">Europe</option>
            </SelectField>
          </div>
        </Preview>
      </Section>

      {/* Sizes */}
      <Section title="Sizes">
        <Preview>
          <div className="max-w-xs space-y-3">
            <SelectField size="sm">
              <option>Small select</option>
              <option>Option 2</option>
            </SelectField>
            <SelectField size="md">
              <option>Medium select</option>
              <option>Option 2</option>
            </SelectField>
            <SelectField size="lg">
              <option>Large select</option>
              <option>Option 2</option>
            </SelectField>
          </div>
        </Preview>
        <CodeBlock
          code={`<Select size="sm">...</Select>
<Select size="md">...</Select>
<Select size="lg">...</Select>`}
        />
      </Section>

      {/* Disabled */}
      <Section title="Disabled">
        <Preview>
          <div className="max-w-xs">
            <SelectField label="Plan" disabled>
              <option>Enterprise</option>
            </SelectField>
          </div>
        </Preview>
      </Section>

      {/* Props */}
      <Section title="Props">
        <PropsTable
          props={[
            { name: "label", type: "string", description: "Label shown above the select" },
            { name: "placeholder", type: "string", description: "Placeholder text (disabled first option)" },
            { name: "helper", type: "string", description: "Helper text below the select" },
            { name: "error", type: "string", description: "Error message (replaces helper)" },
            { name: "size", type: '"sm" | "md" | "lg"', default: '"md"', description: "Select size" },
            { name: "disabled", type: "boolean", default: "false", description: "Disables the select" },
            { name: "value", type: "string", description: "Controlled value" },
            { name: "onChange", type: "(e) => void", description: "Change handler" },
            { name: "children", type: "ReactNode", description: "Option elements" },
          ]}
        />
      </Section>

      {/* Dos and Don'ts */}
      <Section title="Best Practices">
        <DosAndDonts
          dos={[
            "Use a select when there are 5 or more options",
            "Always include a label for accessibility",
            "Provide a placeholder option that communicates what to select",
            "Sort options logically (alphabetically, by frequency, etc.)",
          ]}
          donts={[
            "Don't use a select for fewer than 5 options (use radio buttons instead)",
            "Don't use a select for binary choices (use a toggle or checkbox)",
            "Don't pre-select a value unless it's a sensible default",
            "Don't nest optgroups more than one level deep",
          ]}
        />
      </Section>
    </DocPage>
  );
}
