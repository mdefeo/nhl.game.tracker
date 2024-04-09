// /pages/players.tsx
import Headline from '@/app/components/Headline';
import Layout from '@/app/layout'; 

const PlayersPage = () => {
  return (
    <div>
      <Headline title="Players" />
    </div>
  );
};

PlayersPage.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout>{page}</Layout>;
};

export default PlayersPage;
