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
            <p className="text-gray-500 text-base leading-relaxed max-w-s">
              Have a question about our programs? We&apos;d love to hear from
              you. Reach out and we&apos;ll get back to you shortly.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2 text-sm text-gray-500">
            <span>info@techacademy.in</span>
            <span className="text-primary">•</span>
            <span>+91 98765 43210</span>
          </div>
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
