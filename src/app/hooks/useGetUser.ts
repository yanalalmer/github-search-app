import React from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { getUserData } from '@/api/getUser';
import {
  searchValueState,
  userState,
  loadingState,
  errorState,
} from '@/state/recoilState';

export const useGetUser = () => {
  const username = useRecoilValue(searchValueState);
  const setUser = useSetRecoilState(userState);
  const setLoading = useSetRecoilState(loadingState);
  const setError = useSetRecoilState(errorState);

  React.useEffect(() => {
    const fetchUser = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await getUserData(username);
        setUser(response);
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    };

    if (username) {
      fetchUser();
    }
  }, [username, setUser, setLoading, setError]);

  return { error: useRecoilValue(errorState) };
};
