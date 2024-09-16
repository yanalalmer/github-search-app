import { Header } from '@/components/layout/Header';
import { SearchForm } from '@/components/layout/SearchForm';

export default function Home() {
  return (
    <main className='m-auto max-w-3xl w-full'>
      <Header />
      <SearchForm />
    </main>
  );
}
