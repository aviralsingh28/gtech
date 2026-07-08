"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { AlertCircle, X } from "lucide-react";

import AdminHeader from "@/components/admin/AdminHeader";
import AdminSidebar from "@/components/admin/AdminSidebar";
import ContactsPanel from "@/components/admin/ContactsPanel";
import DeleteContactDialog from "@/components/admin/DeleteContactDialog";
import MessageModal from "@/components/admin/MessageModal";
import type { ContactRecord } from "@/components/admin/types";

export default function AdminPage() {
  const router = useRouter();

  const [contacts, setContacts] = useState<ContactRecord[]>([]);
  const [selected, setSelected] = useState<ContactRecord | null>(null);
  const [loading, setLoading] = useState(true);
  const [toolbarSearch, setToolbarSearch] = useState("");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [loadError, setLoadError] = useState("");
  const [deleteTarget, setDeleteTarget] = useState<ContactRecord | null>(null);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    loadContacts();
  }, []);

  async function loadContacts() {
    try {
      setLoading(true);
      setLoadError("");
      const res = await fetch("/api/admin");
      const data = await res.json();
      if (data.success) setContacts(data.data);
      else setLoadError(data.message || "Failed to load.");
    } catch {
      setLoadError("Unable to reach server.");
    } finally {
      setLoading(false);
    }
  }

  const newCount = useMemo(() => {
    const d = new Date();
    d.setDate(d.getDate() - 3);
    return contacts.filter((c) => new Date(c.createdAt) >= d).length;
  }, [contacts]);

  async function logout() {
    await fetch("/api/logout", { method: "POST" });
    router.push("/login");
  }

  async function confirmDelete() {
    if (!deleteTarget) return;
    try {
      setDeleting(true);
      const res = await fetch(`/api/contact/${deleteTarget._id}`, { method: "DELETE" });
      const data = await res.json();
      if (data.success) {
        setContacts((p) => p.filter((c) => c._id !== deleteTarget._id));
        setDeleteTarget(null);
      } else setLoadError(data.message || "Delete failed.");
    } catch {
      setLoadError("Delete failed.");
    } finally {
      setDeleting(false);
    }
  }

  return (
    <div className="app">
      <div className="side-desktop">
        <AdminSidebar inboxCount={newCount} onLogout={logout} />
      </div>

      {mobileOpen && (
        <>
          <div className="mobile-overlay open" onClick={() => setMobileOpen(false)} />
          <div className="side-mobile">
            <AdminSidebar
              inboxCount={newCount}
              onLogout={logout}
              isMobile
              onCloseMobile={() => setMobileOpen(false)}
            />
          </div>
        </>
      )}

      <div className="main">
        <AdminHeader onMenuOpen={() => setMobileOpen(true)} />

        {loadError && (
          <div
            style={{
              margin: "16px 30px 0",
              display: "flex",
              alignItems: "center",
              gap: 8,
              padding: "12px 16px",
              borderRadius: 8,
              border: "1px solid #fecaca",
              background: "#fef2f2",
              color: "#b91c1c",
              fontSize: 13,
            }}
          >
            <AlertCircle size={16} />
            <span style={{ flex: 1 }}>{loadError}</span>
            <button type="button" onClick={() => setLoadError("")} style={{ background: "none", border: "none", cursor: "pointer" }}>
              <X size={16} />
            </button>
          </div>
        )}

        <ContactsPanel
          contacts={contacts}
          loading={loading}
          onView={setSelected}
          onDelete={(id) => {
            const c = contacts.find((x) => x._id === id);
            if (c) setDeleteTarget(c);
          }}
          toolbarSearch={toolbarSearch}
          onToolbarSearchChange={setToolbarSearch}
        />
      </div>

      <MessageModal open={!!selected} contact={selected} onClose={() => setSelected(null)} />

      <DeleteContactDialog
        contact={deleteTarget}
        deleting={deleting}
        onConfirm={confirmDelete}
        onClose={() => setDeleteTarget(null)}
      />
    </div>
  );
}
