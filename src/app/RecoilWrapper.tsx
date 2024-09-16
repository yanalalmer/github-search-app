'use client';
import { RecoilRoot } from 'recoil';
import React from 'react';

export const RecoilWrapper = ({ children }: { children: React.ReactNode }) => {
  return <RecoilRoot>{children}</RecoilRoot>;
};
