import taufik from '@/assets/taufik.png';
import RapoL from '@/assets/RapoL.png';
import Alfa from '@/assets/Alfa.png';
import Irvan from '@/assets/Irvan.png';
import Naufal from '@/assets/Naufal.png';
import Aryawijaya from '@/assets/aryawijaya.png';
import Okta from '@/assets/okta.png';
import Image from 'next/image';

const AboutUs = () => {
  return (
    <div className="container my-10 ">
      <h1 className="text-[#4A1B9D] text-center text-3xl font-bold">Tentang Kami</h1>
      <p className="text-center text-[#3C3C3C] my-2">Ayo berkenalan dengan orang-orang keren dari pengembang aplikasi Votely</p>
      <div className="flex justify-center my-12">
        <div className="flex flex-wrap items-center justify-center gap-4 lg:w-4/5 lg:gap-12">
          <div className="group relative max-w-[150px] max-h-[150px] overflow-x-hidden overflow-y-hidden rounded-full ">
            <Image src={taufik} alt="Muhammad Taufik Hidayat" className="w-full h-full bg-[#4A1B9D] mx-auto transition duration-150 group-hover:opacity-60" />
            <div className="absolute bottom-0 text-white transition duration-150 ease-in scale-0 group-hover:scale-100 ">
              <div className="p-2 bg-[#3C3C3C] ">
                <h1 className="text-sm font-semibold text-center">Muhammad Taufik Hidayat</h1>
                <p className="text-sm text-center text-zinc-400">Fullstack</p>
              </div>
            </div>
          </div>
          <div className="group relative max-w-[150px] max-h-[150px] overflow-x-hidden overflow-y-hidden rounded-full ">
            <Image src={Irvan} alt="Muhammad Irvan Shandika" className="w-full h-full bg-[#4A1B9D] mx-auto transition duration-150 group-hover:opacity-60" />
            <div className="absolute bottom-0 w-full text-white transition duration-150 ease-in scale-0 group-hover:scale-100">
              <div className="p-2 bg-[#3C3C3C] ">
                <h1 className="text-sm font-semibold text-center">Muhammad Irvan Shandika</h1>
                <p className="text-sm text-center text-zinc-400">Frontend</p>
              </div>
            </div>
          </div>
          <div className="group relative max-w-[150px] max-h-[150px] overflow-x-hidden overflow-y-hidden rounded-full ">
            <Image src={Alfa} alt="Alfa Zidan Prasetyo" className="w-full h-full bg-[#4A1B9D] mx-auto transition duration-150 group-hover:opacity-60" />
            <div className="absolute bottom-0 w-full text-white transition duration-150 ease-in scale-0 group-hover:scale-100">
              <div className="p-2 bg-[#3C3C3C] ">
                <h1 className="text-sm font-semibold text-center">Alfa Zidan Prastyo</h1>
                <p className="pb-2 text-sm text-center text-zinc-400">UI/UX Designer</p>
              </div>
            </div>
          </div>

          <div className="group relative max-w-[150px] max-h-[150px] overflow-x-hidden overflow-y-hidden rounded-full ">
            <Image src={Naufal} alt="Naufal Richo Giffari Saputra" className="w-full h-full bg-[#4A1B9D] mx-auto transition duration-150 group-hover:opacity-60" />
            <div className="absolute bottom-0 w-full text-white transition duration-150 ease-in scale-0 group-hover:scale-100">
              <div className="p-2 bg-[#3C3C3C] ">
                <h1 className="text-sm font-semibold text-center">Naufal Richo Giffari Saputra</h1>
                <p className="pb-2 text-sm text-center text-zinc-400">UI/UX Designer</p>
              </div>
            </div>
          </div>
          <div className="group relative max-w-[150px] max-h-[150px] overflow-x-hidden overflow-y-hidden rounded-full ">
            <Image src={RapoL} alt="Raffa Nur Listiawan D E S" className="w-full h-full bg-[#4A1B9D] mx-auto transition duration-150 group-hover:opacity-60" />
            <div className="absolute bottom-0 text-white transition duration-150 ease-in scale-0 group-hover:scale-100 ">
              <div className="p-2 bg-[#3C3C3C] ">
                <h1 className="text-sm font-semibold text-center">Raffa Nur Listiawan D E S</h1>
                <p className="text-sm text-center text-zinc-400">QA Tester</p>
              </div>
            </div>
          </div>
          <div className="group relative max-w-[150px] max-h-[150px] overflow-x-hidden overflow-y-hidden rounded-full ">
            <Image src={Aryawijaya} alt="Aryawijaya" className="w-full h-full bg-[#4A1B9D] mx-auto transition duration-150 group-hover:opacity-60" />
            <div className="absolute bottom-0 w-full text-white transition duration-150 ease-in scale-0 group-hover:scale-100">
              <div className="p-2 bg-[#3C3C3C] ">
                <h1 className="text-sm font-semibold text-center">Aryawijaya</h1>
                <p className="text-sm text-center text-zinc-400">QA Tester</p>
              </div>
            </div>
          </div>
          <div className="group relative max-w-[150px] max-h-[150px] overflow-x-hidden overflow-y-hidden rounded-full ">
            <Image src={Okta} alt="Aryawijara" className="w-full h-full bg-[#4A1B9D] mx-auto transition duration-150 group-hover:opacity-60" />
            <div className="absolute bottom-0 w-full text-white transition duration-150 ease-in scale-0 group-hover:scale-100">
              <div className="p-2 bg-[#3C3C3C] ">
                <h1 className="text-sm font-semibold text-center">Fachrudin Okta Rahmawan</h1>
                <p className="text-sm text-center text-zinc-400">QA Tester</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
