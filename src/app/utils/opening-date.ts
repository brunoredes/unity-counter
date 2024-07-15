import { isEqual } from 'date-fns';

export function openingDate() {
  const baseDate = Date.parse('July 17, 2024 06:00:00');
  return isEqual(baseDate, Date.now());
}
