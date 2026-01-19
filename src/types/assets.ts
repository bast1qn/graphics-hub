// Asset-Typen für die Graphics Hub Website

export type AssetType = 'avatars' | 'banners' | 'thumbnails' | 'logos';

export type AssetCategory = 'minimal' | 'tech' | 'elements' | 'art' | 'new';

export interface Asset {
  id: string;
  type: AssetType;
  category: AssetCategory;
  title: string;
  description?: string;
  filename: string;
  styleClass: string;
  previewSize?: { width: number; height: number };
  tags?: string[];
}

export interface AssetCategoryInfo {
  id: AssetCategory;
  name: string;
  description: string;
  icon: string;
  assetTypes: AssetType[];
}

export interface AssetTypeInfo {
  id: AssetType;
  name: string;
  description: string;
  icon: string;
}
