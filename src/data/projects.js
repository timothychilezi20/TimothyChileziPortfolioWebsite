export const CONTACT_EMAIL = "timothychilezi@gmail.com";

export const projects = [
  {
    slug: "code-red-escape",
    title: "Code Red: Escape",
    category: "game",
    type: "First person shooter",
    description:
      "A first-person shooter where a player must shoot their way through robot guards to escape a prison setting.",
    tags: ["Unity", "C#", "Blender", "Krita"],
    image: "/images/projects/code-red-escape.jpg",
    accent: "#2B2B4A",
    link: `mailto:${CONTACT_EMAIL}?subject=Code Red: Escape`,
  },
  {
    slug: "hireme",
    title: "HireMe",
    category: "website",
    type: "Web application",
    description:
      "Student-focused job and internship platform designed to connect students with employment opportunities in an accessible way.",
    tags: ["React", "CSS", "JavaScript", "JSX", "SQL"],
    image: "/images/projects/hireme.jpg",
    accent: "#3157FF",
    link: `mailto:${CONTACT_EMAIL}?subject=HireMe`,
  },
  {
    slug: "lake-fundudzi",
    title: "The Legend of Lake Fundudzi",
    category: "story",
    type: "TTRPG manual",
    description:
      "A tabletop RPG of rituals, ancestors and hard choices at the sacred Lake Fundudzi. Will you protect tradition, guide the outsiders, or study what you don't yet understand?",
    tags: ["Canva", "Microsoft Word"],
    image: "/images/projects/lake-fundudzi.png",
    accent: "#CCF55E",
    link: `mailto:${CONTACT_EMAIL}?subject=The Legend of Lake Fundudzi`,
  },
];

export const getProjectsByCategory = (category) =>
  projects.filter((p) => p.category === category);

export const getProjectBySlug = (slug) => projects.find((p) => p.slug === slug);
