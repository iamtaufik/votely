'use client';
import axios from 'axios';
import { Vote } from '@/types/vote';
import { useEffect, useState } from 'react';
import moment from 'moment';
import 'moment/locale/id';
import { toast } from 'react-toastify';
import { ShowModal } from './Modal';
import SkeletonTable from './SkeletonTable';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import Tooltip from './Tooltip';

const Table = () => {
  moment.locale('id');
  const [votes, setVotes] = useState<Vote[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();
  const { data: session } = useSession();

  const handleDelete = (id: string) => {
    ShowModal({
      title: 'Yakin akan menghapus?',
      positiveText: 'Ya',
      negativeText: 'Tidak',
      async onPositiveClick() {
        try {
          await axios.delete(`${process.env.NODE_ENV !== 'development' ? 'https://lets-votely.com' : 'http://localhost:3000'}/api/votes/${id}`);
          toast.success('Voting berhasil dihapus!', {
            position: 'top-right',
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'colored',
          });
          getVotes();
        } catch (error: any) {
          toast.error('Hmm ada yang salah dari server', {
            position: 'top-right',
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'colored',
          });
          console.log(error.message);
        }
      },
    });
  };

  const getVotes = async () => {
    setLoading(true);
    try {
      const result = await axios.get(`${process.env.NODE_ENV !== 'development' ? 'https://lets-votely.com' : 'http://localhost:3000'}/api/votes`);
      setVotes(result.data.result);
      console.log(result.data.result);
    } catch (error: any) {
      console.log(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (session !== null) {
      getVotes();
    }
  }, []);
  return (
    <>
      {session?.user && !loading ? (
        <div className="container relative my-4 overflow-x-auto">
          <table className="w-full text-sm text-left text-[#3C3C3C]  shadow-md sm:rounded-lg">
            <thead className="text-xs uppercase bg-[#4A1B9D]  text-white">
              <tr>
                <th scope="col" className="px-6 py-3">
                  No
                </th>
                <th scope="col" className="px-6 py-3 text-center">
                  Judul
                </th>
                <th scope="col" className="px-6 py-3 text-center">
                  Kode
                </th>
                <th scope="col" className="px-6 py-3 text-center">
                  Mulai
                </th>
                <th scope="col" className="px-6 py-3 text-center">
                  Berakhir
                </th>
                <th scope="col" className="px-6 py-3 text-center">
                  Aksi
                </th>
              </tr>
            </thead>
            <tbody>
              {votes.length === 0 && <tr>belum ada data</tr>}
              {votes.map((vote, index) => (
                <tr className="bg-white border-b hover:bg-gray-50 " key={index}>
                  <td className="w-4 p-4 text-center">{index + 1}</td>
                  <td className="px-6 py-4 text-center">{vote.title}</td>
                  <th scope="row" className="px-6 py-4 font-medium text-center text-gray-900 whitespace-nowrap dark:text-white">
                    {vote.code}
                  </th>
                  <td className="px-6 py-4 text-center">{moment(vote.startDateTime).format('DD MMM YYYY hh:mm a')}</td>
                  <td className="px-6 py-4 text-center">{moment(vote.endDateTime).format('DD MMM YYYY hh:mm a')}</td>
                  <td className="flex items-center justify-center px-6 py-4 space-x-3">
                    <Tooltip message="Salin">
                      <div className="hover:cursor-pointer" onClick={() => navigator.clipboard.writeText(`${vote.code}`)}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-[#4A1B9D]">
                          <path
                            fillRule="evenodd"
                            d="M18.97 3.659a2.25 2.25 0 00-3.182 0l-10.94 10.94a3.75 3.75 0 105.304 5.303l7.693-7.693a.75.75 0 011.06 1.06l-7.693 7.693a5.25 5.25 0 11-7.424-7.424l10.939-10.94a3.75 3.75 0 115.303 5.304L9.097 18.835l-.008.008-.007.007-.002.002-.003.002A2.25 2.25 0 015.91 15.66l7.81-7.81a.75.75 0 011.061 1.06l-7.81 7.81a.75.75 0 001.054 1.068L18.97 6.84a2.25 2.25 0 000-3.182z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                    </Tooltip>
                    <Tooltip message="Hapus">
                      <div onClick={() => handleDelete(vote.code)} className="hover:cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-red-300">
                          <path
                            fillRule="evenodd"
                            d="M16.5 4.478v.227a48.816 48.816 0 013.878.512.75.75 0 11-.256 1.478l-.209-.035-1.005 13.07a3 3 0 01-2.991 2.77H8.084a3 3 0 01-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 01-.256-1.478A48.567 48.567 0 017.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 013.369 0c1.603.051 2.815 1.387 2.815 2.951zm-6.136-1.452a51.196 51.196 0 013.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 00-6 0v-.113c0-.794.609-1.428 1.364-1.452zm-.355 5.945a.75.75 0 10-1.5.058l.347 9a.75.75 0 101.499-.058l-.346-9zm5.48.058a.75.75 0 10-1.498-.058l-.347 9a.75.75 0 001.5.058l.345-9z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                    </Tooltip>
                    <Tooltip message="Detail">
                      <div onClick={() => router.push(`/participant/${vote.code}`)} className="hover:cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-[#4A1B9D]">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
                        </svg>
                      </div>
                    </Tooltip>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        session?.user && <SkeletonTable />
      )}
    </>
  );
};

export default Table;
