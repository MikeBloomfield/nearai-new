"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import cn from "classnames";
import styles from "./people-block.module.scss";

import { peopleArray } from "@/config";

const PeopleBlock = () => {
  const [animatedItems, setAnimatedItems] = useState<number[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      let randomIndex;
      do {
        randomIndex = Math.floor(Math.random() * peopleArray.length);
      } while (animatedItems.includes(randomIndex));

      setAnimatedItems((prev) => [...prev, randomIndex]);

      setTimeout(() => {
        setAnimatedItems((prev) => prev.filter((index) => index !== randomIndex));
      }, 2500);
    }, 1000);

    return () => clearInterval(interval);
  }, [animatedItems]);

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.list_wrapper}>
          <div className={styles.list}>
            {peopleArray.map(({ id, image, icon, padding }) => (
              <div
                key={id}
                className={cn(
                  styles.item,
                  styles[`item_${id}`],
                  {
                    [styles.animated]: animatedItems.includes(id),
                  },
                  { [styles.item_icon]: icon }
                )}
                style={{ padding: padding }}
              >
                <div className={styles.border}></div>
                {icon ? icon : <Image src={image ?? ""} alt="avatar" width={100} height={100} style={{ width: "100%", height: "auto" }} />}
              </div>
            ))}
          </div>
        </div>
        <div className={styles.dragon_wrapper}>
          <div className={styles.dragon}>
            <div className={styles.dragon_main}>
              <Image src="/images/main/avatars/dragon-main.svg" alt="dragon" width={100} height={100} style={{ width: "100%", height: "auto" }} />
              <div className={styles.dragon_shadow}>
                {/* <Image
                src="/images/main/avatars/dragon-shadow.svg"
                alt="dragon shadow"
                width={100}
                height={100}
                style={{ width: "100%", height: "auto" }}
              /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PeopleBlock;
