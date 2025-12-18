export interface User {
  id: number;
  name: string;
  avatar: string;
  avatarBg?: string;
  status: "Online" | "Offline" | "Away";
}

export interface Message {
  id: number;
  conversationId: number;
  senderId: number;
  content: string;
  timestamp: string;
  read: boolean;
  type: "text" | "image" | "file";
  fileUrl?: string;
  fileName?: string;
}

export interface Conversation {
  id: number;
  participants: User[];
  lastMessage: Message;
  unreadCount: number;
  isPinned: boolean;
  isMuted: boolean;
  isGroup: boolean;
  groupName?: string;
}

export interface MessagesData {
  conversations: Conversation[];
  messages: Message[];
  currentUser: User;
}
