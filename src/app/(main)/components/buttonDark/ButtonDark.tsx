'use client';
import Link from 'next/link';
import styles from './styles.module.scss';
import React from 'react';
import StarImage from '@images/main/star.svg';
import Blink from '../blink/Blink';

interface ButtonDarkProps {
  buttonText: string;
}

const ButtonDark: React.FC<ButtonDarkProps> = ({ buttonText }) => {
  return (
    <Link href="#!" className={styles.button}>
      <Blink customStyles={styles.topBlink} />
      <StarImage />
      <span>{buttonText}</span>
      <Blink customStyles={styles.bottomBlink} />
    </Link>
  );
};

export default ButtonDark;
