'use client';
import React from 'react';
import cn from 'classnames';

import styles from './styles.module.scss';
import ButtonDark from '../buttonDark/ButtonDark';
import Lines from '../animatedElements/webLines/lines/Lines';

interface Path {
  id: number;
  path: string;
}


const pathArr1: Path[] = [
  {
    id: 0,
    path: 'M343 43L342.838 61.5793C342.309 122.447 369.527 180.243 416.788 218.604L450.043 245.597C496.83 283.574 524 340.621 524 400.881L524 494',
  },
  {
    id: 1,
    path: 'M343 43L343 83.748C343 131.591 360.151 177.849 391.34 214.129L421.66 249.398C452.849 285.678 470 331.936 470 379.779L470 494',
  },
  {
    id: 2,
    path: 'M343 43L343 113.494C343 142.742 349.415 171.633 361.792 198.132L393.208 265.395C405.585 291.894 412 320.785 412 350.032L412 494',
  },
  {
    id: 3,
    path: 'M322 43L322 62.6456C322 122.905 294.83 179.953 248.043 217.93L213.957 245.597C167.17 283.574 140 340.621 140 400.881L140 494',
  },
  {
    id: 4,
    path: 'M322 43L322 83.748C322 131.591 304.849 177.849 273.66 214.129L243.34 249.398C212.151 285.678 195 331.936 195 379.779L195 494',
  },
  {
    id: 5,
    path: 'M322 43L322 113.494C322 142.742 315.585 171.633 303.208 198.132L271.792 265.395C259.415 291.894 253 320.785 253 350.032L253 494',
  },
];
const pathArr2: Path[] = [
  {
    id: 0,
    path: 'M342 859L342 839.354C342 779.095 369.17 722.047 415.957 684.07L450.043 656.403C496.83 618.426 524 561.379 524 501.119L524 408',
  },
  {
    id: 1,
    path: 'M343 859L343 818.252C343 770.409 360.151 724.151 391.34 687.871L421.66 652.602C452.849 616.322 470 570.064 470 522.221L470 408',
  },
  {
    id: 2,
    path: 'M343 859L343 788.506C343 759.258 349.415 730.367 361.792 703.868L393.208 636.605C405.585 610.106 412 581.215 412 551.968L412 408',
  },
  {
    id: 3,
    path: 'M322 859L322 839.354C322 779.095 294.83 722.047 248.043 684.07L213.957 656.403C167.17 618.426 140 561.379 140 501.119L140 408',
  },
  {
    id: 4,
    path: 'M322 859L322 818.252C322 770.409 304.849 724.151 273.66 687.871L243.34 652.602C212.151 616.322 195 570.064 195 522.221L195 408',
  },
  {
    id: 5,
    path: 'M322 859L322 788.506C322 759.258 315.585 730.367 303.208 703.868L271.792 636.605C259.415 610.106 253 581.215 253 551.968L253 408',
  },
];

const pathArr3: Path[] = [
  {
    id: 0,
    path: 'M342 -7.95547e-06L342 19.6456C342 79.9054 369.17 136.953 415.957 174.93L450.043 202.597C496.83 240.574 524 297.621 524 357.881L524 451',
  },
  {
    id: 1,
    path: 'M343 -5.55135e-06L343 40.748C343 88.5911 360.151 134.849 391.34 171.129L421.66 206.398C452.849 242.678 470 288.936 470 336.779L470 451',
  },
  {
    id: 2,
    path: 'M343 -3.01609e-06L343 70.4944C343 99.7417 349.415 128.633 361.792 155.132L393.208 222.395C405.585 248.894 412 277.785 412 307.032L412 451',
  },
  {
    id: 3,
    path: 'M322 7.95547e-06L322 19.6456C322 79.9055 294.83 136.953 248.043 174.93L213.957 202.597C167.17 240.574 140 297.621 140 357.881L140 451',
  },
  {
    id: 4,
    path: 'M322 5.55135e-06L322 40.748C322 88.5911 304.849 134.849 273.66 171.129L243.34 206.398C212.151 242.678 195 288.936 195 336.779L195 451',
  },
  {
    id: 5,
    path: 'M322 3.01609e-06L322 70.4944C322 99.7417 315.585 128.633 303.208 155.132L271.792 222.395C259.415 248.894 253 277.785 253 307.032L253 451',
  },
];

const pathArr4: Path[] = [
  {
    id: 0,
    path: 'M327 1021L327.749 702.643C327.906 635.944 294.803 573.557 239.484 536.294L234.266 532.78C179.085 495.61 146 433.434 146 366.902L146 317.001',
  },
  {
    id: 1,
    path: 'M327 1021L327 680.614C327 626.311 304.919 574.342 265.83 536.648L261.17 532.153C222.081 494.459 200 442.491 200 388.188L200 317.001',
  },
  {
    id: 2,
    path: 'M327 1021L327 647.529C327 613.064 318.094 579.183 301.145 549.174L283.855 518.562C266.906 488.553 258 454.672 258 420.207L258 317',
  },
  {
    id: 3,
    path: 'M348 1021L348 702.182C348 635.627 381.108 573.432 436.321 536.267L441.679 532.661C496.892 495.496 530 433.301 530 366.746L530 316.999',
  },
  {
    id: 4,
    path: 'M348 1021L348 680.678C348 626.386 370.073 574.426 409.148 536.733L413.852 532.196C452.927 494.503 475 442.543 475 388.251L475 317',
  },
  {
    id: 5,
    path: 'M348 1021L348 608.981C348 569.028 360.021 530 382.5 496.971V496.971C404.979 463.942 417 424.913 417 384.96L417 317',
  },
];




