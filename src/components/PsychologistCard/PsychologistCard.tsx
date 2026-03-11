import React from 'react';
import { Psychologist } from '../../types/psychologist';

type Props = {
  psychologist: Psychologist;
};

export default function PsychologistCard({ psychologist }: Props) {
  return (
    <article className="psychologist-card">
      <img src={psychologist.avatar_url} alt={psychologist.name} />
      <h3>{psychologist.name}</h3>
      <p>{psychologist.specialization}</p>
    </article>
  );
}
