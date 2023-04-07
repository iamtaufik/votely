'use client';
import React from 'react';
import Button from '@/components/Button';
import { useSession, signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';

const Page = () => {
  const router = useRouter();
  const { data: session } = useSession();

  if (session) {
    router.push('/');
  }

  return (
    <div className="flex items-center justify-center h-screen">
      <Button type="button" text="Login menggunakan Google" onClick={() => signIn('google')} />
    </div>
  );
};

export default Page;
