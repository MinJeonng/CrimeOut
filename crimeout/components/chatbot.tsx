'use client';
import Link from 'next/link';
import ArrowLeft from '../public/assets/ico-arr-left.svg';
import React from 'react';
import { Avatar } from '@nextui-org/react';
import { Card, CardBody } from '@nextui-org/card';
import { ChatBotContentProps, ChatBotFooterProps } from '@/types/types';

export const ChatBotHeader = () => {
  return (
    <>
      <div className="fixed top-0 left-0 bg-white flex items-center justify-between w-full h-15 leading-15 border-b border-gray-300 px-5 pl-4 box-border z-900">
        <div className="flex items-center gap-2">
          <Link href="/" replace>
            <ArrowLeft className="stroke-current text-blue-600" />
          </Link>
          <Avatar
            isBordered
            color="primary"
            src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
            size="sm"
          />
          <div className="ml-1 text-black">크아</div>
        </div>
      </div>
    </>
  );
};

export const ChatBotContent = ({
  chatList,
  defaultMenu,
  menuFunc,
}: ChatBotContentProps) => {
  return (
    <div className="bg-blue-100 text-base w-full h-full pt-20 pl-4">
      <div className="flex gap-4">
        <Avatar
          isBordered
          color="primary"
          src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
          size="sm"
        />
        {chatList.map((message, index) => (
          <div key={index} className="custom-rounded">
            {message.text}
          </div>
        ))}
      </div>

      <div className="gap-2 pl-10 flex flex-col cursor-pointer">
        {defaultMenu.map((menu, index) => (
          <Card
            key={index}
            className="inline-block"
            onClick={() => menuFunc(menu)}
          >
            <CardBody>{menu}</CardBody>
          </Card>
        ))}
      </div>
    </div>
  );
};

export const ChatBotFooter = () => {
  return (
    <>
      <div className="fixed bottom-0 left-0 bg-white flex items-center w-full min-h-[60px] max-h-[100px] leading-[60px] border-t border-gray-300 px-5 box-border"></div>
    </>
  );
};
