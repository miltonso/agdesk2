

export interface Infra {
  logo: string;
  name: string;
  type: string;
  status: string;
  last_inspection: string;
  maintenance_date: string;
  description?: string; // Optional field
  usage?: string; // Optional field
  tasks?: string[]; // Optional field
}

export const infraData: Infra[] = [
  {
    logo: "/images/infrastructure/barn.svg",
    name: "Barn 1",
    type: "Storage",
    status: "Operational",
    last_inspection: "15/04/2024",
    maintenance_date: "31/05/2024",
    description: "Used to store feed, grain, and equipment.",
    usage: "Storage for agricultural products.",
    tasks: ["Check structural integrity", "Inspect roof for leaks"],
  },
  {
    logo: "/images/infrastructure/barn.svg",
    name: "Greenhouse A",
    type: "Cultivation",
    status: "Needs Repair",
    last_inspection: "20/03/2024",
    maintenance_date: "30/05/2024",
    description: "Facilitates the growth of plants in controlled environments.",
    usage: "Cultivation of exotic plants.",
    tasks: ["Replace broken glass panels", "Check irrigation system"],
  },
  // Additional entries...
];
