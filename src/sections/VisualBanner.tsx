import { Link } from 'react-router-dom';
import { visualBannerContent } from '../data/company';
import { media } from '../data/media';

export default function VisualBanner() {
  return (
    <section className="visual-banner">
      <div className="visual-banner-media" aria-hidden="true">
        <img src={media.weldingWorkshop} alt="" loading="lazy" />
        <div className="visual-banner-overlay" />
      </div>
      <div className="container visual-banner-inner">
        <h2 className="visual-banner-title">{visualBannerContent.title}</h2>
        <Link to={visualBannerContent.ctaTo} className="btn btn-primary">
          {visualBannerContent.cta}
          <span aria-hidden="true">→</span>
        </Link>
      </div>
    </section>
  );
}
