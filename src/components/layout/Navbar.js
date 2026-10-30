import { ArrowRight, ChevronDown, ChevronUp, CircleUserRound, ImageIcon } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Button from "../ui/Button";
import { useAuth } from "@/context/AuthContext";

const megaMenuData = {
    products: {
        title: "Products",
        subtitle: "Software your team uses every day",
        items: [
            {
                title: "Grip CRM",
                description: "Track every lead to a signed contract",
                href: "/gripcrm",
            },
            {
                title: "Grip Estimator",
                description: "Show the building in 3D, quote in minutes",
                href: "/estimator",
            },
            {
                title: "Ninja Ai",
                description: "AI assistant that works after hours",
                href: "/ninja-ai",
            },
        ],
    },
    services: {
        title: "Services",
        subtitle: "Work we do for you.",
        items: [
            {
                title: "Website Development",
                description: "Custom sites built to sell buildings",
                href: "/website-development",
            },
            {
                title: "Solutions for Manufacturer",
                description: "Production workflow, order to delivery",
                href: "/solutions-for-manufacturer",
            },
            {
                title: "Solutions for Dealers",
                description: "Inventory, service calls, daily operations",
                href: "/solutions-for-dealers",
            },
        ],
    },
};

const defaultNavigation = [
    {
        label: "Pricing",
        href: "/pricing",
    },
    {
        label: "Resources",
        dropdown: [
            {
                label: "About us",
                href: "/about",
            },
            {
                label: "Knowledge Hubs / Help Center",
                href: "/help-center",
                children: [
                    {
                        label: "Account & Billing",
                        href: "/account-billing",
                    },
                    {
                        label: "Articles",
                        href: "/articles",
                    },
                    {
                        label: "What's New",
                        href: "/whats-new",
                    },
                ],
            },
            {
                label: "Blog",
                href: "/blog",
            },
            {
                label: "FAQ's",
                href: "/faqs",
            },
        ],
    },
    {
        label: "Contact",
        href: "/contact",
    },
];

