import Image from "next/image";
import styles from "./light-back.module.scss";

import LightFirst from "@images/main/light-1.webp";
import LightSecond from "@images/main/light-2.webp";

const LightBack = () => {
  return (
    <div className={styles.container}>
      <div className={styles.light_1}>
        <Image src={LightFirst} alt="light_1" width={100} height={100} style={{ width: "100%", height: "auto" }} />
      </div>
      <div className={styles.light_2}>
        <Image src={LightSecond} alt="light_2" width={100} height={100} style={{ width: "100%", height: "auto" }} />
      </div>
    </div>
  );
};

export default LightBack;
