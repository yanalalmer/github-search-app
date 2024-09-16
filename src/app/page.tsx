'use client';
import { Header } from '@/components/layout/Header';
import { SearchForm } from '@/components/layout/SearchForm';
import { userState, loadingState, errorState } from '@/state/recoilState';
import { useGetUser } from '@/hooks/useGetUser';
import { useRecoilValue } from 'recoil';

export default function Home() {
  useGetUser();
  const user = useRecoilValue(userState);
  const loading = useRecoilValue(loadingState);
  const error = useRecoilValue(errorState);
  console.log(user);

  return (
    <main className='m-auto max-w-3xl w-full'>
      <Header />
      <SearchForm />
    </main>
  );
}
