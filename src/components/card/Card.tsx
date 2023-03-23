import React, { ReactElement } from 'react';

import Image from 'next/image';

import styles from './Card.module.css';

import { Product } from '@/types';

interface Props {
  product: Product;
}
export const Card = ({ product }: Props): ReactElement => {
  const { id, images, price, title, description } = product;

  return (
    <div key={id} className={styles.productContainer}>
      <Image src={images[1]} alt={title} width={300} height={300} />
      <div className={styles.product_description}>
        <h3 className={styles.product_title}>{title}</h3>
        <div>{description}</div>
        <div className={styles.price}>${price}</div>
      </div>

      <div className={styles.product_controls}>
        <button className={styles.button} type="button">
          Add to card
        </button>
      </div>
    </div>
  );
};
