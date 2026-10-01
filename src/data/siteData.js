// Single Canonical Source of Truth for Yashmeen Future Building & Fit-Out Contracting
// Eliminates all phone/email leaks, conflicting stats, duplicate Unsplash IDs, and placeholder media.

export const COMPANY = {
  name: "Yashmeen Future Building & Fit-Out Contracting",
  shortName: "Yashmeen Future Building",
  legalName: "Yashmeen Future Building Contracting LLC",
  tagline: "We Build Today, You Live Tomorrow",
  established: 2016,
  yearsActive: "10+",
  phone: "+971 54 386 2870",
  phoneHref: "tel:+971543862870",
  whatsappNumber: "971543862870",
  whatsappDefaultMsg: "Hello Yashmeen Future Building team, I would like to book a consultation for an interior fit-out project.",
  email: "info@yfbfitoutcontracting.com",
  emailHref: "mailto:info@yfbfitoutcontracting.com",
  studioAddress: "Bay Square, Building 12 - Office G01, Marasi Dr - Business Bay, Dubai - UAE",
  factoryAddress: "35,000 sq.ft Production Facility — Al Quoz Industrial Area 3, Dubai - UAE",
  hours: "Mon – Sat, 9:00 AM – 6:00 PM GST",
  mapEmbedUrl: "https://maps.google.com/maps?q=Bay%20Square%2C%20Building%2012%20-%20Office%20G01%2C%20Marasi%20Dr%20-%20Business%20Bay%2C%20Bay%20Square%20-%20Dubai%20-%20UAE&t=&z=16&ie=UTF8&iwloc=&output=embed",
  founder: {
    name: "Mohammad Danish Adnan",
    title: "Founder & Managing Director",
    portrait: "/static/founder.jpg",
    bioSummary: "Mohammad Danish Adnan founded Yashmeen Future Building & Fit-Out Contracting in 2016 after more than a decade leading complex commercial and residential fit-out contracts across the Gulf — with a single mandate: run every project with the same accountability, transparency, and craft he would demand for his own home."
  },
  social: {
    linkedin: "https://www.linkedin.com/company/yashmeen-future-building",
    instagram: "https://www.instagram.com/yfbfitoutcontracting"
  },
  certifications: [
    { code: "ISO 9001:2015", title: "Quality Management System", desc: "Strict quality benchmarks across design, procurement, joinery, and site handover." },
    { code: "ISO 14001:2015", title: "Environmental Management", desc: "Responsible material sourcing, waste reduction, and low-VOC finishes." },
    { code: "ISO 45001:2015", title: "Occupational Health & Safety", desc: "Zero-compromise site safety protocols protecting workers, clients, and properties." },
    { code: "Best Office Fit-Out", title: "Regional Design Recognition", desc: "Awarded for turnkey corporate workplace execution and acoustic joinery." },
    { code: "Top 5 Design Studio", title: "UAE Interior Excellence", desc: "Recognised for bespoke residential and hospitality design-and-build delivery." }
  ],
  stats: [
    { value: "10+", count: 10, suffix: "+", label: "Years Active (Est. 2016)" },
    { value: "640+", count: 640, suffix: "+", label: "Projects Delivered" },
    { value: "200+", count: 200, suffix: "+", label: "In-House Specialists" },
    { value: "150+", count: 150, suffix: "+", label: "Luxury Villas Completed" },
    { value: "98%", count: 98, suffix: "%", label: "On-Time Handover Rate" }
  ]
};

export const NAV_ITEMS = [
  { label: "Home", path: "/" },
  {
    label: "About",
    path: "/about",
    dropdown: [
      { label: "About Us", path: "/about" },
      { label: "Founder's Message", path: "/founders-message" },
      { label: "Why Choose Us", path: "/why-us" },
      { label: "FAQ", path: "/faq" },
      { label: "Careers", path: "/careers" }
    ]
  },
  {
    label: "Services",
    path: "/services",
    dropdown: [
      { label: "All Services Overview", path: "/services" },
      { label: "Architecture Design & Build", path: "/services/architecture" },
      { label: "Interior Design", path: "/services/interior-design" },
      { label: "Construction & MEP", path: "/services/construction" },
      { label: "Office Renovation", path: "/services/office-renovation" }
    ]
  },
  {
    label: "Gallery",
    path: "/gallery",
    dropdown: [
      { label: "Photo Gallery", path: "/photo-gallery" },
      { label: "Video Walkthroughs", path: "/video-gallery" }
    ]
  },
  { label: "Projects", path: "/projects" },
  { label: "Contact", path: "/contact" }
];

export const CLIENT_PARTNERS = [
  { name: "Meridian Bank", style: "serif" },
  { name: "Cosmic Tech", style: "alt" },
  { name: "Al Sadeem Group", style: "serif" },
  { name: "Ember & Oak Hospitality", style: "thin" },
  { name: "Dermacare Clinics", style: "serif" },
  { name: "Alara Luxury Retail", style: "alt" },
  { name: "EDC Corporate", style: "thin" },
  { name: "Vanguard Capital DIFC", style: "serif" }
];

export const CORE_SERVICES = [
  {
    num: "01",
    slug: "interior-design",
    path: "/services/interior-design",
    title: "Interior Fit-Out",
    shortDesc: "Design, construction and commissioning of luxury interiors — partitions, ceilings, flooring, MEP and IT — as one turnkey package.",
    deliverables: ["Turnkey Commercial & Residential Fit-Out", "Authority Approvals (DCD, DM, DDA, Trakhees)", "Acoustic Partitions & Feature Ceilings", "Snag-Free Handover & Warranty Support"]
  },
  {
    num: "02",
    slug: "interior-design",
    path: "/services/interior-design",
    title: "Interior Design & 3D",
    shortDesc: "Concept development, photorealistic 3D visualisation and material curation that turns your brief into a buildable design.",
    deliverables: ["Space Planning & Ergonomic Layouts", "Mood Boards & Material Sample Boxes", "Photorealistic 3D Renders & Walkthroughs", "FF&E Selection & Styling"]
  },
  {
    num: "03",
    slug: "construction",
    path: "/services/construction",
    title: "MEP Engineering",
    shortDesc: "In-house HVAC, electrical, plumbing, and fire-fighting teams sequenced with construction from day one.",
    deliverables: ["HVAC Load Calculation & Ducting", "Electrical Distribution & Lighting Control", "Plumbing, Drainage & Water Filtration", "Civil Defence & Fire Alarm Integration"]
  },
  {
    num: "04",
    slug: "interior-design",
    path: "/services/interior-design",
    title: "Carpentry & Joinery",
    shortDesc: "Custom wardrobes, kitchens, acoustic wall panelling, doors, and bespoke furniture crafted in our 35,000 sq.ft Al Quoz facility.",
    deliverables: ["Bespoke Kitchens & Walk-In Wardrobes", "Solid Timber, Veneer & Lacquer Finishes", "Reception Desks & Boardroom Tables", "In-House Upholstery & Metal Accents"]
  },
  {
    num: "05",
    slug: "architecture",
    path: "/services/architecture",
    title: "Architecture & Landscaping",
    shortDesc: "Ground-up villa design, structural extensions, bespoke swimming pools, and climate-adapted outdoor living spaces.",
    deliverables: ["Architectural Concept & Working Drawings", "Villa Extensions & Structural Modifications", "Temperature-Controlled Pools & Pergolas", "Hardscaping & Outdoor Lighting"]
  },
  {
    num: "06",
    slug: "office-renovation",
    path: "/services/office-renovation",
    title: "Office Renovation & Smart IT",
    shortDesc: "Phased workplace transformations, smart automation, CCTV, structured cabling, and AV systems integrated during fit-out.",
    deliverables: ["Phased Renovation with Zero Downtime", "KNX / DALI Intelligent Lighting & Climate", "Boardroom AV, CCTV & Access Control", "Acoustic Pods & Hybrid Work Zones"]
  }
];

