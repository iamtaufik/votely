'use client';
import Restricted from '@/components/Restricted';
import axios from 'axios';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { FormEvent, useState } from 'react';
import { toast } from 'react-toastify';
import workTogether from '../../assets/work-together.svg';

const MainPage = () => {
  const [code, setCode] = useState<string>('');
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(false);
  const { data: session } = useSession();

  if (session === null) {
    return <Restricted />;
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      await axios.get(`${process.env.NODE_ENV !== 'development' ? 'https://lets-votely.com' : 'http://localhost:3000'}/api/votes/${code}`);

      router.push(`/participant/${code}`);
    } catch (error: any) {
      if (error.response?.status === 404) {
        toast.error('Hmm kode voting tidak ditemukan', {
          position: 'top-right',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'colored',
        });
      }
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center ">
      <Image src={workTogether} alt="Work Together" width={400} height={400} className="w-[300px] h-[300px] lg:w-[400px] lg:h-[400px]" />
      <div className="my-2 text-center text-[#3C3C3C]">
        <h1 className="text-3xl font-semibold ">Ikut Voting</h1>
        <p className="text-base">Kamu bisa melakukan voting jika mempunyai kode voting yang deberikan oleh penyelengara</p>
      </div>
      <form onSubmit={handleSubmit} className="flex flex-col items-center justify-center gap-4">
        <input type="text" name="code" id="code" placeholder="Kode Voting" onChange={(e) => setCode(e.target.value)} className="border-[#4A1B9D] border-2 py-2 px-2" />
        <button type="submit" className="w-1/2 bg-[#4A1B9D] text-white font-normal py-2">
          {loading ? 'Loading...' : 'Gabung'}
        </button>
      </form>
    </div>
  );
};

export default MainPage;
