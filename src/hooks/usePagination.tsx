import { useMemo } from 'react';
import { generateRangeArray } from 'utils';

type PaginationProps = {
  totalCount: number;
  pageSize: number;
  currentPage: number;
};

type PaginationItem = {
  index: number;
  label: string;
};

export const usePagination = ({
  totalCount,
  pageSize,
  currentPage,
}: PaginationProps) => {
  const paginationData: {
    paginationRange: PaginationItem[];
    totalPageCount: number;
  } = useMemo(() => {
    const totalPageCount = Math.ceil(totalCount / pageSize);

    // if (6 > totalPageCount) {
    return {
      paginationRange: generateRangeArray(1, totalPageCount).map((page) => ({
        index: page,
        label: page.toString(),
      })),
      totalPageCount,
    };
    // }

    // const leftSiblingIndex = Math.max(currentPage - 1, 1);
    // const rightSiblingIndex = Math.min(currentPage + 1, totalPageCount);

    // const shouldShowLeftDots = leftSiblingIndex > 2;
    // const shouldShowRightDots = rightSiblingIndex < totalPageCount - 2;

    // const firstPageIndex = 1;
    // const lastPageIndex = totalPageCount;

    // if (!shouldShowLeftDots && shouldShowRightDots) {
    //   const leftItemCount = 3 + 2 * siblingCount;
    //   const leftRange = generateRangeArray(1, leftItemCount);

    //   return [...leftRange, DOTS, totalPageCount];
    // }

    // if (shouldShowLeftDots && !shouldShowRightDots) {
    //   const rightItemCount = 3 + 2 * siblingCount;
    //   const rightRange = generateRangeArray(
    //     totalPageCount - rightItemCount + 1,
    //     totalPageCount
    //   );
    //   return [firstPageIndex, DOTS, ...rightRange];
    // }

    // if (shouldShowLeftDots && shouldShowRightDots) {
    //   const middleRange = generateRangeArray(
    //     leftSiblingIndex,
    //     rightSiblingIndex
    //   );
    //   return [firstPageIndex, DOTS, ...middleRange, DOTS, lastPageIndex];
    // }
  }, [totalCount, pageSize, currentPage]);

  return paginationData;
};
