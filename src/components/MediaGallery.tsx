import { useMemo, useState } from 'react';
import PhotoGallery from './PhotoGallery';
import VideoGallery from './VideoGallery';
import { photoCategories, type FieldPhoto, type PhotoTag } from '../data/gallery';
import type { Video } from '../data/videos';

type Props = {
  photos: FieldPhoto[];
  videos: Video[];
};

export default function MediaGallery({ photos, videos }: Props) {
  const [tag, setTag] = useState<PhotoTag | 'all'>('all');

  const count = (t: PhotoTag) =>
    photos.filter((p) => p.tags.includes(t)).length + videos.filter((v) => v.tags.includes(t)).length;

  const categories = useMemo(
    () => photoCategories.filter((c) => count(c.tag) > 0),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [photos, videos]
  );
  const shownPhotos = tag === 'all' ? photos : photos.filter((p) => p.tags.includes(tag));
  const shownVideos = tag === 'all' ? videos : videos.filter((v) => v.tags.includes(tag));

  return (
    <>
      <div className="gallery-filters" role="group" aria-label="Filtrer par domaine">
        <button
          type="button"
          className={`gallery-chip ${tag === 'all' ? 'is-active' : ''}`}
          aria-pressed={tag === 'all'}
          onClick={() => setTag('all')}
        >
          Tout <span className="mono">{photos.length + videos.length}</span>
        </button>
        {categories.map((c) => (
          <button
            key={c.tag}
            type="button"
            className={`gallery-chip ${tag === c.tag ? 'is-active' : ''}`}
            aria-pressed={tag === c.tag}
            onClick={() => setTag(c.tag)}
          >
            {c.label} <span className="mono">{count(c.tag)}</span>
          </button>
        ))}
      </div>

      {shownVideos.length > 0 && (
        <div className="media-block">
          <h3 className="media-block-title">
            En vidéo <span className="mono">{shownVideos.length}</span>
          </h3>
          <VideoGallery key={`v-${tag}`} videos={shownVideos} />
        </div>
      )}

      {shownPhotos.length > 0 && (
        <div className="media-block">
          <h3 className="media-block-title">
            En photos <span className="mono">{shownPhotos.length}</span>
          </h3>
          <PhotoGallery key={`p-${tag}`} photos={shownPhotos} />
        </div>
      )}
    </>
  );
}
