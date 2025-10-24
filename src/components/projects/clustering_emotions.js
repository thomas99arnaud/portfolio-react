export default {
  id: "p6",
  years: "2025",
  banner: "school",
  title: "Clustering et visualisation des émotions",
  subtitle: "Projet académique — Analyse de données comportementales sur Twitter",
  summary:
    "Étude exploratoire des émotions exprimées sur Twitter durant la pandémie, à travers des méthodes de clustering non supervisé et de visualisation statistique.",
  skills: [
    "Python",
    "Pandas",
    "Scikit-learn",
    "Seaborn",
    "Matplotlib",
    "K-Means",
    "Analyse statistique",
    "ACP",
    "Data Science"
  ],
  image: "/assets/emotions.jpg",
  github: null,
  bullets: [ {
  title: "Clustering et visualisation des émotions",
  items: [
    {
      title: "Conception et préparation des données",
      items: [
        "Chargement, nettoyage et sélection des colonnes pertinentes du jeu de données.",
        "Normalisation des valeurs numériques pour homogénéiser les échelles d’intensité émotionnelle.",
        "Création de fonctions d’analyse automatisées pour générer et comparer les distributions de chaque paire d’émotions.",
        "Visualisation de 10 combinaisons d’émotions à l’aide d’histogrammes superposés afin d’identifier les corrélations et les antagonismes entre les intensités.",
        "Quantification du chevauchement des distributions à l’aide de densités de probabilité (KDE) et de l’aire de recouvrement entre deux émotions."
      ]
    },
    {
      title: "Analyse statistique et clustering",
      items: [
        "Application de la méthode de clustering K-Means pour segmenter les internautes selon leurs profils émotionnels.",
        "Recherche du nombre optimal de clusters (K) à l’aide du score de silhouette pour K allant de 2 à 10.",
        "Interprétation des résultats : les valeurs élevées du score indiquent des regroupements émotionnels bien séparés.",
        "Construction d’un tableau synthétique reliant nombre de clusters et qualité des regroupements, permettant d’identifier les structures naturelles dans les données.",
        "Comparaison de la similarité entre les émotions par calculs d’indices de chevauchement, illustrant leur interdépendance."
      ]
    },
    {
      title: "Visualisation et interprétation",
      items: [
        "Génération de graphes d’histogrammes comparatifs entre paires d’émotions (valence vs peur, joie vs colère, tristesse vs joie, etc.).",
        "Représentation graphique de l’évolution du score de silhouette en fonction de K.",
        "Interprétation visuelle et statistique des regroupements observés."
      ]
    },
    {
      title: "Résultats et apports du projet",
      items: [
        "Mise en évidence de structures émotionnelles distinctes dans les données Twitter liées à la pandémie.",
        "Validation empirique des relations entre émotions positives et négatives via les mesures de chevauchement.",
        "Identification du nombre de clusters optimal reflétant les grands profils émotionnels d’utilisateurs.",
        "Renforcement des compétences en clustering non supervisé, analyse de densité, visualisation statistique et interprétation de données comportementales."
      ]
    }
  ]
}
]
};
