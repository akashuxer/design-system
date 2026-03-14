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

function Radio({
  label,
  description,
  name,
  value,
  checked,
  disabled = false,
  onChange,
  defaultChecked,
}: {
  label?: string;
  description?: string;
  name?: string;
  value?: string;
  checked?: boolean;
  disabled?: boolean;
  onChange?: (value: string) => void;
  defaultChecked?: boolean;
}) {
  return (
    <label className={`flex items-start gap-3 ${disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}`}>
      <input
        type="radio"
        name={name}
        value={value}
        checked={checked}
        defaultChecked={defaultChecked}
        disabled={disabled}
        onChange={() => onChange?.(value ?? "")}
        className="mt-0.5 h-4 w-4 border-neutral-300 text-brand-600 focus:ring-2 focus:ring-brand-500/20 focus:ring-offset-1 accent-brand-600"
      />
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

export default function RadioPage() {
  const [plan, setPlan] = useState("pro");
  const [frequency, setFrequency] = useState("monthly");

  return (
    <DocPage
      title="Radio"
      description="Radio buttons let users select a single option from a mutually exclusive set."
    >
      {/* Default states */}
      <Section title="States" description="Radio buttons can be unselected, selected, or disabled.">
        <Preview>
          <div className="space-y-3">
            <Radio label="Unselected" name="demo-state" value="a" />
            <Radio label="Selected" name="demo-state" value="b" defaultChecked />
            <Radio label="Disabled" name="demo-disabled" value="c" disabled />
            <Radio label="Disabled selected" name="demo-disabled2" value="d" disabled defaultChecked />
          </div>
        </Preview>
        <CodeBlock
          code={`<Radio label="Unselected" name="group" value="a" />
<Radio label="Selected" name="group" value="b" checked />
<Radio label="Disabled" name="group" value="c" disabled />`}
        />
      </Section>

      {/* Radio group */}
      <Section title="Radio Group" description="Group related radio buttons with a fieldset label.">
        <Preview>
          <fieldset>
            <legend className="text-sm font-semibold text-neutral-900 mb-3">Billing frequency</legend>
            <div className="space-y-3">
              <Radio
                label="Monthly"
                name="freq"
                value="monthly"
                checked={frequency === "monthly"}
                onChange={setFrequency}
              />
              <Radio
                label="Quarterly"
                name="freq"
                value="quarterly"
                checked={frequency === "quarterly"}
                onChange={setFrequency}
              />
              <Radio
                label="Annually"
                name="freq"
                value="annually"
                checked={frequency === "annually"}
                onChange={setFrequency}
              />
            </div>
          </fieldset>
        </Preview>
        <CodeBlock
          code={`<RadioGroup label="Billing frequency" value={frequency} onChange={setFrequency}>
  <Radio value="monthly" label="Monthly" />
  <Radio value="quarterly" label="Quarterly" />
  <Radio value="annually" label="Annually" />
</RadioGroup>`}
        />
      </Section>

      {/* With descriptions */}
      <Section title="With Descriptions" description="Add descriptions to help users understand each option.">
        <Preview>
          <fieldset>
            <legend className="text-sm font-semibold text-neutral-900 mb-3">Choose a plan</legend>
            <div className="space-y-4">
              <Radio
                label="Starter"
                description="Up to 5 users, 10GB storage. Best for individuals."
                name="plan"
                value="starter"
                checked={plan === "starter"}
                onChange={setPlan}
              />
              <Radio
                label="Pro"
                description="Up to 25 users, 100GB storage. Best for small teams."
                name="plan"
                value="pro"
                checked={plan === "pro"}
                onChange={setPlan}
              />
              <Radio
                label="Enterprise"
                description="Unlimited users and storage. Dedicated support."
                name="plan"
                value="enterprise"
                checked={plan === "enterprise"}
                onChange={setPlan}
              />
            </div>
          </fieldset>
        </Preview>
        <CodeBlock
          code={`<RadioGroup label="Choose a plan" value={plan} onChange={setPlan}>
  <Radio value="starter" label="Starter" description="Up to 5 users, 10GB storage." />
  <Radio value="pro" label="Pro" description="Up to 25 users, 100GB storage." />
  <Radio value="enterprise" label="Enterprise" description="Unlimited users and storage." />
</RadioGroup>`}
        />
      </Section>

      {/* Card-style radio group */}
      <Section title="Card Selection" description="A card-style variant for more prominent choices.">
        <Preview>
          <div className="grid grid-cols-3 gap-3">
            {[
              { value: "starter", label: "Starter", price: "$9/mo" },
              { value: "pro", label: "Pro", price: "$29/mo" },
              { value: "enterprise", label: "Enterprise", price: "$99/mo" },
            ].map((opt) => (
              <button
                key={opt.value}
                onClick={() => setPlan(opt.value)}
                className={`rounded-xl border-2 p-4 text-left transition-all ${
                  plan === opt.value
                    ? "border-brand-600 bg-brand-50 ring-1 ring-brand-600"
                    : "border-neutral-200 bg-white hover:border-neutral-300"
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm font-semibold text-neutral-900">{opt.label}</span>
                  <div
                    className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                      plan === opt.value ? "border-brand-600" : "border-neutral-300"
                    }`}
                  >
                    {plan === opt.value && (
                      <div className="w-2 h-2 rounded-full bg-brand-600" />
                    )}
                  </div>
                </div>
                <span className="text-xs text-neutral-500">{opt.price}</span>
              </button>
            ))}
          </div>
        </Preview>
      </Section>

      {/* Props */}
      <Section title="Props">
        <PropsTable
          props={[
            { name: "label", type: "string", description: "Label text next to the radio" },
            { name: "description", type: "string", description: "Secondary description below the label" },
            { name: "name", type: "string", description: "Group name (shared across group)" },
            { name: "value", type: "string", description: "Value of this radio option" },
            { name: "checked", type: "boolean", description: "Controlled checked state" },
            { name: "disabled", type: "boolean", default: "false", description: "Disables the radio" },
            { name: "onChange", type: "(value: string) => void", description: "Called when this radio is selected" },
          ]}
        />
      </Section>

      {/* Dos and Don'ts */}
      <Section title="Best Practices">
        <DosAndDonts
          dos={[
            "Use radios for mutually exclusive choices (2-7 options)",
            "Always pre-select a default option when possible",
            "List options in a logical order",
            "Use a fieldset and legend to label the group",
          ]}
          donts={[
            "Don't use radios for on/off toggles (use a checkbox or switch)",
            "Don't use radios for more than 7 options (use a select)",
            "Don't use radios for multi-select (use checkboxes)",
            "Don't leave a radio group without a default selection",
          ]}
        />
      </Section>
    </DocPage>
  );
}
