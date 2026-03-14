"use client";

import { useState } from "react";
import DocPage, {
  Section,
  Preview,
  CodeBlock,
  PropsTable,
  DosAndDonts,
} from "@/components/DocPage";

const colorStyles: Record<string, { bg: string; text: string; border: string; hoverBg: string }> = {
  neutral: { bg: "bg-neutral-100", text: "text-neutral-700", border: "border-neutral-200", hoverBg: "hover:bg-neutral-200" },
  brand: { bg: "bg-brand-50", text: "text-brand-700", border: "border-brand-200", hoverBg: "hover:bg-brand-100" },
  success: { bg: "bg-success-50", text: "text-success-700", border: "border-success-500/20", hoverBg: "hover:bg-success-50" },
  warning: { bg: "bg-warning-50", text: "text-warning-700", border: "border-warning-500/20", hoverBg: "hover:bg-warning-50" },
  error: { bg: "bg-error-50", text: "text-error-700", border: "border-error-500/20", hoverBg: "hover:bg-error-50" },
};

function Tag({
  label,
  color = "neutral",
  size = "md",
  removable = false,
  onRemove,
}: {
  label: string;
  color?: keyof typeof colorStyles;
  size?: "sm" | "md";
  removable?: boolean;
  onRemove?: () => void;
}) {
  const c = colorStyles[color];
  const sizeClasses = size === "sm" ? "text-xs px-2 py-0.5 gap-1" : "text-xs px-2.5 py-1 gap-1.5";

  return (
    <span className={`inline-flex items-center font-medium rounded-md border ${c.bg} ${c.text} ${c.border} ${sizeClasses}`}>
      {label}
      {removable && (
        <button
          onClick={onRemove}
          className={`rounded-sm ${c.hoverBg} transition-colors`}
        >
          <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      )}
    </span>
  );
}

function TagInput() {
  const [tags, setTags] = useState(["React", "TypeScript", "Tailwind"]);
  const [input, setInput] = useState("");

  const addTag = () => {
    const trimmed = input.trim();
    if (trimmed && !tags.includes(trimmed)) {
      setTags([...tags, trimmed]);
      setInput("");
    }
  };

  const removeTag = (tag: string) => {
    setTags(tags.filter((t) => t !== tag));
  };

  return (
    <div className="border border-neutral-200 rounded-lg px-3 py-2 flex flex-wrap items-center gap-2 focus-within:ring-2 focus-within:ring-brand-500/20 focus-within:border-brand-300 transition-all bg-white">
      {tags.map((tag) => (
        <Tag key={tag} label={tag} color="brand" size="sm" removable onRemove={() => removeTag(tag)} />
      ))}
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") { e.preventDefault(); addTag(); }
          if (e.key === "Backspace" && input === "" && tags.length > 0) {
            setTags(tags.slice(0, -1));
          }
        }}
        placeholder={tags.length === 0 ? "Add tags..." : ""}
        className="flex-1 min-w-[80px] text-sm outline-none placeholder:text-neutral-400"
      />
    </div>
  );
}

export default function TagPage() {
  const [tags, setTags] = useState(["Design", "Frontend", "API", "Docs"]);

  return (
    <DocPage
      title="Tag"
      description="Tags are compact elements used to label, categorize, or filter content. They help users quickly scan and identify items across lists and forms."
    >
      <Section
        title="Default Tags"
        description="Basic tags in their non-interactive form for labeling content."
      >
        <Preview>
          <div className="flex flex-wrap gap-2">
            <Tag label="Design" />
            <Tag label="Engineering" />
            <Tag label="Marketing" />
            <Tag label="Product" />
          </div>
        </Preview>
        <CodeBlock code={`<Tag>Design</Tag>\n<Tag>Engineering</Tag>`} />
      </Section>

      <Section
        title="Removable Tags"
        description="Tags with a close button for user-managed lists like filters or multi-select inputs."
      >
        <Preview>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <Tag
                key={tag}
                label={tag}
                color="brand"
                removable
                onRemove={() => setTags(tags.filter((t) => t !== tag))}
              />
            ))}
            {tags.length === 0 && (
              <button
                onClick={() => setTags(["Design", "Frontend", "API", "Docs"])}
                className="text-xs text-brand-600 hover:underline"
              >
                Reset tags
              </button>
            )}
          </div>
        </Preview>
        <CodeBlock code={`<Tag removable onRemove={handleRemove}>Design</Tag>`} />
      </Section>

      <Section
        title="Color Variants"
        description="Use semantic colors to convey meaning: neutral for default, brand for selection, and status colors for categorization."
      >
        <Preview>
          <div className="flex flex-wrap gap-2">
            <Tag label="Neutral" color="neutral" />
            <Tag label="Brand" color="brand" />
            <Tag label="Success" color="success" />
            <Tag label="Warning" color="warning" />
            <Tag label="Error" color="error" />
          </div>
        </Preview>
        <CodeBlock
          code={`<Tag color="neutral">Neutral</Tag>
<Tag color="brand">Brand</Tag>
<Tag color="success">Success</Tag>
<Tag color="warning">Warning</Tag>
<Tag color="error">Error</Tag>`}
        />
      </Section>

      <Section
        title="Sizes"
        description="Small tags for compact UIs and tables. Medium for standard use."
      >
        <Preview>
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <span className="text-xs text-neutral-400 w-8">sm</span>
              <div className="flex gap-2">
                <Tag label="Small" size="sm" />
                <Tag label="Removable" size="sm" color="brand" removable />
              </div>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-xs text-neutral-400 w-8">md</span>
              <div className="flex gap-2">
                <Tag label="Medium" size="md" />
                <Tag label="Removable" size="md" color="brand" removable />
              </div>
            </div>
          </div>
        </Preview>
        <CodeBlock code={`<Tag size="sm">Small</Tag>\n<Tag size="md">Medium</Tag>`} />
      </Section>

      <Section
        title="Tag Input"
        description="An input field that allows users to add multiple tags. Press Enter to add, Backspace to remove the last tag."
      >
        <Preview>
          <div className="max-w-md">
            <label className="block text-sm font-medium text-neutral-700 mb-1.5">Skills</label>
            <TagInput />
            <p className="text-xs text-neutral-400 mt-1.5">Press Enter to add a tag, Backspace to remove</p>
          </div>
        </Preview>
        <CodeBlock
          code={`<TagInput
  value={["React", "TypeScript"]}
  onChange={setTags}
  placeholder="Add skills..."
/>`}
        />
      </Section>

      <Section title="Props">
        <PropsTable
          props={[
            { name: "children", type: "string", description: "Tag label text" },
            { name: "color", type: '"neutral" | "brand" | "success" | "warning" | "error"', default: '"neutral"', description: "Color variant for the tag" },
            { name: "size", type: '"sm" | "md"', default: '"md"', description: "Size of the tag" },
            { name: "removable", type: "boolean", default: "false", description: "Show a remove button" },
            { name: "onRemove", type: "() => void", description: "Callback when remove button is clicked" },
          ]}
        />
      </Section>

      <Section title="Guidelines">
        <DosAndDonts
          dos={[
            "Use consistent tag colors for the same category across the product",
            "Keep tag labels concise (1-2 words)",
            "Use removable tags for user-generated or editable tag lists",
            "Group related tags together visually",
          ]}
          donts={[
            "Don't use more than 5-6 tags per item in a list view",
            "Don't use tags for status - use a Badge instead",
            "Don't mix tag sizes within the same context",
            "Don't use color as the only differentiator - include meaningful labels",
          ]}
        />
      </Section>
    </DocPage>
  );
}
