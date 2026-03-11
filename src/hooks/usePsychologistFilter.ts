import { useMemo, useState } from 'react';
import { Psychologist } from '../types/psychologist';

export type SortKey = 'name' | 'price_per_hour' | 'rating';
export type SortOrder = 'asc' | 'desc';

export function usePsychologistFilter(initial: Psychologist[] = []) {
  const [items, setItems] = useState<Psychologist[]>(initial);
  const [sortKey, setSortKey] = useState<SortKey>('name');
  const [sortOrder, setSortOrder] = useState<SortOrder>('asc');

  const sorted = useMemo(() => {
    const list = [...items];
    list.sort((a, b) => {
      const aVal = a[sortKey] as any;
      const bVal = b[sortKey] as any;

      if (typeof aVal === 'string' && typeof bVal === 'string') {
        return sortOrder === 'asc' ? aVal.localeCompare(bVal) : bVal.localeCompare(aVal);
      }

      return sortOrder === 'asc' ? aVal - bVal : bVal - aVal;
    });
    return list;
  }, [items, sortKey, sortOrder]);

  return { items: sorted, setItems, sortKey, sortOrder, setSortKey, setSortOrder };
}
