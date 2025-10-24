export default {
  id: "p5",
  years: "2025",
  banner: "school",
  title: "Classification de données génomiques",
  subtitle: "Projet académique — Analyse exploratoire et modélisation statistique",
  summary:
    "Analyse et visualisation de données génétiques multivariées pour la classification de types de cancers à partir de profils d’expression génique.",
  skills: ["Python", "Pandas", "NumPy", "Seaborn", "Matplotlib", "ACP", "Data Science", "Analyse statistique"],
  image: "/assets/genomics.jpg",
  github: null,
  bullets: [ {
  title: "Classification de données génomiques",
  items: [
    {
      title: "Conception et préparation des données",
      items: [
        "Chargement et fusion de plusieurs fichiers tabulaires (profils génétiques et étiquettes de classes).",
        "Nettoyage des données : suppression des valeurs manquantes et normalisation des variables (centrage-réduction).",
        "Sélection d’un sous-ensemble de gènes pertinents pour limiter la dimensionnalité et optimiser les calculs.",
        "Calcul de mesures de cohésion et de séparation des classes (distances intra- et inter-classe).",
        "Implémentation et comparaison de plusieurs métriques de distance : euclidienne, cosinus et Mahalanobis."
      ]
    },
    {
      title: "Analyse statistique et modélisation",
      items: [
        "Application de l’Analyse en Composantes Principales (ACP) pour réduire les dimensions et visualiser la structure des données.",
        "Observation d’une claire séparation entre les classes de cancers, indiquant une forte cohérence interne des groupes biologiques.",
        "Réalisation d’analyses comparatives par paires de classes (ex. BRCA vs COAD, LUAD vs KIRC, etc.) pour étudier la proximité entre types de tumeurs.",
        "Étude de la variance expliquée par les composantes principales, confirmant la pertinence de la réduction dimensionnelle."
      ]
    },
    {
      title: "Visualisation et interprétation",
      items: [
        "Conception de nuages de points colorés (scatter plots) représentant les patients dans l’espace des composantes principales.",
        "Création de distributions combinées (jointplots) pour visualiser les recouvrements éventuels entre deux classes.",
        "Utilisation de Seaborn et Matplotlib pour produire des visualisations claires et interprétables.",
        "Analyse qualitative complémentaire des regroupements et des distances calculées."
      ]
    },
    {
      title: "Résultats et apports du projet",
      items: [
        "Validation visuelle et statistique de la séparation entre classes tumorales à partir de profils génétiques.",
        "Maîtrise des concepts fondamentaux de la data science exploratoire : préparation, réduction de dimensions, visualisation et interprétation.",
        "Renforcement des compétences en analyse multivariée, ACP et comparaison de métriques de distance.",
        "Production de visualisations scientifiques claires permettant une interprétation immédiate des relations entre groupes."
      ]
    }
  ]
}
 ]
};
