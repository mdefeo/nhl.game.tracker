// /pages/schedule.tsx
import React from 'react';
import Headline from '@/app/components/Headline';
import Schedule from '@/app/components/Schedule';
interface Props {
  // Define props interface here
}

const SchedulePage: React.FC<Props> = ({ /* destructure props here */ }) => {
  // Component logic here
  
  return (
    <div>
      <Headline title="Upcoming Games" />
      <Schedule />
    </div>
  );
};

export default SchedulePage;
