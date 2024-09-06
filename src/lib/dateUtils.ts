export const DATE_OPTIONS: Intl.DateTimeFormatOptions = {
  timeZone: 'America/Mexico_City',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
};

export const TIME_OPTIONS: Intl.DateTimeFormatOptions = {
  timeZone: 'America/Mexico_City',
  hour: '2-digit',
  minute: '2-digit',
};

export function formatDateTime(date: string): string {
  const originalDate = new Date(date);
  originalDate.setHours(originalDate.getHours() - 6);

  const isoDate = originalDate.toISOString();

  return isoDate.replace(/-/g, '').replace(/:/g, '').replace('.', '');
}

export function formatEventDateTime(date: string): {
  dateMX: string;
  hourMX: string;
} {
  const originalStartDate = new Date(date);
  const dateMX = originalStartDate.toLocaleString('es-MX', DATE_OPTIONS);
  const hourMX = originalStartDate.toLocaleString('es-MX', TIME_OPTIONS);

  return { dateMX, hourMX };
}
