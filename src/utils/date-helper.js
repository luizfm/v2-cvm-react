import { format, isValid, parseISO } from 'date-fns';

export const formatDate = (date, dateFormat = 'dd/MM/yyyy') => {
  const currentDate = new Date(date);
  if (!isValid(currentDate)) {
    return date;
  }

  return format(currentDate, dateFormat);
};