export default function Navbar({ navLinks, options }) {
    const { isAuthenticated, logout, user } = useAuth();
    const [openDropdown, setOpenDropdown] = useState(null);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const activeLinks = navLinks || options?.options?.nav_links || options?.nav_links;

    const navigation = (Array.isArray(activeLinks) && activeLinks.length > 0)
        ? activeLinks.map((item) => {
            const rawDropdown = item.dropdown || item.submenus || item.submenu || [];
            const hasDropdown = Array.isArray(rawDropdown) && rawDropdown.length > 0;
            return {
                label: item.label || item.name || "",
                href: item.href || item.url || "#",
                dropdown: hasDropdown ? rawDropdown.map((sub) => {
                    const rawChildren = sub.children || sub.supersubmenu || sub.supersubmenus || [];
                    return {
                        label: sub.label || sub.name || "",
                        href: sub.href || sub.url || "#",
                        children: Array.isArray(rawChildren) ? rawChildren.map((child) => ({
                            label: child.label || child.name || "",
                            href: child.href || child.url || "#",
                        })) : [],
                    };
                }) : null,
            };
        })
        : defaultNavigation;

    const ctaText = options?.options?.header_cta_text || options?.header_cta_text || "Request a Demo";
    const ctaUrl = options?.options?.header_cta_url || options?.header_cta_url || "/contact";

    const dropdownRef = useRef(null);

    // Close dropdown when clicking outside
    useEffect(() => {
        function handleClickOutside(event) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setOpenDropdown(null);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    // Prevent background scrolling when mobile menu is open
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = "hidden";
            document.body.style.height = "100%";
            document.documentElement.style.overflow = "hidden";
            document.documentElement.style.height = "100%";
        } else {
            document.body.style.overflow = "";
            document.body.style.height = "";
            document.documentElement.style.overflow = "";
            document.documentElement.style.height = "";
        }
        return () => {
            document.body.style.overflow = "";
            document.body.style.height = "";
            document.documentElement.style.overflow = "";
            document.documentElement.style.height = "";
        };
    }, [isMobileMenuOpen]);

    const closeMobileMenu = () => {
        setOpenDropdown(null);
        setIsMobileMenuOpen(false);
    };

    return (
        <>
            {/* --- DESKTOP / MOBILE NAVIGATION --- */}
            <nav className={`mobile-menu flex items-center gap-4 lg:gap-2 relative  ${isMobileMenuOpen ? "open" : ""}`} ref={dropdownRef}>
                {navigation.map((item, index) => {
                    const isOpen = openDropdown === item.label;

                    return (
                        <div
                            key={item.label}
                            className="relative group mobile-nav-item w-full lg:w-auto"
                            style={{
                                "--item-delay": `${index * 0.08 + 0.05}s`,
                            }}
                        >

                            {item.dropdown ? (
                                <>
                                    {/* Dropdown Toggle Button */}
                                    <button
                                        type="button"
                                        onClick={() => setOpenDropdown((prev) => (prev === item.label ? null : item.label))}
                                        className={`w-full lg:w-auto justify-between lg:justify-start lg:px-3 py-3 lg:py-2 rounded-lg lg:rounded-md text-2xl lg:text-sm text-dark font-medium lg:font-semibold flex items-center gap-1.5 cursor-pointer transition-all ${isOpen ? "lg:hover:bg-madison-50 lg:bg-madison-50 text-madison-700" : "lg:hover:bg-madison-50"}`}>
                                        <span>{item.label}</span>
                                        <ChevronDown className={`size-7 lg:size-4 transition-transform duration-300 ${isOpen ? "rotate-180" : "group-hover:rotate-180"}`} />
                                    </button>

                                    {/* Dropdown Panel */}
                                    <div className={`mobile-dropdown static lg:absolute top-full left-0 lg:-left-28 w-full lg:w-[calc(100vw-2rem)] lg:max-w-[700px] lg:w-[700px] lg:pt-[14px] lg:opacity-0 lg:invisible lg:pointer-events-none lg:translate-y-3 lg:scale-[0.98] transition-all duration-300 ease-out lg:group-hover:opacity-100 lg:group-hover:visible lg:group-hover:pointer-events-auto lg:group-hover:translate-y-0 lg:group-hover:scale-100 ${isOpen ? "!opacity-100 !visible !pointer-events-auto lg:!translate-y-0 lg:!scale-100 is-open" : ""}`}>
                                        <div className="lg:bg-[#F0F1F3] lg:p-1 lg:rounded-2xl lg:border lg:border-[#E5E7EB] lg:shadow-2xl lg:shadow-neutral-900/10">
                                            <div className="bg-white lg:rounded-xl lg:px-6 lg:border lg:border-[#E5E7EB] z-50">

                                                <div className="sub-menue w-full">
                                                    <div className="flex flex-col gap-4 lg:grid lg:grid-cols-1 lg:grid-cols-2">
                                                        {/* Products Column */}
                                                        <div className="lg:pr-7 lg:pr-8 lg:border-r lg:border-neutral-200/80 lg:py-6 lg:border-b lg:border-b-0">
                                                            <div className="mb-4 lg:mb-5 text-left mega-menu-heading">
                                                                <h3 className="text-md font-semibold text-dark">
                                                                    {megaMenuData.products.title}
                                                                </h3>
                                                                <p className="text-xs text-neutral-500 font-normal mt-0.5">
                                                                    {megaMenuData.products.subtitle}
                                                                </p>
                                                            </div>
                                                            <div className="flex flex-col gap-3">
                                                                {megaMenuData.products.items.map((subItem, subIndex) => (
                                                                    <Link
                                                                        key={subItem.title}
                                                                        href={subItem.href}
                                                                        onClick={closeMobileMenu}
                                                                        className="group/item fade-list-item flex items-center gap-3.5 lg:px-2 py-2 rounded-lg lg:hover:bg-madison-50 transition-all duration-200 text-left"
                                                                        style={{
                                                                            "--item-delay": `${subIndex * 0.08 + 0.05}s`,
                                                                        }}
                                                                    >
                                                                        {/* Elevated Icon Box */}
                                                                        <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-white border border-neutral-200/90 shadow-[0_2px_8px_rgba(0,0,0,0.06),0_1px_2px_rgba(0,0,0,0.04)] flex items-center justify-center shrink-0 group-hover/item:border-neutral-300 group-hover/item:shadow-md transition-all duration-200">
                                                                            <ImageIcon className="size-5 text-neutral-800" strokeWidth={1.75} />
                                                                        </div>

                                                                        {/* Content */}
                                                                        <div className="flex flex-col flex-1">
                                                                            <span className="text-sm font-semibold text-dark transition-colors relative">
                                                                                {subItem.title}
                                                                                <span className="absolute right-1 top-1/2 -translate-y-1/2 lg:opacity-0 group-hover/item:opacity-100 transition-all duration-300 group-hover/item:-right-0">
                                                                                    <ArrowRight className="size-4" />
                                                                                </span>
                                                                            </span>
                                                                            <span className="text-xs text-neutral-500 font-normal leading-snug">
                                                                                {subItem.description}
                                                                            </span>
                                                                        </div>
                                                                    </Link>
                                                                ))}
                                                            </div>
                                                        </div>

                                                        {/* Services Column */}
                                                        <div className="lg:pl-8 lg:py-6 text-left">
                                                            <div className="mb-4 lg:mb-5 text-left mega-menu-heading">
                                                                <h3 className="text-md font-semibold text-dark">
                                                                    {megaMenuData.services.title}
                                                                </h3>
                                                                <p className="text-xs text-neutral-500 font-normal mt-0.5">
                                                                    {megaMenuData.services.subtitle}
                                                                </p>
                                                            </div>

                                                            <div className="flex flex-col gap-3">
                                                                {megaMenuData.services.items.map((subItem, subIndex) => (
                                                                    <Link
                                                                        key={subItem.title}
                                                                        href={subItem.href}
                                                                        onClick={closeMobileMenu}
                                                                        className="group/item fade-list-item flex items-center gap-3.5 lg:px-2 py-2 rounded-lg lg:hover:bg-madison-50 transition-all duration-200 text-left"
                                                                        style={{
                                                                            "--item-delay": `${(subIndex + megaMenuData.products.items.length) * 0.08 + 0.05}s`,
                                                                        }}
                                                                    >
                                                                        {/* Elevated Icon Box */}
                                                                        <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-white border border-neutral-200/90 shadow-[0_2px_8px_rgba(0,0,0,0.06),0_1px_2px_rgba(0,0,0,0.04)] flex items-center justify-center shrink-0 group-hover/item:border-neutral-300 group-hover/item:shadow-md transition-all duration-200">
                                                                            <ImageIcon className="size-5 text-neutral-800" strokeWidth={1.75} />
                                                                        </div>

                                                                        {/* Content */}
                                                                        <div className="flex flex-col flex-1">
                                                                            <span className="text-sm font-semibold text-dark transition-colors relative">
                                                                                {subItem.title}
                                                                                <span className="absolute right-1 top-0 lg:opacity-0 group-hover/item:opacity-100 transition-all duration-300 group-hover/item:-right-0">
                                                                                    <ArrowRight className="size-4" />
                                                                                </span>
                                                                            </span>
                                                                            <span className="text-[12.5px] text-neutral-500 font-normal leading-snug">
                                                                                {subItem.description}
                                                                            </span>
                                                                        </div>
                                                                    </Link>
                                                                ))}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </>
                            ) : (
                                /* Normal Navigation Item */
                                <Link
                                    href={item.href}
                                    onClick={closeMobileMenu}
                                    className="capitalize w-full lg:w-auto block lg:inline-block text-left lg:py-2 lg:px-3 rounded-md text-2xl lg:text-sm font-medium lg:font-semibold text-dark lg:hover:bg-madison-50 transition-colors"
                                >
                                    {item.label}
                                </Link>
                            )}
                        </div>
                    );
                })}
            </nav>

            {/* --- DESKTOP RIGHT BUTTONS --- */}
            <div className="flex items-center gap-3">
                {isAuthenticated ? (
                    <Button onClick={logout} className="capitalize py-2 px-3 rounded-md text-sm font-semibold text-dark hover:bg-madison-50 transition-colors border-0">
                        <CircleUserRound className="size-5" /> <span className="hidden lg:flex">Logout</span>
                    </Button>
                ) : (
                    <Button className="capitalize py-2 px-3 rounded-md text-sm font-semibold text-dark hover:bg-madison-50 transition-colors border-0" href="/login">
                        <CircleUserRound className="size-5" />
                        <span className="hidden lg:flex">Login</span>
                    </Button>
                )}


                {/* Request a Demo Button */}
                <Button
                    href={ctaUrl}
                    className="bg-madison-700 text-neutral-100 border-0 split-btn hover:shadow-[0px_0px_0px_2px_#80b9ff,0px_0.48175px_0.86715px_-1.41667px_rgba(0,0,0,0.16),0px_1.83083px_3.29549px_-2.83333px_rgba(0,0,0,0.14),0px_8px_14.4px_-4.25px_rgba(0,0,0,0.03)]"
                >
                    <span className="wave-text-inner flex">
                        {ctaText.split("").map((char, index) => (
                            <span
                                className="wave-char"
                                key={index}
                                style={{ "--i": index }}
                            >
                                <span>{char === " " ? "\u00A0" : char}</span>
                                <span>{char === " " ? "\u00A0" : char}</span>
                            </span>
                        ))}
                    </span>
                </Button>

                {/* --- MOBILE HAMBURGER BUTTON --- */}
                <button
                    onClick={() => {
                        if (isMobileMenuOpen) {
                            setOpenDropdown(null);
                        }
                        setIsMobileMenuOpen(!isMobileMenuOpen);
                    }}
                    aria-label="Toggle mobile menu"
                    className="lg:hidden flex flex-col items-center justify-center size-8 text-gray-900 focus:outline-none cursor-pointer"
                >
                    {!isMobileMenuOpen ?
                        <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M27.5 22C27.5 22.3647 27.3551 22.7144 27.0973 22.9723C26.8394 23.2301 26.4897 23.375 26.125 23.375H6.875C6.51033 23.375 6.16059 23.2301 5.90273 22.9723C5.64487 22.7144 5.5 22.3647 5.5 22C5.5 21.6353 5.64487 21.2856 5.90273 21.0277C6.16059 20.7699 6.51033 20.625 6.875 20.625H26.125C26.4897 20.625 26.8394 20.7699 27.0973 21.0277C27.3551 21.2856 27.5 21.6353 27.5 22ZM6.875 12.375H37.125C37.4897 12.375 37.8394 12.2301 38.0973 11.9723C38.3551 11.7144 38.5 11.3647 38.5 11C38.5 10.6353 38.3551 10.2856 38.0973 10.0277C37.8394 9.76987 37.4897 9.625 37.125 9.625H6.875C6.51033 9.625 6.16059 9.76987 5.90273 10.0277C5.64487 10.2856 5.5 10.6353 5.5 11C5.5 11.3647 5.64487 11.7144 5.90273 11.9723C6.16059 12.2301 6.51033 12.375 6.875 12.375ZM37.125 31.625H6.875C6.51033 31.625 6.16059 31.7699 5.90273 32.0277C5.64487 32.2856 5.5 32.6353 5.5 33C5.5 33.3647 5.64487 33.7144 5.90273 33.9723C6.16059 34.2301 6.51033 34.375 6.875 34.375H37.125C37.4897 34.375 37.8394 34.2301 38.0973 33.9723C38.3551 33.7144 38.5 33.3647 38.5 33C38.5 32.6353 38.3551 32.2856 38.0973 32.0277C37.8394 31.7699 37.4897 31.625 37.125 31.625Z" fill="black" />
                        </svg> : <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M35.3478 33.402C35.4756 33.5297 35.5769 33.6814 35.6461 33.8483C35.7152 34.0152 35.7508 34.1941 35.7508 34.3748C35.7508 34.5555 35.7152 34.7344 35.6461 34.9013C35.5769 35.0682 35.4756 35.2199 35.3478 35.3476C35.2201 35.4754 35.0684 35.5767 34.9015 35.6458C34.7346 35.715 34.5557 35.7506 34.375 35.7506C34.1944 35.7506 34.0155 35.715 33.8486 35.6458C33.6816 35.5767 33.53 35.4754 33.4022 35.3476L22 23.9437L10.5978 35.3476C10.3398 35.6056 9.98991 35.7506 9.62503 35.7506C9.26016 35.7506 8.91023 35.6056 8.65222 35.3476C8.39421 35.0896 8.24927 34.7397 8.24927 34.3748C8.24927 34.0099 8.39421 33.66 8.65222 33.402L20.0561 21.9998L8.65222 10.5976C8.39421 10.3396 8.24927 9.98966 8.24927 9.62479C8.24927 9.25991 8.39421 8.90998 8.65222 8.65198C8.91023 8.39397 9.26016 8.24902 9.62503 8.24902C9.98991 8.24902 10.3398 8.39397 10.5978 8.65198L22 20.0559L33.4022 8.65198C33.6602 8.39397 34.0102 8.24902 34.375 8.24902C34.7399 8.24902 35.0898 8.39397 35.3478 8.65198C35.6059 8.90998 35.7508 9.25991 35.7508 9.62479C35.7508 9.98966 35.6059 10.3396 35.3478 10.5976L23.9439 21.9998L35.3478 33.402Z" fill="black" />
                        </svg>}
                </button>



            </div>
        </>
    );
}
