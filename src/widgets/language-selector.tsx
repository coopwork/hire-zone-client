import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/shared/ui/select.tsx';
import { LANGUAGES } from '@/shared/constants/languages.ts';
import { useTranslation } from 'react-i18next';

const LanguageSelector = () => {
  const { i18n } = useTranslation();
  return (
    <Select value={i18n.language} onValueChange={i18n.changeLanguage}>
      <SelectTrigger id="language" className="w-full">
        <SelectValue placeholder="Theme" />
      </SelectTrigger>
      <SelectContent>
        {LANGUAGES.map(({ label, value }) => (
          <SelectItem key={value} value={value}>
            {label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default LanguageSelector;
