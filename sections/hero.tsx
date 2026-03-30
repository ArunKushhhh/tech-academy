"use client";

import Aurora from "@/components/ui/aurora";
import CircularText from "@/components/ui/circular-text";
import SplitText from "@/components/ui/split-text";
import StarBorder from "@/components/ui/star-border";
import { IoLocationSharp } from "react-icons/io5";

export default function Hero() {
    const handleAnimationComplete = () => {
        console.log('');
    };
    return (
        <div className="w-full min-h-screen relative flex items-end justify-start z-10 gap-4 pb-24 px-8 md:px-32">
            <div className="absolute top-1/4 -translate-y-1/2 right-32 z-10">
                <CircularText
                    text="TECH*ACADEMY*TECH*ACADEMY*"
                    onHover="speedUp"
                    spinDuration={20}
                    className=""
                />
            </div>
            <div className="relative z-10 flex flex-col gap-4 items-start">
                <SplitText
                    text="Tech Academy"
                    className="text-3xl md:text-8xl font-extrabold text-left"
                    delay={50}
                    duration={1.25}
                    ease="power3.out"
                    splitType="chars"
                    from={{ opacity: 0, y: 40 }}
                    to={{ opacity: 1, y: 0 }}
                    threshold={0.1}
                    rootMargin="-100px"
                    textAlign="center"
                    onLetterAnimationComplete={handleAnimationComplete}
                />
                <h1 className="text-xl md:text-2xl">
                    Learn Programming the Right Way
                </h1>
                <p className="max-w-md text-muted-foreground">
                    C++, Java, Python, MySQL – Specialized coaching from School to Professional levels. Master the logic, not just the syntax.
                </p>
                <div className="flex items-center gap-4">
                    <StarBorder
                        as="button"
                        color="#1447E6"
                        speed="5s"
                    >
                        Join Now
                    </StarBorder>
                    <span
                        className="inline-flex items-center gap-2 bg-[#E8EFFD] text-[#1447E6] rounded-full px-[26px] py-[10px] font-medium text-base border border-[#C5D5F9]"
                    >
                        <IoLocationSharp className="text-base" />
                        Kothrud, Pune
                    </span>
                </div>
            </div>
        </div>
    );
}