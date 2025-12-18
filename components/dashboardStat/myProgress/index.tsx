import React from "react";
import styles from "./styles.module.css";

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

interface MyProgressProps {
  progress: ProgressData;
}

const MyProgress: React.FC<MyProgressProps> = ({ progress }) => {
  const { totalHours, selectedMonth, visitedLectures, completedTasks } =
    progress;

  // Calculate percentages for the circular progress
  const lecturesPercent =
    (visitedLectures.completed / visitedLectures.total) * 100;
  const tasksPercent = (completedTasks.completed / completedTasks.total) * 100;

  // Calculate stroke dash arrays for SVG circles
  const radius = 80;
  const circumference = 2 * Math.PI * radius;
  const lecturesDash = (lecturesPercent / 100) * circumference;
  const tasksDash = (tasksPercent / 100) * circumference;

  return (
    <div className={styles.card}>
      <h2 className={styles.title}>My progress</h2>

      <div className={styles.progressContainer}>
        <div className={styles.progressHeader}>
          <h3 className={styles.subtitle}>Total hours spended</h3>
          <button className={styles.monthButton}>
            {selectedMonth}
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path
                d="M3 4.5L6 7.5L9 4.5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>

        <div className={styles.progressContent}>
          <div className={styles.circularProgress}>
            <svg className={styles.progressSvg} viewBox="0 0 200 200">
              <circle
                cx="100"
                cy="100"
                r={radius}
                stroke="#e5e7eb"
                strokeWidth="16"
                fill="none"
              />
              <circle
                cx="100"
                cy="100"
                r={radius}
                stroke="#c4b5fd"
                strokeWidth="16"
                fill="none"
                strokeDasharray={`${lecturesDash} ${circumference}`}
                strokeLinecap="round"
                className={styles.progressCircle}
              />
              <circle
                cx="100"
                cy="100"
                r={radius}
                stroke="#7c3aed"
                strokeWidth="16"
                fill="none"
                strokeDasharray={`${tasksDash} ${circumference}`}
                strokeLinecap="round"
                className={styles.progressCircle}
              />
            </svg>
            <div className={styles.hoursDisplay}>
              <span className={styles.hoursNumber}>{totalHours}</span>
            </div>
          </div>

          <div className={styles.stats}>
            <div className={styles.statItem}>
              <div
                className={styles.statBar}
                style={{ backgroundColor: "#c4b5fd" }}
              ></div>
              <div className={styles.statContent}>
                <p className={styles.statValue}>
                  {visitedLectures.completed}/{visitedLectures.total}
                </p>
                <p className={styles.statLabel}>Visited lectures</p>
              </div>
            </div>
            <div className={styles.statItem}>
              <div
                className={styles.statBar}
                style={{ backgroundColor: "#7c3aed" }}
              ></div>
              <div className={styles.statContent}>
                <p className={styles.statValue}>
                  {completedTasks.completed}/{completedTasks.total}
                </p>
                <p className={styles.statLabel}>Completed tasks</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProgress;
