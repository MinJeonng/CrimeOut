'use client';
import Link from 'next/link';
import ArrowLeft from '../public/assets/ico-arr-left.svg';
import React from 'react';
import { Avatar } from '@nextui-org/react';

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

export const ChatBotContent = () => {
  return (
    <>
      <div className="bg-blue-100 text-base w-full h-full"></div>
    </>
  );
};

export const ChatBotFooter = () => {
  return (
    <>
      <div className="flex items-center w-full min-h-[60px] max-h-[100px] leading-[60px] border-t border-gray-300 px-5"></div>
    </>
  );
};