const Road = () => {


  return (
    <section className={styles.section}>
      <div className={cn('wrapper', styles.wrapper)}>
        <div className={styles.roadWrapper}>
          <ButtonDark buttonText="The Road Ahead" />
          <h2 className={styles.title}>Strategic Pathway: From Laying the Foundations to Global Expansion</h2>
        </div>
      </div>
      <div className={styles.line}>
        <Lines items={pathArr1} viewBox="0 0 670 720" />
      </div>
      <div className={`${styles.ball} ${styles.ball1}`}>
        <p>
          Phase 1:
          <br /> Build the Foundation
          <br /> (Now)
        </p>
        <video className={styles.videoElement} src="/video/globe.mp4" autoPlay loop muted playsInline preload="auto" />
      </div>
      <div className={styles.curveOuter}>
        <div className={styles.line}>
          <Lines items={pathArr2} viewBox="0 0 670 859" />
        </div>
        <div className={styles.line2}>
          <Lines items={pathArr3} viewBox="0 0 670 768" />
        </div>
        <div className={`${styles.absItem} ${styles.absItem1}`}>
          <div>1</div>
          <p>
            Launch Research
            <br /> Hub competitions
          </p>
        </div>
        <div className={`${styles.absItem} ${styles.absItem2}`}>
          <div>2</div>
          <p>
            Define Agent Protocol
            <br /> specifications
          </p>
        </div>
        <div className={`${styles.absItem} ${styles.absItem3}`}>
          <div>3</div>
          <p>
            Release AI Assistant
            <br /> preview
          </p>
        </div>
        <div className={`${styles.absItem} ${styles.absItem4}`}>
          <div>4</div>
          <p>
            Build initial contributor
            <br /> community
          </p>
        </div>
      </div>
      <div className={`${styles.ball} ${styles.ball2}`}>
        <p>
          Phase 2:
          <br /> Develop the
          <br /> Ecosystem
        </p>
        <video className={styles.videoElement} src="/video/globe.mp4" autoPlay loop muted playsInline preload="auto" />
      </div>
      <div className={styles.curveOuter}>
        <div className={styles.line}>
          <Lines items={pathArr2} viewBox="0 0 670 859" />
        </div>
        <div className={styles.line2}>
          <Lines items={pathArr3} viewBox="0 0 670 768" />
        </div>
        <div className={`${styles.absItem} ${styles.absItem1}`}>
          <div>1</div>
          <p>
            Deploy Agent
            <br /> Protocol
          </p>
        </div>
        <div className={`${styles.absItem} ${styles.absItem2}`}>
          <div>2</div>
          <p>
            Launch reward and
            <br />
            royalty system
          </p>
        </div>
        <div className={`${styles.absItem} ${styles.absItem3}`}>
          <div>3</div>
          <p>
            Expand model training
            <br /> capabilities
          </p>
        </div>
        <div className={`${styles.absItem} ${styles.absItem4}`}>
          <div>4</div>
          <p>
            Enable cross-service
            <br /> integration
          </p>
        </div>
      </div>
      <div className={`${styles.ball} ${styles.ball3}`}>
        <p>
          Phase 3:
          <br /> Scale the Network
        </p>
        <video className={styles.videoElement} src="/video/globe.mp4" autoPlay loop muted playsInline preload="auto" />
      </div>
      <div className={styles.curveOuter}>
        <div className={styles.line}><Lines items={pathArr4} viewBox="0 0 670 1021" /></div>
        <div className={`${styles.absItem} ${styles.absItem1}`}>
          <div>1</div>
          <p>
            Enable agent-to-
            <br />
            agent communication
          </p>
        </div>
        <div className={`${styles.absItem} ${styles.absItem2}`}>
          <div>2</div>
          <p>
            Launch AI service
            <br /> marketplace
          </p>
        </div>
        <div className={`${styles.absItem} ${styles.absItem3}`}>
          <div>3</div>
          <p>
            Implement community
            <br /> governance
          </p>
        </div>
        <div className={`${styles.absItem} ${styles.absItem4}`}>
          <div>4</div>
          <p>
            Expand to new
            <br /> use cases
          </p>
        </div>
      </div>
      <div className={cn('wrapper', styles.roadWrapper)}>
        {/* <div ref={bulbContainerRef} className={styles.bulbContainer}>
          <Image alt="Bulb Off" src={BulbOffImage} className={cn(styles.bulb, { [styles.hidden]: isBulbOnVisible })} />
          <Image alt="Bulb On" src={BulbOnImage} className={cn(styles.bulb, styles.bulbOn, { [styles.visible]: isBulbOnVisible })} />
          <div className={cn(styles.bulbShadow, { [styles.visible]: isBulbOnVisible })}></div>
        </div> */}
      </div>
    </section>
  );
};

export default Road;
