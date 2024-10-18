import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/shared/ui/tabs';
import SearchJob from '@/shared/components/tabs/search-job.tsx';
import SearchProject from '@/shared/components/tabs/search-project.tsx';
import { useTranslation } from 'react-i18next';

const SearchJobProjects = () => {
  const { t } = useTranslation();
  return (
    <Tabs defaultValue="job" className="w-full">
      <TabsList className="w-full">
        <TabsTrigger className="w-full" value="job">
          {t('pages.home.tab_titles.jobs')}
        </TabsTrigger>
        <TabsTrigger className="w-full" value="project">
          {t('pages.home.tab_titles.projects')}
        </TabsTrigger>
      </TabsList>
      <TabsContent value="job">
        <SearchJob />
      </TabsContent>
      <TabsContent value="project">
        <SearchProject />
      </TabsContent>
    </Tabs>
  );
};

export default SearchJobProjects;
