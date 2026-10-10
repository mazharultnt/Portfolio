/**
 * EXPERIENCE, ACHIEVEMENTS AND CERTIFICATIONS
 * All entries are honest and based on real activity. Edit or add your own as you grow.
 */

export type TimelineItem = {
  period: string;
  title: string;
  place: string;
  accent: "blue" | "teal" | "violet" | "green" | "amber" | "rose";
  points: string[];
};

export const timeline: TimelineItem[] = [
  {
    period: "2026",
    title: "Full Stack Web Development Diploma",
    place: "Creative IT Institute",
    accent: "violet",
    points: [
      "Started in January 2026 and completed the front-end track: HTML, CSS, JavaScript and React.",
      "Backend development is the next part of the course.",
      "Practice weekly by rebuilding Figma designs as landing pages.",
    ],
  },
  {
    period: "2025 to 2026",
    title: "Google Business Profile Client Work",
    place: "Freelance, alongside college",
    accent: "teal",
    points: [
      "Learned Google Business Profile verification and ranking as a side skill during college.",
      "Helped a client in the USA verify their business profile by joining a live video call with the Google support team, then bringing the client into the call.",
      "With a classmate, worked on a 3-month monthly ranking project for a call-center business client.",
    ],
  },
  {
    period: "Completed",
    title: "NSDA Web Design Level 3",
    place: "National Skills Development Authority, Bangladesh",
    accent: "blue",
    points: [
      "Completed the Level 3 exam by building a multi-page Bootstrap e-commerce website.",
      "Debugged a jQuery slim vs full version problem that was breaking the carousels.",
    ],
  },
  {
    period: "2023",
    title: "SSC, Business Studies",
    place: "Bangladesh",
    accent: "amber",
    points: [
      "Completed secondary education before moving into web development.",
      "HSC (Arts) studies followed alongside my practical learning.",
    ],
  },
];

export type Achievement = {
  title: string;
  text: string;
  accent: "blue" | "teal" | "violet" | "green" | "amber" | "rose";
};

export const achievements: Achievement[] = [
  {
    title: "15+ practice projects built",
    text: "Landing pages, multi-page websites and small apps built from Figma designs and my own ideas.",
    accent: "blue",
  },
  {
    title: "Real client call handled",
    text: "Verified a US client's Google Business Profile through a live video call with Google's support team.",
    accent: "teal",
  },
  {
    title: "3-month ranking project",
    text: "Worked with a classmate on Google Business Profile ranking for a call-center business.",
    accent: "violet",
  },
  {
    title: "Weekly building habit",
    text: "A steady routine of building new pages every week with custom CSS, Bootstrap and Tailwind.",
    accent: "green",
  },
];

export type Certificate = {
  image: string;
  title: string;
  issuer: string;
  status: string;
  statusTone: "green" | "amber";
};

export const certificates: Certificate[] = [
  {
    image: "certificate-1.jpg",
    title: "Web Design, Level 3",
    issuer: "NSDA (National Skills Development Authority)",
    status: "Exam completed",
    statusTone: "green",
  },
  {
    image: "certificate-2.jpg",
    title: "Full Stack Web Development",
    issuer: "Creative IT Institute",
    status: "In progress",
    statusTone: "amber",
  },
];
