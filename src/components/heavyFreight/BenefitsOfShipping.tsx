import Image from "next/image";

export default function BenefitsOfShipping() {
  return (
    <div className="text-[#333333] pt-[40px]">
      <div className="text-center text-[18px]">
        <h3 className="text-[25px]">
          Benefits of shipping heavy freight with FedEx
        </h3>
      </div>
      <div className="mt-[30px] flex flex-col md:flex-row justify-between">
        <div className="w-full p-5">
          <div className="flex items-center justify-center">
            <Image src="https://i.imgur.com/empRnCO.png" width={500} height={500} alt="dfdfd" />
          </div>
          <div className="text-center text-lg mt-6">
            FedEx offers a wide range of freight services from speedy Priority
            to cost-effective Economy services.
          </div>
        </div>
        <div className="w-full p-5">
          <div className="flex items-center justify-center">
            <Image src="https://i.imgur.com/E1Lvtot.png" width={500} height={500} alt="dfdf" />
          </div>
          <div className="text-center text-lg mt-6">
            We provide heavy shipment deliveries with door to door, customs
            clearance service plus end-to-end tracking.
          </div>
        </div>
        <div className="w-full p-5">
          <div className="flex items-center justify-center">
            <Image src="https://i.imgur.com/8dDlc7z.png" width={500} height={500} alt="dfdfdf" />
          </div>
          <div className="text-center text-lg mt-6">
            FedEx offers a wide range of freight services from speedy Priority
            Now, we offer affordable rate for your heavy freight shipment from
            68 kg+.
          </div>
        </div>
      </div>
    </div>
  );
}
