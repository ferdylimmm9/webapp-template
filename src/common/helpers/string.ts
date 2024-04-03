import { format } from 'date-fns';
import numeral from 'numeral';

export function string2money(rawValue: string | number): string {
  const value = typeof rawValue === 'number' ? rawValue : parseFloat(rawValue);
  if (isNaN(value)) return '';
  return numeral(value).format(`0,0`);
}

export function formatDate(date: string) {
  try {
    const result = new Date(date);
    return format(result, 'dd MMM yyyy, HH:mm');
  } catch (e: any) {
    return e.message;
  }
}
