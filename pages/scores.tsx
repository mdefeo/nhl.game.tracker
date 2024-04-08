// /pages/scores.tsx
import Scores from '@/app/components/Scores';
import Headline from '@/app/components/Headline';

const ScoresPage = () => {
  return (
    <div>
      <Headline title="Recent Scores" />
      <Scores />
    </div>
  );
};

export default ScoresPage;
