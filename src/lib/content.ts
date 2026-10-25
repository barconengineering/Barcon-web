export const company = {
  name: "Barcon Engineering",
  email: "info@barconengineering.com",
  phone: "+251 901 223 150",
  phoneHref: "+251901223150",
  address: "Imperial Plaza Building, Office 201",
  locality: "Woreda 02, Lemi Kura Sub-City",
  city: "Addis Ababa, Ethiopia",
};

export type Service = {
  slug: string;
  title: string;
  shortTitle: string;
  summary: string;
  description: string;
  capabilities: string[];
  outcome: string;
  image: string;
};

export const services: Service[] = [
  {
    slug: "water-supply-sanitation",
    title: "Water supply & sanitation",
    shortTitle: "Water & sanitation",
    summary: "Complete water systems, from source development to the last connection.",
    description: "We deliver integrated water supply and sanitation infrastructure for towns, rural communities, institutions, and industrial clients. Civil works, pipelines, storage, and electromechanical installations are coordinated as one system, through to testing and handover.",
    capabilities: ["HDPE, DCI, uPVC, and GI pipelines", "Reinforced concrete reservoirs and elevated tanks", "Water distribution networks and public water points", "Pump houses and associated civil works", "Sanitation and sewer infrastructure", "Network testing, commissioning, and handover"],
    outcome: "Reliable water access, durable infrastructure, and efficient distribution.",
    image: "water-infrastructure",
  },
  {
    slug: "irrigation",
    title: "Irrigation systems",
    shortTitle: "Irrigation",
    summary: "Practical water infrastructure that supports productive, resilient agriculture.",
    description: "Our irrigation work connects water sources to farmland through river intakes, canals, pipelines, and pump-based systems. We bring civil and electromechanical disciplines together to deliver practical systems suited to site conditions.",
    capabilities: ["Canal excavation and lining", "River intake and diversion structures", "Pumped and solar-powered irrigation", "Pipeline networks and night storage reservoirs", "Land leveling and field layout", "Hydraulic flow-control structures"],
    outcome: "Efficient water use and dependable irrigation for agricultural production.",
    image: "solar-irrigation",
  },
  {
    slug: "buildings",
    title: "Building construction",
    shortTitle: "Buildings",
    summary: "Well-built spaces, from foundations and structure to the final finish.",
    description: "We construct residential, commercial, public, and industrial buildings. Our teams coordinate earthworks, structural construction, electrical and plumbing installations, and architectural finishing, with quality checks throughout delivery.",
    capabilities: ["Foundations and structural frames", "Reinforced concrete slabs, beams, and columns", "Masonry and partition works", "Electrical and plumbing installations", "Steel fabrication and erection", "Finishing, renovation, and refurbishment"],
    outcome: "Durable buildings supported by coordinated site management and quality workmanship.",
    image: "water-infrastructure",
  },
  {
    slug: "roads-bridges",
    title: "Roads & bridges",
    shortTitle: "Roads & bridges",
    summary: "Connecting communities through dependable roads and crossing structures.",
    description: "Our road and bridge work improves connections between rural and urban communities. We undertake earthworks, pavement layers, drainage, culverts, and rehabilitation, supported by material testing and site supervision.",
    capabilities: ["Earthworks, grading, and compaction", "Sub-base and base course construction", "Gravel and asphalt surfacing", "Culverts, bridges, and drainage", "Road maintenance and rehabilitation", "Road markings, signage, and quality control"],
    outcome: "Safer movement and improved access to services, markets, and opportunities.",
    image: "water-infrastructure",
  },
  {
    slug: "electromechanical",
    title: "Electromechanical systems",
    shortTitle: "Electromechanical",
    summary: "The equipment and controls that keep essential systems working.",
    description: "We supply, install, test, and commission electromechanical equipment for water supply, irrigation, and industrial applications. Our work covers pumping, power generation, controls, and borehole equipping.",
    capabilities: ["Submersible and surface pumps", "Generator supply and installation", "Electrical control panels and automation", "Borehole equipping", "Chlorination and dosing systems", "Testing and commissioning"],
    outcome: "Reliable operation, efficient pumping, and coordinated equipment installation.",
    image: "water-infrastructure",
  },
  {
    slug: "solar-energy",
    title: "Solar energy",
    shortTitle: "Solar energy",
    summary: "Sustainable power for water supply, irrigation, and everyday needs.",
    description: "We supply and install solar systems for water infrastructure, agriculture, homes, institutions, and commercial clients. Our capabilities include off-grid and hybrid configurations, pumping systems, storage, and solar mini-grid components.",
    capabilities: ["AC and DC solar pumping systems", "PV modules and array support structures", "Inverters and charge controllers", "Battery storage systems", "Off-grid and hybrid power systems", "Testing, commissioning, and operator training"],
    outcome: "Reduced dependence on diesel and practical energy access in remote locations.",
    image: "solar-irrigation",
  },
  {
    slug: "import-export",
    title: "Import & export",
    shortTitle: "Import & export",
    summary: "Connecting project requirements with materials, equipment, and global markets.",
    description: "Our licensed trading activities support engineering delivery with construction materials, machinery, pumps, and solar equipment. We also export selected Ethiopian agricultural products, including coffee, fruits, vegetables, and beans.",
    capabilities: ["Pipes, pumps, and electromechanical equipment", "Solar equipment and construction machinery", "Construction materials procurement", "Coffee and agricultural product exports", "International procurement and logistics", "Customs clearance support"],
    outcome: "Coordinated procurement and supply chains that support project delivery.",
    image: "solar-irrigation",
  },
];

