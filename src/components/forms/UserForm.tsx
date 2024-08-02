import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { TextField, Button, MenuItem, Select, InputLabel, FormControl } from '@mui/material';

interface UserFormProps {
  onSubmit: (data: { name: string; role: string }) => void;
}

const UserForm: React.FC<UserFormProps> = ({ onSubmit }) => {
  const { handleSubmit, control } = useForm();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="name"
        control={control}
        defaultValue=""
        render={({ field }) => <TextField {...field} label="Name" fullWidth margin="normal" />}
      />
      <Controller
        name="role"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <FormControl fullWidth margin="normal">
            <InputLabel>Role</InputLabel>
            <Select {...field} label="Role">
              <MenuItem value="ADMIN">Admin</MenuItem>
              <MenuItem value="MANAGER">Manager</MenuItem>
              <MenuItem value="DEVELOPER">Developer</MenuItem>
            </Select>
          </FormControl>
        )}
      />
      <Button type="submit" variant="contained" color="primary">
        Create User
      </Button>
    </form>
  );
};

export default UserForm;
