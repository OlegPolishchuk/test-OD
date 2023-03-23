import React, { ReactElement } from 'react';

import Link from 'next/link';

import styles from './Header.module.css';

export const Header = (): ReactElement => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/">
          <h1 className="logo">Fake Shop</h1>
        </Link>
      </div>
    </header>
  );
};