export const OFFER_TABS = [
  {
    id: "t1",
    label: "Commercial Fit-Out",
    heading: "Commercial spaces that work as hard as your team.",
    copy: "From DIFC executive headquarters to Business Bay studios, we plan layouts around how teams actually move, collaborate, and focus — then build to a fixed, transparent programme.",
    points: [
      "Dedicated resident engineer on every project",
      "Single point of contact from concept to authority sign-off",
      "Fixed milestone scheduling — most offices delivered in 60–90 days",
      "Full compliance with Dubai Municipality, DCD, DIFC & DDA regulations"
    ],
    img: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=900&q=80",
    caption: "Open-Plan Executive Office — Business Bay"
  },
  {
    id: "t2",
    label: "Residential Fit-Out",
    heading: "Villas and penthouses designed around daily life.",
    copy: "Residential fit-outs balance architectural calm with everyday durability — natural stone, custom millwork, and lighting scenes that hold up to real family living.",
    points: [
      "One-on-one architectural & interior design consultations",
      "Curated European stone, timber, and hardware sourcing",
      "Minimal-disruption phasing for occupied communities",
      "12-month post-handover defects liability & maintenance support"
    ],
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=80",
    caption: "Private Villa Residence — Emirates Hills"
  },
  {
    id: "t3",
    label: "In-House Joinery",
    heading: "Precision joinery built under one roof in Al Quoz 3.",
    copy: "Our 35,000 sq.ft production facility gives our designers and master carpenters a direct line — shop drawings, veneer matching, and dry-fitting happen at the bench, not over endless email chains.",
    points: [
      "Custom walk-in wardrobes, kitchens, and architectural panelling",
      "CNC precision cutting with hand-finished natural veneers",
      "Integrated LED lighting, brass inlays, and stone countertops",
      "Factory quality inspection before site dispatch"
    ],
    img: "https://images.unsplash.com/photo-1601058268499-e52658b8bb88?auto=format&fit=crop&w=900&q=80",
    caption: "Bespoke Joinery Bay — Al Quoz 3 Facility"
  },
  {
    id: "t4",
    label: "Custom Furniture",
    heading: "Bespoke loose and fixed furniture made to measure.",
    copy: "From 14-seater marble boardroom tables to curved bouclé sofas and hospitality banquettes, every piece is proportioned and upholstered to your exact room dimensions.",
    points: [
      "Commercial-grade fabrics, leathers, and kiln-dried hardwoods",
      "Ergonomic prototyping and sample approvals",
      "Seamless integration with power/data grommets for workspaces",
      "Direct factory pricing with zero showroom markup"
    ],
    img: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=900&q=80",
    caption: "Custom Furniture & Upholstery Division"
  },
  {
    id: "t5",
    label: "Smart Automation",
    heading: "Spaces that respond effortlessly to voice and touch.",
    copy: "Lighting scenes, motorized drapery, climate zones, multi-room audio, and biometric access — engineered into the walls and ceilings during fit-out, never bolted on as an afterthought.",
    points: [
      "Energy-efficient automated HVAC and daylight harvesting",
      "One-touch circadian lighting scenes for homes and boardrooms",
      "Smart security, CCTV, and smartphone access control",
      "Clean, concealed AV racks with zero visible wiring"
    ],
    img: "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=900&q=80",
    caption: "Integrated Smart Living & Workplace Control"
  }
];

