import styles from "./lines.module.scss";

import SmallLines from "./smallLines/SmallLines";
import MainLines from "./mainLines/MainLines";
interface Item {
  id: number;
  path: string;
}

interface Props {
  items: Item[];
  viewBox: string
}

const WebLines: React.FC<Props> = ({ items, viewBox }) => {
  return (
    <div className={styles.container}>
      <svg viewBox={viewBox} fill="none" xmlns="http://www.w3.org/2000/svg">
        <SmallLines isAnimate={true} pathArr={items} />
        <MainLines pathArr={items} />

        <defs>
          <linearGradient id="paint0_linear_6007_308" x1="998.037" y1="-6.55023" x2="1008.81" y2="97.9166" gradientUnits="userSpaceOnUse">
            <stop stopColor="#00EB9A" stopOpacity="0.43" />
            <stop offset="0.255" stopColor="#00EB9A" />
            <stop offset="0.805" stopColor="#00EB9A" />
            <stop offset="1" stopColor="#00EB9A" stopOpacity="0.57" />
          </linearGradient>
          <linearGradient id="paint1_linear_6007_308" x1="998.037" y1="34.9018" x2="1003.33" y2="108.305" gradientUnits="userSpaceOnUse">
            <stop stopColor="#00EB9A" stopOpacity="0.43" />
            <stop offset="0.255" stopColor="#00EB9A" />
            <stop offset="0.805" stopColor="#00EB9A" />
            <stop offset="1" stopColor="#00EB9A" stopOpacity="0.57" />
          </linearGradient>
          <linearGradient id="paint2_linear_6007_308" x1="998.037" y1="78.699" x2="999.613" y2="118.829" gradientUnits="userSpaceOnUse">
            <stop stopColor="#00EB9A" stopOpacity="0.43" />
            <stop offset="0.255" stopColor="#00EB9A" />
            <stop offset="0.805" stopColor="#00EB9A" />
            <stop offset="1" stopColor="#00EB9A" stopOpacity="0.57" />
          </linearGradient>
          <linearGradient id="paint3_linear_6007_308" x1="998.037" y1="197.535" x2="999.613" y2="157.405" gradientUnits="userSpaceOnUse">
            <stop stopColor="#00EB9A" stopOpacity="0.43" />
            <stop offset="0.255" stopColor="#00EB9A" />
            <stop offset="0.805" stopColor="#00EB9A" />
            <stop offset="1" stopColor="#00EB9A" stopOpacity="0.57" />
          </linearGradient>
          <linearGradient id="paint4_linear_6007_308" x1="998.037" y1="241.335" x2="1003.33" y2="167.932" gradientUnits="userSpaceOnUse">
            <stop stopColor="#00EB9A" stopOpacity="0.43" />
            <stop offset="0.255" stopColor="#00EB9A" />
            <stop offset="0.805" stopColor="#00EB9A" />
            <stop offset="1" stopColor="#00EB9A" stopOpacity="0.57" />
          </linearGradient>
          <linearGradient id="paint5_linear_6007_308" x1="998.037" y1="282.786" x2="1008.81" y2="178.319" gradientUnits="userSpaceOnUse">
            <stop stopColor="#00EB9A" stopOpacity="0.43" />
            <stop offset="0.255" stopColor="#00EB9A" />
            <stop offset="0.805" stopColor="#00EB9A" />
            <stop offset="1" stopColor="#00EB9A" stopOpacity="0.57" />
          </linearGradient>
          <linearGradient id="paint6_linear_6007_308" x1="477.275" y1="-6.55023" x2="467.283" y2="98.0736" gradientUnits="userSpaceOnUse">
            <stop stopColor="#00EB9A" stopOpacity="0.43" />
            <stop offset="0.255" stopColor="#00EB9A" />
            <stop offset="0.805" stopColor="#00EB9A" />
            <stop offset="1" stopColor="#00EB9A" stopOpacity="0.57" />
          </linearGradient>
          <linearGradient id="paint7_linear_6007_308" x1="477.275" y1="34.9018" x2="472.373" y2="108.359" gradientUnits="userSpaceOnUse">
            <stop stopColor="#00EB9A" stopOpacity="0.43" />
            <stop offset="0.255" stopColor="#00EB9A" />
            <stop offset="0.805" stopColor="#00EB9A" />
            <stop offset="1" stopColor="#00EB9A" stopOpacity="0.57" />
          </linearGradient>
          <linearGradient id="paint8_linear_6007_308" x1="477.275" y1="78.699" x2="475.816" y2="118.838" gradientUnits="userSpaceOnUse">
            <stop stopColor="#00EB9A" stopOpacity="0.43" />
            <stop offset="0.255" stopColor="#00EB9A" />
            <stop offset="0.805" stopColor="#00EB9A" />
            <stop offset="1" stopColor="#00EB9A" stopOpacity="0.57" />
          </linearGradient>
          <linearGradient id="paint9_linear_6007_308" x1="477.275" y1="197.535" x2="475.816" y2="157.397" gradientUnits="userSpaceOnUse">
            <stop stopColor="#00EB9A" stopOpacity="0.43" />
            <stop offset="0.255" stopColor="#00EB9A" />
            <stop offset="0.805" stopColor="#00EB9A" />
            <stop offset="1" stopColor="#00EB9A" stopOpacity="0.57" />
          </linearGradient>
          <linearGradient id="paint10_linear_6007_308" x1="477.275" y1="241.335" x2="472.373" y2="167.878" gradientUnits="userSpaceOnUse">
            <stop stopColor="#00EB9A" stopOpacity="0.43" />
            <stop offset="0.255" stopColor="#00EB9A" />
            <stop offset="0.805" stopColor="#00EB9A" />
            <stop offset="1" stopColor="#00EB9A" stopOpacity="0.57" />
          </linearGradient>

          <linearGradient id="paint11_linear_6007_308" x1="477.275" y1="282.786" x2="467.283" y2="178.162" gradientUnits="userSpaceOnUse">
            <stop stopColor="#00EB9A" stopOpacity="0.43" />
            <stop offset="0.255" stopColor="#00EB9A" />
            <stop offset="0.805" stopColor="#00EB9A" />
            <stop offset="1" stopColor="#00EB9A" stopOpacity="0.57" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default WebLines;
