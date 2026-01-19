'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { loadAssets, loadCategories, loadAssetTypes } from '@/lib/assets';
import { Asset, AssetCategoryInfo, AssetTypeInfo } from '@/types/assets';

export default function AdminDashboard() {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [assets, setAssets] = useState<Asset[]>([]);
  const [categories, setCategories] = useState<AssetCategoryInfo[]>([]);
  const [assetTypes, setAssetTypes] = useState<AssetTypeInfo[]>([]);
  const [selectedType, setSelectedType] = useState<string>('all');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  useEffect(() => {
    // Check authentication
    const auth = sessionStorage.getItem('adminAuth');
    if (!auth) {
      router.push('/admin/login');
      return;
    }
    setIsAuthenticated(true);

    // Load data
    setAssets(loadAssets());
    setCategories(loadCategories());
    setAssetTypes(loadAssetTypes());
  }, [router]);

  if (!isAuthenticated) {
    return null;
  }

  const handleLogout = () => {
    sessionStorage.removeItem('adminAuth');
    router.push('/admin/login');
  };

  const filteredAssets = assets.filter((asset) => {
    if (selectedType !== 'all' && asset.type !== selectedType) return false;
    if (selectedCategory !== 'all' && asset.category !== selectedCategory) return false;
    return true;
  });

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold mb-2">Dashboard</h1>
          <p className="text-zinc-400">Verwalte deine Grafiken und Assets</p>
        </div>
        <button
          onClick={handleLogout}
          className="px-4 py-2 bg-zinc-800 hover:bg-zinc-700 rounded-lg transition-colors text-sm"
        >
          Abmelden
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6">
          <div className="text-3xl font-bold text-blue-400 mb-1">{assets.length}</div>
          <div className="text-sm text-zinc-400">Gesamte Assets</div>
        </div>
        <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6">
          <div className="text-3xl font-bold text-purple-400 mb-1">{categories.length}</div>
          <div className="text-sm text-zinc-400">Kategorien</div>
        </div>
        <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6">
          <div className="text-3xl font-bold text-green-400 mb-1">{assetTypes.length}</div>
          <div className="text-sm text-zinc-400">Asset-Typen</div>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6 mb-8">
        <h2 className="text-lg font-semibold mb-4">Filter</h2>
        <div className="flex flex-wrap gap-4">
          <div className="flex-1 min-w-[200px]">
            <label className="block text-sm font-medium text-zinc-300 mb-2">Asset-Typ</label>
            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="w-full px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="all">Alle</option>
              {assetTypes.map((type) => (
                <option key={type.id} value={type.id}>
                  {type.icon} {type.name}
                </option>
              ))}
            </select>
          </div>
          <div className="flex-1 min-w-[200px]">
            <label className="block text-sm font-medium text-zinc-300 mb-2">Kategorie</label>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="all">Alle</option>
              {categories.map((cat) => (
                <option key={cat.id} value={cat.id}>
                  {cat.icon} {cat.name}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="mt-4 text-sm text-zinc-400">
          Zeige {filteredAssets.length} von {assets.length} Assets
        </div>
      </div>

      {/* Assets List */}
      <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl overflow-hidden">
        <div className="p-6 border-b border-zinc-800 flex items-center justify-between">
          <h2 className="text-lg font-semibold">Assets</h2>
          <button
            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors text-sm font-medium"
            onClick={() => alert('Upload-Funktion kommt in Phase 2')}
          >
            + Neues Asset
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-zinc-800/50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-zinc-400 uppercase tracking-wider">
                  ID
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-zinc-400 uppercase tracking-wider">
                  Titel
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-zinc-400 uppercase tracking-wider">
                  Typ
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-zinc-400 uppercase tracking-wider">
                  Kategorie
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-zinc-400 uppercase tracking-wider">
                  Datei
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-zinc-400 uppercase tracking-wider">
                  Aktionen
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-800">
              {filteredAssets.map((asset) => (
                <tr key={asset.id} className="hover:bg-zinc-800/30">
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-zinc-400">{asset.id}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-white">{asset.title}</div>
                    {asset.description && (
                      <div className="text-sm text-zinc-500">{asset.description}</div>
                    )}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-zinc-400">
                    {asset.type}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-zinc-400">
                    {asset.category}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-zinc-400">
                    {asset.filename}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    <div className="flex gap-2">
                      <Link
                        href={`/gallery/${asset.type}`}
                        className="text-blue-400 hover:text-blue-300"
                      >
                        Ansehen
                      </Link>
                      <button
                        className="text-red-400 hover:text-red-300"
                        onClick={() => alert('Löschen kommt in Phase 2')}
                      >
                        Löschen
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
              {filteredAssets.length === 0 && (
                <tr>
                  <td colSpan={6} className="px-6 py-12 text-center text-zinc-500">
                    Keine Assets gefunden
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Quick Links */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        <Link
          href="/"
          className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6 hover:border-zinc-700 transition-colors"
        >
          <h3 className="font-semibold mb-2">🌐 Zur Website</h3>
          <p className="text-sm text-zinc-400">Öffne die öffentliche Galerie</p>
        </Link>
        <div
          className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6 hover:border-zinc-700 transition-colors cursor-pointer"
          onClick={() => alert('Weitere Funktionen kommen in Phase 2')}
        >
          <h3 className="font-semibold mb-2">📁 Assets bearbeiten</h3>
          <p className="text-sm text-zinc-400">Assets hochladen, bearbeiten und löschen</p>
        </div>
      </div>
    </div>
  );
}
