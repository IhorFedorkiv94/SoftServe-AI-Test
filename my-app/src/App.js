import React from 'react';
import Header from "./components/Header"
import FormattingComponent from "./components/FormattingComponent"
import LanguageSelector from "./components/LanguageSelector"

import './i18n';

export function App() {
  return (
      <>
        <Header />
        <LanguageSelector />
        <FormattingComponent />
      </>
  );
}
