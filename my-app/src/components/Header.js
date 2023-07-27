import React from 'react';
import { useTranslation } from 'react-i18next';

function MyComponent() {
  const { t } = useTranslation();

  return <h2>{t('Welcome to React')}</h2>;
}

export default MyComponent;
