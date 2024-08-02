import { gql } from "@apollo/client";

export const GET_USERS = gql`
  query GetUsers($where: UserFilterInput) {
    users(where: $where) {
      id
      name
      role
    }
  }
`;

export const GET_SKILLS = gql`
  query GetSkills {
    skills {
      description
      id
      name
    }
  }
`;

export const GET_USERS_SKILLS = gql`
  query GetUsersWithSkills($where: UserSkillFilterInput) {
    userSkills(where: $where) {
      user {
        name
        role
        id
      }
      skill {
        description
        id
        name
      }
      skillId
      userId
      proficiencyLevel
    }
  }
`;