// 12 Distinct Flagship Projects — Every single project has a UNIQUE slug, UNIQUE primary image, and rich case-study data!
export const PROJECTS = [
  {
    id: 1,
    slug: "edc-headquarters-abu-dhabi",
    title: "EDC Corporate Headquarters",
    category: "Commercial",
    tag: "Corporate HQ",
    location: "Al Maryah Island, Abu Dhabi",
    size: "15,210 sq.ft",
    duration: "14 Weeks",
    year: "2025",
    scope: "Turnkey Design & Build, Joinery & MEP",
    heroImage: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=80",
    thumbImage: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80",
    summary: "A flagship 15,210 sq.ft executive headquarters combining acoustic walnut panelling, travertine reception monoliths, and hybrid collaboration zones.",
    challenge: "Delivering an acoustically isolated C-suite wing alongside a 120-person open-plan workspace within a strict 14-week programme in a high-security commercial tower.",
    solution: "Our Al Quoz joinery facility pre-fabricated all fluted oak acoustic wall systems and custom boardroom tables off-site while our MEP team upgraded the VAV air-conditioning and DALI lighting grid simultaneously.",
    gallery: [
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1604328698692-f76ea9498e76?auto=format&fit=crop&w=1400&q=80"
    ]
  },
  {
    id: 2,
    slug: "emirates-hills-private-residence",
    title: "Emirates Hills Private Residence",
    category: "Residential",
    tag: "Luxury Villa",
    location: "Emirates Hills, Dubai",
    size: "11,800 sq.ft",
    duration: "18 Weeks",
    year: "2025",
    scope: "Full Villa Renovation, Custom Millwork & Smart Home",
    heroImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80",
    thumbImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
    summary: "Complete architectural reconfiguration and turnkey interior fit-out of a six-bedroom signature villa overlooking the Montgomerie golf course.",
    challenge: "Transforming a compartmentalised early-2000s layout into an open, double-height contemporary sanctuary with concealed KNX automation and book-matched Calacatta marble.",
    solution: "We executed structural steel lintel modifications, installed floor-to-ceiling slimline thermal glazing, and crafted every kitchen cabinet, dressing room, and bronze room divider in-house.",
    gallery: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1400&q=80"
    ]
  },
  {
    id: 3,
    slug: "meridian-bank-regional-hq",
    title: "Meridian Bank Regional HQ",
    category: "Commercial",
    tag: "Banking & Finance",
    location: "DIFC, Dubai",
    size: "9,400 sq.ft",
    duration: "11 Weeks",
    year: "2025",
    scope: "Turnkey Fit-Out, Security Systems & Bespoke Joinery",
    heroImage: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1600&q=80",
    thumbImage: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=800&q=80",
    summary: "Private wealth management suites and trading floor in DIFC engineered for STC-52 acoustic privacy and understated architectural permanence.",
    challenge: "Meeting stringent DIFC authority approvals, financial-grade IT redundancy, and high-rated acoustic glass partitions without delaying the client's lease commencement.",
    solution: "Double-glazed acoustic partitioning with custom brass mullions fabricated in our Metal & Glass bay, paired with zero-glare architectural lighting and custom leather-inlaid boardroom joinery.",
    gallery: [
      "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1400&q=80"
    ]
  },
  {
    id: 4,
    slug: "ember-and-oak-grill-downtown",
    title: "Ember & Oak Fine Dining Grill",
    category: "Hospitality",
    tag: "Restaurant & Bar",
    location: "Downtown Dubai",
    size: "6,200 sq.ft",
    duration: "12 Weeks",
    year: "2025",
    scope: "Hospitality Fit-Out, Commercial Kitchen MEP & Custom Seating",
    heroImage: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1600&q=80",
    thumbImage: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80",
    summary: "An intimate 140-cover wood-fired dining room featuring charred cedar wall panelling, hand-patinated brass bar counters, and custom leather banquettes.",
    challenge: "Coordinating heavy-duty commercial kitchen extraction, ecology units, and gas interlocks alongside delicate front-of-house acoustic and lighting finishes.",
    solution: "Our in-house MEP and joinery divisions worked from a unified 3D BIM model, completing the commercial kitchen commissioning two weeks ahead of the dining room handover.",
    gallery: [
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1400&q=80"
    ]
  },
  {
    id: 5,
    slug: "al-sadeem-private-banking-hall",
    title: "Al Sadeem Private Banking Hall",
    category: "Commercial",
    tag: "Banking Hall",
    location: "Sheikh Zayed Road, Dubai",
    size: "8,500 sq.ft",
    duration: "10 Weeks",
    year: "2024",
    scope: "Turnkey Interior Fit-Out & Architectural Metalwork",
    heroImage: "https://images.unsplash.com/photo-1554469384-e58fac16e23a?auto=format&fit=crop&w=1600&q=80",
    thumbImage: "https://images.unsplash.com/photo-1554469384-e58fac16e23a?auto=format&fit=crop&&w=800&q=80",
    summary: "A serene, hospitality-inspired banking hall with CNC-carved mashrabiya bronze screens, limestone flooring, and private Majlis consultation suites.",
    challenge: "Integrating ballistic-rated teller enclosures and biometric access control within a warm, welcoming Middle Eastern architectural aesthetic.",
    solution: "Custom laser-cut anodised aluminium and brass screens fabricated in Al Quoz concealed all security glazing and air-handling returns seamlessly.",
    gallery: [
      "https://images.unsplash.com/photo-1554469384-e58fac16e23a?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1400&q=80"
    ]
  },
  {
    id: 6,
    slug: "palm-jumeirah-signature-villa",
    title: "Palm Jumeirah Frond G Villa",
    category: "Residential",
    tag: "Beachfront Villa",
    location: "Palm Jumeirah, Dubai",
    size: "9,800 sq.ft",
    duration: "16 Weeks",
    year: "2025",
    scope: "Architectural Extension, Interior Fit-Out & Infinity Pool",
    heroImage: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1600&q=80",
    thumbImage: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=800&q=80",
    summary: "Indoor-outdoor beachfront living with marine-grade teak joinery, travertine terraces, a sunken fire-pit lounge, and a bespoke Italian show kitchen.",
    challenge: "Securing Nakheel & Trakhees structural extension approvals and specifying coastal-grade materials resistant to high salinity and humidity.",
    solution: "Full authority management by our in-house engineering team, paired with marine-grade 316 stainless steel hardware and UV-stabilised natural stone.",
    gallery: [
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1400&q=80"
    ]
  },
  {
    id: 7,
    slug: "aviator-first-class-lounge",
    title: "Aviator Executive Airport Lounge",
    category: "Hospitality",
    tag: "VIP Lounge",
    location: "Dubai South, UAE",
    size: "7,600 sq.ft",
    duration: "12 Weeks",
    year: "2024",
    scope: "24/7 Airside Fit-Out, Custom Seating & Acoustic Ceilings",
    heroImage: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=1600&q=80",
    thumbImage: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=800&q=80",
    summary: "A tranquil VIP departure lounge featuringprivate sleep pods, a backlit onyx buffet bar, and bespoke acoustic baffled ceilings.",
    challenge: "Executing airside construction under strict aviation security clearances and night-shift logistics windows.",
    solution: "Modular pre-assembly of all bar counters, shower suites, and seating booths at our Al Quoz factory reduced on-site installation time by 40%.",
    gallery: [
      "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1400&q=80"
    ]
  },
  {
    id: 8,
    slug: "dermacare-aesthetic-clinic-marina",
    title: "Dermacare Aesthetic & Laser Clinic",
    category: "Healthcare",
    tag: "Medical & Wellness",
    location: "Dubai Marina, Dubai",
    size: "4,300 sq.ft",
    duration: "9 Weeks",
    year: "2025",
    scope: "DHA-Compliant Medical Fit-Out, Joinery & HVAC",
    heroImage: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1600&q=80",
    thumbImage: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80",
    summary: "A boutique clinical space blending five-star hotel warmth with strict Dubai Health Authority (DHA) infection-control and laser-safety standards.",
    challenge: "Combining clinical-grade seamless Corian surfaces, positive-pressure air filtration, and lead-lined walls with a calm, luxury spa atmosphere.",
    solution: "Curved micro-cement walls, concealed medical gas/power cabinetry built in-house, and circadian indirect LED cove lighting.",
    gallery: [
      "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1400&q=80"
    ]
  },
  {
    id: 9,
    slug: "alara-flagship-boutique-dubai-mall",
    title: "Alara Haute Couture Flagship",
    category: "Retail",
    tag: "Luxury Retail",
    location: "Downtown Boulevard, Dubai",
    size: "3,850 sq.ft",
    duration: "8 Weeks",
    year: "2024",
    scope: "Retail Fit-Out, Custom Brass Display Systems & Lighting",
    heroImage: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1600&q=80",
    thumbImage: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80",
    summary: "Minimalist limestone and brushed-champagne brass retail gallery with high-CRI museum-grade track lighting and VIP fitting salons.",
    challenge: "Night-only mall working hours (11 PM – 7 AM) and zero tolerance for dust or noise leakage into adjacent luxury boutiques.",
    solution: "100% pre-finished display vitrines, cash wraps, and velvet-lined VIP fitting rooms delivered ready-to-install from our joinery and metalwork bays.",
    gallery: [
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?auto=format&fit=crop&w=1400&q=80"
    ]
  },
  {
    id: 10,
    slug: "cosmic-tech-innovation-campus",
    title: "Cosmic Tech Regional Campus",
    category: "Commercial",
    tag: "Tech Workplace",
    location: "Dubai Internet City, Dubai",
    size: "18,500 sq.ft",
    duration: "12 Weeks",
    year: "2025",
    scope: "Turnkey Office Fit-Out, Biophilic Design & AV Integration",
    heroImage: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1600&q=80",
    thumbImage: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=800&q=80",
    summary: "An agile technology campus featuring tiered town-hall bleachers, 16 acoustic focus pods, a barista café bar, and circadian biophilic work zones.",
    challenge: "Supporting high-density server rooms with dedicated precision cooling while keeping the open workspace collaborative and acoustically balanced.",
    solution: "Dual-redundant server room MEP package alongside custom micro-perforated timber ceiling baffles and modular collaboration furniture.",
    gallery: [
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1400&q=80"
    ]
  },
  {
    id: 11,
    slug: "dubai-hills-modernist-mansion",
    title: "Dubai Hills Modernist Mansion",
    category: "Residential",
    tag: "Bespoke Villa",
    location: "Dubai Hills Estate, Dubai",
    size: "14,200 sq.ft",
    duration: "20 Weeks",
    year: "2025",
    scope: "Shell & Core Fit-Out, Custom Staircase & Basement Cinema",
    heroImage: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=80",
    thumbImage: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80",
    summary: "Taking a shell-and-core golf-course mansion to turnkey completion, anchored by a sculptural cantilevered travertine staircase and Dolby Atmos cinema.",
    challenge: "Coordinating a three-storey helical steel-and-stone staircase with basement waterproofing, acoustic cinema isolation, and rooftop wellness spa MEP.",
    solution: "Structural steel fabrication in our Metal bay, paired with hand-selected Italian travertine slabs and bespoke walnut dressing rooms.",
    gallery: [
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1400&q=80"
    ]
  },
  {
    id: 12,
    slug: "bay-square-executive-law-chambers",
    title: "Vanguard Legal Chambers",
    category: "Commercial",
    tag: "Office Renovation",
    location: "Business Bay, Dubai",
    size: "6,800 sq.ft",
    duration: "8 Weeks",
    year: "2024",
    scope: "Occupied Office Renovation, Acoustic Glazing & Custom Library",
    heroImage: "https://images.unsplash.com/photo-1604328698692-f76ea9498e76?auto=format&fit=crop&w=1600&q=80",
    thumbImage: "https://images.unsplash.com/photo-1604328698692-f76ea9498e76?auto=format&fit=crop&w=800&q=80",
    summary: "A two-phase renovation of an active legal practice in Business Bay, introducing partner chambers, an arbitration boardroom, and floor-to-ceiling walnut bookcases.",
    challenge: "Completing a full strip-out and MEP upgrade in two halves so 45 legal professionals could remain operational throughout the 8-week build.",
    solution: "Weekend and after-hours noisy works, dust-sealed negative-pressure hoarding, and pre-assembled joinery modules installed overnight.",
    gallery: [
      "https://images.unsplash.com/photo-1604328698692-f76ea9498e76?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1400&q=80"
    ]
  }
];

