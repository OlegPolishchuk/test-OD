import React, { ReactElement } from 'react';

import Image from 'next/image';

import styles from './Card.module.css';

import { Button } from '@/components';
import { Product } from '@/types';

interface Props {
  product: Product;
}
export const Card = ({ product }: Props): ReactElement => {
  const { id, images, price, title, description } = product;

  return (
    <div key={id} className={styles.productContainer}>
      <h3 className={`badge badge-secondary ${styles.badge}`}>New</h3>
      <Image src={images[1]} alt={title} width={300} height={300} />
      <div className={styles.product_description}>
        <h3 className={styles.product_title}>{title}</h3>
        <div>{description}</div>
        <div className={styles.price}>${price}</div>
      </div>

      <div className={styles.product_controls}>
        <Button>Add to card</Button>
      </div>
    </div>
  );
};
