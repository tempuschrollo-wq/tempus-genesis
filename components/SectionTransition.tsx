interface Props {
  num: string;
  label: string;
  major?: boolean;
}

export default function SectionTransition({ num, label, major = false }: Props) {
  return (
    <div className={`section-transition ${major ? "is-major" : ""}`}>
      <span className="section-transition-line"></span>
      <span className="section-transition-mark">
        <svg viewBox="0 0 12 18" fill="none">
          <polygon points="2,1 10,1 6,9" fill="#D4AF37" opacity="0.5" />
          <polygon points="2,17 10,17 6,9" fill="#D4AF37" opacity="0.5" />
        </svg>
        {num} / {label}
      </span>
      <span className="section-transition-line"></span>
    </div>
  );
}
