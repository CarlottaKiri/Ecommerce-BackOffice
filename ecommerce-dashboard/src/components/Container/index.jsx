import styles from "./styles.module.scss";
import Menu from "../Menu";

const MainContainer = () => {
  return (
    <div className={styles.main}>
      <div className={styles.sxColumn}>
        <Menu />
      </div>
      <div className={styles.dxColumn}></div>
    </div>
  );
};

export default MainContainer;
