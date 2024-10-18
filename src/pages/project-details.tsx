import { useParams } from 'react-router-dom';

const ProjectDetails = () => {
  const { projectId } = useParams();
  return (
    <div>
      <div>Project details: {projectId}</div>
    </div>
  );
};

export default ProjectDetails;
