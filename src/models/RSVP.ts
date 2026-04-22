import { readFile, writeFile } from 'node:fs/promises';
import { join } from 'node:path';

export interface RSVPData {
  response: 'accept' | 'decline';
  name: string;
  guests: number;
  dietary?: string;
  timestamp?: string;
}

export class RSVP {
  private static readonly FILE_PATH = join(process.cwd(), 'rsvps.json');

  constructor(public readonly data: RSVPData) { }

  static validate(data: any): data is RSVPData {
    return (
      data &&
      (data.response === 'accept' || data.response === 'decline') &&
      typeof data.name === 'string' &&
      data.name.trim().length > 0
    );
  }

  static async getAll(): Promise<RSVP[]> {
    try {
      const content = await readFile(this.FILE_PATH, 'utf-8');
      const items: RSVPData[] = JSON.parse(content);
      return items.map(item => new RSVP(item));
    } catch {
      return [];
    }
  }

  static async saveAll(rsvps: RSVP[]): Promise<void> {
    const data = rsvps.map(r => r.data);
    await writeFile(this.FILE_PATH, JSON.stringify(data, null, 2));
  }

  async save(): Promise<void> {
    const rsvps = await RSVP.getAll();
    rsvps.push(this);
    await RSVP.saveAll(rsvps);
  }
}
