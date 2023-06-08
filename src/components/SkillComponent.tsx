// SkillComponent.tsx
import React from 'react';

interface SkillProps {
  skillName: string;
  iconUrl: string;
}

const SkillComponent: React.FC<SkillProps> = ({ skillName, iconUrl }) => {
  return (
    <div className="bg-gray-100 cursor-pointer text-blue-900 p-6 ease-in-out duration-200 rounded-2xl ring-1 ring-inset ring-gray-200 shadow-md  hover:ring-gray-300 hover:text-blue-950 flex items-center">
      <img src={iconUrl} alt={skillName} className="h-10 w-10 mr-4 object-contain rounded-md" /> 
      <h3 className='hover:drop-shadow-xl md:filter-none'>{skillName}</h3>
    </div>
  );
};

export default SkillComponent;
