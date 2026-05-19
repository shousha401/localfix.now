import type { VercelRequest, VercelResponse } from '@vercel/node';
import { Resend } from 'resend';

type ContactPayload = {
  name?: string;
  business?: string;
  contact?: string;
  website?: string;
  need?: string;
  message?: string;
  honeypot?: string;
};

const resend = new Resend(process.env.RESEND_API_KEY);

const FROM_ADDRESS = 'LocalFix <help@localfix.now>';
const TO_ADDRESS = ['help@localfix.now', 'shousha401@hotmail.com'];

function escapeHtml(unsafe: string): string {
  return unsafe
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  if (!process.env.RESEND_API_KEY) {
    console.error('RESEND_API_KEY not configured');
    return res.status(500).json({ error: 'Email service not configured' });
  }

  const payload = req.body as ContactPayload;

  if (payload.honeypot && payload.honeypot.length > 0) {
    return res.status(200).json({ ok: true });
  }

  const name = (payload.name || '').trim();
  const business = (payload.business || '').trim();
  const contact = (payload.contact || '').trim();
  const need = (payload.need || '').trim();
  const message = (payload.message || '').trim();

  if (!name || name.length < 2 || name.length > 100) {
    return res.status(400).json({ error: 'Please enter your name.' });
  }

  if (!contact || contact.length < 5 || contact.length > 200) {
    return res.status(400).json({ error: 'Please enter an email address or phone number.' });
  }

  if (!message || message.length < 10) {
    return res.status(400).json({ error: 'Please add a short message with at least 10 characters.' });
  }

  if (message.length > 2000) {
    return res.status(400).json({ error: 'Message is too long. Please keep it under 2,000 characters.' });
  }

  if (business && business.length > 150) {
    return res.status(400).json({ error: 'Business name is too long.' });
  }

  if (need && need.length > 100) {
    return res.status(400).json({ error: 'Selected service is too long.' });
  }

  const businessValue = business || 'Not provided';
  const needValue = need || 'Not selected';
  const subject = `New Free Review Request — ${business || name}`;

  const submittedAt = new Date().toLocaleString('en-US', {
    timeZone: 'America/Los_Angeles',
    dateStyle: 'medium',
    timeStyle: 'short',
  });

  const html = `
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; color: #1a1a1a;">
      <h2 style="color: #0F2A44; font-size: 20px; margin-bottom: 16px;">New free review request</h2>
      <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
        <tr><td style="padding: 8px 0; color: #6B6256; width: 140px;">Name</td><td style="padding: 8px 0; font-weight: 500;">${escapeHtml(name)}</td></tr>
        <tr><td style="padding: 8px 0; color: #6B6256;">Business</td><td style="padding: 8px 0; font-weight: 500;">${escapeHtml(businessValue)}</td></tr>
        <tr><td style="padding: 8px 0; color: #6B6256;">Phone / Email</td><td style="padding: 8px 0; font-weight: 500;">${escapeHtml(contact)}</td></tr>
        <tr><td style="padding: 8px 0; color: #6B6256;">Needs</td><td style="padding: 8px 0;">${escapeHtml(needValue)}</td></tr>
        <tr><td style="padding: 8px 0; color: #6B6256; vertical-align: top;">Message</td><td style="padding: 8px 0; white-space: pre-wrap;">${escapeHtml(message)}</td></tr>
      </table>
      <p style="margin-top: 24px; padding-top: 16px; border-top: 1px solid #E8E2D6; color: #6B6256; font-size: 13px;">Submitted ${submittedAt} PT · From localfix.now</p>
    </div>
  `;

  const text = [
    'New free review request',
    '',
    `Name: ${name}`,
    `Business: ${businessValue}`,
    `Phone/Email: ${contact}`,
    `Needs: ${needValue}`,
    `Message: ${message}`,
    '',
    `Submitted ${submittedAt} PT · From localfix.now`,
  ].filter(Boolean).join('\n');

  const replyTo = contact.includes('@') ? contact : undefined;

  try {
    const result = await resend.emails.send({
      from: FROM_ADDRESS,
      to: TO_ADDRESS,
      subject,
      html,
      text,
      replyTo,
    });

    if (result.error) {
      console.error('Resend send error', result.error);
      return res.status(500).json({ error: 'Could not send. Please try again or text us.' });
    }

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error('Unexpected send error', err);
    return res.status(500).json({ error: 'Could not send. Please try again or text us.' });
  }
}
