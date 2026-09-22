type Props = {
  index: string;
  title: string;
  image?: string;
  className?: string;
};

// Cover visuel pour un service — photo réelle + overlay bleu marine/or si
// une image est fournie, sinon dégradé plat en repli.
export default function ServiceCover({ index, title, image, className = '' }: Props) {
  return (
    <div className={`service-cover ${image ? 'has-photo' : ''} ${className}`}>
      {image ? (
        <img src={image} alt="" className="service-cover-photo" loading="lazy" />
      ) : (
        <div className="service-cover-pattern" aria-hidden="true" />
      )}
      <div className="service-cover-overlay" aria-hidden="true" />
      <div className="service-cover-content">
        <span className="service-cover-index">{index}</span>
        <span className="service-cover-title">{title}</span>
      </div>
      {!image && <div className="service-cover-corner" aria-hidden="true" />}
    </div>
  );
}
