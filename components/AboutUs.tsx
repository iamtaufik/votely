import taufik from '@/assets/taufik.png';
import RapoL from '@/assets/RapoL.png';
import Alfa from '@/assets/Alfa.png';
import Irvan from '@/assets/Irvan.png';
import Naufal from '@/assets/Naufal.png';
import Image from 'next/image';

const AboutUs = () => {
  return (
    <div className="my-10">
      <h1 className="text-[#4A1B9D] text-center text-3xl font-bold">Tentang Kami</h1>
      <p className="text-center text-[#3C3C3C] my-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia corporis iure aut perspiciatis quod unde nesciunt voluptatibus non iste adipisci.</p>
      <div>
        <div className="flex flex-wrap relative">
          <Image src={taufik} alt="Muhammad Taufik Hidayat" className="max-w-2xl mx-auto " />
          {/* gambar 500x500 */}
          <Image src={RapoL} alt="Raffa Nur Listiawan D E S" className="max-w-2xl mx-auto " />
          <Image src={Alfa} alt="Alfa Zidan Prasetyo" className="max-w-2xl mx-auto " />
          <Image src={Irvan} alt="Muhammadiyah Irvan Shandika" className="max-w-2xl mx-auto " />
          <Image src={Naufal} alt="Naufal Richo Giffari Saputra" className="max-w-2xl mx-auto " />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
