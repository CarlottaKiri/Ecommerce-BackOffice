import styles from "./styles.module.scss";
import { MdReplay, MdCreate, MdDeleteSweep } from "react-icons/md";

const Table = ({ categoriesState, getData, loading }) => {
  return (
    <div className={styles.main}>
      <div className={styles.head}>
        <button className={styles.refreshBtn} onClick={() => getData()}>
          <MdReplay />
        </button>
      </div>
      {loading ? (
        "loading..."
      ) : (
        <div className={styles.content}>
          {categoriesState.map((item) => (
            <div className={styles.itemDiv} key={item.id}>
              <p>{item.id}</p>
              <img className={styles.img} src={item.image} alt={item.name} />
              <h4>{item.name}</h4>
              <div className={styles.buttons}>
                <button>
                  <MdCreate />
                </button>
                <button>
                  <MdDeleteSweep />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Table;
