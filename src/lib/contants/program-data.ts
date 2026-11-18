export type GalleryPhoto = {
  src: string
  alt: string
}

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
  gallery: GalleryPhoto[]
}

/**
 * Builds a stable set of gallery photos for a program.
 * Pass as many captions as needed — the gallery grid and lightbox adapt
 * to any number of photos. Photos use seeded URLs so each program always
 * gets the same images.
 */
function buildGallery(id: string, captions: string[]): GalleryPhoto[] {
  return captions.map((caption, index) => ({
    src: `https://picsum.photos/seed/${id}-${index + 1}/1000/750`,
    alt: caption,
  }))
}

export const programs: Program[] = [
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
    gallery: buildGallery("education-support", [
      "Learning session with students",
      "Distribution of learning materials",
      "Classroom visit in a rural school",
      "Community meeting with parents",
      "Reading activity with children",
      "Volunteer-led study circle",
      "Science activity in the classroom",
      "Distribution of school kits",
      "Career guidance session",
      "Art and craft workshop",
      "Sports day with students",
      "Parents meeting at the community centre",
    ]),
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
    gallery: buildGallery("healthcare", [
      "Medical camp in progress",
      "Health checkup for community members",
      "Awareness session on hygiene",
      "Consultation with a doctor",
      "Distribution of essential medicines",
      "Health screening for women",
      "Eye checkup camp",
      "Nutrition awareness session",
      "Maternal health workshop",
      "Free medicine distribution",
      "Health talk at a village school",
      "Follow-up visit to families",
    ]),
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
    requirements: ["Skill trainers", "Volunteers", "Training materials"],
    gallery: buildGallery("women-empowerment", [
      "Skill development workshop",
      "Women learning tailoring",
      "Awareness session for women",
      "Hands-on training session",
      "Community interaction with participants",
      "Livelihood skills practice",
      "Sewing machine distribution",
      "Financial literacy session",
      "Self-help group meeting",
      "Beauty and wellness training",
      "Product making workshop",
      "Market visit with participants",
    ]),
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
    requirements: ["Volunteers", "Skill trainers", "Training materials"],
    gallery: buildGallery("livelihood", [
      "Livelihood training session",
      "Field work with farmers",
      "Practical skills demonstration",
      "Workshop on income generation",
      "Support session for families",
      "Hands-on training in the field",
      "Farmers learning new techniques",
      "Seed distribution drive",
      "Dairy management session",
      "Small business planning workshop",
      "Kitchen garden training",
      "Market linkage meeting",
    ]),
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
    gallery: buildGallery("sanitation", [
      "Hygiene awareness session",
      "Community cleanliness drive",
      "Handwashing demonstration",
      "Sanitation awareness campaign",
      "School hygiene activity",
      "Clean water and sanitation support",
      "Toilet construction awareness",
      "Clean village rally",
      "Menstrual hygiene session",
      "Water safety demonstration",
      "Waste segregation training",
      "School sanitation drive",
    ]),
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
    requirements: ["Volunteers", "Relief materials", "Essential supplies"],
    gallery: buildGallery("disaster-relief", [
      "Relief material distribution",
      "Supporting affected families",
      "Field visit to impacted areas",
      "Emergency supplies preparation",
      "Community relief camp",
      "Volunteers during relief work",
      "Food kit distribution",
      "Temporary shelter support",
      "Medical help at relief camp",
      "Clothing donation drive",
      "Rebuilding support for families",
      "Coordination with local volunteers",
    ]),
  },
]
