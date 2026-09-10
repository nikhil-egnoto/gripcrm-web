"use client";

import Banner from "@/components/layout/Banner";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Platform from "@/components/sections/home/platform";
import Faqs from "@/components/sections/home/Faqs";
import CompetitiveAdvantage from "@/components/sections/home/CompetitiveAdvantage";
import Workflow from "@/components/sections/home/Workflow";
import FeedBacks from "@/components/sections/home/feedbacks";

export default function Home() {

  return (
    <main className="bg-white">
      <Banner />
      <Platform />
      <CompetitiveAdvantage />
      <Workflow />
      <FeedBacks />
      <Faqs />
    </main>
  );
}