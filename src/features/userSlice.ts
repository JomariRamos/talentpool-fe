import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Define the initial state and types
interface User {
  id: string;
  name: string;
  role: string;
  skills: { name: string; proficiency: number }[];
}

interface UserState {
  users: User[];
  currentUser?: User;
}

const initialState: UserState = {
  users: [],
  currentUser: undefined,
};

// Create the slice
const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUsers(state, action: PayloadAction<User[]>) {
      state.users = action.payload;
    },
    addUser(state, action: PayloadAction<User>) {
      state.users.push(action.payload);
    },
    updateUser(state, action: PayloadAction<User>) {
      const index = state.users.findIndex(user => user.id === action.payload.id);
      if (index !== -1) {
        state.users[index] = action.payload;
      }
    },
    setCurrentUser(state, action: PayloadAction<User | undefined>) {
      state.currentUser = action.payload;
    },
  },
});

export const { setUsers, addUser, updateUser, setCurrentUser } = userSlice.actions;
export default userSlice.reducer;
