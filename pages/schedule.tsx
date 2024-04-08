// /pages/schedule.tsx
import React from 'react';
import Headline from '@/app/components/Headline';
import Schedule from '@/app/components/Schedule';
interface Props {
}

const SchedulePage: React.FC<Props> = ({ }) => {
  
  return (
    <div>
      <Headline title="Upcoming Games" />
      <Schedule />
    </div>
  );
};

export default SchedulePage;
