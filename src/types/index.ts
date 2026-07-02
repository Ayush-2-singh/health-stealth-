export interface NavItem {
  label: string;
  href: string;
}

export interface Product {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  features: string[];
}

export interface Technology {
  id: string;
  name: string;
  band: string;
  description: string;
  icon: string;
  wavelength?: string;
}

export interface Application {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
}

export interface TimelineItem {
  id: string;
  year: string;
  title: string;
  description: string;
}

export interface Career {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  description: string;
}

export interface ResearchArea {
  id: string;
  title: string;
  description: string;
  icon: string;
  focus: string[];
}

export interface Stat {
  value: string;
  label: string;
  suffix?: string;
}
