'use client';

import { useState } from 'react';
import Link from 'next/link';
import { AssetTypeInfo, AssetCategoryInfo, Asset } from '@/types/assets';
import CategoryCard from '@/components/gallery/CategoryCard';
import GalleryGrid from '@/components/gallery/GalleryGrid';

interface GalleryContentProps {
  assetType: AssetTypeInfo;
  categories: AssetCategoryInfo[];
  assets: Asset[];
  selectedCategory?: string;
}

export default function GalleryContent({
  assetType,
  categories,
  assets,
  selectedCategory,
}: GalleryContentProps) {
  const [view, setView] = useState<'categories' | 'gallery'>(
    selectedCategory ? 'gallery' : 'categories'
  );

  return (
    <main className="container mx-auto px-4 py-12">
      {view === 'categories' && !selectedCategory ? (
        <>
          {/* Categories Grid */}
          <section>
            <h2 className="text-2xl font-bold mb-6">Kategorien wählen</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {categories.map((category) => (
                <CategoryCard
                  key={category.id}
                  category={category}
                  assetType={assetType.id}
                />
              ))}
            </div>
          </section>

          {/* Show All Button */}
          {assets.length > 0 && (
            <section className="mt-12 text-center">
              <button
                onClick={() => setView('gallery')}
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
              >
                Alle {assetType.name} anzeigen ({assets.length})
              </button>
            </section>
          )}
        </>
      ) : (
        <>
          {/* Gallery View */}
          <div className="mb-8 flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold">
                {selectedCategory
                  ? `${categories.find((c) => c.id === selectedCategory)?.name} ${
                      categories.find((c) => c.id === selectedCategory)?.icon || ''
                    }`
                  : `Alle ${assetType.name}`}
              </h2>
              <p className="text-zinc-400 mt-1">{assets.length} Ergebnisse</p>
            </div>
            {!selectedCategory && categories.length > 0 && (
              <button
                onClick={() => setView('categories')}
                className="px-4 py-2 bg-zinc-800 hover:bg-zinc-700 rounded-lg transition-colors text-sm"
              >
                Zu Kategorien
              </button>
            )}
          </div>

          {/* Category Pills (only when showing all) */}
          {!selectedCategory && categories.length > 0 && (
            <div className="mb-8 flex flex-wrap gap-2">
              <Link
                href={`/gallery/${assetType.id}`}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium"
              >
                Alle
              </Link>
              {categories.map((cat) => (
                <Link
                  key={cat.id}
                  href={`/gallery/${assetType.id}?category=${cat.id}`}
                  className="px-4 py-2 bg-zinc-800 hover:bg-zinc-700 rounded-lg text-sm font-medium transition-colors"
                >
                  {cat.icon} {cat.name}
                </Link>
              ))}
            </div>
          )}

          {/* Assets Grid */}
          <GalleryGrid assets={assets} />
        </>
      )}
    </main>
  );
}
