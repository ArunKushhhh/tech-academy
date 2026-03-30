import userData from "@/config/userData";
import ExperienceCard from "../ui/experience-card";

const Experience = () => {
  const { experience } = userData;

  return (
    <div className="w-full mt-8 border-t border-border/50 pt-16">
      <div className="w-full space-y-8">
        <div className="flex items-center justify-start gap-3">
          <h2 className="text-3xl font-bold tracking-tight text-foreground">
            Experience Timeline
          </h2>
          <div className="h-px bg-border/50 flex-1 ml-4" />
        </div>
        
        <div className="group/experience flex flex-col justify-center">
          {experience.map((exp, index) => (
            <ExperienceCard
              key={index}
              id={exp.id}
              role={exp.role}
              companyName={exp.company}
              startDate={exp.startDate}
              endDate={exp.endDate}
              link={exp.link}
              description={exp.description}
              isFirst={index === 0}
              isLast={index === experience.length - 1}
              type={exp.type as any}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
