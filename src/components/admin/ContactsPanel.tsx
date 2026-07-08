"use client";

import { Search } from "lucide-react";

import ContactTable from "@/components/admin/ContactTable";
import type { ContactRecord } from "@/components/admin/types";

interface Props {
  contacts: ContactRecord[];
  loading: boolean;
  onView: (contact: ContactRecord) => void;
  onDelete: (id: string) => void;
  toolbarSearch: string;
  onToolbarSearchChange: (v: string) => void;
}

export default function ContactsPanel({
  contacts,
  loading,
  onView,
  onDelete,
  toolbarSearch,
  onToolbarSearchChange,
}: Props) {
  const filtered = contacts.filter((c) => {
    const q = toolbarSearch.toLowerCase();

    return (
      !q ||
      `${c.name} ${c.email} ${c.company} ${c.phone} ${c.message}`
        .toLowerCase()
        .includes(q)
    );
  });

  return (
    <div className="content">
      <div className="phead">
        <div>
          <h1>Contact Request Directory</h1>
          <p>Track and respond to every inquiry from your website.</p>
        </div>
      </div>

      <div className="toolbar">
        <div className="search w-full">
          <Search size={15} strokeWidth={1.75} />
          <input
            className="w-full"
            placeholder="Search by name, email, company, phone..."
            value={toolbarSearch}
            onChange={(e) => onToolbarSearchChange(e.target.value)}
          />
        </div>
      </div>

      <ContactTable
        contacts={filtered}
        loading={loading}
        onView={onView}
        onDelete={onDelete}
      />
    </div>
  );
}