import Image from "next/image";
import { Player } from "@/interfaces/Player";

const PlayerHero: React.FC<{ playerData: Player }> = ({ playerData }) => {
  if (!playerData) {
    return null; // or render a loading state or placeholder
  }

  console.log('---playerData', playerData);
  
  return (
    <div className="hero bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <Image src={playerData.headshot} alt={`${playerData.firstName} ${playerData.lastName}`} width={200} height={300} />
        <div>
          <h1 className="text-5xl font-bold">{`${playerData.firstName.default} ${playerData.lastName.default}`}</h1>
          <p className="py-6">
            Team: 
            {playerData.fullTeamName?.default} (# {playerData.sweaterNumber}, {playerData.position})
            <br />
            Height: {playerData.heightInInches}&quot; ({playerData.heightInCentimeters} cm), Weight: {playerData.weightInPounds} lbs ({playerData.weightInKilograms} kg)
            <br />
            Birthdate: {playerData.birthDate}, {playerData.birthCity?.default}, {playerData.birthStateProvince?.default}, {playerData.birthCountry?.default}
            <br />
            Shoots/Catches: {playerData.shootsCatches}, {playerData.draftDetails && `Drafted: ${playerData.draftDetails.year} Round ${playerData.draftDetails.round} Pick ${playerData.draftDetails.pickInRound} (Overall ${playerData.draftDetails.overallPick})`}
          </p>
          <Image src={playerData.teamLogo} alt="Team Logo" width={50} height={50} />
        </div>

      </div>
    </div>
  );
};

export default PlayerHero;
