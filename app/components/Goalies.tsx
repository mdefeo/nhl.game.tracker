import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Goalie } from '@/interfaces/Goalies';
import Skeleton from './Skeleton'; // Assuming you have a Skeleton component

interface Props {
  goalies: Goalie[];
}

const Goalies: React.FC<Props> = ({ goalies }) => {
  // Sort goalies by some criteria, e.g., gamesPlayed
  const sortedGoalies = goalies.sort((a, b) => b.gamesPlayed - a.gamesPlayed);

  return (
    <>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>Goalie</th>
              <th>GP</th>
              <th>W</th>
              <th>L</th>
              <th>OT</th>
              <th>SA</th>
              <th>GA</th>
              <th>SV</th>
              <th>SV%</th>
              <th>GAA</th>
              <th>SO</th>
            </tr>
          </thead>
          <tbody>
            {sortedGoalies.map((goalie) => (
              <tr key={goalie.playerId}>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="w-12 h-12 mask mask-squircle">
                        <Link href={`/player/${goalie.playerId}`}>
                          <Image 
                            src={goalie.headshot} 
                            alt={`${goalie.firstName.default} ${goalie.lastName.default}`} 
                            width={48} 
                            height={48}
                            style={{ objectFit: 'cover' }}
                            unoptimized={true}
                            className="rounded-full"
                          />
                        </Link>
                      </div>
                    </div>
                    <div>
                      <Link href={`/player/${goalie.playerId}`}>
                        {`${goalie.firstName.default} ${goalie.lastName.default}`}
                      </Link>
                    </div>
                  </div>
                </td>
                <td>{goalie.gamesPlayed}</td>
                <td>{goalie.wins}</td>
                <td>{goalie.losses}</td>
                <td>{goalie.overtimeLosses}</td>
                <td>{goalie.shotsAgainst}</td>
                <td>{goalie.goalsAgainst}</td>
                <td>{goalie.saves}</td>
                <td>{goalie.savePercentage.toFixed(3)}</td>
                <td>{goalie.goalsAgainstAverage.toFixed(2)}</td>
                <td>{goalie.shutouts}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Goalies;
