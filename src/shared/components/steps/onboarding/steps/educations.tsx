import { Player } from '@lottiefiles/react-lottie-player';
import { Typography } from '@/shared/ui/typography.tsx';

const Educations = () => {
  return (
    <div className="h-full m-auto flex flex-col justify-center items-center mt-10">
      <Player
        src="/assets/lottie/education.json"
        loop
        autoplay
        className="w-48 h-48"
      />
      <Typography className="text-center font-bold text-primary" tag="h2">
        HIRE ZONE
      </Typography>
      <Typography className="text-center my-2.5" tag="h3">
        Ваш лучший помощник!
      </Typography>
      <Typography className="text-center" tag="p">
        Ваш лучший помощник в поиске проектов и постоянной работы а так же наш
        голосовой помощник поможет вам подготовиться к собеседованиям и
        подтянуть навыки
      </Typography>
    </div>
  );
};

export default Educations;
