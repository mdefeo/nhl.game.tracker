// /app/components/NavBar.tsx
import React from 'react';
import Link from 'next/link';

interface Props {
  // Define props interface here
}

const NavBar: React.FC<Props> = ({ /* destructure props here */ }) => {
  return (
    <div className="navbar">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            <li><Link href="/players">Players</Link></li>
            <li><Link href="/scores">Scores</Link></li>
            <li><Link href="/standings">Standings</Link></li>
            <li><Link href="/stats">Stats</Link></li>
            <li><Link href="/teams">Teams</Link></li>
          </ul>
        </div>
        <h2 className="text-2xl font-bold">NHL Tracker</h2>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li><Link href="/players">Players</Link></li>
          <li><Link href="/scores">Scores</Link></li>
          <li><Link href="/standings">Standings</Link></li>
          <li><Link href="/stats">Stats</Link></li>
          <li><Link href="/teams">Teams</Link></li>
        </ul>
      </div>
      <div className="navbar-end">
        <div className="form-control">
          <input id="search-bar" type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
