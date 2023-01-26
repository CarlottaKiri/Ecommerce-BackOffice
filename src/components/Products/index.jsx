import { useEffect, useState } from "react";
import { DELETE, GET } from "../../libs/HTTP";
import ProductsList from "../ProductsList";
import { MdReplay } from "react-icons/md";
import styles from "./styles.module.scss";
const Products = () => {
  const [products, setProducts] = useState([]);

  const reloadItems = () => {
    GET("products").then((data) => {
      setProducts(data);
    });
  };

  useEffect(() => {
    reloadItems();
  }, []);

  const deleteElement = (id) => {
    DELETE("products", "/" + id).then((data) => {
      if (data.status === 200) {
        reloadItems();
      }
    });
  };

  return (
    <div className={styles.main}>
      <h1>Products</h1>
      <button className={styles.refresh} onClick={() => reloadItems()}>
        <MdReplay />
      </button>
      <div className={styles.container}>
        <ul className={styles.list}>
          {products.map((item, index) => (
            <ProductsList
              reloadItems={reloadItems}
              deleteElement={deleteElement}
              item={item}
              key={index}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Products;
