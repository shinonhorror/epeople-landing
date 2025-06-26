'use client';

import React from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import './FullpageProvider.css';
import { useFullpageAnimations } from '@/hooks/useFullpageAnimations';

interface FullpageProviderProps {
  children: React.ReactNode;
}

const FullpageProvider: React.FC<FullpageProviderProps> = ({ children }) => {
  const sections = ['staff-comp', 'wage-hour', 'hr-staff', 'schedule-demo-section'];
  const { onLeave, afterLoad, afterRender, fullpageApiRef } = useFullpageAnimations(sections);

  return (
    <ReactFullpage
      licenseKey="GPL v3"
      scrollingSpeed={700}
      navigation={true}
      navigationPosition="right"
      showActiveTooltip={true}
      lazyLoading={true}
      anchors={sections}
      onLeave={onLeave}
      afterLoad={afterLoad}
      afterRender={afterRender}
      credits={{ enabled: false }}
      normalScrollElements=".footer"
      scrollOverflow={true}
      scrollOverflowReset={true}
      fitToSection={false}
      autoScrolling={true}
      css3={true}
      paddingTop="93px"
      render={({ fullpageApi }) => {
        fullpageApiRef.current = fullpageApi;
        return <ReactFullpage.Wrapper>{children}</ReactFullpage.Wrapper>;
      }}
    />
  );
};

export default FullpageProvider;