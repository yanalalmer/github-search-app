'use client';
import React from 'react';

type BtnProps = {
  text: string;
};

export const SliderToggleBtn: React.FC = () => {
  return (
    <input
      type='checkbox'
      onClick={() => {
        document.body.classList.toggle('dark-theme');
      }}
      className='
        appearance-none
        relative 
        w-16 
        h-8 
        cursor-pointer 
        bg-cover 
        rounded-[50px] 
        outline-none 
        transition-all 
        duration-500 
        ease-in-out 
        bg-day
        before:absolute
        before:content-[""]
        before:w-8
        before:h-8
        before:bg-[#f7c933]
        before:rounded-[50px]
        before:top-0
        before:left-0
      before:transition-all
        before:duration-500
        before:ease-in-out
        checked:bg-night
        checked:transition-all
        checked:duration-500
        checked:ease-in-out
        checked:before:translate-x-full
        checked:before:bg-text-primary
        checked:before:transition-all
        checked:before:duration-500
        checked:before:ease-in-out
        '
    />
  );
};

export const PrimaryBtn: React.FC<BtnProps> = ({ text }) => {
  return (
    <button className='bg-background-btn text-white rounded-[10px] sm:px-6 px-4 sm:py-4 py-2 font-medium outline-none border-none cursor-pointer hover:bg-text-secondary'>
      {text}
    </button>
  );
};
