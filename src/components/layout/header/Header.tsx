import React, { ReactElement } from 'react';

import Link from 'next/link';

import styles from './Header.module.css';

export const Header = (): ReactElement => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <h1 className="logo">
          <Link href="/">Fake Shop</Link>
        </h1>
      </div>
    </header>
  );
};
