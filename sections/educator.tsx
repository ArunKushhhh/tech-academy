import Image from "next/image";

export default function Educator() {
    return (
        <section className="w-full py-24 px-8 md:px-24 z-20 relative">
            <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-16 items-start">
                
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
                    <div className="bg-[#1447E6]/10 border border-[#1447E6]/20 p-6 rounded-2xl">
                        <h3 className="font-semibold text-foreground text-lg mb-3 flex items-center gap-2">
                             Key Strengths
                        </h3>
                        <ul className="space-y-2 text-foreground/80 list-disc list-inside">
                            <li>Simplified Approach</li>
                            <li>Innovative Techniques like Role Play</li>
                            <li>Concepts with Hands-On Skills</li>
                        </ul>
                    </div>
                </div>

                {/* Bio Column */}
                <div className="w-full lg:flex-1 flex flex-col gap-8 pt-4">
                    <div>
                        <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-2">
                            Shraddha Oza
                        </h2>
                        <p className="text-[#1447E6] text-2xl font-medium">Educator & Founder</p>
                    </div>

                    <div className="space-y-4 text-xl text-muted-foreground leading-relaxed">
                        <p>
                            I am a retired educator with <strong className="text-foreground">35+ years</strong> of teaching experience with expertise in topics of Computer Science.
                        </p>
                        <p>
                            Currently running my own academy — "Tech Academy" to build skills of logical thinking in students across school to UG and make them proficient with programming.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4 pt-8 border-t border-border/50">
                        {/* Expertise */}
                        <div>
                            <h3 className="font-semibold text-foreground text-xl mb-4">Expertise</h3>
                            <ul className="space-y-3 text-muted-foreground">
                                <li className="flex items-start gap-3">
                                    <div className="w-1.5 h-1.5 rounded-full bg-[#1447E6] mt-2 shrink-0"></div>
                                    <span>Advanced Computer Architecture</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="w-1.5 h-1.5 rounded-full bg-[#1447E6] mt-2 shrink-0"></div>
                                    <span>C / C++ & Python</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="w-1.5 h-1.5 rounded-full bg-[#1447E6] mt-2 shrink-0"></div>
                                    <span>JAVA</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="w-1.5 h-1.5 rounded-full bg-[#1447E6] mt-2 shrink-0"></div>
                                    <span>Data Structures</span>
                                </li>
                            </ul>
                        </div>

                        {/* Experience */}
                        <div>
                            <h3 className="font-semibold text-foreground text-xl mb-4">Past Experience</h3>
                            <div className="space-y-5">
                                <div>
                                    <span className="font-medium text-foreground text-sm uppercase tracking-wider">Academia</span>
                                    <ul className="space-y-2 text-muted-foreground mt-2">
                                        <li>Army Institute of Technology, Pune</li>
                                        <li>MAEER's MIT, Pune</li>
                                        <li>Bharati Vidyapeeth's COE, Pune</li>
                                    </ul>
                                </div>
                                <div>
                                    <span className="font-medium text-foreground text-sm uppercase tracking-wider">Industry</span>
                                    <ul className="space-y-2 text-muted-foreground mt-2">
                                        <li>Algoryhthms (Software Industry)</li>
                                        <li>Advani Oerlikon, Pune</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-4 pt-8 border-t border-border/50">
                        <h3 className="font-semibold text-foreground text-xl mb-6">Education</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="p-5 rounded-xl bg-muted/50 border border-border/50 hover:bg-muted transition-colors">
                                <div className="text-[#1447E6] font-bold text-lg mb-1">2019</div>
                                <div className="font-medium text-foreground">PhD (E&TC)</div>
                                <div className="text-muted-foreground text-sm mt-2">COEP, SPPU</div>
                            </div>
                            <div className="p-5 rounded-xl bg-muted/50 border border-border/50 hover:bg-muted transition-colors">
                                <div className="text-[#1447E6] font-bold text-lg mb-1">2003</div>
                                <div className="font-medium text-foreground leading-tight">Masters in Electronics</div>
                                <div className="text-muted-foreground text-sm mt-2">VJTI, Mumbai University</div>
                            </div>
                            <div className="p-5 rounded-xl bg-muted/50 border border-border/50 hover:bg-muted transition-colors">
                                <div className="text-[#1447E6] font-bold text-lg mb-1">1998</div>
                                <div className="font-medium text-foreground leading-tight">Bachelor in Industrial Electronics</div>
                                <div className="text-muted-foreground text-sm mt-2">SPPU</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
