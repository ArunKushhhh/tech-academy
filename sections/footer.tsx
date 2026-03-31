"use client";

import React from "react";
import Image from "next/image";
import logo from "@/public/logo.svg";
import {
  FaXTwitter,
  FaLinkedinIn,
  FaGithub,
  FaFacebookF,
  FaInstagram,
} from "react-icons/fa6";

const navLinks = [
  { label: "Programs", href: "#programs" },
  { label: "About", href: "#about" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

const socialLinks = [
  { icon: FaXTwitter, href: "#", ariaLabel: "Follow us on X (Twitter)" },
  { icon: FaLinkedinIn, href: "#", ariaLabel: "Follow us on LinkedIn" },
  { icon: FaGithub, href: "#", ariaLabel: "Follow us on GitHub" },
  { icon: FaFacebookF, href: "#", ariaLabel: "Follow us on Facebook" },
  { icon: FaInstagram, href: "#", ariaLabel: "Follow us on Instagram" },
];

export default function Footer() {
  return (
    <footer className="w-full mt-8">
      {/* Top separator */}
      <div className="mx-8 md:mx-32">
        <div className="h-px bg-linear-to-r from-transparent via-border to-transparent" />
      </div>

      {/* Main footer content */}
      <div className="bg-secondary/40 backdrop-blur-sm">
        <div className="px-8 md:px-32 pt-16 pb-8">
          {/* Logo & Brand */}
          <div className="flex flex-col items-center gap-6 mb-10">
            <div className="flex items-center gap-3">
              <Image
                src={logo}
                alt="Tech Academy"
                className="h-10 w-auto"
                height={40}
                width={40}
              />
              <span className="text-xl font-bold tracking-tight text-foreground">
                Tech Academy
              </span>
            </div>

            {/* Navigation Links */}
            <nav aria-label="Footer navigation">
              <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
                {navLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-[#1447E6] transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Dotted divider */}
          <div className="border-t border-dashed border-border/60 mb-8" />

          {/* Bottom row */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Tech Academy. All rights reserved.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.ariaLabel}
                  href={social.href}
                  aria-label={social.ariaLabel}
                  className="w-9 h-9 rounded-full border border-border/60 flex items-center justify-center text-muted-foreground hover:text-[#1447E6] hover:border-[#1447E6]/40 hover:bg-[#1447E6]/5 transition-all duration-200"
                >
                  <social.icon className="text-sm" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
