import numeral from 'numeral';

export function string2money(rawValue: string | number): string {
  const value = typeof rawValue === 'number' ? rawValue : parseFloat(rawValue);
  if (isNaN(value)) return '';
  return numeral(value).format(`0,0`);
}
