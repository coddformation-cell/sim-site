import { Link } from 'react-router-dom';
import { withBase } from '../lib/asset';

type Props = {
  compact?: boolean;
};

// Logo officiel S.I.M sarl — image réelle du catalogue.
export default function Logo({ compact = false }: Props) {
  return (
    <Link to="/" className="logo" aria-label="S.I.M sarl — Accueil">
      <img
        src={withBase('/logo-sim.jpg')}
        alt="S.I.M sarl — Soudure Industrielle et Maritime"
        className="logo-mark"
        width="42"
        height="42"
      />
      {!compact && (
        <span className="logo-word">
          S.I.M<span className="logo-word-accent">&nbsp;sarl</span>
        </span>
      )}
    </Link>
  );
}
