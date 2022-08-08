import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CategoriesContext } from "../../context/CategoriesContext";
import { firstLetterUpperCase } from "../../utils/customFunctions";
import styles from "./styles.module.scss";

const CategoriesMenu = () => {
  const { categories } = useContext(CategoriesContext);
  return (
    <>
      {categories.map((el) => (
        <Link
          to={`/category/${el.name}`}
          className={`${styles.navbar__link} my-1 my-lg-0 ms-lg-3 d-flex align-items-center`}
          key={`category-${el.id}`}
        >
          {firstLetterUpperCase(el.name)}{" "}
          <span className="d-none d-lg-inline ps-2">|</span>
        </Link>
      ))}
    </>
  );
};

export default CategoriesMenu;
