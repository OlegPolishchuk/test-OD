import React, { ReactElement } from 'react';

import styles from './Pagination.module.css';

import { Button } from '@/components';

interface Props {
  currentPage: string;
  nextCallback: () => void;
  prevCallback: () => void;
  disabledNext?: boolean;
  disabledPrev?: boolean;
}
export const Pagination = ({
  currentPage,
  prevCallback,
  nextCallback,
  disabledPrev,
  disabledNext,
}: Props): ReactElement => {
  return (
    <div className={styles.pagination}>
      <Button onClick={prevCallback} disabled={disabledPrev || currentPage === '0'}>
        Prev
      </Button>
      <span className={styles.page_number}>{currentPage}</span>
      <Button onClick={nextCallback} disabled={disabledNext}>
        Next
      </Button>
    </div>
  );
};
