import styles from "./styles.module.css";
import NewNotification from "@/svgs/newNotification";

interface CourseCardProps {
  watched: number;
  total: number;
  title: string;
}

const CourseCard: React.FC<CourseCardProps> = ({ watched, total, title }) => {
  return (
    <div className={styles.courseCard}>
      <div className={styles.iconWrapper}>
        <NewNotification />
      </div>

      <div className={styles.content}>
        <div className={styles.progress}>
          {watched}/{total} Watched
        </div>
        <h3 className={styles.title}>{title}</h3>
      </div>

      <div className={styles.menu}>⋮</div>
    </div>
  );
};

export default CourseCard;
