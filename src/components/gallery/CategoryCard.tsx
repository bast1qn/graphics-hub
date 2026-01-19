'use client';

import Link from 'next/link';
import { AssetCategoryInfo } from '@/types/assets';

interface CategoryCardProps {
  category: AssetCategoryInfo;
  assetType: string;
}

export default function CategoryCard({ category, assetType }: CategoryCardProps) {
  const href = `/gallery/${assetType}?category=${category.id}`;

  return (
    <Link href={href}>
      <div className="group relative overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/50 p-8 text-center transition-all duration-300 hover:-translate-y-1 hover:border-zinc-700 hover:bg-zinc-900 cursor-pointer">
        <div className="text-5xl mb-4 transition-transform duration-300 group-hover:scale-110">
          {category.icon}
        </div>
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
          {category.name}
        </h3>
        <p className="text-sm text-zinc-400 group-hover:text-zinc-300 transition-colors">
          {category.description}
        </p>
      </div>
    </Link>
  );
}
