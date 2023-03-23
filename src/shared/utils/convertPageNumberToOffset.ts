import { PAGINATION } from '@/shared';

export const convertPageNumberToOffset = (pageNumber: number): number => {
  return pageNumber * PAGINATION.limit;
};
