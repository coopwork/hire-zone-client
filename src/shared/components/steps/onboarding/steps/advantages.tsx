import { Player } from '@lottiefiles/react-lottie-player';
import { Typography } from '@/shared/ui/typography.tsx';
import { TerminalIcon } from 'lucide-react';

const Advantages = () => {
  return (
    <div className="h-full m-auto flex flex-col justify-center items-center mt-10">
      <Player
        src="/assets/lottie/advantages.json"
        loop
        autoplay
        className="w-48 h-48"
      />
      <Typography className="text-center" tag="h3">
        Наши преимущества
      </Typography>
      <Typography
        className="text-center font-bold text-primary my-2.5"
        tag="h2"
      >
        Голосовой ассистент
      </Typography>
      <Typography className="text-center" tag="p">
        Благодаря голосовому ассистенту вы можете:
      </Typography>
      <ul className="flex flex-col gap-3 my-3">
        <li className="flex items-center">
          <TerminalIcon className="text-primary animate-pulse" /> Быстро искать
          себе работу по фильтрам
        </li>
        <li className="flex items-center">
          <TerminalIcon className="text-primary animate-pulse" />
          Упражняться в прохождении интервью
        </li>
        <li className="flex items-center">
          <TerminalIcon className="text-primary animate-pulse" />
          Обучаться новым технологиям
        </li>
        <li className="flex items-center">
          <TerminalIcon className="text-primary animate-pulse" />
          Получать обратную связь о себе
        </li>
      </ul>
    </div>
  );
};

export default Advantages;
