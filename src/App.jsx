import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ExternalLink, Code2, Film, Image as ImageIcon } from "lucide-react";

import OlympicBackground from "./components/ZoneA/OlympicBackground";
import Header from "./components/ZoneA/Header";
import HeaderSticky from "./components/ZoneA/HeaderSticky";
import PhotoDeProfil from "./components/ZoneA/PhotoDeProfil";

import ParcoursTimeline from "./components/ZoneB/ParcoursTimeline";

import ProjectsSection from "./components/ZoneC/ProjectsSection";

export default function PortfolioApp() {

const projects = [
  {
    id: "p1",
    title: "Pipeline temps réel — Kafka + Flink",
    subtitle: "Streaming & alerting",
    summary: "Traitement d’événements volumineux avec monitoring.",
    skills: ["Kafka", "Flink", "Docker", "Grafana"],
    image: "/assets/realtime.jpg",
    github: "https://github.com/tonrepo/pipeline-realtime",
    bullets: [
      "Schéma d’ingestion, partitionnement et rétention",
      "Jobs Flink avec exactly-once et checkpoints",
      "Alerting Prometheus + Grafana",
      "CI/CD Docker vers Kubernetes",
    ],
  },
  {
    id: "p2",
    title: "MLOps — Entraînement & déploiement",
    subtitle: "Workflow reproductible",
    summary: "Suivi d’expériences et API de prédiction.",
    skills: ["Python", "MLflow", "FastAPI", "Docker"],
    image: "/assets/mlops.jpg",
    github: "https://github.com/tonrepo/mlops-example",
    bullets: [
      "Tracking MLflow et registry des modèles",
      "Packaging et validation des artefacts",
      "API FastAPI + tests e2e",
      "Automatisation build/publish",
    ],
  },
];
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
         <ParcoursTimeline
        education={[
          { title: "Diplôme d'ingénieur en informatique", org: "ENSSAT Lannion (IMT Mines Télécom)", location: "Lannion", date: "2022 — 2025", details: "-" },
          { title: "Maîtrise en informatique, cheminement en intelligence artificielle et en science des données (M. Sc.)", org: "Université de Sherbrooke", location: "Sherbrooke (Canada)", date: "2024 - 2025", details: "-" },
          { title: "Classes préparatoires aux grandes écoles PCSI-PSI", org: "Lycée Alphone DAUDET", location: "Nîmes", date: "2020 - 2022", details: "-" },
          { title: "Baccalauréat scientifique spécialité mathématiques", org: "Lycée Lucie AUBRAC", location: "Bollène", date: "2020", details: "-" }


        ]}
        work={[
          { title: "Ingénieur - Stagiaire logiciel fullstack & donnees", org: "Ministère des transports du Québec", location: "Montréal (Canada)", date: "2025", details: "-" },
          { title: "Développeur Web", org: "GFCOM", location: "Sainte Cécile les Vignes", date: "2024" },
          { title: "Développeur Web", org: "Indépendant", location: "Remote", date: "2023" },
          { title: "Commis aux stocks", org: "Intermarché", location: "Bollène", date: "2023" },
          { title: "Employé Polyvalent", org: "API TECH", location: "Bollène", date: "2022" },
          { title: "Professeur particulier de mathématiques", org: "Indépendant", location: "Rochegude", date: "2021" },
          { title: "Caissier", org: "Super U", location: "Vaison la Romaine", date: "2021" },
          { title: "Agent d'entretien", org: "Camping CapFun", location: "Vaison la romaine", date: "2019" },
          { title: "Employé communal", org: "Mairie de Rochegude", location: "Rochegude", date: "2018" },

        ]}
  />

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

