import { useCallback, useRef, useState } from 'react';
import Lightbox from '../components/Lightbox';
import { film } from '../data/videos';

export default function FilmSection() {
  const [open, setOpen] = useState(false);
  const triggerRef = useRef<HTMLElement | null>(null);

  const close = useCallback(() => {
    setOpen(false);
    triggerRef.current?.focus();
  }, []);

  const play = (e: React.MouseEvent<HTMLElement>) => {
    triggerRef.current = e.currentTarget;
    setOpen(true);
  };

  return (
    <section className="section film-section">
      <div className="container film-grid">
        <div className="film-copy">
          <span className="eyebrow">En vidéo</span>
          <h2 className="section-title">S.I.M sarl, en images animées.</h2>
          <p className="section-lead">
            Le film de présentation de l’entreprise : ses métiers de la
            soudure, de la tuyauterie et du naval, et la parole de son
            directeur général.
          </p>
          <div className="film-actions">
            <button type="button" className="btn btn-primary" onClick={play}>
              Regarder le film
              <span aria-hidden="true">▶</span>
            </button>
            <span className="mono film-meta">1 min 34 s</span>
          </div>
        </div>

        <button
          type="button"
          className="film-poster"
          onClick={play}
          aria-label={`Lire : ${film.title}`}
        >
          <img
            src={film.poster}
            alt=""
            width={film.width}
            height={film.height}
            loading="lazy"
            decoding="async"
          />
          <span className="film-play" aria-hidden="true">
            <svg viewBox="0 0 24 24" width="30" height="30">
              <path fill="currentColor" d="M8 5.5v13a1 1 0 0 0 1.55.83l10-6.5a1 1 0 0 0 0-1.66l-10-6.5A1 1 0 0 0 8 5.5Z" />
            </svg>
          </span>
        </button>
      </div>

      {open && (
        <Lightbox label="Film de présentation" caption={film.title} onClose={close}>
          <video
            className="lightbox-video lightbox-video-wide"
            src={film.src}
            poster={film.poster}
            controls
            autoPlay
            playsInline
          />
        </Lightbox>
      )}
    </section>
  );
}
