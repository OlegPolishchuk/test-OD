import React, { ReactElement } from 'react';

import Image from 'next/image';

import styles from './Card.module.css';

import { Button } from '@/components';
import { Product } from '@/types';

interface Props {
  product: Product;
  className?: string;
}
export const Card = ({ product, className }: Props): ReactElement => {
  const { id, images, price, title, description } = product;

  return (
    <div key={id} className={`${styles.productContainer} col-12 col-sm-6 col-md-4 ${className}`}>
      <div className={styles.product_image_container}>
        <h3 className={`badge badge-secondary ${styles.badge}`}>New</h3>
        <Image src={images[1]} alt={title} fill />
      </div>
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
