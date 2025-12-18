"use client";
import React, { useState } from "react";
import styles from "./styles.module.css";
import { Course, Category } from "../../../types";
import CategoryFilter from "../filters/categoryFilters";
import CategoryTabs from "../filters/categotyTabs";
import CourseCard from "../courseCards";

interface AllCoursesProps {
  courses: Course[];
  categories: Category[];
  showTabs?: boolean;
}

export const AllCourses: React.FC<AllCoursesProps> = ({
  courses,
  categories,
  showTabs = false,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredCourses = selectedCategory
    ? courses.filter((course) => course.category === selectedCategory)
    : courses;

  return (
    <div>
      <div className={styles.sectionHeader}>
        <h2 className={styles.sectionTitle}>All Courses 📚</h2>

        {!showTabs && (
          <CategoryFilter
            categories={categories}
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
          />
        )}
      </div>

      {showTabs && (
        <CategoryTabs
          categories={categories}
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
        />
      )}

      <div className={styles.courseGrid}>
        {filteredCourses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>

      {filteredCourses.length === 0 && (
        <div className={styles.emptyState}>
          <p>No courses found in this category.</p>
        </div>
      )}
    </div>
  );
};

export default AllCourses;
