import React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from '@mui/material';
import UserForm from '../forms/UserForm';

interface UserModalProps {
  open: boolean;
  onClose: () => void;
  onSubmit: (data: { name: string; role: string }) => void;
}

const UserModal: React.FC<UserModalProps> = ({ open, onClose, onSubmit }) => {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Create User</DialogTitle>
      <DialogContent>
        <UserForm onSubmit={onSubmit} />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Cancel
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default UserModal;
