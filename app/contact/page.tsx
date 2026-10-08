"use client";

import React, { useState } from "react";
import { Mail, MapPin, CheckCircle, Send, AlertCircle, Check } from "lucide-react";
import { PageTransition } from "@/components/PageTransition";
import { SectionHeading } from "@/components/SectionHeading";
import { RevealElement } from "@/components/RevealElement";
import { navigationConfig } from "@/data/navigation";
import { companyData } from "@/data/company";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  message: string;
}

interface FormErrors {
  firstName?: string;
  lastName?: string;
  email?: string;
  company?: string;
  message?: string;
}

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  const validateField = (name: string, value: string): string => {
    const trimmed = value.trim();

    if (name === "firstName") {
      if (!trimmed) return "First name is required.";
      if (trimmed.length < 2) return "First name must be at least 2 characters.";
    }

    if (name === "lastName") {
      if (!trimmed) return "Last name is required.";
      if (trimmed.length < 1) return "Last name is required.";
    }

    if (name === "email") {
      if (!trimmed) return "Email address is required.";
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(trimmed)) {
        return "Please enter a valid email address (e.g. alex@company.com).";
      }
    }

    if (name === "company") {
      if (!trimmed) return "Company is required.";
      if (trimmed.length < 2) return "Company must be at least 2 characters.";
    }

    if (name === "message") {
      if (!trimmed) return "Please leave your message.";
      if (trimmed.length < 10) return "Message must be at least 10 characters long.";
    }

    return "";
  };

  const validateAll = (): FormErrors => {
    const newErrors: FormErrors = {};
    const fields: (keyof FormData)[] = ["firstName", "lastName", "email", "company", "message"];

    fields.forEach((field) => {
      const err = validateField(field, formData[field]);
      if (err) newErrors[field] = err;
    });

    return newErrors;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (touched[name]) {
      const err = validateField(name, value);
      setErrors((prev) => {
        const updated = { ...prev };
        if (err) {
          updated[name as keyof FormErrors] = err;
        } else {
          delete updated[name as keyof FormErrors];
        }
        return updated;
      });
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    const err = validateField(name, value);
    setErrors((prev) => {
      const updated = { ...prev };
      if (err) {
        updated[name as keyof FormErrors] = err;
      } else {
        delete updated[name as keyof FormErrors];
      }
      return updated;
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    setTouched({
      firstName: true,
      lastName: true,
      email: true,
      company: true,
      message: true,
    });

    const validationErrors = validateAll();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setIsSubmitting(true);
      setTimeout(() => {
        setIsSubmitting(false);
        setSubmitted(true);
      }, 500);
    }
  };

  const handleReset = () => {
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      company: "",
      message: "",
    });
    setErrors({});
    setTouched({});
    setSubmitted(false);
  };

  return (
    <PageTransition>
      {/* Contact Hero */}
      <section className="py-20 sm:py-28 bg-white bg-tech-grid border-b border-slate-200">
        <div className="container-editorial">
          <RevealElement animation="fade-up">
            <div className="inline-flex items-center gap-2 mb-4 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase bg-blue-50 text-[#0052ff] border border-blue-100">
              <Mail className="w-3.5 h-3.5" />
              Let&apos;s Connect
            </div>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-[#090a10] tracking-tight leading-[1.05] max-w-5xl">
              Let&apos;s Talk!
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-slate-600 max-w-3xl leading-relaxed">
              Ready to unlock exponential overseas growth? Share your campaign goals with our global growth specialists for tailored media buying and creative execution strategies.
            </p>
          </RevealElement>
        </div>
      </section>

      {/* Main Form & Office Hubs Section */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="container-editorial">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Left: Contact Form */}
            <div className="lg:col-span-7">
              <div className="p-8 sm:p-12 rounded-3xl bg-slate-50 border border-slate-200/90 shadow-lg">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#090a10] tracking-tight mb-2">
                  Contact Us
                </h2>
                <p className="text-sm text-slate-600 mb-8">
                  Please share your requirements with us, and our team will get back to you as soon as possible.
                </p>

                {submitted ? (
                  <div className="p-8 rounded-2xl bg-blue-50 border border-blue-200 text-center">
                    <div className="w-12 h-12 rounded-full bg-[#0052ff] text-white flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-[#090a10]">Inquiry Transmitted</h3>
                    <p className="text-sm text-slate-600 mt-2 max-w-md mx-auto">
                      Thank you for reaching out to Lynxmobi, {formData.firstName}. A Senior Growth Director will review your campaign criteria and contact you shortly at <span className="font-semibold text-slate-900">{formData.email}</span>.
                    </p>
                    <button
                      type="button"
                      onClick={handleReset}
                      className="mt-6 text-xs font-bold uppercase tracking-wider text-[#0052ff] hover:underline cursor-pointer"
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} noValidate className="space-y-6">
                    {/* Row 1: First Name & Last Name */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="firstName" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                          First Name *
                        </label>
                        <div className="relative">
                          <input
                            id="firstName"
                            name="firstName"
                            type="text"
                            required
                            value={formData.firstName}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            placeholder="e.g. Alex"
                            className={`w-full px-4 py-3 rounded-xl bg-white border text-slate-900 text-sm focus:outline-hidden transition-all pr-10 ${
                              touched.firstName && errors.firstName
                                ? "border-rose-400 focus:border-rose-500 focus:ring-2 focus:ring-rose-500/20 bg-rose-50/20"
                                : touched.firstName && !errors.firstName && formData.firstName
                                ? "border-emerald-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20"
                                : "border-slate-200 focus:border-[#0052ff] focus:ring-2 focus:ring-[#0052ff]/20"
                            }`}
                          />
                          {touched.firstName && !errors.firstName && formData.firstName && (
                            <Check className="w-4 h-4 text-emerald-500 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                          )}
                        </div>
                        {touched.firstName && errors.firstName && (
                          <p className="mt-1.5 text-xs font-medium text-rose-500 flex items-center gap-1">
                            <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                            <span>{errors.firstName}</span>
                          </p>
                        )}
                      </div>

                      <div>
                        <label htmlFor="lastName" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                          Last Name *
                        </label>
                        <div className="relative">
                          <input
                            id="lastName"
                            name="lastName"
                            type="text"
                            required
                            value={formData.lastName}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            placeholder="e.g. Vance"
                            className={`w-full px-4 py-3 rounded-xl bg-white border text-slate-900 text-sm focus:outline-hidden transition-all pr-10 ${
                              touched.lastName && errors.lastName
                                ? "border-rose-400 focus:border-rose-500 focus:ring-2 focus:ring-rose-500/20 bg-rose-50/20"
                                : touched.lastName && !errors.lastName && formData.lastName
                                ? "border-emerald-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20"
                                : "border-slate-200 focus:border-[#0052ff] focus:ring-2 focus:ring-[#0052ff]/20"
                            }`}
                          />
                          {touched.lastName && !errors.lastName && formData.lastName && (
                            <Check className="w-4 h-4 text-emerald-500 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                          )}
                        </div>
                        {touched.lastName && errors.lastName && (
                          <p className="mt-1.5 text-xs font-medium text-rose-500 flex items-center gap-1">
                            <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                            <span>{errors.lastName}</span>
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Row 2: Email & Company */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                          Email *
                        </label>
                        <div className="relative">
                          <input
                            id="email"
                            name="email"
                            type="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            placeholder="alex@company.com"
                            className={`w-full px-4 py-3 rounded-xl bg-white border text-slate-900 text-sm focus:outline-hidden transition-all pr-10 ${
                              touched.email && errors.email
                                ? "border-rose-400 focus:border-rose-500 focus:ring-2 focus:ring-rose-500/20 bg-rose-50/20"
                                : touched.email && !errors.email && formData.email
                                ? "border-emerald-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20"
                                : "border-slate-200 focus:border-[#0052ff] focus:ring-2 focus:ring-[#0052ff]/20"
                            }`}
                          />
                          {touched.email && !errors.email && formData.email && (
                            <Check className="w-4 h-4 text-emerald-500 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                          )}
                        </div>
                        {touched.email && errors.email && (
                          <p className="mt-1.5 text-xs font-medium text-rose-500 flex items-center gap-1">
                            <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                            <span>{errors.email}</span>
                          </p>
                        )}
                      </div>

                      <div>
                        <label htmlFor="company" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                          Company *
                        </label>
                        <div className="relative">
                          <input
                            id="company"
                            name="company"
                            type="text"
                            required
                            value={formData.company}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            placeholder="e.g. Nexus Interactive"
                            className={`w-full px-4 py-3 rounded-xl bg-white border text-slate-900 text-sm focus:outline-hidden transition-all pr-10 ${
                              touched.company && errors.company
                                ? "border-rose-400 focus:border-rose-500 focus:ring-2 focus:ring-rose-500/20 bg-rose-50/20"
                                : touched.company && !errors.company && formData.company
                                ? "border-emerald-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20"
                                : "border-slate-200 focus:border-[#0052ff] focus:ring-2 focus:ring-[#0052ff]/20"
                            }`}
                          />
                          {touched.company && !errors.company && formData.company && (
                            <Check className="w-4 h-4 text-emerald-500 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                          )}
                        </div>
                        {touched.company && errors.company && (
                          <p className="mt-1.5 text-xs font-medium text-rose-500 flex items-center gap-1">
                            <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                            <span>{errors.company}</span>
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Row 3: Leave Your Message Here */}
                    <div>
                      <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                        Leave Your Message Here *
                      </label>
                      <div className="relative">
                        <textarea
                          id="message"
                          name="message"
                          rows={5}
                          required
                          value={formData.message}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          placeholder="Please share your campaign goals, target markets, timeline, or any specific requirements..."
                          className={`w-full px-4 py-3 rounded-xl bg-white border text-slate-900 text-sm focus:outline-hidden transition-all ${
                            touched.message && errors.message
                              ? "border-rose-400 focus:border-rose-500 focus:ring-2 focus:ring-rose-500/20 bg-rose-50/20"
                              : touched.message && !errors.message && formData.message
                              ? "border-emerald-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20"
                              : "border-slate-200 focus:border-[#0052ff] focus:ring-2 focus:ring-[#0052ff]/20"
                          }`}
                        />
                      </div>
                      {touched.message && errors.message ? (
                        <p className="mt-1.5 text-xs font-medium text-rose-500 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                          <span>{errors.message}</span>
                        </p>
                      ) : (
                        <p className="mt-1 text-[11px] text-slate-400">
                          Minimum 10 characters.
                        </p>
                      )}
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 rounded-full bg-[#0052ff] hover:bg-[#003dc2] active:scale-[0.99] text-white font-bold text-sm tracking-wide shadow-lg shadow-blue-500/25 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          <span>Transmitting Inquiry...</span>
                        </>
                      ) : (
                        <>
                          <span>Send Message</span>
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>

            {/* Right: Direct Contacts */}
            <div className="lg:col-span-5 flex flex-col justify-start space-y-8">
              <div>
                <SectionHeading
                  tag="Direct Communication"
                  title="Connect Directly"
                  subtitle="Our senior strategists are on standby across global time zones."
                />

                <div className="mt-8 space-y-4">
                  <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
                    <p className="text-xs uppercase font-bold tracking-wider text-slate-400 mb-3">
                      Headquarters & Registered Office
                    </p>
                    <div className="flex items-start gap-3.5">
                      <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 text-[#0052ff] flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                        <MapPin className="w-5 h-5" />
                      </div>
                      <div className="text-sm text-slate-700 leading-relaxed">
                        <p className="font-bold text-[#090a10]">Flat E, 11/F, On Wah Industrial Building</p>
                        <p>41–43 Au Pui Wan Street, Fo Tan</p>
                        <p>Sha Tin, New Territories</p>
                        <p className="font-semibold text-[#0052ff]">Hong Kong</p>
                      </div>
                    </div>
                  </div>

                  <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
                    <p className="text-xs uppercase font-bold tracking-wider text-slate-400">
                      Primary Email Inquiries
                    </p>
                    <a
                      href={`mailto:${navigationConfig.email}`}
                      className="text-lg font-bold text-[#090a10] hover:text-[#0052ff] flex items-center gap-2 mt-1 transition-colors"
                    >
                      <Mail className="w-4 h-4 text-[#0052ff]" />
                      <span>{navigationConfig.email}</span>
                    </a>
                  </div>

                  <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
                    <p className="text-xs uppercase font-bold tracking-wider text-slate-400">
                      Business Hours & SLA
                    </p>
                    <p className="text-sm font-semibold text-slate-800 mt-1">
                      7x24 Continuous Operations • 24hr Guaranteed Response
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
