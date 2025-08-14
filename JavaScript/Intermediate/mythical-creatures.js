const mythicalCreatures = [
  { name: "Dragon", type: "Fire", lastSeen: "Volcano Valley" },
  { name: "Mermaid", type: "Water", lastSeen: "Coral Caves" },
  { name: "Unicorn", type: "Land", lastSeen: "Enchanted Forest" },
  { name: "Griffin", type: "Air", lastSeen: "Highwind Mountains" },
  { name: "Kraken", type: "Water", lastSeen: "Abyssal Depths" },
];

const firstWaterCreature = mythicalCreatures.find(
  (creature) => creature.type === "Water"
);
console.log("First Water Creature:");
console.log(`- Name: ${firstWaterCreature.name}`);

const griffinIndex = mythicalCreatures.findIndex(
  (creature) => creature.name === "Griffin"
);
console.log("Griffin Index:", griffinIndex);

const recentCreatureEF = mythicalCreatures.find(
  (creature) => creature.lastSeen === "Enchanted Forest"
);
console.log("Recent Creature in Enchanted Forest:");
console.log(`- Name: ${recentCreatureEF.name}`);
