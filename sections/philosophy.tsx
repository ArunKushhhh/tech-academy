"use client";

import React from "react";
import { BrainCircuit, Code2, Sparkles } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function Philosophy() {
  const pillars = [
    {
      icon: <BrainCircuit className="w-8 h-8 text-[#1447E6]" />,
      title: "Logic Over Syntax",
      description: "Technology evolves rapidly, but fundamental logic remains eternal. We prioritize building a strong algorithmic mindset that enables students to adapt to any programming language."
    },
    {
      icon: <Code2 className="w-8 h-8 text-[#1447E6]" />,
      title: "Hands-on Mastery",
      description: "Passive listening doesn't build engineers. Our curriculum is deeply rooted in practical problem-solving, requiring students to code, debug, and build real applications from day one."
    },
    {
      icon: <Sparkles className="w-8 h-8 text-[#1447E6]" />,
      title: "Simplified Approach",
      description: "We break down the most complex topics—from Data Structures to Advanced Computer Architectures—into intuitive, bite-sized lessons making mastery completely accessible."
    }
  ];

  return (
    <section className="py-20 md:py-32 w-full max-w-7xl mx-auto px-8 md:px-32">
      <div className="flex flex-col gap-16">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="max-w-2xl">
                <h2 className="text-sm font-semibold text-[#1447E6] tracking-wider uppercase mb-3">Our Methodology</h2>
                <h3 className="text-3xl md:text-5xl font-extrabold tracking-tight text-foreground">
                    Teaching you how to think, not just how to type.
                </h3>
            </div>
            <p className="text-muted-foreground text-lg md:text-xl max-w-md md:text-right">
                The Tech Academy difference is rooted in our core philosophy of learning.
            </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pillars.map((pillar, idx) => (
                <Card key={idx} className="bg-secondary/50 border-border/50 hover:bg-secondary transition-colors duration-300">
                    <CardContent className="p-8 flex flex-col gap-6">
                        <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center shadow-sm">
                            {pillar.icon}
                        </div>
                        <div>
                            <h4 className="text-xl font-bold text-foreground mb-3">{pillar.title}</h4>
                            <p className="text-muted-foreground leading-relaxed">
                                {pillar.description}
                            </p>
                        </div>
                    </CardContent>
                </Card>
            ))}
        </div>

      </div>
    </section>
  );
}
