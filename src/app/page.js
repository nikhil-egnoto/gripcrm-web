"use client";

import { useRef } from "react";
import Banner from "@/components/layout/Banner";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Platform from "@/components/sections/home/platform";
import BeyoundDetails from "@/components/sections/home/beyoundDetails";
import Pricing from "@/components/sections/home/pricing";
import FeedBacks from "@/components/sections/home/feedbacks";
import Grow from "@/components/sections/home/grow";
import Cta from "@/components/sections/home/Cta";
import Faqs from "@/components/sections/home/Faqs";
import CompetitiveAdvantage from "@/components/sections/home/CompetitiveAdvantage";
import Workflow from "@/components/sections/home/Workflow";

export default function Home() {

  return (
    <main className="bg-white">
      <Banner />
      <Platform />
      <CompetitiveAdvantage />
      <Workflow />
      <FeedBacks />
      <Grow />
      <Cta />
      <Faqs />
    </main>
  );
}