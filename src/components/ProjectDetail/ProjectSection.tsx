import styles from './ProjectDetail.module.css';

export default function ProjectSection({
  label,
  heading,
  body,
}: {
  label: string;
  heading: string;
  body: string | string[];
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
    </div>
  );
}
