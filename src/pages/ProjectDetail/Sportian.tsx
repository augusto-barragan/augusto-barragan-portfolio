import Footer from '../../components/Footer/Footer';
import DesktopGrid from '../../components/ProjectDetail/DesktopGrid';
import ImageBand from '../../components/ProjectDetail/ImageBand';
import styles from '../../components/ProjectDetail/ProjectDetail.module.css';
import ProjectBullets from '../../components/ProjectDetail/ProjectBullets';
import ProjectHeader from '../../components/ProjectDetail/ProjectHeader';
import ProjectHero from '../../components/ProjectDetail/ProjectHero';
import ProjectNav from '../../components/ProjectDetail/ProjectNav';
import ProjectSection from '../../components/ProjectDetail/ProjectSection';
import ScreensImage from '../../components/ProjectDetail/ScreensImage';
import StatsRow from '../../components/ProjectDetail/StatsRow';

const BASE = '/images/projects/sportian';

const GRID_SCREENS = [
  { src: `${BASE}/grid-01.png`, alt: 'Events management module' },
  { src: `${BASE}/grid-02.png`, alt: 'Ticket rules configuration' },
  { src: `${BASE}/grid-03.png`, alt: 'Seat availability view' },
  { src: `${BASE}/grid-04.png`, alt: 'Pass designer module' },
];

export default function Sportian() {
  return (
    <div className={styles.page}>
      <div className={styles.wrapper}>
        <ProjectHeader />

        <ProjectHero
          year="2022-2025"
          title="sportian"
          subtitle="Enterprise Platform for Sports Venue Operations"
          summary="Sportian, a Globant company, set out to redesign it's Venue Management Platform to help sports organizations and live event operators streamline venue operations and unlock new revenue opportunities. The new desktop back office platform centralizes key operational workflows including event management, ticketing, seating configuration, and pass creation into a single, scalable ecosystem."
        />

        <ImageBand src={`${BASE}/hero.jpg`} alt="Sportian venue management platform" />

        <ProjectBullets
          items={[
            { label: 'Client', value: 'Sportian' },
            { label: 'Outcome', value: 'Desktop' },
            { label: 'Rol', value: 'Ux/Ui Designer' },
            { label: 'Tools', value: 'Figma' },
          ]}
        />

        <ProjectSection
          label="The challenge"
          heading="The existing platform had become outdated but remained deeply embedded in the daily workflows of venue operators."
          body="The challenge was to redesign the experience without disrupting familiar processes while introducing a more intuitive, scalable, and efficient interface. The platform also needed to support multiple operational areas, allowing clubs to manage complex venue configurations from a unified system."
        />

        <ScreensImage src={`${BASE}/screens-01.png`} alt="Sportian venue operations screens" />

        <ProjectSection
          label="The Solution"
          heading="As both UX and Visual Designer, I contributed to multiple product teams, designing end-to-end experiences across several core modules of the platform."
          body={[
            "I designed the Events module, enabling clubs to create, edit, and manage live events through a streamlined workflow. For the Rules module, I helped define flexible configuration experiences that allow operators to build custom seating groups and ticket packages. Within Availability, I designed interfaces that provide real-time seat availability across different events, helping teams make informed operational decisions. I also worked on the Pass Designer, where clubs can create and customize digital and printable passes directly within the platform.",
            'Across every module, I focused on simplifying complex enterprise workflows, improving information hierarchy, and creating a consistent visual language that could scale with the product as new capabilities were introduced.',
          ]}
        />

        <ScreensImage src={`${BASE}/screens-02.png`} alt="Sportian desktop back office" />

        <StatsRow
          stats={[
            { value: '>50%', label: 'FANS TRANSITIONED TO DIGITAL TICKETING' },
            { value: '5-10%', label: 'INCREASE IN REVENUE POTENTIAL PER MATCH' },
            { value: '>200', label: 'SALES AGENTS CONNECTED FROM IN AND OUTSIDE THE VENUE' },
          ]}
        />

        <DesktopGrid images={GRID_SCREENS} />
      </div>

      <ProjectNav current="sportian" />
      <Footer />
    </div>
  );
}
