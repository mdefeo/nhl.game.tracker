import Image from "next/image";
import Link from "next/link";
import Skeleton from "./Skeleton";
import { Goalie } from "@/interfaces/Goalie";

const GoalieHero: React.FC<{ goalieData: Goalie }> = ({ goalieData }) => {
  console.log('---goalieData: ', goalieData);
  if (!goalieData) {
    return <Skeleton />;
  }
  
  return (
    <div className="hero bg-base-200 relative">
      <div className="hero-content flex-col lg:flex-row relative">
        <div className="relative">
          <Image src={goalieData.headshot} alt={`${goalieData.firstName} ${goalieData.lastName}`} width={200} height={300} className="rounded-full shadow-xl" />
          <div className="absolute bottom-0 right-5">
            <Link href={`/team/${goalieData.currentTeamAbbrev}`} > 
              <Image src={goalieData.teamLogo} alt="Team Logo" width={50} height={50} />
            </Link>
          </div>
        </div>
        <table>
          <tbody>
            <tr>
              <td>
                <h2 className="text-5xl font-bold">{`${goalieData.firstName.default} ${goalieData.lastName.default}`}</h2>
              </td>
              <td></td>
            </tr>
            <tr>
              <td>
                Team
              </td>
              <td>
                <Link href={`/team/${goalieData.currentTeamAbbrev}`} > 
                  {goalieData.fullTeamName?.default}
                </Link> (#{goalieData.sweaterNumber}, {goalieData.position})
              </td>
            </tr>
            <tr>
              <td>Height</td>
              <td>{goalieData.heightInInches}&quot; ({goalieData.heightInCentimeters} cm)</td>
            </tr>
            <tr>
              <td>Weight</td>
              <td>{goalieData.weightInPounds} lbs ({goalieData.weightInKilograms} kg)</td>
            </tr>
            <tr>
              <td>
                Birthdate
              </td>
              <td>
                {goalieData.birthDate}, {goalieData.birthCity?.default ?? ''}, {goalieData.birthStateProvince?.default ?? ''}, {goalieData.birthCountry}
              </td>
            </tr>
            <tr>
              <td>
                Shoots
              </td>
              <td>
                {goalieData.shootsCatches}
              </td>
            </tr>
            <tr>
              <td>
                Drafted
              </td>
              <td>
                {goalieData.draftDetails ? 
                  `${goalieData.draftDetails.year} Round ${goalieData.draftDetails.round} Pick ${goalieData.draftDetails.pickInRound} (Overall ${goalieData.draftDetails.overallPick})` 
                  : 'Draft details not available'}
              </td>
            </tr>
          </tbody>
        </table>

      </div>
    </div>
  );
};

export default GoalieHero;