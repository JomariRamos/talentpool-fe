import React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from '@mui/material';
import UserSkillForm from '../forms/UserSkillForm';

interface UserSkillModalProps {
  open: boolean;
  onClose: () => void;
  onSubmit: (data: { userId: string; skillId: string; proficiencyLevel: 'BEGINNER' | 'INTERMEDIATE' | 'ADVANCED' | 'EXPERT' }) => void;
  users: { id: string; name: string }[];
  skills: { id: string; name: string }[];
}

const UserSkillModal: React.FC<UserSkillModalProps> = ({ open, onClose, onSubmit, users, skills }) => {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Assign Skill to User</DialogTitle>
      <DialogContent>
        <UserSkillForm users={users} skills={skills} onSubmit={onSubmit} />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Cancel
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default UserSkillModal;
