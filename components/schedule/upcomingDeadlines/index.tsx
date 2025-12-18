import React from "react";
import styles from "./styles.module.css";

interface Deadline {
  id: number;
  title: string;
  dueDate: string;
  course: string;
  priority: string;
}

interface UpcomingDeadlinesProps {
  deadlines: Deadline[];
}

const UpcomingDeadlines: React.FC<UpcomingDeadlinesProps> = ({ deadlines }) => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const today = new Date();
    const diffTime = date.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays === 0) return "Today";
    if (diffDays === 1) return "Tomorrow";
    if (diffDays < 7) return `In ${diffDays} days`;
    return date.toLocaleDateString("en-US", { month: "short", day: "numeric" });
  };

  const getPriorityClass = (priority: string) => {
    return priority === "high" ? styles.priorityHigh : styles.priorityMedium;
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2 className={styles.title}>Upcoming Deadlines</h2>
        <button className={styles.viewAllButton}>View All</button>
      </div>

      <div className={styles.deadlinesList}>
        {deadlines.map((deadline) => (
          <div key={deadline.id} className={styles.deadlineCard}>
            <div
              className={`${styles.priorityIndicator} ${getPriorityClass(
                deadline.priority
              )}`}
            />
            <div className={styles.deadlineContent}>
              <h3 className={styles.deadlineTitle}>{deadline.title}</h3>
              <p className={styles.deadlineCourse}>{deadline.course}</p>
            </div>
            <div className={styles.deadlineDate}>
              {formatDate(deadline.dueDate)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UpcomingDeadlines;
