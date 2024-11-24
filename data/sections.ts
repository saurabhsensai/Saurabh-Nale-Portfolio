import { AiFillSafetyCertificate } from "react-icons/ai";
import { BiDonateHeart } from "react-icons/bi";
import { FaAward, FaDev, FaFilePdf, FaPaintBrush, FaPaperPlane, FaSignLanguage, FaTools } from "react-icons/fa";
import { MdBook, MdCamera, MdInfo, MdMusicNote, MdPerson, MdSchool, MdWork } from "react-icons/md";
import { Section, SectionArray, SectionMap } from "types/Sections";

const sectionsList: SectionMap = {
  [Section.AboutMe]: {
    icon: MdPerson,
    title: "About Me",
  },
  [Section.WorkExperience]: {
    icon: MdWork,
    title: "Work Experience",
  },
  [Section.Education]: {
    icon: MdSchool,
    title: "Education",
  },
  [Section.Skills]: {
    icon: FaTools,
    title: "Skills",
  },
  [Section.Projects]: {
    icon: FaDev,
    title: "Projects",
  },

  [Section.Achievements]: {
    icon: FaAward,
    title: "Achievements",
  },
  [Section.Certifications]: {
    icon: AiFillSafetyCertificate,
    title: "Certifications",
  },
  [Section.Philantrophy]: {
    icon: BiDonateHeart,
    title: "Philantrophy",
  },
  [Section.Resume]: {
    icon: FaFilePdf,
    title: "Resume",
  },
  [Section.Contact]: {
    icon: FaPaperPlane,
    title: "Contact",
  },
  
};

export const sectionsArray: SectionArray = Object.entries(sectionsList).map(([id, { icon, title }]) => ({
  id: id as Section,
  icon,
  title,
}));

export default sectionsList;
