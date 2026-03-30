import Image from "next/image";
import Experience from "@/components/home/experience";

export default function Educator() {
    return (
        <section className="w-full py-24 px-8 md:px-24 z-20 relative">
            <div className="flex flex-col lg:flex-row gap-16 items-start">
                
                {/* Photo Column */}
                <div className="w-full lg:w-[400px] flex-shrink-0 flex flex-col gap-8">
                    <div className="relative w-full aspect-square overflow-hidden rounded-3xl shadow-2xl border border-white/10">
                        <Image 
                            src="/educator.png" 
                            alt="Shraddha Oza" 
                            fill 
                            className="object-cover object-top" 
                        />
                    </div>
                </div>

                {/* Bio Column */}
                <div className="w-full lg:flex-1 flex flex-col pt-4">
                    <div className="flex flex-col gap-8">
                        <div>
                            <h2 className="text-3xl md:text-6xl font-extrabold tracking-tight mb-2">
                                Shraddha Oza
                            </h2>
                            <p className="text-primary text-xl font-medium">Educator & Founder</p>
                        </div>

                        <div className="space-y-4 text-muted-foreground leading-relaxed">
                            <p>
                                I am a retired educator with <strong className="text-foreground">35+ years</strong> of teaching experience with expertise in topics of Computer Science.
                            </p>
                            <p>
                                Currently running my own academy — "Tech Academy" to build skills of logical thinking in students across school to UG and make them proficient with programming.
                            </p>
                        </div>
                    </div>

                    {/* Timeline */}
                    <Experience />
                </div>
            </div>
        </section>
    );
}
