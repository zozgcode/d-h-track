import Image from "next/image";
import { manageYourShipments } from "./data";

export default function ManageYourShipments() {
  return (
    <div className="custom_container">
      <div className="pt-10 pb-10 text-[#333333]">
        <div>
          <h3 className="text-center font-semibold text-[#4D148C] text-[30px]">
            Manage your shipments
          </h3>
        </div>
        <div className="flex justify-between flex-wrap items-center mt-11">
          {manageYourShipments.map((mys, i) => (
            <div className="pt-[20px] w-full md:max-w-max flex items-center flex-col justify-between pb-[20px] pr-[35px] pl-[35px]" key={i}>
              <Image src={mys.img} alt={mys.text} width={500} height={500} className="mb-3 w-16" />
              <p className="mt-2 text-[#007ab7] text-sm font-bold">{mys.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
