import Image from "next/image";
import Sekeleton from "./Skeleton";
import Team from "@/interfaces/Team";

const TeamHero: React.FC<{ teamAbbreviation: Team }> = ({ teamAbbreviation }) => {
  if (!teamAbbreviation) {
    return <Sekeleton />
  }
  
  return (
    <div className="hero bg-base-200">
    </div>
  );
};

export default TeamHero;
