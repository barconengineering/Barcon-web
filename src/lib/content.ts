export type SitePhoto = { src: string; alt: string; caption: string };
export type Service = {
  slug: string;
  title: string;
  shortTitle: string;
  summary: string;
  description: string;
  groups: { title: string; items: string[] }[];
  image: SitePhoto;
  note?: string;
  featuredProject?: string;
  qualification?: number;
};
export type Project = {
  slug: string;
  title: string;
  category: "Water" | "Irrigation" | "Solar" | "Roads";
  status: "Completed" | "Ongoing";
  summary: string;
  location?: string;
  client?: string;
  delivery?: string;
  gallery?: SitePhoto[];
  cover?: SitePhoto;
};

export const company = {
  name: "Barcon Engineering",
  email: "info@barconengineering.com",
  phone: "+251 901 223 150",
  phoneHref: "+251901223150",
  address: "Imperial Plaza Building, Office 201",
  locality: "Woreda 02, Lemi Kura Sub-City",
  city: "Addis Ababa, Ethiopia",
};

export const services: Service[] = [
  {
    slug: "water-supply-sanitation",
    title: "Water Supply & Sanitation",
    shortTitle: "Water & sanitation",
    summary:
      "Building reliable water infrastructure for communities and institutions.",
    description:
      "Barcon Engineering is an Ethiopian Grade 1 Water Works General Contractor experienced in integrated water supply, civil works, pipelines, storage, pumping and electromechanical systems. Our work emphasizes construction quality, coordination, testing and commissioning.",
    groups: [
      {
        title: "Water storage and distribution",
        items: [
          "Reinforced concrete reservoirs, elevated tanks, public water points and pressure break tanks",
          "Water distribution networks and associated structures",
        ],
      },
      {
        title: "Pipeline construction",
        items: [
          "HDPE and DCI pipe installation, fittings, connections and associated civil works",
          "Pressure testing and network commissioning",
        ],
      },
      {
        title: "Pumping and electromechanical infrastructure",
        items: [
          "Pump houses and booster pumping stations",
          "Pump installation and electrical/control-system integration",
        ],
      },
      {
        title: "Sanitation infrastructure",
        items: [
          "Sanitation-related civil construction, including infrastructure-associated sanitation facilities",
        ],
      },
    ],
    note: "Barcon is technically capable and willing to undertake sewerage systems. Sewer infrastructure is not part of our completed project experience.",
    image: {
      src: "/images/hobicha/water-point-community.jpg",
      alt: "Community members collecting water in yellow jerrycans at a public water point",
      caption: "Hobicha community water point",
    },
    featuredProject: "hobicha-water-supply",
    qualification: 0,
  },
  {
    slug: "irrigation",
    title: "Irrigation Development",
    shortTitle: "Irrigation",
    summary:
      "Developing reliable irrigation infrastructure for sustainable agricultural production.",
    description:
      "Barcon undertakes irrigation infrastructure works drawing on hydraulic, civil, pipeline and electromechanical expertise. We connect water conveyance, control structures and pumping infrastructure to the needs of agricultural production.",
    groups: [
      {
        title: "Water conveyance and distribution",
        items: [
          "Irrigation canals and water conveyance pipelines",
          "Distribution and control structures",
        ],
      },
      {
        title: "Pumping infrastructure",
        items: [
          "Pumping infrastructure and pump houses",
          "Associated civil works and electromechanical integration",
        ],
      },
      {
        title: "Hydraulic and civil works",
        items: ["Hydraulic structures", "Earthworks and concrete works"],
      },
    ],
    image: {
      src: "/images/talato/canal-masonry-construction.jpg",
      alt: "Stone-masonry irrigation canal winding through terraced farmland",
      caption: "Canal construction at Talato",
    },
    featuredProject: "talato-solar-irrigation",
  },
  {
    slug: "buildings",
    title: "Building Construction",
    shortTitle: "Buildings",
    summary:
      "Delivering reliable, high-quality buildings and civil construction solutions.",
    description:
      "Barcon has completed institutional building work and supporting structures associated with water and other infrastructure projects. Our Grade 5 General Contractor qualification supports coordinated construction from site preparation to handover.",
    groups: [
      {
        title: "Institutional building works",
        items: [
          "Institutional and public-purpose buildings",
          "Reinforced concrete and masonry works, finishing and associated civil construction",
        ],
      },
      {
        title: "Infrastructure support buildings",
        items: [
          "Pump houses and generator houses",
          "Equipment and storage facilities",
        ],
      },
      {
        title: "Construction management",
        items: [
          "Site preparation and quality control",
          "Supervision, coordination and handover",
        ],
      },
    ],
    image: {
      src: "/images/kelle/utility-office-construction.jpg",
      alt: "Single-storey utility office with a covered veranda and blue-trimmed walls",
      caption: "Utility office construction at Kelle",
    },
    featuredProject: "kelle-water-sanitation",
    qualification: 1,
  },
  {
    slug: "road-construction-maintenance",
    title: "Road Construction & Maintenance",
    shortTitle: "Roads & maintenance",
    summary: "Connecting communities through reliable road infrastructure.",
    description:
      "Barcon’s demonstrated road experience is gravel road construction, rehabilitation and maintenance. We undertake formation, surface restoration and associated civil works appropriate to each contract.",
    groups: [
      {
        title: "Gravel road construction",
        items: [
          "Formation, grading and earthworks",
          "Gravel surfacing and compaction",
        ],
      },
      {
        title: "Rehabilitation and maintenance",
        items: [
          "Road surface restoration",
          "Routine and periodic gravel road maintenance",
        ],
      },
      {
        title: "Associated civil works",
        items: [
          "Site preparation, drainage and supporting infrastructure as applicable to contract scope",
          "Quality control and construction supervision",
        ],
      },
    ],
    image: {
      src: "/images/debub-qege-shifa/gravel-compaction.jpg",
      alt: "Road roller compacting a gravel road between fenced homesteads",
      caption: "Gravel road maintenance at Debub Qege Shifa",
    },
    featuredProject: "debub-qege-shifa-road",
  },
  {
    slug: "electromechanical",
    title: "Electromechanical Works",
    shortTitle: "Electromechanical",
    summary:
      "Reliable mechanical and electrical systems for essential infrastructure.",
    description:
      "Barcon is a Grade 5 Electromechanical Contractor with installation experience in pumping, power and water infrastructure equipment. We coordinate mechanical and electrical systems through installation, testing and commissioning.",
    groups: [
      {
        title: "Pumping systems",
        items: [
          "Submersible and surface pumps",
          "Booster pumping equipment and associated mechanical works",
        ],
      },
      {
        title: "Electrical and power",
        items: [
          "Generators and electrical control panels",
          "Power connections and integration",
        ],
      },
      {
        title: "Water infrastructure equipment",
        items: [
          "Borehole equipping",
          "Chlorination and dosing systems and associated fittings",
        ],
      },
      {
        title: "Commissioning",
        items: [
          "Installation verification and system testing",
          "Electromechanical commissioning",
        ],
      },
    ],
    image: {
      src: "/images/electro-mechanical.jpg",
      alt: "Two installed surface pumps with blue pipework and valves inside a pump house",
      caption: "Pump house electromechanical installation",
    },
    featuredProject: "kelle-water-sanitation",
    qualification: 2,
  },
  {
    slug: "solar-energy",
    title: "Solar Energy Solutions",
    shortTitle: "Solar energy",
    summary:
      "Harnessing solar energy for reliable water supply and irrigation.",
    description:
      "Barcon has installed solar systems in water supply and irrigation contexts, integrating photovoltaic power with pumps and infrastructure. Our experience connects renewable power with practical water infrastructure.",
    groups: [
      {
        title: "Solar water supply",
        items: [
          "Photovoltaic panels and supporting structures",
          "Solar-powered water pumps and borehole, reservoir and distribution integration",
        ],
      },
      {
        title: "Solar irrigation",
        items: [
          "Solar pumping equipment integrated with irrigation water infrastructure",
        ],
      },
      {
        title: "Installation and commissioning",
        items: [
          "Electrical connections and pump controls",
          "Testing and handover",
        ],
      },
    ],
    image: {
      src: "/images/WhatsApp Image 2026-10-21 at 11.03.31.jpeg",
      alt: "Installed solar panels beside a small equipment building",
      caption: "Solar panels and supporting infrastructure",
    },
    featuredProject: "solar-pumping-stations",
  },
  {
    slug: "engineering-equipment-materials",
    title: "Engineering Equipment & Materials Supply",
    shortTitle: "Equipment & materials",
    summary:
      "Supplying reliable materials and equipment for infrastructure development.",
    description:
      "Barcon supplies engineering materials and equipment for water, electromechanical, solar and civil infrastructure. Supply is matched to project specifications and requirements.",
    groups: [
      {
        title: "Water-supply materials",
        items: [
          "DCI, HDPE and GC pipes and associated fittings",
          "Valves and distribution components",
        ],
      },
      {
        title: "Electromechanical equipment",
        items: [
          "Submersible and surface pumps, generators and control panels",
          "Borehole accessories",
        ],
      },
      {
        title: "Solar equipment",
        items: ["PV panels and support structures", "Solar pumping components"],
      },
      {
        title: "Construction supplies",
        items: [
          "Civil construction materials",
          "Construction machinery, equipment and project-specific supply",
        ],
      },
    ],
    image: {
      src: "/images/dimeka/pipe-shade.jpg",
      alt: "Coils of black HDPE pipe sheltered by a steel-framed storage shed",
      caption: "HDPE pipe storage at Dimeka",
    },
    note: "DCI and HDPE installation experience is described on our water infrastructure page. GC pipes are included in our supply scope.",
  },
];

