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
  /** Renders a "Coming Soon" tag instead of "View Project" and disables the link. */
  comingSoon?: boolean;
  /** Client name shown as text when there's no logo asset yet (coming-soon items). */
  label?: string;
}

export const WORK_ITEMS: WorkItem[] = [
  {
    href: '/work/dicks-marriott',
    bgSrc: '/images/backgrounds/marriott-bonvoy-bg.jpg',
    bgAlt: "Dick's Sporting Goods project",
    withDivider: true,
    logos: [
      {
        src: '/images/logos/dicks-marriott-logo.svg',
        alt: "Dick's Sporting Goods logo",
        height: 75,
      },
    ],
  },
  {
    href: '/work/sportian',
    bgSrc: '/images/backgrounds/sportian-bg.jpg',
    bgAlt: 'Sportian project',
    logos: [
      {
        src: '/images/logos/sportian-logo.svg',
        alt: '',
        height: 70,
      },
    ],
  },
  {
    href: '/work/mypepsico',
    bgSrc: '/images/backgrounds/mypepsico-bg.jpg',
    bgAlt: 'PepsiCo project',
    logos: [
      {
        src: '/images/logos/mypepsico-logo.png',
        alt: 'my PepsiCo logo',
        height: 42,
        objectFit: 'contain',
      },
    ],
  },
  {
    href: '',
    bgSrc: '',
    bgAlt: 'DirectvGo project — coming soon',
    comingSoon: true,
    label: 'DirectvGo',
    logos: [
      {
        src: '/images/logos/directv-go-logo.svg',
        alt: 'directv go logo',
        height: 42,
        objectFit: 'contain',
      },
    ],
  },
  {
    href: '',
    bgSrc: '',
    bgAlt: 'Warner Media project — coming soon',
    comingSoon: true,
    label: 'Warner Media',
    logos: [
      {
        src: '/images/logos/warnermedia-logo.png',
        alt: 'warner media logo',
        height: 42,
        objectFit: 'contain',
      },
    ],
  },
  {
    href: '',
    bgSrc: '',
    bgAlt: 'Sancho BBDO project — coming soon',
    comingSoon: true,
    label: 'Sancho BBDO',
    logos: [
      {
        src: '/images/logos/sanchobbdo-logo.svg',
        alt: 'sancho bbdo logo',
        height: 62,
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
