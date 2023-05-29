import Link from 'next/link';

import styles from './header.module.scss';

import BurgerIcon from './burger/burger-icon';
import Logo from '../../icons/logo';
import SearchIcon from '../../icons/search-icon';
import FavoriteIcon from '../../icons/favorite-icon';
import PurchaseIcon from '../../icons/purchase-icon';
import UserIcon from '../../icons/user-icon';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header__container}>
        <div className={styles.header__left}>
          <BurgerIcon classes={styles.header__burgerIcon} />
          <Link className={styles.header__logoLink} href={'/'}>
            <Logo />
          </Link>
          <nav className={styles.nav}>
            <ul className={styles.nav__list}>
              <li className={styles.nav__item}>
                <Link href={'/'} className={styles.nav__link}>
                  Home
                </Link>
              </li>
              <li className={styles.nav__item}>
                <Link href={'/shop'} className={styles.nav__link}>
                  Shop
                </Link>
              </li>
              <li className={styles.nav__item}>
                <Link href={'/blog'} className={styles.nav__link}>
                  Blog
                </Link>
              </li>
              <li className={styles.nav__item}>
                <Link href={'/contact'} className={styles.nav__link}>
                  Contact
                </Link>
              </li>
              <li className={styles.nav__item}>
                <Link href={'/login'} className={styles.nav__link}>
                  Log in
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className={styles.header__right}>
          <div className={styles.header__icons}>
            <button id="header-search">
              <SearchIcon />
            </button>
            <button id="header-user">
              <UserIcon />
            </button>
            <button id="header-favorite">
              <FavoriteIcon />
            </button>
            <button id="header-purchase">
              <PurchaseIcon />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
