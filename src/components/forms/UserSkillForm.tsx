import React from 'react';
import { TextField, Button, Grid, Typography, MenuItem, Select, FormControl, InputLabel } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';

interface UserSkillFormData {
  userId: string;
  skillId: string;
  proficiencyLevel: 'BEGINNER' | 'INTERMEDIATE' | 'ADVANCED' | 'EXPERT';
}

interface UserSkillFormProps {
  users: { id: string; name: string }[];
  skills: { id: string; name: string }[];
  onSubmit: (data: UserSkillFormData) => void;
}

const UserSkillForm: React.FC<UserSkillFormProps> = ({ users, skills, onSubmit }) => {
  const { control, handleSubmit } = useForm<UserSkillFormData>();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Typography variant="h6" gutterBottom>
        Assign Skill to User
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Controller
            name="userId"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <FormControl fullWidth>
                <InputLabel>User</InputLabel>
                <Select {...field} label="User">
                  {users.map((user) => (
                    <MenuItem key={user.id} value={user.id}>
                      {user.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            )}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Controller
            name="skillId"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <FormControl fullWidth>
                <InputLabel>Skill</InputLabel>
                <Select {...field} label="Skill">
                  {skills.map((skill) => (
                    <MenuItem key={skill.id} value={skill.id}>
                      {skill.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            )}
          />
        </Grid>
        <Grid item xs={12}>
          <Controller
            name="proficiencyLevel"
            control={control}
            defaultValue="BEGINNER"
            render={({ field }) => (
              <FormControl fullWidth>
                <InputLabel>Proficiency Level</InputLabel>
                <Select {...field} label="Proficiency Level">
                  <MenuItem value="BEGINNER">Beginner</MenuItem>
                  <MenuItem value="INTERMEDIATE">Intermediate</MenuItem>
                  <MenuItem value="ADVANCED">Advanced</MenuItem>
                  <MenuItem value="EXPERT">Expert</MenuItem>
                </Select>
              </FormControl>
            )}
          />
        </Grid>
        <Grid item xs={12}>
          <Button type="submit" variant="contained" color="primary">
            Submit
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default UserSkillForm;
