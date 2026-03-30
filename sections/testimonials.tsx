"use client";

import React from "react";

interface Testimonial {
  quote: string;
  name: string;
  role: string;
  avatar: string;
}

const testimonials: Testimonial[] = [
  {
    quote: "Tech Academy transformed my understanding of programming. The structured approach to learning C++ gave me confidence I never had before.",
    name: "Arjun Mehta",
    role: "Engineering Student",
    avatar: "AM",
  },
  {
    quote: "My son went from struggling with basic concepts to scoring top marks in his computer science exams. The coaching here is exceptional.",
    name: "Priya Sharma",
    role: "Parent",
    avatar: "PS",
  },
  {
    quote: "The MySQL and Python courses helped me land my first internship. The practical, project-based learning made all the difference.",
    name: "Sneha Kulkarni",
    role: "College Student",
    avatar: "SK",
  },
  {
    quote: "As a working professional, I needed to upskill in Java quickly. Tech Academy's flexible coaching made it possible without disrupting my schedule.",
    name: "Rahul Deshmukh",
    role: "Software Developer",
    avatar: "RD",
  },
  {
    quote: "The personalized attention each student gets here is remarkable. They don't just teach syntax — they teach you how to think like a programmer.",
    name: "Anita Joshi",
    role: "Parent",
    avatar: "AJ",
  },
  {
    quote: "I tried multiple online courses before joining Tech Academy. The difference is night and day — having a mentor who guides you through problems is invaluable.",
    name: "Vikram Patil",
    role: "IT Professional",
    avatar: "VP",
  },
  {
    quote: "From zero coding knowledge to building full applications in Python. Tech Academy made programming accessible and enjoyable for me.",
    name: "Neha Rathi",
    role: "Career Switcher",
    avatar: "NR",
  },
  {
    quote: "The competitive programming prep at Tech Academy is top-notch. I cleared my coding interviews with ease thanks to their systematic training.",
    name: "Rohan Gaikwad",
    role: "Placed at TCS",
    avatar: "RG",
  },
];

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div className="shrink-0 w-[350px] md:w-[460px] bg-secondary/50 backdrop-blur-sm border border-white/10 rounded-2xl p-8 flex flex-col gap-4">
      <p className="text-[15px] leading-relaxed text-foreground/80">
        &ldquo;{testimonial.quote}&rdquo;
      </p>
      <div className="flex items-center gap-3 mt-auto">
        <div className="w-10 h-10 rounded-full bg-[#1447E6]/20 text-[#1447E6] flex items-center justify-center text-sm font-semibold">
          {testimonial.avatar}
        </div>
        <div>
          <p className="text-sm font-medium text-foreground">{testimonial.name}</p>
          <p className="text-xs text-muted-foreground">{testimonial.role}</p>
        </div>
      </div>
    </div>
  );
}

function MarqueeRow({
  items,
  speed = 30,
}: {
  items: Testimonial[];
  speed?: number;
}) {
  // Duplicate items for seamless looping
  const duplicated = [...items, ...items];

  return (
    <div className="relative overflow-hidden w-full group">
      <div
        className="flex gap-6 w-max"
        style={{
          animation: `marquee-scroll ${speed}s linear infinite`,
        }}
      >
        {duplicated.map((t, i) => (
          <TestimonialCard key={`${t.name}-${i}`} testimonial={t} />
        ))}
      </div>
      <style>{`
        .group:hover > div {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}

export default function Testimonials() {
  const topRow = testimonials.slice(0, 4);
  const bottomRow = testimonials.slice(4, 8);

  return (
    <>
      <style>{`
        @keyframes marquee-scroll {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
      `}</style>
      <section className="py-20 md:py-32 overflow-hidden">
        <div className="px-8 md:px-32 mb-12">
          <h2 className="text-3xl md:text-5xl font-extrabold">
            Loved by students & parents
          </h2>
          <p className="text-muted-foreground mt-3 max-w-lg">
            Hear from the people who&apos;ve experienced our coaching firsthand — from school students to working professionals.
          </p>
        </div>
        <div className="flex flex-col gap-6">
          <MarqueeRow items={topRow} speed={40} />
          <MarqueeRow items={bottomRow} speed={28} />
        </div>
      </section>
    </>
  );
}
