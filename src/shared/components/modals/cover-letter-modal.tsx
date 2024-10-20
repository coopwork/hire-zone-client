import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/shared/ui/drawer';
import { Button } from '@/shared/ui/button.tsx';
import { Textarea } from '@/shared/ui/textarea.tsx';
import Container from '@/shared/ui/wrappers/container.tsx';

type CoverLetterModalProps = {
  children: JSX.Element;
  jobDetails: {
    title: string;
    id: number | string;
  };
};
const CoverLetterModal = ({ children, jobDetails }: CoverLetterModalProps) => {
  const handleSubmitResponse = () => {
    console.log('submited', jobDetails.id);
  };
  return (
    <Drawer>
      <DrawerTrigger asChild>{children}</DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>
            Вы ходите откликнуться на вакансию "{jobDetails?.title}"?
          </DrawerTitle>
          <DrawerDescription>
            Сопроводительное письмо добавить шансов вашей кандидатуре.
          </DrawerDescription>
        </DrawerHeader>
        <Container>
          <Textarea
            className="resize-none"
            placeholder="Сопроводительное письмо..."
          />
        </Container>
        <DrawerFooter>
          <Button variant="gradient" onClick={handleSubmitResponse}>
            Откликнуться
          </Button>
          <DrawerClose asChild>
            <Button variant="outline">Отмена</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default CoverLetterModal;
