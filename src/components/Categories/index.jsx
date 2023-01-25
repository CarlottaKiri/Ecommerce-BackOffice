import { useEffect, useState } from "react";
import { GET } from "../../libs/HTTP";
import Modal from "../Modal";
import styles from "./styles.module.scss";
import Table from "../Table";

const Categories = () => {
  const [showModal, setShowModal] = useState(false);
  const categoriesStateObj = {
    categories: [],
    loading: true,
  };

  const [categoriesState, setCategoriesState] = useState(categoriesStateObj);

  const getData = () => {
    setCategoriesState({ ...categoriesState, loading: true });
    GET("categories").then((data) =>
      setCategoriesState({
        loading: false,
        categories: data,
      })
    );
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className={styles.main}>
      {showModal && <Modal getData={getData} setShowModal={setShowModal} />}
      <h1>Categories</h1>
      <button className={styles.addBtn} onClick={() => setShowModal(true)}>
        Add Category
      </button>
      <Table
        categoriesState={categoriesState.categories}
        loading={categoriesState.loading}
        getData={getData}
        setShowModal={setShowModal}
      />
    </div>
  );
};

export default Categories;
