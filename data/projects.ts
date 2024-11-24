import type { Project } from "types/Sections";

const projectsList: Project[] = [
  {
    id: 1,
    image: "/images/projects/tp.jpg",
    name: "Tiny Painters",
    summary:
      "Tiny Painters is a simple, fun drawing app that lets you create colorful artwork on your Android device.",
    tags: ["Java", "Android Studio", "Google Play Store", "XML"],
    link: {
      web: "https://play.google.com/store/apps/details?id=rit.tyit.paint2&pcampaignid=web_share&pli=1",
      github: "https://github.com/saurabhsensai/TinyPainters",
    },
  },
  {
    id: 2,
    image: "/images/projects/ECGAI.gif",
    name: "ECG AI: An intelligent System for cardiac health monitoring",
    summary:
      "ECG AI! Combining Arduino and AD8232 hardware with a custom CNN model, I built a system that analyzes ECG signals for abnormalities in real-time. This opens doors for early detection of cardiac issues, increased accessibility to monitoring, and empowering individuals with real-time feedback.",
    tags: ["Machine Learning", "Computer Vision", "Signal Processing", "Python Flask"],
    link: {
      web: "https://github.com/saurabhsensai/ECG-AI",
      github: "https://github.com/saurabhsensai/ECG-AI",
    },
  },
  
];

export default projectsList;
