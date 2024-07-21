"use client"

import Image from "next/image";
import TrackingForm from "../trackingForm/TrackingForm";
import { useState } from "react";

export default function Banner() {
  const [loading, setLoading] = useState(false);

  const items = [
    {
      img: "https://i.imgur.com/Q5cj2lz.png",
      title: "Shop",
      desc: "Find the right service"
    },
    {
      img: "https://i.imgur.com/nfO0Y86.png",
      title: "Get a Quote",
      desc: "Estimate cost to share and compare"
    },
    {
      img: "https://i.imgur.com/36w5AaD.png",
      title: "Request a Business Account",
      desc: "Shipping regularly or frequently? Learn about volume discounts"
    }
  ]
  return (
    <div className="relative">
      <div className="banner relative min-h-[350px] sm:min-h-[430px] bg-[url('https://i.imgur.com/jofFXEI.jpg')] bg-cover bg-no-repeat bg-blend-lighten">
        <div className="absolute bottom-0 left-0 right-0 top-0 z-10 h-full w-full bg-black/30"></div>
        <div className="relative z-20 mx-auto max-w-[550px] p-4 pt-20">
          <p className="text-3xl font-bold text-white drop-shadow-lg">
            Track Your Shipment
          </p>
          <div className="relative mt-5">
            <TrackingForm />
          </div>
        </div>
        
      </div>
      <div className="z-10 relative sm:absolute -bottom-[70px] w-full">
          <div className="mx-auto flex flex-col sm:flex-row items-center bg-white shadow-sm rounded-[8px] max-w-[800px]">
            {items.map((item, i) => (
              <div key={i} className="p-5 hover:shadow-md w-full text-center flex flex-col items-center justify-center">
                <Image src={item.img} width={30} height={30} alt="" />
                <p className="font-bold text-sm my-2">{item.title}</p>
                <p className="text-xs leading-5">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
    </div>
  );
}
