import { useState } from 'react';
import { EXPERIENCE, SKILLS, type Skill } from '../../data/content';
import styles from './About.module.css';

const DEFAULT_SKILL: Skill = SKILLS.find((skill) => skill.filled) ?? SKILLS[0];

export default function About() {
  const [activeSkill, setActiveSkill] = useState(DEFAULT_SKILL);

  return (
    <section id="about" className={styles.about}>
      <div className={styles.aboutLeft}>
        <div className={styles.aboutHeadingBlock}>
          <h2 className={styles.aboutTitle}>About Me</h2>
          <p className={styles.aboutCopy}>
            I'm a Senior Visual Designer skilled about creating meaningful digital experiences. Over the past
            15+ years, I've worked across UX, UI, and motion design, helping teams build products that are
            intuitive, scalable and visually compelling.
          </p>
        </div>

        <div className={styles.skillsBlock}>
          <p className={styles.skillsLabel}>Skills &amp; Expertise</p>
          <div className={styles.pillsWrap}>
            {SKILLS.map((skill) => (
              <span
                key={skill.label}
                className={`${styles.pill} ${skill.filled ? styles.filled : styles.outline}`}
                onMouseEnter={() => setActiveSkill(skill)}
                onMouseLeave={() => setActiveSkill(DEFAULT_SKILL)}
              >
                {skill.label}
              </span>
            ))}
          </div>
        </div>

        <div className={styles.barRow}>
          <div className={styles.barTrack}>
            <div className={styles.barFill} style={{ width: `${activeSkill.level}%` }} />
          </div>
          <p className={styles.barPercent}>{activeSkill.level}%</p>
        </div>
      </div>

      <div className={styles.aboutRight}>
        <p className={styles.experienceTitle}>Experience</p>

        {EXPERIENCE.map((item) => (
          <div
            key={`${item.company}-${item.date}`}
            className={`${styles.experienceItem} ${item.featured ? styles.featured : ''}`}
          >
            <div className={styles.expTitle}>
              <p className={styles.expDate}>{item.date}</p>
              <p className={styles.expRole}>
                {item.company}, <span className={styles.light}>{item.location}</span>
              </p>
            </div>
            <p className={styles.expSubtitle}>{item.subtitle}</p>
            {item.featured && (
              <div className={styles.expDetail}>
                <p className={styles.expDescription}>{item.description}</p>
                <div className={styles.clients}>
                  {item.clients?.map((client) => (
                    <span key={client} className={styles.clientPill}>
                      {client}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
