import Banner from "@/components/layout/Banner";
import Platform from "@/components/sections/griphome/platform";
import CompetitiveAdvantage from "@/components/sections/griphome/CompetitiveAdvantage";
import Workflow from "@/components/sections/griphome/Workflow";
import FeedBacks from "@/components/sections/griphome/feedbacks";
import Faqs from "@/components/layout/Faqs";
import { fetchHomePageData, fetchFeedbacks } from "@/lib/api";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import GriptechCta from "@/components/sections/home/GriptechCta";

export default async function gripCrm() {

    // Server-side fetch to ensure fields, feedbacks & faqs are populated on initial load
    const [{ page, fields }, { feedbacks }] = await Promise.all([
        fetchHomePageData(),
        fetchFeedbacks(),
    ]);

    return (
        <main className="bg-white">
            <Banner fields={fields} page={page} />
            <Platform fields={fields} />
            <CompetitiveAdvantage fields={fields} />
            <Workflow fields={fields} />
            <FeedBacks fields={fields} feedbacksData={feedbacks} />
            <Faqs fields={fields} />
            <GriptechCta />
        </main>
    )
}