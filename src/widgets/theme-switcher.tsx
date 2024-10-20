import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/shared/ui/select.tsx';
import { useTheme } from '@/features/theme-provider/theme-provider.tsx';
import { THEMES } from '@/shared/constants/themes.ts';
import { useTranslation } from 'react-i18next';

const ThemeSwitcher = () => {
  const { i18n } = useTranslation();
  const { theme, setTheme } = useTheme();
  return (
    <Select value={theme} onValueChange={setTheme}>
      <SelectTrigger id="theme" className="w-full">
        <SelectValue placeholder="Theme" />
      </SelectTrigger>
      <SelectContent>
        {THEMES.map(({ value, label }) => (
          <SelectItem key={value} value={value}>
            {label[i18n.language]}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default ThemeSwitcher;
