// /app/components/teams/TeamHero.tsx
import Skeleton from "@/app/components/utilities/Skeleton";
import Team from "@/interfaces/Team";

const TeamHero: React.FC<{ teamAbbreviation: Team }> = ({ teamAbbreviation }) => {
  if (!teamAbbreviation) {
    return <Skeleton />
  }
  
  return (
    <div className="hero bg-base-200">
    </div>
  );
};

export default TeamHero;
