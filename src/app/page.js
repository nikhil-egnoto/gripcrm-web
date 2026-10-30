import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { fetchHomePageData, fetchFeedbacks } from "@/lib/api";
import HomeBanner from "@/components/sections/home/HomeBanner";
import SoftwarePlatform from "@/components/sections/home/SoftwarePlatform";
import BusinessSoluctions from "@/components/sections/home/BusinessSoluctions";
import WhyGriptech from "@/components/sections/home/WhyGriptech";
import AboutGriptech from "@/components/sections/home/AboutGriptech";
import LogoSlide from "@/components/sections/home/LogoSlide";
import CustomerStories from "@/components/sections/home/CustomerStories";
import GriptechFaqs from "@/components/sections/home/GriptechFaqs";
import GriptechBlog from "@/components/sections/home/GriptechBlog";
import GriptechCta from "@/components/sections/home/GriptechCta";
import NewsLetter from "@/components/sections/home/NewsLetter";

export default async function Home() {
  // Server-side fetch to ensure fields, feedbacks & faqs are populated on initial load
  const [{ page, fields }, { feedbacks }] = await Promise.all([
    fetchHomePageData(),
    fetchFeedbacks(),
  ]);

  return (
    <>
      <HomeBanner />
      <SoftwarePlatform />
      <BusinessSoluctions />
      <WhyGriptech />
      <AboutGriptech />
      <LogoSlide />
      <CustomerStories />
      <GriptechFaqs fields={fields} feedbacksData={feedbacks} />
      <GriptechBlog />
      <NewsLetter />
      <GriptechCta />

    </>
  );
}