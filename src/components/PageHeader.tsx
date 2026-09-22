type Props = {
  eyebrow: string;
  title: string;
  lead?: string;
  image?: string;
};

export default function PageHeader({ eyebrow, title, lead, image }: Props) {
  return (
    <section className={`page-header ${image ? 'has-image' : ''}`}>
      {image && (
        <div className="page-header-media" aria-hidden="true">
          <img src={image} alt="" loading="eager" />
          <div className="page-header-overlay" />
        </div>
      )}
      <div className="container page-header-inner">
        <span className="eyebrow">{eyebrow}</span>
        <h1 className="page-header-title">{title}</h1>
        {lead && <p className="page-header-lead">{lead}</p>}
      </div>
    </section>
  );
}
