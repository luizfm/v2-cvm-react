import React, { useMemo } from 'react';
import { Calendar, dateFnsLocalizer } from 'react-big-calendar';
import format from 'date-fns/format';
import parse from 'date-fns/parse';
import startOfWeek from 'date-fns/startOfWeek';
import getDay from 'date-fns/getDay';

import { useSelector } from 'react-redux';
import ptBR from 'date-fns/locale/pt-BR';

import { getCalendarEvents } from '_modules/prismic/selectors';

import './lib/lib-styles.css';
import styles from './styles.css';

const locales = {
  'pt-BR': ptBR,
};

const messages = {
  allDay: 'Dia Inteiro',
  previous: '<',
  next: '>',
  today: 'Hoje',
  month: 'Mês',
  week: 'Semana',
  day: 'Dia',
  agenda: 'Agenda',
  date: 'Data',
  time: 'Hora',
  event: 'Evento',
  showMore: (total) => `+ (${total}) Eventos`,
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

const EventCalendar = () => {
  const eventList = useSelector(getCalendarEvents);

  return (
    <div className={styles['event-calendar-container']}>
      <Calendar
        culture="pt-BR"
        localizer={localizer}
        events={eventList}
        startAccessor="start"
        messages={messages}
        endAccessor="end"
        style={{ height: 500 }}
      />
    </div>
  );
};

export default React.memo(EventCalendar);
