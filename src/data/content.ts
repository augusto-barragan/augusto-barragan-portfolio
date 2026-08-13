export const ROLES = ['Visual Designer', 'UX Designer', 'Product Designer', 'Motion Designer'];

export const MARQUEE_ITEMS = [
  'Design Systems',
  'UX',
  'Figma',
  'Animation',
  'Adobe After Effects',
  'UI',
  'Adobe Photoshop',
  'WordPress',
  'Motion',
  'Accessibility',
  'AI',
  'Interaction Design',
  'Adobe Illustrator',
];

export interface Skill {
  label: string;
  /** Competency shown on the About bar when this skill is hovered, 0-100. */
  level: number;
  filled?: boolean;
}

export const SKILLS: Skill[] = [
  { label: 'Visual Design', level: 94, filled: false },
  { label: 'Figma', level: 94 },
  { label: 'Design Systems', level: 85 },
  { label: 'UI/UX', level: 93 },
  { label: 'Interaction Design', level: 89 },
  { label: 'Animation', level: 70 },
  { label: 'Adobe Photoshop', level: 87 },
  { label: 'Adobe Illustrator', level: 83 },
  { label: 'Adobe After Effects', level: 86 },
  { label: 'WordPress', level: 75 },
  { label: 'Motion Graphics', level: 78 },
  { label: 'Accesibility', level: 73 },
  { label: 'AI', level: 76 },
  { label: 'HTML/CSS', level: 72 },
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
    subtitle: 'User Experience Designer - Visual Designer',
    featured: true,
    description:
      "At Globant, I worked as a Visual Designer and UX Designer, creating user-centered digital experiences for global clients across retail, finance, healthcare, and technology. I collaborated with cross-functional teams to design intuitive interfaces, scalable design systems, and end-to-end product experiences that balanced user needs with business goals.",
    clients: ["Dick's", 'PepsiCo', 'Directv', 'Warner Media', 'Sportian'],
  },
  {
    date: '2013-2017',
    company: 'Sancho BBDO',
    location: 'Bogotá, Colombia',
    subtitle: 'User Experience Designer - Visual Designer - Art Director - Digital Creative',
    description:
      "During my time at Sancho BBDO, I partnered with multidisciplinary teams to create digital experiences for a diverse portfolio of brands. Working across UX, UI, and digital creative, I designed websites, campaigns, and interactive experiences that balanced creativity, usability, and business goals.",
    clients: ["Gatorade", 'Pepsi', 'Mountain Dew', 'Cheetos', 'El Tiempo'],
  },
  {
    date: '2013-2013',
    company: 'Aida LoweSSP3',
    location: 'Bogotá, Colombia',
    subtitle: 'Digital Graphic Designer',
    description:
      "As a Digital Designer at AIDA Lowe SSP3, I focused on creating landing pages, email marketing campaigns, and other digital assets for a variety of brands. I collaborated with creative and marketing teams to deliver visually engaging, conversion-focused experiences while ensuring consistency across digital touchpoints.",
    clients: ["AON", 'McAfee', 'Colsubsidio'],
  },
  {
    date: '2011-2013',
    company: 'Plasticolab',
    location: 'Bogotá, Colombia',
    subtitle: 'Digital Graphic Designer',
    description:
      "At Plasticolab, I worked as a Motion Graphics Designer, producing television commercials from concept to final delivery. I was involved throughout the entire creative process, including pre-production, production, and post-production, collaborating with multidisciplinary teams to bring campaigns to life. During this time, I also began designing web interfaces, laying the foundation for my transition into digital product and UX/UI design.",
    clients: ["Yupi", 'JGB', 'MinTic', 'Seven-Seven'],
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
    href: '/work/directv-go',
    bgSrc: '/images/backgrounds/directv-bg.jpg',
    bgAlt: 'DirectvGo project',
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
    bgSrc: '/images/backgrounds/warnermedia-bg.jpg',
    bgAlt: 'Warner Media project — coming soon',
    comingSoon: true,
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
    bgSrc: '/images/backgrounds/sancho-bg.jpg',
    bgAlt: 'Sancho BBDO project — coming soon',
    comingSoon: true,
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
  { slug: 'directv-go', title: 'DirectvGo' },
];
