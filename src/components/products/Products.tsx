import React, { ReactElement } from 'react';

import { useRouter } from 'next/router';

import { Card, Pagination } from '@/components';
import { PAGINATION } from '@/shared';
import { Product } from '@/types';

const SecondPageNumber = 2;

interface Props {
  products: Product[];
}
export const Products = ({ products }: Props): ReactElement => {
  const router = useRouter();
  const { page } = router.query as { page: string };

  const nextPageDisabled = products.length < PAGINATION.limit;
  const prevPageDisabled = page === '0' || !page;

  const handleNext = (): void => {
    const nextPage = page ? +page + 1 : SecondPageNumber;

    router.push(`/${nextPage}`);
  };

  const handlePrev = (): void => {
    const nextPage = page ? +page - 1 : 1;

    router.push(`/${nextPage}`);
  };

  return (
    <>
      <Pagination
        nextCallback={handleNext}
        prevCallback={handlePrev}
        currentPage="1"
        disabledNext={nextPageDisabled}
        disabledPrev={prevPageDisabled}
      />

      {products.map(product => (
        <Card key={product.id} product={product} />
      ))}

      <Pagination
        nextCallback={handleNext}
        prevCallback={handlePrev}
        currentPage="1"
        disabledNext={nextPageDisabled}
        disabledPrev={prevPageDisabled}
      />
    </>
  );
};
