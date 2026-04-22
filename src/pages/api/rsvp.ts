import type { APIRoute } from 'astro';
import { readFile, writeFile } from 'node:fs/promises';
import { join } from 'node:path';

const RSVP_FILE = join(process.cwd(), 'rsvps.json');

async function getRsvps(): Promise<any[]> {
  try {
    const data = await readFile(RSVP_FILE, 'utf-8');
    return JSON.parse(data);
  } catch {
    return [];
  }
}

export const POST: APIRoute = async ({ request }) => {
  try {
    const body = await request.json();
    const { response, name, guests, dietary, timestamp } = body;

    if (!response || !name || !['accept', 'decline'].includes(response)) {
      return new Response(JSON.stringify({ error: 'Invalid data' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const rsvps = await getRsvps();
    rsvps.push({
      response,
      name: name.trim(),
      guests: response === 'accept' ? (guests || 1) : 0,
      dietary: dietary?.trim() || '',
      timestamp: timestamp || new Date().toISOString(),
    });

    await writeFile(RSVP_FILE, JSON.stringify(rsvps, null, 2));

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
