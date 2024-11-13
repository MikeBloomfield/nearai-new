'use client';
import { useEffect, useRef, useMemo, useState } from 'react';
import { useIsUnderBreakpoint } from '@hooks/useIsUnderBreakpoint';
import gsap from 'gsap';
// import { ScrollTrigger } from "gsap/ScrollTrigger";
import AnimatedText from '../animatedElements/animatedText/AnimatedText';
import cn from 'classnames';
import Author from './author/Author';
import BulbOnImage from '@images/main/bulb-on.png';
import BulbOffImage from '@images/main/bulb-off.png';
import Image from 'next/image';

import styles from './article.module.scss';

import PeopleBlock from '../../components/animatedElements/peopleBlock/PeopleBlock';

import RocketIcon from '@images/icons/rocket.svg';
import EarthImage from '@images/icons/earth.svg';
import CrossImage from '@images/icons/cross.svg';

type ArticleProps = {
  setWindow: React.Dispatch<React.SetStateAction<boolean>>;
};

const Article: React.FC<ArticleProps> = ({ setWindow }) => {
  const infoRef1 = useRef(null);
  const infoRef2 = useRef(null);
  const infoRef3 = useRef(null);
  const bigTextRef = useRef(null);

  const [isBulbOnVisible, setIsBulbOnVisible] = useState(false);
  const bulbContainerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsBulbOnVisible(entry.isIntersecting);
      },
      {
        threshold: .5,
      },
    );

    if (bulbContainerRef.current) {
      observer.observe(bulbContainerRef.current);
    }

    return () => {
      if (bulbContainerRef.current) {
        observer.unobserve(bulbContainerRef.current);
      }
    };
  }, []);

  const isTablet = useIsUnderBreakpoint('lg');

  const infoRefs = useMemo(() => [infoRef1, infoRef2, infoRef3], []);

  useEffect(() => {
    infoRefs.forEach((ref, index) => {
      const element = ref.current;
      const previousElement = index > 0 ? infoRefs[index - 1].current : null;

      gsap.fromTo(
        element,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          scrollTrigger: {
            trigger: element,
            start: 'top 50%',
            end: 'top 50%',
            scrub: true,
            onEnter: () => {
              if (previousElement) {
                gsap.to(previousElement, { opacity: 0, duration: 0.3 });
              }
            },
            onLeaveBack: () => {
              if (previousElement) {
                gsap.to(previousElement, { opacity: 1, duration: 0.1 });
              }
            },
          },
        },
      );
    });

    // if (!isTablet && bigTextRef.current) {
    //   ScrollTrigger.create({
    //     trigger: bigTextRef.current,
    //     start: "top 30%",
    //     end: "+=300",
    //     pin: true,
    //   });
    // }
  }, [isTablet, infoRefs]);

  return (
    <section className={styles.section}>
      <CrossImage className={styles.AbsIcon} onClick={() => setWindow(false)} />
      <div className="wrapper">
        <div className={styles.container}>
          <div className={styles.info} ref={infoRef1}>
            <Author />
          </div>
          <div className={styles.main}>
            <div className={cn(styles.description_big, styles.description_big_animated)} ref={bigTextRef}>
              <AnimatedText isBig>
                <span className={`${styles.titleMain} text-gradient`}>NEAR.AI</span>
                <br />
                <br />
                <span className={styles.articleSubtitle}>A manifesto for user-owned AGI (artificial general intelligence).</span>
              </AnimatedText>
            </div>
            <div className={cn(styles.description, 'text-container', styles.m40)}>
              <AnimatedText>
                AGI is a new space, but it is already a battleground. Extremely large businesses are using their almost limitless resources to establish centralized models that will allow them to control and profit from the future in the same way that they have controlled and profited from the past.
              </AnimatedText>
            </div>
            <div className={cn(styles.subtitle, 'text-container', styles.m60)}>
              <AnimatedText>
                Let me be <span className="text-gradient">clear</span>
              </AnimatedText>
            </div>
            <div className={cn(styles.description, 'text-container', styles.m40)}>
              <AnimatedText>
                You will not just be a user of this technology. You will be their product. These businesses will ultimately decide what news you read, videos you watch, and products you buy. Every AI system optimizes for something. The small handful of trillion-dollar corporations that are
                developing AI in the marketplace today optimize for corporate profit generation and control.
              </AnimatedText>
            </div>
            <div className={cn(styles.description, 'text-container')}>
              <AnimatedText>
                That prospect is bleak but I do not believe that it is inevitable. We stand at a pivotal moment in the development of AI. At 
                <span className="text-gradient" style={{ fontWeight: 700 }}>
                  NEAR
                </span>{' '}
                we believe as a society and a community we can and must do better.
              </AnimatedText>
            </div>
          </div>
        </div>
      </div>
      <div className="wrapper">
        <div className={styles.EarthContainer}>
          {' '}
          <EarthImage />
        </div>
        <div className={styles.container}>
          <div className={styles.info}>
            <Author />
          </div>
          <div className={styles.main}>
            <div className={cn(styles.description, 'text-container', styles.subtitle, styles.m60)} ref={infoRef2}>
              <AnimatedText>
                Our own starting point
                <RocketIcon />
                is very simple and reflects the core principles that have underpinned <span className="text-gradient">NEAR</span> since its foundation.
              </AnimatedText>
            </div>
            <div className={cn(styles.description, 'text-container', styles.m60)}>
              <AnimatedText>User data should always be owned by the user. It should never be reduced to a line on the balance sheet of a distant and remote corporation.</AnimatedText>
            </div>
            <div className={cn(styles.description, 'text-container')}>
              <AnimatedText>
                <span className="text-gradient">I believe</span> that user ownership is the only model for AGI that can safeguard data ownership, privacy, and security. Instead of a single company deciding what is safe for all of us, what we can have access to, and what we see, I envision a global
                community working together, aligned by economic incentives that allow direct collaboration in a scalable, sustainable way.
              </AnimatedText>
            </div>
          </div>
        </div>
      </div>
      <PeopleBlock />
      <div className="wrapper">
        <div className={styles.container}>
          <div className={styles.info} ref={infoRef3}>
            <Author />
          </div>
          <div className={styles.main}>
            <div className={cn(styles.description, 'text-container', styles.subtitle, styles.m40)}>
              <AnimatedText>
                The foundation for <span className="text-gradient">NEAR</span> to lead the charge for User Owned AGI is strong.
              </AnimatedText>
            </div>
            <div className={cn(styles.description, 'text-container', styles.m40)}>
              <AnimatedText>
                NEAR’s accessibility and scalability has attracted more active users than any other blockchain. With user distribution in the tens of millions, a <span className="text-gradient">Web3 </span>developer ecosystem that includes a growing number of AI projects, and a strong balance sheet,
                NEAR has the resources, networks and capability to shape an alternative user owned future.
              </AnimatedText>
            </div>
            <div className={cn(styles.description, 'text-container', styles.m40)}>
              <AnimatedText>
                I believe that is a vision worth fighting for. I hope that you do too, — because we cannot achieve it unless we work together. NEAR’s tens of  millions of users provide an immense ecosystem of infrastructure and application builders who are already expanding what is possible using
                <span className="text-gradient">NEAR.</span> We will unlock the power and creativity of this community of innovators, developers, and visionaries to deliver a better, fairer alternative to centralized AGI models owned by corporations and governments.
              </AnimatedText>
            </div>
            <div className={cn(styles.description, 'text-container', styles.m60)}>
              <AnimatedText>Our vision for AGI is one that maximizes its value to the users, not to some distant shareholder or government. If that is a vision you share, join with us and together we will create an AGI future that benefits the many rather than the few.</AnimatedText>
            </div>
          </div>
        </div>
        <div ref={bulbContainerRef} className={styles.bulbContainer}>
          <Image alt="Bulb Off" src={BulbOffImage} className={cn(styles.bulb, { [styles.hidden]: isBulbOnVisible })} />
          <Image alt="Bulb On" src={BulbOnImage} className={cn(styles.bulb, styles.bulbOn, { [styles.visible]: isBulbOnVisible })} />
          <div className={cn(styles.bulbShadow, { [styles.visible]: isBulbOnVisible })}></div>
        </div>
        <div className={cn(styles.bottomTitle, 'text-container', styles.subtitle, styles.m40)}>
          We can do <span className="text-gradient">better.</span> We <span className="text-gradient">must</span> do better.
        </div>
        <div className={cn(styles.bottomSubtitle, 'text-container', styles.subtitle, styles.m60)}>It’s time to take a stand. The future of AGI is as yet unwritten. Help us to write it.</div>
        <div className={cn(styles.bottomAuthor, 'text-container', styles.subtitle)}>Illia Polosukhin, November 2024</div>
      </div>
    </section>
  );
};

export default Article;
