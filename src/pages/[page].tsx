import { ReactElement } from 'react';

import { GetServerSideProps, NextPage } from 'next';

import { ProductsAPI } from '@/api';
import { Products } from '@/components';
import { convertPageNumberToOffset } from '@/shared';
import styles from '@/styles/Home.module.css';
import { Product } from '@/types';

interface Props {
  products: Product[];
}
const Page: NextPage<Props> = ({ products }): ReactElement => {
  return (
    <div className={styles.container}>
      <Products products={products} />
    </div>
  );
};

export default Page;

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const { page } = params as { page: string };

  const offset = convertPageNumberToOffset(+page);
  const products = await ProductsAPI.getProducts(offset);

  return {
    props: { products },
  };
};
