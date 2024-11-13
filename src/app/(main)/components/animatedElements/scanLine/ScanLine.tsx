"use client";
import { useRef, useEffect } from "react";

import Image from "next/image";
import cn from "classnames";
import styles from "./scan-line.module.scss";

import ProfileIcon from "@images/icons/profile.svg";
import DividerImage from "@images/main/divider.webp";

const ScanLine = () => {
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);
  const animationFrameId = useRef<number | null>(null);

  useEffect(() => {
    const centerX = window.innerWidth / 2;

    const checkItemsPosition = () => {
      itemsRef.current.forEach((element) => {
        if (element) {
          const itemRect = element.getBoundingClientRect();
          const itemCenterX = itemRect.left + itemRect.width / 4;

          if (itemCenterX < centerX) {
            element.classList.remove(styles.rotate);
          }

          if (Math.abs(centerX - itemCenterX) < itemRect.width / 2) {
            element.classList.add(styles.rotate);
          }
        }
      });

      animationFrameId.current = requestAnimationFrame(checkItemsPosition);
    };

    checkItemsPosition();

    animationFrameId.current = requestAnimationFrame(checkItemsPosition);

    return () => {
      if (animationFrameId.current !== null) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, []);

  const renderItems = (listIndex: number) => {
    return Array.from({ length: 14 }, (_, index) => {
      const refIndex = listIndex * 14 + index;
      return (
        <div
          className={cn(styles.item, { [styles.rotate]: listIndex === 4 || listIndex === 5 || listIndex === 6 })}
          key={refIndex}
          ref={(el) => {
            itemsRef.current[refIndex] = el;
          }}
        >
          <div className={styles.border}></div>
          <div className={styles.border_second}></div>
          <span className={styles.profile}>
            <ProfileIcon />
          </span>
        </div>
      );
    });
  };

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.lists}>
          <div className={cn(styles.list_wrapper, styles.list_green)}>
            <div className={styles.list}>{renderItems(1)}</div>
            <div className={styles.list}>{renderItems(2)}</div>
            <div className={styles.list}>{renderItems(3)}</div>
          </div>
          <div className={styles.divider}>
            <div className={styles.divider_image}>
              <Image src={DividerImage} alt="divider" />
            </div>
          </div>
          <div className={cn(styles.list_wrapper, styles.list_gray)}>
            <div className={styles.list}>{renderItems(4)}</div>
            <div className={styles.list}>{renderItems(5)}</div>
            <div className={styles.list}>{renderItems(6)}</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScanLine;
