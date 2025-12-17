'use client';
import { useState } from 'react';
import { Cookies, SettingsModal } from '@components';
import { FamilyTree, Gallery, History, Presentation, Returns } from './utils';

const Home: React.FC = () => {
  const [isSettingsModalOpen, setIsSettingsModalOpen] = useState(false);

  const dispatchConsentEvent = () => {
    window.dispatchEvent(new Event('cookies-consent-changed'));
  };

  const handleOpenSettingsModal = () => {
    setIsSettingsModalOpen(true);
  };

  const handleCloseSettingsModal = () => {
    setIsSettingsModalOpen(false);
  };

  const handleAcceptScripts = () => {
    dispatchConsentEvent();
  };

  return (
    <>
      <Presentation />
      <History />
      <FamilyTree />
      <Gallery />
      <Returns />
      <Cookies
        onAccept={handleAcceptScripts}
        onCustomize={handleOpenSettingsModal}
      />
      <SettingsModal
        isVisible={isSettingsModalOpen}
        onClose={handleCloseSettingsModal}
      />
    </>
  );
};

Home.displayName = 'Home';

export default Home;
