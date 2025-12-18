import React from "react";

import styles from "./styles.module.css";
import CourseCard from "../courseCard";

interface Course {
  id: number;
  watched: number;
  total: number;
  title: string;
  icon: string;
}

interface CourseProgressSectionProps {
  courses: Course[];
}

const CourseProgressSection: React.FC<CourseProgressSectionProps> = ({
  courses,
}) => {
  return (
    <div className={styles.section}>
      <div className={styles.grid}>
        {courses.map((course) => (
          <CourseCard
            key={course.id}
            watched={course.watched}
            total={course.total}
            title={course.title}
          />
        ))}
      </div>
    </div>
  );
};

export default CourseProgressSection;
