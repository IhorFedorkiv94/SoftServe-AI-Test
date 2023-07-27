import React from 'react';
import { useTranslation } from 'react-i18next';

function FormattingComponent() {
  const { i18n } = useTranslation();

  const date = new Date();
  const formattedDate = new Intl.DateTimeFormat(i18n.language).format(date);

  const number = 123456.789;
  const formattedNumber = new Intl.NumberFormat(i18n.language).format(number);

  // Assuming the unit is in miles per hour
  const unit = 60;
  const formattedUnit = new Intl.NumberFormat(i18n.language, {
    style: 'unit',
    unit: 'mile-per-hour',
    unitDisplay: 'long'
  }).format(unit);

  return (
    <div>
      <p>Formatted date: {formattedDate}</p>
      <p>Formatted number: {formattedNumber}</p>
      <p>Formatted unit: {formattedUnit}</p>
    </div>
  );
}

export default FormattingComponent;
