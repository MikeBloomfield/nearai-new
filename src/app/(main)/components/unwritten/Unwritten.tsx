'use client';
import React, { useEffect, useRef, useState } from 'react';
import { useIsUnderBreakpoint } from '@hooks/useIsUnderBreakpoint';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import styles from './unwritten.module.scss';

const Unwritten = () => {
  const videoRef = useRef<HTMLDivElement>(null);
  // const titleRef = useRef<HTMLHeadingElement>(null);
  const [stickyTop, setStickyTop] = useState<number>(0);
  const isTablet = useIsUnderBreakpoint('lg');

  useEffect(() => {
    if (!isTablet && isTablet !== null) {
      if (videoRef.current) {
        gsap.fromTo(
          videoRef.current,
          { y: 100, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            ease: 'power3.out',
            duration: 1.5,
            scrollTrigger: {
              trigger: videoRef.current,
              start: 'top 90%',
              end: 'top 40%',
              scrub: true,
            },
          },
        );
      }
    }

    const updateStickyTop = () => {
      if (videoRef.current) {
        const videoHeight = videoRef.current.offsetHeight;
        const windowHeight = window.innerHeight;
        setStickyTop((windowHeight - videoHeight) / 2);
      }
    };

    updateStickyTop();
    window.addEventListener('resize', updateStickyTop);

    return () => {
      window.removeEventListener('resize', updateStickyTop);
      if (!isTablet) ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [isTablet]);

  return (
    <section className={styles.section}>
      <div className={styles.video_container} style={{ top: `${stickyTop}px` }}>
        <div className={styles.video} ref={videoRef}>
          <video className={styles.videoElement} src="/video/Door-Animation-Final.mp4" autoPlay loop muted playsInline preload="auto" />
        </div>
      </div>
      <div className="wrapper text-container">
        <div className={styles.list}>
          <h3 className={styles.item}>Whether you&apos;re an AI researcher, developer, or enthusiast, there&apos;s a place for you in building the user-owned future of AI:</h3>
        </div>
        <div className={styles.button}>
          <Link href="#" className="default-button">
            <span className="default-button__border"></span>
            <span className="default-button__main">
              <p>Join us</p>
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Unwritten;
