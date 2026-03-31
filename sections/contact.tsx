"use client";

import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import StarBorder from "@/components/ui/star-border";
import { Mail, CheckCircle, Loader2 } from "lucide-react";

type FormState = "idle" | "submitting" | "success" | "error";

interface FormData {
  name: string;
  email: string;
  company: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

const WorldMap = () => (
  <div className="relative w-full h-[180px] rounded-xl overflow-hidden bg-gray-100 mt-6">
    {/* Simplified world map — continent outlines */}
    <svg
      viewBox="0 0 1000 500"
      className="absolute inset-0 w-full h-full opacity-[0.15]"
      fill="currentColor"
      aria-hidden="true"
    >
      {/* North America */}
      <path d="M120,80 L180,60 L240,70 L260,120 L230,160 L200,180 L170,200 L140,220 L110,210 L90,180 L80,140 L100,100 Z" />
      {/* South America */}
      <path d="M190,240 L240,230 L270,260 L280,310 L270,370 L250,400 L220,420 L190,400 L170,360 L160,310 L170,260 Z" />
      {/* Europe */}
      <path d="M440,60 L490,50 L520,70 L510,100 L480,120 L450,110 L430,90 Z" />
      {/* Africa */}
      <path d="M440,140 L490,130 L530,150 L550,200 L540,270 L510,320 L470,340 L440,320 L410,270 L410,200 L430,160 Z" />
      {/* Asia (mainland) */}
      <path d="M530,50 L700,40 L800,60 L820,100 L780,140 L720,150 L660,160 L600,150 L560,120 L520,90 Z" />
      {/* India subcontinent */}
      <path d="M590,140 L630,135 L650,165 L640,210 L610,230 L585,210 L575,170 Z" />
      {/* Southeast Asia */}
      <path d="M720,160 L770,155 L790,185 L760,210 L730,200 L710,180 Z" />
      {/* Australia */}
      <path d="M720,280 L790,260 L840,280 L860,330 L820,370 L760,380 L710,360 L690,320 Z" />
    </svg>

    {/* Pune pin — 18.52°N 73.86°E → approx 63% left, 46% top on equirectangular */}
    <div className="absolute top-[46%] left-[63%] -translate-x-1/2 -translate-y-1/2">
      {/* Pulse ring */}
      <div className="absolute w-5 h-5 bg-blue-500/30 rounded-full animate-ping -translate-x-1/2 -translate-y-1/2" />
      {/* Pin dot */}
      <div className="relative w-3 h-3 bg-blue-600 rounded-full ring-2 ring-white shadow-md" />
    </div>

    {/* "We are here" label */}
    <div className="absolute top-[28%] left-[60%] flex flex-col items-center pointer-events-none">
      <span className="bg-gray-900 text-white text-xs px-2.5 py-1 rounded-full whitespace-nowrap shadow-sm">
        We are here
      </span>
      <div className="w-px h-5 bg-gray-500/60 mt-0.5" />
    </div>
  </div>
);

export default function Contact() {
  const [formState, setFormState] = useState<FormState>("idle");
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});

  const validate = (): FormErrors => {
    const errs: FormErrors = {};
    if (!formData.name.trim()) errs.name = "This field is required";
    if (!formData.email.trim()) {
      errs.email = "This field is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = "Please enter a valid email address";
    }
    if (!formData.message.trim()) errs.message = "This field is required";
    return errs;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setFormState("submitting");
    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          user_name: formData.name,
          user_email: formData.email,
          user_company: formData.company,
          message: formData.message,
        },
        { publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY! }
      );
      setFormState("success");
    } catch {
      setFormState("error");
    }
  };

  const inputClass = (field: keyof FormErrors) =>
    `w-full bg-white border rounded-lg px-4 py-3 text-gray-900 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 transition-colors duration-200 ${
      errors[field]
        ? "border-red-400 focus:ring-red-400/20"
        : "border-gray-200 focus:ring-blue-500/20 focus:border-blue-500"
    }`;

  return (
    <section
      id="contact"
      className="w-full py-16 px-8 md:px-16 lg:px-32 scroll-mt-20"
    >
      {/* Section divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent mb-16" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-start max-w-6xl mx-auto">
        {/* Left Column */}
        <div className="flex flex-col gap-6">
          {/* Mail icon box */}
          <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-gray-900 text-white shrink-0">
            <Mail className="w-6 h-6" />
          </div>

          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-3">
              Contact us
            </h2>
            <p className="text-gray-500 text-base leading-relaxed max-w-xs">
              Have a question about our programs? We&apos;d love to hear from
              you. Reach out and we&apos;ll get back to you shortly.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2 text-sm text-gray-500">
            <span>info@techacademy.in</span>
            <span className="text-gray-300">•</span>
            <span>+91 98765 43210</span>
          </div>

          <WorldMap />
        </div>

        {/* Right Column — Form Card */}
        <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8 shadow-sm">
          {formState === "success" ? (
            <div className="flex flex-col items-center justify-center text-center py-8 gap-4">
              <CheckCircle className="w-12 h-12 text-green-500" />
              <h3 className="text-xl font-semibold text-gray-900">
                Message sent!
              </h3>
              <p className="text-gray-500 text-sm">
                Thanks for reaching out. Shraddha will get back to you shortly.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              noValidate
              className="flex flex-col gap-5"
            >
              {/* Full Name */}
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="contact-name"
                  className="text-sm font-medium text-gray-700"
                >
                  Full name <span className="text-red-500">*</span>
                </label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  placeholder="e.g. Rahul Sharma"
                  value={formData.name}
                  onChange={handleChange}
                  className={inputClass("name")}
                  disabled={formState === "submitting"}
                />
                {errors.name && (
                  <span className="text-xs text-red-500">{errors.name}</span>
                )}
              </div>

              {/* Email */}
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="contact-email"
                  className="text-sm font-medium text-gray-700"
                >
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={handleChange}
                  className={inputClass("email")}
                  disabled={formState === "submitting"}
                />
                {errors.email && (
                  <span className="text-xs text-red-500">{errors.email}</span>
                )}
              </div>

              {/* Company (optional) */}
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="contact-company"
                  className="text-sm font-medium text-gray-700"
                >
                  Institution / School{" "}
                  <span className="text-gray-400 font-normal">(optional)</span>
                </label>
                <input
                  id="contact-company"
                  name="company"
                  type="text"
                  placeholder="e.g. DY Patil College"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 text-gray-900 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-colors duration-200"
                  disabled={formState === "submitting"}
                />
              </div>

              {/* Message */}
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="contact-message"
                  className="text-sm font-medium text-gray-700"
                >
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={4}
                  placeholder="Tell us what you'd like to learn..."
                  value={formData.message}
                  onChange={handleChange}
                  className={`${inputClass("message")} resize-none`}
                  disabled={formState === "submitting"}
                />
                {errors.message && (
                  <span className="text-xs text-red-500">{errors.message}</span>
                )}
              </div>

              {/* Submit */}
              <div className="pt-1">
                <StarBorder
                  as="button"
                  type="submit"
                  color="#1447E6"
                  speed="5s"
                  className="w-full justify-center text-sm font-medium"
                  disabled={formState === "submitting"}
                >
                  {formState === "submitting" ? (
                    <span className="flex items-center justify-center gap-2">
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Sending...
                    </span>
                  ) : (
                    "Send Message"
                  )}
                </StarBorder>
              </div>

              {formState === "error" && (
                <p className="text-xs text-red-500 text-center">
                  Something went wrong. Please try again.
                </p>
              )}
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
