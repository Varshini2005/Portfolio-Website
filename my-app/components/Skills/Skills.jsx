"use client";

import { motion } from "framer-motion";
import SkillCard from "@/components/Skills/SkillCard";
import { skillCategories } from "@/data/skills";

export default function Skills() {
  return (
    <div className="space-y-12 m-20">
      <h1 className="text-center text-4xl font-bold">Skills</h1>

      <section className="space-y-7">
        {skillCategories.map((category, index) => (
          <motion.div
            key={category.title}
            initial={{
              opacity: 0,
              x: index % 2 === 0 ? -150 : 150,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
            }}
            viewport={{ once: false, amount: 0.3 }}
          >
            <SkillCard
              title={category.title}
              skills={category.skills}
            />
          </motion.div>
        ))}
      </section>
    </div>
  );
}