import Container from '@/shared/ui/wrappers/container.tsx';
import ResponseCardList from '@/shared/components/lists/response-card-list.tsx';
import { Typography } from '@/shared/ui/typography.tsx';

const Responses = () => {
  return (
    <Container>
      <Typography className="text-center my-2" tag="h6">
        Ваши отклики
      </Typography>
      <ResponseCardList />
    </Container>
  );
};

export default Responses;
