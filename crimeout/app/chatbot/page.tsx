'use client';
import {
  ChatBotContent,
  ChatBotFooter,
  ChatBotHeader,
} from '@/components/chatbot';
import { Message } from '@/types/types';
import { useEffect, useState } from 'react';

export default function ChatBotPage() {
  const [chatList, setChatList] = useState<Message[]>([]);
  const [keyword, setKeyword] = useState('');
  const defaultMenu = [
    '피싱, 스미싱 문자 확인하기',
    '최근 피싱, 스미싱 사례 확인하기',
    '크아에게 질문하기(피싱, 스미싱 관련)',
  ];

  useEffect(() => {
    const initialMsg: Message = {
      type: 'bot',
      text: '안녕하세요! 크아입니다. 무엇을 도와드릴까요?',
    };
    setChatList([initialMsg]);
  }, []);

  const menuFunc = async (msg: string) => {
    let responseText = '';
    switch (msg) {
      case '피싱, 스미싱 문자 확인하기':
        responseText = '어떤 방식으로 확인하시겠습니까?';
        break;
      case '최근 피싱, 스미싱 사례 확인하기':
        // 함수가 바로 실행되게
        break;
      case '크아에게 질문하기(피싱, 스미싱 관련)':
        responseText =
          '피싱, 스미싱 관련 질문을 입력해주세요. 최대한 빠르게 답변드리겠습니다.';
        break;
      default:
        responseText = `선택하신 메뉴는 '${msg}' 입니다.`;
    }
    const newMessage: Message = {
      type: 'bot',
      text: responseText,
    };
    setChatList((prevChatList) => [...prevChatList, newMessage]);
  };

  return (
    <>
      <ChatBotHeader />
      <ChatBotContent
        chatList={chatList}
        defaultMenu={defaultMenu}
        menuFunc={menuFunc}
      />
      <ChatBotFooter />
    </>
  );
}
