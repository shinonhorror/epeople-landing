'use client';

import React from 'react';
import FullpageProvider from './FullpageProvider';

interface ClientFullpageProviderProps {
  children: React.ReactNode;
}

const ClientFullpageProvider: React.FC<ClientFullpageProviderProps> = ({ children }) => {
  return <FullpageProvider>{children}</FullpageProvider>;
};

export default ClientFullpageProvider; 