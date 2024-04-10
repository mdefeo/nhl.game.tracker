// /app/components/utilities/Headline.tsx
import React from 'react';

const Headline: React.FC<{ title: string }> = ({ title }) => {
  return (
    <h2 className="text-2xl font-bold mb-4 mt-10">{title}</h2>
  );
};

export default Headline;
