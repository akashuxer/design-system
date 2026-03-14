"use client";

import React, { useState } from "react";
import DocPage, {
  Section,
  Preview,
  CodeBlock,
  PropsTable,
  DosAndDonts,
} from "@/components/DocPage";
import { Search, Eye, EyeOff, Mail, DollarSign, Lock } from "lucide-react";

/* ------------------------------------------------------------------ */
/*  Helpers                                                            */
/* ------------------------------------------------------------------ */

const sizeClasses: Record<string, string> = {
  sm: "text-xs px-3 py-1.5",
  md: "text-sm px-3.5 py-2",
  lg: "text-base px-4 py-2.5",
};

function InputField({
  label,
  helper,
  error,
  size = "md",
  prefix,
  suffix,
  className = "",
  wrapperClass = "",
  ...rest
}: React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  helper?: string;
  error?: string;
  size?: "sm" | "md" | "lg";
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
  wrapperClass?: string;
}) {
  const ring = error
    ? "border-error-500 focus-within:ring-error-500/20"
    : "border-neutral-300 focus-within:ring-brand-500/20 focus-within:border-brand-500";
  return (
    <div className={wrapperClass}>
      {label && (
        <label className="block text-sm font-medium text-neutral-700 mb-1.5">{label}</label>
      )}
      <div
        className={`flex items-center rounded-lg border bg-white transition-all focus-within:ring-2 ${ring} ${
          rest.disabled ? "bg-neutral-50 opacity-60" : ""
        }`}
      >
        {prefix && <span className="pl-3 text-neutral-400 flex-shrink-0">{prefix}</span>}
        <input
          className={`w-full bg-transparent outline-none placeholder:text-neutral-400 text-neutral-900 ${sizeClasses[size]} ${
            prefix ? "!pl-2" : ""
          } ${suffix ? "!pr-2" : ""} ${className}`}
          {...rest}
        />
        {suffix && <span className="pr-3 text-neutral-400 flex-shrink-0">{suffix}</span>}
      </div>
      {error && <p className="mt-1.5 text-xs text-error-500">{error}</p>}
      {helper && !error && <p className="mt-1.5 text-xs text-neutral-500">{helper}</p>}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export default function InputPage() {
  const [showPw, setShowPw] = useState(false);
  const [pwValue, setPwValue] = useState("supersecret");

  return (
    <DocPage
      title="Input / Text Field"
      description="Text inputs let users enter and edit short-form text. Use labels, helpers, and validation to guide users."
    >
      {/* Basic */}
      <Section title="Default Input" description="A minimal text input with placeholder.">
        <Preview>
          <div className="max-w-xs">
            <InputField placeholder="Enter your name" />
          </div>
        </Preview>
        <CodeBlock code={`<Input placeholder="Enter your name" />`} />
      </Section>

      {/* With label & helper */}
      <Section title="With Label & Helper Text">
        <Preview>
          <div className="max-w-xs space-y-5">
            <InputField label="Email address" placeholder="you@company.com" helper="We'll never share your email." />
            <InputField
              label="Username"
              placeholder="johndoe"
              error="Username is already taken"
              defaultValue="admin"
            />
          </div>
        </Preview>
        <CodeBlock
          code={`<Input label="Email address" placeholder="you@company.com" helper="We'll never share your email." />
<Input label="Username" error="Username is already taken" />`}
        />
      </Section>

      {/* Sizes */}
      <Section title="Sizes" description="Three sizes to match different density contexts.">
        <Preview>
          <div className="max-w-xs space-y-3">
            <InputField size="sm" placeholder="Small input" />
            <InputField size="md" placeholder="Medium input" />
            <InputField size="lg" placeholder="Large input" />
          </div>
        </Preview>
        <CodeBlock
          code={`<Input size="sm" placeholder="Small" />
<Input size="md" placeholder="Medium" />
<Input size="lg" placeholder="Large" />`}
        />
      </Section>

      {/* Prefix & Suffix */}
      <Section title="Prefix & Suffix" description="Add icons or text to provide context.">
        <Preview>
          <div className="max-w-xs space-y-3">
            <InputField prefix={<Mail className="w-4 h-4" />} placeholder="Email" />
            <InputField prefix={<DollarSign className="w-4 h-4" />} placeholder="0.00" suffix={<span className="text-xs text-neutral-500">USD</span>} />
            <InputField prefix={<span className="text-sm text-neutral-500">https://</span>} placeholder="yoursite.com" />
          </div>
        </Preview>
        <CodeBlock
          code={`<Input prefix={<MailIcon />} placeholder="Email" />
<Input prefix={<DollarSign />} placeholder="0.00" suffix="USD" />
<Input prefix="https://" placeholder="yoursite.com" />`}
        />
      </Section>

      {/* Disabled & Read-only */}
      <Section title="Disabled & Read-only">
        <Preview>
          <div className="max-w-xs space-y-3">
            <InputField label="Disabled" placeholder="Cannot type" disabled />
            <InputField label="Read-only" value="This is read-only" readOnly className="cursor-default" />
          </div>
        </Preview>
      </Section>

      {/* Search */}
      <Section title="Search Input" description="A pre-styled search variant with icon.">
        <Preview>
          <div className="max-w-xs">
            <InputField
              prefix={<Search className="w-4 h-4" />}
              placeholder="Search..."
              type="search"
            />
          </div>
        </Preview>
        <CodeBlock code={`<Input variant="search" placeholder="Search..." />`} />
      </Section>

      {/* Password */}
      <Section title="Password Input" description="Toggle visibility with a suffix button.">
        <Preview>
          <div className="max-w-xs">
            <InputField
              label="Password"
              type={showPw ? "text" : "password"}
              value={pwValue}
              onChange={(e) => setPwValue(e.target.value)}
              prefix={<Lock className="w-4 h-4" />}
              suffix={
                <button type="button" onClick={() => setShowPw(!showPw)} className="text-neutral-400 hover:text-neutral-600">
                  {showPw ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              }
            />
          </div>
        </Preview>
        <CodeBlock
          code={`<Input type="password" label="Password" showToggle />`}
        />
      </Section>

      {/* Textarea */}
      <Section title="Textarea" description="Multi-line text input for longer content.">
        <Preview>
          <div className="max-w-md">
            <label className="block text-sm font-medium text-neutral-700 mb-1.5">Message</label>
            <textarea
              rows={4}
              className="w-full rounded-lg border border-neutral-300 bg-white px-3.5 py-2 text-sm text-neutral-900 placeholder:text-neutral-400 outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 transition-all resize-y"
              placeholder="Write your message here..."
            />
            <p className="mt-1.5 text-xs text-neutral-500">Max 500 characters</p>
          </div>
        </Preview>
        <CodeBlock
          code={`<Textarea label="Message" placeholder="Write your message..." rows={4} helper="Max 500 characters" />`}
        />
      </Section>

      {/* Props */}
      <Section title="Props">
        <PropsTable
          props={[
            { name: "label", type: "string", description: "Label shown above the input" },
            { name: "placeholder", type: "string", description: "Placeholder text" },
            { name: "helper", type: "string", description: "Helper text below the input" },
            { name: "error", type: "string", description: "Error message (replaces helper when set)" },
            { name: "size", type: '"sm" | "md" | "lg"', default: '"md"', description: "Input size" },
            { name: "prefix", type: "ReactNode", description: "Element before the input value" },
            { name: "suffix", type: "ReactNode", description: "Element after the input value" },
            { name: "disabled", type: "boolean", default: "false", description: "Disables the input" },
            { name: "readOnly", type: "boolean", default: "false", description: "Makes the input read-only" },
            { name: "type", type: "string", default: '"text"', description: "HTML input type" },
            { name: "value", type: "string", description: "Controlled value" },
            { name: "onChange", type: "(e) => void", description: "Change handler" },
          ]}
        />
      </Section>

      {/* Dos and Don'ts */}
      <Section title="Best Practices">
        <DosAndDonts
          dos={[
            "Always provide a visible label (not just placeholder)",
            "Show validation errors inline near the field",
            "Use helper text to explain formatting requirements",
            "Use appropriate input types (email, tel, url)",
            "Mark optional fields rather than required ones",
          ]}
          donts={[
            "Don't use placeholder text as a label replacement",
            "Don't show errors before the user has interacted",
            "Don't use long helper text that wraps to many lines",
            "Don't disable inputs without clear context",
            "Don't mix input sizes within the same form",
          ]}
        />
      </Section>
    </DocPage>
  );
}
