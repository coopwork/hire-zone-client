import React from 'react';
import { useParams } from 'react-router-dom';

const JobDetails = () => {
  const { jobId } = useParams();
  return (
    <div>
      <div>Job details: {jobId}</div>
    </div>
  );
};

export default JobDetails;
