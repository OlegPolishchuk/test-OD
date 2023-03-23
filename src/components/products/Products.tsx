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
  const currentPage = page || '1';

  const nextPageDisabled = products.length < PAGINATION.limit;
  const prevPageDisabled = page === '0' || !page;

  const handleNext = (): void => {
    const nextPage = page ? +page + 1 : SecondPageNumber;

    router.push(`/${nextPage}`);
  };

  const handlePrev = (): void => {
    const nextPage = +currentPage > SecondPageNumber ? +page - 1 : '';

    router.push(`/${nextPage}`);
  };

  return (
    <>
      <Pagination
        nextCallback={handleNext}
        prevCallback={handlePrev}
        currentPage={currentPage}
        disabledNext={nextPageDisabled}
        disabledPrev={prevPageDisabled}
      />

      <div className="products_container">
        {products.map((product, index) => (
          <Card
            key={product.id}
            product={product}
            className={index === PAGINATION.limit - 1 ? 'align-self-start-md' : ''}
          />
        ))}
      </div>

      <Pagination
        nextCallback={handleNext}
        prevCallback={handlePrev}
        currentPage={currentPage}
        disabledNext={nextPageDisabled}
        disabledPrev={prevPageDisabled}
      />
    </>
  );
};
