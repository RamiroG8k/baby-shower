import type { APIRoute } from 'astro';
import { RSVP } from '@models/RSVP';

export const POST: APIRoute = async ({ request }) => {
  try {
    const body = await request.json();

    if (!RSVP.validate(body)) {
      return new Response(JSON.stringify({ error: 'Invalid data' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const rsvp = new RSVP({
      response: body.response,
      name: body.name.trim(),
      guests: body.response === 'accept' ? (body.guests || 1) : 0,
      dietary: body.dietary?.trim() || '',
      timestamp: body.timestamp || new Date().toISOString(),
    });

    await rsvp.save();

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch {
    return new Response(JSON.stringify({ error: 'Server error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};
