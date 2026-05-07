import type { EventData } from "@models/Event";

export class CalendarEvent {
    private readonly title: string;
    private readonly location: string;
    private readonly description: string;
    private readonly startCal: string;
    private readonly endCal: string;

    constructor(private readonly event: EventData) {
        const dateStr = event.date.replace(/-/g, "");
        this.title = encodeURIComponent(
            `${event.eventType} de ${event.parentName}`,
        );
        this.location = encodeURIComponent(
            `${event.venue}, ${event.address}\n${event.mapUrl}`,
        );
        // Build description with invite URL
        const baseUrl = "https://baby-niko.g8k.dev";
        // const inviteUrl = `${baseUrl}/rsvp/${event.parentName.toLowerCase().replace(/\s+/g, "")}`;
        this.description = encodeURIComponent(
            `${event.tagline} Organizado por ${event.hostName}.\n\n${baseUrl}`,
        );
        this.startCal = `${dateStr}T${CalendarEvent.to24h(event.startTime)}`;
        this.endCal = `${dateStr}T${CalendarEvent.to24h(event.endTime)}`;
    }

    private static to24h(time: string): string {
        const [timePart, period] = time.split(" ");
        let [h, m] = timePart.split(":").map(Number);
        const upperPeriod = (period || "").toUpperCase();
        if (upperPeriod === "PM" && h !== 12) h += 12;
        if (upperPeriod === "AM" && h === 12) h = 0;
        return `${String(h).padStart(2, "0")}${String(m).padStart(2, "0")}00`;
    }

    get googleUrl(): string {
        return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${this.title}&dates=${this.startCal}/${this.endCal}&location=${this.location}&details=${this.description}`;
    }

    get icsContent(): string {
        const eventUrl = `https://baby-niko.g8k.dev`;
        return [
            "BEGIN:VCALENDAR",
            "VERSION:2.0",
            "BEGIN:VEVENT",
            `DTSTART:${this.startCal}`,
            `DTEND:${this.endCal}`,
            `SUMMARY:${this.event.eventType} de ${this.event.parentName}`,
            `LOCATION:${this.event.venue}\\, ${this.event.address}\\n${this.event.mapUrl}`,
            `DESCRIPTION:${this.event.tagline} Organizado por ${this.event.hostName}.\\n\\n${eventUrl}`,
            `URL:${eventUrl}`,
            ...this.getAlarms(),
            "END:VEVENT",
            "END:VCALENDAR",
        ].join("\r\n");
    }

    private getAlarms(): string[] {
        return [
            "BEGIN:VALARM",
            "ACTION:DISPLAY",
            "DESCRIPTION:Recordatorio",
            "TRIGGER:-P1D",
            "END:VALARM",
            "BEGIN:VALARM",
            "ACTION:DISPLAY",
            "DESCRIPTION:Recordatorio",
            "TRIGGER:-PT2H",
            "END:VALARM",
        ];
    }

    get icsDataUri(): string {
        return `data:text/calendar;charset=utf-8,${encodeURIComponent(this.icsContent)}`;
    }

    get icsFilename(): string {
        return `${this.event.parentName.toLowerCase().replace(/\s+/g, "-")}-baby-shower.ics`;
    }
}
