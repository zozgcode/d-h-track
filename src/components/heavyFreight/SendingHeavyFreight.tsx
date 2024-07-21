import Link from "next/link";

export default function SendingHeavyFreight() {
  return (
    <div className="text-[#333333]">
      <div className="text-center text-[18px]">
        <h3 className="text-[25px]">
          Sending heavy freight shipment is simple and economical
        </h3>
        <p className="max-w-[900px] mx-auto mt-[30px]">
          No matter how heavy your shipment is, you can trust our reliable and
          affordable freight services and explore business opportunities
          globally.
        </p>
      </div>
      <div className="bg-[#FAFAFA] text-lg p-4 pt-[30px] pb-[50px] text-center mt-[35px]">
        <p>Have a heavy freight shipment over 68 kg?</p>
        <p>
          Now get an instant last-minute rate directly from our online rating
          tool!
        </p>
        <div className="mt-[40px] flex items-center justify-center">
          <Link
            href=""
            className="bg-[#ff6200] text-center block text-[14px] font-bold p-4 pl-6 pr-6 uppercase text-white"
          >
            GET YOUR INSTANT LAST-MINUTE RATE
          </Link>
        </div>
      </div>
    </div>
  );
}
