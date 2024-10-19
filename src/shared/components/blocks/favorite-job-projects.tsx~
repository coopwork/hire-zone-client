import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/shared/ui/tabs.tsx';
import FavoriteJob from '@/shared/components/tabs/favorite-job.tsx';
import FavoriteProject from '@/shared/components/tabs/favorite-project.tsx';
import { useTranslation } from 'react-i18next';

const FavoriteJobProjects = () => {
  const { t } = useTranslation();
  return (
    <Tabs defaultValue="job" className="w-full">
      <TabsList className="sticky top-0 w-full flex gap-1 py-2 bg-muted/95 backdrop-blur-sm z-10">
        <TabsTrigger className="w-full" value="job">
          {t('pages.favorites.tab_titles.jobs')}
        </TabsTrigger>
        <TabsTrigger className="w-full" value="project">
          {t('pages.favorites.tab_titles.projects')}
        </TabsTrigger>
      </TabsList>
      <TabsContent value="job">
        <FavoriteJob />
      </TabsContent>
      <TabsContent value="project">
        <FavoriteProject />
      </TabsContent>
    </Tabs>
  );
};

export default FavoriteJobProjects;
