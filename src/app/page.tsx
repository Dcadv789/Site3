'use client';

import { Navbar } from "@/components/Navbar"
import { Hero } from "@/components/Hero"
import { Challenges } from "@/components/Challenges"
import { Scenario } from "@/components/Scenario"
import { Benefits } from "@/components/Benefits"

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FAFAFA]">
      <Navbar />
      <Hero />
      <Challenges />
      <Scenario />
      <Benefits />
    </div>
  )
}