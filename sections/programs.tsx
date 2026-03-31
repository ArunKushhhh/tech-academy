"use client";

import React from "react";
import SpotlightCard from "@/components/ui/spotlight-card";
import { programsData } from "@/config/programsData";

function ProgramCard({ data }: { data: any; }) {
  return (
    <SpotlightCard
      spotlightColor="rgba(0, 229, 255, 0.2)"
      className="h-full flex flex-col p-8 bg-secondary/50 border border-border hover:bg-secondary transition-colors duration-300"
    >
      <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center shadow-sm mb-6 shrink-0">
        {React.cloneElement(data.icon, {
          className: "w-8 h-8 text-primary"
        })}
      </div>

      <h4 className="text-xl font-bold text-foreground mb-3">{data.title}</h4>

      <ul className="flex flex-col gap-4 mt-3 grow">
        {data.items.map((item: string, idx: number) => (
          <li key={idx} className="flex items-start gap-3 text-muted-foreground leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
            {item}
          </li>
        ))}
      </ul>
    </SpotlightCard>
  );
}

export default function Programs() {
  return (
    <section id="programs" className=" w-full px-8 md:px-32 flex flex-col gap-16 py-20 md:py-32 scroll-mt-20">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
        <div className="max-w-2xl">
          <h2 className="text-sm font-semibold text-primary tracking-wider uppercase mb-3">Our Programs</h2>
          <h3 className="text-3xl md:text-5xl font-extrabold tracking-tight text-foreground">
            A program for every ambition.
          </h3>
        </div>
        <p className="text-muted-foreground text-lg md:text-xl max-w-md md:text-right">
          Whether you're starting from scratch or looking to specialize, we have a path for you.
        </p>
      </div>

      {/* Programs Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {programsData.map((prog, idx) => (
          <ProgramCard
            key={idx}
            data={prog}
          />
        ))}
      </div>
    </section>
  );
}
