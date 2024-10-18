import React from 'react';
import ProjectCard from '@/shared/components/cards/project-card.tsx';

const ProjectCardList = () => {
  return (
    <div className="flex flex-col gap-4">
      {[...Array(10)].map((_, index) => (
        <ProjectCard
          details={{
            id: index + 1,
            title: `Разработка CRM системы ${index + 1}`,
          }}
          key={index}
        />
      ))}
    </div>
  );
};

export default ProjectCardList;
