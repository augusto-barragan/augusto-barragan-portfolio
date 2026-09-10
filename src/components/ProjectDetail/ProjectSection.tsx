import styles from './ProjectDetail.module.css';

export default function ProjectSection({
  label,
  heading,
  body,
  image,
  imageAlt,
  imageFirst = false,
  imageWidth,
}: {
  label: string;
  heading: string;
  body: string | string[];
  /** Optional image shown alongside the text (e.g. a 3D render). */
  image?: string;
  imageAlt?: string;
  /** Renders the image before the text column instead of after. */
  imageFirst?: boolean;
  /** Explicit image width (px) so the text column fills the remaining row width. */
  imageWidth?: number;
}) {
  const paragraphs = Array.isArray(body) ? body : [body];
  const bodyContent = (
    <>
      <p className={styles.sectionHeading}>{heading}</p>
      {paragraphs.map((paragraph) => (
        <p key={paragraph} className={styles.sectionText}>
          {paragraph}
        </p>
      ))}
    </>
  );

  if (image) {
    return (
      <div className={styles.section}>
        {imageFirst && (
          <img
            className={styles.sectionImage}
            src={image}
            alt={imageAlt ?? ''}
            style={imageWidth ? { width: imageWidth } : undefined}
          />
        )}
        <div className={`${styles.sectionBody} ${styles.sectionBodyFluid}`}>
          <p className={styles.sectionLabelInline}>{label}</p>
          {bodyContent}
        </div>
        {!imageFirst && (
          <img
            className={styles.sectionImage}
            src={image}
            alt={imageAlt ?? ''}
            style={imageWidth ? { width: imageWidth } : undefined}
          />
        )}
      </div>
    );
  }

  return (
    <div className={styles.section}>
      <p className={styles.sectionLabel}>{label}</p>
      <div className={styles.sectionBody}>{bodyContent}</div>
    </div>
  );
}
