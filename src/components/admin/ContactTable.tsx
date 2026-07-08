"use client";

import { Phone, StickyNote, Trash2 } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

import type { ContactRecord } from "./types";

const AVATAR_COLORS = ["#f5d78e", "#a9c8f5", "#f0aec0", "#a8dbc5", "#ead79a", "#f2c29a"];



function initials(name: string) {
  return (
    name
      .split(" ")
      .map((p) => p[0])
      .join("")
      .slice(0, 2)
      .toUpperCase() || "?"
  );
}



function whatsappUrl(phone: string) {
  const digits = phone.replace(/\D/g, "");
  return digits ? `https://wa.me/${digits}` : "";
}

interface Props {
  contacts: ContactRecord[];
  loading?: boolean;
  onView: (contact: ContactRecord) => void;
  onDelete: (id: string) => void;
}

export default function ContactTable({ contacts, loading, onView, onDelete }: Props) {
  if (loading) {
    return (
      <div className="tablewrap">
        <div className="tt-empty">Loading…</div>
      </div>
    );
  }

  if (contacts.length === 0) {
    return (
      <div className="tablewrap">
        <div className="tt-empty">No contact requests found</div>
      </div>
    );
  }

  return (
    <div className="tablewrap">
      <table>
        <thead>
          <tr>
            <th>Lead</th>
            <th>Phone</th>
             <th>Company</th>
            <th>Project</th>
            <th>Email</th>
            <th style={{ textAlign: "right" }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((item, i) => {
            const ini = initials(item.name);

            return (
              <tr key={item._id}>
                <td>
                  <div style={{ display: "flex", alignItems: "flex-start", gap: 11 }}>
                    {/* <span className="lav" style={{ background: AVATAR_COLORS[i % AVATAR_COLORS.length] }}>
                      {ini}
                    </span> */}
                    <div className="lname">
                      <b>{item.name}</b>
                    </div>
                  </div>
                </td>
                <td className="num" style={{ color: "var(--ink-2)" }}>
                  {item.phone || "—"}
                </td>
<td style={{ color: "var(--ink-2)" }}>
  {item.company || "—"}
</td>

<td style={{ color: "var(--ink-2)" }}>
  {item.message || "—"}
</td>

<td style={{ color: "var(--ink-2)" }}>
  {item.email ? (
    <a
      href={`mailto:${item.email}`}
      style={{
        color: "inherit",
        textDecoration: "none",
      }}
    >
      {item.email}
    </a>
  ) : (
    "—"
  )}
</td>
                <td>
                  <div className="lact" style={{ justifyContent: "flex-end" }}>
                    {item.phone ? (
                      <a href={`tel:${item.phone}`} className="ib" title="Call">
                        <Phone size={15} />
                      </a>
                    ) : (
                      <button type="button" className="ib" title="View" onClick={() => onView(item)}>
                        <Phone size={15} />
                      </button>
                    )}
                    {item.phone && (
                      <a
                        href={whatsappUrl(item.phone)}
                        className="ib wa"
                        title="WhatsApp"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <FaWhatsapp size={15} />
                      </a>
                    )}
                    <button
                      type="button"
                      className="ib del"
                      title="Delete"
                      onClick={() => onDelete(item._id)}
                    >
                      <Trash2 size={15} />
                    </button>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
