// /app/components/NavBar.tsx
'use client'
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';

const NavBarClientSide = dynamic(() => import('@/app/components/NavBarClientSide'), {
  ssr: false,
});

const NavBar: React.FC = () => {
  return <NavBarClientSide />;
};

export default NavBar;
