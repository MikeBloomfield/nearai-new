import Image from "next/image";
import styles from "./author.module.scss";

import AvatarImage from "@images/main/avatar.png";
import DotsIcon from "@images/main/dots.svg";

const Author = () => {
  return (
    <div className={styles.container}>
      <div className={styles.block}>
        <div className={styles.border}></div>
        <div className={styles.avatar}>
          <Image src={AvatarImage} alt="avatar" width={100} height={100} />
        </div>
      </div>
      <div className={styles.dots}>
        <DotsIcon />
      </div>
      <div className={styles.bottom}>
        <div className={styles.bottom_border}></div>
        <p className={styles.name}>Illia Polosukhin</p>
      </div>
    </div>
  );
};

export default Author;
