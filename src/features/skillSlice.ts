import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Define the initial state and types
interface Skill {
  id: string;
  name: string;
  description: string;
}

interface SkillState {
  skills: Skill[];
}

const initialState: SkillState = {
  skills: [],
};

// Create the slice
const skillSlice = createSlice({
  name: 'skill',
  initialState,
  reducers: {
    setSkills(state, action: PayloadAction<Skill[]>) {
      state.skills = action.payload;
    },
    addSkill(state, action: PayloadAction<Skill>) {
      state.skills.push(action.payload);
    },
    updateSkill(state, action: PayloadAction<Skill>) {
      const index = state.skills.findIndex(skill => skill.id === action.payload.id);
      if (index !== -1) {
        state.skills[index] = action.payload;
      }
    },
  },
});

export const { setSkills, addSkill, updateSkill } = skillSlice.actions;
export default skillSlice.reducer;
