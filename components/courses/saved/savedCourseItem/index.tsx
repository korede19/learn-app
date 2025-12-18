"use client";
import React, { useState } from "react";
import styles from "./styles.module.css";
import { SavedCourse } from "../../../../types";

interface SavedCourseItemProps {
  course: SavedCourse;
}

const SavedCourseItem: React.FC<SavedCourseItemProps> = ({ course }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`${styles.savedCourseItem} ${
        isHovered ? styles.savedCourseItemHover : ""
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={styles.savedCourseIcon}>{course.image}</div>
      <div className={styles.savedCourseInfo}>
        <h4 className={styles.savedCourseTitle}>{course.title}</h4>
        <p className={styles.savedCourseLessons}>{course.lessons}</p>
      </div>
    </div>
  );
};

export default SavedCourseItem;
