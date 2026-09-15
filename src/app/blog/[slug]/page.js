"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { SINGLE_POST_DATA } from "@/data/blogData";
import {
  ArrowLeft,
} from "lucide-react";
import Button from "@/components/ui/Button";
import Cta from "@/components/layout/Cta";
import Grainient from "@/components/ui/Grainient";

export default function BlogDetailsPage() {
  const post = SINGLE_POST_DATA;
  const [activeSection, setActiveSection] = useState(false);

  const Faqs = {
    title: "Not Sure",
    title2: "Where to Start?",
    description: "Let us know what you need - we're happy to help!"
  }

  useEffect(() => {
    const handleScroll = () => {
      const sections = post.sections.map(s => document.getElementById(s.id)).filter(Boolean);
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section.offsetTop <= scrollPosition) {
          setActiveSection(section.id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [post.sections]);

  const scrollToSection = (id) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -100;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <main className="bg-blue-50 relative">

      {/* Dark Sub-Header Navigation Bar */}
      <div className="blog-moving-gradient bg-neutral-900 text-white pt-20 py-10 sm:py-15 px-4 border-b border-gray-800 shadow-sm relative">

        <div className="container mx-auto flex items-center justify-between sm:flex-row flex-col relative">

          {/* Left: Blog Details + Back Button */}
          <div className="flex sm:items-start items-center flex-col gap-5">
            <h1 className="font-spaceGrotesk text-3xl md:text-4xl font-bold text-neutral-100">
              Blog Details
            </h1>

            <Button href="/blog" className="sm:relative absolute sm:top-0 -top-15 left-0 bg-white/10 border-none text-neutral-100 hover:text-neutral-900 hover:bg-neutral-100">
              <span className="w-5 h-5 rounded-full bg-white group-hover:bg-black text-black group-hover:text-white flex items-center justify-center text-xs shrink-0 group-hover:translate-x-0.5 transition-transform">
                <ArrowLeft className="size-4" />
              </span>
              <span className="relative z-1">
                Back to Blog Listing
              </span>
            </Button>
          </div>

          {/* Right: Share Article Social Buttons */}
          <div className="flex items-center gap-8 sm:mt-0 mt-5">
            <span className="text-xl text-neutral-100 font-semibold hidden sm:inline-block">
              Share this article
            </span>

            <div className="flex items-center gap-2.5">
              <Button href="/facebook" className="bg-white/10 border-none text-neutral-100 hover:text-neutral-900 hover:bg-neutral-100 rounded-full!">
                <svg width={20} height={20} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" fill="none"><path d="M576 320C576 178.6 461.4 64 320 64C178.6 64 64 178.6 64 320C64 440 146.7 540.8 258.2 568.5L258.2 398.2L205.4 398.2L205.4 320L258.2 320L258.2 286.3C258.2 199.2 297.6 158.8 383.2 158.8C399.4 158.8 427.4 162 438.9 165.2L438.9 236C432.9 235.4 422.4 235 409.3 235C367.3 235 351.1 250.9 351.1 292.2L351.1 320L434.7 320L420.3 398.2L351 398.2L351 574.1C477.8 558.8 576 450.9 576 320z" fill="currentColor" /></svg>
              </Button>

              <Button href="/twitter" className="bg-white/10 border-none text-neutral-100 hover:text-neutral-900 hover:bg-neutral-100 rounded-full!">
                <svg width={20} height={20} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M453.2 112L523.8 112L369.6 288.2L551 528L409 528L297.7 382.6L170.5 528L99.8 528L264.7 339.5L90.8 112L236.4 112L336.9 244.9L453.2 112zM428.4 485.8L467.5 485.8L215.1 152L173.1 152L428.4 485.8z" fill="currentColor" /></svg>
              </Button>

              <Button href="/linkedin" className="bg-white/10 border-none text-neutral-100 hover:text-neutral-900 hover:bg-neutral-100 rounded-full!">
                <svg width={20} height={20} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M512 96L127.9 96C110.3 96 96 110.5 96 128.3L96 511.7C96 529.5 110.3 544 127.9 544L512 544C529.6 544 544 529.5 544 511.7L544 128.3C544 110.5 529.6 96 512 96zM231.4 480L165 480L165 266.2L231.5 266.2L231.5 480L231.4 480zM198.2 160C219.5 160 236.7 177.2 236.7 198.5C236.7 219.8 219.5 237 198.2 237C176.9 237 159.7 219.8 159.7 198.5C159.7 177.2 176.9 160 198.2 160zM480.3 480L413.9 480L413.9 376C413.9 351.2 413.4 319.3 379.4 319.3C344.8 319.3 339.5 346.3 339.5 374.2L339.5 480L273.1 480L273.1 266.2L336.8 266.2L336.8 295.4L337.7 295.4C346.6 278.6 368.3 260.9 400.6 260.9C467.8 260.9 480.3 305.2 480.3 362.8L480.3 480z" fill="currentColor" /></svg>
              </Button>

              <Button href="/linkedin" className="bg-white/10 border-none text-neutral-100 hover:text-neutral-900 hover:bg-neutral-100 rounded-full!">
                <svg width={20} height={20} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M320.3 205C256.8 204.8 205.2 256.2 205 319.7C204.8 383.2 256.2 434.8 319.7 435C383.2 435.2 434.8 383.8 435 320.3C435.2 256.8 383.8 205.2 320.3 205zM319.7 245.4C360.9 245.2 394.4 278.5 394.6 319.7C394.8 360.9 361.5 394.4 320.3 394.6C279.1 394.8 245.6 361.5 245.4 320.3C245.2 279.1 278.5 245.6 319.7 245.4zM413.1 200.3C413.1 185.5 425.1 173.5 439.9 173.5C454.7 173.5 466.7 185.5 466.7 200.3C466.7 215.1 454.7 227.1 439.9 227.1C425.1 227.1 413.1 215.1 413.1 200.3zM542.8 227.5C541.1 191.6 532.9 159.8 506.6 133.6C480.4 107.4 448.6 99.2 412.7 97.4C375.7 95.3 264.8 95.3 227.8 97.4C192 99.1 160.2 107.3 133.9 133.5C107.6 159.7 99.5 191.5 97.7 227.4C95.6 264.4 95.6 375.3 97.7 412.3C99.4 448.2 107.6 480 133.9 506.2C160.2 532.4 191.9 540.6 227.8 542.4C264.8 544.5 375.7 544.5 412.7 542.4C448.6 540.7 480.4 532.5 506.6 506.2C532.8 480 541 448.2 542.8 412.3C544.9 375.3 544.9 264.5 542.8 227.5zM495 452C487.2 471.6 472.1 486.7 452.4 494.6C422.9 506.3 352.9 503.6 320.3 503.6C287.7 503.6 217.6 506.2 188.2 494.6C168.6 486.8 153.5 471.7 145.6 452C133.9 422.5 136.6 352.5 136.6 319.9C136.6 287.3 134 217.2 145.6 187.8C153.4 168.2 168.5 153.1 188.2 145.2C217.7 133.5 287.7 136.2 320.3 136.2C352.9 136.2 423 133.6 452.4 145.2C472 153 487.1 168.1 495 187.8C506.7 217.3 504 287.3 504 319.9C504 352.5 506.7 422.6 495 452z" fill="currentColor" /></svg>
              </Button>
            </div>
          </div>

        </div>
      </div>

      <div className="py-16 md:py-24 px-4">
        {/* Main Content Area */}
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

            {/* Left Sidebar: Table of Content */}
            <aside className="lg:col-span-4 xl:col-span-3 w-full md:sticky top-4">
              <div className="bg-white rounded-2xl p-5 sm:p-7 md:p-9">
                <h2 className="text-xl font-semibold text-neutral-900 mb-8">
                  Table of Content
                </h2>

                <nav className="space-y-6">
                  {post.tableOfContents.map((item) => {
                    const isActive = activeSection === item.id;
                    return (
                      <button
                        key={item.id}
                        onClick={() => scrollToSection(item.id)}
                        className={`w-full text-left flex items-center gap-2.5 text-base font-medium transition-all duration-200 cursor-pointer hover:text-neutral-900 ${isActive
                          ? "text-neutral-900"
                          : "text-neutral-700"
                          }`}
                      >
                        <svg width={20} height={20} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" fill="none"><path d="M320 576C178.6 576 64 461.4 64 320C64 178.6 178.6 64 320 64C461.4 64 576 178.6 576 320C576 461.4 461.4 576 320 576zM320 112C205.1 112 112 205.1 112 320C112 434.9 205.1 528 320 528C434.9 528 528 434.9 528 320C528 205.1 434.9 112 320 112zM320 416C267 416 224 373 224 320C224 267 267 224 320 224C373 224 416 267 416 320C416 373 373 416 320 416z" fill="currentColor" /></svg>
                        <span className="leading-snug w-full">{item.title}</span>
                      </button>
                    );
                  })}
                </nav>
              </div>
            </aside>

            {/* Right Main Column: Blog Article Body */}
            <article className="xl:col-span-9 lg:col-span-8 w-full bg-white rounded-2xl p-6 sm:p-8 md:p-12">

              {/* Article Date */}
              <div className="text-sm sm:text-base text-neutral-700 font-medium mb-5">
                {post.date}
              </div>

              {/* Main Article Title */}
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-neutral-900 mb-10 font-spaceGrotesk">
                {post.title}
              </h1>

              {/* Intro Paragraph */}
              <p className="text-neutral-700 text-base md:text-xl lg:leading-10 leading-relaxed mb-10 sm:mb-15 md:mb-20">
                {post.intro}
              </p>

              {/* Dynamic Sections */}
              {post.sections.map((section) => (
                <section key={section.id} id={section.id} className="scroll-mt-20 mb-10 sm:mb-15 md:mb-20">

                  <h2 className="text-xl sm:text-2xl md:text-4xl font-bold font-spaceGrotesk text-neutral-900 mb-10">
                    {section.heading}
                  </h2>

                  {/* Section Content Paragraphs */}
                  {section.content && section.content.map((paragraph, pIdx) => (
                    <p key={pIdx} className="text-neutral-700 text-base md:text-xl lg:leading-10 leading-relaxed mb-10">
                      {paragraph}
                    </p>
                  ))}

                  {/* Section Image if present */}
                  {section.image && (
                    <div className="rounded-2xl overflow-hidden relative aspect-video">
                      <Image
                        src={section.image}
                        alt={section.imageAlt || section.heading}
                        fill
                        className="object-cover"
                      />
                    </div>
                  )}

                  {/* Section Numbered List if present */}
                  {section.list && (
                    <div className="space-y-10">
                      {section.list.map((item) => (
                        <div key={item.num} className="space-y-5">
                          <h3 className="text-lg sm:text-xl font-bold text-neutral-900 flex items-center gap-2">
                            <span>{item.num}. {item.title}</span>
                          </h3>
                          <p className="text-neutral-700 text-base md:text-lg lg:leading-8 leading-relaxed pl-4">
                            {item.desc}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Closing text if present */}
                  {section.closing && (
                    <p className="text-neutral-700 text-base md:text-xl lg:leading-10 leading-relaxed mt-10">
                      {section.closing}
                    </p>
                  )}

                </section>
              ))}

              {/* Footer Divider & Action Bar inside Article Card */}
              <div className="border-t border-neutral-300 pt-8 flex sm:flex-row flex-col sm:items-center items-start justify-between gap-6">

                {/* Back to Blog Button */}
                <Button href="/blog" className="bg-neutral-900 border-2 text-neutral-50 hover:text-neutral-900 hover:bg-neutral-50">
                  <span className="w-5 h-5 rounded-full bg-white group-hover:bg-black text-black group-hover:text-white flex items-center justify-center text-xs shrink-0 group-hover:translate-x-0.5 transition-transform">
                    <ArrowLeft className="size-4" />
                  </span>
                  <span className="relative z-1">
                    Back to Blog
                  </span>
                </Button>

                {/* Share This Article */}

                <div className="flex items-center gap-8">
                  <span className="text-xl text-neutral-900 font-semibold hidden sm:inline-block">
                    Share this article
                  </span>

                  <div className="flex items-center gap-2.5">
                    <Button href="/facebook" className="bg-black/10 border-none text-neutral-900 hover:text-neutral-50 hover:bg-neutral-900 rounded-full!">
                      <svg width={20} height={20} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" fill="none"><path d="M576 320C576 178.6 461.4 64 320 64C178.6 64 64 178.6 64 320C64 440 146.7 540.8 258.2 568.5L258.2 398.2L205.4 398.2L205.4 320L258.2 320L258.2 286.3C258.2 199.2 297.6 158.8 383.2 158.8C399.4 158.8 427.4 162 438.9 165.2L438.9 236C432.9 235.4 422.4 235 409.3 235C367.3 235 351.1 250.9 351.1 292.2L351.1 320L434.7 320L420.3 398.2L351 398.2L351 574.1C477.8 558.8 576 450.9 576 320z" fill="currentColor" /></svg>
                    </Button>

                    <Button href="/twitter" className="bg-black/10 border-none text-neutral-900 hover:text-neutral-50 hover:bg-neutral-900 rounded-full!">
                      <svg width={20} height={20} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M453.2 112L523.8 112L369.6 288.2L551 528L409 528L297.7 382.6L170.5 528L99.8 528L264.7 339.5L90.8 112L236.4 112L336.9 244.9L453.2 112zM428.4 485.8L467.5 485.8L215.1 152L173.1 152L428.4 485.8z" fill="currentColor" /></svg>
                    </Button>

                    <Button href="/linkedin" className="bg-black/10 border-none text-neutral-900 hover:text-neutral-50 hover:bg-neutral-900 rounded-full!">
                      <svg width={20} height={20} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M512 96L127.9 96C110.3 96 96 110.5 96 128.3L96 511.7C96 529.5 110.3 544 127.9 544L512 544C529.6 544 544 529.5 544 511.7L544 128.3C544 110.5 529.6 96 512 96zM231.4 480L165 480L165 266.2L231.5 266.2L231.5 480L231.4 480zM198.2 160C219.5 160 236.7 177.2 236.7 198.5C236.7 219.8 219.5 237 198.2 237C176.9 237 159.7 219.8 159.7 198.5C159.7 177.2 176.9 160 198.2 160zM480.3 480L413.9 480L413.9 376C413.9 351.2 413.4 319.3 379.4 319.3C344.8 319.3 339.5 346.3 339.5 374.2L339.5 480L273.1 480L273.1 266.2L336.8 266.2L336.8 295.4L337.7 295.4C346.6 278.6 368.3 260.9 400.6 260.9C467.8 260.9 480.3 305.2 480.3 362.8L480.3 480z" fill="currentColor" /></svg>
                    </Button>

                    <Button href="/linkedin" className="bg-black/10 border-none text-neutral-900 hover:text-neutral-50 hover:bg-neutral-900 rounded-full!">
                      <svg width={20} height={20} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M320.3 205C256.8 204.8 205.2 256.2 205 319.7C204.8 383.2 256.2 434.8 319.7 435C383.2 435.2 434.8 383.8 435 320.3C435.2 256.8 383.8 205.2 320.3 205zM319.7 245.4C360.9 245.2 394.4 278.5 394.6 319.7C394.8 360.9 361.5 394.4 320.3 394.6C279.1 394.8 245.6 361.5 245.4 320.3C245.2 279.1 278.5 245.6 319.7 245.4zM413.1 200.3C413.1 185.5 425.1 173.5 439.9 173.5C454.7 173.5 466.7 185.5 466.7 200.3C466.7 215.1 454.7 227.1 439.9 227.1C425.1 227.1 413.1 215.1 413.1 200.3zM542.8 227.5C541.1 191.6 532.9 159.8 506.6 133.6C480.4 107.4 448.6 99.2 412.7 97.4C375.7 95.3 264.8 95.3 227.8 97.4C192 99.1 160.2 107.3 133.9 133.5C107.6 159.7 99.5 191.5 97.7 227.4C95.6 264.4 95.6 375.3 97.7 412.3C99.4 448.2 107.6 480 133.9 506.2C160.2 532.4 191.9 540.6 227.8 542.4C264.8 544.5 375.7 544.5 412.7 542.4C448.6 540.7 480.4 532.5 506.6 506.2C532.8 480 541 448.2 542.8 412.3C544.9 375.3 544.9 264.5 542.8 227.5zM495 452C487.2 471.6 472.1 486.7 452.4 494.6C422.9 506.3 352.9 503.6 320.3 503.6C287.7 503.6 217.6 506.2 188.2 494.6C168.6 486.8 153.5 471.7 145.6 452C133.9 422.5 136.6 352.5 136.6 319.9C136.6 287.3 134 217.2 145.6 187.8C153.4 168.2 168.5 153.1 188.2 145.2C217.7 133.5 287.7 136.2 320.3 136.2C352.9 136.2 423 133.6 452.4 145.2C472 153 487.1 168.1 495 187.8C506.7 217.3 504 287.3 504 319.9C504 352.5 506.7 422.6 495 452z" fill="currentColor" /></svg>
                    </Button>
                  </div>
                </div>

              </div>

            </article>

          </div>
        </div>
      </div>

      <section className={`bg-neutral-900 py-16 md:py-24 overflow-hidden relative select-none px-4`}>
        <div className="absolute top-0 w-full h-full left-0 opacity-[0.15]">
          <Grainient
            color1="#9EFFB8"
            color2="#FF78B0"
            color3="#FFF600 "
            timeSpeed={1.5}
            colorBalance={-0.21}
            warpStrength={1}
            warpFrequency={5}
            warpSpeed={2}
            warpAmplitude={50}
            blendAngle={0}
            blendSoftness={0.05}
            rotationAmount={500}
            noiseScale={2}
            grainAmount={0.1}
            grainScale={2}
            grainAnimated={false}
            contrast={1.5}
            gamma={1}
            saturation={1}
            centerX={0}
            centerY={0}
            zoom={0.9}
          />
        </div>
        <Cta title={Faqs.title} title2={Faqs.title2} description={Faqs.description} />
      </section>
    </main>
  );
}
