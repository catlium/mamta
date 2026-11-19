export type GalleryPhoto = {
  src: string
  alt: string
}

export type Program = {
  id: string
  image: string
  title: string
  shortDescription: string
  description: string
  category: string
  location: string
  objectives: string[]
  activities: string[]
  requirements: string[]
  gallery: GalleryPhoto[]
}

/**
 * Uploaded event photos live in `src/assets/programs/<program-id>/`.
 * Vite collects them at build time, so adding a new image to a program
 * folder automatically includes it in that program's gallery.
 */
const programPhotoModules = import.meta.glob<string>(
  "../../assets/programs/**/*.{jpg,jpeg,png,webp}",
  { eager: true, import: "default" }
)

function getProgramPhotos(programId: string): string[] {
  return Object.entries(programPhotoModules)
    .filter(([path]) => path.includes(`/programs/${programId}/`))
    .sort(([a], [b]) => a.localeCompare(b, undefined, { numeric: true }))
    .map(([, src]) => src)
}

/**
 * Builds the gallery from the photos uploaded for a program.
 * Captions are matched to photos in filename order, and the grid and
 * lightbox adapt to any number of photos.
 */
function buildGallery(id: string, captions: string[]): GalleryPhoto[] {
  return getProgramPhotos(id).map((src, index) => ({
    src,
    alt:
      captions[index] ?? `Photo from the ${id.replaceAll("-", " ")} programme`,
  }))
}

function getCoverImage(id: string): string {
  return getProgramPhotos(id)[0] ?? `https://picsum.photos/seed/${id}/1200/800`
}

