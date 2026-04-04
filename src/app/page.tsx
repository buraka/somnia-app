"use client";

import { LocaleProvider } from "@/lib/LocaleContext";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import ThreeLenses from "@/components/sections/ThreeLenses";
import VoiceCapture from "@/components/sections/VoiceCapture";
import SymbolMap from "@/components/sections/SymbolMap";
import Features from "@/components/sections/Features";
import FinalCTA from "@/components/sections/FinalCTA";
import StarField from "@/components/ui/StarField";
import DreamOrb from "@/components/ui/DreamOrb";

export default function Home() {
  return (
    <LocaleProvider>
      <StarField />
      <DreamOrb />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <ThreeLenses />
        <VoiceCapture />
        <SymbolMap />
        <Features />
        <FinalCTA />
      </main>
      <Footer />
    </LocaleProvider>
  );
}
