import { MicIcon } from 'lucide-react';
import { Button } from '@/shared/ui/button.tsx';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/shared/ui/drawer.tsx';
import { Player } from '@lottiefiles/react-lottie-player';

const SearchMicElement = () => {
  return (
    <div>
      <Drawer>
        <DrawerTrigger asChild>
          <Button type="button" className="p-3" variant="outline" size="icon">
            <MicIcon />
          </Button>
        </DrawerTrigger>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>Говорите что Вы хотите найти</DrawerTitle>
            <DrawerDescription>
              Как закончите нажмите "Подтвердить"
            </DrawerDescription>
          </DrawerHeader>
          <Player
            loop
            autoplay
            src="/assets/lottie/audio-eq-min.json"
            className="block h-48 -my-10 animate-pulse ease-in-out"
          />
          <DrawerFooter>
            <Button>Подтвердить</Button>
            <DrawerClose asChild>
              <Button variant="outline">Отмена</Button>
            </DrawerClose>
          </DrawerFooter>
          <Player
            loop
            autoplay
            speed={1.5}
            src="/assets/lottie/audio-wave.json"
            className="absolute w-full -bottom-1 left-0 -z-10 animate-pulse ease-in-out"
          />
        </DrawerContent>
      </Drawer>
    </div>
  );
};

export default SearchMicElement;
