import { useCallback, useRef, useState, type SyntheticEvent } from 'react';
import Lightbox from './Lightbox';
import type { Video } from '../data/videos';

type Props = {
  videos: Video[];
  className?: string;
};

const formatDuration = (s: number) => {
  const m = Math.floor(s / 60);
  return `${m}:${String(s % 60).padStart(2, '0')}`;
};

export default function VideoGallery({ videos, className = '' }: Props) {
  const [active, setActive] = useState<number | null>(null);
  const triggerRef = useRef<HTMLElement | null>(null);

  const close = useCallback(() => {
    setActive(null);
    triggerRef.current?.focus();
  }, []);
  const step = useCallback(
    (delta: number) =>
      setActive((i) => (i === null ? i : (i + delta + videos.length) % videos.length)),
    [videos.length]
  );
  const prev = useCallback(() => step(-1), [step]);
  const next = useCallback(() => step(1), [step]);

  const current = active === null ? null : videos[active];

  // Les extraits de chantier se lisent sans le son d'origine (voix de
  // l'équipe) : lecture muette, en attendant la musique d'ambiance du client.
  const startPlayback = (e: SyntheticEvent<HTMLVideoElement>) => {
    const el = e.currentTarget;
    if (el.paused) el.play().catch(() => {});
  };

  return (
    <>
      <ul className={`video-grid ${className}`} role="list">
        {videos.map((v, i) => (
          <li key={v.slug} className="video-card">
            <button
              type="button"
              className="video-card-btn"
              onClick={(e) => {
                triggerRef.current = e.currentTarget;
                setActive(i);
              }}
              aria-label={`Lire la vidéo : ${v.alt}`}
            >
              <img
                src={v.poster}
                alt=""
                width={v.width}
                height={v.height}
                loading="lazy"
                decoding="async"
              />
              <span className="video-card-play" aria-hidden="true">
                <svg viewBox="0 0 24 24" width="22" height="22">
                  <path fill="currentColor" d="M8 5.5v13a1 1 0 0 0 1.55.83l10-6.5a1 1 0 0 0 0-1.66l-10-6.5A1 1 0 0 0 8 5.5Z" />
                </svg>
              </span>
              <span className="video-card-duration mono">{formatDuration(v.duration)}</span>
            </button>
            <p className="video-card-caption">{v.alt}</p>
          </li>
        ))}
      </ul>

      {current && (
        <Lightbox
          label="Lecteur vidéo"
          caption={current.alt}
          counter={videos.length > 1 ? `${(active ?? 0) + 1} / ${videos.length}` : undefined}
          onClose={close}
          onPrev={videos.length > 1 ? prev : undefined}
          onNext={videos.length > 1 ? next : undefined}
        >
          <video
            key={current.slug}
            className="lightbox-video"
            src={current.src}
            poster={current.poster}
            controls
            autoPlay
            muted
            playsInline
            onLoadedData={startPlayback}
          />
        </Lightbox>
      )}
    </>
  );
}
