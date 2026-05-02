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
            `${event.parentName}'s ${event.eventType}`,
        );
        this.location = encodeURIComponent(`${event.venue}, ${event.address}`);
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
            `SUMMARY:${this.event.parentName}'s ${this.event.eventType}`,
            `LOCATION:${this.event.venue}, ${this.event.address}`,
            `DESCRIPTION:${this.event.tagline} Organizado por ${this.event.hostName}.\n\n${eventUrl}`,
            `URL:${eventUrl}`,
            ...this.getAlarms(),
            "END:VEVENT",
            "END:VCALENDAR",
        ].join("\r\n");
    }

    private getAlarms(): string[] {
        const dateStr = this.startCal.split("T")[0];
        const startTime = this.startCal.split("T")[1];
        const startHour = parseInt(startTime.substring(0, 2), 10);
        const startMinute = parseInt(startTime.substring(2, 4), 10);

        // Alarm 1: 2 hours before
        let alarmHour = startHour - 2;
        let alarmMinute = startMinute;
        let alarmDate = dateStr;

        if (alarmHour < 0) {
            alarmHour += 24;
            // Simple day decrement (assumes event is not on first day of month)
            const day = parseInt(dateStr.substring(6, 8), 10);
            alarmDate = `${dateStr.substring(0, 6)}${String(day - 1).padStart(2, "0")}`;
        }

        const alarmTime2h = `${String(alarmHour).padStart(2, "0")}${String(alarmMinute).padStart(2, "0")}00`;
        const alarmDate2h = alarmDate;

        // Alarm 2: 1 day before (same time)
        const day = parseInt(dateStr.substring(6, 8), 10);
        const alarmDate1d = `${dateStr.substring(0, 6)}${String(day - 1).padStart(2, "0")}`;

        return [
            "BEGIN:VALARM",
            "ACTION:DISPLAY",
            "DESCRIPTION:Reminder - 2 hours before event",
            `TRIGGER:-PT2H`,
            "END:VALARM",
            "BEGIN:VALARM",
            "ACTION:DISPLAY",
            "DESCRIPTION:Reminder - 1 day before event",
            `TRIGGER:-P1D`,
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
