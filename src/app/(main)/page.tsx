'use client';
import Hero from './components/hero/Hero';
import Map from './components/map/Map';
import Landscape from './components/landscape/Landscape';
import Solution from './components/solution/Solution';
import Road from './components/road/Road';
import Article from './components/article/Article';
import React from 'react';
import styles from './page.module.scss';
import Unwritten from './components/unwritten/Unwritten';

export default function Home() {
  const [isOpenWindow, setIsOpenWindow] = React.useState<boolean>(false);

  return (
    <div className={styles.page}>
      <div className={`${isOpenWindow && styles.hide}`}>
        <Hero />
        <Map />
        <Landscape setWindow={setIsOpenWindow} />
        <Solution />
        <Road />
        <Unwritten />
      </div>
      <Article setWindow={setIsOpenWindow} isOpenWindow={isOpenWindow} />
    </div>
  );
}
