import { ReactElement } from 'react';

import { GetServerSideProps, NextPage } from 'next';

import styles from '../styles/Home.module.css';

import { ProductsAPI } from '@/api';
import { Products } from '@/components';
import { Product } from '@/types';

interface Props {
  products: Product[];
}
const Home: NextPage<Props> = ({ products }): ReactElement => {
  return (
    <div className={styles.container}>
      <Products products={products} />
    </div>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async () => {
  const products = await ProductsAPI.getProducts();

  return {
    props: { products },
  };
};
