"use client";

import { CalendarDays, Building2, Mail, Phone } from "lucide-react";
import type { ComponentType } from "react";

import type { ContactRecord } from "./types";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

interface Props {
  open: boolean;
  onClose: () => void;
  contact: ContactRecord | null;
}

export default function MessageModal({ open, onClose, contact }: Props) {
  if (!contact) return null;

  const initials =
    contact.name
      .split(" ")
      .map((p) => p[0])
      .join("")
      .slice(0, 2)
      .toUpperCase() || "?";

  const submittedAt = new Date(contact.createdAt).toLocaleString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <Dialog open={open} onOpenChange={(v) => !v && onClose()}>
      <DialogContent className="max-w-lg gap-0 overflow-hidden rounded-xl border-[#eeede6] p-0">
        <DialogHeader className="border-b border-[#eeede6] px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#fef3e2] text-sm font-bold text-[#c4841c]">
              {initials}
            </div>
            <div>
              <DialogTitle className="text-left text-base font-semibold text-[#1a1a1a]">
                {contact.name}
              </DialogTitle>
              <p className="text-xs text-[#94a3b8]">{submittedAt}</p>
            </div>
          </div>
        </DialogHeader>

        <div className="space-y-4 px-6 py-4">
          <div className="grid gap-3 sm:grid-cols-2">
            <InfoRow icon={Mail} label="Email" value={contact.email} href={`mailto:${contact.email}`} />
            <InfoRow icon={Phone} label="Phone" value={contact.phone || "—"} href={contact.phone ? `tel:${contact.phone}` : undefined} />
            <InfoRow icon={Building2} label="Company" value={contact.company || "—"} />
            <InfoRow icon={CalendarDays} label="Submitted" value={submittedAt} />
          </div>
          <div>
            <p className="mb-2 text-[11px] font-semibold uppercase tracking-wide text-[#94a3b8]">Message</p>
            <div className="rounded-lg border border-[#eeede6] bg-[#fbfaf9] px-4 py-3">
              <p className="whitespace-pre-wrap text-[13px] leading-relaxed text-[#64748b]">
                {contact.message}
              </p>
            </div>
          </div>
        </div>

        <div className="flex justify-end gap-2 border-t border-[#eeede6] px-6 py-4">
          <Button variant="outline" size="sm" onClick={onClose} className="border-[#eeede6]">
            Close
          </Button>
          <Button size="sm" className="bg-[#f5a623] text-[#0d0d0d] hover:bg-[#e09510]" asChild>
            <a href={`mailto:${contact.email}`}>Reply via Email</a>
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}

function InfoRow({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: ComponentType<{ className?: string }>;
  label: string;
  value: string;
  href?: string;
}) {
  const content = (
    <div className="rounded-lg border border-[#eeede6] bg-white px-3 py-2.5">
      <div className="flex items-center gap-1.5 text-[11px] text-[#94a3b8]">
        <Icon className="h-3.5 w-3.5" />
        {label}
      </div>
      <p className="mt-1 truncate text-[13px] font-medium text-[#1a1a1a]">{value}</p>
    </div>
  );
  if (href) return <a href={href}>{content}</a>;
  return content;
}
