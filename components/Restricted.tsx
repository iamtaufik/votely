'use client';
import Image from 'next/image';
import Button from './Button';
import restricted from '../src/assets/restricted.svg';
import { useRouter } from 'next/navigation';

const Restricted = () => {
  const router = useRouter();
  return (
    <div className="flex flex-col items-center gap-4">
      <Image src={restricted} alt="Restricted" className="w-[350px] h-[350px] lg:w-[500px] lg:h-[500px]" width={350} height={350} />
      <h3 className="text-2xl font-semibold text-[#4A1B9D] lg:text-4xl">Yuk Login Dulu...</h3>
      <p>Untuk mengakses fitur ini silahkan untuk login terlebih dahulu.</p>
      <Button type="button" className="bg-[#4A1B9D] text-white w-1/3 lg:w-1/12" text="Login" onClick={() => router.push('/login')} />
    </div>
  );
};

export default Restricted;
