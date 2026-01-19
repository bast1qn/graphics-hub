import Link from 'next/link';
import { getAllAssetTypes } from '@/lib/assets';

export default function HomePage() {
  const assetTypes = getAllAssetTypes();

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="border-b border-zinc-800 bg-zinc-950/50 backdrop-blur-sm sticky top-0 z-40">
        <div className="container mx-auto px-4 py-6 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Bast1QN Graphics Hub
            </h1>
            <p className="text-sm text-zinc-400 mt-1">Deine zentrale Sammlung für Grafiken</p>
          </div>
          <Link
            href="/admin"
            className="px-4 py-2 text-sm font-medium bg-zinc-800 hover:bg-zinc-700 rounded-lg transition-colors"
          >
            Admin
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Willkommen in der <span className="text-blue-400">Grafik-Galerie</span>
          </h2>
          <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
            Wähle eine Kategorie, um deine Assets zu durchsuchen. Von Avataren über Banner bis hin zu Thumbnails - alles an einem Ort.
          </p>
        </section>

        {/* Asset Types Grid */}
        <section>
          <h3 className="text-2xl font-bold mb-6">Kategorien</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {assetTypes.map((type) => (
              <Link key={type.id} href={`/gallery/${type.id}`}>
                <div className="group relative overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/50 p-8 text-center transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/50 hover:bg-zinc-900 cursor-pointer">
                  <div className="text-5xl mb-4 transition-transform duration-300 group-hover:scale-110">
                    {type.icon}
                  </div>
                  <h4 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                    {type.name}
                  </h4>
                  <p className="text-sm text-zinc-400 group-hover:text-zinc-300 transition-colors">
                    {type.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Quick Stats */}
        <section className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-blue-400 mb-2">29+</div>
            <div className="text-sm text-zinc-400">Avatar-Stile</div>
          </div>
          <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-purple-400 mb-2">5</div>
            <div className="text-sm text-zinc-400">Kategorien</div>
          </div>
          <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-green-400 mb-2">4</div>
            <div className="text-sm text-zinc-400">Asset-Typen</div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-zinc-800 py-8 mt-16">
        <div className="container mx-auto px-4 text-center text-sm text-zinc-500">
          <p>&copy; 2026 Bast1QN Graphics Hub. Erstellt mit Next.js und TypeScript.</p>
        </div>
      </footer>
    </div>
  );
}
