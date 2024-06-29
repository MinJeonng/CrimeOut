export interface Message {
  type: 'bot' | 'user';
  text: string;
}
export interface ChatBotContentProps {
  chatList: Message[];
  defaultMenu: string[];
  menuFunc: (msg: string) => void;
}
export interface ChatBotFooterProps {
  defaultMenu: string[];
}
