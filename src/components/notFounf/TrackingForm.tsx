// components/TrackingForm.js (or TrackingForm.tsx)
"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function TrackingForm() {
  const [trackingNumber, setTrackingNumber] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const router = useRouter();

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setError("");
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      router.push(`/track?trackingNumber=${trackingNumber}`);
      window.location.reload();  // Refresh the browser
    }, 2000);
  };

  return (
    <div className="w-full">
      <form
        onSubmit={handleSubmit}
        className="flex relative flex-col gap-2 md:flex-row items-center mt-[50px]"
      >
        <input
          type="text"
          id="trackingNumber"
          className="w-full outline-none text-base placeholder:text-sm placeholder:text-[#3b3b3b] border-none h-[60px] py-[10px] pr-[120px] rounded p-[12px]"
          placeholder="Enter your tracking number(s)"
          value={trackingNumber}
          onChange={(e) => setTrackingNumber(e.target.value)}
          required
        />
        {/* <button type="submit" className=''>Track Package</button> */}
        <button
          type="submit"
          className="rounded-r absolute right-[2px] top-[2px] w-[100px] h-[56px] bg-[#d40511] hover:bg-[#eb131e] text-base font-semibold text-white"
          disabled={loading}
        >
          {loading ? (
            "Loading..."
          ) : (
            "Track"
          )}
        </button>
      </form>
      {error && <p>Error: {error}</p>}
    </div>
  );
}
