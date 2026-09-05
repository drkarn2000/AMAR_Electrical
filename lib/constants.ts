export const siteConfig = {
  companyName: 'POWERFIX',
  shortDescription: 'Premium electrical engineering, sales, installation and repair services for residential, commercial and industrial spaces.',
  phone: '+91 98765 43210',
  whatsapp: 'https://wa.me/919876543210',
  email: 'hello@powerfixelectrical.com',
  address: 'Your Business Address',
  businessHours: 'Mon - Sat: 8:00 AM - 8:00 PM',
  serviceAreas: 'Serving nearby villages, towns and cities',
  canonicalUrl: 'https://powerfixelectrical.com',
  logoText: 'POWERFIX',
  primaryColor: '#1d5fe6',
  accentColor: '#f6c548'
} as const;

export const serviceConfig = siteConfig;

export const serviceMenuItems = [
  { label: 'Home Wiring', href: '/services#home-wiring' },
  { label: 'Commercial Installation', href: '/services#commercial-installation' },
  { label: 'Repair & Maintenance', href: '/services#repair-maintenance' },
  { label: 'Panel Installation', href: '/services#panel-installation' }
];

export const navigation = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Our Services', href: '/services', submenu: serviceMenuItems },
  { label: 'Products', href: '/products' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact Us', href: '/contact' }
];

export const trustStrip = [
  'Rated Local Service',
  'Certified Engineer',
  'Genuine Products',
  'Fast Response'
];

export const heroStats = [
  '10+ Years Experience',
  '500+ Projects Completed',
  '1000+ Happy Customers',
  '24×7 Emergency Support'
];

