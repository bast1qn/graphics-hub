import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bast1QN Graphics Hub",
  description: "Deine zentrale Sammlung für Grafiken - Avatare, Banner, Thumbnails und mehr",
};

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
