import { useState, type FormEvent } from 'react';
import { site } from '../data/site';

type FormState = {
  name: string;
  company: string;
  email: string;
  country: string;
  scope: string;
  message: string;
};

const emptyForm: FormState = {
  name: '',
  company: '',
  email: '',
  country: '',
  scope: 'Pipeline',
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
      setError('Merci de renseigner votre nom, votre email professionnel et un message.');
      return;
    }
    setError(null);
    setSent(true);
    setForm(emptyForm);
    setTimeout(() => setSent(false), 7000);
  };

  return (
    <section className="section contact">
      <div className="container contact-inner">
        <div className="contact-info">
          <p className="contact-lead">
            Décrivez brièvement votre projet offshore, subsea ou pipeline —
            notre équipe revient vers vous sous 48 heures ouvrées.
          </p>

          <ul className="contact-items" role="list">
            <li>
              <span className="contact-label mono">Téléphone</span>
              <a href={`tel:${site.contact.phone1.replace(/\s/g, '')}`}>
                {site.contact.phone1}
              </a>
              <a href={`tel:${site.contact.phone2.replace(/\s/g, '')}`}>
                {site.contact.phone2}
              </a>
            </li>
            <li>
              <span className="contact-label mono">Fax</span>
              <span>{site.contact.fax}</span>
            </li>
            <li>
              <span className="contact-label mono">Email</span>
              <a href={`mailto:${site.contact.email}`}>{site.contact.email}</a>
              <a href={`mailto:${site.contact.emailSecretariat}`}>
                {site.contact.emailSecretariat}
              </a>
            </li>
            <li>
              <span className="contact-label mono">Siège social</span>
              <span>{site.contact.address}</span>
            </li>
            <li>
              <span className="contact-label mono">Site web</span>
              <span>{site.contact.web}</span>
            </li>
          </ul>
        </div>

        <form className="contact-form" onSubmit={submit} noValidate>
          <div className="form-row">
            <label className="field">
              <span>Nom complet</span>
              <input
                type="text"
                value={form.name}
                onChange={(e) => update('name', e.target.value)}
                placeholder="Ex. Aïcha Koné"
                required
              />
            </label>
            <label className="field">
              <span>Société</span>
              <input
                type="text"
                value={form.company}
                onChange={(e) => update('company', e.target.value)}
                placeholder="Nom de votre société"
              />
            </label>
          </div>

          <div className="form-row">
            <label className="field">
              <span>Email professionnel</span>
              <input
                type="email"
                value={form.email}
                onChange={(e) => update('email', e.target.value)}
                placeholder="vous@societe.com"
                required
              />
            </label>
            <label className="field">
              <span>Pays</span>
              <input
                type="text"
                value={form.country}
                onChange={(e) => update('country', e.target.value)}
                placeholder="Côte d’Ivoire"
              />
            </label>
          </div>

          <label className="field">
            <span>Périmètre du projet</span>
            <select
              value={form.scope}
              onChange={(e) => update('scope', e.target.value)}
            >
              <option>Pipeline</option>
              <option>Subsea</option>
              <option>Offshore</option>
              <option>Inspection et maintenance (IRM)</option>
              <option>Autre</option>
            </select>
          </label>

          <label className="field">
            <span>Description du projet</span>
            <textarea
              rows={5}
              value={form.message}
              onChange={(e) => update('message', e.target.value)}
              placeholder="Brève description de votre projet (périmètre, localisation, calendrier…)"
              required
            />
          </label>

          {error && <p className="form-error">{error}</p>}
          {sent && (
            <p className="form-success">
              Merci — votre demande a bien été enregistrée (démonstration
              uniquement, aucune donnée transmise).
            </p>
          )}

          <button type="submit" className="btn btn-primary form-submit">
            Envoyer la demande
            <span aria-hidden="true">→</span>
          </button>
        </form>
      </div>
    </section>
  );
}
