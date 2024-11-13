import Link from 'next/link';
import styles from './footer.module.scss';
import cn from 'classnames';

import ArrowIcon from '@images/icons/Icon-Link.svg';

const Footer = () => {
  return (
    <footer className={cn(styles.footer)}>
      <div className={styles.button}>
        <Link href="#" className="default-button">
          <span className="default-button__border"></span>
          <span className="default-button__main">
            <p>Join us</p>
          </span>
        </Link>
      </div>
      <div className={styles.content}>
        <Link href="https://chat.near.ai/chat" className={styles.link}>
          Build and earn on the<span className={styles.green}>Research Hub</span>
          <span className={styles.icon}>
            <ArrowIcon />
          </span>
        </Link>
        <Link href="https://chat.near.ai/chat" className={styles.link}>
          Try the<span className={styles.green}>AI Assistant</span> preview
          <span className={styles.icon}>
            <ArrowIcon />
          </span>
        </Link>
        <Link href="https://chat.near.ai/chat" className={styles.link}>
          Join our <span className={styles.green}>Discord</span> community
          <span className={styles.icon}>
            <ArrowIcon />
          </span>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
