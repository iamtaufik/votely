import taufik from "@/assets/taufik.png";
import RapoL from "@/assets/RapoL.png";
import Alfa from "@/assets/Alfa.png";
import Irvan from "@/assets/Irvan.png";
import Naufal from "@/assets/Naufal.png";
import Aryawijaya from "@/assets/aryawijaya.png";
import Okta from "@/assets/okta1.png";
import Image from "next/image";

const AboutUs = () => {
  return (
    <div className="my-10">
      <h1 className="text-[#4A1B9D] text-center text-3xl font-bold">Tentang Kami</h1>
      <p className="text-center text-[#3C3C3C] my-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia corporis iure aut perspiciatis quod unde nesciunt voluptatibus non iste adipisci.</p>
      <div>
        <div className="flex flex-wrap relative">
          <Image src={taufik} alt="Muhammad Taufik Hidayat" className="w-[150px] h-[150px] sm:mt-16 rounded-full bg-[#4A1B9D] mx-auto " />
          <Image src={RapoL} alt="Raffa Nur Listiawan D E S" className="w-[150px] h-[150px] sm:mt-16 rounded-full bg-[#4A1B9D] mx-auto " />
          <Image src={Alfa} alt="Alfa Zidan Prasetyo" className="w-[150px] h-[150px] sm:mt-16 rounded-full bg-[#4A1B9D] mx-auto " />
          <Image src={Irvan} alt="Muhammadiyah Irvan Shandika" className="w-[150px] h-[150px] sm:mt-16 rounded-full bg-[#4A1B9D] mx-auto " />
          <Image src={Naufal} alt="Naufal Richo Giffari Saputra" className="w-[150px] h-[150px] sm:mt-16 rounded-full bg-[#4A1B9D] mx-auto " />
          <Image src={Aryawijaya} alt="Aryawijara" className="w-[150px] h-[150px] sm:mt-16 rounded-full bg-[#4A1B9D] mx-auto " />
          <Image src={Okta} alt="Aryawijara" className="w-[150px] h-[150px] sm:mt-16 rounded-full bg-[#4A1B9D] mx-auto " />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