export const productCategories = [
  { name: 'Wires & Cables', description: 'High-performance wiring solutions engineered for safety and reliability.', image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=900&q=80' },
  { name: 'Switches & Sockets', description: 'Modern switchgear designed for everyday efficiency and durable operation.', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=900&q=80' },
  { name: 'LED Lights', description: 'Energy-saving lighting systems for homes, offices and commercial interiors.', image: 'https://images.unsplash.com/photo-1516321165247-4aa89a48be28?auto=format&fit=crop&w=900&q=80' },
  { name: 'Fans', description: 'Premium airflow solutions with efficient motor technology and aesthetics.', image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80' },
  { name: 'MCB', description: 'Dependable miniature circuit breakers for safe power distribution.', image: 'https://images.unsplash.com/photo-1555618568-211cf84456ca?auto=format&fit=crop&w=900&q=80' },
  { name: 'Distribution Boards', description: 'Sophisticated panel boards that simplify control and protection.', image: 'https://images.unsplash.com/photo-1621905251918-48416bd8575a?auto=format&fit=crop&w=900&q=80' },
  { name: 'Modular Switches', description: 'Premium modular switch systems with sleek aesthetics and robust performance.', image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=900&q=80' },
  { name: 'PVC Pipes', description: 'Durable conduit and cable protection for structured installations.', image: 'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=900&q=80' },
  { name: 'Water Pumps', description: 'Reliable pumping systems for domestic, commercial and agricultural needs.', image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=900&q=80' },
  { name: 'Inverters', description: 'Consistent backup power for essential operations and energy continuity.', image: 'https://images.unsplash.com/photo-1498049860654-af1a5c566876?auto=format&fit=crop&w=900&q=80' },
  { name: 'Batteries', description: 'Dependable storage systems built for long-term backup performance.', image: 'https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?auto=format&fit=crop&w=900&q=80' },
  { name: 'Electrical Tools', description: 'Precision tools for installation, testing and maintenance tasks.', image: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=900&q=80' }
];

export const serviceItems = [
  'Home Electrical Wiring',
  'New House Wiring',
  'Office Wiring',
  'Factory Wiring',
  'Electrical Maintenance',
  'Fault Finding',
  'Short Circuit Repair',
  'Fan Installation',
  'Light Installation',
  'MCB Installation',
  'Earthing',
  'Inverter Installation',
  'CCTV Wiring',
  'Door Bell Installation',
  'Water Pump Installation',
  'Generator Connection',
  'Three Phase Connection',
  'Panel Installation',
  'Electrical Consultancy'
];

export const emergencyIssues = [
  'Short circuit',
  'Power failure',
  'MCB trip',
  'Wiring fault',
  'Electrical breakdown'
];

export const whyChooseUs = [
  'Engineer Managed',
  'Genuine Products',
  'Affordable Price',
  'Fast Response',
  'Experienced Team',
  'Warranty on Work',
  'On Time Service'
];

const createBrandWordmark = (name: string, primary: string, secondary = '#ffffff') => {
  const safeName = name.replace(/&/g, '&amp;');
  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(`
    <svg xmlns="http://www.w3.org/2000/svg" width="220" height="80" viewBox="0 0 220 80" role="img" aria-label="${safeName}">
      <rect width="220" height="80" rx="18" fill="${primary}" opacity="0.08"/>
      <path d="M18 18h12v44H18zM20 16l12-8 12 8v44H32L20 52z" fill="${primary}" opacity="0.9"/>
      <path d="M32 14h18v52H32z" fill="${primary}" opacity="0.72"/>
      <text x="74" y="52" font-size="28" font-weight="700" font-family="Arial, Helvetica, sans-serif" fill="${primary}" letter-spacing="0.5">${safeName}</text>
      <rect x="74" y="58" width="104" height="4" rx="2" fill="${secondary}" opacity="0.9"/>
    </svg>
  `)}`;
};

export const brandLogos = [
  { name: 'Havells', logo: '/brands/official/havells.svg' },
  { name: 'Panasonic', logo: '/brands/official/panasonic.svg' },
  { name: 'Eleczo', logo: '/brands/official/eleczo.png' },
  { name: 'Polycab', logo: '/brands/official/polycab.png' },
  { name: 'Schneider Electric', logo: '/brands/official/schneider.svg' },
  { name: 'RR Kabel', logo: '/brands/official/rr-kabel.svg' },
  { name: 'Philips', logo: '/brands/official/philips.svg' },
  { name: 'Crompton', logo: '/brands/official/crompton.webp' },
  { name: 'Syska', logo: '/brands/official/syska.png' },
  { name: 'Legrand', logo: '/brands/official/legrand.svg' },
  { name: 'Finolex', logo: '/brands/official/finolex.svg' },
  { name: 'V-Guard', logo: '/brands/official/v-guard.png' },
  { name: 'Angel Cables', logo: '/brands/official/angel-cables.png' },
  { name: 'Bluebird', logo: '/brands/official/bluebird.png' },
  { name: 'KEI', logo: '/brands/official/kei.png' },
  { name: 'Khaitan', logo: '/brands/official/khaitan.png' },
  { name: 'Kapson', logo: '/brands/official/kapson.png' },
  { name: 'LG', logo: '/brands/official/lg.svg' },
  { name: 'Bajaj', logo: '/brands/official/bajaj.png' },
  { name: 'Relaxo', logo: '/brands/official/logo-black-relaxo.png' },
  { name: 'Hosper', logo: '/brands/official/Hosper-New-Logo-1-2-1.png' }
];

export const projectCategories = [
  { name: 'House Wiring', description: 'Complete residential wiring planned for safe circuits, clean routing, and dependable everyday power.', image: 'https://images.unsplash.com/photo-1635335874521-7987db781153?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { name: 'Factory', description: 'Industrial power distribution, machine connections, and protection systems built for demanding production spaces.', image: 'https://images.unsplash.com/photo-1716191300020-b52dec5b70a8?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { name: 'Shop', description: 'Efficient commercial wiring, lighting, and equipment connections designed to keep customer spaces open and reliable.', image: 'https://plus.unsplash.com/premium_photo-1781770580560-f338375d0634?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { name: 'Farm House', description: 'Practical power solutions for farm homes, pumps, outdoor circuits, and reliable three-phase connections.', image: 'https://images.unsplash.com/photo-1780034766295-43db0f2a0fb7?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { name: 'Panel Installation', description: 'Neat distribution panel installation with organized circuits, clear labeling, and safer fault protection.', image: 'https://images.unsplash.com/photo-1758101755915-462eddc23f57?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { name: 'Inverter Installation', description: 'Backup power installation with correct battery sizing, safe changeover, and uninterrupted essential circuits.', image: 'https://images.unsplash.com/photo-1572534179046-73ad646f25a8?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }
];

export const faqs = [
  { question: 'Do you provide emergency electrical services?', answer: 'Yes, our team is available for emergency response and urgent electrical fault resolution.' },
  { question: 'What areas do you cover?', answer: 'We serve nearby villages, towns and cities based on your project location and service requirements.' },
  { question: 'Do you provide electrical inspection?', answer: 'Yes, we offer inspection and diagnostics for homes, shops, offices and industrial spaces.' },
  { question: 'Do you use genuine electrical products?', answer: 'We source quality electrical materials and work with trusted brands to maintain safe, reliable installations.' },
  { question: 'Do you provide warranty on your work?', answer: 'Yes, workmanship warranties are provided depending on the scope of the project and service agreement.' },
  { question: 'How long does electrical wiring take?', answer: 'Timeline varies by property size and complexity, but we will provide a clear estimate after assessment.' },
  { question: 'Can you help with electrical load calculation?', answer: 'Yes, our engineer-managed team can assist with planning and load evaluation for safe system design.' },
  { question: 'What types of electrical installations do you handle?', answer: 'We handle residential, commercial and industrial electrical installations, including wiring, panels and equipment integration.' }
];

export const serviceLocations = [
  'Villages',
  'Towns',
  'Commercial Hubs',
  'Industrial Zones',
  'Residential Areas',
  'Nearby Cities'
];

export const reviewPlaceholders = [
  'Placeholder review content for a recent service experience. Replace with an actual Google review after collecting the customer feedback.',
  'Placeholder review content for a completed installation or repair project. Easily swap in testimonials once real review data is available.',
  'Placeholder review content for a premium service experience. Add real customer feedback to showcase credibility and trust.'
];
