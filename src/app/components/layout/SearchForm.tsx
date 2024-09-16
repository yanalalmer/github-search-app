'use client';
import React from 'react';
import Image from 'next/image';
import search from '@/assets/icons/search.svg';
import { searchValueState } from '@/state/recoilState';
import { useSetRecoilState } from 'recoil';
import { z } from 'zod';

const schema = z
  .string()
  .min(1, { message: 'Field is required' })
  .refine((value) => !/\s/.test(value), {
    message: 'Username cannot contain spaces',
  })
  .refine((value) => /^[a-zA-Z0-9]*$/.test(value), {
    message: 'Username cannot contain special characters',
  });

export const SearchForm = () => {
  const [inputValue, setInputValue] = React.useState('');
  const [error, setError] = React.useState('');
  const setSearchValue = useSetRecoilState(searchValueState);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    try {
      schema.parse(inputValue);
      setSearchValue(inputValue);
      setError('');
    } catch (err) {
      if (err instanceof z.ZodError) {
        setError(err.errors[0].message);
      }
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className='flex justify-center items-center bg-background-secondary rounded-[15px] p-2 w-full my-9 shadow-custom relative'
    >
      <Image src={search} alt='search' className='sm:mx-6 mx-2' />
      <input
        type='text'
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder='Search Github username...'
        className='py-2 mr-4 flex-1 bg-background-secondary outline-none border-none focus:outline-none '
      />
      <p className='text-red-500 font-bold mr-8 min-w-20 text-nowrap absolute -bottom-8 left-0 sm:relative sm:bottom-0'>
        {error}
      </p>
      <button>search</button>
    </form>
  );
};
