import { useState, type FormEvent } from 'react';
import { useSearchParams } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import SocialLinks from '../components/SocialLinks';
import Dropdown from '../components/Dropdown';
import { site } from '../data/site';
import { services } from '../data/services';
import { photo } from '../data/gallery';

type FormState = {
  name: string;
  company: string;
  email: string;
  phone: string;
  service: string;
  message: string;
};

const emptyForm: FormState = {
  name: '',
  company: '',
  email: '',
  phone: '',
  service: '',
  message: '',
};

export default function Contact() {
  const [params] = useSearchParams();
  const requested = params.get('service');
  const initialService = services.find((x) => x.slug === requested)?.title ?? '';
  const [form, setForm] = useState<FormState>({ ...emptyForm, service: initialService });
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [sending, setSending] = useState(false);

  const update = <K extends keyof FormState>(key: K, value: FormState[K]) =>
    setForm((f) => ({ ...f, [key]: value }));

  const serviceLabel = form.service || 'Non précisé';

  const submit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setError('Merci de renseigner votre nom, votre email et un message.');
      return;
    }
    setError(null);
    setSending(true);
    try {
      // FormSubmit.co : service externe sans backend, fonctionne à
      // l'identique sur GitHub Pages et Vercel. Le premier envoi déclenche
      // un email de confirmation à simsoudure@gmail.com — il faut cliquer
      // le lien une fois pour activer la réception avant que ça marche.
      const res = await fetch(`https://formsubmit.co/ajax/${site.contact.email}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          _subject: `Nouvelle demande de devis — ${serviceLabel}`,
          _template: 'table',
          Nom: form.name,
          Société: form.company || '—',
          Email: form.email,
          Téléphone: form.phone || '—',
          'Service concerné': serviceLabel,
          Message: form.message,
        }),
      });
      if (!res.ok) {
        throw new Error("L'envoi a échoué.");
      }
      setSent(true);
      setForm({ ...emptyForm, service: initialService });
      setTimeout(() => setSent(false), 7000);
    } catch {
      setError(
        `L'envoi a échoué. Vous pouvez aussi nous joindre directement au ${site.contact.phone1} ou par email à ${site.contact.email}.`
      );
    } finally {
      setSending(false);
    }
  };

  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Demandez un devis ou discutons de votre projet."
        lead="Notre équipe revient vers vous rapidement pour cadrer votre besoin et vous proposer une réponse adaptée."
        image={photo('unite-panorama').src}
      />

      <section className="section contact-section">
        <div className="container contact-grid">
          <aside className="contact-info">
            <span className="eyebrow">Coordonnées</span>
            <h2 className="section-title">S.I.M sarl — Abidjan.</h2>

            <ul className="contact-info-list">
              <li>
                <span className="mono contact-info-label">Adresse</span>
                {site.contact.address}
              </li>
              <li>
                <span className="mono contact-info-label">Téléphone</span>
                <a href={`tel:${site.contact.phone1.replace(/\s/g, '')}`}>
                  {site.contact.phone1}
                </a>
                <a href={`tel:${site.contact.phone2.replace(/\s/g, '')}`}>
                  {site.contact.phone2}
                </a>
              </li>
              <li>
                <span className="mono contact-info-label">Fax</span>
                {site.contact.fax}
              </li>
              <li>
                <span className="mono contact-info-label">Email</span>
                <a href={`mailto:${site.contact.email}`}>{site.contact.email}</a>
              </li>
              <li>
                <span className="mono contact-info-label">Site web</span>
                {site.contact.web}
              </li>
            </ul>

            <div className="contact-socials">
              <span className="mono contact-info-label">Réseaux</span>
              <SocialLinks />
            </div>
          </aside>

          <form className="contact-form" onSubmit={submit} noValidate>
            <div className="form-row">
              <label className="field">
                <span>Nom complet *</span>
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => update('name', e.target.value)}
                  required
                />
              </label>
              <label className="field">
                <span>Société</span>
                <input
                  type="text"
                  value={form.company}
                  onChange={(e) => update('company', e.target.value)}
                />
              </label>
            </div>

            <div className="form-row">
              <label className="field">
                <span>Email *</span>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => update('email', e.target.value)}
                  required
                />
              </label>
              <label className="field">
                <span>Téléphone</span>
                <input
                  type="tel"
                  value={form.phone}
                  onChange={(e) => update('phone', e.target.value)}
                />
              </label>
            </div>

            <Dropdown
              label="Service concerné"
              value={form.service}
              options={[...services.map((x) => x.title), 'Autre']}
              placeholder="Choisir un service"
              onChange={(v) => update('service', v)}
            />

            <label className="field">
              <span>Décrivez votre besoin *</span>
              <textarea
                rows={5}
                value={form.message}
                onChange={(e) => update('message', e.target.value)}
                required
              />
            </label>

            {error && <p className="form-error">{error}</p>}
            {sent && (
              <p className="form-success">
                Merci — votre demande a bien été enregistrée. Nous revenons vers
                vous rapidement.
              </p>
            )}

            <button type="submit" className="btn btn-primary form-submit" disabled={sending}>
              {sending ? 'Envoi en cours…' : 'Envoyer la demande'}
              {!sending && <span aria-hidden="true">→</span>}
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
