import { ReactElement } from 'react';

import { GetServerSideProps, NextPage } from 'next';

import styles from '../styles/Home.module.css';

import { ProductsAPI } from '@/api';
import { Button, Card } from '@/components';
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
        <Button colorScheme="default" type="button">
          Prev
        </Button>
        <span>1</span>
        <Button colorScheme="success" type="button">
          Next
        </Button>
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
