import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from 'recharts';

interface SkillBarChartProps {
  data: Array<{ skillName: string; BEGINNER?: number; INTERMEDIATE?: number; ADVANCED?: number; EXPERT?: number }>;
}

const SkillBarChart: React.FC<SkillBarChartProps> = ({ data }) => {
  return (
    <BarChart width={800} height={400} data={data}>
      <XAxis dataKey="skillName" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="BEGINNER" stackId="a" fill="#8884d8" />
      <Bar dataKey="INTERMEDIATE" stackId="a" fill="#82ca9d" />
      <Bar dataKey="ADVANCED" stackId="a" fill="#ffc658" />
      <Bar dataKey="EXPERT" stackId="a" fill="#ff7300" />
    </BarChart>
  );
};

export default SkillBarChart;
