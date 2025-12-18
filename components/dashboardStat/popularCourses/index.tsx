import React from "react";
import styles from "./styles.module.css";

interface Course {
  id: number;
  name: string;
  count: number;
  color: string;
  icon: string;
}

interface PopularCoursesProps {
  courses: Course[];
}

const PopularCourses: React.FC<PopularCoursesProps> = ({ courses }) => {
  const maxCount = Math.max(...courses.map((c) => c.count));

  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <h2 className={styles.title}>Popular courses</h2>
        <button className={styles.menuButton}>
          <span className={styles.dot}></span>
          <span className={styles.dot}></span>
          <span className={styles.dot}></span>
        </button>
      </div>

      <div className={styles.courseList}>
        {courses.map((course) => (
          <div key={course.id} className={styles.courseItem}>
            <span className={styles.icon}>{course.icon}</span>
            <div className={styles.courseContent}>
              <div className={styles.courseInfo}>
                <span className={styles.courseName}>{course.name}</span>
                <span className={styles.courseCount}>{course.count}</span>
              </div>
              <div className={styles.progressBar}>
                <div
                  className={styles.progressFill}
                  style={{
                    width: `${(course.count / maxCount) * 100}%`,
                    backgroundColor: course.color,
                  }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularCourses;
