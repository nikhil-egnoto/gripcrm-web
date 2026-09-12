"use client";

import Banner from "@/components/layout/Banner";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Platform from "@/components/sections/home/platform";
import CompetitiveAdvantage from "@/components/sections/home/CompetitiveAdvantage";
import Workflow from "@/components/sections/home/Workflow";
import FeedBacks from "@/components/sections/home/feedbacks";
import Faqs from "@/components/layout/Faqs";


const faqDescription = "Here are the answers to your common queries about streamlining your projects with GripCRM."

const faqData = [
  {
    question: "Do you offer a free trial?",
    answer: "Yes, we offer personalized demos so you can see how GripCRM works and how it can streamline your business processes. You can contact us anytime to schedule a demo tailored to your specific needs."
  },
  {
    question: "What types of payment do you accept?",
    answer: "Design scroll-based and multi-step interactions and easily work with Spline, 3D, Lottie, and dotLottie files all without even thinking about code."
  },
  {
    question: "Is my data safe?",
    answer: "We employ enterprise-grade 256-bit encryption, strict access controls, and regular backup protocols to keep your business data completely secure."
  },
  {
    question: "Can I switch plans?",
    answer: "Absolutely. You can upgrade, downgrade, or modify your subscription plan at any time directly from your billing settings dashboard."
  },
  {
    question: "Do you provide any assistance in getting Grip CRM set up?",
    answer: "Yes! Our dedicated onboarding team offers complimentary step-by-step setup support, data migration assistance, and team training sessions."
  }
];

export default function Home() {

  return (
    <main className="bg-white">
      <Banner />
      <Platform />
      <CompetitiveAdvantage />
      <Workflow />
      <FeedBacks />
      <Faqs faqsData={faqData} faqsDescription={faqDescription} />

    </main>
  );
}