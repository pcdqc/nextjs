import {parseISO, format} from 'date-fns';

export default function Date({dateString = '1997-01-01'}) {
  const date = parseISO(dateString);
  return <time dateTime={dateString}>{format(date, 'LLLL d, yyyy')}</time>;
}
