import { Player } from '@lottiefiles/react-lottie-player';
import { Typography } from '@/shared/ui/typography.tsx';
import LanguageSelector from '@/widgets/language-selector.tsx';
import { Label } from '@/shared/ui/label.tsx';

const Welcome = () => {
  return (
    <div className="h-full m-auto flex flex-col justify-center items-center mt-10">
      <Player
        src="/assets/lottie/hello-letter.json"
        loop
        autoplay
        className="w-48 h-48"
      />
      <Typography className="text-center font-bold text-primary" tag="h2">
        HIRE ZONE
      </Typography>
      <Typography className="text-center my-2.5" tag="h3">
        Добро пожаловать!
      </Typography>
      <Typography className="text-center" tag="p">
        Здесь Вы можете быстро найти себе работу и подтянуть навыки
      </Typography>

      <div className="mt-5">
        <Label htmlFor="language">Выберите свой язык</Label>
        <LanguageSelector />
      </div>
    </div>
  );
};

export default Welcome;
