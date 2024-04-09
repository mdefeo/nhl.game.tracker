// /app/components/nav/NavBar.tsx
'use client'
import React from 'react';
import dynamic from 'next/dynamic';

const NavBarClientSide = dynamic(() => import('@/app/components/nav/NavBarClientSide'), {
  ssr: false,
});

const NavBar: React.FC = () => {
  return <NavBarClientSide />;
};

export default NavBar;
