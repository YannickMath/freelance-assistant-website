import React from "react";
import type { Metadata } from "next";

import Titre from "../components/shared/titre";
import Button from "../components/shared/button";
import CardContainer from "../components/shared/cardContainer";
import { getServices, getIntroductionItems, IntroductionItems, ServiceSection } from "../data/servicesData";

const businessName = process.env.NEXT_PUBLIC_BUSINESS_NAME || "OMI GESTION";

export const metadata: Metadata = {
  title: "Services",
  description: `Découvrez nos services d'Office Manager : gestion administrative, gestion commerciale, gestion du personnel et pré-comptabilité. ${businessName} vous accompagne dans la gestion quotidienne de votre entreprise à Lyon.`,
  keywords: [
    "services office manager",
    "gestion administrative Lyon",
    "gestion commerciale",
    "gestion du personnel",
    "pré-comptabilité",
    "secrétariat professionnel",
    "assistante administrative",
  ],
};

const Services = () => {
  const services = getServices();
  const introductionItems = getIntroductionItems();

  return (
    <div
      className="h-full w-full
    bg-office-manager-main-bg bg-cover bg-center bg-no-repeat
    phone:bg-contain phone:bg-bottom phone:bg-gray-200
    "
    >
      <div className="flex flex-col items-center gap-12 phone:gap-4 p-2 phone:p-6 py-6 phone:py-0">
        <CardContainer
          width="flex flex-col w-1/2 phone:w-full animate-fadeInUp"
          bgColor="bg-gray-200 bg-opacity-70 shadow-lg"
          className="text-xl phone:text-base font-bolder mt-4 phone:mt-0"
        >
          <IntroductionItems items={introductionItems} />
        </CardContainer>
        <div className="flex w-full justify-center animate-fadeInUp animate-delay-100">
          <Button size="normal" label="Contactez-moi" url="/contacts" />
        </div>
        <div className="grid grid-cols-2 phone:flex phone:flex-col w-3/4 phone:w-4/5 gap-6 phone:gap-6 phone:py-4">
          {services.map((service, index) => (
            <div key={service.id} className={`animate-fadeInUp animate-delay-${Math.min((index + 2) * 100, 300)} flex`}>
              <CardContainer width="w-full h-full">
                <ServiceSection {...service} />
              </CardContainer>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
