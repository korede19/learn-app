import React from "react";
import Image from "next/image";
import styles from "./styles.module.css";
import Bookmark from "@/svgs/bookmark";

interface Instructor {
  name: string;
  role: string;
  avatar: string;
}

interface CourseSlideCardProps {
  thumbnail: string;
  category: string;
  title: string;
  progress: number;
  instructor: Instructor;
}

const CourseSlideCard: React.FC<CourseSlideCardProps> = ({
  thumbnail,
  category,
  title,
  progress,
  instructor,
}) => {
  return (
    <div className={styles.card}>
      <div className={styles.thumbnailWrapper}>
        <Image
          src={thumbnail}
          alt={title}
          fill
          className={styles.thumbnail}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 360px"
          loading="eager"
        />
        <button className={styles.bookmarkButton}>
          <Bookmark />
        </button>
      </div>

      <div className={styles.content}>
        <span className={styles.category}>{category}</span>
        <h3 className={styles.title}>{title}</h3>

        <div className={styles.progressBar}>
          <div
            className={styles.progressFill}
            style={{ width: `${progress}%` }}
          />
        </div>

        <div className={styles.instructor}>
          <Image
            src={instructor.avatar}
            alt={instructor.name}
            width={32}
            height={32}
            className={styles.avatar}
          />
          <div className={styles.instructorInfo}>
            <p className={styles.instructorName}>{instructor.name}</p>
            <p className={styles.instructorRole}>{instructor.role}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseSlideCard;
