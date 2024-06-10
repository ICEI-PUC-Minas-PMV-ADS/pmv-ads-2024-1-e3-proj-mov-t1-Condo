/*import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// Importe MobileDatePicker ao invés de DatePicker
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';

export default function BasicDatePicker() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      {Use MobileDatePicker em vez de DatePicker }
      <MobileDatePicker label="Basic date picker" />
    </LocalizationProvider>
  );
}
*/

import React, {useState} from 'react';
import {Calendar, LocaleConfig} from 'react-native-calendars';


LocaleConfig.locales['pt-br'] = {
    monthNames: [
      'Janeiro',
      'Fevereiro',
      'Março',
      'Abril',
      'Maio',
      'Junho',
      'Julho',
      'Agosto',
      'Setembro',
      'Outubro',
      'Novembro',
      'Dezembro'
    ],
    monthNamesShort: [
      'Jan',
      'Fev',
      'Mar',
      'Abr',
      'Mai',
      'Jun',
      'Jul',
      'Ago',
      'Set',
      'Out',
      'Nov',
      'Dez'
    ],
    dayNames: ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'],
    dayNamesShort: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'],
    today: 'Hoje'
  };
  
LocaleConfig.defaultLocale = 'pt-br';

const Calendario = () => {
  const [selected, setSelected] = useState('');

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    
    <Calendar
      onDayPress={day => {
        setSelected(day.dateString);
      }}
      markedDates={{
        [selected]: {selected: true, disableTouchEvent: true, selectedDotColor: 'orange'}
      }}
    />
  );
};

export default Calendario;

<Calendar
  // Customize the appearance of the calendar
  style={{
    borderWidth: 1,
    borderColor: 'gray',
    height: 350
  }}
  // Specify the current date
  current={'2012-03-01'}
  // Callback that gets called when the user selects a day
  onDayPress={day => {
    console.log('selected day', day);
  }}
  // Mark specific dates as marked
  markedDates={{
    '2012-03-01': {selected: true, marked: true, selectedColor: 'blue'},
    '2012-03-02': {marked: true},
    '2012-03-03': {selected: true, marked: true, selectedColor: 'blue'}
  }}
/>