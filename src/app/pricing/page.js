import Faqs from "@/components/layout/Faqs";
import BenefitBusiness from "@/components/sections/price/benefitBusiness";
import ComparePlans from "@/components/sections/price/ComparePlans";
import Plan from "@/components/sections/price/plans";
import WhyGripCrm from "@/components/sections/price/WhyGripCrm";
import { fetchPricingPageData } from "@/lib/api";

export const dynamic = "force-dynamic";

const faqDescription = "Find answers to common questions about plans, billing, features, and getting started with GripCRM.";

export default async function Pricing() {
    const { fields } = await fetchPricingPageData();

    return (
        <main>
            <Plan />
            <ComparePlans />
            <BenefitBusiness fields={fields} />
            <WhyGripCrm fields={fields} />
            <Faqs fields={fields} faqsDescription={faqDescription} />
        </main>
    );
}

