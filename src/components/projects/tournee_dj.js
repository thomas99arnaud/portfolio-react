// src/data/projects/project1.js
export default {
  id: "p3",
  years: "2023",
  banner: "school",
  title: "Site de gestion des tournées de DJs",
  subtitle: "Projet académique — Développement Full-Stack Java",
  summary: "Application web complète pour la planification des tournées de DJs : base de données relationnelle, API REST Java et interface web dynamique.",
  skills: ["Java", "SQL", "Tomcat", "HTML", "CSS", "JavaScript", "API REST", "Full-Stack"],
  image: "/assets/dj.jpg",
  github: null,
  bullets: [ {
  title: "Site de gestion des tournées de DJs",
  items: [
    {
      title: "Conception et implémentation d’un modèle de base de données relationnelle",
      items: [
        "Modélisation des entités et application des règles métiers spécifiques : unicité des événements, contraintes de déplacement et cohérence temporelle.",
        "Mise en place des contraintes d’intégrité référentielle (clés primaires, étrangères, suppression en cascade) pour garantir la fiabilité des données.",
        "Création de triggers pour automatiser les vérifications et appliquer les contraintes de planification.",
        "Définition de vues SQL pour simplifier la consultation des données (événements à venir, top DJs, etc.).",
        "Livraison d’un script SQL complet incluant la création des tables, des index, des triggers et des vues."
      ]
    },
    {
      title: "Développement back-end API REST Java",
      items: [
        "Développement du back-end en Java pour la gestion des entités principales (DJs, lieux, événements).",
        "Conception d’une API REST assurant la communication entre la base de données et l’interface web.",
        "Implémentation des opérations CRUD sur l’ensemble des ressources.",
        "Gestion de la logique métier côté serveur : validation des règles de planification, contraintes horaires et cohérence des événements.",
        "Déploiement de l’application sur un serveur Apache Tomcat.",
        "Intégration de tests unitaires et fonctionnels pour vérifier le bon fonctionnement des endpoints et de la logique métier."
      ]
    },
    {
      title: "Développement front-end – interface web",
      items: [
        "Conception et développement d’une interface web interactive pour la gestion des DJs, des lieux et des événements.",
        "Utilisation de HTML, CSS et JavaScript pour une interface claire, responsive et ergonomique.",
        "Mise en place de pages dynamiques permettant la création, la modification et la suppression des données (CRUD).",
        "Intégration de requêtes HTTP vers l’API REST pour la mise à jour en temps réel.",
        "Ajout de contrôles côté client pour améliorer la validation des formulaires et l’expérience utilisateur."
      ]
    },
    {
      title: "Résultats et apports du projet",
      items: [
        "Livraison d’une application web complète et fonctionnelle intégrant base de données, API REST et interface utilisateur.",
        "Déploiement et exécution réussis sur serveur Tomcat.",
        "Amélioration des compétences en développement web full-stack Java, modélisation relationnelle et gestion de projet en équipe.",
        "Approfondissement des notions de qualité logicielle : architecture modulaire, gestion des exceptions, tests et débogage."
      ]
    }
  ]
}
 ]
};
