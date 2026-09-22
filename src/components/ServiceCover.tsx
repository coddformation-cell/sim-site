type Props = {
  index: string;
  title: string;
  className?: string;
};

// Cover visuel pour un service — fond bleu marine + numéro or + titre.
// Utilisé à la place des scans du catalogue papier pour un rendu propre.
export default function ServiceCover({ index, title, className = '' }: Props) {
  return (
    <div className={`service-cover ${className}`} aria-hidden="true">
      <div className="service-cover-pattern" />
      <div className="service-cover-content">
        <span className="service-cover-index">{index}</span>
        <span className="service-cover-title">{title}</span>
      </div>
      <div className="service-cover-corner" />
    </div>
  );
}
