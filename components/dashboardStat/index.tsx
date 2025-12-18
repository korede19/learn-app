"use client";
import React from "react";
import styles from "./styles.module.css";
import PopularCourses from "./popularCourses";
import MyProgress from "./myProgress";

interface Course {
  id: number;
  name: string;
  count: number;
  color: string;
  icon: string;
}

interface ProgressData {
  totalHours: number;
  selectedMonth: string;
  visitedLectures: {
    completed: number;
    total: number;
  };
  completedTasks: {
    completed: number;
    total: number;
  };
}

interface DashboardStatsProps {
  popularCourses: Course[];
  myProgress: ProgressData;
}

const DashboardStats: React.FC<DashboardStatsProps> = ({
  popularCourses,
  myProgress,
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.statsGrid}>
        <PopularCourses courses={popularCourses} />
        <MyProgress progress={myProgress} />
      </div>
    </div>
  );
};

export default DashboardStats;
