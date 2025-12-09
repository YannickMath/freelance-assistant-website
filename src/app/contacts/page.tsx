import type { Metadata } from "next";
import CardContainer from "../components/shared/cardContainer";
import ContactForm from "../components/contacts/contactForm";
import ContactInfo from "../components/contacts/contactInfo";
import Titre from "../components/shared/titre";

const businessName = process.env.NEXT_PUBLIC_BUSINESS_NAME || "OMI GESTION";
const ownerName = process.env.NEXT_PUBLIC_OWNER_NAME || "Cécile BOIRON";
const email = process.env.NEXT_PUBLIC_EMAIL || "omi.cb.contact@gmail.com";
const phone = process.env.NEXT_PUBLIC_PHONE || "06 21 89 91 32";
const address = process.env.NEXT_PUBLIC_ADDRESS || "69007 LYON";

export const metadata: Metadata = {
  title: "Contact",
  description: `Contactez ${ownerName}, Office Manager indépendant à Lyon. ${email} - ${phone}. Située à ${address}. Devis gratuit et personnalisé pour vos besoins en gestion administrative et commerciale.`,
  keywords: [
    "contact office manager Lyon",
    "contacter office manager",
    ownerName,
    businessName,
    "office manager Lyon 7",
    "devis office manager",
  ],
};

export default function Contacts() {
  const arrayBuilderSection = [
    { id: 1, name: "Contact Info", component: <ContactInfo /> },
    { id: 2, name: "Contact Form", component: <ContactForm /> },
  ];

  const ArrayBuilderContent = () => (
    <>
      {arrayBuilderSection.map(({ id, component }, index) => (
        <div key={id} className={`flex w-full justify-center animate-fadeInUp ${index === 1 ? 'animate-delay-100' : ''}`}>
          <CardContainer key={id} width="w-2/3 phone:w-4/5">
            {component}
          </CardContainer>
        </div>
      ))}
    </>
  );

  return (
    <div
      className="flex flex-col h-full w-full justify-center items-center p-2 py-8 gap-6
        bg-office-manager-main-bg bg-cover bg-center bg-no-repeat"
    >
      <ArrayBuilderContent />
    </div>
  );
}
