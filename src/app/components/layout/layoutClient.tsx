"use client";

import React, { useState } from "react";
import Footer from "../footer/footer";
import HeaderMenu from "../headerMenu/headerMenu";
import Conditions from "../../conditions/page";
import StickyContact from "../shared/stickyContact";

export default function LayoutClient({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isCgpsOpen, setIsCgpsOpen] = useState(false);

  const handleToggleCgps = () => {
    setIsCgpsOpen(!isCgpsOpen);
  };

  return (
    <>
      {/* blur effect */}
      <div
        className={`relative flex flex-col justify-between h-full w-full ${
          isCgpsOpen ? "blur-sm" : ""
        }`}
      >
        <div className="phone:h-32 h-24 w-full top-0 z-10 fixed flex items-center header">
          <HeaderMenu />
        </div>
        <main className="flex-grow phone:mt-32 mt-24">{children}</main>
        <Footer isCgpsOpen={isCgpsOpen} onToggleCgps={handleToggleCgps} />
      </div>
      {isCgpsOpen && (
        <div className="fixed inset-0 z-50">
          <Conditions onClose={handleToggleCgps} />
        </div>
      )}
      <StickyContact />
    </>
  );
}
