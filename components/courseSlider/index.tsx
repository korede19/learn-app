"use client";
import React, { useRef } from "react";
import styles from "./styles.module.css";
import CourseSlideCard from "./courseSliderCard";

interface Instructor {
  name: string;
  role: string;
  avatar: string;
}

interface Course {
  id: number;
  thumbnail: string;
  category: string;
  title: string;
  progress: number;
  instructor: Instructor;
}

interface CourseSliderProps {
  title: string;
  courses: Course[];
}

const CourseSlider: React.FC<CourseSliderProps> = ({ title, courses }) => {
  const sliderRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (sliderRef.current) {
      const scrollAmount = 400;
      const newScrollPosition =
        direction === "left"
          ? sliderRef.current.scrollLeft - scrollAmount
          : sliderRef.current.scrollLeft + scrollAmount;

      sliderRef.current.scrollTo({
        left: newScrollPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className={styles.sliderContainer}>
      <div className={styles.header}>
        <h2 className={styles.title}>{title}</h2>
        <div className={styles.controls}>
          <button
            className={styles.navButton}
            onClick={() => scroll("left")}
            aria-label="Previous"
          >
            ‹
          </button>
          <button
            className={styles.navButton}
            onClick={() => scroll("right")}
            aria-label="Next"
          >
            ›
          </button>
        </div>
      </div>

      <div className={styles.slider} ref={sliderRef}>
        {courses.map((course) => (
          <CourseSlideCard
            key={course.id}
            thumbnail={course.thumbnail}
            category={course.category}
            title={course.title}
            progress={course.progress}
            instructor={course.instructor}
          />
        ))}
      </div>
    </div>
  );
};

export default CourseSlider;
