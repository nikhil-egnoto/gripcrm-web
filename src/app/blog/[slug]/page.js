"use client";

import React, { useState, useEffect, useMemo } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import {
  ArrowLeft,
  Calendar,
  Copy,
  Check,
  BookOpen,
} from "lucide-react";
import Button from "@/components/ui/Button";
import Cta from "@/components/layout/Cta";
import Grainient from "@/components/ui/Grainient";
import { fetchBlogPostBySlug, fetchBlogData } from "@/lib/api";
import { motion } from "framer-motion";
import { animationContent } from "@/components/providers/motionAnimation";
import Link from "next/link";

const getCleanTitle = (post) => {
  if (!post) return "";
  if (typeof post.title === "object") return post.title?.rendered || "";
  return post.title || "";
};

export default function BlogDetailsPage() {
  const params = useParams();
  const rawSlug = params?.slug;
  const slug = Array.isArray(rawSlug) ? rawSlug[0] : rawSlug;

  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeSection, setActiveSection] = useState("");
  const [copied, setCopied] = useState(false);
  const [recentPosts, setRecentPosts] = useState([]);
  const [currentUrl, setCurrentUrl] = useState("");

  const ctaData = {
    title: "Not Sure",
    title2: "Where to Start?",
    description: "Let us know what you need - we're happy to help!",
    btnText: "Talk to an Expert",
    btnLink: "/contact",
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      setCurrentUrl(window.location.href);
    }
  }, []);

  // Fetch the dynamic post by slug and load other recent articles for the sidebar
  useEffect(() => {
    if (!slug) return;

    let isMounted = true;
    setLoading(true);
    setError(null);

    const loadData = async () => {
      try {
        const [postRes, blogListRes] = await Promise.all([
          fetchBlogPostBySlug(slug),
          fetchBlogData(),
        ]);

        if (!isMounted) return;

        if (postRes?.post) {
          setPost(postRes.post);
        } else {
          setError(postRes?.error || "Post not found");
        }

        // Collect other posts for recommended sidebar
        const allBlogs =
          blogListRes?.blogs ||
          (Array.isArray(blogListRes?.fields) ? blogListRes.fields : []);
        if (Array.isArray(allBlogs)) {
          const others = allBlogs
            .filter((b) => b.slug !== slug && String(b.id) !== String(slug))
            .slice(0, 3);
          setRecentPosts(others);
        }
      } catch (err) {
        console.error("Error loading blog details:", err);
        if (isMounted) {
          setError(err.message || "Failed to load article");
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    loadData();

    return () => {
      isMounted = false;
    };
  }, [slug]);

  // Extract Table of Contents and inject IDs into H2 tags of HTML content
  const { processedHtml, tableOfContents } = useMemo(() => {
    if (!post) return { processedHtml: "", tableOfContents: [] };

    // 1. If post already contains structured tableOfContents
    if (Array.isArray(post.tableOfContents) && post.tableOfContents.length > 0) {
      return {
        processedHtml: post.content || "",
        tableOfContents: post.tableOfContents,
      };
    }

    // 2. If post has structured sections with IDs and headings
    if (Array.isArray(post.sections) && post.sections.length > 0) {
      const toc = post.sections.map((s) => ({
        id: s.id,
        title: s.heading || s.title,
      }));
      return {
        processedHtml: post.content || "",
        tableOfContents: toc,
      };
    }

    // 3. Extract dynamically from HTML content
    const html = post.content || "";
    if (!html) return { processedHtml: "", tableOfContents: [] };

    const toc = [];
    let count = 0;

    const processed = html.replace(
      /<h2([^>]*)>(.*?)<\/h2>/gi,
      (match, attrs, innerText) => {
        const cleanText = innerText
          .replace(/<[^>]+>/g, "")
          .replace(/&nbsp;/g, " ")
          .trim();
        if (!cleanText) return match;

        // Check if an id already exists in attrs
        const existingIdMatch = attrs.match(/id=["']([^"']+)["']/i);
        const id = existingIdMatch
          ? existingIdMatch[1]
          : `heading-${cleanText
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, "-")
            .replace(/(^-|-$)/g, "") || ++count}`;

        toc.push({ id, title: cleanText });

        if (existingIdMatch) {
          return match;
        }
        return `<h2 id="${id}"${attrs}>${innerText}</h2>`;
      }
    );

    return { processedHtml: processed, tableOfContents: toc };
  }, [post]);

  // Scroll-spy effect to highlight the current section in Table of Contents
  useEffect(() => {
    if (!tableOfContents || tableOfContents.length === 0) return;

    const handleScroll = () => {
      const sections = tableOfContents
        .map((item) => document.getElementById(item.id))
        .filter(Boolean);
      const scrollPosition = window.scrollY + 220;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section.offsetTop <= scrollPosition) {
          setActiveSection(tableOfContents[i].id);
          return;
        }
      }
      if (sections.length > 0 && window.scrollY < sections[0].offsetTop - 100) {
        setActiveSection("");
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [tableOfContents]);

  const scrollToSection = (id) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -100;
      const y =
        element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  const handleCopyLink = () => {
    if (typeof window !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const postTitle = getCleanTitle(post);
  const shareTitle = encodeURIComponent(postTitle || "Blog Post");
  const shareUrl = encodeURIComponent(currentUrl || "");

  const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`;
  const twitterShareUrl = `https://twitter.com/intent/tweet?url=${shareUrl}&text=${shareTitle}`;
  const linkedinShareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`;

  return (
    <main className="bg-blue-50 relative min-h-screen">
      {/* Dark Sub-Header Navigation Bar */}
      <div className="blog-moving-gradient bg-neutral-900 text-white pt-20 py-10 sm:py-15 px-4 sm:px-8 lg:px-12 border-b border-gray-800 shadow-sm relative">
        <div className="container mx-auto flex items-center justify-between sm:flex-row flex-col relative gap-5">
          {/* Left: Blog Details Title + Back Button */}
          <motion.div {...animationContent} className="flex sm:items-start items-center flex-col gap-4">
            <h1 className="font-spaceGrotesk text-3xl md:text-4xl font-bold text-neutral-100">
              Blog Details
            </h1>

            <Button
              href="/blog"
              className="sm:relative absolute sm:top-0 -top-15 left-0 bg-white/10 border-none text-neutral-100 hover:text-neutral-900 hover:bg-neutral-100 transition-all"
            >
              <span className="w-5 h-5 rounded-full bg-white group-hover:bg-black text-black group-hover:text-white flex items-center justify-center text-xs shrink-0 group-hover:-translate-x-0.5 transition-transform">
                <ArrowLeft className="size-4" />
              </span>
              <span className="relative z-1">Back to Blog Listing</span>
            </Button>
          </motion.div>

          {/* Right: Share Article Social Buttons */}
          <motion.div {...animationContent} className="flex items-center gap-4 sm:gap-6 sm:mt-0 mt-3">
            <span className="text-base sm:text-lg text-neutral-200 font-medium hidden sm:inline-block">
              Share article:
            </span>

            <div className="flex items-center gap-2">
              {/* Facebook */}
              <a
                href={facebookShareUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Share on Facebook"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-neutral-100 text-neutral-100 hover:text-neutral-900 flex items-center justify-center transition-colors cursor-pointer"
              >
                <svg
                  width={18}
                  height={18}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 640 640"
                  fill="none"
                >
                  <path
                    d="M576 320C576 178.6 461.4 64 320 64C178.6 64 64 178.6 64 320C64 440 146.7 540.8 258.2 568.5L258.2 398.2L205.4 398.2L205.4 320L258.2 320L258.2 286.3C258.2 199.2 297.6 158.8 383.2 158.8C399.4 158.8 427.4 162 438.9 165.2L438.9 236C432.9 235.4 422.4 235 409.3 235C367.3 235 351.1 250.9 351.1 292.2L351.1 320L434.7 320L420.3 398.2L351 398.2L351 574.1C477.8 558.8 576 450.9 576 320z"
                    fill="currentColor"
                  />
                </svg>
              </a>

              {/* Twitter / X */}
              <a
                href={twitterShareUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Share on X (Twitter)"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-neutral-100 text-neutral-100 hover:text-neutral-900 flex items-center justify-center transition-colors cursor-pointer"
              >
                <svg
                  width={18}
                  height={18}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 640 640"
                >
                  <path
                    d="M453.2 112L523.8 112L369.6 288.2L551 528L409 528L297.7 382.6L170.5 528L99.8 528L264.7 339.5L90.8 112L236.4 112L336.9 244.9L453.2 112zM428.4 485.8L467.5 485.8L215.1 152L173.1 152L428.4 485.8z"
                    fill="currentColor"
                  />
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href={linkedinShareUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Share on LinkedIn"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-neutral-100 text-neutral-100 hover:text-neutral-900 flex items-center justify-center transition-colors cursor-pointer"
              >
                <svg
                  width={18}
                  height={18}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 640 640"
                >
                  <path
                    d="M512 96L127.9 96C110.3 96 96 110.5 96 128.3L96 511.7C96 529.5 110.3 544 127.9 544L512 544C529.6 544 544 529.5 544 511.7L544 128.3C544 110.5 529.6 96 512 96zM231.4 480L165 480L165 266.2L231.5 266.2L231.5 480L231.4 480zM198.2 160C219.5 160 236.7 177.2 236.7 198.5C236.7 219.8 219.5 237 198.2 237C176.9 237 159.7 219.8 159.7 198.5C159.7 177.2 176.9 160 198.2 160zM480.3 480L413.9 480L413.9 376C413.9 351.2 413.4 319.3 379.4 319.3C344.8 319.3 339.5 346.3 339.5 374.2L339.5 480L273.1 480L273.1 266.2L336.8 266.2L336.8 295.4L337.7 295.4C346.6 278.6 368.3 260.9 400.6 260.9C467.8 260.9 480.3 305.2 480.3 362.8L480.3 480z"
                    fill="currentColor"
                  />
                </svg>
              </a>

              {/* Copy Link */}
              <button
                onClick={handleCopyLink}
                aria-label="Copy link to article"
                title={copied ? "Link copied!" : "Copy link"}
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-neutral-100 text-neutral-100 hover:text-neutral-900 flex items-center justify-center transition-colors cursor-pointer"
              >
                {copied ? (
                  <Check className="size-4 text-emerald-400" />
                ) : (
                  <Copy className="size-4" />
                )}
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="py-12 md:py-20 px-4 sm:px-8 lg:px-12">
        <div className="container mx-auto">
          {/* Loading Skeleton */}
          {loading && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start animate-pulse">
              <aside className="lg:col-span-4 xl:col-span-3 w-full">
                <div className="bg-white rounded-2xl p-6 sm:p-8 space-y-4">
                  <div className="h-6 bg-neutral-200 rounded-md w-3/4 mb-6"></div>
                  <div className="h-4 bg-neutral-100 rounded w-full"></div>
                  <div className="h-4 bg-neutral-100 rounded w-5/6"></div>
                  <div className="h-4 bg-neutral-100 rounded w-4/6"></div>
                  <div className="h-4 bg-neutral-100 rounded w-full"></div>
                </div>
              </aside>

              <article className="xl:col-span-9 lg:col-span-8 w-full bg-white rounded-2xl p-6 sm:p-10 md:p-12 space-y-6">
                <div className="h-4 bg-neutral-200 rounded w-32"></div>
                <div className="h-10 bg-neutral-200 rounded w-4/5"></div>
                <div className="aspect-video bg-neutral-100 rounded-2xl w-full"></div>
                <div className="space-y-3 pt-4">
                  <div className="h-4 bg-neutral-100 rounded w-full"></div>
                  <div className="h-4 bg-neutral-100 rounded w-full"></div>
                  <div className="h-4 bg-neutral-100 rounded w-3/4"></div>
                </div>
              </article>
            </div>
          )}

          {/* Not Found / Error State */}
          {!loading && (!post || error) && (
            <div className="max-w-xl mx-auto bg-white rounded-3xl p-8 sm:p-12 text-center shadow-sm border border-gray-100 my-10">
              <div className="w-16 h-16 rounded-full bg-violet-100 text-violet-600 flex items-center justify-center mx-auto mb-6">
                <BookOpen className="size-8" />
              </div>
              <h2 className="font-spaceGrotesk text-2xl sm:text-3xl font-bold text-neutral-900 mb-3">
                Article Not Found
              </h2>
              <p className="text-neutral-600 text-base leading-relaxed mb-8">
                The blog article you are looking for does not exist or may have
                been moved.
              </p>
              <Button
                href="/blog"
                className="bg-neutral-900 border-2 text-neutral-100 hover:text-neutral-900 hover:bg-neutral-100 inline-flex"
              >
                <ArrowLeft className="size-4" />
                <span>Browse All Articles</span>
              </Button>
            </div>
          )}

          {/* Loaded Post Content */}
          {!loading && post && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Left Sidebar: Table of Content & Recommended Reads */}
              <aside className="lg:col-span-4 xl:col-span-3 w-full lg:sticky top-24 space-y-6">
                {/* Table of Contents Card */}
                {tableOfContents.length > 0 && (
                  <motion.div {...animationContent} className="bg-white rounded-2xl p-5 sm:p-7 md:p-8 shadow-[0_4px_25px_rgba(0,0,0,0.02)] border border-gray-100">
                    <h2 className="text-lg sm:text-xl font-bold font-spaceGrotesk text-neutral-900 mb-6 flex items-center gap-2">
                      <span>Table of Content</span>
                    </h2>

                    <nav className="space-y-4 max-h-[60vh] overflow-y-auto pr-1">
                      {tableOfContents.map((item) => {
                        const isActive = activeSection === item.id;
                        return (
                          <button
                            key={item.id}
                            onClick={() => scrollToSection(item.id)}
                            className={`group w-full text-left flex items-start gap-2.5 text-sm font-medium transition-all duration-200 cursor-pointer ${isActive
                              ? "text-neutral-900 translate-x-1"
                              : "text-neutral-700 hover:text-neutral-900"
                              }`}
                          >
                            <span
                              className={`w-2 h-2 rounded-full shrink-0 mt-2 transition-all ${isActive ? "bg-neutral-900 scale-125" : "bg-neutral-300 group-hover:bg-neutral-900"
                                }`}
                            />
                            <span className="leading-snug">{item.title}</span>
                          </button>
                        );
                      })}
                    </nav>
                  </motion.div>
                )}

                {/* Recommended / Recent Reads Card in Sidebar */}
                {recentPosts.length > 0 && (
                  <div className="bg-white rounded-2xl p-5 sm:p-7 shadow-[0_4px_25px_rgba(0,0,0,0.02)] border border-gray-100">
                    <h3 className="text-base font-bold font-spaceGrotesk text-neutral-900 mb-5">
                      Recent Articles
                    </h3>
                    <div className="space-y-4">
                      {recentPosts.map((other) => {
                        const otherTitle = getCleanTitle(other);
                        const otherSlug = other.slug || other.id;
                        return (
                          <Link
                            key={other.id || otherSlug}
                            href={`/blog/${otherSlug}`}
                            className="group block space-y-1 hover:text-violet-600 transition-colors"
                          >
                            {other.date && (
                              <div className="text-xs text-neutral-500 font-medium">
                                {other.date}
                              </div>
                            )}
                            <h4 className="text-sm font-semibold text-neutral-800 group-hover:text-violet-600 line-clamp-2 leading-snug">
                              {otherTitle}
                            </h4>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                )}
              </aside>

              {/* Right Main Column: Blog Article Body */}
              <article className="xl:col-span-9 lg:col-span-8 w-full bg-white rounded-2xl p-6 sm:p-8 md:p-12 shadow-[0_4px_25px_rgba(0,0,0,0.03)] border border-gray-100">
                {/* Meta Row: Date & Category */}
                <motion.div {...animationContent} className="flex flex-wrap items-center gap-3 text-sm sm:text-base text-neutral-600 font-medium mb-4">
                  {post.date && (
                    <span className="flex items-center gap-1.5">
                      <Calendar className="size-4 text-neutral-400" />
                      {post.date}
                    </span>
                  )}
                  {/* {post.category && (
                    <span className="bg-violet-50 text-violet-700 text-xs font-semibold px-2.5 py-1 rounded-full">
                      {post.category}
                    </span>
                  )} */}
                </motion.div>

                {/* Main Article Title */}
                <motion.h1 {...animationContent} className="text-2xl sm:text-3xl lg:text-4xl font-bold text-neutral-900 mb-8 font-spaceGrotesk leading-tight tracking-tight">
                  {postTitle}
                </motion.h1>

                {/* Featured Image */}
                {post.image && (
                  <motion.div {...animationContent} className="mb-10 rounded-2xl overflow-hidden relative aspect-video w-full border border-gray-100 shadow-xs">
                    <Image
                      src={post.image}
                      alt={postTitle || "Featured Blog Image"}
                      fill
                      priority
                      unoptimized={post.image.startsWith("http://")}
                      className="object-cover"
                    />
                  </motion.div>
                )}

                {/* Intro Paragraph */}
                {post.intro && (
                  <motion.p {...animationContent} className="text-neutral-700 text-base md:text-xl lg:leading-10 leading-relaxed mb-10">
                    {post.intro}
                  </motion.p>
                )}

                {/* Dynamic Content (WordPress HTML) */}
                {processedHtml && (
                  <motion.div {...animationContent}
                    className="blog-content text-neutral-700 mb-12"
                    dangerouslySetInnerHTML={{ __html: processedHtml }}
                  />
                )}

                {/* Dynamic Sections (Structured Fallback format) */}
                {Array.isArray(post.sections) &&
                  post.sections.length > 0 &&
                  post.sections.map((section) => (
                    <motion.section {...animationContent}
                      key={section.id}
                      id={section.id}
                      className="scroll-mt-24 mb-10 sm:mb-14"
                    >
                      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold font-spaceGrotesk text-neutral-900 mb-6">
                        {section.heading}
                      </h2>

                      {/* Section Content Paragraphs */}
                      {section.content &&
                        section.content.map((paragraph, pIdx) => (
                          <p
                            key={pIdx}
                            className="text-neutral-700 text-base md:text-lg lg:leading-8 leading-relaxed mb-6"
                          >
                            {paragraph}
                          </p>
                        ))}

                      {/* Section Image if present */}
                      {section.image && (
                        <div className="rounded-2xl overflow-hidden relative aspect-video my-8 border border-gray-100">
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
                        <div className="space-y-8 my-8">
                          {section.list.map((item) => (
                            <div key={item.num} className="space-y-3">
                              <h3 className="text-lg sm:text-xl font-bold text-neutral-900 flex items-center gap-2">
                                <span>
                                  {item.num}. {item.title}
                                </span>
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
                        <p className="text-neutral-700 text-base md:text-lg lg:leading-8 leading-relaxed mt-6">
                          {section.closing}
                        </p>
                      )}
                    </motion.section>
                  ))}

                {/* Footer Divider & Action Bar inside Article Card */}
                <motion.div {...animationContent} className="border-t border-neutral-200 pt-8 mt-12 flex sm:flex-row flex-col sm:items-center items-start justify-between gap-6">
                  {/* Back to Blog Button */}
                  <Button
                    href="/blog"
                    className="bg-neutral-900 border-2 text-neutral-50 hover:bg-neutral-950"
                  >
                    <span className="w-5 h-5 rounded-full bg-white text-black flex items-center justify-center text-xs shrink-0 group-hover:-translate-x-0.5 transition-transform">
                      <ArrowLeft className="size-4" />
                    </span>
                    <span className="relative z-1">Back to Blog Listing</span>
                  </Button>

                  {/* Share This Article Buttons */}
                  <div className="flex items-center gap-4">
                    <span className="text-sm font-semibold text-neutral-700 hidden sm:inline-block">
                      Share:
                    </span>

                    <div className="flex items-center gap-2">
                      <a
                        href={facebookShareUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Share on Facebook"
                        className="group lg:px-4 px-3 py-3 border border-neutral-900 text-sm font-semibold flex items-center gap-2.5 transition-all cursor-pointer bg-black/10 border-none text-neutral-900 hover:bg-black/20 rounded-full!"
                      >
                        <svg
                          width={20}
                          height={20}
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 640 640"
                          fill="none"
                        >
                          <path
                            d="M576 320C576 178.6 461.4 64 320 64C178.6 64 64 178.6 64 320C64 440 146.7 540.8 258.2 568.5L258.2 398.2L205.4 398.2L205.4 320L258.2 320L258.2 286.3C258.2 199.2 297.6 158.8 383.2 158.8C399.4 158.8 427.4 162 438.9 165.2L438.9 236C432.9 235.4 422.4 235 409.3 235C367.3 235 351.1 250.9 351.1 292.2L351.1 320L434.7 320L420.3 398.2L351 398.2L351 574.1C477.8 558.8 576 450.9 576 320z"
                            fill="currentColor"
                          />
                        </svg>
                      </a>

                      <a
                        href={twitterShareUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Share on X"
                        className="group lg:px-4 px-3 py-3 border border-neutral-900 text-sm font-semibold flex items-center gap-2.5 transition-all cursor-pointer bg-black/10 border-none text-neutral-900 hover:bg-black/20 rounded-full!"
                      >
                        <svg
                          width={20}
                          height={20}
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 640 640"
                        >
                          <path
                            d="M453.2 112L523.8 112L369.6 288.2L551 528L409 528L297.7 382.6L170.5 528L99.8 528L264.7 339.5L90.8 112L236.4 112L336.9 244.9L453.2 112zM428.4 485.8L467.5 485.8L215.1 152L173.1 152L428.4 485.8z"
                            fill="currentColor"
                          />
                        </svg>
                      </a>

                      <a
                        href={linkedinShareUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Share on LinkedIn"
                        className="group lg:px-4 px-3 py-3 border border-neutral-900 text-sm font-semibold flex items-center gap-2.5 transition-all cursor-pointer bg-black/10 border-none text-neutral-900 hover:bg-black/20 rounded-full!"
                      >
                        <svg
                          width={20}
                          height={20}
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 640 640"
                        >
                          <path
                            d="M512 96L127.9 96C110.3 96 96 110.5 96 128.3L96 511.7C96 529.5 110.3 544 127.9 544L512 544C529.6 544 544 529.5 544 511.7L544 128.3C544 110.5 529.6 96 512 96zM231.4 480L165 480L165 266.2L231.5 266.2L231.5 480L231.4 480zM198.2 160C219.5 160 236.7 177.2 236.7 198.5C236.7 219.8 219.5 237 198.2 237C176.9 237 159.7 219.8 159.7 198.5C159.7 177.2 176.9 160 198.2 160zM480.3 480L413.9 480L413.9 376C413.9 351.2 413.4 319.3 379.4 319.3C344.8 319.3 339.5 346.3 339.5 374.2L339.5 480L273.1 480L273.1 266.2L336.8 266.2L336.8 295.4L337.7 295.4C346.6 278.6 368.3 260.9 400.6 260.9C467.8 260.9 480.3 305.2 480.3 362.8L480.3 480z"
                            fill="currentColor"
                          />
                        </svg>
                      </a>

                      <button
                        onClick={handleCopyLink}
                        aria-label="Copy link to article"
                        title={copied ? "Link copied!" : "Copy link"}
                        className="group lg:px-4 px-3 py-3 border border-neutral-900 text-sm font-semibold flex items-center gap-2.5 transition-all cursor-pointer bg-black/10 border-none text-neutral-900 hover:bg-black/20 rounded-full!"
                      >
                        {copied ? (
                          <Check className="size-5 text-emerald-600" />
                        ) : (
                          <Copy className="size-5" />
                        )}
                      </button>
                    </div>
                  </div>
                </motion.div>
              </article>
            </div>
          )}
        </div>
      </div>

      {/* Call to Action Section */}
      <section className="bg-neutral-900 py-16 md:py-24 overflow-hidden relative select-none px-4 sm:px-8 lg:px-12">
        <div className="absolute top-0 w-full h-full left-0 opacity-[0.15]">
          <Grainient
            color1="#9EFFB8"
            color2="#FF78B0"
            color3="#FFF600"
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
        <Cta
          title={ctaData.title}
          title2={ctaData.title2}
          description={ctaData.description}
          btnText={ctaData.btnText}
          btnLink={ctaData.btnLink}
          showTestimonials={false}
        />
      </section>
    </main>
  );
}
