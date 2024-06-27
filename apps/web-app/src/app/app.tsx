import React from 'react';
import { AppProvider } from './app-provider';

export function App() {
  return (
    <React.StrictMode>
      <AppProvider />
    </React.StrictMode>
  );
}

export default App;
