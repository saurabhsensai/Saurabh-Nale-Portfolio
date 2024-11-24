import Tippy from "@tippyjs/react";
import clsx from "clsx";
import Image from "next/image";
import { useState } from "react";
import { FaLocationArrow } from "react-icons/fa";
import { MdMoreHoriz } from "react-icons/md";
import { Section } from "types/Sections";
import { getSectionHeading } from "utils";

const DISPLAY_COUNT = 3;

type WorkExperience = {
  id: number;
  logo: string;
  name: string;
  period: { start: string; end: string };
  position: string;
  location: string;
  summary: string;
  keyFocus: string[];
};

const workExperiences: WorkExperience[] = [
  {
    id: 1,
    logo: "/images/work-experience/rit.png",
    name: "Rajarambapu Institute Of Technology",
    period: { start: "Jan 24", end: "Jul 24" },
    position: "Research Assistant",
    location: "Sangli, India",
    summary: "Collaborated with Dr. V. H. Kalmani on a research project focused on applying vision transformers for the segmentation of kidney blood vessels in HIP CT scans. Developed advanced algorithms and scripts to generate precise 3D reconstructions of blood vessel networks from CT scan images, enhancing anatomical analysis capabilities by 25%. Achieved a 93.08 Dice coefficient with a novel hybrid loss function, outperforming standard segmentation metrics in the field.",
    keyFocus: ["Machine Learning", "Computer Vision", "Python", "Tensorflow"],
  },
  {
    id: 2,
    logo: "/images/work-experience/cong.png",
    name: "Cognautica.",
    period: { start: "Oct 23", end: "Jan 24" },
    position: "Computer Vision Intern",
    location: "Remote",
    summary: "Interning at Cognautica a startup based in San Francisco, I actively contribute to the development of an AI grader system for U.S. schools, with a primary focus on refining OCR accuracy for paper PDFs. Contributed to the development of an AI-driven grading system for U.S. schools, achieving improvement in OCR accuracy for scanned paper PDFs.",
    keyFocus: ["OCR", "Deep Learing", "Git", "AWS", "In-Depth Documentation"],
  },
  
 
];

type Props = {
  data: WorkExperience;
  isFirst: boolean;
  isLast: boolean;
};

const WorkExperience: React.FC<Props> = ({ data, isFirst, isLast }) => (
  <div className="flex group">
    <div className={clsx("ml-1 w-1 flex-shrink-0 bg-neutral-500/25", { "rounded-t": isFirst, "rounded-b": isLast })} />

    <div className="-ml-2 mt-8 flex-shrink-0 relative w-3 h-3 rounded-full shadow-lg bg-teal-500/80 dark:bg-white/80 group-hover:w-6 transition-[width]" />

    <div className="mt-5 ml-8 grid gap-2 pb-2">
      <div className="relative w-[100px] h-15">
        <Image src={data.logo} alt={data.name} width={100} height={40} className="object-contain" />
      </div>

      <div>
        <h3>
          <span className="text-base font-bold">{data.name}</span>{" "}
          <span className="text-xs">
            ({data.period.start} - {data.period.end})
          </span>
        </h3>
        <h4>{data.position}</h4>
      </div>

      <h5 className="my-1 flex gap-2 items-center text-xs">
        <FaLocationArrow />
        <span>{data.location}</span>
      </h5>

      <p className="prose prose-sm prose-neutral dark:prose-invert">{data.summary}</p>

      <p className="text-xs leading-relaxed prose-sm prose-neutral dark:prose-invert">
        <strong>Key Focus:</strong> {data.keyFocus.join(", ")}
      </p>
    </div>
  </div>
);

const WorkExperienceTimeline = () => {
  const [showMore, setShowMore] = useState(workExperiences.length > DISPLAY_COUNT ? false : true);

  return (
    <div id={Section.WorkExperience}>
      {getSectionHeading(Section.WorkExperience)}

      <div className="flex flex-col">
        {workExperiences
          .filter((_, index) => (showMore ? true : index < DISPLAY_COUNT))
          .map((data, index) => (
            <WorkExperience key={data.id} data={data} isFirst={index === 0} isLast={index === 2} />
          ))}
      </div>

      {!showMore && (
        <Tippy content={`Show ${workExperiences.length - DISPLAY_COUNT} More`} placement="right">
          <div className="inline-block ml-8 p-2 cursor-pointer" onClick={() => setShowMore(true)}>
            <MdMoreHoriz size="24" />
          </div>
        </Tippy>
      )}
    </div>
  );
};

export default WorkExperienceTimeline;
