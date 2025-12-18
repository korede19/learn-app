import React from "react";
import styles from "./styles.module.css";
import { Conversation } from "../../../types/message";

interface ConversationItemProps {
  conversation: Conversation;
  currentUserId: number;
  isActive: boolean;
  onClick: () => void;
}

export const ConversationItem: React.FC<ConversationItemProps> = ({
  conversation,
  currentUserId,
  isActive,
  onClick,
}) => {
  const otherParticipant = conversation.participants[0];
  const isUnread = conversation.unreadCount > 0;

  const formatTime = (timestamp: string) => {
    const date = new Date(timestamp);
    const now = new Date();
    const diffInHours = (now.getTime() - date.getTime()) / (1000 * 60 * 60);

    if (diffInHours < 24) {
      return date.toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "2-digit",
      });
    } else if (diffInHours < 48) {
      return "Yesterday";
    } else {
      return date.toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
      });
    }
  };

  return (
    <div
      className={`${styles.conversationItem} ${isActive ? styles.active : ""}`}
      onClick={onClick}
    >
      <div className={styles.avatarContainer}>
        <div
          className={styles.avatar}
          style={{ backgroundColor: otherParticipant.avatarBg }}
        >
          {otherParticipant.avatar}
        </div>
        <span
          className={`${styles.statusDot} ${styles[otherParticipant.status]}`}
        />
      </div>

      <div className={styles.conversationInfo}>
        <div className={styles.topRow}>
          <h4 className={styles.name}>
            {conversation.isGroup
              ? conversation.groupName
              : otherParticipant.name}
            {conversation.isPinned && (
              <span className={styles.pinIcon}>📌</span>
            )}
          </h4>
          <span className={styles.time}>
            {formatTime(conversation.lastMessage.timestamp)}
          </span>
        </div>

        <div className={styles.bottomRow}>
          <p
            className={`${styles.lastMessage} ${isUnread ? styles.unread : ""}`}
          >
            {conversation.lastMessage.senderId === currentUserId && "You: "}
            {conversation.lastMessage.content}
          </p>
          {isUnread && (
            <span className={styles.unreadBadge}>
              {conversation.unreadCount}
            </span>
          )}
          {conversation.isMuted && <span className={styles.mutedIcon}>🔇</span>}
        </div>
      </div>
    </div>
  );
};
