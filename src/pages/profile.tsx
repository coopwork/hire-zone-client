import Container from '@/shared/ui/wrappers/container.tsx';
import { useTranslation } from 'react-i18next';
import LanguageSelector from '@/widgets/language-selector.tsx';
import ThemeSwitcher from '@/widgets/theme-switcher.tsx';
import Image from '@/shared/ui/image.tsx';
import { Label } from '@/shared/ui/label.tsx';
import UserActivityChart from '@/shared/components/blocks/user-activity-chart.tsx';
import { useLayoutEffect } from 'react';
import { usePageInfo } from '@/shared/hooks/usePageInfo.tsx';
import { Input } from '@/shared/ui/input.tsx';
import useUser from '@/shared/hooks/useUser.tsx';
import { Button } from '@/shared/ui/button.tsx';
import { Card } from '@/shared/ui/card.tsx';

const mockAvatar =
  'https://images.ctfassets.net/lh3zuq09vnm2/yBDals8aU8RWtb0xLnPkI/19b391bda8f43e16e64d40b55561e5cd/How_tracking_user_behavior_on_your_website_can_improve_customer_experience.png';
const Profile = () => {
  const { t } = useTranslation();
  const { user } = useUser();
  const { setPageInfo } = usePageInfo();

  useLayoutEffect(() => {
    setPageInfo({
      title: 'Профиль',
      name: 'Профиль',
    });
  }, []);
  return (
    <Container>
      <Image className="w-full aspect-square" src={mockAvatar} />
      <div className="flex flex-col gap-4 my-2">
        <div>
          <Label htmlFor="firstName">Имя</Label>
          <Input
            defaultValue={user?.firstName}
            id="firstName"
            placeholder="Ваше имя"
          />
        </div>
        <div>
          <Label htmlFor="lastName">Фамилия</Label>
          <Input
            defaultValue={user?.lastName}
            id="lastName"
            placeholder="Ваше имя"
          />
        </div>
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

      <UserActivityChart />

      <Button className="w-full">Добавить резюме</Button>
      <Card className="border-dashed border-primary/15 p-2.5 text-center text-foreground/50 mt-5">
        Список резюме пуст
      </Card>
    </Container>
  );
};

export default Profile;
