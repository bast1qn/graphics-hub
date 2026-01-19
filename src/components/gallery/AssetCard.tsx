'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Asset } from '@/types/assets';
import Modal from '@/components/ui/Modal';
import AvatarPreview from './AvatarPreview';

interface AssetCardProps {
  asset: Asset;
}

export default function AssetCard({ asset }: AssetCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Check if this is an avatar with CSS styling
  const isCssAvatar = asset.type === 'avatars' && asset.styleClass;

  return (
    <>
      <div
        onClick={() => setIsModalOpen(true)}
        className="group relative aspect-square w-[280px] h-[280px] overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/50 cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/10 hover:border-zinc-700"
      >
        {/* Asset Preview */}
        {isCssAvatar ? (
          <div className="avatar-wrapper">
            <AvatarPreview asset={asset} />
          </div>
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            {asset.filename.endsWith('.svg') ? (
              <img
                src={`/assets/${asset.type}/${asset.filename}`}
                alt={asset.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            ) : (
              <Image
                src={`/assets/${asset.type}/${asset.filename}`}
                alt={asset.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
            )}
          </div>
        )}

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none" />

        {/* Info */}
        <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full transition-transform duration-300 group-hover:translate-y-0">
          <h3 className="text-lg font-bold text-white mb-1">{asset.title}</h3>
          {asset.description && (
            <p className="text-sm text-zinc-300 line-clamp-2">{asset.description}</p>
          )}
        </div>

        {/* Tags */}
        {asset.tags && asset.tags.length > 0 && (
          <div className="absolute top-3 right-3 flex flex-wrap gap-1 opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none">
            {asset.tags.slice(0, 2).map((tag) => (
              <span
                key={tag}
                className="px-2 py-1 text-xs font-medium bg-blue-600/90 text-white rounded-md backdrop-blur-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Modal for full preview */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} className="bg-black">
        <div className="relative w-full h-full min-h-[500px] flex items-center justify-center bg-black p-8">
          {isCssAvatar ? (
            <div className="flex items-center justify-center" style={{ width: '800px', height: '800px' }}>
              <AvatarPreview asset={asset} fullSize />
            </div>
          ) : (
            <>
              {asset.filename.endsWith('.svg') ? (
                <img
                  src={`/assets/${asset.type}/${asset.filename}`}
                  alt={asset.title}
                  className="max-w-full max-h-[70vh] object-contain"
                />
              ) : (
                <Image
                  src={`/assets/${asset.type}/${asset.filename}`}
                  alt={asset.title}
                  width={asset.previewSize?.width || 800}
                  height={asset.previewSize?.height || 800}
                  className="max-w-full max-h-[70vh] object-contain"
                />
              )}
            </>
          )}
          <div className="absolute bottom-0 left-0 right-0 p-6 text-center bg-gradient-to-t from-black to-transparent">
            <h2 className="text-2xl font-bold text-white mb-2">{asset.title}</h2>
            {asset.description && (
              <p className="text-zinc-300">{asset.description}</p>
            )}
          </div>
        </div>
      </Modal>
    </>
  );
}