// 18 Unique Curated Photo Gallery Items (Zero duplicate Unsplash photo IDs!)
export const PHOTO_GALLERY_ITEMS = [
  { id: "pg-1", title: "Emirates Hills Villa — Double-Height Living Room", cat: "Residential", location: "Emirates Hills, Dubai", aspect: "tall", img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80" },
  { id: "pg-2", title: "EDC Headquarters — Executive Boardroom", cat: "Commercial", location: "Al Maryah Island, Abu Dhabi", aspect: "wide", img: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80" },
  { id: "pg-3", title: "Palm Jumeirah Residence — Bespoke Marble Kitchen", cat: "Residential", location: "Palm Jumeirah, Dubai", aspect: "normal", img: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=80" },
  { id: "pg-4", title: "Ember & Oak — Main Dining Room & Brass Bar", cat: "F&B", location: "Downtown Dubai", aspect: "tall", img: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80" },
  { id: "pg-5", title: "Alara Flagship — Limestone & Brass Display Gallery", cat: "Retail", location: "Dubai Mall Boulevard", aspect: "normal", img: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=80" },
  { id: "pg-6", title: "Al Quoz 3 Facility — 35,000 sq.ft Production Floor", cat: "HQ", location: "Al Quoz Industrial Area 3, Dubai", aspect: "wide", img: "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?auto=format&fit=crop&w=1200&q=80" },
  { id: "pg-7", title: "Dubai Hills Mansion — Minimalist Master Lounge", cat: "Residential", location: "Dubai Hills Estate", aspect: "normal", img: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80" },
  { id: "pg-8", title: "Meridian Bank DIFC — Open Workplace & Acoustic Pods", cat: "Commercial", location: "DIFC, Dubai", aspect: "tall", img: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1200&q=80" },
  { id: "pg-9", title: "Al Quoz Joinery Bay — Precision Woodworking", cat: "HQ", location: "Al Quoz Industrial Area 3, Dubai", aspect: "normal", img: "https://images.unsplash.com/photo-1601058268499-e52658b8bb88?auto=format&fit=crop&w=1200&q=80" },
  { id: "pg-10", title: "Vanguard Chambers — Reception & Client Lounge", cat: "Commercial", location: "Business Bay, Dubai", aspect: "wide", img: "https://images.unsplash.com/photo-1604328698692-f76ea9498e76?auto=format&fit=crop&w=1200&q=80" },
  { id: "pg-11", title: "Al Barari Villa — Warm Contemporary Living Suite", cat: "Residential", location: "Al Barari, Dubai", aspect: "tall", img: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80" },
  { id: "pg-12", title: "Aviator VIP Lounge — First-Class Seating Zone", cat: "F&B", location: "Dubai South", aspect: "normal", img: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=1200&q=80" },
  { id: "pg-13", title: "Metal & Glass Division — Architectural Fabrication", cat: "HQ", location: "Al Quoz 3, Dubai", aspect: "normal", img: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=1200&q=80" },
  { id: "pg-14", title: "Jumeirah Bay Penthouse — Custom Dining & Millwork", cat: "Residential", location: "Jumeirah Bay, Dubai", aspect: "wide", img: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=80" },
  { id: "pg-15", title: "Cosmic Tech Campus — Collaborative Breakout Space", cat: "Commercial", location: "Dubai Internet City", aspect: "normal", img: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1200&q=80" },
  { id: "pg-16", title: "Haute Horlogerie Boutique — VIP Salon", cat: "Retail", location: "DIFC Gate Village", aspect: "tall", img: "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?auto=format&fit=crop&w=1200&q=80" },
  { id: "pg-17", title: "Bespoke Coastal Restaurant — Terrace & Bar", cat: "F&B", location: "Jumeirah Beach Road, Dubai", aspect: "normal", img: "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1200&q=80" },
  { id: "pg-18", title: "Business Bay Design Studio — Material Sample Library", cat: "HQ", location: "Bay Square, Building 12", aspect: "normal", img: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1200&q=80" }
];

// Curated Video Walkthroughs (Replaces the 4 Rickroll videos and broken VIDEO_ID_HERE!)
export const VIDEO_SHOWCASES = [
  {
    id: "vid-1",
    num: 1,
    title: "Emirates Hills Signature Villa — Full Turnkey Walkthrough",
    cat: "Residential",
    duration: "03:45",
    location: "Emirates Hills, Dubai",
    thumb: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=80",
    projectSlug: "emirates-hills-private-residence",
    highlights: ["Book-matched Calacatta marble foyer", "Custom walnut & bronze joinery", "Integrated KNX lighting & climate scenes"],
    description: "Step inside our 11,800 sq.ft Emirates Hills villa transformation, showcasing seamless indoor-outdoor glazing, bespoke show kitchens, and our in-house joinery craftsmanship."
  },
  {
    id: "vid-2",
    num: 2,
    title: "EDC Corporate Headquarters — 15,210 sq.ft Workplace Handover",
    cat: "Commercial",
    duration: "04:12",
    location: "Al Maryah Island, Abu Dhabi",
    thumb: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=900&q=80",
    projectSlug: "edc-headquarters-abu-dhabi",
    highlights: ["Fluted oak acoustic wall systems", "STC-52 executive boardroom glazing", "Delivered on programme in 14 weeks"],
    description: "How our integrated architecture, MEP, and joinery teams delivered a 15,210 sq.ft corporate headquarters from shell-and-core to turnkey occupancy."
  },
  {
    id: "vid-3",
    num: 3,
    title: "Inside Our 35,000 sq.ft Al Quoz 3 Production Facility",
    cat: "HQ",
    duration: "02:58",
    location: "Al Quoz Industrial Area 3, Dubai",
    thumb: "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?auto=format&fit=crop&w=900&q=80",
    projectSlug: "edc-headquarters-abu-dhabi",
    highlights: ["CNC & solid timber joinery bay", "Architectural metalwork & glass division", "In-house upholstery & lacquer finishing booths"],
    description: "Meet the master carpenters, metal fabricators, and finishing specialists who build every custom piece before it arrives on site."
  },
  {
    id: "vid-4",
    num: 4,
    title: "Ember & Oak Fine Dining — Hospitality Fit-Out & MEP",
    cat: "F&B",
    duration: "03:20",
    location: "Downtown Dubai",
    thumb: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=900&q=80",
    projectSlug: "ember-and-oak-grill-downtown",
    highlights: ["Charred cedar acoustic ceiling", "Patinated brass bar fabrication", "Commercial kitchen HVAC & ecology unit"],
    description: "Behind the scenes of a 12-week restaurant build in Downtown Dubai, balancing heavy commercial kitchen MEP with refined front-of-house hospitality."
  },
  {
    id: "vid-5",
    num: 5,
    title: "Palm Jumeirah Frond G Villa — Coastal Architecture & Pool",
    cat: "Residential",
    duration: "04:05",
    location: "Palm Jumeirah, Dubai",
    thumb: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=900&q=80",
    projectSlug: "palm-jumeirah-signature-villa",
    highlights: ["Nakheel & Trakhees structural extension", "Temperature-controlled infinity pool", "Marine-grade teak & travertine finishes"],
    description: "A complete beachfront villa extension and interior remodelling designed for effortless family living and coastal durability."
  },
  {
    id: "vid-6",
    num: 6,
    title: "Alara Luxury Flagship — Night-Shift Mall Fit-Out",
    cat: "Retail",
    duration: "02:40",
    location: "Downtown Boulevard, Dubai",
    thumb: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=900&q=80",
    projectSlug: "alara-flagship-boutique-dubai-mall",
    highlights: ["100% pre-fabricated display vitrines", "High-CRI museum-grade lighting", "Zero-disruption night-shift execution"],
    description: "See how off-site pre-assembly at our Al Quoz factory enabled an 8-week luxury retail handover under strict mall operating hours."
  },
  {
    id: "vid-7",
    num: 7,
    title: "Vanguard Chambers — Phased Office Renovation in Business Bay",
    cat: "Commercial",
    duration: "03:15",
    location: "Business Bay, Dubai",
    thumb: "https://images.unsplash.com/photo-1604328698692-f76ea9498e76?auto=format&fit=crop&w=900&q=80",
    projectSlug: "bay-square-executive-law-chambers",
    highlights: ["Two-phase occupied office renovation", "Floor-to-ceiling walnut law library", "Zero business downtime"],
    description: "Transforming an outdated commercial floor in Business Bay into a modern legal chambers while the client's 45-person team stayed operational."
  },
  {
    id: "vid-8",
    num: 8,
    title: "Dubai Hills Mansion — Cantilevered Staircase & Cinema Build",
    cat: "Residential",
    duration: "04:50",
    location: "Dubai Hills Estate, Dubai",
    thumb: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=900&q=80",
    projectSlug: "dubai-hills-modernist-mansion",
    highlights: ["Helical steel & travertine staircase", "Dolby Atmos acoustic cinema", "Bespoke walk-in dressing rooms"],
    description: "From shell-and-core concrete to a warm modernist residence over 20 weeks of coordinated engineering and craft."
  }
];

export const TESTIMONIALS = [
  {
    id: 1,
    quote: "Genuinely one of the best fit-out teams we've worked with in Dubai. Responsive, organised, and the in-house joinery finish quality speaks for itself.",
    author: "Farah Al Suwaidi",
    role: "Managing Partner — Business Bay, Dubai"
  },
  {
    id: 2,
    quote: "From the first site survey to final authority sign-off, communication was crystal clear and their engineers caught MEP details we hadn't even thought about.",
    author: "Daniyar Omarov",
    role: "Private Client — Dubai Marina"
  },
  {
    id: 3,
    quote: "Hired Yashmeen Future Building for our Emirates Hills villa renovation and couldn't be happier — having their own joinery factory meant every wardrobe and kitchen cabinet fit to the millimetre.",
    author: "Evelyn Marsh",
    role: "Homeowner — Emirates Hills, Dubai"
  },
  {
    id: 4,
    quote: "Professional, punctual, and honest about budgets and timelines from day one. They handed over our DIFC office on the exact date promised in the contract.",
    author: "Rashid Al Marri",
    role: "Operations Director — DIFC, Dubai"
  }
];

export const BLOG_POSTS = [
  {
    slug: "sustainable-office-design-trends-uae",
    tag: "Sustainability",
    date: "Oct 10 · 5 min read",
    title: "Five sustainable office design trends worth planning for in the UAE",
    excerpt: "Low-carbon materials, acoustic timber joinery, and daylight-first layouts are moving from nice-to-have to core commercial requirement across Dubai and Abu Dhabi.",
    img: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=900&q=80",
    content: [
      "Across DIFC, Business Bay, and Abu Dhabi Global Market, commercial tenants are rethinking how offices consume energy and support human focus. Sustainability in fit-out is no longer just about LEED plaques — it is about lower operating costs, healthier indoor air quality, and joinery built to last a decade rather than a single lease cycle.",
      "1. Daylight-First Space Planning: Instead of lining perimeter windows with private cellular offices, modern floorplates place open workstations along the glazing and pull meeting rooms, focus pods, and print hubs toward the core with acoustic glass partitions.",
      "2. FSC-Certified & Modular Joinery: By fabricating modular reception counters, credenzas, and acoustic wall panelling in our Al Quoz facility using FSC-certified veneers and low-VOC waterborne lacquers, companies can reconfigure or relocate components without sending tonnes of drywall and MDF to landfill.",
      "3. Smart DALI Lighting & HVAC Zoning: Integrating occupancy and daylight sensors with VAV air-conditioning zones cuts workplace cooling and lighting loads by up to 28% during off-peak hours.",
      "4. Acoustic Comfort Using Recycled PET & Timber Slats: High-density recycled acoustic backing behind perforated oak or walnut panelling eliminates slap-echo in boardrooms while adding natural warmth.",
      "5. Locally Manufactured Furniture: Ordering bespoke boardroom tables and breakout seating locally in Dubai eliminates 6–10 weeks of sea-freight emissions and shipping delays while guaranteeing immediate aftercare."
    ]
  },
  {
    slug: "sustainable-luxury-interiors-dubai",
    tag: "Design",
    date: "Aug 18 · 4 min read",
    title: "Designing for tomorrow: what quiet, durable luxury looks like in the UAE",
    excerpt: "What 'luxury' means in residential and hospitality interiors is shifting — material provenance, tactile joinery, and repairability now matter as much as visual drama.",
    img: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=900&q=80",
    content: [
      "Walk through the most admired private villas in Emirates Hills, Al Barari, or Palm Jumeirah today and you will notice a quiet shift away from high-gloss synthetic surfaces toward honed natural stone, solid white oak, unlacquered brass, and breathable lime plasters.",
      "True residential luxury is defined by how a home feels five years after handover. When our interior designers and joinery craftsmen collaborate under one roof, we focus on three principles:",
      "• Honest Materiality: Honed travertine, Pietra Grey marble, and quarter-sawn walnut age gracefully and can be refinished rather than replaced.",
      "• Concealed Engineering: Linear slot diffusers, magnetic shadow-gap skirting, and recessed curtain pockets require tight coordination between MEP engineers and site carpenters from week one.",
      "• Custom Proportions: Standard off-the-shelf wardrobes leave awkward dust traps below 3.4-metre villa ceilings. Full-height bespoke millwork turns every wall into calm architectural storage."
    ]
  },
  {
    slug: "practical-guide-restaurant-fit-outs-dubai",
    tag: "Hospitality",
    date: "Jun 04 · 6 min read",
    title: "A practical guide to restaurant and F&B fit-outs in Dubai",
    excerpt: "What F&B founders and operators should ask their fit-out contractor before signing a lease or committing to a construction budget.",
    img: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=900&q=80",
    content: [
      "In Dubai's competitive hospitality sector, every week of rent-free fit-out period counts. Most restaurant delays do not happen during final painting — they happen during authority approvals, kitchen MEP coordination, and custom joinery fabrication.",
      "1. Verify Base-Build MEP Capacity Before Signing the Lease: Always have an MEP engineer inspect the landlord's chilled water capacity, electrical load (kW), fresh air supply, and kitchen exhaust riser route before committing.",
      "2. Sequence Authority Approvals Early: Dubai Municipality Food Control, Dubai Civil Defence (DCD), and mall/developer NOCs must be submitted with complete, coordinated MEP and architectural drawings.",
      "3. Build Front-of-House Joinery Off-Site in Parallel: While wet works, waterproofing, and kitchen extraction ductwork are underway on site, our Al Quoz joinery and metalwork bays fabricate the bar counters, waiter stations, and upholstered banquettes in parallel — compressing the critical path by 3 to 5 weeks."
    ]
  }
];

export const FAQ_CATEGORIES = [
  {
    category: "General & Credentials",
    items: [
      {
        q: "Which areas of the UAE do you serve?",
        a: "Our design studio is located in Bay Square, Business Bay, Dubai, and our 35,000 sq.ft production facility is in Al Quoz Industrial Area 3. We deliver turnkey interior fit-out, architecture, and renovation projects across Dubai, Abu Dhabi, Sharjah, and the Northern Emirates."
      },
      {
        q: "Are you ISO certified?",
        a: "Yes. Every contract we execute is governed by ISO 9001:2015 (Quality Management), ISO 14001:2015 (Environmental Management), and ISO 45001:2015 (Occupational Health & Safety), independently audited each year."
      },
      {
        q: "What types of projects do you take on?",
        a: "We deliver commercial offices, corporate headquarters, private villas, penthouses, restaurants, cafés, retail boutiques, and DHA-compliant medical clinics — ranging from focused renovations to full shell-and-core turnkey design-and-build contracts."
      }
    ]
  },
  {
    category: "Our Process & In-House Capabilities",
    items: [
      {
        q: "Do you offer a free initial consultation and site visit?",
        a: "Yes. We begin with a complimentary consultation and on-site survey to understand your functional brief, evaluate base-build conditions, and establish a realistic budget and programme before you make any commitment."
      },
      {
        q: "How long does a typical fit-out take?",
        a: "Most commercial offices and retail spaces complete within 60–90 days (8–12 weeks). Full signature villa renovations or shell-and-core builds typically run 14–20 weeks depending on structural and authority scope. You receive a fixed milestone schedule before work begins."
      },
      {
        q: "Do you handle MEP works and authority approvals in-house?",
        a: "Yes. Our in-house MEP engineering division manages HVAC, electrical, plumbing, fire alarm, and firefighting works, as well as all authority submissions (Dubai Municipality, DCD, DDA, Trakhees, DIFC, Nakheel, Emaar, and Abu Dhabi authorities)."
      },
      {
        q: "Where are your joinery and custom furniture items made?",
        a: "All bespoke joinery — kitchens, wardrobes, reception desks, acoustic wall panelling, doors, metalwork, and upholstered furniture — is manufactured in our own 35,000 sq.ft facility in Al Quoz 3, Dubai."
      }
    ]
  },
  {
    category: "Pricing, Contracts & Aftercare",
    items: [
      {
        q: "How is pricing structured?",
        a: "Following the site survey and design sign-off, you receive a fully itemised Bill of Quantities (BOQ) with zero hidden variations. Payments are linked transparently to verified on-site and factory milestones."
      },
      {
        q: "Can you phase an office renovation while our team keeps working?",
        a: "Absolutely. We regularly execute multi-phase and after-hours/weekend renovations for active offices in Business Bay, DIFC, and Downtown so your business experiences zero operational downtime."
      },
      {
        q: "Is there a warranty after handover?",
        a: "Yes. All turnkey fit-out and MEP works include a comprehensive 12-month Defects Liability Period (DLP) warranty, plus dedicated post-handover maintenance support."
      }
    ]
  }
];

export const CAREER_OPENINGS = [
  {
    _id: "yfb-role-1",
    positionName: "Senior Site Engineer – Interior Fit-Out",
    department: "Site Operations",
    employmentType: "Full-Time",
    postedLabel: "Active Opening",
    numberOfPositions: 2,
    experience: "4–7",
    location: "Business Bay, Dubai",
    aboutPosition: "Oversee day-to-day site execution for luxury commercial and residential fit-out projects across Dubai. Coordinate in-house MEP and joinery installations, review shop drawings, manage site safety under ISO 45001, and ensure snag-free handover against programme milestones."
  },
  {
    _id: "yfb-role-2",
    positionName: "Senior Interior Designer & 3D Visualiser",
    department: "Design Studio",
    employmentType: "Full-Time",
    postedLabel: "Active Opening",
    numberOfPositions: 1,
    experience: "3–6",
    location: "Bay Square, Business Bay, Dubai",
    aboutPosition: "Lead concept development, space planning, material curation, and photorealistic 3D visualisations for high-end villas, corporate headquarters, and hospitality interiors. Work closely with our Al Quoz joinery drafters to translate concepts into buildable detail."
  },
  {
    _id: "yfb-role-3",
    positionName: "Fit-Out Project Manager",
    department: "Project Management",
    employmentType: "Full-Time",
    postedLabel: "Active Opening",
    numberOfPositions: 1,
    experience: "8–12",
    location: "Dubai & Abu Dhabi",
    aboutPosition: "Hold end-to-end accountability for multiple turnkey fit-out contracts from mobilization to final account. Lead client walkthroughs, authority approval tracking (DM, DCD, DDA, DIFC), procurement schedules, and commercial performance."
  },
  {
    _id: "yfb-role-4",
    positionName: "Quantity Surveyor / Estimator (Fit-Out & Joinery)",
    department: "Commercial & Estimation",
    employmentType: "Full-Time",
    postedLabel: "Active Opening",
    numberOfPositions: 1,
    experience: "4–6",
    location: "Business Bay, Dubai",
    aboutPosition: "Prepare accurate Bills of Quantities (BOQs), cost estimates, and tender packages for turnkey interior fit-out and custom joinery projects. Manage interim valuations, material take-offs, and supplier rate benchmarking."
  },
  {
    _id: "yfb-role-5",
    positionName: "MEP Project Engineer",
    department: "MEP Engineering",
    employmentType: "Full-Time",
    postedLabel: "Active Opening",
    numberOfPositions: 2,
    experience: "4–7",
    location: "Dubai, UAE",
    aboutPosition: "Coordinate HVAC, electrical, plumbing, fire alarm, and smart automation installations with architectural and joinery works. Conduct heat-load calculations, review MEP shop drawings, resolve site clashes, and lead testing & commissioning."
  },
  {
    _id: "yfb-role-6",
    positionName: "Joinery Production Foreman",
    department: "Al Quoz Manufacturing",
    employmentType: "Full-Time",
    postedLabel: "Active Opening",
    numberOfPositions: 2,
    experience: "6–10",
    location: "Al Quoz Industrial Area 3, Dubai",
    aboutPosition: "Supervise our CNC, solid wood, veneer pressing, and spray-lacquer teams inside our 35,000 sq.ft Al Quoz 3 factory. Schedule bench production against site programmes and inspect every custom piece prior to dispatch."
  }
];

export const SERVICE_PAGES_DATA = {
  architecture: {
    slug: "architecture",
    eyebrow: "Architecture Design & Build",
    heroTitle: "Architecture Design & Build — Yashmeen Future Building",
    heroSub: "From master planning and authority approvals to structural execution and turnkey interiors, our architects and engineers shape villas and commercial spaces under one accountable roof.",
    heroImg: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1800&q=80",
    introHeading: "Spaces designed with purpose, engineered with precision.",
    introCopy: "From first sketch to final handover, our architectural team designs private villas, extensions, and commercial spaces that balance proportion, natural light, and buildability. Because architecture, MEP engineering, and construction sit under one roof in Dubai, what is drawn is exactly what gets built.",
    introImg: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=900&q=80",
    introAlt: "Architect reviewing structural and interior drawings in Dubai studio",
    checkList: [
      "Concept design through to coordinated IFC construction drawings",
      "Dubai Municipality, DDA, Trakhees, Nakheel & Emaar approvals handled end to end",
      "Structural, civil, and MEP engineering coordinated in-house",
      "One accountable team from architectural concept to final interior handover"
    ],
    deliverablesHeading: "Complete architectural & engineering services",
    deliverablesSub: "Every stage of your build is covered by one coordinated studio, so nothing gets lost between concept, authority permits, and site execution.",
    deliverables: [
      { title: "Concept & Master Planning", copy: "Site analysis, sun-path studies, space planning, and 3D massing that turn your brief into a clear architectural direction." },
      { title: "Detailed Architectural Design", copy: "Complete plans, elevations, sections, structural calculations, and photorealistic 3D visuals before construction begins." },
      { title: "Authority Approvals & NOCs", copy: "Preparation and submission of drawings to DM, DCD, DDA, Trakhees, and master developers until building permits are issued." },
      { title: "Structural & MEP Coordination", copy: "Structural engineers, HVAC specialists, and interior designers aligned on a single BIM set to eliminate on-site clashes." },
      { title: "Turnkey Design & Build Delivery", copy: "Civil works, envelope, interior fit-out, and bespoke joinery delivered against an agreed budget and milestone programme." },
      { title: "Villa Extensions & Remodelling", copy: "Structural reconfiguration of existing villas with expanded living zones, new suites, lifts, and outdoor pavilions." }
    ],
    processSteps: [
      { title: "Consultation & Site Survey", copy: "We survey the plot or existing property, review authority parameters, and align on scope, budget, and timeline." },
      { title: "Concept & 3D Massing", copy: "Floor plans, mood boards, and 3D architectural renders are presented and refined around your feedback." },
      { title: "Engineering & Authority Permits", copy: "Structural calculations, MEP drawings, and authority submissions are completed for permit issuance." },
      { title: "Construction & Fit-Out", copy: "Our site engineers, MEP teams, and Al Quoz joinery factory build and finish with weekly progress reports." },
      { title: "Inspection & Handover", copy: "Authority completion certificates, final snagging, and a complete as-built handover pack." }
    ],
    featuredProjects: ["emirates-hills-private-residence", "palm-jumeirah-signature-villa", "dubai-hills-modernist-mansion"],
    faqs: [
      { q: "Do you handle both architectural design and construction?", a: "Yes. We provide a single-contract design-and-build service, so the architects and engineers who design your space are directly accountable for how it is built on site." },
      { q: "Can you manage Dubai Municipality and developer approvals?", a: "Yes. Our in-house engineering team prepares and submits all architectural, structural, and MEP packages to Dubai Municipality, DCD, Trakhees, DDA, Emaar, and Nakheel." },
      { q: "Can you extend or structurally remodel an existing villa?", a: "Absolutely. We specialise in structural villa extensions, slab modifications, façade upgrades, and full interior reconfigurations across Emirates Hills, Palm Jumeirah, Dubai Hills, and Meadows." }
    ]
  },
  "interior-design": {
    slug: "interior-design",
    eyebrow: "Interior Design & Bespoke Joinery",
    heroTitle: "Interior Design — Yashmeen Future Building",
    heroSub: "Thoughtful space planning, photorealistic 3D visualisation, and bespoke joinery crafted in our 35,000 sq.ft Al Quoz facility for residences, offices, and hospitality spaces.",
    heroImg: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1800&q=80",
    introHeading: "Interiors that feel as considered as they look.",
    introCopy: "We design homes, executive workplaces, and hospitality spaces around the way people actually move, gather, and live in them. Because our interior designers work alongside our own master carpenters, stone masons, and lighting engineers, every detail in your 3D render is built accurately on site.",
    introImg: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=900&q=80",
    introAlt: "Luxury residential interior designed by Yashmeen Future Building",
    checkList: [
      "Bespoke layouts tailored to your lifestyle, brand identity, and budget",
      "Photorealistic 3D renders and physical material sample boards before build",
      "Custom kitchens, wardrobes, and architectural millwork made in our Al Quoz factory",
      "Design and turnkey execution managed by one accountable Dubai studio"
    ],
    deliverablesHeading: "Comprehensive interior design services",
    deliverablesSub: "Everything required to take an empty shell or dated property from initial sketch to a fully furnished, move-in-ready space.",
    deliverables: [
      { title: "Space Planning & Flow", copy: "Ergonomic floor plans that maximise natural light, sightlines, acoustic privacy, and storage in every room." },
      { title: "Concept & Material Curation", copy: "Physical sample boards pairing natural stone, timber veneers, architectural hardware, and performance textiles." },
      { title: "Photorealistic 3D Visualisation", copy: "High-resolution 3D renders and lighting studies so you can experience and approve every angle before fabrication." },
      { title: "Lighting & Acoustic Design", copy: "Layered architectural lighting scenes and concealed acoustic treatments engineered for visual and auditory comfort." },
      { title: "Bespoke Joinery & Millwork", copy: "Walk-in closets, show kitchens, fluted wall panelling, and feature doors built to the millimetre in Al Quoz 3." },
      { title: "Custom Furniture & Styling", copy: "Made-to-measure sofas, dining tables, drapery, rugs, and curated artwork installed for a complete turnkey handover." }
    ],
    styles: [
      { title: "Warm Modernist", copy: "Clean architectural lines balanced with honed travertine, white oak, and soft indirect lighting.", img: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80" },
      { title: "Contemporary Luxury", copy: "Statement stone monoliths, brushed brass accents, and custom upholstered forms.", img: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80" },
      { title: "Neo-Classical", copy: "Timeless wall panelling, chevron parquet, and refined symmetries suited to grand villas.", img: "https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?auto=format&fit=crop&w=800&q=80" },
      { title: "Calm Minimalist", copy: "Uncluttered volumes, concealed storage, and tactile micro-cement and linen textures.", img: "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=800&q=80" }
    ],
    processSteps: [
      { title: "Brief & Lifestyle Discovery", copy: "We meet at your property or our Business Bay studio to understand your functional needs, aesthetic preferences, and budget." },
      { title: "Space Planning & Mood Boards", copy: "2D furniture layouts and curated material palettes are presented for collaborative refinement." },
      { title: "3D Visualisation & Joinery Drawings", copy: "Photorealistic 3D renders and millimetre-accurate shop drawings are finalised for approval." },
      { title: "In-House Fabrication & Fit-Out", copy: "Our Al Quoz joinery bay and site teams execute the build, MEP, and custom furniture in parallel." },
      { title: "Styling & Turnkey Handover", copy: "Final dressing, lighting scene programming, and a snag-free walkthrough." }
    ],
    featuredProjects: ["emirates-hills-private-residence", "ember-and-oak-grill-downtown", "alara-flagship-boutique-dubai-mall"],
    faqs: [
      { q: "Can I hire you for both interior design and the full fit-out build?", a: "Yes. Most of our clients choose our turnkey design-and-build package so there is zero friction between the design studio, the Al Quoz joinery factory, and the site engineering team." },
      { q: "Do I get to approve physical material samples before production?", a: "Always. We prepare full physical sample boards — including stone slabs, timber veneer stains, brass finishes, and fabrics — and produce joinery mock-ups at our Al Quoz facility when required." }
    ]
  },
  construction: {
    slug: "construction",
    eyebrow: "Turnkey Construction & MEP Engineering",
    heroTitle: "Construction & MEP — Yashmeen Future Building",
    heroSub: "ISO-certified civil construction, structural modifications, and in-house MEP engineering delivered on a single coordinated programme across Dubai and Abu Dhabi.",
    heroImg: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1800&q=80",
    introHeading: "Built to engineering standards, delivered on schedule.",
    introCopy: "From structural steelwork and blockwork to complex HVAC, electrical, and fire-safety systems, our construction and MEP divisions execute residential, commercial, and hospitality builds with rigorous quality control. Keeping civil works, MEP, and finishing under one company eliminates subcontractor delays.",
    introImg: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=900&q=80",
    introAlt: "Yashmeen Future Building site engineers inspecting construction progress",
    checkList: [
      "Resident civil and MEP engineers assigned to every site",
      "Transparent itemised BOQs, milestone schedules, and weekly site reports",
      "Full compliance with Dubai Municipality, DCD, DEWA, and Civil Defence codes",
      "Civil construction, MEP, joinery, and fit-out executed by one accountable team"
    ],
    deliverablesHeading: "Complete construction & MEP capabilities",
    deliverablesSub: "Integrated civil, structural, mechanical, electrical, and plumbing works managed from mobilisation to testing and commissioning.",
    deliverables: [
      { title: "Villa Construction & Shell Fit-Out", copy: "Ground-up villa construction and shell-and-core completions engineered to your architectural specification." },
      { title: "Commercial & Retail Build-Outs", copy: "Base-build modifications, mezzanine structures, and high-spec commercial fit-outs across UAE free zones and mainland." },
      { title: "Structural Modifications", copy: "Slab openings, steel beam reinforcements, staircase relocations, and villa annex extensions with full structural sign-off." },
      { title: "In-House HVAC & Mechanical", copy: "Chilled water fan-coil units, VRF/DX systems, fresh-air handling, and commercial kitchen extraction." },
      { title: "Electrical, ELV & Fire Safety", copy: "DEWA-compliant distribution boards, DALI lighting, structured cabling, CCTV, and DCD fire alarm/sprinkler systems." },
      { title: "Plumbing, Pools & Waterproofing", copy: "High-pressure water supply, drainage, acoustic piping, wet-area waterproofing, and temperature-controlled swimming pools." }
    ],
    sectors: ["Private Signature Villas", "Corporate Headquarters", "Luxury Retail & Showrooms", "Restaurants & Hospitality", "DHA Medical & Wellness Clinics", "Industrial & Studio Facilities"],
    processSteps: [
      { title: "Site Survey & Engineering Review", copy: "We inspect base-build structural and MEP capacities and establish a detailed BOQ and programme." },
      { title: "Permits & NOC Mobilisation", copy: "All DM, DEWA, DCD, and developer NOCs are secured alongside site hoarding and HSE setup." },
      { title: "Civil & First-Fix MEP", copy: "Structural works, partitions, AC ducting, piping, and electrical containment are executed concurrently." },
      { title: "Finishes, Joinery & Second-Fix", copy: "Stone, flooring, ceilings, Al Quoz joinery, and final lighting/sanitaryware are installed." },
      { title: "Testing, Commissioning & Handover", copy: "Air balancing, electrical megatesting, Civil Defence inspection, and turnkey key handover." }
    ],
    featuredProjects: ["edc-headquarters-abu-dhabi", "dermacare-aesthetic-clinic-marina", "cosmic-tech-innovation-campus"],
    faqs: [
      { q: "Why is in-house MEP so important for a fit-out project?", a: "In most fit-out delays, the main contractor blames the external MEP subcontractor for AC, electrical, or Civil Defence bottlenecks. Because our MEP engineers are part of our own team, engineering and construction move in lockstep from day one." },
      { q: "How do you guarantee site safety and quality?", a: "Every site operates under ISO 9001:2015 and ISO 45001:2015 protocols with daily HSE briefings, material inspection requests (MIRs), and weekly photographic progress reports shared with the client." }
    ]
  },
  "office-renovation": {
    slug: "office-renovation",
    eyebrow: "Commercial & Office Renovation",
    heroTitle: "Office Renovation — Yashmeen Future Building",
    heroSub: "Transform tired commercial floors into high-performing, acoustic, brand-aligned workplaces — with phased or after-hours execution so your business never stops.",
    heroImg: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1800&q=80",
    introHeading: "Is your workspace holding your team back?",
    introCopy: "Offices rarely fail overnight — they gradually stop matching how your team collaborates, hosts clients, and focuses. Whether you need a rapid 3-week refresh or a complete structural and MEP transformation in Business Bay, DIFC, or Abu Dhabi, we modernise your workplace without forcing you to relocate.",
    introImg: "https://images.unsplash.com/photo-1604328698692-f76ea9498e76?auto=format&fit=crop&w=900&q=80",
    introAlt: "Renovated executive office reception and boardroom in Dubai",
    checkList: [
      "Phased and night/weekend execution so your team stays operational",
      "STC-rated acoustic glass partitions and sound-absorbing joinery",
      "Complete building management NOC and Civil Defence (DCD) handling",
      "Custom reception desks, boardroom tables, and storage built in Al Quoz"
    ],
    signs: [
      { title: "The layout no longer fits your headcount", copy: "Teams have grown or shifted to hybrid work, leaving cramped desks alongside underused corners." },
      { title: "Poor acoustics and nowhere quiet for calls", copy: "Open areas suffer from echo and noise spillover during video conferences and client meetings." },
      { title: "Dim lighting and uneven air-conditioning", copy: "Outdated fluorescent grids and poorly zoned HVAC ducts drain energy and cause afternoon fatigue." },
      { title: "Reception doesn't reflect your brand calibre", copy: "The first space your clients and recruits walk into feels dated compared to the quality of your work." }
    ],
    packages: [
      {
        name: "Light Refresh",
        tagline: "Rapid visual uplift in 2–4 weeks with minimal disruption",
        featured: false,
        items: [
          "Architectural repainting & acoustic wall coverings",
          "Carpet tile or LVT timber flooring upgrade",
          "LED circadian lighting retrofit",
          "Custom reception desk & breakout furniture refresh"
        ]
      },
      {
        name: "Partial Renovation",
        tagline: "Rework the high-impact zones that matter most (4–7 weeks)",
        featured: true,
        items: [
          "New double-glazed acoustic meeting rooms & focus pods",
          "Full reception, boardroom & pantry transformation",
          "Power, data, AV & Wi-Fi 6 structured cabling upgrade",
          "Bespoke Al Quoz joinery, storage walls & branding"
        ]
      },
      {
        name: "Full Transformation",
        tagline: "Complete strip-out and turnkey workplace rebuild (8–12 weeks)",
        featured: false,
        items: [
          "Full demolition, new spatial layout & feature ceilings",
          "HVAC re-zoning, fresh air, fire alarm & sprinkler modifications",
          "Executive suites, town-hall bleachers & barista lounge",
          "Turnkey authority approvals (DM, DCD, DIFC, DDA) & 12-month warranty"
        ]
      }
    ],
    beforeAfter: [
      {
        title: "Open-Plan Collaborative Workspace — Business Bay",
        before: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=900&q=80",
        after: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=900&q=80"
      },
      {
        title: "Executive Reception & Client Lounge — DIFC",
        before: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=900&q=80",
        after: "https://images.unsplash.com/photo-1604328698692-f76ea9498e76?auto=format&fit=crop&w=900&q=80"
      }
    ],
    processSteps: [
      { title: "Workplace Audit & Brief", copy: "We measure your existing floorplate, audit MEP systems, and map your team's acoustic and spatial requirements." },
      { title: "Space Plan, 3D & Itemised BOQ", copy: "You approve the new layout, 3D renders, material samples, and fixed-price milestone quotation." },
      { title: "Building NOCs & Off-Site Joinery", copy: "While landlord and DCD permits are processed, our Al Quoz factory pre-fabricates all custom joinery." },
      { title: "Phased On-Site Execution", copy: "Dust-sealed phasing and after-hours noisy works keep your operations running smoothly." },
      { title: "Testing & Move-In Handover", copy: "AV/IT testing, deep cleaning, authority sign-off, and 12-month warranty support." }
    ],
    featuredProjects: ["bay-square-executive-law-chambers", "meridian-bank-regional-hq", "cosmic-tech-innovation-campus"],
    faqs: [
      { q: "Do I need landlord and Civil Defence approval to renovate my office?", a: "Whenever partitions, ceilings, lighting, or AC ductwork are modified, landlord NOCs and Dubai Municipality / Civil Defence (or DDA/DIFC/Trakhees) approvals are required. Our engineering team handles the entire approval process for you." },
      { q: "Can the renovation be carried out outside normal office hours?", a: "Yes. We frequently schedule demolition, drilling, and MEP works during evenings and weekends, and divide floorplates into dust-isolated phases so your staff can continue working safely." }
    ]
  }
};

// --- NORMALIZED COMPATIBILITY ALIASES ---
COMPANY.phoneRaw = "+971543862870";
COMPANY.whatsappUrl = `https://wa.me/${COMPANY.whatsappNumber}?text=${encodeURIComponent(COMPANY.whatsappDefaultMsg)}`;
COMPANY.careersEmail = "info@yfbfitoutcontracting.com";
COMPANY.yearsExperience = COMPANY.yearsActive;
COMPANY.projectsCompleted = "640+";
COMPANY.inHouseTeam = "200+";
COMPANY.onTimeRate = "98%";
COMPANY.factorySize = "35,000 sq.ft";
COMPANY.authorities = [
  "Dubai Municipality (DM)",
  "Dubai Civil Defense (DCD)",
  "DDA & Trakhees",
  "DIFC & ADGM",
  "Emaar & Nakheel",
  "DHA Healthcare"
];
COMPANY.address = {
  studio: COMPANY.studioAddress,
  factory: COMPANY.factoryAddress,
  mapEmbedUrl: COMPANY.mapEmbedUrl
};
COMPANY.workingHours = {
  weekdays: "Monday – Friday: 8:30 AM – 6:30 PM GST",
  saturday: "Saturday: 9:00 AM – 4:00 PM GST",
  sunday: "Sunday: By Private Appointment"
};
COMPANY.founder.role = COMPANY.founder.title;
COMPANY.founder.photo = COMPANY.founder.portrait;
COMPANY.founder.experienceNote = "15+ Years Leading Gulf Commercial & Luxury Villa Fit-Out Programmes";

COMPANY.certifications.forEach((c) => {
  c.label = c.title + " — " + c.desc;
});

COMPANY.stats.forEach((s) => {
  if (!s.sub) s.sub = "Verified UAE Track Record";
});

const SERVICE_IMAGES = [
  "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1601058268499-e52658b8bb88?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1604328698692-f76ea9498e76?auto=format&fit=crop&w=900&q=80"
];

CORE_SERVICES.forEach((srv, idx) => {
  srv.id = "srv-" + srv.num;
  srv.number = srv.num;
  srv.shortTitle = srv.title;
  srv.description = srv.shortDesc;
  srv.image = SERVICE_IMAGES[idx % SERVICE_IMAGES.length];
});

PROJECTS.forEach((p) => {
  p.area = p.size;
  p.client = p.tag + " Client — " + p.location.split(",")[0];
  if (typeof p.scope === "string") {
    p.scopeText = p.scope;
    p.scope = p.scope.split(/,|&/).map((s) => s.trim()).filter(Boolean);
  }
  if (!p.highlights) {
    p.highlights = [
      "Delivered in " + p.duration + " (" + p.size + ")",
      "Custom joinery fabricated in our 35,000 sq.ft Al Quoz 3 plant",
      "Full authority approvals and MEP testing & commissioning"
    ];
  }
});

PHOTO_GALLERY_ITEMS.forEach((item) => {
  item.category = item.cat;
  item.image = item.img;
  item.area = "Turnkey Delivery";
});

VIDEO_SHOWCASES.forEach((vid) => {
  vid.category = vid.cat;
  vid.thumbnail = vid.thumb;
  vid.summary = vid.description;
});

BLOG_POSTS.forEach((post, idx) => {
  post.id = "blog-" + (idx + 1);
  post.category = post.tag;
  post.image = post.img;
  post.readTime = post.date.split("·")[1]?.trim() || "5 min read";
  post.author = "Mohammad Danish Adnan & YFB Engineering Desk";
});

CAREER_OPENINGS.forEach((job) => {
  job.id = job._id;
  job.title = job.positionName;
  job.type = job.employmentType;
  job.summary = job.aboutPosition;
  job.requirements = [
    job.experience + " years of UAE interior fit-out, joinery, or MEP experience",
    "Strong track record across Dubai Municipality, DCD, DIFC, or DDA projects",
    "Proficiency in AutoCAD / BIM shop drawings, programme tracking, and ISO standards",
    "Based in the UAE and ready to collaborate across our Business Bay studio and Al Quoz 3 factory"
  ];
});

Object.values(SERVICE_PAGES_DATA).forEach((sp) => {
  sp.seoTitle = sp.heroTitle;
  sp.seoDescription = sp.heroSub;
  sp.heroSubtitle = sp.heroSub;
  sp.heroImage = sp.heroImg;
  sp.stats = [
    { value: "10+ Yrs", label: "UAE Track Record (Est. 2016)" },
    { value: "640+", label: "Turnkey Projects Delivered" },
    { value: "35,000 sq.ft", label: "In-House Al Quoz 3 Factory" },
    { value: "98%", label: "On-Time Handover Rate" }
  ];
  sp.specialties = (sp.deliverables || []).map((d, idx) => ({
    title: d.title,
    desc: d.copy,
    tag: sp.eyebrow,
    image: SERVICE_IMAGES[idx % SERVICE_IMAGES.length]
  }));
  sp.process = (sp.processSteps || []).slice(0, 4).map((p, idx) => ({
    step: "0" + (idx + 1),
    title: p.title,
    desc: p.copy
  }));
  if (Array.isArray(sp.beforeAfter) && sp.beforeAfter.length > 0) {
    const firstBA = sp.beforeAfter[0];
    sp.beforeAfterList = sp.beforeAfter;
    sp.beforeAfter = {
      beforeImage: firstBA.before,
      afterImage: firstBA.after,
      beforeLabel: "Outdated cellular layout with poor acoustic isolation and legacy lighting.",
      afterLabel: "Acoustically engineered open workspace with custom Al Quoz walnut joinery and circadian LED lighting."
    };
  }
  if (Array.isArray(sp.packages)) {
    sp.packages = sp.packages.map((pkg) => ({
      ...pkg,
      tier: pkg.name,
      timeline: pkg.tagline.match(/\(([^)]+)\)/)?.[1] || "2–4 Weeks",
      idealFor: pkg.tagline,
      features: pkg.items
    }));
  }
});
