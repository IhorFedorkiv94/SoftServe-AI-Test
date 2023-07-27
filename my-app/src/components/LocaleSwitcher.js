import React from 'react';
import { useTranslation } from 'react-i18next';

function LocaleSwitcher() {
  const { i18n } = useTranslation();

  const handleLocaleChange = (e) => {
    const selectedLanguage = e.target.value;
    i18n.changeLanguage(selectedLanguage);
  };

  return (
    <div>
      <select onChange={handleLocaleChange} value={i18n.language}>
        <option value="en">English</option>
        <option value="es">Español</option>
      </select>
    </div>
  );
}

export default LocaleSwitcher;
