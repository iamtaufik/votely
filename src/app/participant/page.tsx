import MainPage from './main';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ikut Voting',
};

const Page = () => {
  return <MainPage />;
};

export default Page;
