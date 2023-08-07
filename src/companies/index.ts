import { seu_buffet } from "./seu_buffet";

export type Service = {
  name: string;
  image?: string;
  items: string[];
};

export type Order = {
  name: string;
  peoples: number;
  address: string;
  eventDate: string;
  comment: string;
  services: Service[];
};

type Social = {
  whatsapp: string;
  instagram: string;
  facebook: string;
};

export type Company = {
  name: string;
  user: string;
  description: string;
  logo: string;
  social: Social;
  services: Service[];
};

const companies: Record<string, Company> = {
  seu_buffet: seu_buffet,
};

export function getCompany(company: string) {
  return companies[company];
}
