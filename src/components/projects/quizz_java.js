export default {
  id: "p9",
  years: "2022",
  banner: "school",
  title: "Application de quiz en Java (interface graphique et POO)",
  subtitle: "Projet académique — Programmation orientée objet et interface Swing",
  summary:
    "Développement d’une application de quiz complète en Java, intégrant interface graphique, gestion d’utilisateurs, système administrateur et persistance locale des données.",
  skills: [
    "Java",
    "Swing",
    "UML",
    "POO",
    "MVC",
    "Event Handling",
    "Fichiers texte",
    "Jar Packaging"
  ],
  image: "/assets/java-quiz.jpg",
  github: null,
  bullets: [ {
  title: "Application de quiz en Java (interface graphique et POO)",
  items: [
    {
      title: "Architecture et objectifs techniques",
      items: [
        "Conception d’une application orientée objet suivant un modèle inspiré du pattern MVC.",
        "Organisation du code en panneaux (CardLayout) permettant une navigation fluide sans ouverture multiple de fenêtres.",
        "Gestion des utilisateurs, questions, parties et scores via des structures de données internes et des fichiers locaux simulant une base de données.",
        "Implémentation d’un système administrateur pour la création, la modification et la validation des questions du quiz."
      ]
    },
    {
      title: "Fonctionnalités principales",
      items: [
        "Interface graphique (Swing) : menus, transitions, animations et interactions utilisateurs fluides.",
        {
          title: "Modes de jeu multiples",
          items: [
            "Mode solo : enchaînement de questions, calcul du score et affichage du résultat final.",
            "Mode équipe : gestion de plusieurs joueurs, alternance automatique des tours, classement dynamique."
          ]
        },
        "Gestion des utilisateurs : création de comptes, authentification et stockage des statistiques.",
        "Espace administrateur : ajout, suppression ou modification de questions, consultation des scores.",
        "Persistance des données : enregistrement automatique dans des fichiers texte (.txt) structurés.",
        "Statistiques et fin de partie : affichage du classement, meilleure performance et résumé des résultats."
      ]
    },
    {
      title: "Aspects techniques et conception",
      items: [
        "Conception UML orientée héritage, encapsulation et modularité.",
        "Utilisation de listeners et gestionnaires d’événements pour les interactions (clics, boutons, transitions).",
        "Structure centralisée autour d’un contrôleur unique orchestrant les différents panneaux de jeu.",
        "Application packagée en .jar exécutable pour une distribution simple et multiplateforme."
      ]
    },
    {
      title: "Résultats et compétences développées",
      items: [
        "Réalisation d’une application graphique complète avec gestion d’état et persistance des données.",
        "Maîtrise de la programmation orientée objet (héritage, encapsulation, polymorphisme).",
        "Capacité à concevoir, documenter et livrer un produit Java complet (Javadoc + diagrammes UML)."
      ]
    }
  ]
}
 ]
};
