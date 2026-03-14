"use client";

import DocPage, {
  Section,
  Preview,
  CodeBlock,
  PropsTable,
  DosAndDonts,
} from "@/components/DocPage";

function DropdownMenu({
  children,
  triggerLabel = "Options",
}: {
  children: React.ReactNode;
  triggerLabel?: string;
}) {
  return (
    <div className="relative inline-block">
      <button className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-neutral-700 bg-white border border-neutral-200 rounded-lg hover:bg-neutral-50 transition-colors">
        {triggerLabel}
        <svg className="w-4 h-4 text-neutral-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <div className="absolute top-full left-0 mt-1.5 w-56 bg-white border border-neutral-200 rounded-xl shadow-lg py-1 z-20">
        {children}
      </div>
    </div>
  );
}

function MenuItem({
  icon,
  label,
  shortcut,
  destructive = false,
  disabled = false,
  hasSubmenu = false,
}: {
  icon?: string;
  label: string;
  shortcut?: string;
  destructive?: boolean;
  disabled?: boolean;
  hasSubmenu?: boolean;
}) {
  const textColor = destructive
    ? "text-error-500"
    : disabled
    ? "text-neutral-300"
    : "text-neutral-700";
  const hoverBg = destructive
    ? "hover:bg-error-50"
    : disabled
    ? ""
    : "hover:bg-neutral-50";
  const iconColor = destructive
    ? "text-error-500"
    : disabled
    ? "text-neutral-300"
    : "text-neutral-400";

  return (
    <button
      className={`w-full flex items-center gap-2.5 px-3 py-2 text-sm ${textColor} ${hoverBg} transition-colors ${
        disabled ? "cursor-not-allowed" : "cursor-pointer"
      }`}
      disabled={disabled}
    >
      {icon && (
        <svg className={`w-4 h-4 ${iconColor} flex-shrink-0`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d={icon} />
        </svg>
      )}
      <span className="flex-1 text-left">{label}</span>
      {shortcut && (
        <kbd className="text-[11px] text-neutral-400 font-mono">{shortcut}</kbd>
      )}
      {hasSubmenu && (
        <svg className="w-3.5 h-3.5 text-neutral-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      )}
    </button>
  );
}

function Divider() {
  return <div className="my-1 border-t border-neutral-100" />;
}

function SectionHeader({ label }: { label: string }) {
  return (
    <div className="px-3 py-1.5 text-[11px] font-semibold text-neutral-400 uppercase tracking-wider">
      {label}
    </div>
  );
}

export default function DropdownPage() {
  return (
    <DocPage
      title="Dropdown Menu"
      description="Dropdown menus display a list of actions or options when triggered. They appear on demand and overlay the page content, allowing users to choose from a set of contextual actions."
    >
      <Section
        title="Basic Dropdown"
        description="A simple dropdown menu shown in its open state with text-only items."
      >
        <Preview>
          <div className="pb-48">
            <DropdownMenu triggerLabel="Actions">
              <MenuItem label="Edit" />
              <MenuItem label="Duplicate" />
              <MenuItem label="Archive" />
            </DropdownMenu>
          </div>
        </Preview>
        <CodeBlock
          code={`<DropdownMenu>
  <DropdownMenu.Trigger>Actions</DropdownMenu.Trigger>
  <DropdownMenu.Content>
    <DropdownMenu.Item>Edit</DropdownMenu.Item>
    <DropdownMenu.Item>Duplicate</DropdownMenu.Item>
    <DropdownMenu.Item>Archive</DropdownMenu.Item>
  </DropdownMenu.Content>
</DropdownMenu>`}
        />
      </Section>

      <Section
        title="With Icons & Keyboard Shortcuts"
        description="Items can include leading icons and trailing keyboard shortcut hints."
      >
        <Preview>
          <div className="pb-64">
            <DropdownMenu triggerLabel="File">
              <MenuItem
                icon="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                label="Edit"
                shortcut="Ctrl+E"
              />
              <MenuItem
                icon="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                label="Duplicate"
                shortcut="Ctrl+D"
              />
              <MenuItem
                icon="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                label="Download"
                shortcut="Ctrl+S"
              />
              <MenuItem
                icon="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                label="Share"
                shortcut="Ctrl+Shift+S"
              />
            </DropdownMenu>
          </div>
        </Preview>
        <CodeBlock
          code={`<DropdownMenu.Item icon={<EditIcon />} shortcut="Ctrl+E">
  Edit
</DropdownMenu.Item>`}
        />
      </Section>

      <Section
        title="With Dividers & Section Headers"
        description="Organize related items into groups using dividers and section headers."
      >
        <Preview>
          <div className="pb-80">
            <DropdownMenu triggerLabel="Manage">
              <SectionHeader label="View" />
              <MenuItem
                icon="M4 6h16M4 10h16M4 14h16M4 18h16"
                label="List view"
              />
              <MenuItem
                icon="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                label="Grid view"
              />
              <Divider />
              <SectionHeader label="Actions" />
              <MenuItem
                icon="M12 6v6m0 0v6m0-6h6m-6 0H6"
                label="Add new"
              />
              <MenuItem
                icon="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
                label="Import"
              />
              <MenuItem
                icon="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                label="Export"
              />
            </DropdownMenu>
          </div>
        </Preview>
        <CodeBlock
          code={`<DropdownMenu.Content>
  <DropdownMenu.Label>View</DropdownMenu.Label>
  <DropdownMenu.Item>List view</DropdownMenu.Item>
  <DropdownMenu.Item>Grid view</DropdownMenu.Item>
  <DropdownMenu.Separator />
  <DropdownMenu.Label>Actions</DropdownMenu.Label>
  <DropdownMenu.Item>Add new</DropdownMenu.Item>
</DropdownMenu.Content>`}
        />
      </Section>

      <Section
        title="Destructive Menu Item"
        description="Use a red destructive style for dangerous actions like deleting or removing items."
      >
        <Preview>
          <div className="pb-56">
            <DropdownMenu triggerLabel="More">
              <MenuItem
                icon="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                label="Rename"
              />
              <MenuItem
                icon="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                label="Duplicate"
              />
              <MenuItem
                icon="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
                label="Archive"
              />
              <Divider />
              <MenuItem
                icon="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                label="Delete"
                destructive
              />
            </DropdownMenu>
          </div>
        </Preview>
        <CodeBlock
          code={`<DropdownMenu.Item destructive icon={<TrashIcon />}>
  Delete
</DropdownMenu.Item>`}
        />
      </Section>

      <Section
        title="Nested Submenu Indicator"
        description="Items that open a submenu show a chevron indicator on the right side."
      >
        <Preview>
          <div className="pb-60">
            <DropdownMenu triggerLabel="Insert">
              <MenuItem
                icon="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                label="Document"
              />
              <MenuItem
                icon="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
                label="Media"
                hasSubmenu
              />
              <MenuItem
                icon="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                label="Template"
                hasSubmenu
              />
              <Divider />
              <MenuItem
                icon="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                label="Link"
                shortcut="Ctrl+K"
              />
            </DropdownMenu>
          </div>
        </Preview>
        <CodeBlock
          code={`<DropdownMenu.Sub>
  <DropdownMenu.SubTrigger icon={<ImageIcon />}>
    Media
  </DropdownMenu.SubTrigger>
  <DropdownMenu.SubContent>
    <DropdownMenu.Item>Image</DropdownMenu.Item>
    <DropdownMenu.Item>Video</DropdownMenu.Item>
  </DropdownMenu.SubContent>
</DropdownMenu.Sub>`}
        />
      </Section>

      <Section title="Props">
        <PropsTable
          props={[
            { name: "children", type: "ReactNode", description: "DropdownMenu.Trigger and DropdownMenu.Content" },
            { name: "open", type: "boolean", description: "Controlled open state" },
            { name: "onOpenChange", type: "(open: boolean) => void", description: "Callback when open state changes" },
            { name: "align", type: '"start" | "center" | "end"', default: '"start"', description: "Horizontal alignment of the menu to the trigger" },
            { name: "side", type: '"top" | "bottom"', default: '"bottom"', description: "Which side of the trigger the menu appears on" },
          ]}
        />
      </Section>

      <Section title="Menu Item Props">
        <PropsTable
          props={[
            { name: "icon", type: "ReactNode", description: "Leading icon element" },
            { name: "shortcut", type: "string", description: "Keyboard shortcut displayed on the right" },
            { name: "destructive", type: "boolean", default: "false", description: "Red destructive styling for dangerous actions" },
            { name: "disabled", type: "boolean", default: "false", description: "Prevents interaction and grays out the item" },
            { name: "onSelect", type: "() => void", description: "Callback when the item is selected" },
            { name: "children", type: "ReactNode", description: "Menu item label" },
          ]}
        />
      </Section>

      <Section title="Guidelines">
        <DosAndDonts
          dos={[
            "Group related actions using dividers and section headers",
            "Place destructive actions at the bottom, separated by a divider",
            "Include keyboard shortcuts for frequently used actions",
            "Keep menus to 7 or fewer items when possible",
          ]}
          donts={[
            "Don't use dropdown menus for navigation - use links or tabs instead",
            "Don't nest more than one level of submenus",
            "Don't put form inputs inside dropdown menus",
            "Don't use dropdown menus for single actions - use a button instead",
          ]}
        />
      </Section>
    </DocPage>
  );
}
