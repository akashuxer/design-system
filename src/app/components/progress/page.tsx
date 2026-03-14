"use client";

import DocPage, {
  Section,
  Preview,
  CodeBlock,
  PropsTable,
  DosAndDonts,
} from "@/components/DocPage";

const colorMap: Record<string, { bg: string; bar: string }> = {
  brand: { bg: "bg-brand-100", bar: "bg-brand-600" },
  success: { bg: "bg-success-50", bar: "bg-success-500" },
  warning: { bg: "bg-warning-50", bar: "bg-warning-500" },
  error: { bg: "bg-error-50", bar: "bg-error-500" },
};

const sizeMap: Record<string, string> = {
  sm: "h-1.5",
  md: "h-2.5",
  lg: "h-4",
};

function ProgressBar({
  value,
  color = "brand",
  size = "md",
  showLabel = false,
  indeterminate = false,
}: {
  value?: number;
  color?: string;
  size?: "sm" | "md" | "lg";
  showLabel?: boolean;
  indeterminate?: boolean;
}) {
  const c = colorMap[color] || colorMap.brand;
  const h = sizeMap[size];

  if (indeterminate) {
    return (
      <div className={`w-full ${h} ${c.bg} rounded-full overflow-hidden`}>
        <div
          className={`h-full ${c.bar} rounded-full animate-[indeterminate_1.5s_ease-in-out_infinite]`}
          style={{ width: "40%" }}
        />
      </div>
    );
  }

  const pct = Math.min(100, Math.max(0, value ?? 0));

  return (
    <div className="w-full">
      {showLabel && (
        <div className="flex justify-between items-center mb-1.5">
          <span className="text-xs font-medium text-neutral-700">Progress</span>
          <span className="text-xs font-medium text-neutral-500">{pct}%</span>
        </div>
      )}
      <div className={`w-full ${h} ${c.bg} rounded-full overflow-hidden`}>
        <div
          className={`h-full ${c.bar} rounded-full transition-all duration-500 ease-out`}
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  );
}

export default function ProgressPage() {
  return (
    <DocPage
      title="Progress"
      description="Progress indicators show the completion status of a task or process. They give users visual feedback on how much has been done and how much remains."
    >
      <Section
        title="Linear Progress Bar"
        description="A horizontal bar that fills proportionally to the completion percentage."
      >
        <Preview>
          <div className="space-y-6 max-w-lg">
            <ProgressBar value={25} />
            <ProgressBar value={50} />
            <ProgressBar value={75} />
            <ProgressBar value={100} />
          </div>
        </Preview>
        <CodeBlock
          code={`<Progress value={50} />`}
        />
      </Section>

      <Section
        title="With Percentage Label"
        description="Display the exact percentage alongside the bar for precise feedback."
      >
        <Preview>
          <div className="space-y-6 max-w-lg">
            <ProgressBar value={33} showLabel />
            <ProgressBar value={67} showLabel />
            <ProgressBar value={100} showLabel />
          </div>
        </Preview>
        <CodeBlock code={`<Progress value={67} showLabel />`} />
      </Section>

      <Section
        title="Color Variants"
        description="Use semantic colors to communicate the nature of the progress."
      >
        <Preview>
          <div className="space-y-5 max-w-lg">
            <div>
              <span className="text-xs text-neutral-500 mb-1.5 block">Brand (default)</span>
              <ProgressBar value={60} color="brand" />
            </div>
            <div>
              <span className="text-xs text-neutral-500 mb-1.5 block">Success</span>
              <ProgressBar value={100} color="success" />
            </div>
            <div>
              <span className="text-xs text-neutral-500 mb-1.5 block">Warning</span>
              <ProgressBar value={75} color="warning" />
            </div>
            <div>
              <span className="text-xs text-neutral-500 mb-1.5 block">Error</span>
              <ProgressBar value={40} color="error" />
            </div>
          </div>
        </Preview>
        <CodeBlock
          code={`<Progress value={100} color="success" />
<Progress value={75} color="warning" />
<Progress value={40} color="error" />`}
        />
      </Section>

      <Section
        title="Sizes"
        description="Three height options to match different layout contexts."
      >
        <Preview>
          <div className="space-y-6 max-w-lg">
            <div>
              <span className="text-xs text-neutral-400 mb-2 block">Small (sm)</span>
              <ProgressBar value={60} size="sm" />
            </div>
            <div>
              <span className="text-xs text-neutral-400 mb-2 block">Medium (md) - default</span>
              <ProgressBar value={60} size="md" />
            </div>
            <div>
              <span className="text-xs text-neutral-400 mb-2 block">Large (lg)</span>
              <ProgressBar value={60} size="lg" />
            </div>
          </div>
        </Preview>
        <CodeBlock
          code={`<Progress value={60} size="sm" />
<Progress value={60} size="md" />
<Progress value={60} size="lg" />`}
        />
      </Section>

      <Section
        title="Indeterminate State"
        description="When progress cannot be determined, use an animated indeterminate bar to indicate activity."
      >
        <Preview>
          <div className="space-y-5 max-w-lg">
            <style>{`
              @keyframes indeterminate {
                0% { transform: translateX(-100%); }
                100% { transform: translateX(350%); }
              }
            `}</style>
            <ProgressBar indeterminate color="brand" />
            <ProgressBar indeterminate color="success" size="sm" />
          </div>
        </Preview>
        <CodeBlock code={`<Progress indeterminate />`} />
      </Section>

      <Section title="Props">
        <PropsTable
          props={[
            { name: "value", type: "number", default: "0", description: "Completion percentage (0-100)" },
            { name: "color", type: '"brand" | "success" | "warning" | "error"', default: '"brand"', description: "Color of the progress bar" },
            { name: "size", type: '"sm" | "md" | "lg"', default: '"md"', description: "Height of the progress bar" },
            { name: "showLabel", type: "boolean", default: "false", description: "Display percentage text above the bar" },
            { name: "indeterminate", type: "boolean", default: "false", description: "Show animated indeterminate state" },
            { name: "ariaLabel", type: "string", description: "Accessible label for screen readers" },
          ]}
        />
      </Section>

      <Section title="Guidelines">
        <DosAndDonts
          dos={[
            "Use determinate progress when the completion percentage is known",
            "Use indeterminate progress for operations with unknown duration",
            "Pair progress bars with descriptive text (e.g., 'Uploading file...')",
            "Use color to indicate success/warning/error states at completion",
          ]}
          donts={[
            "Don't use progress bars for values that don't represent completion",
            "Don't leave progress at 100% indefinitely - transition to a success state",
            "Don't animate between widely different values - it looks jarring",
            "Don't use progress bars for real-time metrics - use charts instead",
          ]}
        />
      </Section>
    </DocPage>
  );
}
