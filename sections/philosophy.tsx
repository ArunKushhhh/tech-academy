"use client";

import { Card, CardContent } from "@/components/ui/card";
import { philosophyData } from "@/config/philosophyData";

export default function Philosophy() {
  return (
    <section className="py-20 md:py-32 w-full px-8 md:px-32">
      <div className="flex flex-col gap-16">     
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="max-w-2xl">
                <h2 className="text-sm font-semibold text-primary tracking-wider uppercase mb-3">Our Methodology</h2>
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
            {philosophyData.map((pillar, idx) => (
                <Card key={idx} className="bg-secondary/50 hover:bg-secondary transition-colors duration-300">
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
