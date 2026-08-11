import Footer from '../../components/Footer/Footer';
import ImageBand from '../../components/ProjectDetail/ImageBand';
import styles from '../../components/ProjectDetail/ProjectDetail.module.css';
import ProjectBullets from '../../components/ProjectDetail/ProjectBullets';
import ProjectHeader from '../../components/ProjectDetail/ProjectHeader';
import ProjectHero from '../../components/ProjectDetail/ProjectHero';
import ProjectNav from '../../components/ProjectDetail/ProjectNav';
import ProjectSection from '../../components/ProjectDetail/ProjectSection';
import ScreensImage from '../../components/ProjectDetail/ScreensImage';

const BASE = '/images/projects/directv-go';

export default function DirectvGo() {
  return (
    <div className={styles.page}>
      <div className={styles.wrapper}>
        <ProjectHeader />

        <ProjectHero
          year="2026"
          title={
            <>
              Directv<span className={styles.accent}>Go</span>
            </>
          }
          subtitle="Bridging Design & Development"
          summary="DIRECTV GO is a streaming platform designed to deliver live and on-demand video experiences across multiple devices. My role focused on bridging visual design and development, translating interface and interaction concepts into functional experiences within the platform's video framework."
        />

        <ImageBand src={`${BASE}/hero.jpg`} alt="DirectvGo streaming across devices" />

        <ProjectBullets
          items={[
            { label: 'Client', value: 'DirectvGO' },
            { label: 'Outcome', value: ['App', 'Tablet', 'TV'] },
            { label: 'Rol', value: ['Ux/Ui Designer', 'You.i Integration'] },
            { label: 'Tools', value: ['Figma', 'You.i Framework'] },
          ]}
        />

        <ProjectSection
          label="The challenge"
          heading="The main challenge was adapting the design process to a development environment built around a specialized framework for video interfaces across different devices."
          body="The framework used an Adobe After Effects plugin as part of the UI production workflow, requiring me to learn a new set of tools, understand technical constraints, and work closely with developers to ensure designs could be implemented effectively."
        />

        <ScreensImage src={`${BASE}/mobile-mocks.png`} alt="DirectvGo mobile screens" background="dark" />

        <ProjectSection
          label="The Solution"
          heading="I worked closely with the development team to integrate visual designs and interactions into the application, while also designing new product features and experiences."
          body="My work included Chromecast integration, channel search within the video player, interaction design, and other streaming-related functionalities. I also became involved in development repositories and testing workflows, using Xcode to test and validate the interfaces throughout the implementation process."
          image={`${BASE}/tv-3d.png`}
          imageAlt="DirectvGo on TV"
        />

        <ScreensImage src={`${BASE}/desktop.jpg`} alt="DirectvGo desktop screens" background="dark" />

        <ScreensImage src={`${BASE}/tablet.png`} alt="DirectvGo tablet screens" background="dark" />
      </div>

      <ProjectNav current="directv-go" />
      <Footer />
    </div>
  );
}
