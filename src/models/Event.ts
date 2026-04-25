import eventData from '@data/event.json';

export interface EventData {
  parentName: string;
  eventType: string;
  tagline: string;
  date: string;
  dayOfWeek: string;
  startTime: string;
  endTime: string;
  venue: string;
  address: string;
  mapUrl: string;
  rsvpDeadline: string;
  hostName: string;
  phone: string;
  whatsapp: string;
  closingMessage: string;
  registryName?: string;
  registryUrl?: string;
  dressCode?: string;
  kidsAllowed?: boolean;
}

export class Event {
  private static instance: Event;
  public readonly data: EventData;

  private constructor() {
    this.data = eventData as EventData;
  }

  static getInstance(): Event {
    if (!Event.instance) {
      Event.instance = new Event();
    }
    return Event.instance;
  }

  get formattedDate(): string {
    return new Date(this.data.date).toLocaleDateString('es-MX', {
      weekday: 'long',
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  }

  get rsvpDeadlineFormatted(): string {
    return new Date(this.data.rsvpDeadline).toLocaleDateString('es-MX', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  }

  get whatsAppUrl(): string {
    const number = this.data.whatsapp.replace(/[^0-9]/g, '');
    const text = encodeURIComponent(`¡Hola! Sobre el Baby Shower de ${this.data.parentName}...`);
    return `https://wa.me/${number}?text=${text}`;
  }

  get phoneUrl(): string {
    return `tel:${this.data.phone.replace(/[^0-9+]/g, '')}`;
  }
}
