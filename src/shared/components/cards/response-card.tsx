import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/shared/ui/card.tsx';
import { Avatar, AvatarFallback, AvatarImage } from '@/shared/ui/avatar.tsx';
import { Typography } from '@/shared/ui/typography.tsx';
import { AwardIcon, MapPinIcon } from 'lucide-react';
import { Button } from '@/shared/ui/button.tsx';
import { Badge } from '@/shared/ui/badge.tsx';

const ResponseCard = () => {
  return (
    <Card>
      <CardHeader className="pb-1 flex-row justify-between items-center">
        <div>
          <CardTitle>Backend React Developer</CardTitle>
          <CardDescription>100 000тг.</CardDescription>
        </div>
        <div>
          <Badge variant="destructive">Отказ</Badge>
        </div>
      </CardHeader>
      <CardContent>
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
      </CardContent>
      <CardFooter>
        <Button variant="gradient" className="w-full">
          Смотреть
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ResponseCard;
