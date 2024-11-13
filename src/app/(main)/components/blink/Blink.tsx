'use client';
import styles from './styles.module.scss';
import React from 'react';
import cn from 'classnames';

interface BlinkProps {
  customStyles?:string;
}

const Blink: React.FC<BlinkProps> = ({ customStyles }) => {
  return (
    <div className={cn(customStyles, 'buttonBlink')}>
      <div className={styles.gradient1}></div>
      <div className={styles.gradient2}></div>
      <div className={styles.gradient3}></div>
    </div>
  );
};

export default Blink;
