import React from 'react';
import { useQuery } from '@apollo/client';
import { UserSkill } from '../types';
import { GET_USERS_SKILLS } from '../queries';
import SkillBarChart from '../components/charts/SkillBarChart';
import SkillScatterplot from '../components/charts/SkillScatterplot';
import SkillPieChart from '../components/charts/SkillPieChart';

const DashboardPage: React.FC = () => {
  const { data } = useQuery<{ userSkills: UserSkill[] }>(GET_USERS_SKILLS);
  const userSkills = data?.userSkills || [];

  // Aggregate data for charts
  const skillProficiency = userSkills.reduce((acc, { skill, proficiencyLevel }) => {
    if (!acc[skill.name]) {
      acc[skill.name] = { [proficiencyLevel]: 1 };
    } else {
      acc[skill.name][proficiencyLevel] = (acc[skill.name][proficiencyLevel] || 0) + 1;
    }
    return acc;
  }, {} as Record<string, Record<string, number>>);

  const proficiencyData = Object.keys(skillProficiency).map(skillName => ({
    skillName,
    ...skillProficiency[skillName]
  }));

  // Pie chart data
  const pieData = Object.keys(skillProficiency).map(skillName => ({
    name: skillName,
    count: Object.values(skillProficiency[skillName]).reduce((a, b) => a + b, 0)
  }));

  return (
    <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h2>Dashboard</h2>
      <div style={{ width: '80%', display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '20px' }}>

      <div style={{ width: '100%', display: 'flex', justifyContent: 'center', }}>
          <h3>Skill Proficiency</h3>
          <SkillBarChart data={proficiencyData} />
        </div>
        
        <div style={{ width: '100%', display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
          <h3>Skill Distribution</h3>
          <SkillPieChart data={pieData} />
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
