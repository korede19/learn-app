"use client";
import React, { useState, useRef, useEffect } from "react";
import styles from "./styles.module.css";
import { Message, Conversation, User } from "../../../types/message";
import MessageBubble from "../messageBubble";
import Phone from "@/svgs/phone";
import Video from "@/svgs/video";
import Info from "@/svgs/info";
import Attach from "@/svgs/attach";
import Emoji from "@/svgs/emoji";
import Send from "@/svgs/send";

interface ChatWindowProps {
  conversation: Conversation | null;
  messages: Message[];
  currentUser: User;
  onSendMessage: (content: string) => void;
}

const ChatWindow: React.FC<ChatWindowProps> = ({
  conversation,
  messages,
  currentUser,
  onSendMessage,
}) => {
  const [newMessage, setNewMessage] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = () => {
    if (newMessage.trim()) {
      onSendMessage(newMessage);
      setNewMessage("");
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  if (!conversation) {
    return (
      <div className={styles.emptyState}>
        <div className={styles.emptyStateContent}>
          <span className={styles.emptyStateIcon}>💬</span>
          <h3>Select a conversation</h3>
          <p>Choose a conversation from the list to start messaging</p>
        </div>
      </div>
    );
  }

  const otherParticipant = conversation.participants[0];

  return (
    <div className={styles.chatWindow}>
      <div className={styles.chatHeader}>
        <div className={styles.participantInfo}>
          <div
            className={styles.avatar}
            style={{ backgroundColor: otherParticipant.avatarBg }}
          >
            {otherParticipant.avatar}
          </div>
          <div className={styles.participantDetails}>
            <h3 className={styles.participantName}>
              {conversation.isGroup
                ? conversation.groupName
                : otherParticipant.name}
            </h3>
            <span
              className={`${styles.status} ${styles[otherParticipant.status]}`}
            >
              {otherParticipant.status}
            </span>
          </div>
        </div>
        <div className={styles.chatActions}>
          <button className={styles.actionBtn}>
            <Phone />
          </button>
          <button className={styles.actionBtn}>
            <Video />
          </button>
          <button className={styles.actionBtn}>
            <Info />
          </button>
        </div>
      </div>

      <div className={styles.messagesContainer}>
        {messages.map((message) => (
          <MessageBubble
            key={message.id}
            message={message}
            isOwn={message.senderId === currentUser.id}
          />
        ))}
        <div ref={messagesEndRef} />
      </div>

      <div className={styles.messageInput}>
        <button className={styles.attachBtn}>
          <Attach />
        </button>
        <input
          type="text"
          placeholder="Type a message..."
          className={styles.input}
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          onKeyPress={handleKeyPress}
        />
        <button className={styles.emojiBtn}>
          <Emoji />
        </button>
        <button
          className={styles.sendBtn}
          onClick={handleSend}
          disabled={!newMessage.trim()}
        >
          <Send />
        </button>
      </div>
    </div>
  );
};

export default ChatWindow;
