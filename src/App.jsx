import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ExternalLink, Code2, Film, Image as ImageIcon } from "lucide-react";

import OlympicBackground from "./components/ZoneA/OlympicBackground";
import Header from "./components/ZoneA/Header";
import HeaderSticky from "./components/ZoneA/HeaderSticky";
import PhotoDeProfil from "./components/ZoneA/PhotoDeProfil";

import { education } from "./components/education";
import { work } from "./components/work";
import ParcoursTimeline from "./components/ZoneB/ParcoursTimeline";

import { projects } from "./components/projects";
import ProjectsSection from "./components/ZoneC/ProjectsSection";

export default function PortfolioApp() {

  return (

    // Zone A
    <div className="min-h-screen text-slate-900">
      <OlympicBackground />
      <HeaderSticky/>
      <main className="mx-auto max-w-6xl px-4">
        <section id="home" className="grid gap-10 py-16 md:grid-cols-5 md:py-20">
          <Header />
          <PhotoDeProfil />
        </section>
        
      {/* Zone B  */}
        <ParcoursTimeline education={education} work={work} />

      {/* === Zone C : Projets === */}
        <ProjectsSection projects={projects} />
      </main>

      {/* Footer */}

      <footer className="border-t border-slate-200 py-8">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 text-sm text-slate-500">
          <p>© {new Date().getFullYear()} Thomas ARNAUD — Tous droits réservés.</p>
        </div>
      </footer>
    </div>
  );
}

