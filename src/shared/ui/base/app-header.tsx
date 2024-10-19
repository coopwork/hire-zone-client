import Logo from '@/shared/ui/base/logo.tsx';
import { Typography } from '@/shared/ui/typography.tsx';
import Container from '@/shared/ui/wrappers/container.tsx';
import { usePageInfo } from '@/shared/hooks/usePageInfo.tsx';

const AppHeader = () => {
  const { pageInfo } = usePageInfo();
  return (
    <header className="fixed top-0 left-0 w-full flex items-center bg-muted/95 backdrop-blur-sm z-10 h-9">
      <Container className="flex justify-between items-center gap-2">
        <div className="flex items-center gap-0.5">
          <Typography
            className="uppercase text-primary-foreground bg-gradient-to-t from-accent to-primary py-0 px-1 rounded-md"
            tag="h5"
          >
            Hire
          </Typography>
          <Logo />
        </div>
        <Typography tag="h6">{pageInfo?.name}</Typography>
      </Container>
    </header>
  );
};

export default AppHeader;
