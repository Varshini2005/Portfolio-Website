import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";
import styles from "./Projects.module.css"

export default function Blogs() {
  return (
    <section className="overflow-hidden py-10 m-20">
        <h1 className="text-4xl font-bold text-center mb-10">
          Latest Blogs
        </h1>
      <div className={styles.marquee}>
        <div className={styles.marqueeContent}>
     
                {[...projects, ...projects].map((project, index) => (
            <div className= {styles.card} key={index}>
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}