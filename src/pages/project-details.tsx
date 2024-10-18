import { useParams } from 'react-router-dom';
import React from 'react';

const ProjectDetails = () => {
  const { projectId } = useParams();
  return (
    <div>
      <div>Project details: {projectId}</div>
    </div>
  );
};

export default ProjectDetails;
