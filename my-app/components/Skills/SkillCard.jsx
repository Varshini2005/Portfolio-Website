import Image from "next/image";

export default function SkillCard({ title, skills }) {
  return (
    <div className="rounded-2xl m-20 shadow-xl p-8">
      <h2 className="text-xl font-bold mb-8 text-center">{title}</h2>

      <div className="grid grid-cols-7 md:grid-cols-4 lg:grid-cols-5 gap-2">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="flex flex-col items-center gap-1 p-1 rounded-xl "
          >
            <Image
              src={skill.icon}
              alt={skill.name}
              width={85}
              height={85}
              className="rounded-full shadow-xl/20 hover:scale-110"
            />

            <p className="text-sm text-center">{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}