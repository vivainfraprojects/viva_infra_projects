import { ProjectItem } from "@/types/project";

export const projectsData: ProjectItem[] = [
  {
    id: "industrial-peb-building-chennai",
    slug: "industrial-building-chennai",
    title: "Industrial Building & Heavy Structural Erection",
    category: "PEB & Structural",
    categoryLabel: "PEB & Structural",
    shortDescription:
      "Full-cycle Pre-Engineered Building (PEB) design, structural steel fabrication, blasting, painting, and high-precision field erection.",
    fullDescription:
      "Comprehensive industrial facility development featuring custom PEB steel framing, mezzanine deck floor installation, side canopy structures, and standing seam roof sheeting. Executed with strict quality management systems and tight milestone controls, ensuring zero disruption to neighboring industrial operations.",
    location: "Chennai Region, Tamil Nadu",
    client: "Major Automotive Tier-1 Manufacturer",
    duration: "8 Months",
    scope: [
      "Structural Steel Fabrication & Erection",
      "Mezzanine Floor Deck Sheet Installation",
      "Sa 2.5 Grit Blasting & Protective Epoxy Polyurethane Painting",
      "Purlin Erection & Standing Seam Roof Sheeting",
      "Side Wall Sheeting, Side Canopy & Motorized Rolling Shutters",
    ],
    status: "Completed",
    featured: true,
    mainImage: "/images/projects/peb-structural/structural-erection.jpg",
    galleryImages: [
      {
        src: "/images/projects/peb-structural/structural-fabrication.jpg",
        caption: "Shop floor structural fabrication and weld quality inspection",
      },
      {
        src: "/images/projects/peb-structural/blasting-painting.jpg",
        caption: "Grit blasting and protective multi-coat industrial painting",
      },
      {
        src: "/images/projects/peb-structural/mezzanine-floor.jpg",
        caption: "Mezzanine deck floor structural framing and decking sheets",
      },
      {
        src: "/images/projects/peb-structural/roof-sheeting.jpg",
        caption: "Industrial standing seam roof sheet and ridge purlin erection",
      },
    ],
    keyHighlights: [
      "Rigid column & rafter framing engineered for heavy gantry crane loads",
      "Sa 2.5 grit blasted surface preparation for 15+ year corrosion resistance",
      "Zero-accident execution achieved through daily safety toolbox meetings",
      "Handed over 10 days ahead of the contracted target schedule",
    ],
    engineeringDivision: "PEB & Structural Division",
  },
  {
    id: "heavy-machine-pit-civil-chennai",
    slug: "1600t-machine-pit-foundation",
    title: "1600-Ton Machine Pit of 8M Depth & Civil Infrastructure",
    category: "Civil",
    categoryLabel: "Civil Construction",
    shortDescription:
      "Deep 8-meter excavation, heavy reinforced foundation pit for 1600-ton press, RCC retaining walls, and industrial floor slabs.",
    fullDescription:
      "One of ViP's flagship heavy civil engineering accomplishments: an 8-meter deep machine foundation pit engineered to carry dynamic vibrating loads from a 1600-ton mechanical stamping press. Included specialized excavation with deep dewatering, dense rebar cages, high-grade mass concrete pours, RCC retaining walls, and perimeter compound wall security.",
    location: "Sriperumbudur Industrial Corridor, Tamil Nadu",
    client: "Automotive Press Components Manufacturer",
    duration: "6 Months",
    scope: [
      "Deep 8-Meter Excavation & Temporary Shoring",
      "Dense Rebar Mat Reinforcement per Dynamic Load Calculations",
      "1600-Ton Press Foundation Mass Concreting",
      "Heavy Industrial Floor RCC with Anti-Crack Reinforcement",
      "Perimeter RCC Retaining Walls & Compound Wall",
    ],
    status: "Completed",
    featured: true,
    mainImage: "/images/projects/civil/pit-foundation.jpg",
    galleryImages: [
      {
        src: "/images/projects/civil/excavation.jpg",
        caption: "Bulk excavation and dewatering for 8-meter deep machine pit",
      },
      {
        src: "/images/projects/civil/reinforcement.jpg",
        caption: "Heavy-duty rebar cage tying for dynamic machine load transfer",
      },
      {
        src: "/images/projects/civil/rcc-concreting.jpg",
        caption: "Controlled ready-mix mass concrete pour with immersion vibrators",
      },
      {
        src: "/images/projects/civil/retaining-wall.jpg",
        caption: "Reinforced concrete retaining wall and earth retention barrier",
      },
    ],
    keyHighlights: [
      "Engineered to withstand heavy cyclic impact loads from 1600-ton stamping operations",
      "Laser-guided anchor bolt sleeve alignment with +/- 2mm tolerances",
      "High early-strength concrete mix with continuous temperature control",
      "Comprehensive soil stabilization and water-tight sump tank construction",
    ],
    engineeringDivision: "Civil Engineering Division",
  },
  {
    id: "turnkey-cmep-manufacturing-plant",
    slug: "turnkey-cmep-manufacturing-plant",
    title: "Turnkey CMEP Industrial Manufacturing Plant",
    category: "Industrial",
    categoryLabel: "Turnkey CMEP",
    shortDescription:
      "Integrated Civil, Mechanical, Electrical, and Piping turnkey solutions for high-volume automotive component production.",
    fullDescription:
      "Single-point turnkey execution of an automotive manufacturing campus. ViP handled the entire engineering lifecycle: factory civil foundations, PEB superstructure, 11kV substation with transformer commissioning, high-pressure compressed air distribution, industrial cooling water circuits, and automated ventilation.",
    location: "Tamil Nadu",
    client: "Automotive Systems Conglomerate",
    duration: "10 Months",
    scope: [
      "Complete Turnkey CMEP Project Management",
      "Civil Plant Foundations & Heavy Duty Shop Floor",
      "PEB Steel Superstructure & Sheeting",
      "11kV Electrical Substation, Transformer & LT Busduct",
      "Process Compressed Air, RO Water & Cooling Tower Piping",
      "Machine Unboxing and Rigging of Imported Assembly Lines",
    ],
    status: "Completed",
    featured: true,
    mainImage: "/images/facilities/modern-factory.jpg",
    galleryImages: [
      {
        src: "/images/projects/electrical/transformer-commissioning.png",
        caption: "Substation transformer supply, erection, and statutory CEIG clearance",
      },
      {
        src: "/images/projects/mechanical/cooling-tower.jpg",
        caption: "Process cooling tower circuits and chilled water loop piping",
      },
      {
        src: "/images/projects/mechanical/industrial-machinery-shifting.jpeg",
        caption: "Precision rigging and machine shifting per engineering checklists",
      },
      {
        src: "/images/projects/electrical/lt-electrical-panels.png",
        caption: "Low-voltage electrical panel installation and cable tray routing",
      },
    ],
    keyHighlights: [
      "Single-point contractor handling Civil, Mechanical, Electrical and Sheeting",
      "Eliminated inter-contractor disputes through unified management",
      "Imported production machineries positioned on zero-tolerance foundation pads",
      "Trial run production commenced within targeted contractual timeline",
    ],
    engineeringDivision: "Turnkey CMEP Division",
  },
  {
    id: "electrical-substation-power-distribution",
    slug: "electrical-substation-and-power-distribution",
    title: "HT Substation, Transformer Erection & Power Distribution",
    category: "M&E",
    categoryLabel: "Electrical Projects",
    shortDescription:
      "11kV/33kV outdoor switchyard, RMG structure, transformer erection, LT busducts, MV panels, and plant-wide lighting.",
    fullDescription:
      "Turnkey industrial electrical engineering covering high-tension power intake, yard structure fabrication, step-down transformer commissioning, diesel generator synchronizing exhaust stacks, cable trays, power distribution panels, and high-bay energy-saving lighting across factory bays.",
    location: "Sriperumbudur Region, Tamil Nadu",
    client: "Global Automotive OEM Supplier",
    duration: "5 Months",
    scope: [
      "11kV / 33kV HT Switch Yard & DP Structure Erection",
      "Transformer Supply, Rigging, Erection & Oil Filtration",
      "LT Busduct & Multi-Tier MV / LT Electrical Panels",
      "Cable Tray Routing, Multi-Core Armored Cable Laying & Termination",
      "Factory Bay High-Bay Lighting, Street Lighting & CCTV",
      "Statutory Liasioning & CEIG Safety Approval",
    ],
    status: "Completed",
    featured: true,
    mainImage: "/images/projects/electrical/transformer-commissioning.png",
    galleryImages: [
      {
        src: "/images/projects/electrical/transformer-unit.jpg",
        caption: "Transformer yard structure and high-voltage bushing terminations",
      },
      {
        src: "/images/projects/electrical/lt-busduct.jpg",
        caption: "Heavy-amperage LT busduct connecting transformer to main switchboard",
      },
      {
        src: "/images/projects/electrical/mv-electrical-panels.png",
        caption: "MV switchboard and motor control center panels in substation room",
      },
      {
        src: "/images/projects/electrical/high-bay-lights.jpg",
        caption: "Factory high-bay illumination providing 300+ lux on shop floor",
      },
    ],
    keyHighlights: [
      "Full statutory clearance achieved with state electrical inspectorate (CEIG)",
      "High reliability dual-source power changeover design with DG backup",
      "Thermal imaging inspection conducted across all busduct joints prior to load",
      "Earthing grid resistance maintained under 1.0 Ohm across plant perimeter",
    ],
    engineeringDivision: "Electrical Engineering Division",
  },
  {
    id: "mechanical-process-piping-utilities",
    slug: "mechanical-process-piping-and-utilities",
    title: "Process Piping, Cooling Towers & Industrial Ducting",
    category: "M&E",
    categoryLabel: "Mechanical Projects",
    shortDescription:
      "Compressed air loops, RO/DM water networks, cooling towers, wet scrubbers, LPG boiler erection, and GI air washer ducting.",
    fullDescription:
      "Comprehensive mechanical engineering solutions for a modern manufacturing setup. Scope encompassed complete utility piping circuits, compressor header integration, industrial cooling tower circuits, hazardous gas pipelines (LPG & Argon), air handling unit (AHU) ducting, and environmental scrubbers.",
    location: "Industrial Corridor, Tamil Nadu / AP",
    client: "Automotive Precision Parts Plant",
    duration: "7 Months",
    scope: [
      "Compressed Air Pipeline Network with Air Receivers & Filters",
      "RO, Demineralized (DM) and Recycled Water Process Lines",
      "Condenser & Chilled Water Lines with Induced Draft Cooling Towers",
      "LPG Pipeline Network & Boiler Erection with PVR System",
      "AHU with Galvanized Iron (GI) Ducting & Industrial Air Washers",
      "Wet Scrubber System & Toxic Fume Extraction Ducting",
    ],
    status: "Completed",
    featured: false,
    mainImage: "/images/projects/mechanical/cooling-tower.jpg",
    galleryImages: [
      {
        src: "/images/projects/mechanical/air-compressor-pipeline.jpg",
        caption: "Compressed air ring main distribution with zero-pressure-drop drop legs",
      },
      {
        src: "/images/projects/mechanical/ro-system-pipeline.jpg",
        caption: "Reverse Osmosis (RO) high-pressure stainless steel manifold lines",
      },
      {
        src: "/images/projects/mechanical/ahu-gi-ducting.png",
        caption: "Galvanized sheet metal ductwork connecting AHU to production floors",
      },
      {
        src: "/images/projects/mechanical/lpg-boiler-erection.png",
        caption: "LPG boiler erection, fuel train piping, and safety relief headers",
      },
    ],
    keyHighlights: [
      "100% leak-proof pneumatic pressure testing at 12 bar gauge pressure",
      "Engineered expansion joints to accommodate thermal piping displacement",
      "Wet scrubber installation compliant with State Pollution Control Board standards",
      "Efficient cooling tower circuit providing constant 28°C process water supply",
    ],
    engineeringDivision: "Mechanical Engineering Division",
  },
  {
    id: "industrial-epoxy-flooring-and-coatings",
    slug: "industrial-epoxy-flooring-project",
    title: "Heavy-Duty High-Gloss Epoxy Flooring & Structural Coatings",
    category: "Industrial",
    categoryLabel: "Industrial Flooring",
    shortDescription:
      "Chemical-resistant high-gloss industrial epoxy flooring, diamond grinding surface prep, and protective steel painting.",
    fullDescription:
      "Execution of over 45,000 sq.ft. of high-performance epoxy flooring for an automotive manufacturing and warehouse facility. The project required intense mechanical surface preparation, crack repair, epoxy primer, self-leveling intermediate body coats, and a chemical-resistant polyurethane high-gloss topcoat with forklift aisle demarcations.",
    location: "Chennai Region, Tamil Nadu",
    client: "Tier-1 Automotive Seating Plant",
    duration: "2 Months",
    scope: [
      "Concrete Substrate Diamond Grinding & Shot Blasting",
      "Low-Viscosity Epoxy Primer Application for Maximum Interfacial Adhesion",
      "Self-Leveling Chemical-Resistant Epoxy Base Coat",
      "High-Gloss Wear-Resistant Polyurethane Finish",
      "Safety Gangway Walkway Lines & Heavy Forklift Traffic Demarcation",
      "Structural Steel Grit Blasting & Multi-Layer Protective Painting",
    ],
    status: "Completed",
    featured: true,
    mainImage: "/images/projects/flooring-painting/epoxy-green-gloss.png",
    galleryImages: [
      {
        src: "/images/projects/flooring-painting/epoxy-flooring.jpg",
        caption: "Multi-layer epoxy base coat application and squeegee leveling",
      },
      {
        src: "/images/projects/flooring-painting/structural-painting-1.png",
        caption: "Protective structural painting applied across plant structural columns",
      },
      {
        src: "/images/projects/flooring-painting/structural-painting-2.png",
        caption: "Grit blasted steel framing receiving epoxy intermediate coats",
      },
      {
        src: "/images/projects/flooring-painting/structural-painting-3.png",
        caption: "Finished structural steelwork with high-durability finish",
      },
    ],
    keyHighlights: [
      "High compressive strength resisting heavy rolling steel coil and pallet traffic",
      "Seamless finish preventing automotive oil, acid, and hydraulic fluid penetration",
      "Enhanced plant ambient illumination due to high-reflective gloss finish",
      "Completed in fast-track shift cycles during annual plant maintenance shutdown",
    ],
    engineeringDivision: "Specialty Coatings Division",
  },
  {
    id: "commercial-interiors-acp-facade",
    slug: "corporate-office-interiors-and-acp-glazing",
    title: "Corporate Admin Interiors, Exterior Glazing & ACP Works",
    category: "Commercial",
    categoryLabel: "Interior & Exterior",
    shortDescription:
      "Architectural exterior glazing, ACP panel facade, modern modular workstations, executive boardrooms & false ceilings.",
    fullDescription:
      "Full interior and exterior architectural fit-out for an industrial administrative headquarters. Features a striking double-glazed glass facade with metallic ACP cladding, a welcome reception lobby, acoustically isolated executive conference rooms, modular workstation layouts, and frameless toughened glass partitions.",
    location: "Chennai Region, Tamil Nadu",
    client: "Automotive Precision Components Group",
    duration: "4 Months",
    scope: [
      "Exterior Structural Glazing with Insulated Glass Units (IGU)",
      "Aluminium Composite Panel (ACP) Rainscreen Cladding",
      "Modern Modular Office Workstations with Cable Raceways",
      "Executive Boardroom with Acoustic Wall Paneling",
      "Reception Area Joinery & Corporate Branding Feature Wall",
      "Toughened Glass Office Cubicle Partitions & UPVC Windows",
    ],
    status: "Completed",
    featured: false,
    mainImage: "/images/projects/interior-exterior/exterior-glazing-acp.png",
    galleryImages: [
      {
        src: "/images/projects/interior-exterior/conference-room.png",
        caption: "Acoustic boardroom interior with integrated AV conferencing",
      },
      {
        src: "/images/projects/interior-exterior/modular-workstations.png",
        caption: "Ergonomic open-plan modular workstations with concealed cabling",
      },
      {
        src: "/images/projects/interior-exterior/reception.jpg",
        caption: "Contemporary reception counter and welcome foyer joinery",
      },
      {
        src: "/images/projects/interior-exterior/joinery-false-ceiling.jpg",
        caption: "Suspended ceiling grid with modular LED panel fixtures",
      },
    ],
    keyHighlights: [
      "Thermally efficient exterior glazing reducing air-conditioning loads by 18%",
      "Acoustic isolation in conference rooms ensuring total meeting privacy",
      "Custom brand-matched ACP facade matching global corporate identity standards",
      "Turnkey scope including electrical, data points, lighting, and HVAC integration",
    ],
    engineeringDivision: "Interior & Architectural Division",
  },
  {
    id: "fire-safety-pump-room-stp-etp",
    slug: "fire-hydrant-pump-room-and-etp-stp",
    title: "Fire Hydrant System, Dedicated Pump Room & ETP/STP",
    category: "M&E",
    categoryLabel: "Fire & Environmental",
    shortDescription:
      "Complete life-safety fire hydrant network, automatic pump room, sprinkler arrays, and Effluent/Sewage Treatment Plants.",
    fullDescription:
      "Engineered fire protection and wastewater management systems for an industrial manufacturing facility. Includes an automated fire pump station (electric main, standby diesel engine, and jockey pump), ring main underground piping, external hydrant posts, internal hose reels, ceiling sprinkler grids, and turnkey STP & ETP wastewater processing units.",
    location: "Sriperumbudur Region, Tamil Nadu",
    client: "Industrial Components Manufacturing Campus",
    duration: "5 Months",
    scope: [
      "Underground MS/HDPE Fire Ring Main with Sectional Isolation Valves",
      "Dedicated Fire Pump Room with Main Electric, Standby Diesel & Jockey Pumps",
      "Plant-wide Automatic Ceiling Sprinkler System & Riser Risers",
      "Internal First-Aid Hose Reels & External Yard Hydrant Pillars",
      "Effluent Treatment Plant (ETP) for Industrial Washdown Water",
      "Sewage Treatment Plant (STP) with Tertiary Filtered Recycled Water Loop",
    ],
    status: "Completed",
    featured: false,
    mainImage: "/images/projects/mechanical/pump-room.jpg",
    galleryImages: [
      {
        src: "/images/projects/mechanical/sprinkler-systems.jpg",
        caption: "Overhead wet sprinkler grid protecting production assembly zones",
      },
      {
        src: "/images/projects/mechanical/fire-hydrant.jpg",
        caption: "Yard fire hydrant post and twin hose cabinet station",
      },
      {
        src: "/images/projects/mechanical/stp-etp-systems.jpg",
        caption: "Wastewater aeration and multi-media filtration tanks for ETP/STP",
      },
      {
        src: "/images/projects/mechanical/pump-room.jpg",
        caption: "Automated pump control manifold with pressure sensing lines",
      },
    ],
    keyHighlights: [
      "Complies fully with National Building Code (NBC) Part 4 and NFPA standards",
      "Zero-delay automatic diesel engine startup in the event of grid power failure",
      "Treated effluent water conforms to State Pollution Control Board discharge norms",
      "Recycled water routed to landscape irrigation and secondary plant flushing",
    ],
    engineeringDivision: "Environmental & Fire Safety Division",
  },
  {
    id: "industrial-roads-pavers-landscaping",
    slug: "industrial-roads-pavements-and-landscaping",
    title: "Asphalt & RCC Roads, Paver Blocks & Industrial Landscaping",
    category: "Civil",
    categoryLabel: "Infrastructure",
    shortDescription:
      "Heavy axle load asphalt bitumen roads, RCC pavements, interlocking paver block yards, and perimeter corporate greenery.",
    fullDescription:
      "Development of comprehensive campus external civil infrastructure designed for heavy 40-foot container trucks, raw material trailers, and employee transit. Scope included heavy subgrade stabilization, reinforced concrete roads with dowel joints, interlocking concrete block pavements with kerb stones, storm runoff drains, and lush landscaped garden areas.",
    location: "Tamil Nadu",
    client: "Automotive Industrial Park",
    duration: "4 Months",
    scope: [
      "Subgrade Compaction & Wet Mix Macadam (WMM) Base Construction",
      "Heavy-Duty Bituminous Concrete Asphalt Road Paving",
      "M35 Grade Reinforced Cement Concrete (RCC) Roads with Contraction Joints",
      "80mm Heavy-Duty Interlocking Paver Blocks with Precast Kerb Stones",
      "Industrial Campus Landscaping, Lawns & Perimeter Greenery Belts",
      "Stormwater Drainage Channels with Silt Traps & Rainwater Harvesting",
    ],
    status: "Completed",
    featured: false,
    mainImage: "/images/projects/landscaping-roads/asphalt-rcc-road.jpg",
    galleryImages: [
      {
        src: "/images/projects/landscaping-roads/landscaping-gardening.jpg",
        caption: "Lush lawn development and perimeter ornamental trees",
      },
      {
        src: "/images/projects/landscaping-roads/paver-blocks.png",
        caption: "Interlocking paver blocks laid on compacted sand bed with raised kerb",
      },
      {
        src: "/images/projects/landscaping-roads/road-forming.jpg",
        caption: "Road base grading and asphalt laying for container truck traffic",
      },
      {
        src: "/images/projects/landscaping-roads/asphalt-rcc-road.jpg",
        caption: "Finished dual-lane RCC and asphalt campus transit corridor",
      },
    ],
    keyHighlights: [
      "Pavements designed for axle loads exceeding 10.2 metric tons",
      "Raised kerb barriers protecting pedestrian walkways and utility poles",
      "Integrated drainage eliminating waterlogging during peak monsoon rains",
      "Lush corporate lawns enhancing client reception and industrial aesthetics",
    ],
    engineeringDivision: "Civil & Infrastructure Division",
  },
  {
    id: "daesung-seat-factory-ap",
    slug: "daesung-seat-company-ap-factory",
    title: "Daesung Seat Company — AP Factory Construction",
    category: "Industrial",
    categoryLabel: "Ongoing Project",
    shortDescription:
      "Comprehensive factory civil works, structural erection, and CMEP infrastructure for automotive seat manufacturing.",
    fullDescription:
      "Active industrial project executing civil infrastructure, PEB manufacturing halls, utility networks, and equipment foundations for Daesung Seat Company's new Andhra Pradesh manufacturing facility. Demonstrates ViP's proven capability in executing multi-state projects across India.",
    location: "Andhra Pradesh, India",
    client: "Daesung Seat Company Pvt Ltd",
    duration: "In Execution",
    scope: [
      "Factory Civil Construction & Foundation Engineering",
      "PEB Structural Erection & Roof Sheeting",
      "Utility CMEP Piping & Electrical Integration",
      "Factory Floor Concreting & Heavy Equipment Pads",
    ],
    status: "Ongoing",
    featured: true,
    mainImage: "/images/projects/peb-structural/structural-fabrication.jpg",
    galleryImages: [
      {
        src: "/images/projects/peb-structural/structural-erection.jpg",
        caption: "Main production bay PEB frame erection",
      },
      {
        src: "/images/projects/civil/rcc-concreting.jpg",
        caption: "Floor slab reinforcement tying and concrete pour",
      },
      {
        src: "/images/projects/electrical/cable-tray-laying.jpg",
        caption: "Overhead cable tray installation and distribution line routing",
      },
    ],
    keyHighlights: [
      "PAN India operational execution expanding into Andhra Pradesh corridor",
      "Concurrent engineering coordination between civil and assembly line teams",
      "Weekly milestone audits ensuring complete schedule compliance",
    ],
    engineeringDivision: "Turnkey CMEP Division",
  },
  {
    id: "mykey-ensol-expansion",
    slug: "mykey-ensol-industrial-facility",
    title: "Mykey Ensol Private Limited — Industrial Facility Works",
    category: "Industrial",
    categoryLabel: "Ongoing Project",
    shortDescription:
      "Specialized infrastructure civil works, electrical panel setups, and process utility integrations.",
    fullDescription:
      "Ongoing corporate contract delivering specialized plant structural fabrication, electrical control center setups, utility piping, and civil improvements for Mykey Ensol Private Limited.",
    location: "Tamil Nadu, India",
    client: "Mykey Ensol Private Limited",
    duration: "In Execution",
    scope: [
      "Industrial Infrastructure Expansion Works",
      "Power Distribution Panels & High-Amperage Cabling",
      "Process Utility Line Extensions & Machinery Plinths",
    ],
    status: "Ongoing",
    featured: false,
    mainImage: "/images/projects/electrical/lt-electrical-panels.png",
    galleryImages: [
      {
        src: "/images/projects/electrical/lt-busduct.jpg",
        caption: "LT power busduct and panel tie-in",
      },
      {
        src: "/images/projects/mechanical/air-compressor-pipeline.jpg",
        caption: "Utility compressed air extension lines",
      },
    ],
    keyHighlights: [
      "Rigorous adherence to factory operations without disrupting existing output",
      "Strict compliance with industrial fire and electrical safety regulations",
    ],
    engineeringDivision: "Turnkey CMEP Division",
  },
  {
    id: "seoyon-ehwa-all-5-plants",
    slug: "seoyon-ehwa-multi-plant-engineering",
    title: "Seoyon E Hwa Automotive India — Multi-Plant Engineering Solutions",
    category: "Industrial",
    categoryLabel: "Ongoing & Sustaining Contracts",
    shortDescription:
      "Comprehensive civil, structural, MEP, and facility modification services across all 5 Seoyon E Hwa manufacturing plants.",
    fullDescription:
      "A testament to ViP's core value of customer satisfaction leading to repeat business: providing continuous civil expansions, press pit modifications, structural mezzanines, high-gloss epoxy flooring, and electrical substation upgrades across all 5 operational plants of Seoyon E Hwa Automotive India.",
    location: "Tamil Nadu & Andhra Pradesh (All 5 Plants)",
    client: "Seoyon E Hwa Automotive India P Ltd",
    duration: "Long-term Multi-Plant Partnership",
    scope: [
      "Factory Bay Civil Extensions & Machine Foundation Modifications",
      "Structural Steel Mezzanines & Storage Gantries",
      "Plant Epoxy Flooring Resurfacing & Safety Gangway Line Marking",
      "Substation Panel Enhancements, Cabling & Lighting Upgrades",
      "Compressed Air, Cooling Water & Fume Extraction Modifications",
    ],
    status: "Ongoing",
    featured: true,
    mainImage: "/images/projects/peb-structural/mezzanine-floor.jpg",
    galleryImages: [
      {
        src: "/images/projects/flooring-painting/epoxy-green-gloss.png",
        caption: "High-gloss epoxy shop floor execution in active assembly zones",
      },
      {
        src: "/images/projects/peb-structural/structural-fabrication.jpg",
        caption: "Structural gantry fabrication for component storage",
      },
      {
        src: "/images/projects/mechanical/cooling-tower.jpg",
        caption: "Cooling tower header re-engineering for expanded tonnage",
      },
    ],
    keyHighlights: [
      "Trusted across all 5 plants of one of India's leading automotive interior suppliers",
      "Rapid turnaround on critical plant modifications during production shut-downs",
      "Consistent quality workmanship and zero-compromise safety record",
    ],
    engineeringDivision: "Turnkey CMEP Division",
  },
];

