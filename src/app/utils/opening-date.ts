import { isEqual } from 'date-fns';
import { eventDate } from './date';

export function openingDate() {
  const baseDate = Date.parse(eventDate);
  return isEqual(baseDate, Date.now());
}
