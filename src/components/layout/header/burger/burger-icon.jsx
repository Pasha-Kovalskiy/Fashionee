import styles from './burger-icon.module.scss';

const BurgerIcon = ({ classes }) => {
  return (
    <div className={`${styles.burgerIcon} ${classes}`}>
      <span />
    </div>
  );
};

export default BurgerIcon;
