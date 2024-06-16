import React, { useState } from 'react';
import { Calendar, LocaleConfig } from 'react-native-calendars';

LocaleConfig.locales['pt-br'] = {
  monthNames: [
    'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
    'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
  ],
  monthNamesShort: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
  dayNames: ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'],
  dayNamesShort: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'],
  today: 'Hoje'
};

LocaleConfig.defaultLocale = 'pt-br';

const Calendario = ({ selectedDate, onDayPress }) => {
  const [selectedDay, setSelectedDay] = useState('');

  return (
    <Calendar
      onDayPress={(day) => {
        setSelectedDay(day.dateString); // Atualiza o dia selecionado
        onDayPress(day); // Chama a função onDayPress passada como prop
      }}
      markedDates={{
        [selectedDay]: { selected: true, disableTouchEvent: true, selectedDotColor: 'orange' },
        [selectedDate]: { selected: true, marked: true, selectedColor: 'blue' }
      }}
      style={{
        borderRadius: 12,
        justifyContent: 'center',
        width: 300,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        borderColor: 'gray',
        height: 366
      }}
    />
  );
};

export default Calendario;


<Calendar
  // Customize the appearance of the calendar
  style={{
    borderRadius: 20,
    height: 366,
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