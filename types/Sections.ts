import type { IconType } from "react-icons";

export enum Section {
  "AboutMe" = "about-me",
  "Achievements" = "achievements",
  "Certifications" = "certifications",
  "Education" = "education",
  "Philantrophy" = "philantrophy",
  "Projects" = "projects",
  "Skills" = "skills",
  "WorkExperience" = "work-experience",
  "Resume" = "resume",
  "Contact" = "contact",
}

export type SectionMap = Record<Section, { icon: IconType; title: string }>;

export type SectionArray = {
  id: Section;
  title: string;
  icon: IconType;
}[];

export type Article = {
  id: number;
  title: string;
  description: string;
  url: string;
  public_reactions_count: number;
  social_image: string;
  published_at: string;
  tag_list: string[];
};

export type Language = {
  id: number;
  text: string;
  language: string;
  translation?: string;
};

export type Project = {
  id: number;
  image: string;
  name: string;
  summary: string;
  tags: string[];
  link?: {
    web?: string;
    github?: string;
  };
};

export type Achievement = {
  id: number;
  title: string;
  subtitle: string;
};

export type Certification = {
  id: number;
  title: string;
  subtitle: string;
};

export type Philantrophy = {
  id: number;
  title: string;
  description: string;
};

export type InstagramMedia = {
  id: string;
  media_url: string;
  permalink: string;
  media_type: "IMAGE" | "VIDEO" | "CAROUSEL_ALBUM" | "REELS";
};

export type DribbbleShot = {
  id: number;
  title: string;
  html_url: string;
  images: {
    hidpi: string;
  };
};
