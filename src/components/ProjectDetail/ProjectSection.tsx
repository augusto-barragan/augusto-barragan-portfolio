import styles from './ProjectDetail.module.css';

export default function ProjectSection({
  label,
  heading,
  body,
  image,
  imageAlt,
}: {
  label: string;
  heading: string;
  body: string | string[];
  /** Optional image shown alongside the text (e.g. a 3D render). */
  image?: string;
  imageAlt?: string;
}) {
  const paragraphs = Array.isArray(body) ? body : [body];

  return (
    <div className={styles.section}>
      <p className={styles.sectionLabel}>{label}</p>
      <div className={styles.sectionBody}>
        <p className={styles.sectionHeading}>{heading}</p>
        {paragraphs.map((paragraph) => (
          <p key={paragraph} className={styles.sectionText}>
            {paragraph}
          </p>
        ))}
      </div>
      {image && <img className={styles.sectionImage} src={image} alt={imageAlt ?? ''} />}
    </div>
  );
}
