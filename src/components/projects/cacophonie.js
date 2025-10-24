export default {
  id: "p4",
  years: "2023",
  banner: "school",
  title: "Projet « Cacophonie » – Création de bots Discord",
  subtitle: "Projet académique — Développement Node.js et Discord.js",
  summary: "Développement d’un système complet de bots Discord multi-agents, avec gestion centralisée, API REST et architecture modulaire.",
  skills: ["Node.js", "Discord.js", "RiveScript", "API REST", "JavaScript", "Architecture logicielle", "Swagger"],
  image: "/assets/discord-bots.jpg",
  github: null,
  bullets: [ {
  title: "Projet « Cacophonie » – Création de bots Discord",
  items: [
    {
      title: "Conception du modèle applicatif et architecture",
      items: [
        "Conception d’une architecture modulaire organisée en plusieurs couches : gestion des bots, logique métier, communication API et interaction utilisateur.",
        "Mise en place d’un service centralisé de gestion des agents permettant de créer, activer, suspendre ou supprimer un bot de manière indépendante.",
        "Utilisation de threads parallèles pour exécuter plusieurs bots simultanément sans bloquer le serveur principal.",
        "Gestion complète du cycle de vie des agents (installation, activation, mise en veille, terminaison).",
        "Conception d’un système de logs structuré enregistrant toutes les interactions (messages reçus, réponses, erreurs).",
        "Documentation dynamique et claire de l’API à l’aide d’une interface Swagger pour faciliter les tests et la maintenance."
      ]
    },
    {
      title: "Développement back-end – API et serveur",
      items: [
        "Développement d’un serveur web en Node.js pour centraliser la communication avec les bots.",
        {
          title: "Création d’une API RESTful permettant :",
          items: [
            "D’ajouter de nouveaux bots à la volée.",
            "De consulter la liste des agents actifs.",
            "De modifier leur état (activer, suspendre, supprimer).",
            "D’accéder à leurs journaux d’activité."
          ]
        },
        "Implémentation d’un système de validation des requêtes et de gestion des erreurs côté serveur.",
        "Utilisation d’un framework web rapide et léger pour la configuration des routes, des middlewares et des politiques de sécurité (CORS)."
      ]
    },
    {
      title: "Développement des bots Discord",
      items: [
        "Création de plusieurs bots autonomes capables de converser simultanément sur un salon Discord.",
        "Intégration de la bibliothèque Discord.js pour gérer les connexions, les messages et les événements de la plateforme.",
        "Mise en place d’un système de réponses intelligentes basé sur des fichiers de scripts conversationnels (RiveScript).",
        "Chaque bot dispose de son propre “cerveau”, de ses journaux d’activité et de son identité.",
        "Gestion de la communication temps réel entre les utilisateurs et les bots."
      ]
    },
    {
      title: "Résultats et apports du projet",
      items: [
        "Développement d’un écosystème complet de bots conversationnels pilotés par API.",
        "Maîtrise des principes de multi-threading, de la programmation événementielle et de la communication inter-processus.",
        "Expérience en conception d’API REST documentée et en développement serveur asynchrone.",
        "Renforcement des compétences en architecture logicielle, gestion d’état et développement Node.js.",
        "Projet démontrant une capacité à concevoir un système distribué, évolutif et documenté."
      ]
    }
  ]
}
]
};
