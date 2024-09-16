'use client';
export const Loading = () => {
  return (
    <div
      data-testid='loading'
      className='
      w-[200px]
        h-[200px]
        relative 
        rounded-full 
        border-t-[10px]
        border-t-red-500
        animate-clockwise
        before:content-[""]
        before:absolute
        before:top-[-10px]
        before:left-0
        before:w-[200px]
        before:h-[200px]
        before:rounded-full
        before:border-t-[10px]
        before:border-t-blue-500
        before:rotate-[120deg]
        after:content-[""]
        after:absolute
        after:top-[-10px]
        after:left-0
        after:w-[200px]
        after:h-[200px]
        after:rounded-full
        after:border-t-[10px]
        after:border-t-purple-500
        after:rotate-[240deg]
    '
    >
      <span className='absolute w-[200px] h-[200px] text-primary text-center flex justify-center items-center animate-counterclockwise font-bold'>
        Loading...
      </span>
    </div>
  );
};
