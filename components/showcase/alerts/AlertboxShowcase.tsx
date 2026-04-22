"use client"

import { useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { AlertDialog } from "@/components/ui/alerts/alertbox"

type SectionProps = {
  title: string
  description?: string
  children: React.ReactNode
}

function Section({ title, description, children }: SectionProps) {
  return (
    <section className="space-y-5 animate-fade-up">
      <div className="space-y-1">
        <h3 className="text-base font-semibold tracking-tight">
          {title}
        </h3>
        {description && (
          <p className="text-sm text-muted-foreground max-w-2xl">
            {description}
          </p>
        )}
      </div>

      <div className="rounded-xl border bg-background p-5 shadow-sm transition hover:shadow-md">
        {children}
      </div>
    </section>
  )
}
function useDialog() {
  const [open, setOpen] = useState(false)

  return {
    open,
    openDialog: () => setOpen(true),
    closeDialog: () => setOpen(false),
    toggle: () => setOpen((p) => !p),
  }
}

export function AlertDialogShowcase() {
  const [openBasic, setOpenBasic] = useState(false)
  const [openDanger, setOpenDanger] = useState(false)
  const [openCustom, setOpenCustom] = useState(false)
  const [openAction, setOpenAction] = useState(false)
  const [openPlacement, setOpenPlacement] = useState<
    "top" | "center" | "bottom" | null
  >(null)

  // ✅ FIX ADDED HERE
  const [openStatus, setOpenStatus] = useState<
    "accent" | "success" | "warning" | "danger" | null
  >(null)
  const [openBackdrop, setOpenBackdrop] = useState<
  "opaque" | "blur" | "transparent" | null
>(null)
const [openSize, setOpenSize] = useState<
  "xs" | "sm" | "md" | "lg" | "cover" | null
>(null)
const [openIcon, setOpenIcon] = useState(false)
const [openCustomBackdrop, setOpenCustomBackdrop] = useState(false)
const [openDismiss, setOpenDismiss] = useState<
  "overlay" | "overlay-enabled" | "keyboard" | "keyboard-enabled" | null
>(null)
const [openClose, setOpenClose] = useState<
  "simple" | "controlled" | null
>(null)
const [openCustomTrigger, setOpenCustomTrigger] = useState(false)
const [openPortal, setOpenPortal] = useState(false)
const portalRef = useRef<HTMLDivElement | null>(null)

  return (
    <div className="max-w-5xl space-y-14">

      {/* 🔹 Header */}
      <section className="space-y-3 border-b pb-6 animate-fade-up">
        <h1 className="text-2xl font-bold tracking-tight">
          Alert Dialog
        </h1>
        <p className="text-muted-foreground max-w-2xl">
          Alert dialogs interrupt users with important confirmations
          before performing critical actions.
        </p>
      </section>

      {/* 🔹 Basic */}
      <Section title="Basic Dialog">
        <Button onClick={() => setOpenBasic(true)}>
          Open Dialog
        </Button>

        <AlertDialog
          open={openBasic}
          onOpenChange={setOpenBasic}
          title="Are you sure?"
          description="This action cannot be undone."
        />
      </Section>

      {/* 🔹 Danger */}
      <Section title="Destructive Action">
        <Button variant="danger" onClick={() => setOpenDanger(true)}>
          Delete Project
        </Button>

        <AlertDialog
          open={openDanger}
          onOpenChange={setOpenDanger}
          title="Delete project permanently?"
          description="This will permanently delete your project."
          confirmText="Delete"
          variant="danger"
          onConfirm={() => console.log("Deleted")}
        />
      </Section>

      {/* 🔹 Custom */}
      <Section title="Custom Content">
        <Button onClick={() => setOpenCustom(true)}>
          Open Custom Dialog
        </Button>

        <AlertDialog
          open={openCustom}
          onOpenChange={setOpenCustom}
          title="Leave page?"
          description="You have unsaved changes. Leaving now will discard them."
          confirmText="Leave"
          cancelText="Stay"
        />
      </Section>

      {/* 🔹 Actions */}
      <Section title="With Custom Actions">
        <Button variant="secondary" onClick={() => setOpenAction(true)}>
          Trigger Action
        </Button>

        <AlertDialog
          open={openAction}
          onOpenChange={setOpenAction}
          title="Confirm action"
          description="Do you want to proceed?"
          confirmText="Yes"
          cancelText="No"
          onConfirm={() => alert("Confirmed")}
        />
      </Section>

      {/* 🔹 Guidelines */}
      <Section title="Guidelines">
        <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
          <li>Use alert dialogs for critical or irreversible actions</li>
          <li>Keep the message short and clear</li>
          <li>Always provide a cancel option</li>
          <li>Use destructive styles carefully</li>
        </ul>
      </Section>

      <Section
  title="Status Variants"
  description="Different dialog styles based on action type."
>
  <div className="flex flex-wrap gap-4">

    {/* Accent / Info */}
    <Button
      variant="secondary"
      onClick={() => setOpenStatus("accent")}
    >
      Sign Out
    </Button>

    {/* Success */}
    <Button
      variant="default"
      onClick={() => setOpenStatus("success")}
    >
      Complete Task
    </Button>

    {/* Warning */}
    <Button
      variant="secondary"
      onClick={() => setOpenStatus("warning")}
    >
      Discard Changes
    </Button>

    {/* Danger */}
    <Button
      variant="danger"
      onClick={() => setOpenStatus("danger")}
    >
      Delete Account
    </Button>

  </div>

  {/* Dialogs */}
  <AlertDialog
    open={openStatus === "accent"}
    onOpenChange={(open) => !open && setOpenStatus(null)}
    title="Sign out of your account?"
    description="You'll need to sign in again. Unsaved changes will be lost."
    confirmText="Sign Out"
    cancelText="Stay Signed In"
  />

  <AlertDialog
    open={openStatus === "success"}
    onOpenChange={(open) => !open && setOpenStatus(null)}
    title="Complete this task?"
    description="This will notify team members and move it to completed."
    confirmText="Mark Complete"
  />

  <AlertDialog
    open={openStatus === "warning"}
    onOpenChange={(open) => !open && setOpenStatus(null)}
    title="Discard unsaved changes?"
    description="You will lose all unsaved changes."
    confirmText="Discard"
    cancelText="Keep Editing"
  />

  <AlertDialog
    open={openStatus === "danger"}
   onOpenChange={(open) => !open && setOpenStatus(null)}
    title="Delete your account?"
    description="This action is irreversible and removes all data."
    confirmText="Delete Account"
    variant="danger"
  />

</Section>

<Section
  title="Dialog Placement"
  description="Control where the dialog appears on screen."
>
  <div className="flex flex-wrap gap-4">

    <Button onClick={() => setOpenPlacement("top")}>
      Top
    </Button>

    <Button onClick={() => setOpenPlacement("center")}>
      Center
    </Button>

    <Button onClick={() => setOpenPlacement("bottom")}>
      Bottom
    </Button>

  </div>

  <AlertDialog
    open={openPlacement === "top"}
    onOpenChange={(open) => !open && setOpenPlacement(null)}
    placement="top"
    title="Top Dialog"
    description="This dialog appears near the top."
  />

  <AlertDialog
    open={openPlacement === "center"}
    onOpenChange={(open) => !open && setOpenPlacement(null)}
    placement="center"
    title="Centered Dialog"
    description="This dialog appears in the center."
  />

  <AlertDialog
    open={openPlacement === "bottom"}
   onOpenChange={(open) => !open && setOpenPlacement(null)}
    placement="bottom"
    title="Bottom Dialog"
    description="This dialog appears near the bottom."
  />
</Section>

<Section
  title="Backdrop Variants"
  description="Control how the background appears behind the dialog."
>
  <div className="flex flex-wrap gap-4">

    <Button onClick={() => setOpenBackdrop("opaque")}>
      Opaque
    </Button>

    <Button onClick={() => setOpenBackdrop("blur")}>
      Blur
    </Button>

    <Button onClick={() => setOpenBackdrop("transparent")}>
      Transparent
    </Button>

  </div>

  <AlertDialog
    open={openBackdrop === "opaque"}
    onOpenChange={(open) => !open && setOpenBackdrop(null)}
    backdrop="opaque"
    title="Opaque Backdrop"
    description="Fully dark background for maximum focus."
  />

  <AlertDialog
    open={openBackdrop === "blur"}
    onOpenChange={(open) => !open && setOpenBackdrop(null)}
    backdrop="blur"
    title="Blur Backdrop"
    description="Soft blur effect with background visibility."
  />

  <AlertDialog
    open={openBackdrop === "transparent"}
    onOpenChange={(open) => !open && setOpenBackdrop(null)}
    backdrop="transparent"
    title="Transparent Backdrop"
    description="No overlay, background remains fully visible."
  />

</Section>
<Section
  title="Dialog Sizes"
  description="Control dialog width for different content needs."
>
  <div className="flex flex-wrap gap-4">

    <Button onClick={() => setOpenSize("xs")}>XS</Button>
    <Button onClick={() => setOpenSize("sm")}>SM</Button>
    <Button onClick={() => setOpenSize("md")}>MD</Button>
    <Button onClick={() => setOpenSize("lg")}>LG</Button>
    <Button onClick={() => setOpenSize("cover")}>Cover</Button>

  </div>

  <AlertDialog
    open={openSize === "xs"}
    onOpenChange={(open) => !open && setOpenSize(null)}
    size="xs"
    title="XS Dialog"
    description="Compact dialog for small confirmations."
  />

  <AlertDialog
    open={openSize === "sm"}
    onOpenChange={(open) => !open && setOpenSize(null)}
    size="sm"
    title="Small Dialog"
    description="Slightly larger dialog for short content."
  />

  <AlertDialog
    open={openSize === "md"}
    onOpenChange={(open) => !open && setOpenSize(null)}
    size="md"
    title="Medium Dialog"
    description="Default dialog size."
  />

  <AlertDialog
    open={openSize === "lg"}
    onOpenChange={(open) => !open && setOpenSize(null)}
    size="lg"
    title="Large Dialog"
    description="Useful for more detailed content."
  />

  <AlertDialog
    open={openSize === "cover"}
    onOpenChange={(open) => !open && setOpenSize(null)}
    size="cover"
    title="Cover Dialog"
    description="Almost full-width dialog for critical interactions."
  />

</Section>
<Section
  title="Custom Icon"
  description="Add custom icons to enhance visual meaning."
>
  <Button variant="secondary" onClick={() => setOpenIcon(true)}>
    Reset Password
  </Button>

  <AlertDialog
    open={openIcon}
    onOpenChange={(open) => !open && setOpenIcon(false)}
    title="Reset your password?"
    description="We'll send a password reset link to your email."
    icon={<span className="text-lg">🔓</span>}
    confirmText="Send Reset Link"
  />
</Section>
<Section
  title="Custom Backdrop"
  description="Apply custom styles to emphasize important actions."
>
  <Button variant="danger" onClick={() => setOpenCustomBackdrop(true)}>
    Delete Account
  </Button>

  <AlertDialog
    open={openCustomBackdrop}
    onOpenChange={(open) => !open && setOpenCustomBackdrop(false)}
    title="Permanently delete your account?"
    description="This action cannot be undone. All your data will be removed."
    variant="danger"
    backdrop="blur"
    backdropClassName="bg-gradient-to-t from-red-950/90 via-red-950/50 to-transparent"
    icon={<span className="text-lg">⚠️</span>}
    confirmText="Delete Forever"
    cancelText="Keep Account"
  />
</Section>
<Section
  title="Dismiss Behavior"
  description="Control how users can close the dialog using overlay clicks or keyboard interactions."
>
  <div className="space-y-6">

    {/* 🔹 Explanation */}
    <div className="text-sm text-muted-foreground max-w-2xl">
      Alert dialogs are typically strict and require explicit user action.
      However, for less critical interactions, you can allow dismissing via:
      <ul className="list-disc pl-5 mt-2 space-y-1">
        <li><strong>Overlay click</strong> (click outside)</li>
        <li><strong>ESC key</strong> (keyboard shortcut)</li>
      </ul>
    </div>

    {/* 🔹 Buttons */}
    <div className="flex flex-wrap gap-4">

      <Button onClick={() => setOpenDismiss("overlay")}>
        Overlay Disabled
      </Button>

      <Button onClick={() => setOpenDismiss("overlay-enabled")}>
        Overlay Enabled
      </Button>

      <Button onClick={() => setOpenDismiss("keyboard")}>
        ESC Disabled
      </Button>

      <Button onClick={() => setOpenDismiss("keyboard-enabled")}>
        ESC Enabled
      </Button>

    </div>

    {/* 🔹 Overlay Disabled */}
    <AlertDialog
      open={openDismiss === "overlay"}
      onOpenChange={(open) => !open && setOpenDismiss(null)}
      title="Overlay Click Disabled"
      description="Clicking outside will NOT close this dialog. You must use buttons."
      isDismissable={false}
      icon={<span>⚠️</span>}
    />

    {/* 🔹 Overlay Enabled */}
    <AlertDialog
      open={openDismiss === "overlay-enabled"}
      onOpenChange={(open) => !open && setOpenDismiss(null)}
      title="Overlay Click Enabled"
      description="Click outside the dialog to close it."
      isDismissable={true}
      icon={<span>✅</span>}
    />

    {/* 🔹 ESC Disabled */}
    <AlertDialog
      open={openDismiss === "keyboard"}
      onOpenChange={(open) => !open && setOpenDismiss(null)}
      title="ESC Key Disabled"
      description="Pressing ESC will NOT close this dialog."
      isKeyboardDismissDisabled={true}
      icon={<span>⛔</span>}
    />

    {/* 🔹 ESC Enabled */}
    <AlertDialog
      open={openDismiss === "keyboard-enabled"}
      onOpenChange={(open) => !open && setOpenDismiss(null)}
      title="ESC Key Enabled"
      description="Press ESC to close the dialog."
      isKeyboardDismissDisabled={false}
      icon={<span>⌨️</span>}
    />

    {/* 🔹 Guidelines */}
    <div className="text-sm text-muted-foreground space-y-2 border-t pt-4">
      <p className="font-medium text-foreground">Guidelines</p>
      <ul className="list-disc pl-5 space-y-1">
        <li>Disable dismiss for destructive actions (e.g., delete account)</li>
        <li>Enable dismiss for low-risk interactions</li>
        <li>Always provide a visible cancel button</li>
        <li>Use ESC support for better accessibility</li>
      </ul>
    </div>

  </div>
</Section>
<Section
  title="Close Methods"
  description="Different ways to close the dialog depending on your needs."
>
  <div className="space-y-6">

    {/* 🔹 Explanation */}
    <div className="text-sm text-muted-foreground max-w-2xl">
      You can close dialogs in multiple ways depending on the level of control required.
    </div>

    {/* 🔹 Buttons */}
    <div className="flex flex-wrap gap-4">
      <Button onClick={() => setOpenClose("simple")}>
        Simple Close
      </Button>

      <Button onClick={() => setOpenClose("controlled")}>
        Controlled Close
      </Button>
    </div>

    {/* 🔹 Simple Close */}
    <AlertDialog
      open={openClose === "simple"}
      onOpenChange={(open) => !open && setOpenClose(null)}
      title="Simple Close"
      description="Buttons directly close the dialog using onOpenChange."
    >
      <div className="flex gap-2 pt-4">
        <Button
          variant="secondary"
          onClick={() => setOpenClose(null)}
        >
          Cancel
        </Button>

        <Button onClick={() => setOpenClose(null)}>
          Confirm
        </Button>
      </div>
    </AlertDialog>

    {/* 🔹 Controlled Close */}
    <AlertDialog
      open={openClose === "controlled"}
      onOpenChange={(open) => !open && setOpenClose(null)}
      title="Controlled Close"
      description="You can run logic before closing the dialog."
    >
      <div className="flex gap-2 pt-4">
        <Button
          variant="secondary"
          onClick={() => setOpenClose(null)}
        >
          Cancel
        </Button>

        <Button
          onClick={() => {
            console.log("Validating...")
            alert("Action confirmed")
            setOpenClose(null)
          }}
        >
          Confirm with Logic
        </Button>
      </div>
    </AlertDialog>

    {/* 🔹 Guidelines */}
    <div className="text-sm text-muted-foreground space-y-2 border-t pt-4">
      <p className="font-medium text-foreground">Guidelines</p>
      <ul className="list-disc pl-5 space-y-1">
        <li>Use simple close for basic confirmations</li>
        <li>Use controlled close when validation is required</li>
        <li>Always provide a visible cancel option</li>
        <li>Avoid closing dialogs without user intent</li>
      </ul>
    </div>

  </div>
</Section>
<Section
  title="Custom Trigger"
  description="Use any element as a trigger to open the dialog, not just buttons."
>
  <div className="space-y-6 animate-fade-up">

    {/* 🔹 Trigger Card */}
    <div
      onClick={() => setOpenCustomTrigger(true)}
      className="group flex cursor-pointer items-center gap-3 rounded-2xl border bg-background p-4 shadow-sm transition hover:bg-muted hover:shadow-md"
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-100 text-red-600">
        🗑️
      </div>

      <div className="flex flex-1 flex-col">
        <p className="text-sm font-semibold">Delete Item</p>
        <p className="text-xs text-muted-foreground">
          Permanently remove this item
        </p>
      </div>
    </div>

    {/* 🔹 Dialog */}
    <AlertDialog
      open={openCustomTrigger}
      onOpenChange={setOpenCustomTrigger}
      title="Delete this item?"
      description="This action cannot be undone. The item will be permanently removed."
      variant="danger"
      icon={<span>🗑️</span>}
      isDismissable={false}
    >
      <div className="flex gap-2 pt-4">
        <Button
          variant="secondary"
          onClick={() => setOpenCustomTrigger(false)}
        >
          Cancel
        </Button>

        <Button
          variant="danger"
          onClick={() => {
            console.log("Deleted")
            setOpenCustomTrigger(false)
          }}
        >
          Delete Item
        </Button>
      </div>
    </AlertDialog>

    {/* 🔹 Guidelines */}
    <div className="text-sm text-muted-foreground space-y-2 border-t pt-4">
      <p className="font-medium text-foreground">Guidelines</p>
      <ul className="list-disc pl-5 space-y-1">
        <li>Use custom triggers for richer UI (cards, list items, menus)</li>
        <li>Ensure the trigger clearly indicates the action</li>
        <li>Use destructive styling for dangerous actions</li>
        <li>Keep interactions predictable and accessible</li>
      </ul>
    </div>

  </div>
</Section>
<Section
  title="Custom Portal"
  description="Render dialogs inside a custom container instead of the default document body."
>
  <div className="space-y-6 animate-fade-up">

    {/* 🔹 Explanation */}
    <div className="text-sm text-muted-foreground max-w-2xl">
      You can render dialogs inside a specific container using React portals.
      This is useful for embedded layouts, dashboards, or isolated UI regions.
    </div>

    {/* 🔹 Container */}
    <div
      ref={portalRef}
      className="relative h-[380px] rounded-xl border bg-muted/30 flex items-center justify-center"
    >
      <Button onClick={() => setOpenPortal(true)}>
        Open Dialog Inside Container
      </Button>

     {portalRef.current && (
  <AlertDialog
    open={openPortal}
    onOpenChange={setOpenPortal}
    portalContainer={portalRef.current}
    title="Custom Portal"
    description="..."
  />
)}
    </div>

    {/* 🔹 Guidelines */}
    <div className="text-sm text-muted-foreground space-y-2 border-t pt-4">
      <p className="font-medium text-foreground">Guidelines</p>
      <ul className="list-disc pl-5 space-y-1">
        <li>Use portals for complex layouts or embedded UI</li>
        <li>Ensure container has proper positioning (relative)</li>
        <li>Avoid overflow clipping issues</li>
        <li>Useful in dashboards and modals inside cards</li>
      </ul>
    </div>

  </div>
</Section>
    </div>
  )
}