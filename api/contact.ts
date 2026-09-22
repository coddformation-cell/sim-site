import type { VercelRequest, VercelResponse } from '@vercel/node';
import { Resend } from 'resend';

type ContactPayload = {
  name?: string;
  company?: string;
  email?: string;
  phone?: string;
  service?: string;
  message?: string;
};

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Méthode non autorisée.' });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const toEmails = (process.env.CONTACT_TO_EMAILS ?? '')
    .split(',')
    .map((e) => e.trim())
    .filter(Boolean);
  const fromEmail = process.env.CONTACT_FROM_EMAIL ?? 'onboarding@resend.dev';

  if (!apiKey || toEmails.length === 0) {
    console.error('Contact form misconfigured: missing RESEND_API_KEY or CONTACT_TO_EMAILS.');
    return res.status(500).json({ error: "Le service d'envoi n'est pas configuré." });
  }

  const body = req.body as ContactPayload;
  const name = (body.name ?? '').trim();
  const company = (body.company ?? '').trim();
  const email = (body.email ?? '').trim();
  const phone = (body.phone ?? '').trim();
  const service = (body.service ?? '').trim();
  const message = (body.message ?? '').trim();

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Nom, email et message sont obligatoires.' });
  }
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    return res.status(400).json({ error: 'Adresse email invalide.' });
  }

  const resend = new Resend(apiKey);

  try {
    const { error } = await resend.emails.send({
      from: `Site S.I.M sarl <${fromEmail}>`,
      to: toEmails,
      replyTo: email,
      subject: `Nouvelle demande de devis — ${service || 'Site web'}`,
      html: `
        <h2>Nouvelle demande depuis le site S.I.M sarl</h2>
        <p><strong>Nom :</strong> ${escapeHtml(name)}</p>
        ${company ? `<p><strong>Société :</strong> ${escapeHtml(company)}</p>` : ''}
        <p><strong>Email :</strong> ${escapeHtml(email)}</p>
        ${phone ? `<p><strong>Téléphone :</strong> ${escapeHtml(phone)}</p>` : ''}
        ${service ? `<p><strong>Service concerné :</strong> ${escapeHtml(service)}</p>` : ''}
        <p><strong>Message :</strong></p>
        <p>${escapeHtml(message).replace(/\n/g, '<br />')}</p>
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return res.status(502).json({ error: "L'envoi a échoué. Merci de réessayer." });
    }

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error('Contact form send failure:', err);
    return res.status(500).json({ error: "L'envoi a échoué. Merci de réessayer." });
  }
}
