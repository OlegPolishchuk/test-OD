import { ReactElement } from 'react';

import { GetServerSideProps, NextPage } from 'next';
import Image from 'next/image';

import styles from '../styles/Home.module.css';

import { ProductsAPI } from '@/api';
import { Product } from '@/types';

interface Props {
  products: Product[];
}
const Home: NextPage<Props> = ({ products }): ReactElement => {
  return (
    <div className={styles.container}>
      {products.map(product => (
        <div key={product.id} className={styles.productContainer}>
          <Image src={product.images[1]} alt={product.title} width={300} height={300} />
          <div className={styles.product_description}>
            <h3 className={styles.product_title}>{product.title}</h3>
            <div>{product.description}</div>
            <div className={styles.price}>${product.price}</div>
          </div>

          <div className={styles.product_controls}>
            <button className={styles.button} type="button">
              Add to card
            </button>
          </div>
        </div>
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
