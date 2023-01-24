import { useEffect, useState } from "react";
import { GET } from "../../libs/HTTP";
import styles from "./styles.module.scss";
import Table from "../Table";

const Categories = () => {
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
      <h1>Categories</h1>
      <Table
        categoriesState={categoriesState.categories}
        loading={categoriesState.loading}
        getData={getData}
      />
    </div>
  );
};

export default Categories;
