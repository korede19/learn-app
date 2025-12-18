"use client";
import React, { useState } from "react";
import styles from "./styles.module.css";
import messagesData from "../../../mocks/messages.json";
import { MessagesData } from "../../../types/message";
import ConversationList from "../conversationList";
import ChatWindow from "../chatWindow";

const data: MessagesData = messagesData;

export const MessagesApp: React.FC = () => {
  const [activeConversationId, setActiveConversationId] = useState<
    number | null
  >(1);
  const [messages, setMessages] = useState(data.messages);

  const activeConversation =
    data.conversations.find((conv) => conv.id === activeConversationId) || null;

  const conversationMessages = messages.filter(
    (msg) => msg.conversationId === activeConversationId
  );

  const handleSendMessage = (content: string) => {
    if (!activeConversationId) return;

    const newMessage = {
      id: messages.length + 1,
      conversationId: activeConversationId,
      senderId: data.currentUser.id,
      content,
      timestamp: new Date().toISOString(),
      read: true,
      type: "text" as const,
    };

    setMessages([...messages, newMessage]);
  };

  return (
    <div className={styles.messagesApp}>
      <ConversationList
        conversations={data.conversations}
        currentUserId={data.currentUser.id}
        activeConversationId={activeConversationId}
        onSelectConversation={setActiveConversationId}
      />
      <ChatWindow
        conversation={activeConversation}
        messages={conversationMessages}
        currentUser={data.currentUser}
        onSendMessage={handleSendMessage}
      />
    </div>
  );
};

export default MessagesApp;
