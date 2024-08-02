import React from 'react';
import UserSkillTable from '../components/tables/UserSkillTable';
import UserSkillModal from '../components/modals/UserSkillModal';
import { useQuery, useMutation } from '@apollo/client';
import { GET_USERS, GET_SKILLS, GET_USERS_SKILLS } from "../queries";
import { CREATE_USER_SKILL } from "../mutations";
import { User, Skill, UserSkill } from '../types';
import { TextField, MenuItem, Select, InputLabel, FormControl } from '@mui/material';

const UserSkillsPage: React.FC = () => {
  const [openUserSkillModal, setOpenUserSkillModal] = React.useState(false);
  const [searchName, setSearchName] = React.useState('');
  const [searchSkill, setSearchSkill] = React.useState('');
  const [proficiencyFilter, setProficiencyFilter] = React.useState<string | ''>('');

  const { data: usersData } = useQuery<{ users: User[] }>(GET_USERS);
  const { data: skillsData } = useQuery<{ skills: Skill[] }>(GET_SKILLS);
  
  const { data: userSkillsData } = useQuery<{ userSkills: UserSkill[] }>(GET_USERS_SKILLS, {
    variables: {
      where: {
        proficiencyLevel: proficiencyFilter ? { eq: proficiencyFilter } : undefined,
        user: { name: { contains: searchName }, role: { eq: undefined } },
        skill: { name: { contains: searchSkill } }
      }
    }
  });

  const [createUserSkill] = useMutation(CREATE_USER_SKILL, {
    refetchQueries: [{ query: GET_USERS_SKILLS }],
  });

  const handleUserSkillSubmit = async (data: {
    userId: string;
    skillId: string;
    proficiencyLevel: "BEGINNER" | "INTERMEDIATE" | "ADVANCED" | "EXPERT";
  }) => {
    try {
      await createUserSkill({ variables: data });
      setOpenUserSkillModal(false);
    } catch (error) {
      console.error("Error creating user skill:", error);
    }
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', padding: '20px' }}>
      <div style={{ maxWidth: '1200px', width: '100%' }}>
        <div style={{ marginBottom: '20px' }}>
          <TextField
            label="Search User Name"
            variant="outlined"
            fullWidth
            value={searchName}
            onChange={(e) => setSearchName(e.target.value)}
            style={{ marginBottom: '10px' }}
          />
          <TextField
            label="Search Skill Name"
            variant="outlined"
            fullWidth
            value={searchSkill}
            onChange={(e) => setSearchSkill(e.target.value)}
            style={{ marginBottom: '10px' }}
          />
          <FormControl fullWidth variant="outlined">
            <InputLabel>Proficiency Level</InputLabel>
            <Select
              value={proficiencyFilter}
              onChange={(e) => setProficiencyFilter(e.target.value)}
              label="Proficiency Level"
              style={{ marginBottom: '10px' }}
            >
              <MenuItem value="">All Levels</MenuItem>
              <MenuItem value="BEGINNER">Beginner</MenuItem>
              <MenuItem value="INTERMEDIATE">Intermediate</MenuItem>
              <MenuItem value="ADVANCED">Advanced</MenuItem>
              <MenuItem value="EXPERT">Expert</MenuItem>
            </Select>
          </FormControl>
        </div>
        <UserSkillTable
          userSkills={userSkillsData?.userSkills || []}
          onOpenModal={() => setOpenUserSkillModal(true)}
        />
        <UserSkillModal
          open={openUserSkillModal}
          onClose={() => setOpenUserSkillModal(false)}
          users={usersData?.users || []}
          skills={skillsData?.skills || []}
          onSubmit={handleUserSkillSubmit}
        />
      </div>
    </div>
  );
};

export default UserSkillsPage;
