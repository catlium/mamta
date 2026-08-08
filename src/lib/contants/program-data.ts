export type Program = {
  id: string
  image: string
  title: string
  description: string
  category: string
  location: string
  objectives: string[]
  activities: string[]
  requirements: string[]
}

export const programs:Program[] = [
  {
    id: "education-support",
    image: "https://picsum.photos/400/300",
    title: "Education Support",
    description:
      "Providing quality education and learning resources to children in rural communities.",
    category: "Education",
    location: "Rural Communities, Maharashtra",
    objectives: [
      "Improve access to education",
      "Provide learning resources",
      "Encourage children to continue their education",
    ],
    activities: [
      "Distribution of educational materials",
      "Learning and awareness sessions",
      "Community visits",
    ],
    requirements: [
      "Volunteers",
      "Books and stationery",
      "Educational materials",
    ],
  },

  {
    id: "healthcare",
    image: "https://picsum.photos/400/300",
    title: "Healthcare",
    description:
      "Organizing medical camps and spreading health awareness for better living.",
    category: "Healthcare",
    location: "Rural Communities, Maharashtra",
    objectives: [
      "Improve access to basic healthcare",
      "Create health awareness",
      "Support underserved communities",
    ],
    activities: [
      "Medical camps",
      "Health awareness sessions",
      "Basic health checkups",
    ],
    requirements: [
      "Medical volunteers",
      "Healthcare professionals",
      "Medical supplies",
    ],
  },

  {
    id: "women-empowerment",
    image: "https://picsum.photos/400/300",
    title: "Women Empowerment",
    description:
      "Helping women become financially independent through skill development.",
    category: "Women Empowerment",
    location: "Rural Communities, Maharashtra",
    objectives: [
      "Promote women's independence",
      "Develop employment skills",
      "Create livelihood opportunities",
    ],
    activities: [
      "Skill development workshops",
      "Awareness programs",
      "Community interaction",
    ],
    requirements: [
      "Skill trainers",
      "Volunteers",
      "Training materials",
    ],
  },

  {
    id: "livelihood",
    image: "https://picsum.photos/400/300",
    title: "Sustainable Livelihood",
    description:
      "Supporting families with skills and opportunities to create sustainable sources of income.",
    category: "Livelihood",
    location: "Rural Communities, Maharashtra",
    objectives: [
      "Create livelihood opportunities",
      "Improve family income",
      "Develop practical skills",
    ],
    activities: [
      "Skill development sessions",
      "Livelihood awareness programs",
      "Community field work",
    ],
    requirements: [
      "Volunteers",
      "Skill trainers",
      "Training materials",
    ],
  },

  {
    id: "sanitation",
    image: "https://picsum.photos/400/300",
    title: "Sanitation & Hygiene",
    description:
      "Promoting sanitation, hygiene and access to safe and healthy living conditions.",
    category: "Sanitation",
    location: "Rural Communities, Maharashtra",
    objectives: [
      "Improve sanitation awareness",
      "Promote personal hygiene",
      "Encourage healthy community practices",
    ],
    activities: [
      "Hygiene awareness sessions",
      "Community cleanliness activities",
      "Sanitation awareness campaigns",
    ],
    requirements: [
      "Community volunteers",
      "Awareness materials",
      "Cleaning supplies",
    ],
  },

  {
    id: "disaster-relief",
    image: "https://picsum.photos/400/300",
    title: "Disaster Relief",
    description:
      "Supporting communities affected by disasters with essential resources and relief assistance.",
    category: "Disaster Relief",
    location: "Affected Communities, Maharashtra",
    objectives: [
      "Provide immediate support",
      "Distribute essential resources",
      "Support affected families",
    ],
    activities: [
      "Relief material distribution",
      "Community field visits",
      "Emergency support activities",
    ],
    requirements: [
      "Volunteers",
      "Relief materials",
      "Essential supplies",
    ],
  },
];