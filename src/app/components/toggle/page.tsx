"use client";

import React, { useState } from "react";
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

function Toggle({
  checked = false,
  onChange,
  disabled = false,
  size = "md",
  label,
  description,
}: {
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  disabled?: boolean;
  size?: "sm" | "md";
  label?: string;
  description?: string;
}) {
  const track = size === "sm" ? "w-8 h-[18px]" : "w-10 h-[22px]";
  const thumb = size === "sm" ? "w-3.5 h-3.5" : "w-[18px] h-[18px]";
  const translate = size === "sm" ? "translate-x-[14px]" : "translate-x-[18px]";

  return (
    <label className={`inline-flex items-start gap-3 ${disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}`}>
      <button
        type="button"
        role="switch"
        aria-checked={checked}
        disabled={disabled}
        onClick={() => onChange?.(!checked)}
        className={`relative inline-flex flex-shrink-0 items-center rounded-full transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-brand-500/40 focus:ring-offset-2 ${track} ${
          checked ? "bg-brand-600" : "bg-neutral-300"
        } ${disabled ? "cursor-not-allowed" : "cursor-pointer"}`}
      >
        <span
          className={`inline-block rounded-full bg-white shadow-xs transition-transform duration-200 ease-in-out ${thumb} ${
            checked ? translate : "translate-x-0.5"
          }`}
        />
      </button>
      {(label || description) && (
        <div>
          {label && <span className="text-sm font-medium text-neutral-900">{label}</span>}
          {description && <p className="text-xs text-neutral-500 mt-0.5">{description}</p>}
        </div>
      )}
    </label>
  );
}

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export default function TogglePage() {
  const [a, setA] = useState(false);
  const [b, setB] = useState(true);
  const [c, setC] = useState(false);
  const [d, setD] = useState(true);
  const [e1, setE1] = useState(true);
  const [e2, setE2] = useState(false);
  const [e3, setE3] = useState(true);

  return (
    <DocPage
      title="Toggle / Switch"
      description="Toggle switches let users turn a single setting on or off immediately."
    >
      {/* States */}
      <Section title="States" description="Toggles can be off, on, or disabled.">
        <Preview>
          <div className="space-y-4">
            <Toggle checked={a} onChange={setA} label={a ? "On" : "Off"} />
            <Toggle checked={b} onChange={setB} label={b ? "On" : "Off"} />
            <Toggle checked={false} disabled label="Disabled off" />
            <Toggle checked={true} disabled label="Disabled on" />
          </div>
        </Preview>
        <CodeBlock
          code={`<Toggle checked={false} onChange={setChecked} />
<Toggle checked={true} onChange={setChecked} />
<Toggle disabled />
<Toggle checked disabled />`}
        />
      </Section>

      {/* Sizes */}
      <Section title="Sizes" description="Two sizes for different density contexts.">
        <Preview>
          <div className="space-y-4">
            <Toggle size="sm" checked={c} onChange={setC} label="Small" />
            <Toggle size="md" checked={d} onChange={setD} label="Medium" />
          </div>
        </Preview>
        <CodeBlock
          code={`<Toggle size="sm" label="Small" />
<Toggle size="md" label="Medium" />`}
        />
      </Section>

      {/* With label and description */}
      <Section title="With Label & Description">
        <Preview>
          <div className="space-y-5 max-w-md">
            <Toggle
              checked={e1}
              onChange={setE1}
              label="Email notifications"
              description="Receive weekly digest emails about your activity."
            />
            <Toggle
              checked={e2}
              onChange={setE2}
              label="Marketing emails"
              description="Get notified about new features and promotions."
            />
            <Toggle
              checked={e3}
              onChange={setE3}
              label="Two-factor authentication"
              description="Add an extra layer of security to your account."
            />
          </div>
        </Preview>
        <CodeBlock
          code={`<Toggle
  label="Email notifications"
  description="Receive weekly digest emails about your activity."
  checked={checked}
  onChange={setChecked}
/>`}
        />
      </Section>

      {/* Settings pattern */}
      <Section title="Settings Pattern" description="Common layout for settings pages.">
        <Preview>
          <div className="divide-y divide-neutral-200 border border-neutral-200 rounded-xl overflow-hidden">
            {[
              { label: "Dark mode", desc: "Use dark theme across the app", state: a, set: setA },
              { label: "Compact view", desc: "Reduce spacing in tables and lists", state: b, set: setB },
              { label: "Sound effects", desc: "Play sounds for notifications", state: c, set: setC },
            ].map((item) => (
              <div key={item.label} className="flex items-center justify-between px-4 py-3 bg-white">
                <div>
                  <p className="text-sm font-medium text-neutral-900">{item.label}</p>
                  <p className="text-xs text-neutral-500">{item.desc}</p>
                </div>
                <Toggle checked={item.state} onChange={item.set} />
              </div>
            ))}
          </div>
        </Preview>
      </Section>

      {/* Props */}
      <Section title="Props">
        <PropsTable
          props={[
            { name: "checked", type: "boolean", default: "false", description: "Whether the toggle is on" },
            { name: "onChange", type: "(checked: boolean) => void", description: "Called when state changes" },
            { name: "disabled", type: "boolean", default: "false", description: "Disables the toggle" },
            { name: "size", type: '"sm" | "md"', default: '"md"', description: "Toggle size" },
            { name: "label", type: "string", description: "Label text beside the toggle" },
            { name: "description", type: "string", description: "Secondary description text" },
            { name: "name", type: "string", description: "Form field name" },
          ]}
        />
      </Section>

      {/* Dos and Don'ts */}
      <Section title="Best Practices">
        <DosAndDonts
          dos={[
            "Use toggles for binary settings that take effect immediately",
            "Provide a visible label that describes the setting",
            "Place the toggle to the right of its label in settings layouts",
            "Use a toggle when the change doesn't require a save action",
          ]}
          donts={[
            "Don't use a toggle when the change requires a form submission (use checkbox)",
            "Don't use a toggle for actions (use a button instead)",
            "Don't use toggles in long lists of options (use checkboxes)",
            "Don't use negative labels like \"Disable notifications\"",
          ]}
        />
      </Section>
    </DocPage>
  );
}
