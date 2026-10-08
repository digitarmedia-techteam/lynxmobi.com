"use client";

import React from "react";
import { HeroSection } from "@/components/HeroSection";
import { AdvertisersSection } from "@/components/AdvertisersSection";
import { PublishersSection } from "@/components/PublishersSection";
import { ServiceGrid } from "@/components/ServiceGrid";
import { PartnerIntegrations } from "@/components/PartnerIntegrations";
import { ContactCTA } from "@/components/ContactCTA";
import { PageTransition } from "@/components/PageTransition";

export default function HomePage() {
  return (
    <PageTransition>
      {/* 1. HERO SECTION */}
      <HeroSection />

      {/* 2. FOR ADVERTISERS SECTION */}
      <AdvertisersSection />

      {/* 3. FOR PUBLISHERS SECTION */}
      <PublishersSection />

      {/* 4. INTEGRATIONS WITH PARTNERS */}
      <PartnerIntegrations />

      {/* 5. CORE SERVICES GRID */}
      <ServiceGrid />

      {/* 6. CONTACT CTA */}
      <ContactCTA />
    </PageTransition>
  );
}
