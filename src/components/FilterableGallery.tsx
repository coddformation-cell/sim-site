import { useMemo, useState } from 'react';
import PhotoGallery from './PhotoGallery';
import { photoCategories, type FieldPhoto, type PhotoTag } from '../data/gallery';

type Props = {
  photos: FieldPhoto[];
};

export default function FilterableGallery({ photos }: Props) {
  const [tag, setTag] = useState<PhotoTag | 'all'>('all');

  const categories = useMemo(
    () => photoCategories.filter((c) => photos.some((p) => p.tags.includes(c.tag))),
    [photos]
  );
  const visible = useMemo(
    () => (tag === 'all' ? photos : photos.filter((p) => p.tags.includes(tag))),
    [photos, tag]
  );

  return (
    <>
      <div className="gallery-filters" role="group" aria-label="Filtrer les photos par domaine">
        <button
          type="button"
          className={`gallery-chip ${tag === 'all' ? 'is-active' : ''}`}
          aria-pressed={tag === 'all'}
          onClick={() => setTag('all')}
        >
          Toutes <span className="mono">{photos.length}</span>
        </button>
        {categories.map((c) => (
          <button
            key={c.tag}
            type="button"
            className={`gallery-chip ${tag === c.tag ? 'is-active' : ''}`}
            aria-pressed={tag === c.tag}
            onClick={() => setTag(c.tag)}
          >
            {c.label}{' '}
            <span className="mono">{photos.filter((p) => p.tags.includes(c.tag)).length}</span>
          </button>
        ))}
      </div>
      <PhotoGallery key={tag} photos={visible} />
    </>
  );
}
