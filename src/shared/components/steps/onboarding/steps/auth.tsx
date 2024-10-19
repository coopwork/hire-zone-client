import useUser from '@/shared/hooks/useUser.tsx';
import { Typography } from '@/shared/ui/typography.tsx';
import { Input } from '@/shared/ui/input.tsx';
import { Label } from '@/shared/ui/label.tsx';

const Auth = () => {
  const { user } = useUser();
  return (
    <div>
      <Typography className="text-center text-primary font-bold" tag="h3">
        Вход
      </Typography>
      <Typography className="text-center">
        Для продолжения работы необходимо авторизоваться
      </Typography>

      <div className="flex flex-col gap-3">
        <div>
          <Label htmlFor="firstName">Ваше имя</Label>
          <Input
            id="firstName"
            placeholder="Имя"
            defaultValue={user?.firstName}
          />
        </div>
        <div>
          <Label htmlFor="LastName">Ваша фамилия</Label>
          <Input
            id="LastName"
            placeholder="Фамилия"
            defaultValue={user?.lastName}
          />
        </div>
      </div>
    </div>
  );
};

export default Auth;
