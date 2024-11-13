"use client";
import { Player } from "@lottiefiles/react-lottie-player";

import styles from "./stars-back.module.scss";

const StarsBack = () => {
  return (
    <div className={styles.stars_back}>
      <Player autoplay={true} loop src="/lottie/Cosees-Loti.json" className={styles.lottie} id={"stars"} />
    </div>
  );
};

export default StarsBack;
