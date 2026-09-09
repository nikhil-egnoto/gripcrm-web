import { ArrowRight, Minus, Plus } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import Button from "../ui/Button";

export default function Navbar() {
    const [isResourcesOpen, setIsResourcesOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const navigation = [
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
                    href: "/knowledge",
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
    const dropdownRef = useRef(null);

    // Close dropdown when clicking outside
    useEffect(() => {
        function handleClickOutside(event) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsResourcesOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    // Prevent background scrolling when mobile menu is open
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [isMobileMenuOpen]);

    const closeMobileMenu = () => {
        setIsResourcesOpen(false);
        setIsMobileMenuOpen(false);
    };

    return (
        <div className="flex grow md:justify-between justify-end">
            {/* --- DESKTOP / MOBILE NAVIGATION --- */}
            <nav className={`mobile-menu flex items-center gap-2 relative ${isMobileMenuOpen ? "open" : ""}`} ref={dropdownRef}>

                {navigation.map((item) => (
                    <div key={item.label} className="relative">

                        {item.dropdown ? (
                            <>
                                {/* Resources Button */}
                                <button
                                    type="button"
                                    onClick={() => setIsResourcesOpen((prev) => !prev)}
                                    className={`px-4 py-2 text-sm font-semibold flex items-center gap-1.5 cursor-pointer transition-all ${isResourcesOpen ? "text-neutral-900" : "text-neutral-500 hover:text-neutral-900"}`}>
                                    <span>{item.label}</span>

                                    {isResourcesOpen ? (
                                        <Minus className="size-4" />
                                    ) : (
                                        <Plus className="size-4" />
                                    )}
                                </button>

                                {/* Dropdown */}
                                <div className={`mobile-dropdown absolute top-full left-0 mt-4 w-80 sm:w-90 bg-white rounded-b-3xl px-8 sm:px-12 py-8 shadow-[0_20px_60px_rgba(0,0,0,0.18)] border border-gray-100 z-50 transition-all duration-300 ease-in-out transform origin-top-left ${isResourcesOpen ? "opacity-100 translate-y-0 scale-100 pointer-events-auto visible" : "opacity-0 -translate-y-2 md:scale-95 pointer-events-none invisible"}`}>

                                    <div className="flex flex-col gap-5">

                                        {item.dropdown.map((dropdownItem) => (
                                            <div key={dropdownItem.label}>

                                                {/* Main Item */}
                                                <a
                                                    href={dropdownItem.href}
                                                    onClick={closeMobileMenu}
                                                    className="text-sm font-semibold text-neutral-500 hover:text-neutral-900 transition-colors block"
                                                >
                                                    {dropdownItem.label}
                                                </a>

                                                {/* Children */}
                                                {dropdownItem.children?.length > 0 && (
                                                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 mt-1.5">
                                                        {dropdownItem.children.map(
                                                            (child) => (
                                                                <a
                                                                    key={child.label}
                                                                    href={child.href}
                                                                    onClick={closeMobileMenu}
                                                                    className="text-xs text-neutral-400 hover:text-neutral-900 transition-colors"
                                                                >
                                                                    {child.label}
                                                                </a>
                                                            )
                                                        )}
                                                    </div>
                                                )}
                                            </div>
                                        ))}

                                    </div>
                                </div>
                            </>
                        ) : (
                            /* Normal Navigation Item */
                            <a
                                href={item.href}
                                onClick={closeMobileMenu}
                                className="capitalize lg:px-4 px-3 py-2 rounded-lg text-sm font-semibold text-neutral-500 hover:text-neutral-900 transition-colors"
                            >
                                {item.label}
                            </a>
                        )}
                    </div>
                ))}

                <div className="md:hidden flex flex-col items-center gap-10">
                    {/* Login Button */}
                    <Button href="/login" className="text-sm font-semibold text-neutral-500 hover:text-neutral-900 capitalize inline-flex lg:px-4 px-3 py-2 transition-colors border-0" >Login</Button>

                    <Button className="flex! border-2 bg-neutral-900 text-neutral-100 hover:text-neutral-900 hover:bg-white" type="with-icon">
                        <span>
                            Request a Demo
                        </span>
                        <span className="w-5 h-5 rounded-full bg-white group-hover:bg-black text-black group-hover:text-white flex items-center justify-center text-xs shrink-0 group-hover:translate-x-0.5 transition-transform">
                            <ArrowRight className="size-4" />
                        </span>
                    </Button>
                </div>
            </nav>

            {/* --- DESKTOP RIGHT BUTTONS --- */}
            <div className="hidden md:flex items-center gap-3">
                {/* Login Button */}

                <Button className="bg-white border-2 text-neutral-900 hover:bg-neutral-900 hover:text-neutral-100" href="#login">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 0C12.6522 0 15.1959 1.05335 17.0713 2.92871C18.9467 4.80407 20 7.34784 20 10C20 12.6522 18.9467 15.1959 17.0713 17.0713C15.1959 18.9467 12.6522 20 10 20C7.34784 20 4.80407 18.9467 2.92871 17.0713C1.05335 15.1959 0 12.6522 0 10C0 7.34784 1.05335 4.80407 2.92871 2.92871C4.80407 1.05335 7.34784 0 10 0ZM10 1.25C8.35222 1.25009 6.73773 1.71569 5.34277 2.59277C3.94795 3.46985 2.82934 4.72313 2.11523 6.20801C1.40113 7.69294 1.1209 9.34912 1.30664 10.9863C1.49241 12.6236 2.13636 14.1757 3.16504 15.4629C4.05254 14.0329 6.00625 12.5 10 12.5C13.9937 12.5 15.9462 14.0316 16.835 15.4629C17.8636 14.1757 18.5076 12.6236 18.6934 10.9863C18.8791 9.34912 18.5989 7.69294 17.8848 6.20801C17.1707 4.72313 16.0521 3.46985 14.6572 2.59277C13.2623 1.71569 11.6478 1.25009 10 1.25ZM10 3.75C10.9946 3.75 11.9481 4.14537 12.6514 4.84863C13.3546 5.55189 13.75 6.50544 13.75 7.5C13.75 8.49456 13.3546 9.44811 12.6514 10.1514C11.9481 10.8546 10.9946 11.25 10 11.25C9.00544 11.25 8.05189 10.8546 7.34863 10.1514C6.64537 9.44811 6.25 8.49456 6.25 7.5C6.25 6.50544 6.64537 5.55189 7.34863 4.84863C8.05189 4.14537 9.00544 3.75 10 3.75Z" fill="currentColor" />
                    </svg>
                    <span>Login</span>
                </Button>


                {/* Request a Demo Button */}
                <Button className="bg-neutral-900 border-2 text-neutral-100 hover:text-neutral-900 hover:bg-neutral-100" type="with-icon">
                    <span className="relative z-1">
                        Request a Demo
                    </span>
                    <span className="w-5 h-5 rounded-full bg-white group-hover:bg-black text-black group-hover:text-white flex items-center justify-center text-xs shrink-0 group-hover:translate-x-0.5 transition-transform">
                        <ArrowRight className="size-4" />
                    </span>
                </Button>

            </div>

            {/* --- MOBILE HAMBURGER BUTTON (Matches Screenshot 2) --- */}
            <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle mobile menu"
                className="md:hidden flex flex-col items-center justify-center size-8 text-gray-900 focus:outline-none cursor-pointer"
            >
                {!isMobileMenuOpen ?
                    <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M27.5 22C27.5 22.3647 27.3551 22.7144 27.0973 22.9723C26.8394 23.2301 26.4897 23.375 26.125 23.375H6.875C6.51033 23.375 6.16059 23.2301 5.90273 22.9723C5.64487 22.7144 5.5 22.3647 5.5 22C5.5 21.6353 5.64487 21.2856 5.90273 21.0277C6.16059 20.7699 6.51033 20.625 6.875 20.625H26.125C26.4897 20.625 26.8394 20.7699 27.0973 21.0277C27.3551 21.2856 27.5 21.6353 27.5 22ZM6.875 12.375H37.125C37.4897 12.375 37.8394 12.2301 38.0973 11.9723C38.3551 11.7144 38.5 11.3647 38.5 11C38.5 10.6353 38.3551 10.2856 38.0973 10.0277C37.8394 9.76987 37.4897 9.625 37.125 9.625H6.875C6.51033 9.625 6.16059 9.76987 5.90273 10.0277C5.64487 10.2856 5.5 10.6353 5.5 11C5.5 11.3647 5.64487 11.7144 5.90273 11.9723C6.16059 12.2301 6.51033 12.375 6.875 12.375ZM37.125 31.625H6.875C6.51033 31.625 6.16059 31.7699 5.90273 32.0277C5.64487 32.2856 5.5 32.6353 5.5 33C5.5 33.3647 5.64487 33.7144 5.90273 33.9723C6.16059 34.2301 6.51033 34.375 6.875 34.375H37.125C37.4897 34.375 37.8394 34.2301 38.0973 33.9723C38.3551 33.7144 38.5 33.3647 38.5 33C38.5 32.6353 38.3551 32.2856 38.0973 32.0277C37.8394 31.7699 37.4897 31.625 37.125 31.625Z" fill="black" />
                    </svg> : <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M35.3478 33.402C35.4756 33.5297 35.5769 33.6814 35.6461 33.8483C35.7152 34.0152 35.7508 34.1941 35.7508 34.3748C35.7508 34.5555 35.7152 34.7344 35.6461 34.9013C35.5769 35.0682 35.4756 35.2199 35.3478 35.3476C35.2201 35.4754 35.0684 35.5767 34.9015 35.6458C34.7346 35.715 34.5557 35.7506 34.375 35.7506C34.1944 35.7506 34.0155 35.715 33.8486 35.6458C33.6816 35.5767 33.53 35.4754 33.4022 35.3476L22 23.9437L10.5978 35.3476C10.3398 35.6056 9.98991 35.7506 9.62503 35.7506C9.26016 35.7506 8.91023 35.6056 8.65222 35.3476C8.39421 35.0896 8.24927 34.7397 8.24927 34.3748C8.24927 34.0099 8.39421 33.66 8.65222 33.402L20.0561 21.9998L8.65222 10.5976C8.39421 10.3396 8.24927 9.98966 8.24927 9.62479C8.24927 9.25991 8.39421 8.90998 8.65222 8.65198C8.91023 8.39397 9.26016 8.24902 9.62503 8.24902C9.98991 8.24902 10.3398 8.39397 10.5978 8.65198L22 20.0559L33.4022 8.65198C33.6602 8.39397 34.0102 8.24902 34.375 8.24902C34.7399 8.24902 35.0898 8.39397 35.3478 8.65198C35.6059 8.90998 35.7508 9.25991 35.7508 9.62479C35.7508 9.98966 35.6059 10.3396 35.3478 10.5976L23.9439 21.9998L35.3478 33.402Z" fill="black" />
                    </svg>}



            </button>
        </div>
    );
}