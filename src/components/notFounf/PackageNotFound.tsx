"use client";

import React, { useState } from "react";
import Header from "./Header";
import TrackingForm from "../trackingForm/TrackingForm";
import Footer from "./Footer";

export default function PackageNotFound() {

  return (
    <div>
      <Header />
      <div className="bg-[#f2f2f2] px-4 sm:px-0 py-6 pb-[80px]">
        <div className="mx-auto max-w-[600px]">
          <TrackingForm />
          <div className="rounded border mt-5 p-5 bg-white">Sorry, your tracking attempt was not successful. Please check your tracking number.</div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
