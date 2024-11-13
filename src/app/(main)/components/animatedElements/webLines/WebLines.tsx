import styles from './web-lines.module.scss';
import Lines from './lines/Lines';

interface Item {
  id: number;
  path: string;
}

interface Props {
  items: Item[];
  viewBox:string;
}

const WebLines: React.FC<Props> = ({ items, viewBox }) => {
  return (
    <div className={styles.container}>
      <div className={styles.lines}>
        <Lines items={items} viewBox={viewBox} />
      </div>

      <div className={styles.block}>
        <div className={styles.border}></div>
        <div className={styles.border}></div>
        <div className={styles.border}></div>
        <div className={styles.back}></div>

        <div className={styles.block_text}>Web3</div>
        <div className={styles.video}>
          <video className={styles.videoElement} src="/video/back.mp4" autoPlay loop muted playsInline preload="auto" />
        </div>
      </div>
    </div>
  );
};

export default WebLines;
