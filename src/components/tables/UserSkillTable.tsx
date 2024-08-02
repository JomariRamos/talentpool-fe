import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@mui/material';
import { UserSkill } from '../../types';

interface UserSkillTableProps {
  userSkills: UserSkill[];
  onOpenModal: () => void;
}

const UserSkillTable: React.FC<UserSkillTableProps> = ({ userSkills, onOpenModal }) => {
  return (
    <div>
      <Button variant="contained" color="primary" onClick={onOpenModal}>
        Create User Skill
      </Button>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>User Name</TableCell>
              <TableCell>Skill Name</TableCell>
              <TableCell>Proficiency Level</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {userSkills.map(us => (
              <TableRow key={`${us.userId}-${us.skillId}`}>
                <TableCell>{us.user.name}</TableCell>
                <TableCell>{us.skill.name}</TableCell>
                <TableCell>{us.proficiencyLevel}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default UserSkillTable;
