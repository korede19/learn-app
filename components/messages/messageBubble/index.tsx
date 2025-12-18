import React from "react";
import styles from "./styles.module.css";
import { Message } from "../../../types/message";

interface MessageBubbleProps {
  message: Message;
  isOwn: boolean;
}

const MessageBubble: React.FC<MessageBubbleProps> = ({ message, isOwn }) => {
  const formatTime = (timestamp: string) => {
    const date = new Date(timestamp);
    return date.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
    });
  };

  return (
    <div className={`${styles.messageWrapper} ${isOwn ? styles.own : ""}`}>
      <div
        className={`${styles.messageBubble} ${isOwn ? styles.ownBubble : ""}`}
      >
        <p className={styles.messageContent}>{message.content}</p>
        <span className={styles.messageTime}>
          {formatTime(message.timestamp)}
        </span>
      </div>
    </div>
  );
};

export default MessageBubble;
