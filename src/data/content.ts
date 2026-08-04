export const ROLES = ['Visual Designer', 'UX Designer', 'Motion Designer'];

export const MARQUEE_ITEMS = [
  'Design Systems',
  'UX',
  'Figma',
  'Animation',
  'UI',
  'Adobe Suite',
  'WordPress',
  'Motion',
  'Accessibility',
  'AI',
  'Interaction Design',
];

export interface Skill {
  label: string;
  /** Competency shown on the About bar when this skill is hovered, 0-100. */
  level: number;
  filled?: boolean;
}

export const SKILLS: Skill[] = [
  { label: 'Visual Design', level: 95, filled: false },
  { label: 'Figma', level: 95 },
  { label: 'Design Systems', level: 90 },
  { label: 'UI/UX', level: 90 },
  { label: 'Interaction Design', level: 85 },
  { label: 'Animation', level: 80 },
  { label: 'Adobe Suite', level: 90 },
  { label: 'CMS', level: 70 },
  { label: 'Motion Graphics', level: 75 },
  { label: 'Accesibility', level: 80 },
  { label: 'AI', level: 75 },
  { label: 'Claude', level: 85 },
];

export interface ExperienceItem {
  date: string;
  company: string;
  location: string;
  subtitle: string;
  featured?: boolean;
  description?: string;
  clients?: string[];
}

export const EXPERIENCE: ExperienceItem[] = [
  {
    date: '2017-2026',
    company: 'Globant',
    location: 'Bogotá, Colombia',
    subtitle: 'User Experince Designer - Visual Designer',
    featured: true,
    description:
      "at Globant, I worked as a Visual Designer and UX Designer, creating user-centered digital experiences for global clients across retail, finance, healthcare, and technology. I collaborated with cross-functional teams to design intuitive interfaces, scalable design systems, and end-to-end product experiences that balanced user needs with business goals.",
    clients: ["Dick's", 'PepsiCo', 'Directv', 'Warner Media', 'Sportian'],
  },
  {
    date: '2013-2017',
    company: 'Sancho BBDO',
    location: 'Bogotá, Colombia',
    subtitle: 'User Experince Designer - Visual Designer - Art Director - Digital Creative',
    description:
      "at Globant, I worked as a Visual Designer and UX Designer, creating user-centered digital experiences for global clients across retail, finance, healthcare, and technology. I collaborated with cross-functional teams to design intuitive interfaces, scalable design systems, and end-to-end product experiences that balanced user needs with business goals.",
    clients: ["Dick's", 'PepsiCo', 'Directv', 'Warner Media', 'Sportian'],
  },
  {
    date: '2013-2013',
    company: 'Aida LoweSSP3',
    location: 'Bogotá, Colombia',
    subtitle: 'Digital Graphic Designer',
    description:
      "at Globant, I worked as a Visual Designer and UX Designer, creating user-centered digital experiences for global clients across retail, finance, healthcare, and technology. I collaborated with cross-functional teams to design intuitive interfaces, scalable design systems, and end-to-end product experiences that balanced user needs with business goals.",
    clients: ["Dick's", 'PepsiCo', 'Directv', 'Warner Media', 'Sportian'],
  },
  {
    date: '2011-2013',
    company: 'Plasticolab',
    location: 'Bogotá, Colombia',
    subtitle: 'Digital Graphic Designer',
    description:
      "at Globant, I worked as a Visual Designer and UX Designer, creating user-centered digital experiences for global clients across retail, finance, healthcare, and technology. I collaborated with cross-functional teams to design intuitive interfaces, scalable design systems, and end-to-end product experiences that balanced user needs with business goals.",
    clients: ["Dick's", 'PepsiCo', 'Directv', 'Warner Media', 'Sportian'],
  },
];

export interface WorkLogo {
  src: string;
  alt: string;
  height: number;
  objectFit?: 'contain';
}

export interface WorkItem {
  href: string;
  bgSrc: string;
  bgAlt: string;
  logos: WorkLogo[];
  withDivider?: boolean;
}

export const WORK_ITEMS: WorkItem[] = [
  {
    href: '/work/dicks-marriott',
    bgSrc: '/images/marriott-bonvoy-bg.jpg',
    bgAlt: "Dick's Sporting Goods project",
    withDivider: true,
    logos: [
      {
        src: 'https://www.figma.com/api/mcp/asset/24a62472-dcd9-4981-818c-62250709e49c.svg',
        alt: "Dick's Sporting Goods logo",
        height: 75,
      },
      {
        src: 'https://www.figma.com/api/mcp/asset/767724f2-3b99-48b2-ac97-564630d3ac4f.svg',
        alt: 'Marriott Bonvoy logo',
        height: 52,
      },
    ],
  },
  {
    href: '/work/sportian',
    bgSrc: 'https://www.figma.com/api/mcp/asset/63e3e7f8-38af-4a2d-8b40-7b5e486ee775.png',
    bgAlt: 'Sportian project',
    logos: [
      {
        src: 'https://www.figma.com/api/mcp/asset/cf51b71c-4f6f-4606-bd83-5aef125e5ba0.svg',
        alt: '',
        height: 82,
      },
      {
        src: 'https://www.figma.com/api/mcp/asset/df7aa244-322c-4d54-aa75-9799e911cd3b.svg',
        alt: 'Sportian logo',
        height: 82,
      },
    ],
  },
  {
    href: '/work/mypepsico',
    bgSrc: 'https://www.figma.com/api/mcp/asset/65de9abd-f459-486e-a1d2-39d87ffb9f77.png',
    bgAlt: 'PepsiCo project',
    logos: [
      {
        src: 'https://www.figma.com/api/mcp/asset/88c53d0f-6398-4769-989b-9a2376f9cfb6.png',
        alt: 'my PepsiCo logo',
        height: 42,
        objectFit: 'contain',
      },
    ],
  },
];

export interface ProjectOrderEntry {
  slug: string;
  title: string;
}

/** Order used for the Previous/Next project navigation on each detail page. */
export const PROJECT_ORDER: ProjectOrderEntry[] = [
  { slug: 'dicks-marriott', title: "Dick's + Marriott" },
  { slug: 'sportian', title: 'Sportian' },
  { slug: 'mypepsico', title: 'MyPepsiCo' },
];
