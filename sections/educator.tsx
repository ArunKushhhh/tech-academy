import Image from "next/image";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import Experience from "@/components/experience";

export default function Educator() {
    return (
        <section id="educator" className="w-full py-24 px-8 md:px-32 z-20 relative scroll-mt-20">
            <div className="flex flex-col lg:flex-row gap-16 items-start">

                {/* Photo Column */}
                <div className="w-full lg:w-[400px] shrink-0 flex flex-col gap-8">
                    <div className="relative w-full aspect-square overflow-hidden rounded-3xl shadow-md">
                        <Image
                            src="/educator.png"
                            alt="Shraddha Oza"
                            fill
                            className="object-cover object-top"
                            sizes=""
                        />
                    </div>

                    <Card className="px-6 bg-secondary">
                        <CardTitle className="text-3xl font-bold tracking-tight text-foreground">
                            Education
                        </CardTitle>
                        <CardContent>
                            <ul className="flex flex-col gap-4 text-muted-foreground list-disc">
                                <li>
                                    PhD in Electronics and Telecommunication, COEP, SPPU, 2019
                                </li>
                                <li>
                                    Masters in Elecronics, VJTI, Mumbai university, 2003
                                </li>
                                <li>
                                    Bachelor in Industrial Electronics, SPPU, 1998
                                </li>
                            </ul>
                        </CardContent>
                    </Card>

                    <Card className="px-6 bg-secondary">
                        <CardTitle className="text-3xl font-bold tracking-tight text-foreground">
                            Key Strengths
                        </CardTitle>
                        <CardContent>
                            <ul className="flex flex-col gap-4 text-muted-foreground list-disc">
                                <li>Simplified Approach</li>
                                <li>Use of Innovative Techniques like Role Play</li>
                            </ul>
                        </CardContent>
                    </Card>
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
