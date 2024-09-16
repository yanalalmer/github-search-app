'use client';
import React from 'react';
import Image from 'next/image';
import locationIcon from '@/assets/icons/location.svg';
import linkIcon from '@/assets/icons/link.svg';
import twitterIcon from '@/assets/icons/twitter.svg';
import buildingIcon from '@/assets/icons/building.svg';
import { useRecoilValue } from 'recoil';
import { userState, loadingState, errorState } from '@/state/recoilState';
import { useGetUser } from '@/hooks/useGetUser';
import { Loading } from '@/components/global/Loading';

interface Menu {
  id: number;
  title: string;
  value: number;
}

interface SocialLink {
  id: number;
  title: string;
  icon: string;
}

const Container: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <section className='flex justify-center items-start md:flex-row flex-col bg-background-secondary rounded-[15px] sm:p-12 p-4 w-full shadow-box-shadow md:h-[450px]'>
      {children}
    </section>
  );
};

export const UserCard: React.FC = () => {
  useGetUser();
  const user = useRecoilValue(userState);
  const loading = useRecoilValue(loadingState);
  const error = useRecoilValue(errorState);

  if (loading)
    return (
      <Container>
        <Loading />
      </Container>
    );

  if (error) {
    return (
      <Container>
        <p className='text-text-secondary'>{error}</p>
      </Container>
    );
  }
  if (!user) {
    return (
      <Container>
        <p className='text-text-secondary'>
          No user data available, please try another user...
        </p>
      </Container>
    );
  }
  const NA = 'Not Available';

  const menus: Menu[] = [
    { id: 1, title: 'Repositories', value: user?.public_repos ?? NA },
    { id: 2, title: 'Followers', value: user?.followers ?? NA },
    { id: 3, title: 'Following', value: user?.following ?? NA },
  ];

  const socialLinks: SocialLink[] = [
    { id: 1, title: user?.location ?? NA, icon: locationIcon },
    { id: 2, title: user?.twitter_username ?? NA, icon: twitterIcon },
    { id: 3, title: user?.html_url ?? NA, icon: linkIcon },
    { id: 4, title: user?.company ?? NA, icon: buildingIcon },
  ];

  return (
    <Container>
      <Image
        src={user?.avatar_url}
        priority
        alt='profile'
        width={117}
        height={117}
        className='md:mr-16 mr-0 rounded-full md:mb-0 mb-4'
      />
      <div className='grow'>
        <div className='grid items-center justify-between sm:grid-cols-2 grid-cols-1 grid-rows-2 gap-2'>
          <h1 className='text-2xl font-bold text-text-primary truncate'>
            {user?.name ?? NA}
          </h1>
          <time
            dateTime={new Date(user?.created_at ?? NA).toISOString()}
            className='text-text-secondary'
          >
            Joined {new Date(user?.created_at ?? NA).toLocaleDateString()}
          </time>
          <h3 className='text-background-btn truncate'>@{user?.login ?? NA}</h3>
        </div>
        <p className='text-text-secondary my-8 overflow-hidden'>
          {user?.bio ?? NA}
        </p>
        <ul className='flex justify-between items-start bg-background sm:py-4 py-2 sm:px-6 px-2 rounded-[10px] mb-8'>
          {menus.map((menu) => (
            <li key={menu.id}>
              <h4 className='text-text-secondary'>{menu.title}</h4>
              <h2 className='text-text-primary font-bold'>{menu.value}</h2>
            </li>
          ))}
        </ul>
        <section className='grid justify-between items-start sm:grid-cols-2 grid-cols-1 gap-4'>
          {socialLinks.map((link) => (
            <div key={link.id} className='flex justify-start items-center'>
              <Image src={link.icon} alt={link.title} width={20} height={20} />
              <span className='text-text-secondary ml-4 truncate'>
                {link.title}
              </span>
            </div>
          ))}
        </section>
      </div>
    </Container>
  );
};
