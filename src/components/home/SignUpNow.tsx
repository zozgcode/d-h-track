import Image from "next/image";
import Link from "next/link";

export default function SignUpNow() {
  return (
    <div className="custom_container">
      <div className="bg-[#4D148C] flex-col md:flex-row p-10 flex justify-between items-center mt-[50px]">
        <div className="flex flex-col items-center md:items-start md:flex-row gap-10">
          <div>
            <Image src="https://i.imgur.com/z6pm1gp.png" width={500} height={500} className="w-32" alt="dsd" />
          </div>
          <div className="w-full text-center md:text-left md:max-w-[400px]">
            <h2 className="text-[25px] text-white leading-snug mb-5">Sign up now to enjoy personalized shipping rates! </h2>
            <p className="text-lg text-white leading-snug">Benefit from our services and solutions designed to meet all of your shipping needs</p>
          </div>
        </div>
        <div className="mt-10 md:mt-0">
          {/* <Link href="" className="bg-[#ff6200] block text-center text-[14px] p-4 pl-6 pr-6 uppercase text-white font-semibold">OPEN AN ACCOUNT</Link> */}
        </div>
      </div>
    </div>
  );
}
