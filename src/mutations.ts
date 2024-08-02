import { gql } from '@apollo/client';

export const CREATE_USER = gql`
  mutation CreateUser($name: String!, $role: UserRole!) {
    createUser(input: { name: $name, role: $role }) {
      id
      name
      role
    }
  }
`;


export const CREATE_SKILL = gql`
  mutation CreateSkill($description: String!, $name: String!) {
    createSkill(input: { description: $description, name: $name }) {
        description
        name
        id
    }
  }
`;

export const CREATE_USER_SKILL = gql`
  mutation CreateUserSkill($proficiencyLevel: ProficiencyLevel!, $skillId: Int!, $userId: Int!) {
    createUserSkill(input: { proficiencyLevel: $proficiencyLevel, skillId: $skillId, userId: $userId}) {
      proficiencyLevel
      skillId
      userId
    }
  }
`;