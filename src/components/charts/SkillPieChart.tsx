import React from 'react';
import { PieChart, Pie, Cell, Tooltip } from 'recharts';

interface SkillPieChartProps {
  data: Array<{ name: string; count: number }>;
}

const SkillPieChart: React.FC<SkillPieChartProps> = ({ data }) => {
  return (
    <PieChart width={800} height={400}>
      <Pie
        data={data}
        dataKey="count"
        nameKey="name"
        outerRadius={150}
        fill="#8884d8"
        label
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={index % 2 === 0 ? '#8884d8' : '#82ca9d'} />
        ))}
      </Pie>
      <Tooltip />
    </PieChart>
  );
};

export default SkillPieChart;
