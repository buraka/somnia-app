"use client";

import { LocaleProvider } from "@/lib/LocaleContext";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import PhoneShowcase from "@/components/sections/PhoneShowcase";
import Features from "@/components/sections/Features";
import HowItWorks from "@/components/sections/HowItWorks";
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
        <PhoneShowcase />
        <Features />
        <HowItWorks />
        <FinalCTA />
      </main>
      <Footer />
    </LocaleProvider>
  );
}
