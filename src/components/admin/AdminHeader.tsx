"use client";

interface Props {
  onMenuOpen: () => void;
}

export default function AdminHeader({ onMenuOpen }: Props) {
  return (
    <header className="topbar flex items-center justify-start px-6 h-16">
      <h1 className="text-xl font-semibold text-gray-900">
        Admin Dashboard
      </h1>
    </header>
  );
}