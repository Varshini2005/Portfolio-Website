import Image from "next/image";

export default function SkillCard({ title, skills }) {
  return (
    <div  className="bg-#888888  backdrop-blur-md border border-#444444  rounded-2xl  shadow-[0_0_30px_rgba(255,255,255,0.12)]  p-8 m-20">

      <h2 className="text-xl font-bold mb-8 text-center">{title}</h2>

      <div className="grid grid-cols-7 ">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="flex flex-col items-center gap-2 rounded-xl "
          >
            <Image
              src={skill.icon}
              alt={skill.name}
              width={85}
              height={85}
              className="rounded-full shadow-xl/20 p-1 hover:scale-110"
            />

            {/* <p className="text-sm text-center">{skill.name}</p> */}
          </div>
        ))}
      </div>
    </div>
  );
}