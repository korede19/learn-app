import React from "react";
import styles from "./styles.module.css";
import { Mentor } from "../../../../types";
import MentorCard from "../mentorsCard";

interface TopMentorsProps {
  mentors: Mentor[];
}

export const TopMentors: React.FC<TopMentorsProps> = ({ mentors }) => {
  return (
    <div className={styles.card}>
      <div className={styles.sectionHeader}>
        <h2 className={styles.sectionTitle}>Top Mentors</h2>
        <a href="#" className={styles.seeAllLink}>
          see all
        </a>
      </div>
      {mentors.map((mentor) => (
        <MentorCard key={mentor.id} mentor={mentor} />
      ))}
    </div>
  );
};
