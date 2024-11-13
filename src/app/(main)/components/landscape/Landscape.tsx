import cn from 'classnames';

import styles from './styles.module.scss';
import ButtonDark from '../buttonDark/ButtonDark';

import RocketImage from '@images/main/rocket.svg';
import ShieldImage from '@images/main/shield.svg';
import StarImage from '@images/main/star-big.svg';
import FingerPrintImage from '@images/main/fingerpring.svg';
import Link from 'next/link';

type ArticleProps = {
  setWindow: React.Dispatch<React.SetStateAction<boolean>>;
};

const Landscape: React.FC<ArticleProps> = ({ setWindow }) => {
  return (
    <section className={styles.section}>
      <div className={cn('wrapper', styles.wrapper)}>
        <div className={styles.landscapeWrapper}>
          <ButtonDark buttonText="The Challenge" />
          <h2 className={styles.title}> AI is reshaping the internet. But today&apos;s AI landscape is broken:</h2>
          <div className={styles.landscapeItems}>
            <div className={styles.landscapeItem}>
              <div className={styles.landscapeItemPic}>
                <RocketImage />
              </div>
              <p className={styles.landscapeDesc}>A handful of companies control the most powerful models</p>
            </div>
            <div className={styles.landscapeItem}>
              <div className={styles.landscapeItemPic}>
                <ShieldImage />
              </div>
              <p className={styles.landscapeDesc}>Your privacy is compromised</p>
            </div>
            <div className={styles.landscapeItem}>
              <div className={styles.landscapeItemPic}>
                <StarImage />
              </div>
              <p className={styles.landscapeDesc}>Open source efforts can’t compete with corporate resources</p>
            </div>
            <div className={styles.landscapeItem}>
              <div className={styles.landscapeItemPic}>
                <FingerPrintImage />
              </div>
              <p className={styles.landscapeDesc}>Your data trains their models</p>
            </div>
          </div>
          <Link href="#" className="default-button" onClick={() => setWindow(true)}>
            <span className="default-button__border"></span>
            <span className="default-button__main">
              <p>Read all</p>
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Landscape;
