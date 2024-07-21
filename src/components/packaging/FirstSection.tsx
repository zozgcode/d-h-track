import Image from "next/image";
import Link from "next/link";

export default function FirstSection() {
  return (
    <div className="text-[#333333] flex gap-[30px] flex-col md:flex-row justify-between p-[50px] pb-[50px] border-b border-[#dfdfdf]">
      <div className="w-full text-center">
        <h2 className="text-[35px] font-light mb-[20px]">Discover</h2>
        <p className="text-lg">
          Find the perfect package <br /> for the job.
        </p>
        <div className="flex items-center justify-center mt-[20px] mb-[20px]">
          <Image src="https://i.imgur.com/BDvS399.png" width={500} height={500} alt="" />
        </div>
        <div className="mt-[20px] flex items-center justify-center">
          <Link
            href=""
            className="border-2 text-center text-[14px] max-w-[400px] border-[#007ab7] text-[#007ab7] uppercase font-bold rounded-full flex items-center justify-center  p-3 pl-6 pr-6"
          >
            STANDARD PACKAGING
          </Link>
        </div>
      </div>
      <div className="w-full text-center">
        <h2 className="text-[35px] font-light mb-[20px]">Order</h2>
        <p className="text-lg  text-center max-w-[350px] mx-auto">
          Choose from a range of FedEx supplies to fit your business needs.
        </p>
        <div className="flex items-center justify-center mt-[20px] mb-[20px]">
          <Image src="https://i.imgur.com/H0Tsy7B.png" width={500} height={500} alt="dfdf" />
        </div>
        <div className="mt-[20px] flex items-center justify-center">
          <Link
            href=""
            className="border-2 text-center text-[14px] max-w-[400px] border-[#007ab7] text-[#007ab7] uppercase font-bold rounded-full flex items-center justify-center  p-3 pl-6 pr-6"
          >
            ORDER SUPPLIES
          </Link>
        </div>
      </div>
    </div>
  );
}
