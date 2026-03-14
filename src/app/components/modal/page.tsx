"use client";

import React, { useState } from "react";
import DocPage, {
  Section,
  Preview,
  CodeBlock,
  PropsTable,
  DosAndDonts,
} from "@/components/DocPage";
import { X, AlertTriangle, Trash2, Info } from "lucide-react";

/* ------------------------------------------------------------------ */
/*  Static modal shell (for documentation preview purposes)            */
/* ------------------------------------------------------------------ */

function ModalShell({
  size = "md",
  children,
}: {
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
}) {
  const widthMap: Record<string, string> = {
    sm: "max-w-sm",
    md: "max-w-lg",
    lg: "max-w-2xl",
  };

  return (
    <div className="relative">
      {/* Simulated backdrop */}
      <div className="absolute inset-0 bg-neutral-900/20 rounded-xl" />
      {/* Modal panel */}
      <div className={`relative mx-auto ${widthMap[size]} bg-white rounded-xl shadow-xl border border-neutral-200 overflow-hidden`}>
        {children}
      </div>
    </div>
  );
}

function ModalHeader({
  title,
  description,
  onClose,
  icon,
}: {
  title: string;
  description?: string;
  onClose?: () => void;
  icon?: React.ReactNode;
}) {
  return (
    <div className="flex items-start gap-3 px-6 pt-6 pb-0">
      {icon && <div className="flex-shrink-0 mt-0.5">{icon}</div>}
      <div className="flex-1 min-w-0">
        <h3 className="text-base font-semibold text-neutral-900">{title}</h3>
        {description && <p className="text-sm text-neutral-500 mt-0.5">{description}</p>}
      </div>
      {onClose && (
        <button className="text-neutral-400 hover:text-neutral-600 flex-shrink-0">
          <X className="w-5 h-5" />
        </button>
      )}
    </div>
  );
}

function ModalBody({ children }: { children: React.ReactNode }) {
  return <div className="px-6 py-4">{children}</div>;
}

function ModalFooter({
  children,
  align = "right",
}: {
  children: React.ReactNode;
  align?: "left" | "right" | "between";
}) {
  const alignClass =
    align === "between"
      ? "justify-between"
      : align === "left"
      ? "justify-start"
      : "justify-end";
  return (
    <div className={`flex items-center gap-3 px-6 py-4 border-t border-neutral-200 bg-neutral-50 ${alignClass}`}>
      {children}
    </div>
  );
}

