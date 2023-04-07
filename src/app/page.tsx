import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Table from '@/components/Table';
import votingBg from '@/assets/voting-bg.svg';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col items-center gap-12 mt-10 lg:justify-between lg:flex-row">
        <div className="flex justify-center lg:order-2">
          <Image src={votingBg} alt="Voting" className="w-[350px] h-[350px] lg:w-[500px] lg:h-[500px]" width={350} height={350} />
        </div>
        <div className="lg:order-1 text-[#3C3C3C] lg:w-6/12">
          <h1 className="text-3xl font-semibold lg:text-5xl">
            Ayo Bebaskan Suaramu <br /> Untuk <span className="border-b-2 border-[#4A1B9D]">Memilih!</span>
          </h1>
          <p className="py-4 text-base">Votely dapat menghemat waktu dan tenaga dalam proses pemilihan, karena proses pengumpulan suara dan penghitungan hasil dilakukan secara otomatis.</p>
        </div>
      </main>
      <div className="flex items-center justify-center gap-4 lg:gap-8">
        <Link href="/votes/create" className="bg-[#4A1B9D] py-2 px-6 text-white rounded-sm border-[#4A1B9D] border-2">
          Buat Voting
        </Link>
        <p>atau</p>
        <Link href="/participant" className="bg-white py-2 px-6 border-[#4A1B9D] border-2 rounded-sm">
          Ikut Voting
        </Link>
      </div>
      <Table />
    </>
  );
}
