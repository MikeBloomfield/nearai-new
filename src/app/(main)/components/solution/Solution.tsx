'use client';

import cn from 'classnames';

import styles from './styles.module.scss';
import ButtonDark from '../buttonDark/ButtonDark';
import ResearchImage from '@images/main/research.png';
import Image from 'next/image';
import WebLines from '../animatedElements/webLines/WebLines';
import { Player } from '@lottiefiles/react-lottie-player';

import Star from '@images/main/star.svg';

interface Path {
  id: number;
  path: string;
}

const pathArr: Path[] = [
  {
    id: 0,
    path: 'M1440 131.102H1335.28C1297.84 131.102 1261.15 120.594 1229.39 100.773L1118.29 31.4402C1086.53 11.6196 1049.85 1.11157 1012.41 1.11157L804.087 1.11157',
  },
  {
    id: 1,
    path: 'M1440 131.102H1319.71C1292.19 131.102 1264.97 125.424 1239.75 114.425L1107.93 56.9329C1082.71 45.9336 1055.49 40.2563 1027.98 40.2563L804.087 40.2563',
  },
  {
    id: 2,
    path: 'M1440 131.101H1301.42C1285.85 131.101 1270.34 129.283 1255.19 125.685L1092.49 87.0314C1077.34 83.4332 1061.83 81.6157 1046.26 81.6157L804.087 81.6157',
  },
  {
    id: 3,
    path: 'M1440 145.134H1301.42C1285.85 145.134 1270.34 146.951 1255.19 150.549L1092.49 189.203C1077.34 192.801 1061.83 194.618 1046.26 194.618L804.087 194.618',
  },
  {
    id: 4,
    path: 'M1440 145.135H1319.71C1292.19 145.135 1264.97 150.812 1239.75 161.812L1107.93 219.304C1082.71 230.303 1055.49 235.98 1027.98 235.98L804.087 235.98',
  },
  {
    id: 5,
    path: 'M1440 145.134H1335.28C1297.84 145.134 1261.15 155.642 1229.39 175.462L1118.29 244.795C1086.53 264.616 1049.85 275.124 1012.41 275.124L804.087 275.124',
  },
  {
    id: 6,
    path: 'M0 131.102H121.321C156.455 131.102 190.97 121.846 221.39 104.266L353.458 27.9467C383.878 10.3672 418.393 1.11157 453.527 1.11157L686.723 1.11157',
  },
  {
    id: 7,
    path: 'M0 131.102H136.092C161.76 131.102 187.188 126.161 210.988 116.549L363.86 54.8091C387.66 45.1972 413.088 40.2563 438.756 40.2563L686.723 40.2563',
  },
  {
    id: 8,
    path: 'M0 131.101H153.215C167.665 131.101 182.072 129.534 196.185 126.43L378.663 86.2864C392.775 83.1818 407.183 81.6157 421.633 81.6157L686.723 81.6157',
  },
  {
    id: 9,
    path: 'M0 145.134H153.215C167.665 145.134 182.072 146.7 196.185 149.804L378.663 189.948C392.775 193.052 407.183 194.618 421.633 194.618L686.723 194.618',
  },
  {
    id: 10,
    path: 'M0 145.135H136.092C161.76 145.135 187.188 150.076 210.988 159.688L363.86 221.428C387.66 231.04 413.088 235.98 438.756 235.98L686.723 235.98',
  },
  {
    id: 11,
    path: 'M0 145.134H121.321C156.455 145.134 190.97 154.389 221.39 171.969L353.458 248.289C383.878 265.868 418.393 275.124 453.527 275.124L686.723 275.124',
  },
];

const Solution = () => {
  return (
    <section className={styles.section}>
      <div className={cn('wrapper', styles.wrapper)}>
        <div className={styles.solutionWrapper}>
          <ButtonDark buttonText="Our Solution" />
          <h2 className={styles.title}>We&apos;re building three key technologies that will reshape how AI is developed and used</h2>
          <div className={styles.wrapperTop}>
            <div className={styles.item}>
              <div className={styles.itemImage}>
                <Image src={ResearchImage} alt="" />
              </div>
              <div className={styles.itemBottom}>
                <h3 className={styles.itemTitle}>Research Hub: Community-Built AI A new model for AI development</h3>
                <ul className={styles.list}>
                  <li className={styles.listItem}>
                    <Star /> <span className={styles.listItemDesc}>Train cutting-edge models through competitions</span>
                  </li>
                  <li className={styles.listItem}>
                    <Star /> <span className={styles.listItemDesc}>Get paid through rewards and royalties</span>
                  </li>
                  <li className={styles.listItem}>
                    <Star /> <span className={styles.listItemDesc}>Get paid through rewards and royalties</span>
                  </li>
                  <li className={styles.listItem}>
                    <Star /> <span className={styles.listItemDesc}>Shape development through community governance</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className={styles.item}>
              <div className={styles.itemImage}>
                <WebLines items={pathArr} viewBox="0 0 1440 276" />
              </div>
              <div className={styles.itemBottom}>
                <h3 className={styles.itemTitle}>Agent Protocol: The Open Standard Enable AI agents to connect, act, and transact</h3>
                <ul className={styles.list}>
                  <li className={styles.listItem}>
                    <Star /> <span className={styles.listItemDesc}>Connect across Web2 and Web3 services</span>
                  </li>
                  <li className={styles.listItem}>
                    <Star /> <span className={styles.listItemDesc}>Authorize and complete payments seamlessly</span>
                  </li>
                  <li className={styles.listItem}>
                    <Star /> <span className={styles.listItemDesc}>Protect user data and identity</span>
                  </li>
                  <li className={styles.listItem}>
                    <Star /> <span className={styles.listItemDesc}>Build on open standards</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className={styles.wrapperBottom}>
            <div className={styles.itemWide}>
              <div className={styles.line}></div>
              <div className={styles.dots}>
                <span></span>
                <span></span>
                <span></span>
              </div>
              <div className={styles.itemWideImage}>
                <div className={styles.shadow}>
                  <Player autoplay={true} loop src="/lottie/typing.json" className={styles.lottie} id={'typing'} />
                </div>
              </div>
              <div className={styles.itemWideBottom}>
                <h3 className={styles.itemTitle}>AI Assistant: The User-First Experience Experience our vision for user-owned AI</h3>
                <ul className={styles.list}>
                  <li className={styles.listItem}>
                    <Star /> <span className={styles.listItemDesc}>Works for you, not just talks to you</span>
                  </li>
                  <li className={styles.listItem}>
                    <Star /> <span className={styles.listItemDesc}>Built on open standards and protocols</span>
                  </li>
                  <li className={styles.listItem}>
                    <Star /> <span className={styles.listItemDesc}>Keeps your data private</span>
                  </li>
                  <li className={styles.listItem}>
                    <Star /> <span className={styles.listItemDesc}>Connects securely with other agents and services</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className={styles.wrapperBottom}></div>
        </div>
      </div>
    </section>
  );
};

export default Solution;
