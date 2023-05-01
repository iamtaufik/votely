import React from 'react';
import MainPage from './main';
import { Metadata } from 'next';

export function generateMetadata({ params }: { params: { code: string } }): Metadata {
  return {
    title: `${params.code} | Votely`,
  };
}

const Page = ({ params }: { params: { code: string } }) => {
  return <MainPage params={params} />;
};

export default Page;
