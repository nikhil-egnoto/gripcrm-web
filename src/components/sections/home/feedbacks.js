"use client";

export default function FeedBacks() {
    const feedbackColumns = [
        // Column 1
        [
            {
                quote: "The experience at GripCRM has been great for our company, moreover it has also helped us to increase the weightage of our sales and advance our business operations and drive growth",
                name: "Josh Ponting",
                role: "CEO, Viking Metal Garage",
                avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=250&q=80"
            },
            {
                quote: "Grip CRM has completely transformed our sales process! We've cut down on manual tasks and can now focus on what matters—growing our business.",
                name: "John D.",
                role: "Metal Building Manufacturer",
                avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=250&q=80"
            },
            {
                quote: "We've improved project timelines and reduced errors since switching to Grip CRM. It's built for the unique demands of our industry- Managing multiple projects used to be chaotic, but with Grip CRM, we have everything under control.",
                name: "Tom Taker",
                role: "CEO, Viking Metal Garage",
                avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=250&q=80"
            }
        ],
        // Column 2
        [
            {
                quote: "We love how easy it is to track leads and customer interactions with Grip CRM. Our sales team is more efficient, and we've seen a significant boost in conversions!",
                name: "Emily R.",
                role: "Sales Director",
                avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=250&q=80"
            },
            {
                quote: "With Grip CRM, managing complex projects is so much easier.",
                name: "Sarah L.",
                role: "Construction Project Manager",
                avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=250&q=80"
            },
            {
                quote: "The industry-specific features are a game changer. Grip CRM understands the needs of metal building companies and makes our operations run smoothly.",
                name: "Mike S",
                role: "Steel Distributor",
                avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=250&q=80"
            }
        ],
        // Column 3
        [
            {
                quote: "Grip CRM's reporting tools have been invaluable. We now have clear insights into our performance, allowing us to make smarter decisions for future growth.",
                name: "Laura P.",
                role: "Operations Manager",
                avatar: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&w=250&q=80"
            },
            {
                quote: "Grip CRM has helped us provide better service to our clients. We can quickly pull up project details and give real-time updates, which has improved customer satisfaction.",
                name: "Dave M.",
                role: "CEO, Contractor",
                avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=250&q=80"
            },
            {
                quote: "I can't imagine going back to our old system. Grip CRM makes managing multiple projects so easy, and the integration with our workflow is seamless.",
                name: "Chris B.",
                role: "Project Coordinator",
                avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=250&q=80"
            }
        ]
    ];

    return (
        <section className="bg-blue-50 py-16 md:py-24 relative overflow-hidden">
            <div className="container mx-auto relative z-10 px-4">
                <div className="text-center mb-12 sm:mb-16">
                    <h2 className="font-spaceGrotesk text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-blue-500 leading-tight">
                        Trusted by Teams
                        <span className="block text-neutral-900">
                            That Build and Grow
                        </span>
                        <svg width="110" height="10" viewBox="0 0 110 10" fill="none" xmlns="http://www.w3.org/2000/svg" className="jsx-74b099b4c2caf5ab mx-auto mt-4"><path d="M55.4214 3.042C56.6044 2.94 79.4965 0.883309 91.9777 0.247303C97.256 -0.0306999 102.543 -0.0107027 107.775 0.0119642C108.546 0.0399645 109.831 0.643972 109.957 1.17664C110.146 2.00532 109.687 3.22 109.099 3.842C107.496 5.52202 105.364 6.02869 103.164 6.12003C95.0808 6.51403 86.9996 6.96804 78.9141 7.30271C58.3441 8.15405 37.7152 8.88805 17.1435 9.67939C13.1835 9.8434 9.16523 9.89006 5.20303 9.99406C3.22303 10.0761 1.54828 9.30873 0.399327 7.68204C-0.0599231 7.04337 -0.0967732 5.79002 0.155127 5.00201C0.359177 4.45534 1.39208 3.99467 2.05208 3.96734C19.5421 3.244 53.2131 1.89332 54.0695 1.81065C55.3169 1.69065 54.2378 3.14266 55.4208 3.04133L55.4214 3.042Z" fill="currentColor" className="jsx-74b099b4c2caf5ab"></path></svg>
                    </h2>
                </div>
            </div>

            <div className="feedback-section relative overflow-hidden py-2">
                {/* Left and Right Gradient Overlay Masks */}
                <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 sm:w-36 bg-linear-to-r from-blue-50 to-transparent z-10" />
                <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 sm:w-36 bg-linear-to-l from-blue-50 to-transparent z-10" />

                <div className="flex flex-col gap-6 sm:gap-8">
                    {feedbackColumns.map((column, colIdx) => (
                        <div key={colIdx} className="overflow-hidden w-full">
                            <div
                                className={`flex gap-6 ${colIdx % 2 === 1
                                    ? "animate-marquee-reverse"
                                    : "animate-marquee"
                                    }`}
                                style={{
                                    animationDuration: colIdx === 1 ? "45s" : colIdx === 2 ? "38s" : "40s"
                                }}
                            >
                                {[...column, ...column, ...column].map((item, itemIdx) => (
                                    <div
                                        key={itemIdx}
                                        className="w-80 sm:w-96 md:w-105 shrink-0 bg-white rounded-2xl p-6 lg:p-8 border border-black/25 flex flex-col justify-between hover:shadow-md transition-shadow duration-300"
                                    >
                                        <p className="text-black text-base md:text-lg leading-relaxed mb-6 font-normal">
                                            "{item.quote}"
                                        </p>
                                        <div className="flex items-center gap-3.5 mt-auto">
                                            <img
                                                src={item.avatar}
                                                alt={item.name}
                                                className="size-14 rounded-xl object-cover shrink-0"
                                            />
                                            <div>
                                                <h4 className="font-bold text-black text-base sm:text-lg leading-tight">
                                                    {item.name}
                                                </h4>
                                                <p className="text-xs sm:text-sm text-black/75 font-medium mt-1">
                                                    {item.role}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

