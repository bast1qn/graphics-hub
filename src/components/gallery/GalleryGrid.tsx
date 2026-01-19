import { Asset } from '@/types/assets';
import AssetCard from './AssetCard';

interface GalleryGridProps {
  assets: Asset[];
  emptyMessage?: string;
}

export default function GalleryGrid({ assets, emptyMessage = 'Keine Assets gefunden' }: GalleryGridProps) {
  if (assets.length === 0) {
    return (
      <div className="flex items-center justify-center py-20">
        <p className="text-zinc-500 text-lg">{emptyMessage}</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {assets.map((asset) => (
        <AssetCard key={asset.id} asset={asset} />
      ))}
    </div>
  );
}
