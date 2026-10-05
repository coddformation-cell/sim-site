import { useEffect, useRef, type ReactNode } from 'react';

type Props = {
  label: string;
  caption: string;
  counter?: string;
  onClose: () => void;
  onPrev?: () => void;
  onNext?: () => void;
  children: ReactNode;
};

export default function Lightbox({ label, caption, counter, onClose, onPrev, onNext, children }: Props) {
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      else if (e.key === 'ArrowRight') onNext?.();
      else if (e.key === 'ArrowLeft') onPrev?.();
    };
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    closeRef.current?.focus();
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = previousOverflow;
    };
  }, [onClose, onPrev, onNext]);

  return (
    <div className="lightbox" role="dialog" aria-modal="true" aria-label={label} onClick={onClose}>
      <button
        ref={closeRef}
        type="button"
        className="lightbox-close"
        onClick={onClose}
        aria-label="Fermer"
      >
        Fermer <span aria-hidden="true">✕</span>
      </button>
      {onPrev && (
        <button
          type="button"
          className="lightbox-nav lightbox-prev"
          onClick={(e) => {
            e.stopPropagation();
            onPrev();
          }}
          aria-label="Précédent"
        >
          <span aria-hidden="true">←</span>
        </button>
      )}
      <figure className="lightbox-figure" onClick={(e) => e.stopPropagation()}>
        {children}
        <figcaption>
          <span>{caption}</span>
          {counter && <span className="mono">{counter}</span>}
        </figcaption>
      </figure>
      {onNext && (
        <button
          type="button"
          className="lightbox-nav lightbox-next"
          onClick={(e) => {
            e.stopPropagation();
            onNext();
          }}
          aria-label="Suivant"
        >
          <span aria-hidden="true">→</span>
        </button>
      )}
    </div>
  );
}
