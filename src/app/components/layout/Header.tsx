import { SliderToggleBtn } from '@/components/global/Buttons';

export const Header = () => {
  return (
    <header className='flex justify-between items-center'>
      <h1 className='text-2xl font-bold text-text-primary'>GithubFinder</h1>
      <SliderToggleBtn />
    </header>
  );
};
