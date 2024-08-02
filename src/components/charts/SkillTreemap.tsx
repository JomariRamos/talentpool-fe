import React from 'react';
import { Treemap, Tooltip, Cell } from 'recharts';
import { UserSkill } from '../../types';

interface SkillTreemapProps {
  data: UserSkill[];
}

const SkillTreemap: React.FC<SkillTreemapProps> = ({ data }) => {
  // Prepare data for the treemap
  const skillMap: Record<string, any> = {};

  data.forEach(({ skill, user }) => {
    if (!skillMap[skill.name]) {
      skillMap[skill.name] = { name: skill.name, children: [] };
    }
    skillMap[skill.name].children.push({
      name: user.name,
      size: 1,
    });
  });

  const treemapData = Object.values(skillMap);

  return (
    <Treemap
      width={800}
      height={400}
      data={treemapData}
      dataKey="size"
      stroke="#fff"
      fill="#8884d8"
    >
      <Tooltip />
      {treemapData.map((skill, index) => (
        <Cell key={`cell-${index}`} fill={index % 2 === 0 ? '#8884d8' : '#82ca9d'} />
      ))}
    </Treemap>
  );
};

export default SkillTreemap;
