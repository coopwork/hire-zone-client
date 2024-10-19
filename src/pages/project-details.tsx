import { useParams } from 'react-router-dom';
import { usePageInfo } from '@/shared/hooks/usePageInfo.tsx';
import { useLayoutEffect } from 'react';

const ProjectDetails = () => {
  const { projectId } = useParams();
  const { setPageInfo } = usePageInfo();

  useLayoutEffect(() => {
    setPageInfo({
      title: `Проект №${projectId}`,
      name: `Проект №${projectId}`,
    });
  }, []);
  return (
    <div>
      <div>Project details: {projectId}</div>
    </div>
  );
};

export default ProjectDetails;
