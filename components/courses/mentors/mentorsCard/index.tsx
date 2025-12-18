"use client";
import React, { useState } from "react";
import styles from "./styles.module.css";
import { Mentor } from "../../../../types";

interface MentorCardProps {
  mentor: Mentor;
}

const MentorCard: React.FC<MentorCardProps> = ({ mentor }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`${styles.mentorCard} ${
        isHovered ? styles.mentorCardHover : ""
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={styles.mentorAvatar}
        style={{ backgroundColor: mentor.avatarBg }}
      >
        {mentor.avatar}
        <div className={styles.mentorStatus}>
          {mentor.status === "verified" ? "⭐" : "✓"}
        </div>
      </div>
      <div className={styles.mentorInfo}>
        <h4 className={styles.mentorName}>{mentor.name}</h4>
        <p className={styles.mentorRole}>{mentor.role}</p>
      </div>
      <div className={styles.mentorMenu}>⋮</div>
    </div>
  );
};

export default MentorCard;
