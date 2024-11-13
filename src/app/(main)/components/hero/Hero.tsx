import cn from 'classnames';

import styles from './hero.module.scss';
import LogoImage from '@images/main/hero-logo.svg';
import ButtonDark from '../buttonDark/ButtonDark';
import Link from 'next/link';

const Hero = () => {
  return (
    <section className={styles.section}>
      <div className={cn('wrapper', styles.wrapper)}>
        <div className={styles.info}>
          <div className={styles.logo}>
            <div className={styles.logo_image}>
              <LogoImage />
            </div>
          </div>
          <ButtonDark buttonText="Big vision. Your chance to shape what's next." />
          <h1 className={styles.title}>Building the world’s best AI, together.</h1>
          <h3 className={styles.subtitle}>Join the community building the user-owned future of AI.</h3>
          <div className={styles.heroButtons}>
            <Link href="https://app.near.ai" className="default-button">
              <span className="default-button__border"></span>
              <span className="default-button__main">
                <p>Research Hub</p>
              </span>
            </Link>
            <Link href="https://chat.near.ai" className="default-button">
              <span className="default-button__border"></span>
              <span className="default-button__main">
                <p>Ai Assistant</p>
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
