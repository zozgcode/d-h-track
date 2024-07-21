import Image from "next/image";
import Link from "next/link";

export default function FedExOffers() {
  return (
    <div className="custom_container">
      <div className="bg-[#FAFAFA] text-[#333333] gap-[20px] md:gap-[60px] flex flex-col md:flex-row justify-between items-center mt-[50px]">
        <div className="w-full md:w-[44%]">
          <Image src="https://i.imgur.com/JyLnPNc.png" width={500} height={500} alt="dg98uj" />
        </div>
        <div className="w-full md:w-[56%] pt-[35px] pb-[35px]">
          <div className="">
            <h2 className="text-[25px] leading-snug mb-5">
            FedEx offers direct service in Nigeria from December 1, 2022 
            </h2>
            <p className="text-lg leading-snug">
            Take your business to the next level with our expertise. With direct access to our global network and wide portfolio of shipping services, connect with people and businesses around the world.
            </p>
          </div>
          <div className="mt-[20px]">
          <Link
            href=""
            className="border-2 text-center text-[14px] max-w-[200px] border-[#007ab7] text-[#007ab7] uppercase font-bold rounded-full flex items-center justify-center  p-3 pl-6 pr-6"
          >
            explore now
          </Link> 
          </div>
          
        </div>
      </div>
    </div>
  );
}
