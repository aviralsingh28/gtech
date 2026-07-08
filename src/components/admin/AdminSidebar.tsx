"use client";

import { useState } from "react";
import Image from "next/image";
import { LogOut, Mail, X } from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";

interface Props {
  onLogout: () => void;
  inboxCount?: number;
  isMobile?: boolean;
  onCloseMobile?: () => void;
}

export default function AdminSidebar({
  onLogout,
  inboxCount = 0,
  isMobile = false,
  onCloseMobile,
}: Props) {
  const [userOpen, setUserOpen] = useState(false);

  function handleLogout() {
    setUserOpen(false);
    onLogout();
  }

  return (
    <aside className="side">
      <div className="side-top">
        <a className="logo" href="/admin">
          <Image
            src="/images/Brand/brandLogo.svg"
            alt="GTECH"
            width={168}
            height={60}
            className="logo-img"
            priority
          />
        </a>
        {isMobile && onCloseMobile && (
          <button
            onClick={onCloseMobile}
            style={{ marginLeft: "auto", background: "none", border: "none", cursor: "pointer", color: "var(--ink-3)" }}
            aria-label="Close"
          >
            <X size={16} />
          </button>
        )}
      </div>

      <nav className="nav">
        <div className="ni on">
          <Mail strokeWidth={1.7} size={17} />
          <span className="lbl">Contact Requests</span>
          {inboxCount > 0 && <span className="pill">{inboxCount > 99 ? "99+" : inboxCount}</span>}
        </div>
      </nav>

      <button type="button" className="side-user" onClick={() => setUserOpen(true)}>
        <span className="avatar">AU</span>
        <span className="meta">
          <b>Admin User</b>
        </span>
      </button>

      <Dialog open={userOpen} onOpenChange={setUserOpen}>
        <DialogContent className="user-modal" showCloseButton={false}>
          <DialogTitle className="sr-only">Admin account</DialogTitle>
          <div className="user-modal-head">
            <span className="big">AU</span>
            <div>
              <b>Admin User</b>
              <span>admin@gtech.com</span>
            </div>
            <button
              type="button"
              onClick={() => setUserOpen(false)}
              style={{
                marginLeft: "auto",
                background: "none",
                border: "none",
                cursor: "pointer",
                color: "var(--ink-3)",
                padding: 4,
              }}
              aria-label="Close"
            >
              <X size={16} />
            </button>
          </div>
          <div className="user-modal-actions">
            <button type="button" className="btn logout" onClick={handleLogout}>
              <LogOut size={14} />
              Log out
            </button>
          </div>
        </DialogContent>
      </Dialog>
    </aside>
  );
}
