import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/shared/ui/card.tsx';
import { Button } from '@/shared/ui/button.tsx';
import { AwardIcon, EyeOffIcon, MapPinIcon, StarIcon } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/shared/ui/avatar.tsx';
import { useNavigate } from 'react-router-dom';
import { Typography } from '@/shared/ui/typography.tsx';
import { Badge } from '@/shared/ui/badge.tsx';
import { PATHS } from '@/shared/constants/paths.ts';
import CoverLetterModal from '@/shared/components/modals/cover-letter-modal.tsx';

type JobCardProps = {
  details: {
    title: string;
    id: number | string;
  };
};

const JobCard = ({ details }: JobCardProps) => {
  const navigate = useNavigate();
  return (
    <Card>
      <CardHeader className="pb-1 flex-row justify-between items-center">
        <div>
          <CardTitle>{details?.title}</CardTitle>
          <CardDescription>100 000 тг.</CardDescription>
        </div>
        <div>
          <Button size="icon" variant="ghost">
            <EyeOffIcon />
          </Button>
          <Button size="icon" variant="ghost">
            <StarIcon />
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="mb-4 flex items-center flex-wrap gap-2">
          <Badge variant="secondary">Опыт более 6 лет</Badge>
          <Badge variant="secondary">Можно удаленно</Badge>
        </div>
        <section className="flex gap-5">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div>
            <Typography className="flex items-center gap-1" tag="small">
              <AwardIcon className="w-3 h-3 text-accent" />
              LowCode DDoS inc.
            </Typography>
            <Typography className="flex items-center gap-1" tag="h6">
              <MapPinIcon className="w-3 h-3" />
              Астана
            </Typography>
          </div>
        </section>
        <article>
          <Badge variant="warning" className="mt-5">
            Подходит по навыкам на 85%
          </Badge>
          <Typography className="block mt-2" tag="small">
            Разработкой пользовательских интерфейсов на основе предоставленных
            дизайнов. Реализацией адаптивного и кросс-браузерного веб-дизайна.
            Внедрением интерактивных элементов и анимаций.
          </Typography>
        </article>
      </CardContent>
      <CardFooter className="gap-2">
        <CoverLetterModal
          jobDetails={details}
          children={
            <Button variant="gradient" className="w-full">
              Откликнуться
            </Button>
          }
        />

        <Button
          variant="secondary"
          className="w-full"
          onClick={() =>
            navigate(`${PATHS.JOB_DETAILS.replace(':jobId', `${details?.id}`)}`)
          }
        >
          Смотреть
        </Button>
      </CardFooter>
    </Card>
  );
};

export default JobCard;
