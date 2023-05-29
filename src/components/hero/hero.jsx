import Link from 'next/link';

import styles from './hero.module.scss';

const HeroSection = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.hero__container}>
        <div className={`${styles.hero__socialLinks} ${styles.socialLinks}`}>
          <ul className={styles.socialLinks__list}>
            <li className={styles.socialLinks__item}>
              <Link
                className={styles.socialLinks__link}
                href={`https://www.facebook.com`}
                target="blank"
              >
                FB
              </Link>
            </li>
            <li className={styles.socialLinks__item}>
              <Link
                className={styles.socialLinks__link}
                href={`https://www.twitter.com`}
                target="blank"
              >
                TW
              </Link>
            </li>
            <li className={styles.socialLinks__item}>
              <Link
                className={styles.socialLinks__link}
                href={`https://www.instagram.com`}
                target="blank"
              >
                INS
              </Link>
            </li>
          </ul>
        </div>
        <span className={styles.hero__count}>
          <strong>1</strong>/3
        </span>
        <div className={styles.hero__img}></div>
      </div>
    </section>
  );
};

export default HeroSection;