const btnBase = "inline-flex items-center justify-center font-medium rounded-lg text-sm px-4 py-2 transition-all focus:outline-none";
const btnPrimary = `${btnBase} bg-brand-600 text-white hover:bg-brand-700 shadow-xs`;
const btnSecondary = `${btnBase} bg-white text-neutral-700 border border-neutral-300 hover:bg-neutral-50 shadow-xs`;
const btnDestructive = `${btnBase} bg-error-500 text-white hover:bg-error-700 shadow-xs`;

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export default function ModalPage() {
  const [showLive, setShowLive] = useState(false);

  return (
    <DocPage
      title="Modal / Dialog"
      description="Modals focus user attention on a single task or piece of information, overlaying the main content."
    >
      {/* Basic */}
      <Section title="Basic Modal" description="A standard modal with header, body, and footer.">
        <Preview>
          <ModalShell>
            <ModalHeader title="Edit profile" description="Update your personal information." onClose={() => {}} />
            <ModalBody>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-1.5">Full name</label>
                  <input
                    className="w-full rounded-lg border border-neutral-300 bg-white px-3.5 py-2 text-sm text-neutral-900 placeholder:text-neutral-400 outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500"
                    defaultValue="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-1.5">Email</label>
                  <input
                    className="w-full rounded-lg border border-neutral-300 bg-white px-3.5 py-2 text-sm text-neutral-900 placeholder:text-neutral-400 outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500"
                    defaultValue="john@example.com"
                  />
                </div>
              </div>
            </ModalBody>
            <ModalFooter>
              <button className={btnSecondary}>Cancel</button>
              <button className={btnPrimary}>Save changes</button>
            </ModalFooter>
          </ModalShell>
        </Preview>
        <CodeBlock
          code={`<Modal open={open} onClose={handleClose}>
  <ModalHeader title="Edit profile" description="Update your personal information." />
  <ModalBody>
    <Input label="Full name" value={name} />
    <Input label="Email" value={email} />
  </ModalBody>
  <ModalFooter>
    <Button variant="secondary" onClick={handleClose}>Cancel</Button>
    <Button onClick={handleSave}>Save changes</Button>
  </ModalFooter>
</Modal>`}
        />
      </Section>

      {/* Sizes */}
      <Section title="Sizes" description="Three width options for different content needs.">
        <Preview>
          <div className="space-y-6">
            <div>
              <p className="text-xs font-medium text-neutral-400 mb-2 uppercase tracking-wider">Small (max-w-sm)</p>
              <ModalShell size="sm">
                <ModalHeader title="Quick confirm" onClose={() => {}} />
                <ModalBody>
                  <p className="text-sm text-neutral-600">Are you sure you want to proceed?</p>
                </ModalBody>
                <ModalFooter>
                  <button className={btnSecondary}>No</button>
                  <button className={btnPrimary}>Yes</button>
                </ModalFooter>
              </ModalShell>
            </div>
            <div>
              <p className="text-xs font-medium text-neutral-400 mb-2 uppercase tracking-wider">Medium (max-w-lg) - Default</p>
              <ModalShell size="md">
                <ModalHeader title="Create project" description="Start a new project from scratch." onClose={() => {}} />
                <ModalBody>
                  <div className="space-y-3">
                    <div>
                      <label className="block text-sm font-medium text-neutral-700 mb-1.5">Project name</label>
                      <input className="w-full rounded-lg border border-neutral-300 bg-white px-3.5 py-2 text-sm outline-none" placeholder="My project" />
                    </div>
                  </div>
                </ModalBody>
                <ModalFooter>
                  <button className={btnSecondary}>Cancel</button>
                  <button className={btnPrimary}>Create project</button>
                </ModalFooter>
              </ModalShell>
            </div>
            <div>
              <p className="text-xs font-medium text-neutral-400 mb-2 uppercase tracking-wider">Large (max-w-2xl)</p>
              <ModalShell size="lg">
                <ModalHeader title="Import data" description="Upload a CSV or JSON file to import records." onClose={() => {}} />
                <ModalBody>
                  <div className="border-2 border-dashed border-neutral-300 rounded-xl p-8 text-center">
                    <p className="text-sm text-neutral-500">Drag and drop your file here, or click to browse</p>
                    <p className="text-xs text-neutral-400 mt-1">CSV, JSON up to 10MB</p>
                  </div>
                </ModalBody>
                <ModalFooter>
                  <button className={btnSecondary}>Cancel</button>
                  <button className={btnPrimary}>Import</button>
                </ModalFooter>
              </ModalShell>
            </div>
          </div>
        </Preview>
        <CodeBlock
          code={`<Modal size="sm">...</Modal>
<Modal size="md">...</Modal>
<Modal size="lg">...</Modal>`}
        />
      </Section>

      {/* Confirmation dialog */}
      <Section title="Confirmation Dialog" description="Prompt users before committing to a significant action.">
        <Preview>
          <ModalShell size="sm">
            <ModalHeader
              title="Publish changes?"
              icon={
                <div className="w-10 h-10 rounded-full bg-brand-50 flex items-center justify-center">
                  <Info className="w-5 h-5 text-brand-600" />
                </div>
              }
              onClose={() => {}}
            />
            <ModalBody>
              <p className="text-sm text-neutral-600">
                This will make your changes visible to all team members. You can revert later if needed.
              </p>
            </ModalBody>
            <ModalFooter>
              <button className={btnSecondary}>Cancel</button>
              <button className={btnPrimary}>Publish</button>
            </ModalFooter>
          </ModalShell>
        </Preview>
        <CodeBlock
          code={`<ConfirmDialog
  title="Publish changes?"
  description="This will make your changes visible to all team members."
  confirmLabel="Publish"
  onConfirm={handlePublish}
  onCancel={handleClose}
/>`}
        />
      </Section>

      {/* Destructive dialog */}
      <Section title="Destructive Action Dialog" description="Warn users before irreversible actions like deletion.">
        <Preview>
          <ModalShell size="sm">
            <ModalHeader
              title="Delete project?"
              icon={
                <div className="w-10 h-10 rounded-full bg-error-50 flex items-center justify-center">
                  <Trash2 className="w-5 h-5 text-error-500" />
                </div>
              }
              onClose={() => {}}
            />
            <ModalBody>
              <p className="text-sm text-neutral-600">
                This action cannot be undone. All data, files, and settings associated with
                <span className="font-medium text-neutral-900"> &quot;Acme Corp&quot; </span>
                will be permanently deleted.
              </p>
            </ModalBody>
            <ModalFooter>
              <button className={btnSecondary}>Cancel</button>
              <button className={btnDestructive}>Delete project</button>
            </ModalFooter>
          </ModalShell>
        </Preview>
        <CodeBlock
          code={`<ConfirmDialog
  variant="destructive"
  title="Delete project?"
  description="This action cannot be undone."
  confirmLabel="Delete project"
  onConfirm={handleDelete}
  onCancel={handleClose}
/>`}
        />
      </Section>

      {/* Live demo */}
      <Section title="Interactive Demo" description="Click the button to see a modal overlay.">
        <Preview>
          <button
            className={btnPrimary}
            onClick={() => setShowLive(true)}
          >
            Open modal
          </button>
          {showLive && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              <div className="absolute inset-0 bg-neutral-900/50" onClick={() => setShowLive(false)} />
              <div className="relative max-w-lg w-full bg-white rounded-xl shadow-xl border border-neutral-200 overflow-hidden">
                <ModalHeader title="Live modal" description="This is a real overlay." onClose={() => setShowLive(false)} />
                <ModalBody>
                  <p className="text-sm text-neutral-600">
                    This modal is rendered as a true overlay. Click the backdrop or the close button to dismiss.
                  </p>
                </ModalBody>
                <ModalFooter>
                  <button className={btnSecondary} onClick={() => setShowLive(false)}>Close</button>
                  <button className={btnPrimary} onClick={() => setShowLive(false)}>Got it</button>
                </ModalFooter>
              </div>
            </div>
          )}
        </Preview>
      </Section>

      {/* Props */}
      <Section title="Props">
        <PropsTable
          props={[
            { name: "open", type: "boolean", description: "Whether the modal is visible" },
            { name: "onClose", type: "() => void", description: "Called when user closes the modal" },
            { name: "size", type: '"sm" | "md" | "lg"', default: '"md"', description: "Max width of the modal panel" },
            { name: "closeOnBackdrop", type: "boolean", default: "true", description: "Close when clicking the backdrop" },
            { name: "closeOnEscape", type: "boolean", default: "true", description: "Close when pressing Escape" },
            { name: "children", type: "ReactNode", description: "Modal content (ModalHeader, ModalBody, ModalFooter)" },
          ]}
        />
      </Section>

      {/* Dos and Don'ts */}
      <Section title="Best Practices">
        <DosAndDonts
          dos={[
            "Use modals for focused tasks that require user attention",
            "Always provide a way to close (X button, backdrop, Escape)",
            "Use destructive styling for irreversible actions",
            "Keep modal content concise and focused on one task",
            "Trap focus inside the modal for accessibility",
          ]}
          donts={[
            "Don't use modals for content users need to reference while working",
            "Don't nest modals inside other modals",
            "Don't use modals for simple confirmations that could be inline",
            "Don't auto-open modals on page load (except critical alerts)",
            "Don't put complex multi-step flows in a single modal",
          ]}
        />
      </Section>
    </DocPage>
  );
}
