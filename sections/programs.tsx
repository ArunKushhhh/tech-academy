"use client";

import React from "react";
import SpotlightCard from "@/components/spotlight-card";
import { FaGraduationCap, FaCode, FaTerminal, FaArrowTrendUp } from "react-icons/fa6";

const programsData = [
  {
    icon: <FaGraduationCap className="text-xl text-white" />,
    title: "School Students",
    items: ["7th–10th HSC (Maths)", "9th–10th ICSE", "11th–12th CBSE"],
    buttonText: "View Detail",
    buttonVariant: "secondary",
  },
  {
    icon: <FaCode className="text-xl text-white" />,
    title: "Programming",
    items: [
      "C / C++ Fundamentals",
      "Java (Core & Advanced)",
      "Python & MySQL",
    ],
    buttonText: "Join Batch",
    buttonVariant: "primary", // specialized golden styling
  },
  {
    icon: <FaTerminal className="text-xl text-white" />,
    title: "Engineering",
    items: [
      "Data Structures (DSA)",
      "Computer Architecture",
      "Algorithm Design",
    ],
    buttonText: "View Detail",
    buttonVariant: "secondary",
  },
  {
    icon: <FaArrowTrendUp className="text-xl text-white" />,
    title: "Professionals",
    items: [
      "Corporate Upskilling",
      "Full Stack Development",
      "Technical Interview Prep",
    ],
    buttonText: "Learn More",
    buttonVariant: "secondary",
  },
];

function ProgramCard({ data, isHighlighted }: { data: any; isHighlighted: boolean }) {
  return (
    <SpotlightCard
      spotlightColor="rgba(255, 255, 255, 0.15)" // softer white spotlight
      className={`h-full flex flex-col p-8 transition-colors duration-300 ${
        isHighlighted
          ? "border-[#1447E6] border-t-4 bg-white/5 backdrop-blur-sm"
          : "border-white/10 bg-white/5 backdrop-blur-sm"
      }`}
    >
      <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mb-6">
        {data.icon}
      </div>
      
      <h3 className="text-xl font-bold mb-6 text-foreground">{data.title}</h3>
      
      <ul className="flex flex-col gap-4 mb-10 flex-grow">
        {data.items.map((item: string, idx: number) => (
          <li key={idx} className="flex items-start gap-3 text-muted-foreground text-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-[#1447E6] mt-1.5 flex-shrink-0" />
            {item}
          </li>
        ))}
      </ul>
      
      <button
        className={`w-full py-3 px-4 rounded-full font-medium text-sm transition-colors mt-auto border ${
          isHighlighted
            ? "bg-[#1447E6] text-white hover:bg-blue-600 border-transparent" 
            : "bg-transparent text-foreground hover:bg-white/10 border-white/20"
        }`}
      >
        {data.buttonText}
      </button>
    </SpotlightCard>
  );
}

export default function Programs() {
  return (
    <section className="py-20 md:py-32 w-full max-w-7xl mx-auto px-8 md:px-24">
      {/* We can place an optional heading here, or just the grid if requested. The image just shows cards. */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {programsData.map((prog, idx) => (
          <ProgramCard 
            key={idx} 
            data={prog} 
            isHighlighted={prog.title === "Programming"} 
          />
        ))}
      </div>
    </section>
  );
}
