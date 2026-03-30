"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { GraduationCap, Briefcase } from "lucide-react";

export enum CompanyType {
  Academia = "academia",
  Industry = "industry",
}

type ExperienceCardProps = {
  id: number;
  companyName: string;
  role: string;
  startDate: string;
  endDate: string;
  link: string;
  isFirst?: boolean;
  isLast?: boolean;
  description: string;
  type?: CompanyType;
};

const getIcon = (type?: CompanyType): React.ReactNode => {
  if (type === CompanyType.Academia) {
    return <GraduationCap className="size-6 text-[#1447E6]" />;
  }
  return <Briefcase className="size-6 text-foreground" />;
};

const ExperienceCard = ({
  companyName,
  role,
  startDate,
  endDate,
  link,
  isFirst,
  isLast,
  description,
  type,
}: ExperienceCardProps) => {
  const Icon = getIcon(type);
  const hasDescription = description?.trim().length > 0;
  const [isOpen, setIsOpen] = useState(isFirst && hasDescription);

  const handleClick = () => {
    if (!hasDescription) return;
    setIsOpen(!isOpen);
  };

  const renderDescription = (value: string) => {
    const lines = value
      .split("\n")
      .map((line) => line.trim())
      .filter(Boolean);
    const bulletLines = lines.filter((line) => line.startsWith("- "));
    const textLines = lines.filter((line) => !line.startsWith("- "));

    if (bulletLines.length === 0) {
      if (lines.length <= 1) {
        return <p className="text-sm text-muted-foreground">{value}</p>;
      }

      return (
        <ul className="list-disc pl-4 text-sm text-muted-foreground space-y-1">
          {lines.map((line, index) => (
            <li key={`exp-line-${index}`}>{line}</li>
          ))}
        </ul>
      );
    }

    return (
      <div className="space-y-2">
        {textLines.map((line, index) => (
          <p key={`exp-text-${index}`} className="text-sm text-muted-foreground">
            {line}
          </p>
        ))}
        <ul className="list-disc pl-4 text-sm text-muted-foreground space-y-1">
          {bulletLines.map((line, index) => (
            <li key={`exp-bullet-${index}`}>{line.replace(/^-[\s]+/, "")}</li>
          ))}
        </ul>
      </div>
    );
  };

  const Wrapper = link !== "#" && link !== "" ? Link : "div";

  return (
    <div className="flex flex-col px-2 md:px-0 gap-2 group z-20">
      <div className="flex items-start gap-4 transition-opacity duration-150 group-hover/experience:opacity-40 group-hover:opacity-100!">
        <div className="flex flex-col items-center self-stretch pt-1">
          <Wrapper
            href={link}
            target={link !== "#" ? "_blank" : undefined}
            className="icon-container size-11 sm:size-12 aspect-square flex items-center justify-center bg-muted/30 border border-border/50 rounded-xl hover:bg-muted/80 transition-colors"
          >
            {Icon}
          </Wrapper>
          <div
            className={cn(
              "w-px bg-border flex-1 mt-3",
              isLast ? "opacity-0" : "opacity-100 min-h-6"
            )}
          />
        </div>

        <div className="flex-1 pb-6">
          <div
            onClick={handleClick}
            className={cn("size-full", { "cursor-pointer": hasDescription })}
            aria-disabled={!hasDescription}
          >
            <h3 className="text-base font-semibold uppercase tracking-wider">{role}</h3>
            <div className="flex w-full justify-between items-center mt-1">
              <p className="text-sm font-medium text-muted-foreground  sm:pr-0 pr-2 group-hover:text-[#1447E6] transition-colors">
                {companyName}
              </p>
              <div className="grow border-b border-dashed border-border/60 mx-4" />
              <p className="text-sm text-muted-foreground text-right w-[150px] group-hover:text-foreground transition-colors whitespace-nowrap">
                {startDate} — {endDate}
              </p>
            </div>
          </div>
          
          <AnimatePresence initial={false}>
            {isOpen && hasDescription && (
              <motion.div
                key="experience-description"
                initial={{ height: 0, opacity: 0, y: -6 }}
                animate={{ height: "auto", opacity: 1, y: 0 }}
                exit={{ height: 0, opacity: 0, y: -6 }}
                transition={{ ease: "easeOut", duration: 0.125 }}
                className="overflow-hidden mt-4"
              >
                {renderDescription(description)}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;
