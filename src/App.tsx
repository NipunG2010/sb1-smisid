import React from 'react';
import { Header } from './components/Header';
import { UrgencyBanner } from './components/UrgencyBanner';
import { Hero } from './components/Hero';
import { ProblemSection } from './components/problems/ProblemSection';
import { ProposalSection } from './components/proposal/ProposalSection';
import { ValueProposition } from './components/proposal/ValueProposition';
import { Services } from './components/services/Services';
import { Journey } from './components/journey/Journey';
import { Features } from './components/Features';
import { Testimonials } from './components/Testimonials';
import { ContactSection } from './components/contact/ContactSection';
import { CTASection } from './components/CTASection';
import { Footer } from './components/footer/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <UrgencyBanner />
      <Hero />
      <ProblemSection />
      <ProposalSection />
      <ValueProposition />
      <Services />
      <Journey />
      <Features />
      <Testimonials />
      <ContactSection />
      <CTASection />
      <Footer />
    </div>
  );
}

export default App;