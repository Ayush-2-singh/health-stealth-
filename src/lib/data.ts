import { NavItem, Product, Technology, Application, TimelineItem, Career, ResearchArea, Stat } from "@/types";

export const navItems: NavItem[] = [
  { label: "About", href: "/about" },
  { label: "Technology", href: "/technology" },
  { label: "Products", href: "/products" },
  { label: "Applications", href: "/applications" },
  { label: "Manufacturing", href: "/manufacturing" },
  { label: "Research", href: "/research" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];

export const stats: Stat[] = [
  { value: "15", label: "Years of Innovation", suffix: "+" },
  { value: "200", label: "Defense Partners", suffix: "+" },
  { value: "47", label: "Countries Deployed", suffix: "" },
  { value: "99.7", label: "Signature Reduction", suffix: "%" },
];

export const technologies: Technology[] = [
  { id: "radar", name: "Radar Absorption", band: "RF / Microwave", description: "Advanced metamaterial coatings that absorb and dissipate radar energy across multiple frequency bands, reducing radar cross-section by up to 99.7%.", icon: "radar", wavelength: "300 MHz - 40 GHz" },
  { id: "infrared", name: "Infrared Management", band: "IR Spectrum", description: "Thermally adaptive surfaces that match ambient temperature signatures, making platforms virtually invisible to infrared detection systems.", icon: "infrared", wavelength: "0.7 - 14 μm" },
  { id: "thermal", name: "Thermal Suppression", band: "LWIR / MWIR", description: "Multi-layer insulation systems that suppress heat emission from engines, exhausts, and operational surfaces to evade thermal imaging.", icon: "thermal", wavelength: "3 - 14 μm" },
  { id: "uv", name: "UV Signature Control", band: "Ultraviolet", description: "Specialized coatings that eliminate ultraviolet reflectance, preventing detection by UV-sensitive surveillance and targeting systems.", icon: "uv", wavelength: "10 - 400 nm" },
  { id: "visible", name: "Visual Camouflage", band: "Visible Light", description: "Adaptive multi-terrain camouflage patterns that blend seamlessly with any environment, from arctic to desert to urban landscapes.", icon: "visible", wavelength: "380 - 750 nm" },
  { id: "swir", name: "SWIR Countermeasures", band: "Short-Wave IR", description: "Short-wave infrared signature management for defeating advanced night vision and laser-based detection systems.", icon: "swir", wavelength: "1 - 3 μm" },
  { id: "mwir", name: "MWIR Suppression", band: "Mid-Wave IR", description: "Mid-wave infrared thermal management targeting hot components and engine bays to defeat missile seeker systems.", icon: "mwir", wavelength: "3 - 5 μm" },
  { id: "lwir", name: "LWIR Evasion", band: "Long-Wave IR", description: "Long-wave infrared signature control for complete thermal invisibility against modern FLIR and thermal imaging systems.", icon: "lwir", wavelength: "8 - 14 μm" },
];

export const products: Product[] = [
  { id: "nets", title: "Multi-Spectral Camouflage Nets", category: "Signature Management", description: "Lightweight, deployable netting systems providing simultaneous protection against radar, infrared, thermal, and visual detection across all spectral bands.", image: "/products/nets.jpg", features: ["Multi-spectral coverage", "Rapid deployment", "Modular design", "Weather resistant"] },
  { id: "suits", title: "Advanced Sniper Suits", category: "Personal Stealth", description: "Full-body ghillie systems engineered for special operations, combining 3D camouflage with thermal suppression and radar absorption for complete operator concealment.", image: "/products/suits.jpg", features: ["3D camouflage", "Thermal suppression", "Breathable design", "All-terrain"] },
  { id: "paint", title: "Thermal Control Paint", category: "Surface Coatings", description: "High-performance emissivity control coatings that regulate surface temperature signatures while providing durable, weather-resistant protection.", image: "/products/paint.jpg", features: ["Low emissivity", "UV stable", "Chemical resistant", "Multi-coat system"] },
  { id: "radar-coating", title: "Radar Absorbing Coating", category: "Stealth Coatings", description: "Next-generation RAM systems utilizing metamaterial structures to absorb radar energy across wide frequency bands with minimal weight penalty.", image: "/products/rac.jpg", features: ["Wideband absorption", "Lightweight", "Durable", "Easy application"] },
  { id: "shelter", title: "Camouflage Shelter Systems", category: "Field Infrastructure", description: "Rapidly deployable shelter systems with integrated multi-spectral signature management for command posts, field hospitals, and logistics hubs.", image: "/products/shelter.jpg", features: ["Rapid setup", "Full spectrum", "Climate controlled", "Scalable"] },
  { id: "textiles", title: "Military Technical Textiles", category: "Advanced Materials", description: "High-performance textile solutions combining ballistic protection, flame resistance, and signature management in lightweight, durable fabrics.", image: "/products/textiles.jpg", features: ["Ballistic rated", "Flame retardant", "Signature managed", "Lightweight"] },
];

export const applications: Application[] = [
  { id: "land", title: "Land Forces", description: "Comprehensive signature management solutions for ground vehicles, armored platforms, and forward operating bases, ensuring operational superiority in contested environments.", icon: "land", features: ["Vehicle concealment", "Base protection", "Mobility preservation", "Rapid deployment"] },
  { id: "air", title: "Air Force", description: "Advanced stealth coatings and signature reduction systems for aircraft, UAVs, and aerial platforms, minimizing radar cross-section and infrared signatures.", icon: "air", features: ["Aircraft stealth", "UAV signature control", "Engine suppression", "Aerodynamic coatings"] },
  { id: "navy", title: "Navy", description: "Maritime stealth solutions for surface vessels and submarines, reducing radar signature, acoustic profile, and thermal emissions in naval operations.", icon: "navy", features: ["Ship stealth", "Submarine concealment", "Marine coatings", "Saltwater resistant"] },
  { id: "special", title: "Special Forces", description: "Mission-critical personal stealth systems for special operations forces, providing complete multi-spectral concealment in high-risk environments.", icon: "special", features: ["Operator stealth", "Mission adaptable", "Lightweight", "All-environment"] },
  { id: "infrastructure", title: "Critical Infrastructure", description: "Signature management and concealment solutions for critical national infrastructure, protecting strategic assets from surveillance and targeting.", icon: "infrastructure", features: ["Asset protection", "Surveillance denial", "Perimeter security", "Long-term durability"] },
];

export const timeline: TimelineItem[] = [
  { id: "1", year: "2009", title: "Foundation", description: "Hyper Stealth Technologies founded with a mission to revolutionize multi-spectral signature management for modern defense." },
  { id: "2", year: "2012", title: "First Patent", description: "Awarded breakthrough patent for metamaterial-based radar absorption technology, setting new industry standards." },
  { id: "3", year: "2015", title: "Global Expansion", description: "Expanded operations to 15 countries, establishing partnerships with NATO-aligned defense forces." },
  { id: "4", year: "2018", title: "Thermal Breakthrough", description: "Launched revolutionary thermal suppression system achieving 99% infrared signature reduction." },
  { id: "5", year: "2021", title: "AI Integration", description: "Integrated AI-driven adaptive camouflage systems, enabling real-time environmental response." },
  { id: "6", year: "2024", title: "Next Generation", description: "Unveiled quantum-enhanced signature management platform, redefining stealth technology for the future." },
];

export const careers: Career[] = [
  { id: "1", title: "Senior Materials Scientist", department: "Research & Development", location: "HQ - Classified", type: "Full-time", description: "Lead development of next-generation metamaterials for multi-spectral signature management." },
  { id: "2", title: "Electromagnetic Engineer", department: "Engineering", location: "HQ - Classified", type: "Full-time", description: "Design and optimize electromagnetic signature reduction systems for defense platforms." },
  { id: "3", title: "Thermal Systems Engineer", department: "Engineering", location: "HQ - Classified", type: "Full-time", description: "Develop advanced thermal suppression systems for military applications." },
  { id: "4", title: "Manufacturing Technician", department: "Production", location: "Manufacturing Facility", type: "Full-time", description: "Operate and maintain advanced manufacturing equipment for stealth coating production." },
  { id: "5", title: "Quality Assurance Specialist", department: "Quality", location: "HQ - Classified", type: "Full-time", description: "Ensure all products meet stringent defense specifications and performance standards." },
  { id: "6", title: "Defense Sales Director", department: "Business Development", location: "Multiple Locations", type: "Full-time", description: "Drive strategic partnerships with defense ministries and military organizations worldwide." },
];

export const researchAreas: ResearchArea[] = [
  { id: "labs", title: "Research Laboratories", description: "State-of-the-art facilities equipped with advanced characterization tools and testing chambers for multi-spectral analysis.", icon: "labs", focus: ["Spectral analysis", "Material characterization", "Environmental testing", "Performance validation"] },
  { id: "innovation", title: "Innovation Hub", description: "Dedicated R&D center focused on breakthrough technologies, fostering collaboration between scientists, engineers, and defense experts.", icon: "innovation", focus: ["Emerging technologies", "Prototype development", "Cross-disciplinary research", "Patent generation"] },
  { id: "materials", title: "Material Science", description: "Pioneering research in metamaterials, nanomaterials, and advanced composites for unprecedented signature management capabilities.", icon: "materials", focus: ["Metamaterials", "Nanomaterials", "Smart composites", "Adaptive surfaces"] },
  { id: "electromagnetic", title: "Electromagnetic Engineering", description: "Advanced electromagnetic simulation and testing for optimizing radar cross-section reduction across all frequency bands.", icon: "electromagnetic", focus: ["RCS optimization", "Frequency analysis", "Antenna design", "EMC/EMI solutions"] },
  { id: "thermal", title: "Thermal Engineering", description: "Cutting-edge thermal management research focusing on infrared signature suppression and heat dissipation control.", icon: "thermal", focus: ["IR suppression", "Heat management", "Emissivity control", "Thermal modeling"] },
];

export const manufacturingSteps = [
  { id: "research", title: "Research & Development", description: "Advanced material formulation and prototype development in controlled laboratory environments.", icon: "research" },
  { id: "selection", title: "Material Selection", description: "Rigorous selection of raw materials meeting defense-grade specifications and performance requirements.", icon: "selection" },
  { id: "testing", title: "Testing & Validation", description: "Comprehensive multi-spectral testing across all operational environments and threat scenarios.", icon: "testing" },
  { id: "production", title: "Precision Production", description: "Automated manufacturing processes ensuring consistent quality and repeatability at scale.", icon: "production" },
  { id: "quality", title: "Quality Control", description: "Multi-stage inspection and validation against military specifications and performance standards.", icon: "quality" },
  { id: "deployment", title: "Global Deployment", description: "Secure logistics and deployment to defense partners worldwide with full lifecycle support.", icon: "deployment" },
];
