"use client";

import DocPage, {
  Section,
  Preview,
  CodeBlock,
  PropsTable,
  DosAndDonts,
} from "@/components/DocPage";

function Tooltip({
  text,
  position = "top",
  variant = "dark",
  children,
}: {
  text: string;
  position?: "top" | "right" | "bottom" | "left";
  variant?: "dark" | "light";
  children: React.ReactNode;
}) {
  const isDark = variant === "dark";
  const bg = isDark ? "bg-neutral-900" : "bg-white";
  const textColor = isDark ? "text-white" : "text-neutral-700";
  const border = isDark ? "" : "border border-neutral-200";
  const shadow = isDark ? "shadow-lg" : "shadow-md";
  const arrowBg = isDark ? "bg-neutral-900" : "bg-white";
  const arrowBorder = isDark ? "" : "border-l border-b border-neutral-200";

  const positionClasses: Record<string, string> = {
    top: "bottom-full left-1/2 -translate-x-1/2 mb-2",
    bottom: "top-full left-1/2 -translate-x-1/2 mt-2",
    left: "right-full top-1/2 -translate-y-1/2 mr-2",
    right: "left-full top-1/2 -translate-y-1/2 ml-2",
  };

  const arrowPositionClasses: Record<string, string> = {
    top: "top-full left-1/2 -translate-x-1/2 -mt-[3px] rotate-45",
    bottom: "bottom-full left-1/2 -translate-x-1/2 -mb-[3px] rotate-[225deg]",
    left: "left-full top-1/2 -translate-y-1/2 -ml-[3px] rotate-[-45deg]",
    right: "right-full top-1/2 -translate-y-1/2 -mr-[3px] rotate-[135deg]",
  };

  return (
    <div className="relative inline-flex">
      {children}
      <div
        className={`absolute ${positionClasses[position]} px-2.5 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap ${bg} ${textColor} ${border} ${shadow} z-10`}
      >
        {text}
        <div
          className={`absolute w-[6px] h-[6px] ${arrowBg} ${arrowBorder} ${arrowPositionClasses[position]}`}
        />
      </div>
    </div>
  );
}

export default function TooltipPage() {
  return (
    <DocPage
      title="Tooltip"
      description="Tooltips display brief, informative text when a user hovers over, focuses on, or taps an element. They provide additional context without cluttering the interface."
    >
      <Section
        title="Placement"
        description="Tooltips can be positioned on any side of the trigger element."
      >
        <Preview>
          <div className="flex items-center justify-center gap-16 py-10">
            <Tooltip text="Tooltip on top" position="top">
              <button className="px-4 py-2 text-sm font-medium bg-neutral-100 rounded-lg text-neutral-700 hover:bg-neutral-200 transition">
                Top
              </button>
            </Tooltip>
            <Tooltip text="Tooltip on right" position="right">
              <button className="px-4 py-2 text-sm font-medium bg-neutral-100 rounded-lg text-neutral-700 hover:bg-neutral-200 transition">
                Right
              </button>
            </Tooltip>
            <Tooltip text="Tooltip on bottom" position="bottom">
              <button className="px-4 py-2 text-sm font-medium bg-neutral-100 rounded-lg text-neutral-700 hover:bg-neutral-200 transition">
                Bottom
              </button>
            </Tooltip>
            <Tooltip text="Tooltip on left" position="left">
              <button className="px-4 py-2 text-sm font-medium bg-neutral-100 rounded-lg text-neutral-700 hover:bg-neutral-200 transition">
                Left
              </button>
            </Tooltip>
          </div>
        </Preview>
        <CodeBlock
          code={`<Tooltip text="Helpful hint" position="top">
  <button>Hover me</button>
</Tooltip>`}
        />
      </Section>

      <Section
        title="Dark & Light Variants"
        description="Use dark tooltips (default) for most cases. Light tooltips work well on dark backgrounds."
      >
        <Preview>
          <div className="flex items-center justify-center gap-16 py-10">
            <Tooltip text="Dark tooltip" position="top" variant="dark">
              <button className="px-4 py-2 text-sm font-medium bg-neutral-100 rounded-lg text-neutral-700">
                Dark (default)
              </button>
            </Tooltip>
            <Tooltip text="Light tooltip" position="top" variant="light">
              <button className="px-4 py-2 text-sm font-medium bg-neutral-800 rounded-lg text-white">
                Light
              </button>
            </Tooltip>
          </div>
        </Preview>
        <CodeBlock
          code={`<Tooltip text="Info" variant="dark">...</Tooltip>
<Tooltip text="Info" variant="light">...</Tooltip>`}
        />
      </Section>

      <Section
        title="With Arrow Indicator"
        description="All tooltip variants include an arrow that points to the trigger element, making the association clear."
      >
        <Preview>
          <div className="flex items-center justify-center gap-16 py-10">
            <Tooltip text="Arrow points down" position="top" variant="dark">
              <div className="w-10 h-10 rounded-full bg-brand-100 flex items-center justify-center">
                <svg className="w-5 h-5 text-brand-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </Tooltip>
            <Tooltip text="Arrow points left" position="right" variant="dark">
              <div className="w-10 h-10 rounded-full bg-success-50 flex items-center justify-center">
                <svg className="w-5 h-5 text-success-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
            </Tooltip>
            <Tooltip text="Arrow points up" position="bottom" variant="light">
              <div className="w-10 h-10 rounded-full bg-warning-50 flex items-center justify-center">
                <svg className="w-5 h-5 text-warning-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4.5c-.77-.833-2.694-.833-3.464 0L3.34 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
              </div>
            </Tooltip>
          </div>
        </Preview>
      </Section>

      <Section title="Props">
        <PropsTable
          props={[
            { name: "text", type: "string", description: "The tooltip content text" },
            { name: "position", type: '"top" | "right" | "bottom" | "left"', default: '"top"', description: "Where the tooltip appears relative to the trigger" },
            { name: "variant", type: '"dark" | "light"', default: '"dark"', description: "Visual style of the tooltip" },
            { name: "delay", type: "number", default: "200", description: "Delay in ms before the tooltip appears" },
            { name: "children", type: "ReactNode", description: "The trigger element" },
          ]}
        />
      </Section>

      <Section title="Guidelines">
        <DosAndDonts
          dos={[
            "Keep tooltip text short and informative (under 80 characters)",
            "Use tooltips to clarify icon-only buttons",
            "Position tooltips to avoid clipping by viewport edges",
            "Include a small delay before showing to prevent accidental triggers",
          ]}
          donts={[
            "Don't put essential information only in tooltips",
            "Don't use tooltips for complex content or interactions",
            "Don't show tooltips on disabled elements without explanation",
            "Don't use tooltips on touch-only devices as the primary info method",
          ]}
        />
      </Section>
    </DocPage>
  );
}
