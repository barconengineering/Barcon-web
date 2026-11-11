export type SitePhoto = {
  src: string;
  alt: string;
  caption: string;
  position?: string;
};
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
export type Recognition = {
  eyebrow: string;
  title: string;
  text: string[];
  image: SitePhoto;
};
export type HomeStat = {
  id: "founded" | "projects" | "expertise";
  value: string;
  label: string;
  labelFirst?: boolean;
};

export const company = {
  name: "Barcon Engineering",
  founded: 2016,
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
        title: "Technical capabilities",
        items: [
          "Irrigation canals and water conveyance pipelines",
          "Distribution and control structures",
          "Pumping infrastructure and pump houses",
          "Associated civil works and electromechanical integration",
          "Hydraulic structures",
          "Earthworks and concrete works",
        ],
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
      position: "50% 15%",
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
        title: "System installation and commissioning",
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
      position: "50% 60%",
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
      "Rural water supply with storage, pumping, pipeline networks and public water points. Delivered by Barcon Engineering in joint venture with Bigeta Business PLC.",
    delivery: "Barcon Engineering in joint venture with Bigeta Business PLC",
    gallery: [
      {
        src: "/images/hobicha/trench-excavation-2.jpg",
        alt: "Long pipeline trench cut through red soil across dry grassland towards a eucalyptus grove",
        caption: "Pipeline trench excavation",
      },
      {
        src: "/images/hobicha/sandwich-reservoir-construction.jpg",
        alt: "Circular stone-masonry reservoir under construction on a hillside, with a wooden ladder and workers at its base",
        caption: "Masonry reservoir under construction",
      },
      {
        src: "/images/hobicha/sandwich-reservoir-01.jpg",
        alt: "Completed circular stone-masonry reservoir with a blue-painted roof edge among eucalyptus trees",
        caption: "Booster reservoir",
      },
      {
        src: "/images/hobicha/service-reservoir-02.jpg",
        alt: "Concrete reservoir and a small arched shelter inside a blue-post chain-link fence under a cloudy sky",
        caption: "Storage reservoir compound",
      },
      {
        src: "/images/hobicha/service-reservoir-03.jpg",
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
      "Water supply and sanitation works with pipelines, reservoirs, pumping equipment and support buildings. Undertaken in joint venture with Bigeta Business PLC.",
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
        src: "/images/kelle/service-reservoir-01.jpg",
        alt: "Rendered concrete reservoir with blue trim and a rooftop room, surrounded by timber scaffolding",
        caption: "Service reservoir under construction",
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
        alt: "Two green surface centrifugal pumps with blue valves and pipework in a concrete pump pit",
        caption: "Surface pump installation",
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
      src: "/images/kelle/service-reservoir-01.jpg",
      alt: "Rendered concrete reservoir with blue trim and a rooftop room, surrounded by timber scaffolding",
      caption: "Service reservoir under construction",
    },
  },
  {
    slug: "ade-dawe-phase-ii",
    title: "Ade-Dawe Phase II Water Supply",
    category: "Water",
    status: "Completed",
    summary:
      "Barcon Engineering completed Phase II of the Ade-Dawe water supply scheme. Further project details will be added once confirmed by the client.",
    gallery: [
      {
        src: "/images/ade-dawe/service-reservoir.jpg",
        alt: "Circular rendered concrete reservoir with a timber ladder inside a new post-and-wire fence, beside a white plastic tank",
        caption: "Service reservoir",
      },
      {
        src: "/images/ade-dawe/valve-chamber-01.jpg",
        alt: "Rendered masonry valve chamber with a white steel access cover set into excavated red soil",
        caption: "Masonry valve chamber",
      },
      {
        src: "/images/ade-dawe/water-point.jpg",
        alt: "Concrete public water point on a slab inside a new timber-post and barbed-wire fence with a corrugated metal gate",
        caption: "Public water point",
      },
      {
        src: "/images/ade-dawe/water-point-community.jpg",
        alt: "Water running from the taps of a public water point while community members gather behind the fence",
        caption: "Water flowing at the public water point",
      },
    ],
    cover: {
      src: "/images/ade-dawe/water-point-community.jpg",
      alt: "Water running from the taps of a public water point while community members gather behind the fence",
      caption: "Water flowing at the public water point",
    },
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
      "Solarization of three rural pumping stations at Beneya, Garbota and Birbiskela. Delivered in joint venture with Ehun Business PLC.",
    delivery: "Barcon Engineering in joint venture with Ehun Business PLC",
    gallery: [
      {
        src: "/images/solar/pumping-station-aerial-01.jpg",
        alt: "Aerial view of a fenced solar array beside a pump house, with community members gathered outside the fence among banana plants",
        caption: "Solar array and pump house",
      },
      {
        src: "/images/solar/pumping-station-aerial-02.jpg",
        alt: "Overhead view of two rows of solar panels inside a mesh fence next to a block pump house, surrounded by enset and banana gardens",
        caption: "Fenced solar pumping station",
      },
      {
        src: "/images/solar/solar-array-overhead.jpg",
        alt: "Top-down drone view of two long rows of photovoltaic panels on steel supports inside a fenced compound",
        caption: "Photovoltaic array",
      },
      {
        src: "/images/solar/solar-array-landscape.jpg",
        alt: "Solar array and pump house in a fenced compound with forested hills behind and visitors standing by the gate",
        caption: "Completed solar installation",
      },
      {
        src: "/images/solar/handover-team.jpg",
        alt: "Group of stakeholders standing in front of a block pump house beside rows of solar panels",
        caption: "Site visit at the pump house",
      },
    ],
    cover: {
      src: "/images/solar/pumping-station-aerial-01.jpg",
      alt: "Aerial view of a fenced solar array beside a pump house, with community members gathered outside the fence among banana plants",
      caption: "Solar array and pump house",
    },
  },
  {
    slug: "dimeka-town-water",
    title: "Dimeka Water Supply & Sanitation",
    category: "Water",
    status: "Ongoing",
    location: "Dimeka, Ethiopia",
    client: "Ministry of Water and Energy",
    summary:
      "Water supply and sanitation works covering pumping, pressure mains, distribution and storage. Includes public water points and operational buildings.",
    gallery: [
      {
        src: "/images/dimeka/service-reservoir-01.jpg",
        alt: "Circular concrete reservoir with a blue band and vertical stripe on a red-earth site under a cloudy sky",
        caption: "Service reservoir",
      },
      {
        src: "/images/dimeka/pipe-shade.jpg",
        alt: "Long steel-framed pipe storage shed with a corrugated roof sheltering coils of black HDPE pipe",
        caption: "Pipe storage shed",
      },
      {
        src: "/images/dimeka/water-point-1.jpg",
        alt: "Concrete public water point on a slab with a steel door and fence posts being installed",
        caption: "Public water point and fencing",
      },
    ],
    cover: {
      src: "/images/dimeka/service-reservoir-01.jpg",
      alt: "Circular concrete reservoir with a blue band and vertical stripe on a red-earth site under a cloudy sky",
      caption: "Service reservoir",
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
      "Rural water supply with pipelines, storage, community water points, and civil and electromechanical works. Delivered in joint venture with Shimelis Alemu GWWC.",
    delivery: "Barcon Engineering in joint venture with Shimelis Alemu GWWC",
    gallery: [
      {
        src: "/images/soka-sonicha/service-reservoir.jpg",
        alt: "Large circular concrete reservoir with a blue band and steel access ladder on a gravelled site",
        caption: "Storage reservoir",
      },
      {
        src: "/images/soka-sonicha/trench-excavation.jpg",
        alt: "View along a deep, narrow pipeline trench with steep red-soil walls",
        caption: "Pipeline trench excavation",
      },
      {
        src: "/images/soka-sonicha/water-point.jpg",
        alt: "Concrete public water point on a raised slab inside a new steel post and barbed-wire fence",
        caption: "Public water point",
      },
    ],
  },
  {
    slug: "talato-solar-irrigation",
    title: "Talato Small Scale Irrigation (SSIP) – LOT-5",
    category: "Irrigation",
    status: "Ongoing",
    location: "Konso Zone, Ethiopia",
    client: "South Ethiopia Regional State Bureau of Agriculture",
    summary:
      "Small-scale irrigation infrastructure combining pressure mains and canal works. The project includes associated hydraulic and civil structures.",
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
      "Water works covering pressure pipelines, storage-related civil works and electromechanical equipment. Delivered in joint venture with Bigeta Business PLC.",
    delivery: "Barcon Engineering in joint venture with Bigeta Business PLC",
    gallery: [
      {
        src: "/images/karat/service-reservoir.jpg",
        alt: "Rendered concrete reservoir with a light-blue band on a circular apron, with trees in the background",
        caption: "Service reservoir",
      },
      {
        src: "/images/karat/pipe-laying.jpg",
        alt: "Truck-mounted crane lowering black pipe beside an open trench in savannah with mountains behind",
        caption: "Pipe laying",
      },
      {
        src: "/images/karat/generator-house.jpg",
        alt: "Concrete-block generator house with louvred openings beyond a new chain-link fence",
        caption: "Generator house construction",
      },
    ],
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
      "Water supply works covering pressure and distribution pipelines, public water points and chambers. The works include pipe installation and commissioning.",
    gallery: [
      {
        src: "/images/dongoro-bonkoya/trench-excavation.jpg",
        alt: "Narrow pipeline trench dug through red soil across a grassy field lined with eucalyptus trees",
        caption: "Pipeline trench excavation",
      },
      {
        src: "/images/dongoro-bonkoya/valve-chamber.jpg",
        alt: "Low concrete valve chamber with a hinged steel cover on cleared ground with stones behind",
        caption: "Valve chamber",
      },
      {
        src: "/images/dongoro-bonkoya/water-point.jpg",
        alt: "Completed concrete water point with three taps on a platform inside a timber-post and barbed-wire fence",
        caption: "Public water point",
      },
    ],
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
      position: "50% 6%",
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

export const recognition: Recognition[] = [
  {
    eyebrow: "National sector engagement",
    title: "Supporting Ethiopia’s water and energy sector",
    text: [
      "Barcon Engineering received a Certificate of Appreciation from the Ministry of Water and Energy for its supporting sponsorship of the 3rd Ethiopian Water and Energy Week, held on 26–30 October 2026 in Addis Ababa.",
      "This recognition acknowledges sponsorship of the event.",
    ],
    image: {
      src: "/images/recognition/ministry-water-energy-week-certificate.jpg",
      alt: "Certificate of Appreciation from the Ministry of Water and Energy to Barcon Engineering for its supporting sponsorship of the 3rd Ethiopian Water and Energy Week",
      caption:
        "Certificate of Appreciation for supporting sponsorship of the 3rd Ethiopian Water and Energy Week, 26–30 October 2026, Addis Ababa",
    },
  },
  {
    eyebrow: "Community recognition",
    title: "Recognized by the Hobicha community",
    text: [
      "Barcon Engineering received a Certificate of Appreciation from the Hobicha Woreda administration in Wolayita, Ethiopia, in recognition of its contribution to the implementation of a drinking water supply and sanitation project in the area.",
    ],
    image: {
      src: "/images/recognition/hobicha-woreda-certificate.jpg",
      alt: "Certificate of Appreciation in Amharic from the Hobicha Woreda Water and Energy Office, Wolaita, presented to Barcon Engineering",
      caption:
        "Certificate of Appreciation from the Hobicha Woreda administration in Wolayita, Ethiopia",
    },
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

export const responsibilityPoints = [
  {
    focus: "quality",
    icon: "verified",
    title: "Engineering quality",
    text: "Built to specification, tested and commissioned before handover.",
  },
  {
    focus: "safety",
    icon: "shield",
    title: "People & site safety",
    text: "We aim to meet the safety requirements set out in each contract.",
  },
  {
    focus: "environment",
    icon: "leaf",
    title: "Environmental care",
    text: "We aim to adapt environmental measures to each site and to what the contract requires.",
  },
] as const;

export const principles = [
  {
    title: "Quality and coordination",
    text: "Our approach emphasizes engineering quality and coordination across civil, hydraulic and electromechanical work. Project specifications and agreed acceptance requirements guide delivery.",
  },
  {
    title: "People and site safety",
    text: "Responsible project management considers the people carrying out the work and the communities around each site. We aim to meet the safety requirements set out in each contract.",
  },
  {
    title: "Environmental care",
    text: "We aim to use resources responsibly and consider the effects of construction on water, land and nearby communities. We aim to adapt environmental measures to each site and to what the contract requires.",
  },
  {
    title: "Clear communication",
    text: "We value practical communication with clients, project partners and communities, with responsibilities and handover requirements agreed around each project.",
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

export const homeFeaturedProjects = [
  "hobicha-water-supply",
  "solar-pumping-stations",
  "debub-qege-shifa-road",
];

export const ctaPhoto: SitePhoto = {
  src: "/images/hobicha/service-reservoir-02.jpg",
  alt: "",
  caption: "Hobicha storage reservoir compound",
  position: "68% 62%",
};

export const homeStats: HomeStat[] = [
  {
    id: "founded",
    value: String(company.founded),
    label: "Since",
    labelFirst: true,
  },
  {
    id: "projects",
    value: "10",
    label: "Projects",
  },
  {
    id: "expertise",
    value: String(services.length),
    label: "Areas of expertise",
  },
];
