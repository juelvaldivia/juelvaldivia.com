import { formatDateTime } from '@/lib/dateUtils';

export function createGoogleCalendarLink(event: {
  name: string;
  date: string;
  endDate: string;
  place: string;
  description: string;
}): string {
  const formattedISOStartDate = formatDateTime(event.date);
  const formattedISOEndDate = formatDateTime(event.endDate);

  return `https://calendar.google.com/calendar/event?action=TEMPLATE&text=${event.name}
          &dates=${formattedISOStartDate}/${formattedISOEndDate}
          &location=${event.place}
          &details=${event.description}
          &trp=false
          &hl=es
          &addtocalendar=1`;
}

export function createOutlookCalendarLink(event: {
  name: string;
  date: string;
  endDate: string;
  place: string;
  description: string;
}): string {
  const formattedStartDate = formatDateTime(event.date);
  const formattedEndDate = formatDateTime(event.endDate);

  return `https://outlook.live.com/calendar/0/deeplink/compose?allday=false&body=${event.description}
          &enddt=${formattedEndDate}
          &location=${event.place}
          &path=/calendar/view/Month&rru=addevent
          &startdt=${formattedStartDate}
          &subject=${event.name}
          &to=`;
}
