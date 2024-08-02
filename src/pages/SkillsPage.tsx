import React from 'react';
import SkillTable from '../components/tables/SkillTable';
import SkillModal from '../components/modals/SkillModal';
import { useQuery } from '@apollo/client';
import {  CREATE_SKILL } from "../mutations";
import {  GET_SKILLS } from "../queries";
import { useMutation } from "@apollo/client";
import { Skill } from '../types';

const SkillsPage: React.FC = () => {
  const [openSkillModal, setOpenSkillModal] = React.useState(false);
  const { data: skillsData } = useQuery<{ skills: Skill[] }>(GET_SKILLS);

  const [createSkill] = useMutation(CREATE_SKILL, {
    refetchQueries: [{ query: GET_SKILLS }],
  });

  const handleSkillSubmit = async (data: {
    description: string;
    name: string;
  }) => {
    try {
      await createSkill({ variables: data });
      setOpenSkillModal(false);
    } catch (error) {
      console.error("Error creating skill:", error);
    }
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', padding: '20px' }}>
      <div style={{ maxWidth: '1200px', width: '100%' }}>
        <SkillTable
          skills={skillsData?.skills || []}
          onOpenModal={() => setOpenSkillModal(true)}
        />
        <SkillModal
          open={openSkillModal}
          onClose={() => setOpenSkillModal(false)}
          onSubmit={handleSkillSubmit}
        />
      </div>
    </div>
  );
};

export default SkillsPage;
