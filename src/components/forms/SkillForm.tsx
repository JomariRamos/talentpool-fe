import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { TextField, Button } from '@mui/material';

interface SkillFormProps {
  onSubmit: (data: { description: string; name: string }) => void;
}

const SkillForm: React.FC<SkillFormProps> = ({ onSubmit }) => {
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
        name="description"
        control={control}
        defaultValue=""
        render={({ field }) => <TextField {...field} label="Description" fullWidth margin="normal" />}
      />
      <Button type="submit" variant="contained" color="primary">
        Create Skill
      </Button>
    </form>
  );
};

export default SkillForm;
