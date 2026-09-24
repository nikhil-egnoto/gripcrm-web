import Banner from "@/components/layout/Banner";
import Platform from "@/components/sections/home/platform";
import CompetitiveAdvantage from "@/components/sections/home/CompetitiveAdvantage";
import Workflow from "@/components/sections/home/Workflow";
import FeedBacks from "@/components/sections/home/feedbacks";
import Faqs from "@/components/layout/Faqs";
import { fetchHomePageData, fetchFeedbacks } from "@/lib/api";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default async function Home() {
  // Server-side fetch to ensure fields, feedbacks & faqs are populated on initial load
  const [{ page, fields }, { feedbacks }] = await Promise.all([
    fetchHomePageData(),
    fetchFeedbacks(),
  ]);

  console.log(fields);

  return (
    <main className="bg-white">
      <Banner fields={fields} page={page} />
      <Platform fields={fields} />
      <CompetitiveAdvantage fields={fields} />
      <Workflow fields={fields} />
      <FeedBacks fields={fields} feedbacksData={feedbacks} />
      <Faqs fields={fields} />
    </main>
  );
}