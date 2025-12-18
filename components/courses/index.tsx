import React from "react";
import styles from "./styles.module.css";
import coursesData from "../../mocks/courses.json";
import { CoursesData } from "../../types";
import AllCourses from "./allCourses";
import SavedCourses from "./saved/savedCourses";
import { TopMentors } from "./mentors/topMentors";

const data: CoursesData = coursesData;

export const CourseApp: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.mainContent}>
        <AllCourses
          courses={data.allCourses}
          categories={data.categories || []}
          showTabs={false}
        />
      </div>
      <div className={styles.sidebar}>
        <TopMentors mentors={data.topMentors} />
        <SavedCourses courses={data.savedCourses} />
      </div>
    </div>
  );
};

export default CourseApp;
