import React from "react";
import styles from "./styles.module.css";

import { SavedCourse } from "../../../../types";
import SavedCourseItem from "../savedCourseItem";

interface SavedCoursesProps {
  courses: SavedCourse[];
}

const SavedCourses: React.FC<SavedCoursesProps> = ({ courses }) => {
  return (
    <div className={styles.card}>
      <div className={styles.sectionHeader}>
        <h2 className={styles.sectionTitle}>Saved Courses</h2>
        <a href="#" className={styles.seeAllLink}>
          see all
        </a>
      </div>
      <p className={styles.savedCoursesSubtitle}>Total 15 to view</p>
      {courses.map((course) => (
        <SavedCourseItem key={course.id} course={course} />
      ))}
    </div>
  );
};

export default SavedCourses;
