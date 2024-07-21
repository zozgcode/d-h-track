"use client";

import React, { useEffect, useState, useCallback, useMemo } from "react";
import { Package } from "../../utils/types";
import Image from "next/image";
import Link from "next/link";
import { FaUser } from "react-icons/fa";
import { FaArrowDownShortWide } from "react-icons/fa6";
import logo from "../../assets/dhl-logo.svg"

interface ResultPageProps {
  packageInfo: Package;
}

export default function ResultPage({ packageInfo }: ResultPageProps) {
  const steps = useMemo(() => {
    const stepList = [
      {
        label: "Package Received By Fedex",
        datetime: `${packageInfo.package_received_date}T${packageInfo.package_received_time}`,
      },
      {
        label: "In Transit",
        datetime: `${packageInfo.in_transit_date}T${packageInfo.in_transit_time}`,
      },
      {
        label: "Out for Delivery",
        datetime: `${packageInfo.out_for_delivery_date}T${packageInfo.out_for_delivery_time}`,
      },
      {
        label: "Delivered",
        datetime: `${packageInfo.estimated_delivery_date}T${packageInfo.estimated_delivery_time}`,
      },
    ];

    if (packageInfo.on_hold_date && packageInfo.on_hold_time) {
      stepList.splice(3, 0, {
        label: "On Hold",
        datetime: `${packageInfo.on_hold_date}T${packageInfo.on_hold_time}`,
      });
    }

    return stepList;
  }, [packageInfo]);

  const [currentStep, setCurrentStep] = useState<number>(-1);

  const calculateStep = useCallback(() => {
    const now = new Date().getTime();
    let step = -1;

    for (let i = 0; i < steps.length; i++) {
      if (now >= new Date(steps[i].datetime).getTime()) {
        step = i;
      } else {
        break;
      }
    }

    setCurrentStep(step);
  }, [steps]);

  useEffect(() => {
    calculateStep(); // Initial update
    const interval = setInterval(calculateStep, 1000 * 60); // Update every minute

    return () => clearInterval(interval);
  }, [calculateStep]);

  const formatDate = (datetime: string) => {
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return new Date(datetime).toLocaleDateString(undefined, options);
  };

  const formatTime = (datetime: string) => {
    const options: Intl.DateTimeFormatOptions = {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
    };
    return new Date(datetime).toLocaleTimeString(undefined, options);
  };

  const getStatus = (step: number) => {
    switch (step) {
      case 0:
        return "Package Received";
      case 1:
        return "In Transit";
      case 2:
        return "Out for Delivery";
      case 3:
        return "Delivered";
      default:
        return "Unknown";
    }
  };

  return (
    <div className="w-full absolute top-0 left-0 right-0 z-10 bg-white p-[16px] text-[#333333]">
      <div className="max-w-[1000px] mx-auto">
        <div className="text-right flex items-center justify-between font-semibold p-4">
          <Link href="/">
            <Image src={logo} width={150} height={150} alt="logo" />
          </Link>
          <Link href="/">Go Home</Link>
        </div>
        <div className="p-4 rounded bg-gradient mb-[30px] mt-[30px] text-center font-semibold">
          Tracking Number: [{packageInfo.tracking_number}] found.
        </div>
        <div className="border p-4 md:p-8 rounded-lg">
          <div className="vertical-progress-container">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`step ${index <= currentStep ? "active" : ""}`}
              >
                <div className="circle"></div>
                <div className="content">
                  <p className="label text-base font-semibold uppercase">
                    {step.label}
                  </p>
                  <p className="text-sm flex flex-col mt-1">
                    {formatDate(step.datetime)}
                    <span className="text-[13px]">
                      {formatTime(step.datetime)}
                    </span>
                  </p>
                </div>
              </div>
            ))}
          </div>
          {/* SENDER'S INFO */}
          <div>
            <div className="p-4 pl-0 flex items-center  gap-3 mt-[10px] font-semibold">
              <span>
                <FaUser />
              </span>
              <span>Sender&apos;s Information</span>
            </div>
            <div>
              <div className="relative overflow-x-auto">
                <table className="w-full text-sm text-left">
                  <thead className="text-xs text-black uppercase border-b bg-gradient">
                    <tr>
                      <th scope="col" className="px-6 py-3">
                        Sender Name
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Phone
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Address
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Email
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-white text-[#333333] border">
                      <td className="px-4 py-2 w-[200px]">
                        {packageInfo.sender.name}
                      </td>
                      <td className="px-4 py-2 w-[200px]">
                        {packageInfo.sender.contact_number}
                      </td>
                      <td className="px-4 py-2 w-[300px]">
                        {packageInfo.sender.address}
                      </td>
                      <td className="px-4 py-2 w-[200px]">
                        {packageInfo.sender.email}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          {/* RECIPIENT'S INFO */}
          <div className="mt-2">
            <div className="p-4 pl-0 flex items-center gap-3 mt-[10px] font-semibold">
              <span>
                <FaUser />
              </span>
              <span>Receiver&apos;s Information</span>
            </div>
            <div>
              <div className="relative overflow-x-auto">
                <table className="w-full text-sm text-left">
                  <thead className="text-xs text-black uppercase border-b bg-gradient">
                    <tr>
                      <th scope="col" className="px-6 py-3">
                        Receiver Name
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Phone
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Address
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Email
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-white text-[#333333] border">
                      <td className="px-4 py-2 w-[200px]">
                        {packageInfo.recipient.name}
                      </td>
                      <td className="px-4 py-2 w-[200px]">
                        {packageInfo.recipient.contact_number}
                      </td>
                      <td className="px-4 py-2 w-[300px]">
                        {packageInfo.recipient.address}
                      </td>
                      <td className="px-4 py-2 w-[200px]">
                        {packageInfo.recipient.email}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          {/* SHIPMENT'S INFO */}
          <div>
            <div className="p-4 pl-0 flex items-center gap-3 mt-[30px] font-semibold">
              <span>
                <FaArrowDownShortWide />
              </span>
              <span>Shipment Information</span>
            </div>
            <div>
              <div className="bg-[#858585] text-white flex items-center justify-between">
                <div className="w-full p-3 py-2 border-r">Weight (kg)</div>
                <div className="w-full p-3 py-2">
                  {packageInfo.package_details.weight_kg}kg
                </div>
              </div>
              <div className="bg-white flex items-center justify-between">
                <div className="w-full p-3 py-2 border-r">Courier</div>
                <div className="w-full p-3 py-2">
                  {packageInfo.package_details.courier}
                </div>
              </div>
              <div className="bg-[#858585] text-white flex items-center justify-between">
                <div className="w-full p-3 py-2 border-r">Packages</div>
                <div className="w-full p-3 py-2">
                  {packageInfo.package_details.packages}
                </div>
              </div>
              <div className="bg-white flex items-center justify-between">
                <div className="w-full p-3 py-2 border-r">Quantity</div>
                <div className="w-full p-3 py-2">
                  {packageInfo.package_details.quantity}
                </div>
              </div>
              <div className="bg-[#858585] text-white flex items-center justify-between">
                <div className="w-full p-3 py-2 border-r">Payment Mode</div>
                <div className="w-full p-3 py-2">
                  {packageInfo.package_details.paymentMode}
                </div>
              </div>
              <div className="bg-white flex items-center justify-between">
                <div className="w-full p-3 py-2 border-r">Origin</div>
                <div className="w-full p-3 py-2">
                  {packageInfo.package_details.origin}
                </div>
              </div>
              <div className="bg-[#858585] text-white flex items-center justify-between">
                <div className="w-full p-3 py-2 border-r">Destination</div>
                <div className="w-full p-3 py-2">
                  {packageInfo.package_details.destination}
                </div>
              </div>
              <div className="bg-white flex items-center justify-between">
                <div className="w-full p-3 py-2 border-r">Pickup Date</div>
                <div className="w-full p-3 py-2">
                  {formatDate(packageInfo.package_received_date)}
                </div>
              </div>
              <div className="bg-[#858585] text-white flex items-center justify-between">
                <div className="w-full p-3 py-2 border-r">Pickup Time</div>
                <div className="w-full p-3 py-2">
                  {formatTime(
                    `${packageInfo.package_received_date}T${packageInfo.package_received_time}`
                  )}
                </div>
              </div>
              <div className="bg-white flex items-center justify-between">
                <div className="w-full p-3 py-2 border-r">Status</div>
                <div className="w-full p-3 py-2">{getStatus(currentStep)}</div>
              </div>
              <div className="bg-[#858585] text-white flex items-center justify-between">
                <div className="w-full p-3 py-2 border-r">
                  Estimated Delivery Date
                </div>
                <div className="w-full p-3 py-2">
                  {formatDate(packageInfo.estimated_delivery_date)}
                </div>
              </div>
              <div className="bg-white flex items-center justify-between">
                <div className="w-full p-3 py-2 border-r">
                  Estimated Delivery Time
                </div>
                <div className="w-full p-3 py-2">
                  {formatTime(
                    `${packageInfo.estimated_delivery_date}T${packageInfo.estimated_delivery_time}`
                  )}
                </div>
              </div>
              <div className="bg-[#858585] text-white flex items-center justify-between">
                <div className="w-full p-3 py-2 border-r">Mode</div>
                <div className="w-full p-3 py-2">
                  {packageInfo.package_details.mode}
                </div>
              </div>
              <div className="bg-white flex items-center justify-between">
                <div className="w-full p-3 py-2 border-r">Comment</div>
                <div className="w-full p-3 py-2">
                  {packageInfo.package_details.comment}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
