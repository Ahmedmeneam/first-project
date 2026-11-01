import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { installFetchLanguageHeader, setCurrentLanguage } from './i18n/translate.ts';

try {
  const stored = localStorage.getItem('warehouse_language');
  if (stored === 'ar' || stored === 'en') setCurrentLanguage(stored);
} catch {
  /* storage unavailable */
}
installFetchLanguageHeader();

createRoot(document.getElementById('root')!).render(<App />);
