import { ServiceItem } from "@/types/service";

export const servicesData: ServiceItem[] = [
  {
    id: "planning-design",
    slug: "planning-and-design",
    title: "Planning & Design",
    shortDescription:
      "Integrated architectural layout design, structural engineering, and concurrent engineering concepts tailored to industrial requirements.",
    fullDescription:
      "Viva Infra Projects provides comprehensive Planning & Design services founded on concurrent engineering principles. We collaborate closely with architects, clients, and technical consultants right from conceptualization to deliver buildable, cost-effective, and safe designs. Every layout and structural plan adheres to our core delivery framework: Customer Satisfaction, Quality in Mind, Delivery in Time, and Safety as Prime.",
    iconName: "Compass",
    image: "/images/projects/peb-structural/structural-erection.jpg",
    features: [
      "Site developing & master layout design",
      "Civil, structural & architectural engineering",
      "Concurrent engineering & buildability analysis",
      "Value engineering for optimized material usage",
      "3D structural modeling & load calculations",
      "Statutory compliance and zoning alignment",
    ],
    capabilities: [
      "Topographical survey evaluation and site grading plans",
      "Heavy industrial machine foundation layout design",
      "Structural steel frame modeling and stress analysis",
      "MEP integration and clash-detection coordination",
      "Architectural planning for factory offices, amenities & utilities",
    ],
    workflowSteps: [
      {
        title: "Client Requirement Analysis",
        description:
          "Deep dive into plant throughput, equipment specs, workflow dynamics, and expansion plans.",
      },
      {
        title: "Concurrent Engineering Modeling",
        description:
          "Developing coordinated civil, structural, and CMEP layouts to eliminate field revisions.",
      },
      {
        title: "Statutory & Code Review",
        description:
          "Ensuring complete compliance with Indian Standards (IS codes), industrial factory acts, and local development authorities.",
      },
      {
        title: "Execution Drawings Handover",
        description:
          "Issuing comprehensive Good-for-Construction (GFC) drawings with detailed bar bending and fabrication schedules.",
      },
    ],
    relatedServiceSlugs: [
      "civil-construction",
      "peb-and-structural-works",
      "turnkey-project-management",
    ],
  },
  {
    id: "civil-construction",
    slug: "civil-construction",
    title: "Civil Construction",
    shortDescription:
      "Heavy equipment foundations, 1600-ton machine pits, factory buildings, RCC retaining walls, and industrial infrastructure.",
    fullDescription:
      "As a recognized specialist in heavy civil engineering across the Chennai industrial corridor and PAN India, Viva Infra Projects executes demanding industrial foundations, deep excavations, and heavy factory structures. Our proven track record includes complex 8-meter deep machine pits for 1600-ton stamping presses, heavy reinforced floor slabs, RCC retaining walls, and specialized corporate facilities.",
    iconName: "Building2",
    image: "/images/projects/civil/pit-foundation.jpg",
    features: [
      "Site development, bulk excavation & grading",
      "Heavy machine pits of 8m depth for 1600-ton equipment",
      "Factory buildings, warehouses & utility structures",
      "RCC concreting, floor reinforcement & heavy-duty slabs",
      "RCC retaining walls, compound walls & security barriers",
      "Aerocon panel partition works & brick masonry offices",
    ],
    capabilities: [
      "Precision foundation pits with heavy anchor bolt positioning",
      "High-grade M30/M40 industrial floor concreting with laser screeding",
      "Reinforced concrete water-retaining structures and pump sumps",
      "Factory office blocks, utility switchyards, and transformer yards",
      "Screen Golf setup and specialized industrial corporate recreation spaces",
    ],
    workflowSteps: [
      {
        title: "Site Grading & Deep Excavation",
        description:
          "Controlled soil excavation with shoring and dewatering for deep industrial pits up to 8 meters.",
      },
      {
        title: "Reinforcement & Formwork",
        description:
          "Heavy steel reinforcement tying and rigid shuttering inspected per IS 456 standards.",
      },
      {
        title: "Precision Pouring & Curing",
        description:
          "Continuous ready-mix concrete pours with mechanical vibrators and disciplined 28-day curing protocols.",
      },
      {
        title: "Superstructure & Finishing",
        description:
          "Execution of brick masonry, aerocon panels, retaining barriers, and protective boundary walls.",
      },
    ],
    relatedServiceSlugs: [
      "peb-and-structural-works",
      "mechanical-electrical-plumbing",
      "turnkey-project-management",
    ],
  },
  {
    id: "peb-structural",
    slug: "peb-and-structural-works",
    title: "PEB & Structural Works",
    shortDescription:
      "Structural steel fabrication, heavy erection, grit blasting, painting, mezzanine flooring, and industrial roofing systems.",
    fullDescription:
      "ViP's specialty projects involving Pre-Engineered Building (PEB) structures and heavy steel frameworks demonstrate innovative engineering and fabrication excellence. From heavy industrial sheds, mezzanine deck floors, and pipe racks to industrial chimney towers and side canopy structures, we provide end-to-end fabrication, grit blasting, epoxy coating, and high-precision field erection.",
    iconName: "Layers",
    image: "/images/projects/peb-structural/structural-fabrication.jpg",
    features: [
      "Pre-Engineered Building (PEB) design and erection",
      "Heavy structural steel fabrication and erection",
      "Surface preparation via grit blasting and epoxy painting",
      "Mezzanine floor deck sheet systems for manufacturing & storage",
      "Purlin erection, standing seam roofing & PUFF insulated panels",
      "Side wall sheets, industrial side canopies & automated rolling shutters",
    ],
    capabilities: [
      "High-tonnage industrial pipe racks for plant utility lines",
      "Tall industrial chimney fabrication and secure anchor erection",
      "Weld shop gantry crane girder fabrication and installation",
      "Clear-span industrial sheds for automotive and manufacturing assembly",
      "Roof daylight panels, natural ridge ventilators, and turbo vents",
    ],
    workflowSteps: [
      {
        title: "Shop Drawing Generation",
        description:
          "Detailed component detailing, weld schedules, and joint connection design.",
      },
      {
        title: "Controlled Fabrication & Blasting",
        description:
          "Precision cutting, fit-up, certified welding, and Sa 2.5 grit blasting surface prep.",
      },
      {
        title: "Industrial Primer & Paint",
        description:
          "Application of multi-coat epoxy primer and polyurethane finish for corrosion defense.",
      },
      {
        title: "Site Erection & Cladding",
        description:
          "Heavy crane hoisting, torqued bolt fastening, purlin alignment, and weather-tight sheeting.",
      },
    ],
    relatedServiceSlugs: [
      "civil-construction",
      "mechanical-electrical-plumbing",
      "interior-and-exterior-works",
    ],
  },
  {
    id: "mechanical-engineering",
    slug: "mechanical-engineering",
    title: "Mechanical Engineering (CMEP)",
    shortDescription:
      "Compressed air lines, RO/DM pipelines, cooling towers, LPG/Argon networks, machine unboxing & precision shifting.",
    fullDescription:
      "Viva Infra Projects delivers robust mechanical process piping and utility solutions for modern manufacturing plants. Our certified mechanical team executes high-pressure compressed air distribution, reverse osmosis (RO) and demineralized (DM) water circuits, chilled water loops, cooling tower manifolds, and hazardous gas networks including LPG and Argon. We also specialize in the safe unboxing, rigging, and precision alignment of heavy imported machineries.",
    iconName: "Wrench",
    image: "/images/projects/mechanical/cooling-tower.jpg",
    features: [
      "Compressed air pipeline systems & air receivers",
      "RO, DM and recycled industrial process water networks",
      "Chilled water circuits, condenser lines & cooling towers",
      "LPG & Argon gas pipeline networks and vaporizer (PVR) systems",
      "Industrial machinery unboxing and precision shifting of imported equipment",
      "Industrial ventilation, AHU with GI ducting, air washers & exhaust systems",
    ],
    capabilities: [
      "Precision rigging and positioning of stamping presses and CNC machinery per checklist",
      "LPG boiler erection and safety fuel piping compliance",
      "Wet scrubber systems and high-efficiency fume extraction networks",
      "Custom fabrication of industrial trollies, component pallets, and weld shop fixtures",
      "Storage mezzanine floor structural fabrication for toolrooms and spares",
    ],
    workflowSteps: [
      {
        title: "Process Flow & Pipe Sizing",
        description:
          "Determining operating pressures, flow velocities, and material specifications (SS304/MS/GI).",
      },
      {
        title: "Pipeline Routing & Support Engineering",
        description:
          "Designing vibration-isolated hangers, pipe bridges, and expansion loops.",
      },
      {
        title: "Equipment Rigging & Installation",
        description:
          "Executing planned machine shifts and unboxing with heavy-duty skates, cranes, and laser alignment.",
      },
      {
        title: "Pressure Testing & Commissioning",
        description:
          "Hydrostatic and pneumatic testing at 1.5x design pressure followed by full line sanitization.",
      },
    ],
    relatedServiceSlugs: [
      "electrical-engineering",
      "civil-construction",
      "turnkey-project-management",
    ],
  },
  {
    id: "electrical-engineering",
    slug: "electrical-engineering",
    title: "Electrical Engineering",
    shortDescription:
      "11kV/33kV HT switchyards, substations, transformer erection, LT/MV panels, DG sets, high bay lighting & CCTV.",
    fullDescription:
      "ViP's Electrical Engineering division executes complete industrial power distribution and low-voltage automation infrastructure. We handle turnkey 11kV & 33kV HT switchyards, indoor/outdoor transformer substations, diesel generator synchronizing installations, motor control centers (MCC), power control centers (PCC), busducts, plant-wide high bay lighting, fire detection, and state-of-the-art security networks.",
    iconName: "Zap",
    image: "/images/projects/electrical/transformer-commissioning.png",
    features: [
      "11kV & 33kV HT switchyards and outdoor DP structures",
      "HT/LT transformer supply, erection, testing and commissioning",
      "Diesel generator (DG) set installations with custom exhaust stacks",
      "LT and MV electrical panel manufacturing and busduct connections",
      "Plant lighting: energy-efficient high bay, cleanroom false ceiling & street lighting",
      "Fire alarm systems, Public Addressing (PA), CCTV surveillance & voice/data networks",
    ],
    capabilities: [
      "Comprehensive statutory liasioning and CEIG/TANGEDCO electrical safety approvals",
      "Cable tray erection, power cable pulling, and high-voltage terminations",
      "Earth pit grid testing, chemical earthing, and lightning protection systems",
      "Factory automated emergency lighting and central announcement systems",
      "RMG structure fabrication and heavy gantry power electrification",
    ],
    workflowSteps: [
      {
        title: "Load Calculation & Substation Engineering",
        description:
          "Computing peak loads, short-circuit capacities, and optimal transformer ratings.",
      },
      {
        title: "Statutory Approvals & Drawing Clearance",
        description:
          "Liaising with electrical inspectors and state distribution utilities for drawing sanction.",
      },
      {
        title: "Heavy Equipment Placement & Cabling",
        description:
          "Rigging transformers, running heavy LT busducts, and laying multi-core armored cables.",
      },
      {
        title: "Protection Testing & Energization",
        description:
          "Relay testing, insulation resistance checks, earth resistance verification, and energization.",
      },
    ],
    relatedServiceSlugs: [
      "mechanical-engineering",
      "civil-construction",
      "turnkey-project-management",
    ],
  },
  {
    id: "interior-exterior",
    slug: "interior-and-exterior-works",
    title: "Interior & Exterior Works",
    shortDescription:
      "Exterior structural glazing, ACP architectural facades, modular office workstations, false ceilings & glass partitions.",
    fullDescription:
      "Viva Infra Projects elevates corporate plant aesthetics and employee productivity through high-grade interior fit-outs and architectural exterior envelopes. We design and install contemporary exterior glazing with Aluminium Composite Panels (ACP), reception foyers, executive boardrooms, sound-damped false ceilings, and flexible modular office cubicles built to withstand industrial environments.",
    iconName: "Palette",
    image: "/images/projects/interior-exterior/exterior-glazing-acp.png",
    features: [
      "Exterior structural glazing and Aluminium Composite Panel (ACP) facades",
      "Modular workstations, acoustic demountable partitions & storage joinery",
      "Executive conference rooms, boardrooms & modern reception lobbies",
      "Gypsum, mineral fiber, and metal grid false ceilings with integrated LED lighting",
      "Toughened glass partitions, frameless glass doors & hardware",
      "Heavy-duty UPVC and aluminum windows with thermal/acoustic insulation",
    ],
    capabilities: [
      "Turnkey admin building fit-outs for industrial manufacturing campuses",
      "Cleanroom partition walls and airlock joinery",
      "Custom reception counters, brand feature walls, and acoustic wall paneling",
      "Ergonomic workstation layouts accommodating power and data cable raceways",
      "Architectural weather-proof canopy cladding",
    ],
    workflowSteps: [
      {
        title: "Architectural Layout & 3D Visualization",
        description:
          "Space planning for executive cabins, open office zones, and client experience zones.",
      },
      {
        title: "Sub-frame & Cladding Installation",
        description:
          "Mounting corrosion-resistant aluminum runners and silicon-sealed ACP cassettes.",
      },
      {
        title: "Modular Joinery & Partition Fitting",
        description:
          "Erecting modular workstation panels, toughened glass cubicles, and door ironmongery.",
      },
      {
        title: "Ceiling & Lighting Integration",
        description:
          "Installing suspended ceiling grids coordinated with HVAC diffusers and emergency lighting.",
      },
    ],
    relatedServiceSlugs: [
      "civil-construction",
      "flooring-and-coatings",
      "planning-and-design",
    ],
  },
  {
    id: "flooring-coatings",
    slug: "flooring-and-coatings",
    title: "Epoxy Flooring & Structural Coatings",
    shortDescription:
      "Chemical-resistant high-gloss industrial epoxy flooring, anti-static coatings, and protective structural paintings.",
    fullDescription:
      "ViP delivers heavy-duty surface protection engineering engineered for high-impact industrial operations, warehousing traffic, and chemical resistance. Our flooring team prepares concrete substrates through mechanical diamond grinding and shot blasting before applying multi-layered solvent-free epoxy systems, self-leveling polyurethane, and safety gangway markings.",
    iconName: "Sparkles",
    image: "/images/projects/flooring-painting/epoxy-green-gloss.png",
    features: [
      "High-gloss chemical-resistant industrial epoxy floor coating",
      "Self-leveling epoxy and polyurethane (PU) flooring systems",
      "Anti-static (ESD) flooring for electronics manufacturing and cleanrooms",
      "Substrate preparation: diamond grinding, scarifying & shot blasting",
      "Structural steel blasting and multi-tier epoxy polyurethane painting",
      "Demarcation lines, safety walkways, and heavy forklift aisle marking",
    ],
    capabilities: [
      "Fast-curing industrial flooring minimizing production plant downtime",
      "High compressive strength capable of supporting 5-ton forklift wheel loads",
      "Seamless hygienic floors resistant to automotive oils, acids, and coolants",
      "High-durability structural paint systems protecting against chemical fumes",
    ],
    workflowSteps: [
      {
        title: "Substrate Moisture & Hardness Test",
        description:
          "Evaluating concrete slab moisture vapor emission and rebound hammer hardness.",
      },
      {
        title: "Mechanical Surface Preparation",
        description:
          "Shot blasting or diamond grinding to achieve CSP 3 profile and remove laitance.",
      },
      {
        title: "Epoxy Primer & Scratch Coat",
        description:
          "Deep penetrating epoxy primer followed by silica-reinforced scratch coat for pinhole sealing.",
      },
      {
        title: "Topcoat & Safety Demarcation",
        description:
          "Application of UV-stable high-gloss wear coat and precision safety zoning lines.",
      },
    ],
    relatedServiceSlugs: [
      "civil-construction",
      "peb-and-structural-works",
      "interior-and-exterior-works",
    ],
  },
  {
    id: "infrastructure-landscaping",
    slug: "landscaping-roads-and-utilities",
    title: "Landscaping, Roads & Utilities",
    shortDescription:
      "Asphalt & RCC concrete roads, interlocking paver blocks, industrial landscaping, fire hydrant systems, and STP/ETP plants.",
    fullDescription:
      "A complete industrial campus requires robust external connectivity, environmental management, and certified emergency life safety. Viva Infra Projects builds heavy-duty asphalt roads, reinforced concrete perimeter roads, interlocking paver block yards, lush corporate landscaping, dedicated pump rooms with fire hydrants, and Effluent/Sewage Treatment Plants (ETP/STP) complying with Pollution Control Board norms.",
    iconName: "Trees",
    image: "/images/projects/landscaping-roads/landscaping-gardening.jpg",
    features: [
      "Heavy-duty asphalt bitumen roads and reinforced concrete (RCC) roads",
      "Heavy load interlocking paver blocks with precast raised kerb stones",
      "Industrial perimeter landscaping, garden development & tree plantations",
      "Dedicated fire hydrant networks, ring mains, hose reels & sprinkler systems",
      "Fire pump room installation with diesel engine, jockey & main electric pumps",
      "Effluent Treatment Plants (ETP) and Sewage Treatment Plants (STP)",
    ],
    capabilities: [
      "Heavy trailer turning radii and high axle load concrete pavement engineering",
      "Stormwater drainage channels, culverts, and rainwater harvesting sumps",
      "Zero Liquid Discharge (ZLD) compatible ETP piping and secondary settling tanks",
      "Certified fire safety installation ready for Fire Department NOC inspection",
    ],
    workflowSteps: [
      {
        title: "Subgrade Compaction & Base Course",
        description:
          "Heavy vibratory roller compaction of subgrade and Wet Mix Macadam (WMM) layers.",
      },
      {
        title: "Pavement Laying & Kerbing",
        description:
          "Mechanized paver block laying or RCC paving with dowel bar joints and kerb edges.",
      },
      {
        title: "Utility & Fire Network Trenching",
        description:
          "Laying underground MS/HDPE fire mains, hydrant posts, and effluent conveyance pipes.",
      },
      {
        title: "Pump Room Commissioning & Greening",
        description:
          "Testing auto-start fire pump sets and developing perimeter green belts and lawns.",
      },
    ],
    relatedServiceSlugs: [
      "civil-construction",
      "mechanical-engineering",
      "turnkey-project-management",
    ],
  },
  {
    id: "turnkey-project-management",
    slug: "turnkey-project-management",
    title: "Turnkey Project Management (CMEP)",
    shortDescription:
      "Single-point engineering, procurement, construction, and commissioning with proactive schedule control and zero compromises.",
    fullDescription:
      "ViP's Turnkey CMEP (Civil, Mechanical, Electrical, Plumbing) Project Management is the pinnacle of our engineering capability. We act as a single-point responsible partner from greenfield site planning through trial production handover. By resolving all technical issues across the table directly with architects and clients, and rigorously adhering to time schedules, we ensure on-budget, on-time project delivery with peak customer satisfaction.",
    iconName: "Briefcase",
    image: "/images/facilities/modern-factory.jpg",
    features: [
      "Single-point turnkey responsibility across Civil, Mechanical & Electrical (CMEP)",
      "Pro-active on-site leadership by senior management and field engineering staff",
      "Across-the-table issue resolution with architects, consultants, and plant managers",
      "Rigorous master schedule tracking with milestone lookahead meetings",
      "Strict zero-accident safety protocols with daily morning toolbox meetings",
      "Transparent procurement, vendor QA audits, and testing certificate handovers",
    ],
    capabilities: [
      "Turnkey automotive tier-1 and tier-2 vendor production facilities",
      "Fast-track industrial plant expansions with minimal operational interruption",
      "Comprehensive statutory liaisoning, factory licenses, and utility NOC coordination",
      "High repeat-order trust with multinational industrial corporations",
    ],
    workflowSteps: [
      {
        title: "Integrated Project Planning & Master Schedule",
        description:
          "Establishing critical path methods (CPM), resource curves, and procurement timelines.",
      },
      {
        title: "Procurement & Quality Vendor Management",
        description:
          "Sourcing certified structural steel, grade-tested cement, and Tier-1 electrical/piping equipment.",
      },
      {
        title: "Synchronized CMEP Execution",
        description:
          "Coordinating civil pours, structural erection, cable pulling, and piping simultaneously without trade clashes.",
      },
      {
        title: "Testing, Inspection & Client Handover",
        description:
          "Comprehensive commissioning tests, punch-list closeout, as-built documentation, and operational plant handover.",
      },
    ],
    relatedServiceSlugs: [
      "planning-and-design",
      "civil-construction",
      "peb-and-structural-works",
      "mechanical-engineering",
      "electrical-engineering",
    ],
  },
];

