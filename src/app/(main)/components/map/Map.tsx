'use client';
import React, { useEffect, useRef } from 'react';
import styles from './styles.module.scss';
import Image from 'next/image';
import Char1Image from '@images/main/char-1.png';
import Char2Image from '@images/main/char-2.png';
import Char3Image from '@images/main/char-3.png';
import Char4Image from '@images/main/char-4.png';
import Char5Image from '@images/main/char-5.png';
import MapImage from '@images/main/map.png';

const Map: React.FC = () => {
  const char1Ref = useRef<HTMLDivElement | null>(null);
  const char2Ref = useRef<HTMLDivElement | null>(null);
  const char3Ref = useRef<HTMLDivElement | null>(null);
  const char4Ref = useRef<HTMLDivElement | null>(null);
  const char5Ref = useRef<HTMLDivElement | null>(null);
  const char6Ref = useRef<HTMLDivElement | null>(null);
  const char7Ref = useRef<HTMLDivElement | null>(null);
  const char8Ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const targetElement = entry.target.querySelector(`.${styles.character}`);
            if (targetElement) {
              targetElement.classList.add(styles.visible);
            }
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.5,
      },
    );

    [char1Ref, char2Ref, char3Ref, char4Ref, char5Ref, char6Ref, char7Ref, char8Ref].forEach((ref) => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => {
      [char1Ref, char2Ref, char3Ref, char4Ref, char5Ref, char6Ref, char7Ref, char8Ref].forEach((ref) => {
        if (ref.current) observer.unobserve(ref.current);
      });
    };
  }, []);

  return (
    <div className={styles.mapWrapper}>
      <Image src={MapImage} alt="Map" className={styles.map} />

      <div ref={char1Ref} className={styles.charWrapper}>
        <div className={`${styles.character} ${styles.char1}`}>
          <Image src={Char1Image} alt="Character 1" />
        </div>
      </div>
      <div ref={char2Ref} className={styles.charWrapper}>
        <div className={`${styles.character} ${styles.char2}`}>
          <Image src={Char2Image} alt="Character 2" />
        </div>
      </div>
      <div ref={char3Ref} className={styles.charWrapper}>
        <div className={`${styles.character} ${styles.char3}`}>
          <Image src={Char3Image} alt="Character 3" />
        </div>
      </div>
      <div ref={char4Ref} className={styles.charWrapper}>
        <div className={`${styles.character} ${styles.char4}`}>
          <Image src={Char4Image} alt="Character 4" />
        </div>
      </div>
      <div ref={char5Ref} className={styles.charWrapper}>
        <div className={`${styles.character} ${styles.char5}`}>
          <Image src={Char5Image} alt="Character 5" />
        </div>
      </div>
      <div ref={char6Ref} className={styles.charWrapper}>
        <div className={`${styles.character} ${styles.char6}`}>
          <Image src={Char3Image} alt="Character 6" />
        </div>
      </div>
      <div ref={char7Ref} className={styles.charWrapper}>
        <div className={`${styles.character} ${styles.char7}`}>
          <Image src={Char4Image} alt="Character 7" />
        </div>
      </div>
      <div ref={char8Ref} className={styles.charWrapper}>
        <div className={`${styles.character} ${styles.char8}`}>
          <Image src={Char5Image} alt="Character 8" />
        </div>
      </div>
    </div>
  );
};

export default Map;
