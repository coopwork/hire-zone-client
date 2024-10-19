import { Link } from 'react-router-dom';
import { PATHS } from '@/shared/constants/paths.ts';
import { Card, CardContent } from '@/shared/ui/card.tsx';
import { BriefcaseBusinessIcon } from 'lucide-react';
import { Typography } from '@/shared/ui/typography.tsx';
import { Player } from '@lottiefiles/react-lottie-player';

type HintCardProps = {
  hint: {
    id: number | string;
  };
};

const HintCard = ({ hint }: HintCardProps) => {
  return (
    <Card className="relative aspect-square min-w-32 w-32 overflow-hidden bg-gradient-to-br from-accent/40 to-primary/20">
      <Link
        className="absolute top-0 left-0 w-full h-full z-[2]"
        to={PATHS.HINT_DETAILS.replace(':hintId', `${hint.id}`)}
      />
      <CardContent className="p-4 w-full h-full flex flex-col items-center justify-between gap-2 text-center relative z-[1]">
        <BriefcaseBusinessIcon className="w-10 h-10" />
        <Typography className="text-[.65rem]" tag="h6">
          Как найти хорошую работу?
        </Typography>
      </CardContent>
      <Player
        loop
        autoplay
        src="/assets/lottie/gradient-circles.json"
        className="absolute w-full h-full top-0 left-0 opacity-15"
      />
    </Card>
  );
};

export default HintCard;
