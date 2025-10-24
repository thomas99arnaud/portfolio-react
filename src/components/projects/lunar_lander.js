export default {
  id: "p7",
  years: "2023",
  banner: "school",
  title: "Contrôle autonome de systèmes dynamiques (Lunar Lander)",
  subtitle: "Projet académique — Apprentissage par renforcement profond",
  summary:
    "Développement d’un agent intelligent capable d’atterrir de manière autonome sur un environnement simulé Lunar Lander, en combinant apprentissage par renforcement (DDPG) et optimisation évolutionnaire (CMA-ES).",
  skills: [
    "Python",
    "TensorFlow",
    "PyTorch",
    "DDPG",
    "CMA-ES",
    "Reinforcement Learning",
    "Optimization",
    "AI Safety",
    "Deep Learning"
  ],
  image: "/assets/lunarlander.jpg",
  github: null,
  bullets: [ {
  title: "Contrôle autonome de systèmes dynamiques (Lunar Lander)",
  items: [
    {
      title: "Architecture et objectifs techniques",
      items: [
        "Simulation et contrôle d’un environnement continu soumis à des contraintes physiques (propulsion, stabilité, sécurité).",
        "Conception d’un agent capable d’apprendre à atterrir de manière optimale via apprentissage par renforcement et exploration adaptative.",
        "Évaluation et amélioration des performances à l’aide d’indicateurs de stabilité, de précision et de rapidité de convergence."
      ]
    },
    {
      title: "Approches et méthodes mises en œuvre",
      items: [
        {
          title: "Apprentissage par renforcement (DDPG amélioré)",
          items: [
            "Implémentation d’un modèle Actor-Critic pour l’apprentissage dans un espace d’action continu.",
            "Intégration de NoisyNet, régularisation L2 et contrôle de sécurité dynamique pour stabiliser l’entraînement.",
            "Amélioration de la performance (+25 %) et réduction des erreurs de trajectoire (-80 %) par rapport à la version de base."
          ]
        },
        {
          title: "Optimisation évolutionnaire (CMA-ES)",
          items: [
            "Développement d’une stratégie d’optimisation sans gradient adaptée aux environnements bruités.",
            "Ajout de croisement génétique, mutation contrôlée et sélection adaptative des meilleures politiques.",
            "Résultats : convergence 30 % plus rapide, meilleure robustesse au bruit, légère perte de précision."
          ]
        }
      ]
    },
    {
      title: "Résultats et compétences développées",
      items: [
        "Conception d’un agent autonome intelligent pour un environnement physique complexe.",
        "Maîtrise avancée de l’apprentissage par renforcement profond et des stratégies d’optimisation évolutionnaire.",
        "Application de méthodes de sécurisation et de régularisation dans des modèles d’intelligence artificielle.",
        "Compréhension approfondie des interactions entre exploration, stabilité et performance en environnement simulé."
      ]
    }
  ]
}
 ]
};
