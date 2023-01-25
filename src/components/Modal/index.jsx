import CategoryForm from "../CategoryForm";
import styles from "./styles.module.scss";
const Modal = ({ setShowModal, data, getData }) => {
  return (
    <div className={styles.addCover}>
      <div className={styles.addModal}>
        <button onClick={() => setShowModal(false)}>Close</button>
        <CategoryForm
          data={data}
          getData={getData}
          setShowModal={setShowModal}
        />
      </div>
    </div>
  );
};

export default Modal;
