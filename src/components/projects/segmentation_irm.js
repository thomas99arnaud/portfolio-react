export default {
  id: "p8",
  years: "2023",
  banner: "school",
  title: "Segmentation d’IRM cardiaques",
  subtitle: "Projet académique — Deep Learning pour l’imagerie médicale",
  summary:
    "Développement et comparaison de modèles U-Net et SegNet personnalisés pour la segmentation d’IRM cardiaques, avec optimisation des performances et des pertes adaptées aux classes déséquilibrées.",
  skills: [
    "Python",
    "PyTorch",
    "Deep Learning",
    "U-Net",
    "SegNet",
    "Image Segmentation",
    "Data Augmentation",
    "Dice Loss",
    "Focal Loss"
  ],
  image: "/assets/medical-segmentation.jpg",
  github: null,
  bullets: [ {
  title: "Segmentation d’IRM cardiaques",
  items: [
    {
      title: "Architecture et objectifs techniques",
      items: [
        "Conception et entraînement de réseaux de segmentation profonds dédiés à l’imagerie médicale.",
        "Implémentation de deux architectures personnalisées : une version améliorée de U-Net et un SegNet asymétrique inspiré de DeepLabV3.",
        "Développement de fonctions de perte adaptées aux classes déséquilibrées (Dice Loss, Focal Loss).",
        "Optimisation de la précision et de la généralisation tout en limitant le surapprentissage."
      ]
    },
    {
      title: "Approches et méthodes mises en œuvre",
      items: [
        {
          title: "Modèle U-Net personnalisé",
          items: [
            "Intégration de convolutions séparables, de blocs résiduels et de bottlenecks pour améliorer la profondeur et la stabilité de l’apprentissage.",
            "Architecture symétrique encoder–decoder optimisée pour des images de 128×128 pixels.",
            "Précision de validation : ≈80 % après 10 epochs avec convergence rapide et peu de surapprentissage."
          ]
        },
        {
          title: "Modèle SegNet modifié",
          items: [
            "Architecture non symétrique avec encodeur profond à convolutions dilatées et décodeur léger pour une meilleure efficacité mémoire.",
            "Fusion multi-niveaux via skip connections asymétriques et blocs denses.",
            "Précision de validation : ≈83 %, meilleure performance sur les structures fines (myocarde)."
          ]
        }
      ]
    },
    {
      title: "Résultats et compétences développées",
      items: [
        "Conception de modèles de segmentation d’images médicales robustes et performants.",
        "Maîtrise de PyTorch pour la création d’architectures personnalisées et la gestion fine de la boucle d’entraînement.",
        "Expérience en prétraitement de données biomédicales et amélioration de la généralisation via data augmentation.",
        "Capacité à équilibrer performance, stabilité et coût computationnel dans un contexte d’imagerie médicale réelle."
      ]
    }
  ]
}
 ]
};
