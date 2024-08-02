export interface User {
    id: string;
    name: string;
    role: 'Admin' | 'Manager' | 'Developer';
  }
  
  export interface Skill {
    id: string;
    name: string;
    description: string;
  }
  
  export interface UserSkill {
    userId: string;
    skillId: string;
    user: User;
    skill: Skill;
    proficiencyLevel: number;
  }
  