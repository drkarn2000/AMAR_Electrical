export type ServiceCategory = 'All' | 'Residential' | 'Commercial' | 'Industrial' | 'Maintenance';

export interface ServiceDetail {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  category: ServiceCategory;
  additionalCategories?: ServiceCategory[];
  iconName: string;
  image: string;
  badge?: string;
  features: string[];
}

export const serviceCategories: { label: string; value: ServiceCategory; count?: number }[] = [
  { label: 'All Services', value: 'All' },
  { label: 'Residential', value: 'Residential' },
  { label: 'Commercial', value: 'Commercial' },
  { label: 'Industrial', value: 'Industrial' },
  { label: 'Maintenance & Repairs', value: 'Maintenance' }
];

export const allServices: ServiceDetail[] = [
  {
    id: 'home-wiring',
    slug: 'home-electrical-wiring',
    title: 'Home Electrical Wiring',
    shortDescription: 'Safe and neat wiring for homes with modern electrical solutions.',
    longDescription: 'Complete residential wiring engineered for optimal safety, longevity and clean aesthetics. We use ISI-grade conduits, heat-resistant copper conductors, and structured circuitry for every room.',
    category: 'Residential',
    iconName: 'Home',
    image: '/services/home-wiring.jpg',
    badge: 'Popular',
    features: ['Concealed & surface conduit wiring', 'Fire-retardant grade wires', 'Individual room circuit breakers']
  },
  {
    id: 'new-house-wiring',
    slug: 'new-house-wiring',
    title: 'New House Wiring',
    shortDescription: 'Complete electrical wiring for new homes and constructions.',
    longDescription: 'End-to-end electrical architecture planning and conduit execution for under-construction houses and villas, synchronized perfectly with civil construction timelines.',
    category: 'Residential',
    iconName: 'Building',
    image: '/services/new-house-wiring.jpg',
    badge: 'Turnkey',
    features: ['Slab conduit pipe laying', 'Wall groove cutting & metal box installation', 'Main distribution board dressing']
  },
  {
    id: 'office-wiring',
    slug: 'office-wiring',
    title: 'Office Wiring',
    shortDescription: 'Professional wiring solutions for offices and workplaces.',
    longDescription: 'Structured corporate electrification including dedicated computer power grids, server room feeds, conference room multimedia wiring, and UPS distribution.',
    category: 'Commercial',
    iconName: 'Building2',
    image: '/services/office-wiring.jpg',
    features: ['Clean workstation raceway power', 'Raw & UPS dual grid routing', 'Data cabling and switchboard integration']
  },
  {
    id: 'factory-wiring',
    slug: 'factory-wiring',
    title: 'Factory Wiring',
    shortDescription: 'Heavy-duty wiring for factories and industrial units.',
    longDescription: 'Industrial grade electrification engineered for high current draw, vibration resilience, and stringent safety standards in manufacturing plants and warehouses.',
    category: 'Industrial',
    iconName: 'Factory',
    image: '/services/factory-wiring.jpg',
    badge: 'Heavy Duty',
    features: ['Armored XLPE cable laying on trays', 'Motor starter & drive wiring', 'Plant earthing grid bonding']
  },
  {
    id: 'electrical-maintenance',
    slug: 'electrical-maintenance',
    title: 'Electrical Maintenance',
    shortDescription: 'Regular maintenance to keep your electrical systems safe.',
    longDescription: 'Preventive and scheduled maintenance audits for residential complexes, commercial towers, and industries to avoid unexpected outages and hazards.',
    category: 'Maintenance',
    additionalCategories: ['Commercial', 'Industrial'],
    iconName: 'Wrench',
    image: '/services/electrical-maintenance.png',
    features: ['Thermal scanning for loose connections', 'Breaker calibration & trip tests', 'Insulation resistance testing']
  },
  {
    id: 'fault-finding',
    slug: 'fault-finding',
    title: 'Fault Finding',
    shortDescription: 'Accurate fault detection and quick problem resolution.',
    longDescription: 'Advanced diagnostic troubleshooting using calibrated digital multimeters, megohmmeters, and clamp meters to pinpoint hidden wiring faults and leakage.',
    category: 'Maintenance',
    iconName: 'Search',
    image: '/services/fault-finding.jpg',
    badge: 'Diagnostics',
    features: ['Neutral open & phase drop detection', 'Earth leakage fault detection', 'Intermittent short resolution']
  },
  {
    id: 'short-circuit-repair',
    slug: 'short-circuit-repair',
    title: 'Short Circuit Repair',
    shortDescription: 'Fast and safe short circuit repair and system restoration.',
    longDescription: 'Rapid emergency response team for burned conductors, tripped main breakers, sparking points, and catastrophic electrical shorts.',
    category: 'Maintenance',
    iconName: 'AlertTriangle',
    image: '/services/short-circuit-repair.jpg',
    badge: '24/7 Urgent',
    features: ['Immediate circuit isolation', 'Conductor replacement & re-jointing', 'Post-repair safety verification']
  },
  {
    id: 'fan-installation',
    slug: 'fan-installation',
    title: 'Fan Installation',
    shortDescription: 'Installation of all types of fans with proper connections.',
    longDescription: 'Precision installation of ceiling fans, BLDC energy-saving fans, heavy duty exhaust fans, and decorative wall units with balanced vibration-free mounting.',
    category: 'Residential',
    iconName: 'Fan',
    image: '/services/fan-installation.jpg',
    features: ['BLDC fan smart remote sync', 'Heavy-duty ceiling hook anchoring', 'Multi-speed electronic regulator wiring']
  },
  {
    id: 'light-installation',
    slug: 'light-installation',
    title: 'Light Installation',
    shortDescription: 'Indoor and outdoor light installation with safety.',
    longDescription: 'Architectural lighting installation covering COB downlights, magnetic track lights, LED profile strips, chandeliers, and weatherproof garden flood lights.',
    category: 'Residential',
    additionalCategories: ['Commercial'],
    iconName: 'Lightbulb',
    image: '/services/light-installation.jpg',
    features: ['Chandelier & hanging pendant balancing', 'Cove & profile strip concealed lighting', 'Exterior IP65 weatherproof fixtures']
  },
  {
    id: 'mcb-installation',
    slug: 'mcb-installation',
    title: 'MCB Installation',
    shortDescription: 'MCB installation for excellent safety and protection.',
    longDescription: 'Miniature Circuit Breaker (MCB), Isolator, and RCCB/ELCB installation with calculated breaking capacity to safeguard human life and appliances against overloads.',
    category: 'Maintenance',
    additionalCategories: ['Residential', 'Commercial'],
    iconName: 'ShieldAlert',
    image: '/services/mcb-installation.jpg',
    features: ['Correct B/C/D trip curve selection', '30mA human safety RCCB integration', 'Even phase load balancing across poles']
  },
  {
    id: 'earthing',
    slug: 'earthing',
    title: 'Earthing',
    shortDescription: 'Proper earthing solutions for safety and shock protection.',
    longDescription: 'High-performance chemical earthing, copper plate, and pipe earthing systems engineered to maintain ground resistance below 1 Ohm for complete shock immunity.',
    category: 'Residential',
    additionalCategories: ['Industrial'],
    iconName: 'ShieldCheck',
    image: '/services/earthing.jpg',
    badge: 'Safety Crucial',
    features: ['Copper-bonded chemical earth electrodes', 'Low-resistivity backfill compound', 'Earth pit chamber & testing link']
  },
  {
    id: 'inverter-installation',
    slug: 'inverter-installation',
    title: 'Inverter Installation',
    shortDescription: 'Inverter and UPS installation for uninterrupted power.',
    longDescription: 'Complete installation of sine wave inverters, solar hybrid systems, and tubular battery banks with dedicated backup wiring and bypass rotary switches.',
    category: 'Residential',
    additionalCategories: ['Commercial'],
    iconName: 'BatteryCharging',
    image: '/services/inverter-installation.jpg',
    features: ['Heavy battery terminal lug crimping', 'Manual changeover bypass switch', 'Load segregation for critical circuits']
  },
  {
    id: 'cctv-wiring',
    slug: 'cctv-wiring',
    title: 'CCTV Wiring',
    shortDescription: 'CCTV camera wiring and installation for complete security.',
    longDescription: 'High-definition surveillance infrastructure wiring with Cat6 PoE cables, 3+1 coaxial runs, weatherproof junction boxes, and centralized power supplies.',
    category: 'Commercial',
    additionalCategories: ['Residential'],
    iconName: 'Camera',
    image: '/services/cctv-wiring.jpg',
    features: ['Concealed Cat6 / RG59 cable routing', 'PoE switch & DVR/NVR rack power', 'Surge protection on outdoor lines']
  },
  {
    id: 'door-bell-installation',
    slug: 'door-bell-installation',
    title: 'Door Bell Installation',
    shortDescription: 'Video door phone and door bell installation & wiring.',
    longDescription: 'Installation of electronic chimes, multi-tone ringers, and smart video doorbells with magnetic electronic lock integration and outdoor camera units.',
    category: 'Residential',
    iconName: 'Bell',
    image: '/services/door-bell-installation.jpg',
    features: ['Smart Wi-Fi video doorbell pairing', 'Door phone two-way audio intercom', 'Low-voltage transformer wiring']
  },
  {
    id: 'water-pump-installation',
    slug: 'water-pump-installation',
    title: 'Water Pump Installation',
    shortDescription: 'Installation of all types of water pumps and motors.',
    longDescription: 'Submersible, monoblock, and pressure booster pump electrical wiring, including capacitor panels, dry-run protection, and automatic overhead water level controllers.',
    category: 'Residential',
    additionalCategories: ['Industrial'],
    iconName: 'Droplets',
    image: '/services/water-pump-installation.jpg',
    features: ['Submersible pump control starter board', 'Automatic water level sensor wiring', 'Thermal overload protection relay']
  },
  {
    id: 'generator-connection',
    slug: 'generator-connection',
    title: 'Generator Connection',
    shortDescription: 'Generator installation and safe electrical connections.',
    longDescription: 'Safe integration of petrol, diesel, and gas generator sets with property mains, featuring mechanical interlocking changeovers and automatic transfer switches (ATS).',
    category: 'Commercial',
    additionalCategories: ['Industrial'],
    iconName: 'Power',
    image: '/services/generator-connection.jpg',
    badge: 'Power Backup',
    features: ['Automatic / Manual Transfer Switches (ATS/MTS)', 'Separate generator neutral earthing', 'Interlocked reverse feed prevention']
  },
  {
    id: 'three-phase-connection',
    slug: 'three-phase-connection',
    title: 'Three Phase Connection',
    shortDescription: 'Three phase connection for homes, shops and industries.',
    longDescription: '415V Three-Phase electrical installation, load segregation across R-Y-B phases, neutral balancing, and main changeover switchgear for heavy loads.',
    category: 'Industrial',
    additionalCategories: ['Commercial'],
    iconName: 'Network',
    image: '/services/three-phase-connection.jpg',
    features: ['Phase rotation sequence verification', 'Load balancing between R, Y, and B', 'High capacity busbar chamber connection']
  },
  {
    id: 'panel-installation',
    slug: 'panel-installation',
    title: 'Panel Installation',
    shortDescription: 'Distribution panel and control panel installation.',
    longDescription: 'Custom fabrication and on-site assembly of main distribution boards (MDB), sub-distribution boards (SDB), and motor control centers (MCC) with digital metering.',
    category: 'Industrial',
    additionalCategories: ['Commercial'],
    iconName: 'Cpu',
    image: '/services/panel-installation.jpg',
    badge: 'Engineering',
    features: ['Electrolytic copper busbar dressing', 'Multifunction digital energy meters', 'Cable glanding and ferrule numbering']
  },
  {
    id: 'electrical-consultancy',
    slug: 'electrical-consultancy',
    title: 'Electrical Consultancy',
    shortDescription: 'Expert advice for electrical systems and installations.',
    longDescription: 'Licensed electrical engineer consultation for connected load calculation, single-line diagrams (SLD), energy conservation audits, and statutory compliance.',
    category: 'Commercial',
    additionalCategories: ['Industrial'],
    iconName: 'UserCheck',
    image: '/services/electrical-consultancy.jpg',
    badge: 'Expert Advisory',
    features: ['Connected load & diversity factor planning', 'Single Line Diagram (SLD) preparation', 'Power factor correction (APFC) audit']
  }
];

export const trustHighlights = [
  {
    title: 'Safe & Reliable',
    description: 'Work with highest safety standards',
    icon: 'ShieldCheck'
  },
  {
    title: 'Expert Engineers',
    description: 'Skilled & certified professionals',
    icon: 'HardHat'
  },
  {
    title: 'On Time Service',
    description: 'We value your time and deadlines',
    icon: 'Clock'
  },
  {
    title: 'Satisfaction Guaranteed',
    description: 'Quality service you can trust',
    icon: 'Award'
  }
];

export const emergencyHighlights = [
  {
    title: '24x7 Emergency Support',
    description: 'Immediate electrical hotline',
    icon: 'PhoneCall'
  },
  {
    title: 'Quick Response Team',
    description: 'On-site within 30-45 minutes',
    icon: 'Zap'
  },
  {
    title: 'Affordable Pricing',
    description: 'Clear upfront quotes & no hidden fees',
    icon: 'IndianRupee'
  },
  {
    title: 'Work Warranty Assured',
    description: 'Guaranteed workmanship protection',
    icon: 'ShieldCheck'
  }
];
