import React from 'react';
import MainPage from './main';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Buat Voting Baru',
};

const Page = () => {
  return <MainPage />;
};

export default Page;
