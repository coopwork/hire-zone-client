import Container from '@/shared/ui/wrappers/container.tsx';
import { useTranslation } from 'react-i18next';
import LanguageSelector from '@/widgets/language-selector.tsx';
import ThemeSwitcher from '@/widgets/theme-switcher.tsx';
import Image from '@/shared/ui/image.tsx';
import { Typography } from '@/shared/ui/typography.tsx';
import { Label } from '@/shared/ui/label.tsx';

const Profile = () => {
  const { t } = useTranslation();
  return (
    <Container>
      <Typography className="text-center my-2" tag="h6">
        Профиль
      </Typography>

      <Image
        className="w-full aspect-square"
        src={
          'https://images.ctfassets.net/lh3zuq09vnm2/yBDals8aU8RWtb0xLnPkI/19b391bda8f43e16e64d40b55561e5cd/How_tracking_user_behavior_on_your_website_can_improve_customer_experience.png'
        }
      />
      <div className="flex flex-col gap-4 my-2">
        <div>
          <Label htmlFor="language">Язык системы</Label>
          <LanguageSelector />
        </div>
        <div>
          <Label htmlFor="theme">Тема оформления</Label>
          <ThemeSwitcher />
        </div>
      </div>
      <div>{t('app_name')}</div>
    </Container>
  );
};

export default Profile;
