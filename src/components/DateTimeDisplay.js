import moment from 'moment';
import React from 'react';

function DateTimeDisplay({ datetime }) {
  return <span>{moment(datetime).format('YYYY-MM-DD')}</span>;
}

export default DateTimeDisplay;