export const projects: Project[] = [
  {
    slug: "hobicha-water-supply",
    title: "Hobicha Water Supply",
    category: "Water",
    status: "Completed",
    location: "Wolayita Zone, South Ethiopia",
    client: "Ministry of Water and Energy",
    summary:
      "Rural water infrastructure combining storage, pumping, pipeline networks and public water points. Barcon Engineering delivered the project in joint venture with Bigeta Business PLC.",
    delivery: "Barcon Engineering in joint venture with Bigeta Business PLC",
    gallery: [
      {
        src: "/images/hobicha/trench-excavation-2.jpg",
        alt: "Long pipeline trench cut through red soil across dry grassland towards a eucalyptus grove",
        caption: "Pipeline trench excavation",
      },
      {
        src: "/images/hobicha/trench-excavation-1.jpg",
        alt: "View along a deep, narrow pipeline trench with steep red-soil walls",
        caption: "Trench excavation for the pipeline network",
      },
      {
        src: "/images/hobicha/sandwich-reservoir-construction.jpg",
        alt: "Circular stone-masonry reservoir under construction on a hillside, with a wooden ladder and workers at its base",
        caption: "Masonry reservoir under construction",
      },
      {
        src: "/images/hobicha/sandwich-reservoir-50m3.jpg",
        alt: "Completed circular stone-masonry reservoir with a blue-painted roof edge among eucalyptus trees",
        caption: "booster reservoir",
      },
      {
        src: "/images/hobicha/service-reservoir-300m3-1.jpg",
        alt: "Large circular concrete reservoir with a blue band and steel access ladder on a gravelled site",
        caption: "storage reservoir",
      },
      {
        src: "/images/hobicha/service-reservoir-300m3-2.jpg",
        alt: "Concrete reservoir and a small arched shelter inside a blue-post chain-link fence under a cloudy sky",
        caption: "storage reservoir compound",
      },
      {
        src: "/images/hobicha/service-reservoir-300m3-3.jpg",
        alt: "Fenced reservoir compound with a blue gate and guard house on a red-earth hilltop",
        caption: "Fenced reservoir site and guard house",
      },
      {
        src: "/images/hobicha/booster-station.jpg",
        alt: "Two people at the blue gate of a fenced booster station with a pump house and masonry reservoir",
        caption: "Booster station",
      },
      {
        src: "/images/hobicha/generator-house.jpg",
        alt: "Block generator house with blue trim inside a blue fence, beside a pole-mounted transformer and street lights",
        caption: "Generator house and grid connection",
      },
      {
        src: "/images/hobicha/water-point-construction.jpg",
        alt: "Newly built concrete water point with three taps on a slab, inside a timber and barbed-wire fence",
        caption: "Public water point under construction",
      },
      {
        src: "/images/hobicha/water-point.jpg",
        alt: "Completed concrete water point with three taps on a stone-masonry platform beneath trees",
        caption: "Public water point",
      },
      {
        src: "/images/hobicha/water-point-community.jpg",
        alt: "Women in colourful shawls filling yellow jerrycans at a public water point inside a blue fence",
        caption: "Community members collecting water",
      },
    ],
    cover: {
      src: "/images/hobicha/water-point-community.jpg",
      alt: "Women in colourful shawls filling yellow jerrycans at a public water point inside a blue fence",
      caption: "Community members collecting water",
    },
  },
  {
    slug: "kelle-water-sanitation",
    title: "Kelle Water Supply",
    category: "Water",
    status: "Ongoing",
    location: "Kelle Town, Kore Zone, South Ethiopia Regional State",
    client: "South Ethiopia Regional Water, Mines and Energy Bureau",
    summary:
      "Water supply and sanitation infrastructure combining pipeline networks, reservoirs, pumping equipment and supporting buildings. Barcon Engineering is undertaking the project in joint venture with Bigeta Business PLC.",
    delivery: "Barcon Engineering in joint venture with Bigeta Business PLC",
    gallery: [
      {
        src: "/images/kelle/reservoir-site-excavation.jpg",
        alt: "Wheeled excavator digging a large circular pit in red, rocky ground for a reservoir foundation",
        caption: "Reservoir site excavation",
      },
      {
        src: "/images/kelle/trench-excavation.jpg",
        alt: "Deep pipeline trench running across open grassland towards an excavator, workers and acacia trees",
        caption: "Pipeline trench excavation",
      },
      {
        src: "/images/kelle/pipe-laying.jpg",
        alt: "Truck-mounted crane lowering black pipe beside an open trench in savannah with mountains behind",
        caption: "Pipe laying",
      },
      {
        src: "/images/kelle/service-reservoir-500m3.jpg",
        alt: "Rendered concrete reservoir with blue trim and a rooftop room, surrounded by timber scaffolding",
        caption: "service reservoir under construction",
      },
      {
        src: "/images/kelle/reservoir-chlorination.jpg",
        alt: "Two chemical dosing tanks with valves and sight gauges on a steel frame inside a concrete chamber",
        caption: "Reservoir chlorination unit",
      },
      {
        src: "/images/kelle/submersible-pump-installation.jpg",
        alt: "Submersible pump and riser pipe suspended over a borehole from a truck, with steel pipes stacked nearby",
        caption: "Borehole submersible pump installation",
      },
      {
        src: "/images/kelle/surface-pump.jpg",
        alt: "Two green surface centrifugal pumps with blue valves and galvanised pipework in a concrete pump pit",
        caption: "Surface pump installation",
      },
      {
        src: "/images/kelle/generator-house-construction.jpg",
        alt: "Concrete-block generator house with louvred openings beyond a new chain-link fence",
        caption: "Generator house construction",
      },
      {
        src: "/images/kelle/generator-construction.jpg",
        alt: "Block generator house and a second block structure inside a fenced compound under a stormy sky",
        caption: "Generator house and compound",
      },
      {
        src: "/images/kelle/generator.jpg",
        alt: "Large diesel generator set with control panel being installed inside a block generator house",
        caption: "Diesel generator installation",
      },
      {
        src: "/images/kelle/utility-office-construction.jpg",
        alt: "Single-storey utility office with blue-trimmed walls and a covered veranda behind a gravelled yard",
        caption: "Utility office construction",
      },
      {
        src: "/images/kelle/guard-house.jpg",
        alt: "Small rendered guard house with a blue door and window on a concrete apron beside a transformer pole",
        caption: "Guard house",
      },
      {
        src: "/images/kelle/water-points-construction.jpg",
        alt: "Newly cast concrete water point with three taps on a slab, on a hillside with trees",
        caption: "Public water point under construction",
      },
    ],
    cover: {
      src: "/images/kelle/service-reservoir-500m3.jpg",
      alt: "Rendered concrete reservoir with blue trim and a rooftop room, surrounded by timber scaffolding",
      caption: "service reservoir under construction",
    },
  },
  {
    slug: "ade-dawe-phase-ii",
    title: "Ade-Dawe Phase II Water Supply",
    category: "Water",
    status: "Completed",
    summary:
      "Phase II water supply project, included in Barcon Engineering’s selected project portfolio.",
  },
  {
    slug: "solar-pumping-stations",
    title: "Solarization of Three Rural Pumping Stations",
    category: "Solar",
    status: "Completed",
    location:
      "Beneya, Burji Zone; Garbota and Birbiskela, Gedeo Zone — South Ethiopia",
    client: "South Ethiopia Regional State Water and Energy Bureau",
    summary:
      "Solarization of three rural pumping stations at Beneya, Garbota and Birbiskela in South Ethiopia. Barcon Engineering delivered the project in joint venture with Ehun Business PLC.",
    delivery: "Barcon Engineering in joint venture with Ehun Business PLC",
  },
  {
    slug: "dimeka-town-water",
    title: "Dimeka Water Supply & Sanitation",
    category: "Water",
    status: "Ongoing",
    location: "Dimeka, Ethiopia",
    client: "Ministry of Water and Energy",
    summary:
      "Water supply and sanitation infrastructure combining pumping equipment, pressure mains, distribution and storage. The project also includes public water points and operational buildings.",
    gallery: [
      {
        src: "/images/dimeka/service-reservoir-200m3.jpg",
        alt: "Circular concrete reservoir with a blue band and vertical stripe on a red-earth site under a cloudy sky",
        caption: "service reservoir",
      },
      {
        src: "/images/dimeka/service-reservoir-2.jpg",
        alt: "Rendered concrete reservoir with a light-blue band on a circular apron, with trees and a worker in the background",
        caption: "Service reservoir",
      },
      {
        src: "/images/dimeka/pipe-shade.jpg",
        alt: "Long steel-framed pipe storage shed with a corrugated roof sheltering coils of black HDPE pipe",
        caption: "Pipe storage shed",
      },
      {
        src: "/images/dimeka/water-point-1.jpg",
        alt: "Concrete public water point on a slab with a galvanised steel door and fence posts being installed",
        caption: "Public water point and fencing",
      },
      {
        src: "/images/dimeka/water-point-2.jpg",
        alt: "Concrete public water point on a raised slab inside a new galvanised post and barbed-wire fence",
        caption: "Public water point",
      },
    ],
    cover: {
      src: "/images/dimeka/service-reservoir-200m3.jpg",
      alt: "Circular concrete reservoir with a blue band and vertical stripe on a red-earth site under a cloudy sky",
      caption: "service reservoir",
    },
  },
  {
    slug: "soka-sonicho-asrado-dama",
    title: "Soka-Sonicha Asrado Dama Phase II",
    category: "Water",
    status: "Completed",
    location: "Gorche Woreda, Sidama Region",
    client: "Sidama National Regional State Water, Mines and Energy Bureau",
    summary:
      "Rural water supply infrastructure combining pipelines, water storage and community water points with civil and electromechanical works. Barcon Engineering participated in joint venture with Shimelis Alemu GWWC.",
    delivery: "Barcon Engineering in joint venture with Shimelis Alemu GWWC",
  },
  {
    slug: "talato-solar-irrigation",
    title: "Talato Small Scale Irrigation (SSIP) – LOT-5",
    category: "Irrigation",
    status: "Ongoing",
    location: "Konso Zone, Ethiopia",
    client: "South Ethiopia Regional State Bureau of Agriculture",
    summary:
      "Small-scale irrigation infrastructure combining solar-powered pumping, pressure mains and canal works. The project includes associated hydraulic and civil structures.",
    gallery: [
      {
        src: "/images/talato/canal-excavation.jpg",
        alt: "Freshly excavated irrigation canal trench with spoil heaped alongside, crossing dry hillside farmland",
        caption: "Canal excavation",
      },
      {
        src: "/images/talato/canal-masonry-construction.jpg",
        alt: "Stone-masonry irrigation canal winding across terraced farmland and trees, with stockpiled stone along its route",
        caption: "Canal masonry construction in progress",
      },
      {
        src: "/images/talato/canal-masonry-work.jpg",
        alt: "View along a stone-masonry canal with a concrete bed under construction, a worker and truck beside it and hills behind",
        caption: "Masonry canal walls and bed",
      },
    ],
    cover: {
      src: "/images/talato/canal-masonry-work.jpg",
      alt: "View along a stone-masonry canal with a concrete bed under construction, a worker and truck beside it and hills behind",
      caption: "Masonry canal walls and bed",
    },
  },
  {
    slug: "karat-town-water",
    title: "Karat Water Supply",
    category: "Water",
    status: "Completed",
    location: "Konso Zone, South Ethiopia",
    client: "South Ethiopia Regional State Water and Energy Bureau",
    summary:
      "Water infrastructure works covering pressure pipelines, storage-related civil works and electromechanical equipment. Barcon Engineering participated in joint venture with Bigeta Business PLC.",
    delivery: "Barcon Engineering in joint venture with Bigeta Business PLC",
  },
  {
    slug: "dongoro-bonkoya-wash",
    title: "Dongoro Bonkoya Phase II Water Supply",
    category: "Water",
    status: "Ongoing",
    location: "Central Ethiopia",
    client:
      "Central Ethiopia Regional Water, Irrigation and Mines Development Bureau",
    summary:
      "Water supply works covering pressure and distribution pipelines, public water points and associated chambers. The project includes pipe installation and commissioning.",
  },
  {
    slug: "debub-qege-shifa-road",
    title: "Debub Qege Shifa Gravel Road Maintenance",
    category: "Roads",
    status: "Completed",
    location: "Sidama, Ethiopia",
    client:
      "Sidama National Regional State Road Development and Transport Bureau",
    summary:
      "Maintenance and rehabilitation of an existing gravel road corridor. The works include surface repairs, road blading and associated drainage structures.",
    gallery: [
      {
        src: "/images/debub-qege-shifa/bedding-under-construction.jpg",
        alt: "Motor grader shaping a rough earth road between eucalyptus trees and banana plantations, with rocks along the verge",
        caption: "Road bedding under construction",
      },
      {
        src: "/images/debub-qege-shifa/bedding-work.jpg",
        alt: "Motor grader working on the road approach to a crossing with stone-masonry parapet walls on both sides",
        caption: "Bedding work at a crossing",
      },
      {
        src: "/images/debub-qege-shifa/select-compaction.jpg",
        alt: "Wide compacted red-earth road with dug side ditches, a gravel stockpile and machinery further along through a village",
        caption: "Selected material compaction",
      },
      {
        src: "/images/debub-qege-shifa/gravel-compaction.jpg",
        alt: "Freshly laid gravel road surface with a roller compacting further ahead between fenced homesteads",
        caption: "Gravel surface compaction",
      },
    ],
    cover: {
      src: "/images/debub-qege-shifa/gravel-compaction.jpg",
      alt: "Freshly laid gravel road surface with a roller compacting further ahead between fenced homesteads",
      caption: "Gravel surface compaction",
    },
  },
];

