import { FilterIcon } from 'lucide-react';
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
import Container from '@/shared/ui/wrappers/container.tsx';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/shared/ui/select.tsx';
import { Input } from '@/shared/ui/input.tsx';
import { Label } from '@/shared/ui/label.tsx';
import { Checkbox } from '@/shared/ui/checkbox.tsx';
import { Typography } from '@/shared/ui/typography.tsx';

const SearchFilterElement = () => {
  return (
    <div>
      <Drawer>
        <DrawerTrigger asChild>
          <Button type="button" className="p-3" variant="outline" size="icon">
            <FilterIcon />
          </Button>
        </DrawerTrigger>
        <DrawerContent className="max-h-screen">
          <DrawerHeader>
            <DrawerTitle>Фильтры</DrawerTitle>
            <DrawerDescription>
              Отсортируйте вакансии по вашим требованиям
            </DrawerDescription>
          </DrawerHeader>
          <Container className="overflow-y-auto py-1 flex flex-col gap-4">
            <Input placeholder="Название вакансии" />
            <Input placeholder="Компания" />
            <Input placeholder="Уровень зарплаты от" />
            <Input placeholder="Уровень зарплаты до" />
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Опыт работы" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="light">до 1го года</SelectItem>
                <SelectItem value="dark">от 1 до 3 лет</SelectItem>
                <SelectItem value="system">от 3 до 5 лет</SelectItem>
                <SelectItem value="system">от 5 лет</SelectItem>
              </SelectContent>
            </Select>

            <div className="flex flex-col gap-2">
              <Typography tag="h5">Тип занятости</Typography>
              <Label>
                <Checkbox /> Проектная работа
              </Label>
              <Label>
                <Checkbox /> Полная занятость
              </Label>
              <Label>
                <Checkbox /> Частичная занятость
              </Label>
              <Label>
                <Checkbox /> Стажировка
              </Label>
              <Label>
                <Checkbox /> Волонтерство
              </Label>
            </div>

            <div className="flex flex-col gap-2">
              <Typography tag="h5">График работы</Typography>
              <Label>
                <Checkbox /> Удаленная работа
              </Label>
              <Label>
                <Checkbox /> Полный день
              </Label>
              <Label>
                <Checkbox /> Гибкий график
              </Label>
              <Label>
                <Checkbox /> Сменный график
              </Label>
              <Label>
                <Checkbox /> Вахтовый метод
              </Label>
            </div>
          </Container>
          <DrawerFooter>
            <Button>Применить</Button>
            <DrawerClose asChild>
              <Button variant="outline">Отмена</Button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  );
};

export default SearchFilterElement;
