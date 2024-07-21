import Link from "next/link";
import { takeControl } from "./data";
import Image from "next/image";

export default function TakeControl() {
  return (
    <div className="mt-[50px] text-[#333333]">
      <div className="text-center mb-7">
        <p className="text-lg">
          Take control of your shipments from start to finish with these
          practical, user-friendly services.
        </p>
      </div>
      <div className="flex justify-between flex-col md:flex-row gap-5 mt-[50px]">
        {takeControl.map((data, i) => (
          <div className="w-full md:w-[33.333%] h-full" key={i}>
            <div className="w-full flex items-center justify-center">
              <Image src={data.img} width={500} height={500} className="w-[100px] h-[100px]" alt="sdnk78" />
            </div>
            <div className="p-5 flex flex-col justify-between h-full md:min-h-[350px]">
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
  );
}
