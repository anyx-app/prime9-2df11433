import { useState, useMemo } from 'react';

/**
 * Interface defining the minimum shape required for an artifact to be filtered by this hook.
 * It must have a numeric price property.
 */
interface ArtifactWithPrice {
  price: number;
  [key: string]: any;
}

/**
 * Custom hook to filter a list of artifacts based on a maximum price.
 * 
 * @param artifacts - The complete array of artifact objects.
 * @returns An object containing the current filter state, the state setter, and the filtered array.
 */
export const useArtifactFilter = <T extends ArtifactWithPrice>(artifacts: T[] = []) => {
  const [filterPrice, setFilterPrice] = useState<string>('');

  const filteredArtifacts = useMemo(() => {
    // If the filter is an empty string, return all artifacts
    if (filterPrice === '') {
      return artifacts;
    }

    const maxPrice = Number(filterPrice);

    // Safety check: if the conversion fails, return all artifacts
    if (isNaN(maxPrice)) {
      return artifacts;
    }

    // Return artifacts that are affordable (price <= maxPrice)
    return artifacts.filter((artifact) => artifact.price <= maxPrice);
  }, [artifacts, filterPrice]);

  return {
    filterPrice,
    setFilterPrice,
    filteredArtifacts,
  };
};
