import Image from "next/image";
import Link from "next/link";

export default function PackGeneral() {
  return (
    <div className="mt-[50px]">
      <div className="mb-[30px]">
        <h1 className="text-[45px] font-lighter text-[#333333] text-center">
          Pack Like a Pro
        </h1>
      </div>
      <div className="bg-[#FAFAFA] flex flex-col md:flex-row justify-between items-center">
        <div className="w-full md:w-[56%] pt-[35px] pb-[35px] pl-[20px] md:pl-[60px] pr-[20px] md:pr-[60px]">
          <div className="">
            <h2 className="text-[25px] leading-snug mb-5">
              Pack General Products Like a Pro
            </h2>
            <p className="text-lg leading-snug">
              Proper packing ensures that your shipments can arrive safely in
              the condition it was sent. We share with you some packing tips so
              you too can pack like a pro.
            </p>
          </div>
          <div className="mt-[20px]">
            <Link
              href=""
              className="border-2 text-center text-[14px] max-w-[300px] border-[#007ab7] text-[#007ab7] uppercase font-bold rounded-full flex items-center justify-center  p-3 pl-6 pr-6"
            >
              DOWNLOAD PACKING GUIDE
            </Link>
          </div>
        </div>
        <div className="w-full md:w-[44%]">
          <Image src="https://i.imgur.com/e6lkXU1.png" width={5000} height={5000} className="w-full h-[300px]" alt="fdfdf" />
        </div>
      </div>
    </div>
  );
}
