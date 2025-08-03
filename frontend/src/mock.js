// Mock data for Raghuveer Motors
export const mockData = {
  businessInfo: {
    name: "Raghuveer Motors",
    tagline: "30+ Years of Trusted Automotive Expertise",
    subtitle: "Premium 4-Wheeler Service | All Brands | All Problems Solved",
    established: "1995",
    experience: "30+",
    location: {
      address: "Sharda Nagar, Rajapeth, Amravati",
      mapUrl: "https://maps.google.com/?q=Raghuveer+Motors+Sharda+Nagar+Rajapeth+Amravati",
      imageUrl: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    }
  },
  
  contacts: {
    fourWheeler: {
      phone: "7020041145",
      service: "4-Wheeler Services"
    },
    hydraulic: {
      phone: "9404114940", 
      service: "Hydraulic Services"
    },
    emails: [
      "raghuveermotors95@gmail.com",
      "braghuveer90@gmail.com"
    ],
    social: {
      instagram: "#",
      maps: "https://maps.google.com/?q=Raghuveer+Motors+Sharda+Nagar+Rajapeth+Amravati"
    }
  },

  services: [
    {
      id: 1,
      title: "Complete Engine & Gearbox Repairs",
      description: "Expert repairs for Petrol, Diesel, Hybrid, and Electric engines with precision diagnostics",
      icon: "engine",
      features: ["Petrol Engines", "Diesel Engines", "Hybrid Systems", "Electric Motors"]
    },
    {
      id: 2,
      title: "Wheels, Suspension & Brake Systems",
      description: "Complete wheel alignment, suspension tuning, and brake system repair & replacement",
      icon: "wheel",
      features: ["Wheel Alignment", "Suspension Repair", "Brake Systems", "Performance Tuning"]
    },
    {
      id: 3,
      title: "Air Conditioning Systems",
      description: "Professional AC servicing, cooling repairs, and pipe replacement for all vehicle types",
      icon: "thermometer",
      features: ["AC Servicing", "Cooling Repairs", "Pipe Replacement", "Gas Refilling"]
    },
    {
      id: 4,
      title: "Software & Diagnostics", 
      description: "Advanced OBD tools and scanners for precise problem detection across all brands",
      icon: "scan",
      features: ["OBD Diagnostics", "ECU Programming", "Software Updates", "Error Code Analysis"]
    },
    {
      id: 5,
      title: "EV Servicing",
      description: "Specialized electric vehicle servicing including battery diagnostics and motor repairs",
      icon: "battery",
      features: ["Battery Diagnostics", "Motor Repairs", "Software Updates", "Charging Systems"]
    },
    {
      id: 6,
      title: "Hydraulic Pipes Repair & Manufacturing",
      description: "Dedicated unit for hydraulic hose & AC pipe repair for JCB, Poclain, and automotive systems",
      icon: "wrench",
      features: ["JCB Hydraulics", "Poclain Systems", "AC Pipes", "Custom Manufacturing"]
    }
  ],

  brands: {
    luxury: ["Mercedes", "BMW", "Audi", "Tesla"],
    popular: ["Hyundai", "Honda", "Toyota", "Tata", "Mahindra"],
    ev: ["Tesla", "BYD", "Tata", "Mercedes EV"],
    origins: ["German", "Japanese", "Chinese", "Indian"]
  },

  trustBadges: [
    {
      id: 1,
      title: "30+ Years Experience",
      description: "Serving automotive community since 1995",
      icon: "award"
    },
    {
      id: 2,
      title: "All Brands Covered", 
      description: "Expertise in luxury, commercial, electric vehicles",
      icon: "car"
    },
    {
      id: 3,
      title: "Advanced Diagnostic Tools",
      description: "Latest OBD tools and diagnostic equipment",
      icon: "tool"
    },
    {
      id: 4,
      title: "Thousands of Satisfied Customers",
      description: "Trusted across Amravati and beyond",
      icon: "users"
    }
  ],

  testimonials: [
    {
      id: 1,
      name: "Rajesh Kumar",
      vehicle: "BMW X5",
      rating: 5,
      comment: "Exceptional service! They diagnosed and fixed my BMW's complex engine issue that other workshops couldn't solve.",
      date: "2024-06-15"
    },
    {
      id: 2, 
      name: "Priya Sharma",
      vehicle: "Tesla Model 3",
      rating: 5,
      comment: "Amazing EV expertise! Quick battery diagnostics and professional service. Highly recommended for Tesla owners.",
      date: "2024-06-10"
    },
    {
      id: 3,
      name: "Amit Patel",
      vehicle: "Tata Harrier",
      rating: 5,
      comment: "30 years of experience shows in their work. Fixed my Harrier's suspension perfectly at reasonable cost.",
      date: "2024-06-05"
    }
  ]
};

export default mockData;