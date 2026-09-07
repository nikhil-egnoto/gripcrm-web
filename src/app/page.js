"use client";

import { useRef } from "react";
import Banner from "@/components/layout/Banner";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Platform from "@/components/sections/home/platform";
import GripCRM from "@/components/sections/home/gripcrm";
import GoesBeyond from "@/components/sections/home/goesbeyond";
import BeyoundDetails from "@/components/sections/home/beyoundDetails";
import Pricing from "@/components/sections/home/pricing";

export default function Home() {

  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <main className="bg-white">
      <Banner />
      <Platform />
      <GripCRM />
      <GoesBeyond />
      <BeyoundDetails />
      <Pricing />
    </main>
  );
}