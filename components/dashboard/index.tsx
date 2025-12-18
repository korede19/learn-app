"use client";
import coursesData from "../../mocks/dashboardData.json";
import styles from "./styles.module.css";
import HeroBanner from "./heroBanner";
import CourseProgressSection from "./courseProgress";

const DashboardComp = () => {
  return (
    <div className={styles.dashboard}>
      <HeroBanner />
      <CourseProgressSection courses={coursesData.courses} />
    </div>
  );
};

export default DashboardComp;
