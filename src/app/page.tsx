"use client";

import WeFixSection from "@/app/components/wefix";
import HeroSection from "@/app/components/hero";
import ExpressFixSection from "@/app/components/expressfix";
import CustomerBenefitsSection from "@/app/components/customer-benefits";
import CustomerProblemsSection from "@/app/components/customer-problems";
import InsuranceSection from "@/app/components/insurance";
import DurableSolutionsSection from "@/app/components/durable-solutions";
import FAQSection from "@/app/components/faq";
import NavTabsSection from "./components/nav-tabs";
import PackagesSection from "@/app/components/packages";
import EcofriendlyFixSection from "./components/ecofriendly-fix";
import ReminderSection from "./components/reminder";
import useMediaQuery from "./hooks/useMediaQuery";
import TipsSection from "./components/tips";
import LegalNoticeSection from "./components/legal-notice";

export default function Home() {
    
    const isMobile = useMediaQuery('(max-width: 959px)');

  return (
    <main>
      <HeroSection />
      <NavTabsSection/>
      <WeFixSection />
      <ExpressFixSection />
      <CustomerBenefitsSection />
      <PackagesSection />
      <CustomerProblemsSection/>
      <InsuranceSection/>
      <EcofriendlyFixSection/>
      <DurableSolutionsSection/>
      <FAQSection/>
      {isMobile&&<ReminderSection/>}
      <TipsSection/>
      <LegalNoticeSection/>
    </main>
  );
}
