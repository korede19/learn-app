"use client";
import React, { useState } from "react";
import styles from "./styles.module.css";
import { Category } from "../../../../types";

interface CategoryFilterProps {
  categories: Category[];
  selectedCategory: string | null;
  onSelectCategory: (slug: string | null) => void;
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({
  categories,
  selectedCategory,
  onSelectCategory,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleCategoryClick = (slug: string | null) => {
    onSelectCategory(slug);
    setIsOpen(false);
  };

  const selectedCategoryName = selectedCategory
    ? categories.find((cat) => cat.slug === selectedCategory)?.name
    : "All Categories";

  return (
    <div className={styles.filterContainer}>
      <button className={styles.filterButton} onClick={toggleDropdown}>
        <span>{selectedCategoryName}</span>
        <span className={styles.filterArrow}>{isOpen ? "▴" : "▾"}</span>
      </button>

      {isOpen && (
        <div className={styles.dropdown}>
          <div
            className={`${styles.dropdownItem} ${
              !selectedCategory ? styles.dropdownItemActive : ""
            }`}
            onClick={() => handleCategoryClick(null)}
          >
            <span>All Categories</span>
            <span className={styles.categoryCount}>
              {categories.reduce((sum, cat) => sum + cat.count, 0)}
            </span>
          </div>

          {categories.map((category) => (
            <div
              key={category.id}
              className={`${styles.dropdownItem} ${
                selectedCategory === category.slug
                  ? styles.dropdownItemActive
                  : ""
              }`}
              onClick={() => handleCategoryClick(category.slug)}
            >
              <span>{category.name}</span>
              <span className={styles.categoryCount}>{category.count}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CategoryFilter;
