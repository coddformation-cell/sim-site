import { useCallback, useEffect, useRef, useState } from 'react';
import type { FieldPhoto } from '../data/gallery';

type Props = {
  photos: FieldPhoto[];
};

export default function PhotoGallery({ photos }: Props) {
  const [active, setActive] = useState<number | null>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const triggerRef = useRef<HTMLElement | null>(null);

  const open = (index: number, trigger: HTMLElement) => {
    triggerRef.current = trigger;
    setActive(index);
  };
  const close = useCallback(() => {
    setActive(null);
    triggerRef.current?.focus();
  }, []);
  const step = useCallback(
    (delta: number) =>
      setActive((i) => (i === null ? i : (i + delta + photos.length) % photos.length)),
    [photos.length]
  );

  useEffect(() => {
    if (active === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
      else if (e.key === 'ArrowRight') step(1);
      else if (e.key === 'ArrowLeft') step(-1);
    };
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    closeRef.current?.focus();
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = previousOverflow;
    };
  }, [active, close, step]);

  const current = active === null ? null : photos[active];

  return (
    <>
      <ul className="photo-gallery" role="list">
        {photos.map((p, i) => (
          <li key={p.src} className="photo-gallery-item">
            <button
              type="button"
              className="photo-gallery-btn"
              onClick={(e) => open(i, e.currentTarget)}
              aria-label={`Agrandir la photo : ${p.alt}`}
            >
              <img
                src={p.thumb}
                alt={p.alt}
                width={p.thumbWidth}
                height={p.thumbHeight}
                loading="lazy"
                decoding="async"
              />
            </button>
          </li>
        ))}
      </ul>

      {current && (
        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label="Visionneuse de photos"
          onClick={close}
        >
          <button
            ref={closeRef}
            type="button"
            className="lightbox-close"
            onClick={close}
            aria-label="Fermer la visionneuse"
          >
            Fermer <span aria-hidden="true">✕</span>
          </button>
          <button
            type="button"
            className="lightbox-nav lightbox-prev"
            onClick={(e) => {
              e.stopPropagation();
              step(-1);
            }}
            aria-label="Photo précédente"
          >
            <span aria-hidden="true">←</span>
          </button>
          <figure className="lightbox-figure" onClick={(e) => e.stopPropagation()}>
            <img src={current.src} alt={current.alt} />
            <figcaption>
              <span>{current.alt}</span>
              <span className="mono">
                {(active ?? 0) + 1} / {photos.length}
              </span>
            </figcaption>
          </figure>
          <button
            type="button"
            className="lightbox-nav lightbox-next"
            onClick={(e) => {
              e.stopPropagation();
              step(1);
            }}
            aria-label="Photo suivante"
          >
            <span aria-hidden="true">→</span>
          </button>
        </div>
      )}
    </>
  );
}
