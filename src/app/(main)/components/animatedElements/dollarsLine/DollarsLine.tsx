"use client";
import { useEffect, useState, useRef } from "react";
import styles from "./dollars-line.module.scss";

import ProfileIcon from "@images/icons/profile.svg";
import DollarIcon from "@images/icons/dollar.svg";

const DollarsLine = () => {
  const [animatedItems, setAnimatedItems] = useState<number[]>([]);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const items = Array.from({ length: 14 }, (_, index) => (
    <div className={`${styles.item} ${animatedItems.includes(index) ? styles.animated : ""}`} key={index}>
      <div className={styles.border}></div>
      <div className={styles.border_second}></div>
      <span className={styles.profile}>
        <ProfileIcon />
      </span>
      <span className={styles.dollar}>
        <DollarIcon />
      </span>
    </div>
  ));

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const interval = setInterval(() => {
      let randomIndex;
      do {
        randomIndex = Math.floor(Math.random() * 20);
      } while (animatedItems.includes(randomIndex));

      setAnimatedItems((prev) => [...prev, randomIndex]);

      setTimeout(() => {
        setAnimatedItems((prev) => prev.filter((index) => index !== randomIndex));
      }, 1700);
    }, 500);

    return () => clearInterval(interval);
  }, [isVisible, animatedItems]);

  return (
    <section className={styles.section} ref={sectionRef}>
      <div className={styles.container}>
        <div className={styles.list_wrapper}>
          <div className={styles.list}>{items}</div>
          <div className={styles.list}>{items}</div>
        </div>
      </div>
    </section>
  );
};

export default DollarsLine;