export const programs: Program[] = [
  {
    id: "childrens-day-legal-awareness",
    image: getCoverImage("childrens-day-legal-awareness"),
    title:
      "Children’s Day & Legal Services Day – Awareness, Inclusion and Empowerment",
    shortDescription:
      "An awareness programme promoting disability rights, child protection, legal awareness and inclusive opportunities for children.",
    description:
      "On 14th November, an interactive awareness session was organised in Vikhroli on the occasion of Children’s Day and Legal Services Day. The programme was organised by the District Legal Services Authority (DLSA), in collaboration with Rahi Samajik Sanstha, Samvedna Foundation and Nyaaya Organisation. The session focused on the rights, protection, inclusion and empowerment of children with disabilities, bringing together parents, educators and representatives working towards their welfare. Through discussions on disability rights, child protection laws and inclusive sports, the programme highlighted the importance of equal opportunities, dignity and access to legal rights and government entitlements for every child.",
    category: "Child Rights & Disability Inclusion",
    location: "Vikhroli, Mumbai, Maharashtra",
    objectives: [
      "Create awareness among parents about the rights and entitlements of children with disabilities.",
      "Improve understanding of government schemes, benefits and support available to persons with disabilities.",
      "Raise awareness about the Protection of Children from Sexual Offences (POCSO) Act and child protection.",
      "Promote equal opportunities for children with disabilities in sports and other activities.",
      "Encourage inclusion, dignity, safety and empowerment of children with disabilities.",
    ],
    activities: [
      "Interactive awareness session on the rights of children with disabilities conducted by Ms. Vanita Kamble from Rahi Samajik Sanstha.",
      "Discussion with parents about challenges in accessing government schemes, benefits and disability-related entitlements.",
      "Awareness session on the POCSO Act conducted by Adv. Swati Kaire from Nyaaya Organisation.",
      "Discussion on child safety, protection laws and the importance of legal awareness among parents.",
      "Session on inclusive sports and equal sporting opportunities led by Mrs. Priti Shirsesker, Principal of Samvedna Educational and Therapy Centre, and Mr. Vinod Chalke, Sports Teacher at MDK Homes.",
      "Discussion on sponsorship and institutional support to help children with disabilities pursue sporting opportunities, including participation in the Olympics.",
    ],
    requirements: [],
    gallery: buildGallery("childrens-day-legal-awareness", [
      "Children, parents and organisers at the Children’s Day and Legal Services Day programme",
      "Ms. Vanita Kamble addressing the disability rights awareness session",
      "Parents attending the session on the rights of children with disabilities",
      "Participants listening to the discussion on child protection and legal rights",
      "Panel discussion on government schemes, benefits and entitlements",
      "Adv. Swati Kaire speaking on the POCSO Act and child safety",
      "Parents engaging with the session on inclusion and empowerment",
      "Organisers and participants at the National Legal Services Day programme",
    ]),
  },
  {
    id: "menstrual-health-hygiene-vashinaka",
    image: getCoverImage("menstrual-health-hygiene-vashinaka"),
    title: "Menstrual Health & Hygiene Awareness and Sanitary Pad Distribution",
    shortDescription:
      "Promoting menstrual health and personal hygiene through awareness sessions and sanitary pad distribution among women in Vashinaka.",
    description:
      "On 8th March 2023, Mamta Samajeek Sanstha organised a Menstrual Health and Hygiene Awareness Programme along with a sanitary pad distribution drive at Vashinaka. The initiative aimed to educate women about menstrual health, personal hygiene and proper sanitation practices while supporting their menstrual hygiene needs through the distribution of sanitary pads. The programme reached hundreds of women, encouraging awareness and healthier menstrual hygiene practices within the community.",
    category: "Women's Health & Hygiene",
    location: "Vashinaka, Mumbai, Maharashtra",
    objectives: [
      "Create awareness about menstrual health and hygiene among women.",
      "Promote personal hygiene and proper sanitation practices during menstruation.",
      "Improve access to sanitary pads through distribution.",
      "Encourage informed and healthy menstrual hygiene practices within the community.",
    ],
    activities: [
      "Menstrual health and hygiene awareness programme for women.",
      "Information sharing on personal hygiene and proper sanitation during menstruation.",
      "Distribution of sanitary pads to women in Vashinaka.",
      "Community outreach to promote menstrual health awareness.",
    ],
    requirements: [],
    gallery: buildGallery("menstrual-health-hygiene-vashinaka", [
      "Women at the menstrual health and hygiene awareness programme in Vashinaka",
      "Sanitary pads being distributed to women at the community programme",
      "Distribution of sanitary pads during the awareness drive",
      "Women participating in the menstrual health awareness session",
      "Community gathering for the menstrual hygiene programme",
      "Women and girls attending the awareness session",
      "Sanitary pad distribution at Vashinaka",
      "Awareness session on menstrual health and personal hygiene",
      "Community members at the menstrual hygiene awareness programme",
    ]),
  },
  {
    id: "water-drum-distribution-palghar",
    image: getCoverImage("water-drum-distribution-palghar"),
    title: "Water Drum Distribution for Women in Water-Scarce Communities",
    shortDescription:
      "Supporting 350 women in water-scarce villages of Palghar district through the distribution of 45-litre water storage drums to reduce the daily burden of water collection.",
    description:
      "In 2023, Mamta Samajeek Sanstha organised a water drum distribution initiative for women in Sayvan and surrounding water-scarce villages of Palghar district. Recognising the physical difficulties and daily challenges women face in collecting and carrying water over long distances, the initiative provided 350 women with 45-litre water storage drums manufactured by Nilkamal. Supported through funding from BYK Company, the programme aimed to make household water storage easier, reduce repeated trips to collect water and help ease the physical burden on women. The initiative also highlighted the importance of women's health, safety, girls' education and community welfare in water-scarce areas.",
    category: "Women Empowerment & Community Welfare",
    location: "Sayvan and surrounding villages, Palghar District, Maharashtra",
    objectives: [
      "Reduce the need for women to travel long distances repeatedly to collect water.",
      "Help minimise the physical and mental strain associated with carrying water.",
      "Reduce the burden on the neck, back and waist caused by carrying heavy water containers.",
      "Provide pregnant women with easier household water storage facilities and reduce the need to carry heavy loads.",
      "Help reduce situations where girls may miss school due to household water collection responsibilities.",
      "Promote convenient and safer water storage at the household level.",
    ],
    activities: [
      "Identification of women from water-scarce communities in Sayvan and surrounding villages.",
      "Selection of 350 women as beneficiaries of the initiative.",
      "Distribution of one 45-litre Nilkamal water storage drum to each beneficiary.",
      "Community participation and awareness regarding water scarcity and its impact on women's health and safety.",
      "Discussions highlighting women's welfare, girls' education and community participation.",
    ],
    requirements: [],
    gallery: buildGallery("water-drum-distribution-palghar", [
      "Community gathering at Sayvan village for the water drum distribution programme",
      "Women from water-scarce villages attending the programme",
      "A water storage drum being handed over to a woman beneficiary",
      "A village lane in the water-scarce Palghar region",
      "Water storage drums stacked and ready for the distribution drive",
      "Village residents discussing water challenges with the team",
      "Awareness meeting on water scarcity and women’s welfare",
      "Community members gathered at the water drum distribution programme",
      "45-litre water storage drums ready for distribution",
      "A dry village path reflecting the region’s water scarcity",
      "Homes and cattle in a village of Palghar district",
      "Water drums stored for the community distribution drive",
      "Women waiting to receive their water storage drums",
    ]),
  },
  {
    id: "drug-free-mumbai-pledge-2026",
    image: getCoverImage("drug-free-mumbai-pledge-2026"),
    title: "Drug-Free Mumbai – Collective Pledge Programme",
    shortDescription:
      "A collective pledge programme organised on the occasion of Mahatma Gandhi and Lal Bahadur Shastri Jayanti as part of the Drug-Free Mumbai campaign.",
    description:
      "A collective pledge programme was announced for 7 October 2026 at Azad Maidan, Mumbai, on the occasion of Mahatma Gandhi and Lal Bahadur Shastri Jayanti. The programme was organised by Nasha Bandi Mandal Maharashtra State, inviting social organisations and members of the public to participate in the Drug-Free Mumbai campaign and take a collective pledge towards a drug-free society.",
    category: "Drug Awareness & Prevention",
    location: "Azad Maidan, CSMT, Mumbai, Maharashtra",
    objectives: [],
    activities: [],
    requirements: [],
    gallery: buildGallery("drug-free-mumbai-pledge-2026", [
      "Volunteers and participants at the Drug-Free Mumbai rally",
      "Participants taking the collective pledge for a drug-free society",
      "Students and social organisations at the pledge programme",
      "Women’s groups holding banners at the Drug-Free Mumbai event",
      "Social organisations participating in the awareness rally",
      "Crowd gathered at Azad Maidan for the Drug-Free Mumbai programme",
      "Volunteers leading the collective pledge against substance abuse",
      "Participants with anti-drug placards and banners",
      "Students raising awareness against drug abuse",
      "Volunteers in masks and placards spreading the anti-drug message",
      "Awareness rally participants carrying anti-drug signs",
      "Nasha Bandi Mandal and partner organisations at the event",
      "Crowd at the Drug-Free Mumbai awareness programme",
      "Placard reading “Drugs Kill You Slowly” at the rally",
      "Participants holding awareness messages against drug abuse",
      "Volunteers and participants at the Drug-Free Mumbai pledge programme",
    ]),
  },
  {
    id: "ration-card-distribution-cancer-patients-2025",
    image: getCoverImage("ration-card-distribution-cancer-patients-2025"),
    title: "Ration Card Distribution for Children of Cancer Patients",
    shortDescription:
      "An initiative supporting children of cancer patients staying at Sant Gadge Maharaj Trust in Dadar during medical treatment.",
    description:
      "In 2025, Nishchal Foundation India and Mamta Samajeek Sanstha jointly undertook an initiative at Sant Gadge Maharaj Trust in Dadar, where temporary accommodation is provided to cancer patients undergoing treatment. As part of this initiative, ration cards were distributed to children associated with the patients, with the aim of supporting families facing challenges during the treatment period.",
    category: "Community Welfare & Social Support",
    location: "Sant Gadge Maharaj Trust, Dadar, Mumbai, Maharashtra",
    objectives: [],
    activities: [
      "Ration card distribution to children associated with cancer patients.",
    ],
    requirements: [],
    gallery: [],
  },
  {
    id: "drug-free-campaign-pledge-2025",
    image: getCoverImage("drug-free-campaign-pledge-2025"),
    title: "Drug-Free Campaign – Collective Pledge",
    shortDescription:
      "A collective pledge initiative held on 2 October 2025 in collaboration with Nasha Mukti Mahamandal and various social organisations to promote a drug-free society.",
    description:
      "On 2 October 2025, Mamta Samajeek Sanstha joined Nasha Mukti Mahamandal and various social organisations and associations in taking a collective pledge as part of the Drug-Free Campaign. The initiative brought organisations together to support the message of a drug-free society and promote collective social responsibility towards preventing substance abuse.",
    category: "Drug Awareness & Prevention",
    location: "",
    objectives: [],
    activities: [
      "Participation in a collective pledge as part of the Drug-Free Campaign.",
      "Collaboration with Nasha Mukti Mahamandal and various social organisations.",
    ],
    requirements: [],
    gallery: [],
  },
  {
    id: "azadi-ka-amrit-mahotsav-awareness-2023",
    image: getCoverImage("azadi-ka-amrit-mahotsav-awareness-2023"),
    title:
      "Azadi Ka Amrit Mahotsav – Awareness of Government Rights and Entitlements",
    shortDescription:
      "A community outreach initiative organised at Bandra Government Colony to help ensure that people are aware of and can access their government rights and entitlements.",
    description:
      "In 2023, as part of the Azadi Ka Amrit Mahotsav celebrations marking 75 years of India's independence, Mamta Samajeek Sanstha participated in organising a community gathering at Bandra Government Colony. The programme was conducted in collaboration with the District Legal Services Authority, various social organisations and the Cooperative Department. The initiative focused on identifying individuals who remained deprived of government schemes and entitlements and spreading awareness so that eligible people could understand and access their rights and available benefits.",
    category: "Legal Awareness & Community Welfare",
    location: "Bandra Government Colony, Mumbai, Maharashtra",
    objectives: [
      "Create awareness about government rights and entitlements.",
      "Identify individuals who may be deprived of government schemes and benefits.",
      "Encourage access to eligible government welfare schemes.",
      "Promote awareness of citizens' rights through community participation.",
    ],
    activities: [
      "Organisation of a community gathering as part of Azadi Ka Amrit Mahotsav.",
      "Collaboration with the District Legal Services Authority, social organisations and the Cooperative Department.",
      "Community outreach to identify people deprived of government benefits and entitlements.",
    ],
    requirements: [],
    gallery: buildGallery("azadi-ka-amrit-mahotsav-awareness-2023", [
      "Community gathering at Bandra Government Colony for Azadi Ka Amrit Mahotsav",
      "Women participating in the community awareness programme",
      "Organisers and participants at the awareness gathering",
      "Team members at the Azadi Ka Amrit Mahotsav programme",
      "Community members and organisers at the event",
      "Volunteers and organisers at the awareness programme",
      "Awareness session with women on government rights and entitlements",
    ]),
  },
]
