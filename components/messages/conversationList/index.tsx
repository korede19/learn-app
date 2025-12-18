"use client";
import React, { useState } from "react";
import styles from "./styles.module.css";
import { Conversation } from "../../../types/message";
import { ConversationItem } from "../conversationItem";
import Plus from "@/svgs/plus";

interface ConversationListProps {
  conversations: Conversation[];
  currentUserId: number;
  activeConversationId: number | null;
  onSelectConversation: (conversationId: number) => void;
}

const ConversationList: React.FC<ConversationListProps> = ({
  conversations,
  currentUserId,
  activeConversationId,
  onSelectConversation,
}) => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredConversations = conversations.filter((conv) => {
    const participant = conv.participants[0];
    const name = conv.isGroup ? conv.groupName : participant.name;
    return name?.toLowerCase().includes(searchQuery.toLowerCase());
  });

  return (
    <div className={styles.conversationList}>
      <div className={styles.header}>
        <h2 className={styles.title}>Messages</h2>
        <button className={styles.newMessageBtn}>
          <Plus />
        </button>
      </div>

      <div className={styles.searchContainer}>
        <input
          type="text"
          placeholder="Search messages..."
          className={styles.searchInput}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <div className={styles.conversations}>
        {filteredConversations.map((conversation) => (
          <ConversationItem
            key={conversation.id}
            conversation={conversation}
            currentUserId={currentUserId}
            isActive={activeConversationId === conversation.id}
            onClick={() => onSelectConversation(conversation.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default ConversationList;
