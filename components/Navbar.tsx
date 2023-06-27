'use client';
import Link from 'next/link';
import Button from './Button';
import { useRouter } from 'next/navigation';
import { useSession, signOut } from 'next-auth/react';

const Navbar = () => {
  const router = useRouter();
  const { data: session } = useSession();

  return (
    <nav className="container flex items-center justify-between py-4 ">
      <Link href="/" className="text-[#4A1B9D] font-bold text-xl">
        Votely
      </Link>
      <div className="flex items-center lg:gap-4">
        {session?.user && <p className=" text-[#3C3C3C] text-sm  lg:text-base ml-10">Welcome, {session?.user.name}</p>}
        {session === null ? (
          <Button type="button" className="bg-[#4A1B9D] text-white" text="Login" onClick={() => router.push('/login')} />
        ) : (
          <>
            <div className="px-4 py-2 text-base font-semibold text-white rounded-sm">
              <img src={`${session?.user?.image}`} className="hidden w-10 rounded-full lg:flex" />
            </div>
            <button className="bg-[#4A1B9D] px-4 py-2 rounded-sm text-white text-base font-semibold" onClick={() => signOut()}>
              Logout
            </button>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
