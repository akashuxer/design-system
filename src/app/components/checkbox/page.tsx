"use client";

import React, { useState, useRef, useEffect } from "react";
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

function Checkbox({
  label,
  description,
  checked,
  indeterminate = false,
  disabled = false,
  onChange,
  defaultChecked,
}: {
  label?: string;
  description?: string;
  checked?: boolean;
  indeterminate?: boolean;
  disabled?: boolean;
  onChange?: (checked: boolean) => void;
  defaultChecked?: boolean;
}) {
  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (ref.current) ref.current.indeterminate = indeterminate;
  }, [indeterminate]);

  return (
    <label className={`flex items-start gap-3 ${disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}`}>
      <input
        ref={ref}
        type="checkbox"
        checked={checked}
        defaultChecked={defaultChecked}
        disabled={disabled}
        onChange={(e) => onChange?.(e.target.checked)}
        className="mt-0.5 h-4 w-4 rounded border-neutral-300 text-brand-600 focus:ring-2 focus:ring-brand-500/20 focus:ring-offset-1 disabled:cursor-not-allowed accent-brand-600"
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

export default function CheckboxPage() {
  const [items, setItems] = useState([true, false, true]);

  const allChecked = items.every(Boolean);
  const someChecked = items.some(Boolean) && !allChecked;

  const toggleAll = () => {
    setItems(allChecked ? [false, false, false] : [true, true, true]);
  };

  const toggleOne = (i: number) => {
    setItems((prev) => prev.map((v, idx) => (idx === i ? !v : v)));
  };

  return (
    <DocPage
      title="Checkbox"
      description="Checkboxes let users select one or more items from a list, or toggle a single option on/off."
    >
      {/* Default states */}
      <Section title="States" description="Checkboxes can be unchecked, checked, indeterminate, or disabled.">
        <Preview>
          <div className="space-y-3">
            <Checkbox label="Unchecked" />
            <Checkbox label="Checked" defaultChecked />
            <Checkbox label="Indeterminate" indeterminate />
            <Checkbox label="Disabled unchecked" disabled />
            <Checkbox label="Disabled checked" disabled defaultChecked />
          </div>
        </Preview>
        <CodeBlock
          code={`<Checkbox label="Unchecked" />
<Checkbox label="Checked" checked />
<Checkbox label="Indeterminate" indeterminate />
<Checkbox label="Disabled" disabled />`}
        />
      </Section>

      {/* With description */}
      <Section title="With Description" description="Add a secondary description for additional context.">
        <Preview>
          <div className="space-y-4">
            <Checkbox
              label="Email notifications"
              description="Receive email updates about account activity."
              defaultChecked
            />
            <Checkbox
              label="SMS notifications"
              description="Receive text messages for urgent alerts."
            />
            <Checkbox
              label="Push notifications"
              description="Receive browser push notifications."
              defaultChecked
            />
          </div>
        </Preview>
        <CodeBlock
          code={`<Checkbox
  label="Email notifications"
  description="Receive email updates about account activity."
  checked
/>`}
        />
      </Section>

      {/* Checkbox group with select-all */}
      <Section title="Checkbox Group" description="Use indeterminate state for a parent that controls children.">
        <Preview>
          <div className="space-y-1">
            <Checkbox
              label="Select all permissions"
              checked={allChecked}
              indeterminate={someChecked}
              onChange={toggleAll}
            />
            <div className="ml-7 space-y-1 pt-1 border-l-2 border-neutral-200 pl-4">
              <Checkbox label="Read access" checked={items[0]} onChange={() => toggleOne(0)} />
              <Checkbox label="Write access" checked={items[1]} onChange={() => toggleOne(1)} />
              <Checkbox label="Admin access" checked={items[2]} onChange={() => toggleOne(2)} />
            </div>
          </div>
        </Preview>
        <CodeBlock
          code={`<CheckboxGroup>
  <Checkbox label="Select all" indeterminate={someChecked} checked={allChecked} onChange={toggleAll} />
  <Checkbox label="Read access" checked={items[0]} />
  <Checkbox label="Write access" checked={items[1]} />
  <Checkbox label="Admin access" checked={items[2]} />
</CheckboxGroup>`}
        />
      </Section>

      {/* Props */}
      <Section title="Props">
        <PropsTable
          props={[
            { name: "label", type: "string", description: "Label text next to the checkbox" },
            { name: "description", type: "string", description: "Secondary description below the label" },
            { name: "checked", type: "boolean", description: "Controlled checked state" },
            { name: "defaultChecked", type: "boolean", default: "false", description: "Initial checked state (uncontrolled)" },
            { name: "indeterminate", type: "boolean", default: "false", description: "Shows a dash instead of checkmark" },
            { name: "disabled", type: "boolean", default: "false", description: "Disables the checkbox" },
            { name: "onChange", type: "(checked: boolean) => void", description: "Called when state changes" },
            { name: "name", type: "string", description: "Form field name" },
            { name: "value", type: "string", description: "Form field value" },
          ]}
        />
      </Section>

      {/* Dos and Don'ts */}
      <Section title="Best Practices">
        <DosAndDonts
          dos={[
            "Use checkboxes for multiple selections from a list",
            "Use indeterminate state for parent checkboxes",
            "Write labels as positive statements (Enable X, not Disable X)",
            "Group related checkboxes visually",
          ]}
          donts={[
            "Don't use a checkbox for mutually exclusive options (use radios)",
            "Don't use a checkbox when a toggle switch is more appropriate",
            "Don't use negative labels that make the checked state confusing",
            "Don't nest checkbox groups more than one level deep",
          ]}
        />
      </Section>
    </DocPage>
  );
}
