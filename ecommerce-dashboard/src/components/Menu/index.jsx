import styles from "./styles.module.scss";
import { navBarLinks } from "../../constants/navbar";

const Menu = () => {
  return (
    <ul className={styles.main}>
      {navBarLinks.map((item) => (
        <div>
          <div className={styles.icons}>{item.icon}</div>
          <li className={styles.list} icon={item.icon} key={item.id}>
            {item.label}
          </li>
        </div>
      ))}
    </ul>
  );
};

export default Menu;
