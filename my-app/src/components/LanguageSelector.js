import React from 'react';
import { useTranslation } from 'react-i18next';

function LanguageSelector() {
  const { i18n } = useTranslation();

  const changeLanguage = (event) => {
    i18n.changeLanguage(event.target.value);
  };

  return (
    <select name="language" onChange={changeLanguage}>
      <option value="en">English</option>
      <option value="es">Español</option>
    </select>
  );
}

export default LanguageSelector;
