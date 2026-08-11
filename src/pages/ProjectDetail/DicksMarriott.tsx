import Footer from '../../components/Footer/Footer';
import DesktopGrid from '../../components/ProjectDetail/DesktopGrid';
import ImageBand from '../../components/ProjectDetail/ImageBand';
import PhoneMockup, { PhoneRow } from '../../components/ProjectDetail/PhoneMockup';
import ProjectBullets from '../../components/ProjectDetail/ProjectBullets';
import styles from '../../components/ProjectDetail/ProjectDetail.module.css';
import ProjectHeader from '../../components/ProjectDetail/ProjectHeader';
import ProjectHero from '../../components/ProjectDetail/ProjectHero';
import ProjectNav from '../../components/ProjectDetail/ProjectNav';
import ProjectSection from '../../components/ProjectDetail/ProjectSection';
import { useSEO } from '../../hooks/useSEO';

const BASE = '/images/projects/dicks-marriott';

const PHONES = [
  { src: `${BASE}/phone-01-entry.png`, overlaySrc: `${BASE}/phone-01-bar.png`, alt: 'App entry point screen', caption: '01 — Entry Point' },
  { src: `${BASE}/phone-02-cta.png`, alt: 'Rewards call-to-action screen', caption: '02 — CTA' },
  { src: `${BASE}/phone-03-landing.png`, overlaySrc: `${BASE}/phone-03-bar.png`, alt: 'Marketing landing screen', caption: '03 — Landing' },
  { src: `${BASE}/phone-04-terms.png`, alt: 'Terms and conditions screen', caption: '04 — Terms & Conditions' },
  { src: `${BASE}/phone-05-success.png`, overlaySrc: `${BASE}/phone-05-bar.png`, alt: 'Enrollment success screen', caption: '05 — Success' },
  { src: `${BASE}/phone-06-linked.png`, alt: 'Linked account screen', caption: '06 — Linked' },
];

const DESKTOP_SCREENS = [
  { src: `${BASE}/desktop-01.png`, alt: 'Desktop rewards dashboard' },
  { src: `${BASE}/desktop-02.png`, alt: 'Desktop account linking flow' },
  { src: `${BASE}/desktop-03.png`, alt: 'Desktop checkout with rewards' },
  { src: `${BASE}/desktop-04.png`, alt: 'Desktop rewards tracking view' },
];

export default function DicksMarriott() {
  useSEO({
    title: "Dick's + Marriott — Case Study",
    description:
      "Case study: designing a scalable loyalty rewards experience for Dick's Sporting Goods and Marriott Bonvoy across app, desktop and mobile web.",
    path: '/work/dicks-marriott',
  });

  return (
    <div className={styles.page}>
      <div className={styles.wrapper}>
        <ProjectHeader />

        <ProjectHero
          year="2026"
          title={
            <>
              Dick’s +<span className={styles.accent}> Marriott</span>
            </>
          }
          subtitle="Designing for scalability"
          summary="Dick's Sporting Goods partnered with Marriott Bonvoy to introduce a new rewards experience that allows customers to link their Marriott Bonvoy account and earn loyalty points on eligible purchases. The experience was designed across iOS, Android, desktop, mobile web, and a dedicated marketing landing page, creating a seamless journey from enrollment to rewards tracking."
        />

        <ImageBand src={`${BASE}/hero.png`} alt="Dick's Sporting Goods and Marriott Bonvoy loyalty experience" />

        <ProjectBullets
          items={[
            { label: 'Client', value: "Dick's Sporting Goods" },
            { label: 'Outcome', value: ['App', 'Desktop'] },
            { label: 'Rol', value: 'Ux/Ui Designer' },
            { label: 'Tools', value: 'Figma' },
          ]}
        />

        <ProjectSection
          label="The challenge"
          heading="The primary challenge was to design a scalable partnership framework that could support future loyalty integrations beyond Marriott Bonvoy without requiring a complete redesign."
          body="The experience also needed to communicate earned rewards throughout the shopping journey while keeping the checkout flow focused and distraction free. Balancing business visibility with a frictionless purchasing experience was essential."
        />

        <PhoneRow>
          {PHONES.map((phone) => (
            <PhoneMockup key={phone.caption} {...phone} />
          ))}
        </PhoneRow>

        <ProjectSection
          label="The Solution"
          heading="I designed a flexible and reusable UI framework that supports multiple loyalty partners through a consistent interaction model."
          body="The experience allows customers to easily connect or create partner accounts, view rewards earned from eligible purchases, and access partnership information without interrupting the checkout process. The solution was adapted across native apps, desktop, mobile web, and a promotional landing page, ensuring a cohesive and scalable experience across every touchpoint."
        />

        <DesktopGrid images={DESKTOP_SCREENS} />
      </div>

      <ProjectNav current="dicks-marriott" />
      <Footer />
    </div>
  );
}
