import { JSX } from "react";

interface Props {
  skill: {
    tilt: string;
    title: string;
    icon: JSX.Element;
  };
  index: number;
}
export default function SkillCard({ skill, index }: Props) {
  return (
    <div
      key={index}
      className={`bg-zinc-900 h-[365px] lg:w-[430px] rounded-2xl px-8 py-10 ${skill.tilt} transition-transform`}
    >
      {skill.icon}
      <h3 className="text-xl font-semibold mb-2">{skill.title}</h3>
      <p className="text-gray-400 text-sm">
        Duis aute irure dolor in reprehenderit in voluptate. Ut enim ad minim
        veniam, quis
      </p>
    </div>
  );
}
