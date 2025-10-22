// src/data/projects/project1.js
export default {
  id: "p1",
  years: "2025",
  banner : "pro",
  title: "Modélisation et automatisation du réseau cyclable de Montréal",
  subtitle: "Ministère des transports du Québec",
  summary: "Concevoir et déployer une application de modélisation du trafic cyclable à l’échelle de la ville de Montréal",
  skills: ["Python", "Pandas", "Numpy", "Geopandas", "Cache", "API", "Dev WEB", "AzureDevOps", "Git", "Pipelines", "Serveurs", "OSRM", "PostgreSQL", "Docker", "Streamlit", "Documentation technique"],
  image: "/assets/realtime.jpg",
  github: "https://github.com/tonrepo/pipeline-realtime",
  bullets: [
  {
    title: "Modélisation et automatisation du réseau cyclable de Montréal",
    items: [
      {
        title: "Automatisation du traitement des données de mobilité et du routage (DevOps / Pipeline)",
        items: [
          "Prise en charge complète du projet de refonte du pipeline de modélisation du réseau cyclable, depuis l’analyse des besoins jusqu’au déploiement opérationnel.",
          "Conception d’une architecture de traitement de données automatisée, basée sur Azure DevOps, pour le calcul d’itinéraires via l’outil OSRM.",
          "Création d’images Docker personnalisées, configuration d’environnements reproductibles et mise en place d’un pipeline CI/CD pour la génération, le déploiement et la mise à jour des serveurs.",
          "Réécriture intégrale du code de prétraitement et automatisation des tâches répétitives (conversion, nettoyage, génération de données OSRM).",
          "Proposition de choix techniques structurants (hébergement, orchestration, conteneurisation, optimisation des performances).",
          "Travail en autonomie complète sur la mise en place de l’environnement, la configuration des serveurs et la validation des livrables.",
          {
            title: "Livrables",
            items: [
              "Pipeline CI/CD opérationnel sur Azure DevOps.",
              "Image Docker publique documentée et déployée sur Docker Hub.",
              "Serveur OSRM fonctionnel et accessible via API REST.",
              "Scripts Python d’automatisation et documentation d’installation.",
            ],
          },
          {
            title: "Volumétrie",
            items: [
              "1 pipeline DevOps complet, 1 image Docker maintenue et déployée.",
              "10 000+ itinéraires simulés sur plusieurs années d’enquêtes OD.",
            ],
          },
        ],
      },
      {
        title: "Développement applicatif et visualisation interactive",
        items: [
          "Conception et développement d’une application web Streamlit pour la visualisation des flux de mobilité à Montréal.",
          "Conception des fonctionnalités d’exploration : sélection de zones, affichage de trajets, comparaison de périodes, superposition de comptages réels.",
          "Développement du backend de visualisation avec Folium, GeoPandas et Pydeck.",
          "Intégration d’un système de mise en cache et d’optimisation des calculs pour accélérer le rendu de données.",
          "Prise d’initiative sur la structuration du projet applicatif, la hiérarchie des modules et la conception UX/UI.",
          "Propositions régulières d’améliorations fonctionnelles et d’évolutions techniques au tuteur et aux équipes partenaires.",
          {
            title: "Livrables",
            items: [
              "Application Streamlit déployée en production interne.",
              "Fichiers shapefiles enrichis (vitesses, distances, flux simulés).",
              "Documentation d’utilisation et guide de déploiement.",
            ],
          },
          {
            title: "Volumétrie",
            items: [
              "5 000 lignes de code Python.",
            ],
          },
        ],
      },
      {
        title: "Collaboration interservices et gestion du projet (Communication / Prise de décision)",
        items: [
          "Coordination avec plusieurs acteurs : ingénieurs et docteurs du ministère, conseillers municipaux de la Ville de Montréal et consultants de CGI.",
          "Participation aux réunions techniques et stratégiques sur la gestion des données, les contraintes d’infrastructure et la sécurité.",
          "Rédaction et présentation d’un plan d’action technique dès la deuxième semaine de stage, validé par le tuteur.",
          "Communication proactive : présentation hebdomadaire des avancées, synthèse des difficultés, et propositions de solutions techniques.",
          "Autonomie complète dans l’organisation du travail, la priorisation des tâches et le choix des outils.",
          "Prise de décision technique sur la stack utilisée (Docker, Azure DevOps, Streamlit, Folium) après évaluation de plusieurs options.",
          "Contribution à la formalisation du projet pour les équipes à venir : documentation, transfert de compétences, démonstration finale.",
          {
            title: "Livrables",
            items: [
              "Documentation complète du projet (technique, fonctionnelle, architecture, 60 pages).",
              "Présentation finale des résultats devant les responsables du service et les partenaires techniques.",
              "Compte rendu hebdomadaire d’avancement.",
            ],
          },
          {
            title: "Volumétrie",
            items: [
              "3 à 5 interlocuteurs réguliers (Ville de Montréal, CGI, tuteur MTMD).",
              "10+ réunions et bilans d’étape.",
            ],
          },
        ],
      },
    ],
  },
  {
    title: "Bilan Professionnel et Technique",
    items: [
      {
        title: "Compétences clés développées",
        items: [
          "DevOps : Azure DevOps, CI/CD, Serveurs, Docker.",
          "Data Engineering : automatisation de flux massifs, nettoyage et intégration OSM.",
          "Développement Python : Streamlit, GeoPandas, Folium, Pydeck, Shapefile.",
          "Visualisation : conception d’interfaces de data exploration interactive.",
          "Gestion de projet : planification, reporting, documentation et restitution.",
          "Communication : coordination interservices, pédagogie et vulgarisation.",
        ],
      },
      {
        title: "Autonomie et responsabilités",
        items: [
          "Conduite du projet de bout en bout avec encadrement minimal.",
          "Prise d’initiative sur les choix technologiques et la structuration du pipeline.",
          "Capacité à travailler en totale autonomie tout en assurant un suivi professionnel régulier avec les acteurs du ministère.",
          "Force de proposition reconnue : plusieurs choix techniques adoptés par l’équipe à la suite de mes recommandations.",
        ],
      },
      {
        title: "Impact",
        items: [
          "Création du premier prototype automatisé de modélisation du trafic cyclable.",
          "Intégration réussie du projet au sein des processus du MTMD.",
          "Valorisation des résultats dans le cadre de la réflexion sur la mobilité active à Montréal.",
          "Application encore utilisée aujourd’hui par les équipes.",
        ],
      },
    ],
  },
],

};
