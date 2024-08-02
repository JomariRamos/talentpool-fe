import React from 'react';
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Cell } from 'recharts';
import { UserSkill } from '@/types';

interface SkillScatterplotProps {
  data: UserSkill[];
}

const proficiencyLevels = {
  BEGINNER: 1,
  INTERMEDIATE: 2,
  ADVANCED: 3,
  EXPERT: 4,
};

const SkillScatterplot: React.FC<SkillScatterplotProps> = ({ data }) => {
  // Transform data into scatterplot format
  const scatterData = data.map(({ user, skill, proficiencyLevel }) => ({
    name: user.name,
    skill: skill.name,
    proficiency: proficiencyLevels[proficiencyLevel],
  }));

  return (
    <ScatterChart
      width={800}
      height={400}
      margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
    >
      <CartesianGrid />
      <XAxis type="category" dataKey="skill" name="Skill" />
      <YAxis type="number" dataKey="proficiency" name="Proficiency" domain={[1, 4]} ticks={[1, 2, 3, 4]} />
      <Tooltip />
      <Legend />
      <Scatter name="Skills" data={scatterData} fill="#8884d8">
        {scatterData.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={index % 2 === 0 ? '#8884d8' : '#82ca9d'} />
        ))}
      </Scatter>
    </ScatterChart>
  );
};

export default SkillScatterplot;
