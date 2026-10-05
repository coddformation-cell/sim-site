import { useCallback, useRef, useState } from 'react';
import Lightbox from './Lightbox';
import type { FieldPhoto } from '../data/gallery';

type Props = {
  photos: FieldPhoto[];
};

export default function PhotoGallery({ photos }: Props) {
  const [active, setActive] = useState<number | null>(null);
  const triggerRef = useRef<HTMLElement | null>(null);

  const close = useCallback(() => {
    setActive(null);
    triggerRef.current?.focus();
  }, []);
  const step = useCallback(
    (delta: number) =>
      setActive((i) => (i === null ? i : (i + delta + photos.length) % photos.length)),
    [photos.length]
  );
  const prev = useCallback(() => step(-1), [step]);
  const next = useCallback(() => step(1), [step]);

  const current = active === null ? null : photos[active];

  return (
    <>
      <ul className="photo-gallery" role="list">
        {photos.map((p, i) => (
          <li key={p.src} className="photo-gallery-item">
            <button
              type="button"
              className="photo-gallery-btn"
              onClick={(e) => {
                triggerRef.current = e.currentTarget;
                setActive(i);
              }}
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
        <Lightbox
          label="Visionneuse de photos"
          caption={current.alt}
          counter={`${(active ?? 0) + 1} / ${photos.length}`}
          onClose={close}
          onPrev={prev}
          onNext={next}
        >
          <img src={current.src} alt={current.alt} />
        </Lightbox>
      )}
    </>
  );
}
