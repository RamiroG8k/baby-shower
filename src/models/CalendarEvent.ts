import type { EventData } from '@models/Event';

export class CalendarEvent {
  private readonly title: string;
  private readonly location: string;
  private readonly description: string;
  private readonly startCal: string;
  private readonly endCal: string;

  constructor(private readonly event: EventData) {
    const dateStr = event.date.replace(/-/g, '');
    this.title = encodeURIComponent(`${event.parentName}'s ${event.eventType}`);
    this.location = encodeURIComponent(`${event.venue}, ${event.address}`);
    this.description = encodeURIComponent(`${event.tagline} Organizado por ${event.hostName}.`);
    this.startCal = `${dateStr}T${CalendarEvent.to24h(event.startTime)}`;
    this.endCal = `${dateStr}T${CalendarEvent.to24h(event.endTime)}`;
  }

  private static to24h(time: string): string {
    const [timePart, period] = time.split(' ');
    let [h, m] = timePart.split(':').map(Number);
    if (period === 'PM' && h !== 12) h += 12;
    if (period === 'AM' && h === 12) h = 0;
    return `${String(h).padStart(2, '0')}${String(m).padStart(2, '0')}00`;
  }

  get googleUrl(): string {
    return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${this.title}&dates=${this.startCal}/${this.endCal}&location=${this.location}&details=${this.description}`;
  }

  get icsContent(): string {
    return [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'BEGIN:VEVENT',
      `DTSTART:${this.startCal}`,
      `DTEND:${this.endCal}`,
      `SUMMARY:${this.event.parentName}'s ${this.event.eventType}`,
      `LOCATION:${this.event.venue}, ${this.event.address}`,
      `DESCRIPTION:${this.event.tagline} Organizado por ${this.event.hostName}.`,
      'END:VEVENT',
      'END:VCALENDAR',
    ].join('\r\n');
  }

  get icsDataUri(): string {
    return `data:text/calendar;charset=utf-8,${encodeURIComponent(this.icsContent)}`;
  }

  get icsFilename(): string {
    return `${this.event.parentName.toLowerCase().replace(/\s+/g, '-')}-baby-shower.ics`;
  }
}
