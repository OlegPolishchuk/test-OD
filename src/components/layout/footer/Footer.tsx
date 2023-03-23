import React, { ReactElement } from 'react';

import styles from './Footer.module.css';

export const Footer = (): ReactElement => {
  return <footer className={styles.footer}>@copyright</footer>;
};
