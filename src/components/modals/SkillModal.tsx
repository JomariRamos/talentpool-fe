import React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from '@mui/material';
import SkillForm from '../forms/SkillForm';

interface SkillModalProps {
  open: boolean;
  onClose: () => void;
  onSubmit: (data: { description: string; name: string }) => void;
}

const SkillModal: React.FC<SkillModalProps> = ({ open, onClose, onSubmit }) => {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Create Skill</DialogTitle>
      <DialogContent>
        <SkillForm onSubmit={onSubmit} />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Cancel
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default SkillModal;
