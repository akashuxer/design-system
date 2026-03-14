"use client";

import React, { useState } from "react";
import DocPage, {
  Section,
  Preview,
  CodeBlock,
  PropsTable,
  DosAndDonts,
} from "@/components/DocPage";
import { Info, CheckCircle, AlertTriangle, XCircle, X } from "lucide-react";

/* ------------------------------------------------------------------ */
/*  Helper                                                             */
/* ------------------------------------------------------------------ */

const typeMap: Record<string, { bg: string; border: string; icon: React.ElementType; iconColor: string; titleColor: string }> = {
  info: { bg: "bg-info-50", border: "border-info-500/30", icon: Info, iconColor: "text-info-500", titleColor: "text-info-700" },
  success: { bg: "bg-success-50", border: "border-success-500/30", icon: CheckCircle, iconColor: "text-success-500", titleColor: "text-success-700" },
  warning: { bg: "bg-warning-50", border: "border-warning-500/30", icon: AlertTriangle, iconColor: "text-warning-500", titleColor: "text-warning-700" },
  error: { bg: "bg-error-50", border: "border-error-500/30", icon: XCircle, iconColor: "text-error-500", titleColor: "text-error-700" },
};

function Alert({
  type = "info",
  title,
  children,
  closable = false,
  onClose,
  action,
  banner = false,
}: {
  type?: keyof typeof typeMap;
  title?: string;
  children?: React.ReactNode;
  closable?: boolean;
  onClose?: () => void;
  action?: { label: string; onClick?: () => void };
  banner?: boolean;
}) {
  const t = typeMap[type];
  const Icon = t.icon;

  return (
    <div
      className={`${t.bg} ${banner ? "" : `border ${t.border} rounded-xl`} ${banner ? "border-b " + t.border : ""} px-4 py-3`}
    >
      <div className="flex gap-3">
        <Icon className={`w-5 h-5 flex-shrink-0 mt-0.5 ${t.iconColor}`} />
        <div className="flex-1 min-w-0">
          {title && <p className={`text-sm font-semibold ${t.titleColor}`}>{title}</p>}
          {children && <p className={`text-sm text-neutral-700 ${title ? "mt-0.5" : ""}`}>{children}</p>}
          {action && (
            <button
              onClick={action.onClick}
              className={`mt-2 text-sm font-medium ${t.titleColor} hover:underline`}
            >
              {action.label}
            </button>
          )}
        </div>
        {closable && (
          <button onClick={onClose} className="flex-shrink-0 text-neutral-400 hover:text-neutral-600">
            <X className="w-4 h-4" />
          </button>
        )}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export default function AlertPage() {
  const [show1, setShow1] = useState(true);
  const [show2, setShow2] = useState(true);

  return (
    <DocPage
      title="Alert"
      description="Alerts communicate important information, warnings, errors, or success messages to users."
    >
      {/* Types */}
      <Section title="Types" description="Four semantic types for different severity levels.">
        <Preview>
          <div className="space-y-3">
            <Alert type="info" title="Information">
              A new software update is available. See what&apos;s new in version 2.0.
            </Alert>
            <Alert type="success" title="Success">
              Your changes have been saved successfully.
            </Alert>
            <Alert type="warning" title="Warning">
              Your trial expires in 3 days. Upgrade now to keep access.
            </Alert>
            <Alert type="error" title="Error">
              There was a problem processing your payment. Please try again.
            </Alert>
          </div>
        </Preview>
        <CodeBlock
          code={`<Alert type="info" title="Information">...</Alert>
<Alert type="success" title="Success">...</Alert>
<Alert type="warning" title="Warning">...</Alert>
<Alert type="error" title="Error">...</Alert>`}
        />
      </Section>

      {/* Description only */}
      <Section title="Description Only" description="Alerts without a title for simpler messages.">
        <Preview>
          <div className="space-y-3">
            <Alert type="info">You can update your email preferences in the settings page.</Alert>
            <Alert type="success">File uploaded successfully.</Alert>
          </div>
        </Preview>
        <CodeBlock
          code={`<Alert type="info">You can update your email preferences in settings.</Alert>`}
        />
      </Section>

      {/* With close button */}
      <Section title="With Close Button" description="Dismissible alerts for non-critical information.">
        <Preview>
          <div className="space-y-3">
            {show1 && (
              <Alert type="info" title="Tip" closable onClose={() => setShow1(false)}>
                You can use keyboard shortcuts to navigate faster. Press ? to see all shortcuts.
              </Alert>
            )}
            {show2 && (
              <Alert type="warning" title="Storage almost full" closable onClose={() => setShow2(false)}>
                You have used 90% of your storage. Consider upgrading your plan.
              </Alert>
            )}
            {!show1 && !show2 && (
              <p className="text-sm text-neutral-500">
                All alerts dismissed.{" "}
                <button
                  className="text-brand-600 hover:underline font-medium"
                  onClick={() => { setShow1(true); setShow2(true); }}
                >
                  Reset
                </button>
              </p>
            )}
          </div>
        </Preview>
        <CodeBlock code={`<Alert type="info" title="Tip" closable onClose={handleClose}>...</Alert>`} />
      </Section>

      {/* With action */}
      <Section title="With Action" description="Include an action link for user follow-up.">
        <Preview>
          <div className="space-y-3">
            <Alert type="warning" title="Subscription expiring" action={{ label: "Upgrade now" }}>
              Your Pro subscription expires on March 20. Upgrade to keep access to all features.
            </Alert>
            <Alert type="error" title="Payment failed" action={{ label: "Update payment method" }}>
              We couldn&apos;t process your last payment. Please update your billing details.
            </Alert>
          </div>
        </Preview>
        <CodeBlock
          code={`<Alert type="warning" title="Subscription expiring" action={{ label: "Upgrade now", onClick: handleUpgrade }}>
  Your Pro subscription expires soon.
</Alert>`}
        />
      </Section>

      {/* Banner alerts */}
      <Section title="Banner Alerts" description="Full-width alerts without border radius, typically placed at the top of a page.">
        <Preview>
          <div className="space-y-0 -m-6">
            <Alert type="info" banner closable>
              Scheduled maintenance on March 15 from 2:00 AM to 4:00 AM UTC.
            </Alert>
            <div className="p-6">
              <p className="text-sm text-neutral-500">Page content goes here...</p>
            </div>
          </div>
        </Preview>
        <CodeBlock code={`<Alert type="info" banner closable>Scheduled maintenance...</Alert>`} />
      </Section>

      {/* Props */}
      <Section title="Props">
        <PropsTable
          props={[
            { name: "type", type: '"info" | "success" | "warning" | "error"', default: '"info"', description: "Semantic type that determines colors and icon" },
            { name: "title", type: "string", description: "Bold title text" },
            { name: "children", type: "ReactNode", description: "Description / body content" },
            { name: "closable", type: "boolean", default: "false", description: "Show a close button" },
            { name: "onClose", type: "() => void", description: "Called when close button is clicked" },
            { name: "action", type: "{ label: string; onClick?: () => void }", description: "Action link below description" },
            { name: "banner", type: "boolean", default: "false", description: "Full-width banner style (no border radius)" },
          ]}
        />
      </Section>

      {/* Dos and Don'ts */}
      <Section title="Best Practices">
        <DosAndDonts
          dos={[
            "Use the correct type to match the severity of the message",
            "Keep alert messages concise and actionable",
            "Provide a clear action when users need to do something",
            "Make non-critical alerts dismissible",
          ]}
          donts={[
            "Don't show more than 2-3 alerts at once on a page",
            "Don't use alerts for form validation (use inline errors instead)",
            "Don't use success alerts for expected outcomes",
            "Don't use error styling for warnings or informational messages",
          ]}
        />
      </Section>
    </DocPage>
  );
}
