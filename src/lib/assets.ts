import { Asset, AssetCategory, AssetType, AssetCategoryInfo, AssetTypeInfo } from '@/types/assets';
import assetsData from '../../data/assets.json';

// Type guards for the JSON data
const isAsset = (item: any): item is Asset => {
  return (
    typeof item.id === 'string' &&
    typeof item.type === 'string' &&
    typeof item.category === 'string' &&
    typeof item.title === 'string' &&
    typeof item.filename === 'string' &&
    typeof item.styleClass === 'string'
  );
};

const isCategoryInfo = (item: any): item is AssetCategoryInfo => {
  return (
    typeof item.id === 'string' &&
    typeof item.name === 'string' &&
    typeof item.description === 'string' &&
    typeof item.icon === 'string' &&
    Array.isArray(item.assetTypes)
  );
};

const isTypeInfo = (item: any): item is AssetTypeInfo => {
  return (
    typeof item.id === 'string' &&
    typeof item.name === 'string' &&
    typeof item.description === 'string' &&
    typeof item.icon === 'string'
  );
};

// Load data from JSON
export const loadAssets = (): Asset[] => {
  if ('assets' in assetsData && Array.isArray(assetsData.assets)) {
    return assetsData.assets.filter(isAsset) as Asset[];
  }
  return [];
};

export const loadCategories = (): AssetCategoryInfo[] => {
  if ('categories' in assetsData && Array.isArray(assetsData.categories)) {
    return assetsData.categories.filter(isCategoryInfo) as AssetCategoryInfo[];
  }
  return [];
};

export const loadAssetTypes = (): AssetTypeInfo[] => {
  if ('assetTypes' in assetsData && Array.isArray(assetsData.assetTypes)) {
    return assetsData.assetTypes.filter(isTypeInfo) as AssetTypeInfo[];
  }
  return [];
};

// Filter functions
export const getAssetsByType = (type: AssetType): Asset[] => {
  return loadAssets().filter(asset => asset.type === type);
};

export const getAssetsByCategory = (category: AssetCategory): Asset[] => {
  return loadAssets().filter(asset => asset.category === category);
};

export const getAssetsByTypeAndCategory = (type: AssetType, category: AssetCategory): Asset[] => {
  return loadAssets().filter(asset => asset.type === type && asset.category === category);
};

export const getAssetById = (id: string): Asset | undefined => {
  return loadAssets().find(asset => asset.id === id);
};

export const getCategoryById = (id: AssetCategory): AssetCategoryInfo | undefined => {
  return loadCategories().find(cat => cat.id === id);
};

export const getAssetTypeById = (id: AssetType): AssetTypeInfo | undefined => {
  return loadAssetTypes().find(type => type.id === id);
};

// CSS class helpers
export const getStyleClasses = (styleClass: string): string => {
  return styleClass;
};

export const getColorClasses = (category: AssetCategory): string => {
  const colorMap: Record<AssetCategory, string> = {
    minimal: 'bg-indigo',
    tech: 'c-cyan',
    elements: 'c-gold',
    art: 'c-rose',
    new: 'bg-indigo'
  };
  return colorMap[category] || '';
};

// Get categories that support a specific asset type
export const getCategoriesForAssetType = (assetType: AssetType): AssetCategoryInfo[] => {
  return loadCategories().filter(cat => cat.assetTypes.includes(assetType));
};

// Get all categories (for category overview page)
export const getAllCategories = (): AssetCategoryInfo[] => {
  return loadCategories();
};

// Get all asset types (for type overview page)
export const getAllAssetTypes = (): AssetTypeInfo[] => {
  return loadAssetTypes();
};
