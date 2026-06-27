import SkillCard from "@/components/Skills/SkillCard";
import { skillCategories } from "@/data/skills";

export default function Skills() {
  return (
    <div className="space-y-12 m-20">
    <h1 className="text-center">Skills</h1>
        <section className="space-y-7">
      {skillCategories.map((category) => (
        <SkillCard
          key={category.title}
          title={category.title}
          skills={category.skills}
        />
      ))}
    </section>

    </div>

  );
}