export type Project = {
  slug: string;
  title: string;
  category: "Water & sanitation" | "Solar & irrigation" | "Roads";
  location: string;
  client: string;
  summary: string;
  scope: string[];
  metrics: { value: string; label: string }[];
  record?: { delivery: string; contractDate?: string; status?: string; statusTitle?: string; scopeNote: string };
  gallery?: { src: string; alt: string; caption: string }[];
};

export const projects: Project[] = [
  {
    slug: "hobicha-water-supply",
    title: "Hobicha Medium-Sized Rural Water Supply Project",
    category: "Water & sanitation",
    location: "Wolayita Zone, South Ethiopia",
    client: "Ministry of Water and Energy",
    summary: "Barcon Engineering participated in the Hobicha Medium-Sized Rural Water Supply Project in joint venture with Bigeta Business PLC for the Ministry of Water and Energy. The documented works include storage and booster reservoirs, pressure-break tanks, pumping equipment, pipeline networks and public water points.",
    scope: ["One 300 m³ storage reservoir and one 50 m³ booster reservoir", "Four 10 m³ pressure-break tanks and one 20 m³ pressure-break tank", "Two surface pumps at the booster and one submersible pump at the borehole", "Transmission and distribution pipelines, fittings, valves and accessories", "Public water points", "Booster pump/operator house and guard/generator buildings", "Grid connection and transformer works"],
    metrics: [{ value: "300 m³", label: "Storage reservoir (documented works)" }, { value: "50 m³", label: "Booster reservoir (documented works)" }],
    record: {
      delivery: "Barcon Engineering in joint venture with Bigeta Business PLC",
      contractDate: "6 May 2024",
      statusTitle: "Historical milestone",
      status: "Provisional acceptance recorded on 3 August 2025. This historical milestone does not establish final acceptance or current operational status.",
      scopeNote: "The following describes the documented works of the joint-venture project. Quantities relate to the project as a whole, rather than to Barcon Engineering alone.",
    },
    gallery: [
      { src: "/images/hobicha/trench-excavation-2.jpg", alt: "Long pipeline trench cut through red soil across dry grassland towards a eucalyptus grove", caption: "Pipeline trench excavation" },
      { src: "/images/hobicha/trench-excavation-1.jpg", alt: "View along a deep, narrow pipeline trench with steep red-soil walls", caption: "Trench excavation for the pipeline network" },
      { src: "/images/hobicha/sandwich-reservoir-construction.jpg", alt: "Circular stone-masonry reservoir under construction on a hillside, with a wooden ladder and workers at its base", caption: "Masonry reservoir under construction" },
      { src: "/images/hobicha/sandwich-reservoir-50m3.jpg", alt: "Completed circular stone-masonry reservoir with a blue-painted roof edge among eucalyptus trees", caption: "50 m³ booster reservoir" },
      { src: "/images/hobicha/service-reservoir-300m3-1.jpg", alt: "Large circular concrete reservoir with a blue band and steel access ladder on a gravelled site", caption: "300 m³ storage reservoir" },
      { src: "/images/hobicha/service-reservoir-300m3-2.jpg", alt: "Concrete reservoir and a small arched shelter inside a blue-post chain-link fence under a cloudy sky", caption: "300 m³ storage reservoir compound" },
      { src: "/images/hobicha/service-reservoir-300m3-3.jpg", alt: "Fenced reservoir compound with a blue gate and guard house on a red-earth hilltop", caption: "Fenced reservoir site and guard house" },
      { src: "/images/hobicha/booster-station.jpg", alt: "Two people at the blue gate of a fenced booster station with a pump house and masonry reservoir", caption: "Booster station" },
      { src: "/images/hobicha/generator-house.jpg", alt: "Block generator house with blue trim inside a blue fence, beside a pole-mounted transformer and street lights", caption: "Generator house and grid connection" },
      { src: "/images/hobicha/water-point-construction.jpg", alt: "Newly built concrete water point with three taps on a slab, inside a timber and barbed-wire fence", caption: "Public water point under construction" },
      { src: "/images/hobicha/water-point.jpg", alt: "Completed concrete water point with three taps on a stone-masonry platform beneath trees", caption: "Completed public water point" },
      { src: "/images/hobicha/water-point-community.jpg", alt: "Women in colourful shawls filling yellow jerrycans at a public water point inside a blue fence", caption: "Community members collecting water" },
    ],
  },
  {
    slug: "dimeka-town-water",
    title: "Dimeka Town Water Supply & Sanitation",
    category: "Water & sanitation",
    location: "Dimeka, Ethiopia",
    client: "Ministry of Water and Energy",
    summary: "Water infrastructure spanning electromechanical equipment, pressure mains, distribution, storage, and operational buildings.",
    scope: ["Electromechanical works and diesel power source", "Pressure main and distribution network installation", "200 m³ reinforced concrete reservoir", "Public water points and network valve chambers", "Road and river crossings", "Generator house, workshop, office, and associated buildings"],
    metrics: [{ value: "200 m³", label: "Concrete reservoir" }, { value: "Integrated", label: "Water infrastructure" }],
    gallery: [
      { src: "/images/dimeka/service-reservoir-200m3.jpg", alt: "Circular concrete reservoir with a blue band and vertical stripe on a red-earth site under a cloudy sky", caption: "200 m³ service reservoir" },
      { src: "/images/dimeka/service-reservoir-2.jpg", alt: "Rendered concrete reservoir with a light-blue band on a circular apron, with trees and a worker in the background", caption: "Completed service reservoir" },
      { src: "/images/dimeka/pipe-shade.jpg", alt: "Long steel-framed pipe storage shed with a corrugated roof sheltering coils of black HDPE pipe", caption: "Pipe storage shed" },
      { src: "/images/dimeka/water-point-1.jpg", alt: "Concrete public water point on a slab with a galvanised steel door and fence posts being installed", caption: "Public water point and fencing" },
      { src: "/images/dimeka/water-point-2.jpg", alt: "Concrete public water point on a raised slab inside a new galvanised post and barbed-wire fence", caption: "Completed public water point" },
    ],
  },
  {
    slug: "talato-solar-irrigation",
    title: "Talato Solar-Powered Irrigation",
    category: "Solar & irrigation",
    location: "Konso Zone, Ethiopia",
    client: "South Ethiopia Regional State Bureau of Agriculture",
    summary: "A solar-powered small-scale irrigation project combining energy systems, pressure mains, and canal works.",
    scope: ["Solar system supply and installation", "Pump house and retaining wall construction", "Silt excluder construction", "Pressure main supply and installation", "Main and secondary canal works", "Social service structures"],
    metrics: [{ value: "Solar", label: "Powered irrigation" }, { value: "Konso", label: "Project zone" }],
    gallery: [
      { src: "/images/talato/canal-excavation.jpg", alt: "Freshly excavated irrigation canal trench with spoil heaped alongside, crossing dry hillside farmland", caption: "Canal excavation" },
      { src: "/images/talato/canal-masonry-construction.jpg", alt: "Stone-masonry irrigation canal winding across terraced farmland and trees, with stockpiled stone along its route", caption: "Canal masonry construction in progress" },
      { src: "/images/talato/canal-masonry-work.jpg", alt: "View along a stone-masonry canal with a concrete bed under construction, a worker and truck beside it and hills behind", caption: "Masonry canal walls and bed" },
    ],
  },
  {
    slug: "kelle-water-sanitation",
    title: "Kelle Town Water Supply & Sanitation",
    category: "Water & sanitation",
    location: "Kelle Town, Kore Zone, South Ethiopia Regional State",
    client: "South Ethiopia Regional Water, Mines and Energy Bureau",
    summary: "Water supply and sanitation infrastructure undertaken by Barcon Engineering in joint venture with Bigeta Business PLC. Historical project records distinguish distribution pipe installation from pipe supply.",
    scope: ["26.132 km of distribution pipe installation reported", "27.041 km of distribution pipes supplied", "Two 500 m³ reinforced concrete reservoirs in the listed scope", "Three 500 kVA diesel generators supplied", "Three submersible pumps and two surface centrifugal pumps supplied", "Six public water points, pump house and sanitation works in the listed scope"],
    metrics: [{ value: "26.132 km", label: "Distribution installed (reported)" }, { value: "27.041 km", label: "Distribution supplied (reported)" }],
    record: {
      delivery: "Barcon Engineering in joint venture with Bigeta Business PLC",
      contractDate: "27 May 2022",
      status: "A historical regional bureau confirmation, referring to a request dated 7 November 2024, reported construction at 90% at the time of the letter. This records progress at that time; it does not confirm current progress, completion or operation.",
      scopeNote: "The documented component list includes completed and ongoing works. These are project-level quantities for the joint venture, not quantities attributed to Barcon alone. The division of responsibilities between the partners is not specified in the reviewed record.",
    },
    gallery: [
      { src: "/images/kelle/reservoir-site-excavation.jpg", alt: "Wheeled excavator digging a large circular pit in red, rocky ground for a reservoir foundation", caption: "Reservoir site excavation" },
      { src: "/images/kelle/trench-excavation.jpg", alt: "Deep pipeline trench running across open grassland towards an excavator, workers and acacia trees", caption: "Pipeline trench excavation" },
      { src: "/images/kelle/pipe-laying.jpg", alt: "Truck-mounted crane lowering black pipe beside an open trench in savannah with mountains behind", caption: "Pipe laying" },
      { src: "/images/kelle/service-reservoir-500m3.jpg", alt: "Rendered concrete reservoir with blue trim and a rooftop room, surrounded by timber scaffolding", caption: "500 m³ service reservoir under construction" },
      { src: "/images/kelle/reservoir-chlorination.jpg", alt: "Two chemical dosing tanks with valves and sight gauges on a steel frame inside a concrete chamber", caption: "Reservoir chlorination unit" },
      { src: "/images/kelle/submersible-pump-installation.jpg", alt: "Submersible pump and riser pipe suspended over a borehole from a truck, with steel pipes stacked nearby", caption: "Borehole submersible pump installation" },
      { src: "/images/kelle/surface-pump.jpg", alt: "Two green surface centrifugal pumps with blue valves and galvanised pipework in a concrete pump pit", caption: "Surface pump installation" },
      { src: "/images/kelle/generator-house-construction.jpg", alt: "Concrete-block generator house with louvred openings beyond a new chain-link fence", caption: "Generator house construction" },
      { src: "/images/kelle/generator-construction.jpg", alt: "Block generator house and a second block structure inside a fenced compound under a stormy sky", caption: "Generator house and compound" },
      { src: "/images/kelle/generator.jpg", alt: "Large diesel generator set with control panel being installed inside a block generator house", caption: "Diesel generator installation" },
      { src: "/images/kelle/utility-office-construction.jpg", alt: "Single-storey utility office with blue-trimmed walls and a covered veranda behind a gravelled yard", caption: "Utility office construction" },
      { src: "/images/kelle/guard-house.jpg", alt: "Small rendered guard house with a blue door and window on a concrete apron beside a transformer pole", caption: "Guard house" },
      { src: "/images/kelle/water-points-construction.jpg", alt: "Newly cast concrete water point with three taps on a slab, on a hillside with trees", caption: "Public water point under construction" },
    ],
  },
  {
    slug: "solar-pumping-stations",
    title: "Solarization of Rural Pumping Stations",
    category: "Solar & irrigation",
    location: "Beneya, Burji Zone; Garbota and Birbiskela, Gedeo Zone — South Ethiopia",
    client: "South Ethiopia Regional State Water and Energy Bureau",
    summary: "The documented contract covers the supply, installation and solarization of solar systems at three diesel-powered RPS sites in South Ethiopia: Beneya in Burji Zone, and Garbota and Birbiskela in Gedeo Zone. The contractor is Barcon Engineering in joint venture with Ehun Business PLC, for the regional Water and Energy Bureau.",
    scope: ["Supply and installation of solar systems", "Solarization of three diesel-powered RPS sites", "Beneya site in Burji Zone", "Garbota and Birbiskela sites in Gedeo Zone"],
    metrics: [{ value: "3", label: "RPS sites (contract scope)" }, { value: "Solar", label: "Systems supply and installation (contract scope)" }],
    record: {
      delivery: "Barcon Engineering in joint venture with Ehun Business PLC",
      contractDate: "25 March 2026",
      scopeNote: "The following describes the documented scope of the joint-venture contract, rather than works attributed to Barcon Engineering alone.",
    },
  },
  {
    slug: "soka-sonicho-asrado-dama",
    title: "Soka Sonicha–Asarado Dama Rural Water Supply & Sanitation",
    category: "Water & sanitation",
    location: "Gorche Woreda, Sidama Region",
    client: "Sidama National Regional State Water, Mines and Energy Bureau",
    summary: "Barcon Engineering participated in the Soka Sonicha–Asarado Dama rural water-supply project in joint venture with Shimelis Alemu GWWC. The documented scope combines pipeline networks, water storage, public water points and school and health-facility taps with civil and electromechanical works.",
    scope: ["Water-supply civil works", "Supply and installation of pipes, fittings and electromechanical equipment", "Gravity, transmission and distribution pipelines", "Spring collection structure and 100 m³ wet well", "150 m³ elevated service reservoir", "Public water points, two school taps and one health-facility tap", "Pump/generator and guard buildings"],
    metrics: [{ value: "150 m³", label: "Elevated service reservoir (scope)" }, { value: "100 m³", label: "Wet well (scope)" }],
    record: {
      delivery: "Barcon Engineering in joint venture with Shimelis Alemu GWWC",
      contractDate: "30 October 2023",
      scopeNote: "The following describes the documented scope of the joint-venture project. Quantities relate to the project as a whole, rather than to Barcon Engineering alone.",
    },
  },
  {
    slug: "karat-town-water",
    title: "Karat Town Water Supply Project",
    category: "Water & sanitation",
    location: "Konso Zone, South Ethiopia",
    client: "South Ethiopia Regional State Water and Energy Bureau",
    summary: "The documented contract for the Karat Town Water Supply Project names Barcon Engineering in joint venture with Bigeta Business PLC as contractor for the regional Water and Energy Bureau. Its scope includes pressure pipelines, valve chambers, anchor and thrust blocks, electromechanical works and additional fittings.",
    scope: ["Pressure pipelines, valve chambers, anchor blocks and thrust blocks", "Electromechanical works", "Supply and installation of additional fittings", "Replacement of HDPE pressure pipe with DCI pipe under the amended scope", "Generator/guard buildings under the amended scope", "Remaining works on a 100 m³ reinforced-concrete reservoir"],
    metrics: [{ value: "DCI", label: "Pressure-pipe replacement (contract scope)" }, { value: "100 m³", label: "Reservoir: remaining works (contract scope)" }],
    record: {
      delivery: "Barcon Engineering in joint venture with Bigeta Business PLC",
      scopeNote: "This describes the documented scope of the joint-venture contract and its amendment, rather than works attributed to Barcon Engineering alone.",
    },
  },
  {
    slug: "dongoro-bonkoya-wash",
    title: "Dongoro Bonkoya WASH",
    category: "Water & sanitation",
    location: "Central Ethiopia",
    client: "Central Ethiopia Regional Water, Irrigation and Mines Development Bureau",
    summary: "Pressure and distribution infrastructure for a community WASH scheme.",
    scope: ["Supply and installation of HDPE and DCI pipes and fittings", "Pressure and distribution line commissioning", "Construction of water points", "Distribution valve chambers", "Anchor blocks"],
    metrics: [{ value: "HDPE & DCI", label: "Pipeline systems" }, { value: "WASH", label: "Project focus" }],
  },
  {
    slug: "debub-qege-shifa-road",
    title: "Debub Qege Shifa Road Maintenance",
    category: "Roads",
    location: "Sidama, Ethiopia",
    client: "Sidama National Regional State Road Development and Transport Bureau",
    summary: "Road maintenance and drainage works to improve an existing gravel road corridor.",
    scope: ["Gravel road spot repairs", "Road blading", "Gabion structure construction", "Reinforced concrete pipe production and installation"],
    metrics: [{ value: "Gravel", label: "Road rehabilitation" }, { value: "Drainage", label: "Supporting structures" }],
    gallery: [
      { src: "/images/debub-qege-shifa/bedding-under-construction.jpg", alt: "Motor grader shaping a rough earth road between eucalyptus trees and banana plantations, with rocks along the verge", caption: "Road bedding under construction" },
      { src: "/images/debub-qege-shifa/bedding-work.jpg", alt: "Motor grader working on the road approach to a crossing with stone-masonry parapet walls on both sides", caption: "Bedding work at a crossing" },
      { src: "/images/debub-qege-shifa/select-compaction.jpg", alt: "Wide compacted red-earth road with dug side ditches, a gravel stockpile and machinery further along through a village", caption: "Selected material compaction" },
      { src: "/images/debub-qege-shifa/gravel-compaction.jpg", alt: "Freshly laid gravel road surface with a roller compacting further ahead between fenced homesteads", caption: "Gravel surface compaction" },
    ],
  },
];