export const vision =
  "To become a leading engineering and construction company in Ethiopia and beyond, recognized for technical excellence, integrity, and sustainable infrastructure solutions that transform communities and drive development.";

export const mission =
  "To deliver reliable, high-quality engineering and construction solutions through skilled professionals, appropriate technologies, and responsible project management, creating lasting value for clients, communities, and the environment.";

export const valuesIntro =
  "At Barcon Engineering, our values guide every decision we make and every project we deliver. They are the foundation of our identity and the driving force behind our success.";

export const values = [
  [
    "Integrity",
    "We uphold honesty, transparency, and ethical standards in everything we do.",
  ],
  [
    "Quality & Excellence",
    "We deliver reliable, efficient, and sustainable engineering solutions that exceed expectations.",
  ],
  [
    "Customer Focus",
    "We put our clients at the center of our work, building trust through responsiveness and commitment.",
  ],
  [
    "Innovation",
    "We embrace creativity, modern technology, and continuous improvement to provide smarter solutions.",
  ],
  [
    "Teamwork & Accountability",
    "We work collaboratively, respect each other, and take full responsibility for our actions and results.",
  ],
];

export const qualifications = [
  {
    title: "Water Works General Contractor — Grade 1",
    issuer: "Ethiopian Construction Authority",
    document: "/documents/water-works-competency.pdf",
  },
  {
    title: "General Contractor — Grade 5",
    issuer: "Ethiopian Construction Authority",
    document: "/documents/general-contractor-competency.pdf",
  },
  {
    title: "Electromechanical Contractor — Grade 5",
    issuer: "Petroleum and Energy Authority",
    document: "/documents/electromechanical-competency.pdf",
  },
];

export const process = [
  {
    title: "Plan",
    text: "Understand the requirements, review site conditions and agree the scope and delivery sequence.",
  },
  {
    title: "Procure",
    text: "Coordinate materials, equipment and specialist resources around the project requirements.",
  },
  {
    title: "Build",
    text: "Bring civil, hydraulic and electromechanical work together, with attention to quality and safety.",
  },
  {
    title: "Handover",
    text: "Coordinate testing, client inspections and the documentation required for project handover.",
  },
];

export const communityVideo = {
  eyebrow: "Social responsibility",
  title: "Serving the community",
  text: "A public water point serving the Hobicha community, part of the rural water supply project delivered in joint venture with Bigeta Business PLC.",
  src: "/videos/hobicha-community.mp4",
  poster: "/videos/hobicha-community-poster.jpg",
  label: "Hobicha community water point video",
  caption: "Community water access at Hobicha.",
};
