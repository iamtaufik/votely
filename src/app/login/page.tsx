import MainPage from './main';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Login',
};

const Page = () => {
  return <MainPage title="Continue with Google" />;
};

export default Page;
