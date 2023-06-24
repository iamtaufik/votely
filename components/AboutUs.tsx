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
      <div className="flex justify-center w-full">
        <div className="flex items-center flex-wrap gap-8 justify-center relative w-2/3">
          <Image src={taufik} alt="Muhammad Taufik Hidayat" className="lg:w-[150px] lg:h-[150px] sm:mt-16 w-[80px] h-[80px] rounded-full bg-[#4A1B9D] mx-auto " />
          <Image src={RapoL} alt="Raffa Nur Listiawan D E S" className="lg:w-[150px] lg:h-[150px] sm:mt-16 w-[80px] h-[80px] rounded-full bg-[#4A1B9D] mx-auto " />
          <Image src={Alfa} alt="Alfa Zidan Prasetyo" className="lg:w-[150px] lg:h-[150px] sm:mt-16 w-[80px] h-[80px] rounded-full bg-[#4A1B9D] mx-auto " />
          <Image src={Irvan} alt="Muhammad Irvan Shandika" className="lg:w-[150px] lg:h-[150px] sm:mt-16 w-[80px] h-[80px] rounded-full bg-[#4A1B9D] mx-auto " />
          <Image src={Naufal} alt="Naufal Richo Giffari Saputra" className="lg:w-[150px] lg:h-[150px] sm:mt-16 w-[80px] h-[80px] rounded-full bg-[#4A1B9D] mx-auto " />
          <Image src={Aryawijaya} alt="Aryawijaya" className="lg:w-[150px] lg:h-[150px] sm:mt-16 w-[80px] h-[80px] rounded-full bg-[#4A1B9D] mx-auto " />
          <Image src={Okta} alt="Fachrudin Okta Rahmawan" className="lg:w-[150px] lg:h-[150px] sm:mt-16 w-[80px] h-[80px] rounded-full bg-[#4A1B9D] mx-auto " />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
