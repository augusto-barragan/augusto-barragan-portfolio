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
import { useSEO } from '../../hooks/useSEO';

const BASE = '/images/projects/sancho-bbdo';

export default function SanchoBbdo() {
  useSEO({
    title: 'Sancho BBDO — Case Study',
    description:
      'Case study: digital creativity, visual design and UX/UI work for Pepsi, Gatorade, Mountain Dew and Millonarios FC at Sancho BBDO.',
    path: '/work/sancho-bbdo',
  });

  return (
    <div className={styles.page}>
      <div className={styles.wrapper}>
        <ProjectHeader />

        <ProjectHero
          year="2013-2017"
          title={
            <>
              Sancho<span className={styles.accent}>BBDO</span>
            </>
          }
          subtitle="Connecting Creativity, Design, and Experience."
          summary="At Sancho BBDO, I worked with a diverse portfolio of brands including Pepsi, Gatorade, Mountain Dew, Cheetos, and more, bringing together digital creativity, visual design, and UX/UI. I contributed to a wide range of digital experiences, translating creative concepts into engaging and user-focused solutions across different platforms."
        />

        <ImageBand src={`${BASE}/hero.jpg`} alt="Sancho BBDO" logo={`${BASE}/logo.svg`} logoAlt="Sancho BBDO logo" blend />

        <ProjectBullets
          items={[
            { label: 'Agency', value: 'Sancho BBDO' },
            { label: 'Outcome', value: ['Web', 'Apps'] },
            { label: 'Rol', value: ['Ux/Ui Designer', 'Digital Creattive'] },
            { label: 'Tools', value: 'Adobe suite' },
          ]}
        />

        <ProjectSection
          label="RigoTour gatorade"
          heading="RigoTour was an interactive digital experience created for Gatorade that invited users to virtually experience the Tour de France alongside Colombian cyclist Rigoberto Urán."
          body="Through a web platform, users competed in each stage by pedaling alongside Rigo using their keyboard, alternating between the J and K keys to maintain their pace. On mobile, the experience was adapted into two interactive buttons that users had to tap repeatedly. The faster they pedaled, the better their performance and ranking. My role combined UX/UI design and digital creativity, shaping the interaction and experience across desktop and mobile."
        />

        <div className={styles.mediaBackdrop}>
          <div className={styles.mediaBackdropBg}>
            <img src={`${BASE}/rigotour-bg.jpg`} alt="" />
          </div>
          <div className={styles.mediaBackdropContent}>
            <img src={`${BASE}/rigotour-desktop.png`} alt="RigoTour desktop experience" />
            <img src={`${BASE}/rigotour-mobile.png`} alt="RigoTour mobile experience" />
          </div>
        </div>

        <ProjectSection
          label="Pepsi Museum"
          heading="An interactive digital museum created for Millonarios FC, allowing fans to explore the club's history through an immersive virtual environment."
          body="Built with Unity, the experience enabled users to navigate the museum using their keyboard and discover its content in an engaging, interactive way. My role combined UX/UI design and digital creativity, shaping the experience from concept to interface."
          image={`${BASE}/museo-3d.png`}
          imageAlt="Pepsi Museum 3D render"
          imageFirst
          imageWidth={700}
        />

        <ScreensImage src={`${BASE}/museo-screens.png`} alt="Pepsi Museum screens" background="dark" />

        <ProjectSection
          label="gatorade Site redesign"
          heading="A full redesign of Gatorade's website, bringing the brand's athletes and decades of sports history to life through a bold, editorial digital experience."
          body="The new site combined athlete profile pages — featuring names like Serena Williams, James Rodríguez, and Usain Bolt — with an interactive brand history section spanning six decades. My role covered UX/UI design and digital creativity, defining the visual language and navigation across desktop and tablet."
          image={`${BASE}/gatorade-3d.png`}
          imageAlt="Gatorade site redesign render"
          imageWidth={568}
        />

        <DesktopGrid
          images={[
            { src: `${BASE}/tablet-01.png`, alt: 'Gatorade site tablet screen 1' },
            { src: `${BASE}/tablet-02.png`, alt: 'Gatorade site tablet screen 2' },
          ]}
        />
      </div>

      <ProjectNav current="sancho-bbdo" />
      <Footer />
    </div>
  );
}
