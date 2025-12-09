import type { Metadata } from "next";
import Banner from "./components/welcome/banner";
import Cv from "./components/welcome/cv";
import Pourquoi from "./components/welcome/pourquoi";
import Prestations from "./components/welcome/prestations";
import Image from "next/image";

const businessName = process.env.NEXT_PUBLIC_BUSINESS_NAME || "OMI GESTION";
const ownerName = process.env.NEXT_PUBLIC_OWNER_NAME || "Cécile BOIRON";

export const metadata: Metadata = {
  title: `Accueil - ${businessName}`,
  description: `${ownerName}, Office Manager indépendant à Lyon. Gestion administrative, commerciale, du personnel et pré-comptabilité. Solutions professionnelles sur mesure pour votre entreprise.`,
  keywords: [
    "office manager Lyon",
    "assistante administrative Lyon",
    "gestion administrative",
    "office manager indépendant",
    ownerName,
    "secrétariat entreprise",
  ],
};

export default function Home() {
  return (
    <div className="relative flex flex-col w-full h-full justify-center items-center phone:bg-contain phone:bg-bottom phone:bg-gray-100">
      <Image
        src="/office_manager_main.png"
        fill
        style={{ objectFit: "cover" }}
        alt="Office background"
        priority
        className="z-[-1]"
      />
      <div className="w-full phone:mt-2 animate-fadeInUp">
        <Banner />
      </div>
      <div className="flex w-full justify-center py-10 phone:py-6 animate-fadeInUp animate-delay-100">
        <Pourquoi />
      </div>
      <div className="flex w-full justify-center py-10 phone:py-6 animate-fadeInUp animate-delay-200">
        <Cv />
      </div>
      <div className="flex w-full justify-center py-10 phone:py-6 animate-fadeInUp animate-delay-300">
        <Prestations />
      </div>
    </div>
  );
}
