"use client";

import { useState } from "react";
import { ArrowRight, Phone, Mail, Check } from "lucide-react"; 3
import Image from "next/image";
import Button from "@/components/ui/Button";

export default function Contact() {
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
        agreeTerms: false,
    });

    const [submitted, setSubmitted] = useState(false);

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.agreeTerms) {
            alert("Please agree to the Terms & Conditions before submitting.");
            return;
        }
        setSubmitted(true);
        setTimeout(() => {
            setSubmitted(false);
            setFormData({
                fullName: "",
                email: "",
                phone: "",
                subject: "",
                message: "",
                agreeTerms: false,
            });
        }, 4000);
    };

    const selectTopic = (topicSubject) => {
        setFormData((prev) => ({ ...prev, subject: topicSubject }));
        const formElement = document.getElementById("contact-form-card");
        if (formElement) {
            formElement.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <main className="bg-blue-50 py-16 md:py-24 px-4 relative overflow-hidden">
            <div className="container mx-auto space-y-15">
                {/* Top Header Section */}
                <div className="text-center">
                    <h1 className="font-spaceGrotesk text-4xl lg:text-5xl leading-[1.2] font-bold text-neutral-900">
                        Contact Us
                        <svg width="110" height="10" viewBox="0 0 110 10" fill="none" xmlns="http://www.w3.org/2000/svg" className="mx-auto mt-4 text-orange-500"><path d="M55.4214 3.042C56.6044 2.94 79.4965 0.883309 91.9777 0.247303C97.256 -0.0306999 102.543 -0.0107027 107.775 0.0119642C108.546 0.0399645 109.831 0.643972 109.957 1.17664C110.146 2.00532 109.687 3.22 109.099 3.842C107.496 5.52202 105.364 6.02869 103.164 6.12003C95.0808 6.51403 86.9996 6.96804 78.9141 7.30271C58.3441 8.15405 37.7152 8.88805 17.1435 9.67939C13.1835 9.8434 9.16523 9.89006 5.20303 9.99406C3.22303 10.0761 1.54828 9.30873 0.399327 7.68204C-0.0599231 7.04337 -0.0967732 5.79002 0.155127 5.00201C0.359177 4.45534 1.39208 3.99467 2.05208 3.96734C19.5421 3.244 53.2131 1.89332 54.0695 1.81065C55.3169 1.69065 54.2378 3.14266 55.4208 3.04133L55.4214 3.042Z" fill="currentColor"></path></svg>
                    </h1>
                    <p className="mt-10 m-auto text-neutral-700 text-base leading-[1.9] font-normal">
                        Get help with GripCRM, report an issue, request a feature, or reach out to our team.
                    </p>
                </div>

                {/* Main Grid: Left Support Cards & Right Form Card */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
                    {/* Left Column - 3 Cards */}
                    <div className="lg:col-span-6 flex flex-col justify-between gap-5">
                        {/* Card 1: Bug Reports */}
                        <div className="bg-white rounded-2xl p-4 sm:p-8 flex sm:flex-row flex-col sm:items-start items-center sm:text-start text-center gap-5">
                            <div className="w-46 h-32 flex items-center justify-center shrink-0 p-3">
                                <Image src="/images/contact/bug-reports.svg" alt="Bug Reports" width={96} height={96} />
                            </div>
                            <div className="flex-1">
                                <h3 className="text-2xl sm:text-3xl font-semibold text-neutral-900 mb-3">
                                    Bug Reports
                                </h3>
                                <p className="text-base text-neutral-700 mb-6 leading-relaxed">
                                    Something not working as expected?
                                </p>

                                <Button onClick={() => selectTopic("Bug Report")} className="bg-white border-2 text-neutral-900 hover:bg-neutral-900 hover:text-neutral-100 py-2! sm:ml-0 mx-auto" type="with-icon">
                                    <span className="relative z-1">
                                        Report a Bug
                                    </span>
                                    <span className="w-5 h-5 rounded-full bg-neutral-900 text-white flex items-center justify-center text-xs shrink-0 group-hover:bg-white group-hover:text-neutral-900 transition-transform">
                                        <ArrowRight className="size-4" />
                                    </span>
                                </Button>
                            </div>
                        </div>



                        {/* Card 2: Request a Feature */}
                        <div className="bg-white rounded-2xl p-4 sm:p-8 flex sm:flex-row flex-col sm:items-start items-center sm:text-start text-center gap-5">
                            <div className="w-46 h-32 flex items-center justify-center shrink-0 p-3">
                                <Image src="/images/contact/features-request.svg" alt="Request a Feature" width={96} height={96} />
                            </div>
                            <div className="flex-1">
                                <h3 className="text-2xl sm:text-3xl font-semibold text-neutral-900 mb-3">
                                    Request a Feature
                                </h3>
                                <p className="text-base text-neutral-700 mb-6 leading-relaxed">
                                    Have an idea? Share your suggestion with us.
                                </p>

                                <Button onClick={() => selectTopic("Feature Request")} className="bg-white border-2 text-neutral-900 hover:bg-neutral-900 hover:text-neutral-100 py-2! sm:ml-0 mx-auto" type="with-icon">
                                    <span className="relative z-1">
                                        Request a Feature
                                    </span>
                                    <span className="w-5 h-5 rounded-full bg-neutral-900 text-white flex items-center justify-center text-xs shrink-0 group-hover:bg-white group-hover:text-neutral-900 transition-transform">
                                        <ArrowRight className="size-4" />
                                    </span>
                                </Button>
                            </div>
                        </div>

                        {/* Card 3: Account & Billing */}

                        <div className="bg-white rounded-2xl p-4 sm:p-8 flex sm:flex-row flex-col sm:items-start items-center sm:text-start text-center gap-5">
                            <div className="w-46 h-32 flex items-center justify-center shrink-0 p-3">
                                <Image src="/images/contact/account-billing.svg" alt="Account & Billing" width={96} height={96} />
                            </div>
                            <div className="flex-1">
                                <h3 className="text-2xl sm:text-3xl font-semibold text-neutral-900 mb-3">
                                    Account & Billing
                                </h3>
                                <p className="text-base text-neutral-700 mb-6 leading-relaxed">
                                    Need help with your account, subscription, or payments?
                                </p>

                                <Button onClick={() => selectTopic("Account & Billing")} className="bg-white border-2 text-neutral-900 hover:bg-neutral-900 hover:text-neutral-100 py-2! sm:ml-0 mx-auto" type="with-icon">
                                    <span className="relative z-1">
                                        Get Support
                                    </span>
                                    <span className="w-5 h-5 rounded-full bg-neutral-900 text-white flex items-center justify-center text-xs shrink-0 group-hover:bg-white group-hover:text-neutral-900 transition-transform">
                                        <ArrowRight className="size-4" />
                                    </span>
                                </Button>
                            </div>
                        </div>

                    </div>

                    {/* Right Column - Send Us a Message Form Card */}
                    <div
                        id="contact-form-card"
                        className="moving-gradient relative overflow-hidden lg:col-span-6 bg-[#302a46] rounded-2xl py-10 px-8 md:px-18 md:py-15 text-white flex flex-col justify-between"
                    >
                        <div className="relative z-10 h-full">
                            <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4 tracking-tight">
                                Send Us a Message
                            </h2>
                            <p className="text-neutral-300 text-base mb-6">
                                Tell us how we can help. Our team will review your message.
                            </p>

                            {submitted ? (
                                <div className="h-[80%] flex flex-col justify-center items-center">
                                    {/* <div className="size-30 rounded-full bg-neutral-900 text-neutral-50 flex items-center justify-center mx-auto mb-5">
                                        <Check className="w-16 h-16" />
                                    </div> */}
                                    <h4 className="text-lg font-bold text-white mb-3">Message Sent Successfully!</h4>
                                    <p className="text-xs text-neutral-100">
                                        Thank you for reaching out. Our team will respond to your email shortly.
                                    </p>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-4">
                                    <div>
                                        <input
                                            type="text"
                                            name="fullName"
                                            value={formData.fullName}
                                            onChange={handleInputChange}
                                            required
                                            placeholder="Full Name *"
                                            className="w-full bg-neutral-900 border border-neutral-300 rounded-md px-3 py-4 text-sm text-neutral-300 focus:outline-nonetransition font-normal"
                                        />
                                    </div>

                                    <div>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            required
                                            placeholder="Email Address *"
                                            className="w-full bg-neutral-900 border border-neutral-300 rounded-md px-3 py-4 text-sm text-neutral-300 focus:outline-nonetransition font-normal"
                                        />
                                    </div>

                                    <div>
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleInputChange}
                                            placeholder="Phone Number"
                                            className="w-full bg-neutral-900 border border-neutral-300 rounded-md px-3 py-4 text-sm text-neutral-300 focus:outline-nonetransition font-normal"
                                        />
                                    </div>

                                    <div>
                                        <input
                                            type="text"
                                            name="subject"
                                            value={formData.subject}
                                            onChange={handleInputChange}
                                            required
                                            placeholder="Subject *"
                                            className="w-full bg-neutral-900 border border-neutral-300 rounded-md px-3 py-4 text-sm text-neutral-300 focus:outline-nonetransition font-normal"
                                        />
                                    </div>

                                    <div>
                                        <textarea
                                            name="message"
                                            rows={4}
                                            value={formData.message}
                                            onChange={handleInputChange}
                                            required
                                            placeholder="How Can We Help? *"
                                            className="w-full bg-neutral-900 border border-neutral-300 rounded-md px-3 py-4 text-sm text-neutral-300 focus:outline-nonetransition font-normal resize-none"
                                        ></textarea>
                                    </div>

                                    <div className="flex items-center gap-2">
                                        <span className="relative border-2 border-neutral-300 size-5 rounded-sm flex items-center justify-center">
                                            <input
                                                type="checkbox"
                                                id="agreeTerms"
                                                name="agreeTerms"
                                                checked={formData.agreeTerms}
                                                onChange={handleInputChange}
                                                className="opacity-0 w-full h-full cursor-pointer absolute"
                                            />
                                            {formData.agreeTerms && <Check className="w-4 h-4 text-neutral-300" />}
                                        </span>
                                        <label
                                            htmlFor="agreeTerms"
                                            className="text-sm text-neutral-300 select-none cursor-pointer"
                                        >
                                            I agree to the Terms &amp; Conditions.
                                        </label>
                                    </div>

                                    <Button onClick={() => selectTopic("Account & Billing")} className="bg-neutral-100 border-2 border-white text-neutral-900 hover:bg-transparent hover:text-neutral-100 w-full justify-center" type="with-icon submit">
                                        <span className="relative z-1">
                                            Submit
                                        </span>
                                        <span className="w-5 h-5 rounded-full bg-neutral-900 text-white flex items-center justify-center text-xs shrink-0 group-hover:bg-white group-hover:text-neutral-900 transition-transform">
                                            <ArrowRight className="size-4" />
                                        </span>
                                    </Button>

                                </form>
                            )}
                        </div>
                    </div>
                </div>

                {/* Bottom Section - Headquarters Card */}
                <div className="bg-white rounded-2xl p-6 sm:p-10 grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
                    {/* Map Preview */}
                    <div className="md:col-span-6 w-full h-65 md:h-86 rounded-2xl overflow-hidden border border-neutral-100 relative">
                        <iframe
                            title="GripCRM Headquarters Map"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.077224203407!2d75.76100527632616!3d26.899479976657962!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db467c6999999%3A0x6b19a1db4b7c1234!2sMetropolis%20Tower%2C%20Ajmer%20Rd%2C%20Purani%20Chungi%2C%20Jaipur%2C%20Rajasthan%20302019!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="w-full h-full grayscale-[0.1] contrast-[1.05]"
                        ></iframe>
                    </div>

                    {/* Address & Contact Info */}
                    <div className="md:col-span-6 flex flex-col justify-center space-y-8">
                        <div>
                            <h3 className="text-2xl font-semibold text-neutral-900 mb-4">
                                Headquarters
                            </h3>
                            <p className="text-base/8 text-neutral-700 font-medium">
                                119, First Floor, Metropolis Tower,<br />
                                Ajmer Rd, Purani Chungi, Jaipur, Rajasthan 302019
                            </p>
                        </div>

                        <div>
                            <p className="text-base font-medium text-neutral-700 mb-4">
                                Phone
                            </p>
                            <div className="flex items-center gap-3">
                                <div className="size-11 rounded-lg bg-neutral-100 text-neutral-900 flex items-center justify-center shrink-0">
                                    <Phone className="size-6" />
                                </div>
                                <a
                                    href="tel:+919461349253"
                                    className="text-lg md:text-2xl font-semibold text-neutral-900 transition-colors"
                                >
                                    +91 94613 49253
                                </a>
                            </div>
                        </div>

                        <div>
                            <p className="text-base font-medium text-neutral-700 mb-4">
                                Email
                            </p>
                            <div className="flex items-center gap-3">
                                <div className="size-11 rounded-lg bg-neutral-100 text-neutral-900 flex items-center justify-center shrink-0">
                                    <Mail className="size-6" />
                                </div>
                                <a
                                    href="mailto:info@gripcrm.com"
                                    className="text-lg md:text-2xl font-semibold text-neutral-900 transition-colors"
                                >
                                    info@gripcrm.com
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
