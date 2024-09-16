import { Header } from '@/components/layout/Header';
import { SearchForm } from '@/components/layout/SearchForm';
import { UserCard } from './components/layout/UserCard';

export default function Home() {
  return (
    <main className='m-auto max-w-3xl w-full'>
      <Header />
      <SearchForm />
      <UserCard />
    </main>
  );
}
