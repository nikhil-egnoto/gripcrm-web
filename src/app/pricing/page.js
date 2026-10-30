import GriptechCta from "@/components/sections/home/GriptechCta";
import GriptechFaqs from "@/components/sections/home/GriptechFaqs";
import ComparePlans from "@/components/sections/price/ComparePlans";
import Plans from "@/components/sections/price/plans";
import PriceBanner from "@/components/sections/price/PriceBanner";
import TrustedDealers from "@/components/sections/price/TrustedDealers";
import { fetchPricingPageData } from "@/lib/api";

export const dynamic = "force-dynamic";

const faqDescription = "Find answers to common questions about plans, billing, features, and getting started with GripCRM.";

export default async function Pricing() {
    const { fields } = await fetchPricingPageData();

    return (
        <main>
            <PriceBanner />
            <Plans />
            <TrustedDealers />
            <ComparePlans />
            <GriptechFaqs fields={fields} faqsDescription={faqDescription} />
            <GriptechCta />
        </main>
    );
}

