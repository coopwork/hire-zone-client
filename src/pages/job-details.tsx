import { useParams } from 'react-router-dom';
import { usePageInfo } from '@/shared/hooks/usePageInfo.tsx';
import { useLayoutEffect } from 'react';

const JobDetails = () => {
  const { jobId } = useParams();
  const { setPageInfo } = usePageInfo();

  useLayoutEffect(() => {
    setPageInfo({
      title: `Вакансия №${jobId}`,
      name: `Вакансия №${jobId}`,
    });
  }, []);
  return (
    <div>
      <div>Job details: {jobId}</div>
    </div>
  );
};

export default JobDetails;
