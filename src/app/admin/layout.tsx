import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Admin - Bast1QN Graphics Hub",
  description: "Admin Bereich für Grafik-Verwaltung",
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Admin Header */}
      <header className="border-b border-zinc-800 bg-zinc-950/50 backdrop-blur-sm sticky top-0 z-40">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <Link href="/" className="text-zinc-400 hover:text-white transition-colors">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
            </Link>
            <div>
              <h1 className="text-xl font-bold">Admin Dashboard</h1>
              <p className="text-xs text-zinc-500">Bast1QN Graphics Hub</p>
            </div>
          </div>
          <nav className="flex items-center gap-4">
            <Link
              href="/admin"
              className="text-sm text-zinc-400 hover:text-white transition-colors"
            >
              Dashboard
            </Link>
            <Link
              href="/"
              className="px-3 py-1.5 text-sm bg-zinc-800 hover:bg-zinc-700 rounded-lg transition-colors"
            >
              Zur Website
            </Link>
          </nav>
        </div>
      </header>

      {/* Admin Content */}
      <main>{children}</main>
    </div>
  );
}
