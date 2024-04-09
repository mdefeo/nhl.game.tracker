// /app/components/nav/NavBarClientSide.tsx
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { useDebounce } from 'use-debounce'; // You may need to install use-debounce
import { useAppDispatch, useAppSelector } from '@/app/hooks';
import { fetchSearchResults } from '@/features/search/searchSlice';

const NavBarClientSide: React.FC = () => {
  const [activePage, setActivePage] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [debouncedSearchQuery] = useDebounce(searchQuery, 500);
  const router = useRouter();
  const dispatch = useAppDispatch();
  const searchResults = useAppSelector((state) => state.search.results);

  useEffect(() => {
    if (router) {
      setActivePage(router.pathname);
    }
  }, [router]);

  useEffect(() => {
    if (debouncedSearchQuery) {
      dispatch(fetchSearchResults(debouncedSearchQuery));
    }
  }, [debouncedSearchQuery, dispatch]);

  const isActive = (pathname: string) => {
    return activePage === pathname ? 'active' : '';
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="navbar">
      {/* Rest of the navbar */}
      <div className="navbar-end">
        <div className="form-control">
          <input
            id="search-bar"
            type="text"
            placeholder="Search"
            className="input input-bordered w-24 md:w-auto"
            value={searchQuery}
            onChange={handleSearchChange}
          />
          {searchResults.map((result, index) => (
            <li key={index}>
              {result.type === 'player' ? (
                // This is a player or a skater
                <Link href={`/player/${result.id}`}>
                  <a className="flex items-center">
                    <Image src={result.headshot} alt={result.name} width={50} height={50} />
                    <span className="ml-2">{result.name}</span>
                  </a>
                </Link>
              ) : result.type === 'goalie' ? (
                // This is a goalie
                <Link href={`/goalie/${result.id}`}>
                  <a className="flex items-center">
                    <Image src={result.headshot} alt={result.name} width={50} height={50} />
                    <span className="ml-2">{result.name}</span>
                  </a>
                </Link>
              ) : (
                // This must be a team
                <Link href={`/team/${result.id}`}>
                  <a className="flex items-center">
                    <Image src={result.logoUrl} alt={result.name} width={50} height={50} />
                    <span className="ml-2">{result.name}</span>
                  </a>
                </Link>
              )}
            </li>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NavBarClientSide;
