import { ReactElement } from 'react';

import { GetServerSideProps, NextPage } from 'next';

import styles from '../styles/Home.module.css';

import { ProductsAPI } from '@/api';
import { Card } from '@/components';
import { Product } from '@/types';

interface Props {
  products: Product[];
}
const Home: NextPage<Props> = ({ products }): ReactElement => {
  return (
    <div className={styles.container}>
      {products.map(product => (
        <Card key={product.id} product={product} />
      ))}

      <div className={styles.pagination}>
        <button className={styles.button} type="button">
          Prev
        </button>
        <span>1</span>
        <button className={styles.button} type="button">
          Next
        </button>
      </div>
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
