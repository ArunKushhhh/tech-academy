import React from "react";
import { FaGraduationCap, FaCode, FaTerminal, FaArrowTrendUp } from "react-icons/fa6";

export const programsData = [
  {
    icon: <FaGraduationCap className="text-xl text-white" />,
    title: "School Students",
    items: ["7th–10th HSC (Maths)", "9th–10th ICSE", "11th–12th CBSE"],
  },
  {
    icon: <FaCode className="text-xl text-white" />,
    title: "Programming",
    items: [
      "C / C++ Fundamentals",
      "Java (Core & Advanced)",
      "Python & MySQL",
    ],
  },
  {
    icon: <FaTerminal className="text-xl text-white" />,
    title: "Engineering",
    items: [
      "Data Structures (DSA)",
      "Computer Architecture",
      "Algorithm Design",
    ],
  },
  {
    icon: <FaArrowTrendUp className="text-xl text-white" />,
    title: "Professionals",
    items: [
      "Corporate Upskilling",
      "Full Stack Development",
      "Technical Interview Prep",
    ],
  },
];
