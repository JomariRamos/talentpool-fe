import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@mui/material';
import { Skill } from '../../types';

interface SkillTableProps {
  skills: Skill[];
  onOpenModal: () => void;
}

const SkillTable: React.FC<SkillTableProps> = ({ skills, onOpenModal }) => {
  return (
    <div>
      <Button variant="contained" color="primary" onClick={onOpenModal}>
        Create Skill
      </Button>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Description</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {skills.map(skill => (
              <TableRow key={skill.id}>
                <TableCell>{skill.name}</TableCell>
                <TableCell>{skill.description}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default SkillTable;
