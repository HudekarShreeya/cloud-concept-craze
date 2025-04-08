
export interface PetType {
  id: string;
  name: string;
  description: string;
  cloudService: string;
  serviceDescription: string;
  baseColor: string;
  abilities: string[];
  growthRate: number;
  icon: string;
}

export interface Pet {
  id: string;
  name: string;
  type: string;
  level: number;
  happiness: number;
  experience: number;
  createdAt: Date;
  customizations: {
    eyeStyle: string;
    mouthStyle: string;
    accessory: string;
    pattern: string;
  };
}

export const petTypes: PetType[] = [
  {
    id: "compute",
    name: "Cumulus",
    description: "A fast, energetic cloud pet that loves to process tasks quickly!",
    cloudService: "Compute Engine",
    serviceDescription: "Virtual machines that handle processing tasks",
    baseColor: "bg-blue-400",
    abilities: ["Quick processing", "Auto-scaling", "Multi-tasking"],
    growthRate: 1.2,
    icon: "⚡",
  },
  {
    id: "storage",
    name: "Nimbus",
    description: "A fluffy, expandable cloud that can store lots of treasures inside!",
    cloudService: "Cloud Storage",
    serviceDescription: "Scalable storage for all your data needs",
    baseColor: "bg-purple-400",
    abilities: ["Expandable size", "Data protection", "Treasure holding"],
    growthRate: 0.8,
    icon: "💾",
  },
  {
    id: "database",
    name: "Stratus",
    description: "An organized, structured cloud that remembers everything!",
    cloudService: "Database Services",
    serviceDescription: "Organized data storage with quick retrieval",
    baseColor: "bg-green-400",
    abilities: ["Perfect memory", "Fast retrieval", "Pattern recognition"],
    growthRate: 1.0,
    icon: "🗃️",
  },
  {
    id: "ai",
    name: "Cirrus",
    description: "A clever cloud with problem-solving abilities!",
    cloudService: "AI & Machine Learning",
    serviceDescription: "Intelligent services that learn and adapt",
    baseColor: "bg-yellow-400",
    abilities: ["Learning", "Pattern recognition", "Prediction"],
    growthRate: 1.5,
    icon: "🧠",
  },
  {
    id: "network",
    name: "Nebulus",
    description: "A social cloud that connects easily with others!",
    cloudService: "Networking",
    serviceDescription: "Fast connections between services",
    baseColor: "bg-red-400",
    abilities: ["Fast connections", "Secure channels", "Global reach"],
    growthRate: 1.1,
    icon: "🌐",
  },
];

export const generateRandomPet = (name: string, type: string): Pet => {
  const eyeStyles = ["happy", "round", "sleepy", "wink"];
  const mouthStyles = ["smile", "open", "surprised", "smirk"];
  const accessories = ["bow", "glasses", "hat", "none"];
  const patterns = ["dots", "stripes", "stars", "none"];

  return {
    id: Math.random().toString(36).substring(2, 15),
    name,
    type,
    level: 1,
    happiness: 100,
    experience: 0,
    createdAt: new Date(),
    customizations: {
      eyeStyle: eyeStyles[Math.floor(Math.random() * eyeStyles.length)],
      mouthStyle: mouthStyles[Math.floor(Math.random() * mouthStyles.length)],
      accessory: accessories[Math.floor(Math.random() * accessories.length)],
      pattern: patterns[Math.floor(Math.random() * patterns.length)],
    },
  };
};

// Helper function to calculate level based on experience
export const calculateLevel = (experience: number, growthRate: number): number => {
  return Math.floor(Math.pow(experience / 100, 0.5) * growthRate) + 1;
};

// Initial demo pets
export const initialPets: Pet[] = [
  generateRandomPet("Cloudy", "compute"),
  generateRandomPet("Stormy", "storage"),
  generateRandomPet("Droplet", "database"),
];
