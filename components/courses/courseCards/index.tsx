"use client";
import React, { useState } from "react";
import styles from "./styles.module.css";
import { Course } from "../../../types";

interface CourseCardProps {
  course: Course;
}

const CourseCard: React.FC<CourseCardProps> = ({ course }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`${styles.courseCard} ${
        isHovered ? styles.courseCardHover : ""
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={styles.courseImageContainer}
        style={{ backgroundColor: course.bgColor }}
      >
        {course.image}
      </div>
      <div className={styles.courseInfo}>
        <div className={styles.courseTitleRow}>
          <h3 className={styles.courseTitle}>{course.title}</h3>
          <span className={styles.courseArrow}>→</span>
        </div>
        <p className={styles.courseInstructor}>
          Instructor: <strong>{course.instructor}</strong>
        </p>
      </div>
    </div>
  );
};

export default CourseCard;
