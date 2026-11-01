import React from 'react';
import { Languages } from 'lucide-react';
import { useI18n } from '../../i18n/LanguageContext.tsx';

interface LanguageToggleProps {
  /** "icon" renders a compact square button, "full" renders a labelled pill. */
  variant?: 'icon' | 'full';
  className?: string;
}

/**
 * Language switcher. The label always shows the language the user will get
 * after clicking, so it reads "EN" while the UI is Arabic and "ع" while the
 * UI is English.
 */
export const LanguageToggle: React.FC<LanguageToggleProps> = ({ variant = 'icon', className = '' }) => {
  const { language, toggleLanguage, t } = useI18n();
  const isArabic = language === 'ar';
  const tooltip = isArabic ? t('التبديل إلى الإنجليزية') : t('التبديل إلى العربية');
  const targetLabel = isArabic ? 'EN' : 'ع';
  const fullLabel = isArabic ? 'English' : 'العربية';

  if (variant === 'full') {
    return (
      <button
        type="button"
        onClick={toggleLanguage}
        title={tooltip}
        aria-label={tooltip}
        className={`inline-flex items-center justify-center gap-2 px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 text-xs font-semibold transition-colors cursor-pointer ${className}`}
      >
        <Languages className="w-4 h-4 text-indigo-500" />
        <span>{fullLabel}</span>
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={toggleLanguage}
      title={tooltip}
      aria-label={tooltip}
      className={`p-2 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer ${className}`}
    >
      <span className="flex items-center justify-center gap-1">
        <Languages className="w-4 h-4 text-indigo-500" />
        <span className="text-[10px] font-bold leading-none">{targetLabel}</span>
      </span>
    </button>
  );
};
