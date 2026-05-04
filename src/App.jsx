// Главный компонент лендинга: собирает секции страницы и управляет модальным окном заявки.
import { useState } from 'react';
import HeaderNav from './components/HeaderNav';
import DemoRequestModal from './components/DemoRequestModal';
import HeroSection from './sections/HeroSection';
import ExamplesSection from './sections/ExamplesSection';
import BenefitsSection from './sections/BenefitsSection';
import ProfitSection from './sections/ProfitSection';
import WorkflowSection from './sections/WorkflowSection';
import VideoSection from './sections/VideoSection';
import PricingSection from './sections/PricingSection';
import FaqSection from './sections/FaqSection';
import CtaSection from './sections/CtaSection';
import { Page } from './App.styles';

function App() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  const openDemoModal = () => {
    setIsDemoModalOpen(true);
  };

  const closeDemoModal = () => {
    setIsDemoModalOpen(false);
  };

  return (
    <Page>
      <HeaderNav onDemoClick={openDemoModal} />
      <HeroSection onDemoClick={openDemoModal} />
      <ExamplesSection />
      <BenefitsSection />
      <ProfitSection />
      <WorkflowSection />
      <VideoSection />
      <PricingSection onDemoClick={openDemoModal} />
      <FaqSection />
      <CtaSection onDemoClick={openDemoModal} />

      <DemoRequestModal open={isDemoModalOpen} onClose={closeDemoModal} />
    </Page>
  );
}

export default App;
