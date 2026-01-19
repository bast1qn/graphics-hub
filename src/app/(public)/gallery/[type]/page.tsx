import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getAllAssetTypes, getCategoriesForAssetType, getAssetsByType, getAssetsByTypeAndCategory } from '@/lib/assets';
import { AssetType, AssetCategory } from '@/types/assets';
import CategoryCard from '@/components/gallery/CategoryCard';
import GalleryGrid from '@/components/gallery/GalleryGrid';
import GalleryContent from './GalleryContent';

interface GalleryPageProps {
  params: Promise<{ type: string }>;
  searchParams: Promise<{ category?: string }>;
}

// Generate static params for all asset types
export async function generateStaticParams() {
  const assetTypes = getAllAssetTypes();
  return assetTypes.map((type) => ({
    type: type.id,
  }));
}

export default async function GalleryPage({ params, searchParams }: GalleryPageProps) {
  const { type } = await params;
  const { category } = await searchParams;

  // Validate asset type
  const assetType = getAllAssetTypes().find((t) => t.id === type);
  if (!assetType) {
    notFound();
  }

  // Get categories for this asset type
  const categories = getCategoriesForAssetType(type as AssetType);

  // Filter by category if specified
  let assets;
  if (category) {
    assets = getAssetsByTypeAndCategory(type as AssetType, category as AssetCategory);
  } else {
    assets = getAssetsByType(type as AssetType);
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="border-b border-zinc-800 bg-zinc-950/50 backdrop-blur-sm sticky top-0 z-40">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center gap-4 mb-4">
            <Link
              href="/"
              className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Zurück
            </Link>
          </div>
          <h1 className="text-3xl font-bold">
            {assetType.icon} {assetType.name}
          </h1>
          <p className="text-zinc-400 mt-1">{assetType.description}</p>
        </div>
      </header>

      <GalleryContent
        assetType={assetType}
        categories={categories}
        assets={assets}
        selectedCategory={category}
      />
    </div>
  );
}
