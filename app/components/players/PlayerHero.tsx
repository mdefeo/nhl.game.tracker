// /app/components/players/PlayerHero.tsx
import Image from "next/image";
import Link from "next/link";
import Skeleton from "@/app/components/utilities/Skeleton";
import { Player } from "@/interfaces/Player";

const PlayerHero: React.FC<{ playerData: Player }> = ({ playerData }) => {
  if (!playerData) {
    return <Skeleton />;
  }
  
  return (
    <div className="hero bg-base-200 relative mb-10">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${playerData.heroImage})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          opacity: '5%',
        }}
      >
      </div>
      <div className="hero-content flex-col lg:flex-row relative">
        <div className="relative">
          <Image
            src={playerData.headshot}
            alt={`${playerData.firstName} ${playerData.lastName}`}
            width={336} 
            height={336}
            unoptimized={true}
            className="rounded-full shadow-xl"
            priority
            fetchPriority="high"
          />
          <div className="absolute bottom-0 right-5 h-50 w-50">
            <Link href={`/team/${playerData.currentTeamAbbrev}`} > 
              <Image
                src={playerData.teamLogo}
                alt={`${playerData.currentTeamAbbrev}`}
                width={112.5} 
                height={75}
                unoptimized={true}
                priority
                fetchPriority="low"
              />
            </Link>
          </div>
        </div>
        <table>
          <tbody>
            <tr>
              <td>
                <h2 className="text-5xl font-bold">{`${playerData.firstName.default} ${playerData.lastName.default}`}</h2>
              </td>
              <td></td>
            </tr>
            <tr>
              <td>
                Team
              </td>
              <td>
                <Link href={`/team/${playerData.currentTeamAbbrev}`} > 
                  {playerData.fullTeamName?.default}
                </Link> (#{playerData.sweaterNumber}, {playerData.position})
              </td>
            </tr>
            <tr>
              <td>Height</td>
              <td>{playerData.heightInInches}&quot; ({playerData.heightInCentimeters} cm)</td>
            </tr>
            <tr>
              <td>Weight</td>
              <td>{playerData.weightInPounds} lbs ({playerData.weightInKilograms} kg)</td>
            </tr>
            <tr>
              <td>
                Birthdate
              </td>
              <td>
                {playerData.birthDate}, {playerData.birthCity?.default ?? ''}, {playerData.birthStateProvince?.default ?? ''}, {playerData.birthCountry}
              </td>
            </tr>
            <tr>
              <td>
                Shoots
              </td>
              <td>
                {playerData.shootsCatches}
              </td>
            </tr>
            <tr>
              <td>
                Drafted
              </td>
              <td>
                {playerData.draftDetails ? 
                  `${playerData.draftDetails.year} Round ${playerData.draftDetails.round} Pick ${playerData.draftDetails.pickInRound} (Overall ${playerData.draftDetails.overallPick})` 
                  : 'Draft details not available'}
              </td>
            </tr>
          </tbody>
        </table>

      </div>
    </div>
  );
};

export default PlayerHero;
