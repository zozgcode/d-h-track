import Link from "next/link";
import { whenYouAndYourCustomers } from "./data";
import Image from "next/image";

export default function WhenYouAndYourCustomers() {
  return (
    <div className="custom_container">
      <div className="mt-[50px] custom_container text-[#333333]">
        <div className="text-center mb-4">
          <h2 className="text-[25px] mb-2">
            When you and your customers need it most
          </h2>
          <p className="text-lg leading-snug">
            Global efforts to stop the spread of COVID-19 have changed the
            world—and the way you do business—overnight. We’re here to help your
            business deliver when you and your customers need it most.{" "}
          </p>
        </div>
        <div className="flex justify-between flex-col md:flex-row gap-5">
          {whenYouAndYourCustomers.map((data, i) => (
            <div className="border w-full md:w-[33.333%] h-full" key={i}>
              <div className="border w-full">
                <Image src={data.img} width={500} height={500} className="w-full h-auto" alt="" />
              </div>
              <div className="p-5 flex flex-col justify-between h-full md:min-h-[450px]">
                <div>
                  <div className="mt-[25px] leading-snug mb-[25px] text-center">
                    <h3 className="text-[20px] md:text-[25px]">{data.title}</h3>
                  </div>
                  <div className="mt-[25px] text-[18px] mb-[25px] leading-snug text-center">
                    <p>{data.desc}</p>
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <Link
                    href={data.slug}
                    className="border-2 text-center text-[14px] max-w-[200px] border-[#007ab7] text-[#007ab7] uppercase font-bold rounded-full flex items-center justify-center  p-3 pl-6 pr-6"
                  >
                    {data.slugText}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