export const vision = "To see Barcon Engineering as one of the main entities that contributes to the development of the nation through its quality services and inclusiveness of the disadvantaged community.";

export const mission = "To enhance the nation’s infrastructure—covering water supply, irrigation, sanitation, buildings, and roads—by delivering sustainable, innovative and high-quality construction solutions.";

export const valuesIntro = "At Barcon Engineering, our values guide every decision we make and every project we deliver. They are the foundation of our identity and the driving force behind our success.";

export const values = [
  ["Integrity", "We uphold honesty, transparency, and ethical standards in everything we do."],
  ["Quality & Excellence", "We deliver reliable, efficient, and sustainable engineering solutions that exceed expectations."],
  ["Customer Focus", "We put our clients at the center of our work, building trust through responsiveness and commitment."],
  ["Innovation", "We embrace creativity, modern technology, and continuous improvement to provide smarter solutions."],
  ["Teamwork & Accountability", "We work collaboratively, respect each other, and take full responsibility for our actions and results."],
];

export const communityVideo = {
  eyebrow: "Social responsibility",
  title: "Serving the community",
  text: "Alongside the Hobicha Medium-Sized Rural Water Supply project, delivered in joint venture with Bigeta Business PLC, the contractor built an additional water point — Water Point 10, with 1.8 km of pipeline supply and installation — as a donation to the local community.",
  src: "/videos/hobicha-community.mp4",
  poster: "/videos/hobicha-community-poster.jpg",
  label: "Hobicha community water point video",
  caption: "Water Point 10, donated to the Hobicha community.",
};

export const qualifications: { title: string; issuer?: string }[] = [
  { title: "Grade 1 Water Works Contractor", issuer: "Ethiopian Construction Authority" },
  { title: "Grade 5 General Contractor", issuer: "Ethiopian Construction Authority" },
  { title: "Electromechanical (EM) Contractor – Grade 5", issuer: "Ethiopian Construction Authority" },
];

export const process = [
  { title: "Understand & plan", text: "Client requirements, site assessment, design review, costing, and work scheduling." },
  { title: "Procure & mobilize", text: "Approved materials, equipment readiness, and coordinated specialist teams." },
  { title: "Build & verify", text: "Construction supported by daily inspections, safety monitoring, and progress reporting." },
  { title: "Commission & hand over", text: "Testing, joint inspections, as-built documentation, and responsible project closure." },
];
