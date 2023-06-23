import taufik from '@/assets/taufik.png';
import RapoL from '@/assets/RapoL.png';
import Image from 'next/image';

const AboutUs = () => {
  return (
    <div className="my-10">
      <h1 className="text-[#4A1B9D] text-center text-3xl font-bold">Tentang Kami</h1>
      <p className="text-center text-[#3C3C3C] my-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia corporis iure aut perspiciatis quod unde nesciunt voluptatibus non iste adipisci.</p>
      <div>
        <div className="flex relative">
          <Image src={taufik} alt="Muhammad Taufik Hidayat" className="max-w-2xl mx-auto " />
          {/* gambar 500x500 */}
          <Image src={RapoL} alt="Raffa Nur Listiawan D E S" className="max-w-2xl mx-auto " />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
