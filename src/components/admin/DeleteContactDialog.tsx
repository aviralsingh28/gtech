"use client";

import { Trash2 } from "lucide-react";

import type { ContactRecord } from "./types";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

interface Props {
  contact: ContactRecord | null;
  deleting: boolean;
  onConfirm: () => void;
  onClose: () => void;
}

export default function DeleteContactDialog({ contact, deleting, onConfirm, onClose }: Props) {
  return (
    <AlertDialog open={!!contact} onOpenChange={(open) => !open && onClose()}>
      <AlertDialogContent className="delete-modal">
        <div className="delete-modal-top">
          <div className="delete-modal-icon" aria-hidden>
            <Trash2 size={20} strokeWidth={1.75} />
          </div>
          <AlertDialogHeader className="delete-modal-header">
            <AlertDialogTitle>Delete submission?</AlertDialogTitle>
            <AlertDialogDescription>
              Remove <strong>{contact?.name}</strong>&apos;s inquiry permanently. This action cannot be
              undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
        </div>
        <AlertDialogFooter className="delete-modal-footer">
          <AlertDialogCancel disabled={deleting} className="delete-modal-btn cancel">
            Cancel
          </AlertDialogCancel>
          <AlertDialogAction
            onClick={onConfirm}
            disabled={deleting}
            className="delete-modal-btn danger"
          >
            {deleting ? "Deleting…" : "Delete"}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
