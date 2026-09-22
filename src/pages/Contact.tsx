import { useState, type FormEvent } from 'react';
import PageHeader from '../components/PageHeader';
import SocialLinks from '../components/SocialLinks';
import { site } from '../data/site';

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
  service: 'Tuyauterie',
  message: '',
};

export default function Contact() {
  const [form, setForm] = useState<FormState>(emptyForm);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const update = <K extends keyof FormState>(key: K, value: FormState[K]) =>
    setForm((f) => ({ ...f, [key]: value }));

  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setError('Merci de renseigner votre nom, votre email et un message.');
      return;
    }
    setError(null);
    setSent(true);
    setForm(emptyForm);
    setTimeout(() => setSent(false), 7000);
  };

  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Demandez un devis ou discutons de votre projet."
        lead="Notre équipe revient vers vous rapidement pour cadrer votre besoin et vous proposer une réponse adaptée."
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
                <a href={`mailto:${site.contact.emailSecretariat}`}>
                  {site.contact.emailSecretariat}
                </a>
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

            <label className="field">
              <span>Service concerné</span>
              <select
                value={form.service}
                onChange={(e) => update('service', e.target.value)}
              >
                <option>Tuyauterie</option>
                <option>Chaudronnerie</option>
                <option>Usinage</option>
                <option>Onshore / Offshore</option>
                <option>Construction & Réparation Navale</option>
                <option>Échangeur & Aéro</option>
                <option>Logistique</option>
                <option>Autre</option>
              </select>
            </label>

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

            <button type="submit" className="btn btn-primary form-submit">
              Envoyer la demande
              <span aria-hidden="true">→</span>
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
