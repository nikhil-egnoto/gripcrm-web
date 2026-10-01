"use client";

import { useState, useEffect } from "react";
import { ArrowRight, Phone, Mail, Check, AlertCircle, Loader2, CheckCircle2 } from "lucide-react";
import Image from "next/image";
import Button from "@/components/ui/Button";
import { fetchContactData, submitContactForm } from "@/lib/api";
import { motion } from "framer-motion";
import { animationContent } from "@/components/providers/motionAnimation";
import toast from "react-hot-toast";

export default function Contact() {
    const [fields, setFields] = useState(null);

    useEffect(() => {
        const getContactData = async () => {
            const data = await fetchContactData();
            if (data?.fields || data?.contact) {
                setFields(data.fields || data.contact);
            }
        };

        getContactData();
    }, []);

    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
        agreeTerms: false,
    });

    const [errors, setErrors] = useState({});
    const [touched, setTouched] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [submitError, setSubmitError] = useState("");

    // Field-level validation logic
    const validateField = (name, value = formData) => {
        let error = "";
        const trimmed = typeof value === "string" ? value.trim() : value;

        switch (name) {
            case "fullName":
                if (!trimmed) {
                    error = "Full Name is required.";
                } else if (trimmed.length < 2) {
                    error = "Full Name must be at least 2 characters.";
                }
                break;

            case "email":
                if (!trimmed) {
                    error = "Email address is required.";
                } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed)) {
                    error = "Please enter a valid email address (e.g. name@example.com).";
                }
                break;

            case "phone":
                if (trimmed && !/^[\d\s+\-()]{7,20}$/.test(trimmed)) {
                    error = "Please enter a valid phone number (digits and dashes/spaces).";
                }
                break;

            case "subject":
                if (!trimmed) {
                    error = "Subject is required.";
                } else if (trimmed.length < 2) {
                    error = "Subject must be at least 2 characters.";
                }
                break;

            case "message":
                if (!trimmed) {
                    error = "Message is required.";
                } else if (trimmed.length < 10) {
                    error = `Message must be at least 10 characters (currently ${trimmed.length}).`;
                }
                break;

            case "agreeTerms":
                if (!value) {
                    error = "You must agree to the Terms & Conditions to submit.";
                }
                break;

            default:
                break;
        }

        return error;
    };

    const validateAll = (data = formData) => {
        const newErrors = {};
        const fieldsToValidate = ["fullName", "email", "phone", "subject", "message", "agreeTerms"];

        fieldsToValidate.forEach((fieldName) => {
            const err = validateField(fieldName, data[fieldName], data);
            if (err) {
                newErrors[fieldName] = err;
            }
        });

        return newErrors;
    };

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        const fieldValue = type === "checkbox" ? checked : value;

        setFormData((prev) => {
            const updated = {
                ...prev,
                [name]: fieldValue,
            };

            // If field is already touched, run validation live
            if (touched[name]) {
                const err = validateField(name, fieldValue, updated);
                setErrors((prevErr) => ({
                    ...prevErr,
                    [name]: err,
                }));
            }

            return updated;
        });

        if (submitError) {
            setSubmitError("");
        }
    };

    const handleBlur = (e) => {
        const { name, value, type, checked } = e.target;
        const fieldValue = type === "checkbox" ? checked : value;

        setTouched((prev) => ({ ...prev, [name]: true }));
        const err = validateField(name, fieldValue, formData);
        setErrors((prev) => ({ ...prev, [name]: err }));
    };

    const selectTopic = (topicSubject) => {
        setFormData((prev) => ({ ...prev, subject: topicSubject }));
        setTouched((prev) => ({ ...prev, subject: true }));
        setErrors((prev) => ({ ...prev, subject: "" }));

        const formElement = document.getElementById("contact-form-card");
        if (formElement) {
            formElement.scrollIntoView({ behavior: "smooth" });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Mark all fields as touched
        setTouched({
            fullName: true,
            email: true,
            phone: true,
            subject: true,
            message: true,
            agreeTerms: true,
        });

        const validationErrors = validateAll(formData);
        setErrors(validationErrors);

        if (Object.keys(validationErrors).length > 0) {
            toast.dismiss();
            toast.error("Please fill in all required fields correctly.");
            // Scroll to the first error
            const firstErrorField = Object.keys(validationErrors)[0];
            const el = document.querySelector(`[name="${firstErrorField}"]`);
            if (el) {
                el.focus();
            }
            return;
        }

        setIsSubmitting(true);
        setSubmitError("");

        try {
            const result = await submitContactForm(formData);

            if (result && result.success) {
                toast.dismiss();
                toast.success(result.message || "Quote request submitted successfully!");
                setSubmitted(false);

                setFormData({
                    fullName: "",
                    email: "",
                    phone: "",
                    subject: "",
                    message: "",
                    agreeTerms: false,
                });
                setErrors({});
                setTouched({});
            } else {
                const errorMessage = result?.message || "Failed to submit form. Please check your entries.";
                setSubmitError(errorMessage);
                toast.dismiss();
                toast.error(errorMessage);
                if (result?.errors) {
                    setErrors((prev) => ({ ...prev, ...result.errors }));
                }
            }
        } catch (err) {
            const errorMessage = err?.message || "An unexpected error occurred. Please try again.";
            setSubmitError(errorMessage);
            toast.dismiss();
            toast.error(errorMessage);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <main className="bg-blue-50 py-16 md:py-24 px-4 sm:px-8 lg:px-12 relative overflow-hidden">
            <div className="container mx-auto space-y-10 md:space-y-15">
                {/* Top Header Section */}
                <div className="text-center">
                    <motion.h1 {...animationContent} className="font-spaceGrotesk text-4xl lg:text-5xl leading-[1.2] font-bold text-neutral-900">
                        {fields?.contact_hero_title || "Contact"}
                        <svg width="110" height="10" viewBox="0 0 110 10" fill="none" xmlns="http://www.w3.org/2000/svg" className="mx-auto mt-4 text-orange-500"><path d="M55.4214 3.042C56.6044 2.94 79.4965 0.883309 91.9777 0.247303C97.256 -0.0306999 102.543 -0.0107027 107.775 0.0119642C108.546 0.0399645 109.831 0.643972 109.957 1.17664C110.146 2.00532 109.687 3.22 109.099 3.842C107.496 5.52202 105.364 6.02869 103.164 6.12003C95.0808 6.51403 86.9996 6.96804 78.9141 7.30271C58.3441 8.15405 37.7152 8.88805 17.1435 9.67939C13.1835 9.8434 9.16523 9.89006 5.20303 9.99406C3.22303 10.0761 1.54828 9.30873 0.399327 7.68204C-0.0599231 7.04337 -0.0967732 5.79002 0.155127 5.00201C0.359177 4.45534 1.39208 3.99467 2.05208 3.96734C19.5421 3.244 53.2131 1.89332 54.0695 1.81065C55.3169 1.69065 54.2378 3.14266 55.4208 3.04133L55.4214 3.042Z" fill="currentColor"></path></svg>
                    </motion.h1>
                    <motion.p {...animationContent} className="mt-10 m-auto text-neutral-700 text-base leading-[1.9] font-normal">
                        {fields?.contact_hero_subtitle || "Get help with GripCRM, report an issue, request a feature, or reach out to our team."}
                    </motion.p>
                </div>

                {/* Main Grid: Left Support Cards & Right Form Card */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
                    {/* Left Column - 3 Cards */}
                    <div className="lg:col-span-6 flex flex-col justify-between gap-5">
                        {/* Card 1: Bug Reports */}
                        <motion.div {...animationContent} className="bg-white rounded-2xl p-4 sm:p-8 flex sm:flex-row flex-col sm:items-start items-center sm:text-start text-center gap-5 shadow-sm border border-neutral-100">
                            <div className="w-46 h-32 flex items-center justify-center shrink-0">
                                <Image src="/images/contact/bug-reports.svg" alt="Bug Reports" width={96} height={96} />
                            </div>
                            <div className="flex-1">
                                <h3 className="text-2xl sm:text-3xl font-semibold text-neutral-900 mb-3">
                                    {fields?.contact_topics?.[0] || "Bug Reports"}
                                </h3>
                                <p className="text-base text-neutral-700 mb-6 leading-relaxed">
                                    Something not working as expected? Let our engineering team know.
                                </p>

                                <Button onClick={() => selectTopic(fields?.contact_topics?.[0] || "Bug Reports")} className="bg-white border-2 text-neutral-900 hover:bg-black/10 hover:border-neutral-700 py-2! sm:ml-0 mx-auto" type="with-icon">
                                    <span className="relative z-1">
                                        {fields?.contact_topics?.[0] || "Bug Reports"}
                                    </span>
                                    <span className="w-5 h-5 rounded-full bg-neutral-900 text-white flex items-center justify-center text-xs shrink-0 group-hover:translate-x-0.5 transition-transform">
                                        <ArrowRight className="size-4" />
                                    </span>
                                </Button>
                            </div>
                        </motion.div>

                        {/* Card 2: Request a Feature */}
                        <motion.div {...animationContent} className="bg-white rounded-2xl p-4 sm:p-8 flex sm:flex-row flex-col sm:items-start items-center sm:text-start text-center gap-5 shadow-sm border border-neutral-100">
                            <div className="w-46 h-32 flex items-center justify-center shrink-0">
                                <Image src="/images/contact/features-request.svg" alt="Request a Feature" width={96} height={96} />
                            </div>
                            <div className="flex-1">
                                <h3 className="text-2xl sm:text-3xl font-semibold text-neutral-900 mb-3">
                                    {fields?.contact_topics?.[1] || "Request a Feature"}
                                </h3>
                                <p className="text-base text-neutral-700 mb-6 leading-relaxed">
                                    Have an idea? Share your suggestion with our product designers.
                                </p>

                                <Button onClick={() => selectTopic(fields?.contact_topics?.[1] || "Request a Feature")} className="bg-white border-2 text-neutral-900 hover:bg-black/10 hover:border-neutral-700 py-2! sm:ml-0 mx-auto" type="with-icon">
                                    <span className="relative z-1">
                                        {fields?.contact_topics?.[1] || "Request a Feature"}
                                    </span>
                                    <span className="w-5 h-5 rounded-full bg-neutral-900 text-white flex items-center justify-center text-xs shrink-0 group-hover:translate-x-0.5 transition-transform">
                                        <ArrowRight className="size-4" />
                                    </span>
                                </Button>
                            </div>
                        </motion.div>

                        {/* Card 3: Account & Billing */}
                        <motion.div {...animationContent} className="bg-white rounded-2xl p-4 sm:p-8 flex sm:flex-row flex-col sm:items-start items-center sm:text-start text-center gap-5 shadow-sm border border-neutral-100">
                            <div className="w-46 h-32 flex items-center justify-center shrink-0">
                                <Image src="/images/contact/account-billing.svg" alt="Account & Billing" width={96} height={96} />
                            </div>
                            <div className="flex-1">
                                <h3 className="text-2xl sm:text-3xl font-semibold text-neutral-900 mb-3">
                                    {fields?.contact_topics?.[2] || "Account & Billing"}
                                </h3>
                                <p className="text-base text-neutral-700 mb-6 leading-relaxed">
                                    Need help with your account, subscription, invoices, or payments?
                                </p>

                                <Button onClick={() => selectTopic(fields?.contact_topics?.[2] || "Account & Billing")} className="bg-white border-2 text-neutral-900 hover:bg-black/10 hover:border-neutral-700 py-2! sm:ml-0 mx-auto" type="with-icon">
                                    <span className="relative z-1">
                                        {fields?.contact_topics?.[2] || "Account & Billing"}
                                    </span>
                                    <span className="w-5 h-5 rounded-full bg-neutral-900 text-white flex items-center justify-center text-xs shrink-0 group-hover:translate-x-0.5 transition-transform">
                                        <ArrowRight className="size-4" />
                                    </span>
                                </Button>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Column - Send Us a Message Form Card */}
                    <motion.div {...animationContent}
                        id="contact-form-card"
                        className="moving-gradient relative overflow-hidden lg:col-span-6 bg-[#302a46] rounded-2xl py-5 sm:py-10 px-4 sm:px-8 md:px-14 md:py-12 text-white flex flex-col justify-between shadow-xl"
                    >
                        <div className="relative z-10 h-full flex flex-col justify-center">
                            <div className="mb-4">
                                <h2 className="text-2xl md:text-3xl font-semibold text-white mb-2 tracking-tight">
                                    Send Us a Message
                                </h2>
                                <p className="text-neutral-300 text-sm md:text-base mb-6">
                                    Tell us how we can help. Our team will review and reply within 24 hours.
                                </p>
                            </div>

                            {/* Global Error Banner */}
                            {submitError && (
                                <div className="mb-4 p-3.5 bg-red-900/40 border border-red-500/60 rounded-lg flex items-start gap-2.5 text-sm text-red-200">
                                    <AlertCircle className="w-5 h-5 shrink-0 text-red-400 mt-0.5" />
                                    <div className="flex-1">{submitError}</div>
                                </div>
                            )}

                            {submitted ? (
                                null
                            ) : (
                                <form onSubmit={handleSubmit} noValidate className="space-y-4">
                                    {/* Full Name */}
                                    <div>
                                        <input
                                            type="text"
                                            name="fullName"
                                            value={formData.fullName}
                                            onChange={handleInputChange}
                                            onBlur={handleBlur}
                                            disabled={isSubmitting}
                                            placeholder="Full Name *"
                                            className={`w-full bg-black/70 rounded-md px-3.5 py-3.5 text-sm text-white placeholder-neutral-400 transition-colors focus:outline-none border ${touched.fullName && errors.fullName
                                                ? "border-red-500 focus:border-red-400"
                                                : "border-neutral-300"
                                                }`}
                                        />
                                        {touched.fullName && errors.fullName && (
                                            <p className="text-red-400 text-xs mt-1.5 flex items-center gap-1">
                                                <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                                                <span>{errors.fullName}</span>
                                            </p>
                                        )}
                                    </div>

                                    {/* Email */}
                                    <div>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            onBlur={handleBlur}
                                            disabled={isSubmitting}
                                            placeholder="Email Address *"
                                            className={`w-full bg-black/70 rounded-md px-3.5 py-3.5 text-sm text-white placeholder-neutral-400 transition-colors focus:outline-none border ${touched.email && errors.email
                                                ? "border-red-500 focus:border-red-400"
                                                : "border-neutral-300"
                                                }`}
                                        />
                                        {touched.email && errors.email && (
                                            <p className="text-red-400 text-xs mt-1.5 flex items-center gap-1">
                                                <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                                                <span>{errors.email}</span>
                                            </p>
                                        )}
                                    </div>

                                    {/* Phone Number (Optional) */}
                                    <div>
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleInputChange}
                                            onBlur={handleBlur}
                                            disabled={isSubmitting}
                                            placeholder="Phone Number (Optional)"
                                            className={`w-full bg-black/70 rounded-md px-3.5 py-3.5 text-sm text-white placeholder-neutral-400 transition-colors focus:outline-none border ${touched.phone && errors.phone
                                                ? "border-red-500 focus:border-red-400"
                                                : "border-neutral-300"
                                                }`}
                                        />
                                        {touched.phone && errors.phone && (
                                            <p className="text-red-400 text-xs mt-1.5 flex items-center gap-1">
                                                <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                                                <span>{errors.phone}</span>
                                            </p>
                                        )}
                                    </div>

                                    {/* Subject / Topic */}
                                    <div>
                                        <input
                                            type="text"
                                            name="subject"
                                            value={formData.subject}
                                            onChange={handleInputChange}
                                            onBlur={handleBlur}
                                            disabled={isSubmitting}
                                            placeholder="Subject / Topic *"
                                            className={`w-full bg-black/70 rounded-md px-3.5 py-3.5 text-sm text-white placeholder-neutral-400 transition-colors focus:outline-none border ${touched.subject && errors.subject
                                                ? "border-red-500 focus:border-red-400"
                                                : "border-neutral-300"
                                                }`}
                                        />
                                        {touched.subject && errors.subject && (
                                            <p className="text-red-400 text-xs mt-1.5 flex items-center gap-1">
                                                <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                                                <span>{errors.subject}</span>
                                            </p>
                                        )}
                                    </div>

                                    {/* Message */}
                                    <div>
                                        <textarea
                                            name="message"
                                            rows={4}
                                            value={formData.message}
                                            onChange={handleInputChange}
                                            onBlur={handleBlur}
                                            disabled={isSubmitting}
                                            placeholder="How Can We Help? (Minimum 10 characters) *"
                                            className={`w-full bg-black/70 rounded-md px-3.5 py-3 text-sm text-white placeholder-neutral-400 transition-colors focus:outline-none resize-none border ${touched.message && errors.message
                                                ? "border-red-500 focus:border-red-400"
                                                : "border-neutral-300"
                                                }`}
                                        ></textarea>
                                        {touched.message && errors.message && (
                                            <p className="text-red-400 text-xs mt-1.5 flex items-center gap-1">
                                                <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                                                <span>{errors.message}</span>
                                            </p>
                                        )}
                                    </div>

                                    {/* Terms and Conditions Checkbox */}
                                    <div>
                                        <div className="flex items-center gap-2.5 pt-1">
                                            <label htmlFor="agreeTerms" className="relative flex items-center justify-center size-5 cursor-pointer select-none">
                                                <input
                                                    type="checkbox"
                                                    id="agreeTerms"
                                                    name="agreeTerms"
                                                    checked={formData.agreeTerms}
                                                    onChange={handleInputChange}
                                                    onBlur={handleBlur}
                                                    disabled={isSubmitting}
                                                    className="sr-only peer"
                                                />
                                                <span className={`w-5 h-5 rounded border flex items-center justify-center transition-colors ${formData.agreeTerms
                                                    ? "bg-white text-neutral-950 border-white"
                                                    : touched.agreeTerms && errors.agreeTerms
                                                        ? "border-red-500 bg-neutral-900"
                                                        : "border-neutral-400 bg-neutral-900"
                                                    }`}>
                                                    {formData.agreeTerms && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                                                </span>
                                            </label>
                                            <label
                                                htmlFor="agreeTerms"
                                                className="text-xs md:text-sm text-neutral-300 select-none cursor-pointer"
                                            >
                                                I agree to the <span className="underline hover:text-white">Terms &amp; Conditions</span> and Privacy Policy.
                                            </label>
                                        </div>
                                        {touched.agreeTerms && errors.agreeTerms && (
                                            <p className="text-red-400 text-xs mt-1.5 flex items-center gap-1">
                                                <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                                                <span>{errors.agreeTerms}</span>
                                            </p>
                                        )}
                                    </div>

                                    {/* Submit Button */}
                                    <div className="pt-2">
                                        <button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className="group w-full bg-white hover:bg-white/85 text-neutral-900 font-semibold py-3.5 px-6 rounded-lg flex items-center justify-center gap-2 transition-all cursor-pointer shadow-md"
                                        >
                                            {isSubmitting ? (
                                                <>
                                                    <Loader2 className="w-4 h-4 animate-spin text-neutral-900" />
                                                    <span>Sending Message...</span>
                                                </>
                                            ) : (
                                                <>
                                                    <span>Send Message</span>
                                                    <span className="w-5 h-5 rounded-full bg-neutral-900 text-white flex items-center justify-center text-xs shrink-0 group-hover:translate-x-0.5 transition-transform">
                                                        <ArrowRight className="size-3.5" />
                                                    </span>
                                                </>
                                            )}
                                        </button>
                                    </div>
                                </form>
                            )}
                        </div>
                    </motion.div>
                </div>

                {/* Bottom Section - Headquarters Card */}
                <motion.div {...animationContent} className="bg-white rounded-2xl p-6 sm:p-10 grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
                    {/* Map Preview */}
                    <div className="md:col-span-6 w-full h-65 md:h-86 rounded-2xl overflow-hidden border border-neutral-100 relative">
                        <iframe
                            title="GripCRM Headquarters Map"
                            src={fields?.hq_map_url || "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.077224203407!2d75.76100527632616!3d26.899479976657962!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db467c6999999%3A0x6b19a1db4b7c1234!2sMetropolis%20Tower%2C%20Ajmer%20Rd%2C%20Purani%20Chungi%2C%20Jaipur%2C%20Rajasthan%20302019!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"}
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
                            <p className="text-base/8 text-neutral-700 font-medium max-w-md">
                                {fields?.hq_address ? (
                                    fields.hq_address
                                ) : (
                                    <>
                                        119, First Floor, Metropolis Tower,<br />
                                        Ajmer Rd, Purani Chungi, Jaipur, Rajasthan 302019
                                    </>
                                )}
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
                                    href={`tel:${(fields?.hq_phone || "+91 94613 49253").replace(/\s+/g, "")}`}
                                    className="text-lg md:text-2xl font-semibold text-neutral-900 transition-colors"
                                >
                                    {fields?.hq_phone || "+91 94613 49253"}
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
                                    href={`mailto:${fields?.hq_email || "info@gripcrm.com"}`}
                                    className="text-lg md:text-2xl font-semibold text-neutral-900 transition-colors"
                                >
                                    {fields?.hq_email || "info@gripcrm.com"}
                                </a>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </main >
    );
}
