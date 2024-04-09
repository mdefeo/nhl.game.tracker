import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useDebounce } from 'use-debounce';
import { useAppDispatch, useAppSelector } from '@/app/hooks';
import { fetchSearchResults } from '@/features/search/searchSlice';

const NavBarClientSide: React.FC = () => {
  const [activePage, setActivePage] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [debouncedSearchQuery] = useDebounce(searchQuery, 500);
  const router = useRouter();
  const dispatch = useAppDispatch();
  const searchResults = useAppSelector((state) => state.search.results);
  const searchRef = useRef<HTMLUListElement>(null); // Ref for the search results container
  const [searchResultsVisible, setSearchResultsVisible] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setSearchResultsVisible(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [searchRef]);

  useEffect(() => {
    if (debouncedSearchQuery) {
      dispatch(fetchSearchResults(debouncedSearchQuery));
      setSearchResultsVisible(true);
    } else {
      setSearchResultsVisible(false);
    }
  }, [debouncedSearchQuery, dispatch]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const isActive = (pathname: string) => {
    return activePage === pathname ? 'active' : '';
  };

  return (
    <div className="navbar">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            <li className={isActive('/players')}><Link href="/players">Players</Link></li>
            <li className={isActive('/schedule')}><Link href="/schedule">Schedule</Link></li>
            <li className={isActive('/scores')}><Link href="/scores">Scores</Link></li>
            <li className={isActive('/standings')}><Link href="/standings">Standings</Link></li>
          </ul>
        </div>
        <h2 className="text-2xl font-bold">NHL Tracker</h2>
      </div>
      <div className="navbar-end relative">
        <div className="form-control">
          <input
            id="search-bar"
            type="text"
            placeholder="Search"
            className="input input-bordered w-24 md:w-auto"
            value={searchQuery}
            onChange={handleSearchChange}
          />
          {searchResultsVisible && (
            <ul ref={searchRef} className="menu shadow bg-white rounded-box w-52 absolute top-full mt-2 z-10">
              {searchResults.map((result, index) => (
                <li key={index} className="hover:bg-gray-100" onClick={() => setSearchResultsVisible(false)}>
                  <Link href={result.position === 'skater' ? `/player/${result.id}` : `/goalie/${result.id}`}>
                    <div className="flex items-center cursor-pointer">
                      <span className="ml-2">{result.name}</span>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBarClientSide;
