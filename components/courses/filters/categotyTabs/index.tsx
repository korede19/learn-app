import React from "react";
import styles from "./styles.module.css";
import { Category } from "../../../../types";

interface CategoryTabsProps {
  categories: Category[];
  selectedCategory: string | null;
  onSelectCategory: (slug: string | null) => void;
}

const CategoryTabs: React.FC<CategoryTabsProps> = ({
  categories,
  selectedCategory,
  onSelectCategory,
}) => {
  return (
    <div className={styles.tabsContainer}>
      <button
        className={`${styles.tab} ${!selectedCategory ? styles.tabActive : ""}`}
        onClick={() => onSelectCategory(null)}
      >
        All Courses
        <span className={styles.tabCount}>
          {categories.reduce((sum, cat) => sum + cat.count, 0)}
        </span>
      </button>

      {categories.map((category) => (
        <button
          key={category.id}
          className={`${styles.tab} ${
            selectedCategory === category.slug ? styles.tabActive : ""
          }`}
          onClick={() => onSelectCategory(category.slug)}
        >
          {category.name}
          <span className={styles.tabCount}>{category.count}</span>
        </button>
      ))}
    </div>
  );
};

export default CategoryTabs;
