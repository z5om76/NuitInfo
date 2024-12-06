
const systemInfo = {
  circulatory: {
      title: "❤️ Système Circulatoire",
      description: "Le système circulatoire humain pompe le sang à travers le corps, transportant l'oxygène, les nutriments et les produits de dégradation. De manière similaire, la circulation thermohaline de l'océan agit comme une pompe, entraînant des courants marins qui déplacent la chaleur, les nutriments et les gaz à travers la planète. Ce processus est essentiel pour réguler le climat mondial et soutenir les écosystèmes marins, tout comme le système circulatoire soutient les fonctions métaboliques et la santé globale du corps humain.",
    },
    respiratory: {
      title: "🌬️ Système Respiratoire",
      description: "Le système respiratoire humain facilite les échanges gazeux : l'oxygène est absorbé et le dioxyde de carbone est expulsé. L'océan joue un rôle similaire en absorbant de grandes quantités de dioxyde de carbone (CO2) de l'atmosphère et en libérant de l'oxygène, notamment grâce à des processus tels que la photosynthèse réalisée par les plantes marines (phytoplancton). Ces processus aident à réguler les gaz atmosphériques, ce qui influence à son tour le climat et les conditions atmosphériques de la planète.",
    },
    digestive: {
      title: "🍴 Système Digestif",
      description: "Le système digestif décompose les aliments pour absorber les nutriments essentiels à l'énergie et à la croissance du corps. De manière similaire, l'océan soutient les chaînes alimentaires marines. Le phytoplancton, à la base de la chaîne alimentaire, absorbe les nutriments de l'eau, qui sont ensuite transmis à d'autres organismes marins. Ce cycle de nutriments soutient toute vie marine, tout comme la digestion et l'absorption des nutriments soutiennent le corps humain.",
    },
    brain: {
      title: "🧠 Cerveau",
      description: "Le cerveau est le centre de contrôle du corps, responsable du traitement de l'information et de la coordination des actions. De la même manière, l'océan influence le climat et les écosystèmes de la Terre. Les courants océaniques, les modèles météorologiques et le cycle des nutriments aident à réguler les températures mondiales et à soutenir la biodiversité. Tout comme le cerveau garantit la survie du corps et s'adapte aux changements environnementaux, l'océan aide à maintenir l'équilibre et la stabilité de la Terre à travers ses systèmes dynamiques.",
    },
    liver: {
      title: "🍃 Foie",
      description: "Le foie est le centre de détoxification du corps, traitant et éliminant les toxines du sang. L'océan, de manière similaire, sert de 'détoxifiant' en absorbant des polluants, tels que l'excès de carbone et les eaux de ruissellement industrielles, bien qu'il lutte souvent contre une surcharge de pollution. Les océans jouent un rôle crucial dans le filtrage des substances nuisibles de l'atmosphère et des terres, tout comme le foie filtre les toxines du corps. Cependant, tout comme une maladie du foie compromet la fonction du corps, la pollution peut altérer la capacité de l'océan à se purifier et à maintenir la santé des écosystèmes.",
    },
    skin: {
      title: "🧴 Peau",
      description: "La peau protège le corps contre les menaces environnementales, aide à réguler la température et prévient la déshydratation. La surface de l'océan joue un rôle similaire en régulant la température et le climat de la Terre. L'interaction entre la surface de l'océan et l'atmosphère aide à maintenir l'équilibre thermique de la Terre. L'océan agit également comme un tampon contre les fluctuations extrêmes de température, tout comme la peau maintient l'homéostasie du corps en contrôlant la perte de chaleur et la rétention d'humidité. Si la peau est endommagée, elle ne peut plus protéger le corps, tout comme le changement climatique et la pollution océanique perturbent les fonctions protectrices de l'océan.",
    },
};

// Get clickable elements
const clickableAreas = document.querySelectorAll('.clickable');
const infoPanel = document.getElementById('info-panel');

// Add event listeners
clickableAreas.forEach(area => {
  area.addEventListener('click', () => {
    const system = area.dataset.info;
    const { title, description } = systemInfo[system];

    // Update info panel
    infoPanel.innerHTML = `
      <h2>${title}</h2>
      <p>${description}</p>
    `;
  });
});
