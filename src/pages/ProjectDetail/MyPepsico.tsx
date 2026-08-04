import Footer from '../../components/Footer/Footer';
import ImageBand from '../../components/ProjectDetail/ImageBand';
import styles from '../../components/ProjectDetail/ProjectDetail.module.css';
import ProjectBullets from '../../components/ProjectDetail/ProjectBullets';
import ProjectHeader from '../../components/ProjectDetail/ProjectHeader';
import ProjectHero from '../../components/ProjectDetail/ProjectHero';
import ProjectNav from '../../components/ProjectDetail/ProjectNav';
import ProjectSection from '../../components/ProjectDetail/ProjectSection';
import ScreensImage from '../../components/ProjectDetail/ScreensImage';
import { ShowcasePair, ShowcaseSection } from '../../components/ProjectDetail/ShowcaseSection';

const BASE = '/images/projects/mypepsico';

export default function MyPepsico() {
  return (
    <div className={styles.page}>
      <div className={styles.wrapper}>
        <ProjectHeader />

        <ProjectHero
          year="2026"
          title="Mypepsico"
          subtitle="Building a Scalable Design System for MyPepsiCo"
          summary="PepsiCo initiated the creation of a centralized Design System to support a ServiceNow based back office platform used across multiple digital products. The goal was to establish a consistent design foundation that would enable designers to build and maintain experiences more efficiently across web, desktop, iOS, and Android."
        />

        <ImageBand src={`${BASE}/hero.png`} alt="MyPepsiCo design system overview" />

        <ProjectBullets
          items={[
            { label: 'Client', value: 'PepsiCo' },
            { label: 'Outcome', value: 'Desktop' },
            { label: 'Rol', value: 'Ux/Ui Designer' },
            { label: 'Tools', value: 'Figma' },
          ]}
        />

        <ProjectSection
          label="The challenge"
          heading="Although the platform was already in development, the design assets lacked structure and consistency."
          body="Components had been created independently without a scalable methodology, resulting in duplicated patterns, inconsistent behaviors, and inefficient design workflows. The challenge was to transform this fragmented library into a structured system that could support the product's continued growth."
        />

        <ScreensImage src={`${BASE}/screens-01.png`} alt="MyPepsiCo desktop overview" background="white" />

        <ProjectSection
          label="The Solution"
          heading="As a Visual Designer, I helped establish the foundations of a scalable Design System by defining design variables, foundational styles, and reusable component patterns."
          body={[
            'Drawing on Atomic Design principles, I reorganized the component library into a clear and maintainable structure, making it easier for designers to create new experiences while ensuring consistency across the platform.',
            'The resulting system improved collaboration, accelerated page creation, and provided a flexible foundation that could evolve alongside the product and its growing ecosystem of back-office applications.',
          ]}
        />

        <ShowcaseSection
          eyebrow="Typography"
          description="One of the key challenges was the absence of typography variables, which led to inconsistent text styles throughout the product. I defined a semantic typography system built on reusable variables, creating a clear hierarchy that could scale across features and platforms. The result was a more maintainable design system that improved consistency, reduced redundancy, and streamlined collaboration with engineering."
          image={`${BASE}/typography.png`}
          imageAlt="Typography scale documentation"
          background="black"
        />

        <ShowcaseSection
          eyebrow="Colors"
          description="The product relied on a growing collection of hard-coded colors, making the interface difficult to maintain and scale. I introduced a structured color system based on design tokens and semantic color variables, defining clear roles for backgrounds, text, borders, and interactive states. This approach improved visual consistency, simplified theming, and provided a scalable foundation for future product enhancements."
          image={`${BASE}/colors.png`}
          imageAlt="Color palette documentation"
          background="dark"
        />

        <ShowcasePair
          panels={[
            {
              eyebrow: 'Grid System',
              description:
                'I established a responsive grid system to create a consistent layout structure across desktop, tablet, and mobile experiences. The grid provided a reliable framework for alignment, content hierarchy, and responsive behavior, ensuring a cohesive experience across all touchpoints while simplifying collaboration with engineering.',
              image: `${BASE}/grid.png`,
              imageAlt: 'Grid system documentation',
            },
            {
              eyebrow: 'Spacing',
              description:
                'To eliminate inconsistent spacing throughout the product, I defined a standardized spacing scale based on reusable design tokens. This system introduced a consistent visual rhythm, reduced design inconsistencies, and made layouts easier to maintain and scale as the product evolved.',
              image: `${BASE}/spacing.png`,
              imageAlt: 'Spacing scale documentation',
            },
          ]}
        />

        <ShowcaseSection
          eyebrow="Icons"
          description="A consistent icon library across four sizes rounded out the system's foundational styles, keeping every product surface visually aligned."
          image={`${BASE}/icons.png`}
          imageAlt="Icon library documentation"
          background="black"
        />

        <ShowcaseSection
          eyebrow="Navigation"
          description="I documented the main navigation and top header components so every team could implement the same wayfinding pattern consistently across MyPepsiCo's back-office surfaces."
          image={`${BASE}/navigation.png`}
          imageAlt="Navigation component documentation"
          background="black"
        />

        <ShowcaseSection
          eyebrow="Components"
          description="The product contained multiple variations of the same UI elements, leading to visual inconsistencies and unnecessary complexity. I audited and consolidated core components—including buttons, inputs, cards, banners, galleries, and navigation patterns—into a unified, reusable component library. Each component was designed with scalability and flexibility in mind, reducing duplication, improving consistency across the product, and accelerating both design and development workflows."
          image={`${BASE}/components.png`}
          imageAlt="Component library documentation"
          background="dark"
        />
      </div>

      <ProjectNav current="mypepsico" />
      <Footer />
    </div>
  );
}
