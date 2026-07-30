export type Amenity =
  | 'air-conditioning'
  | 'wifi'
  | 'private-pool'
  | 'heated-pool'
  | 'sea-views'
  | 'sound-system'
  | 'bbq'
  | 'dishwasher'
  | 'washing-machine'
  | 'smart-tv'
  | 'cable-tv'
  | 'alarm'
  | 'safe'
  | 'parking'
  | 'garden'
  | 'terrace';

export interface Villa {
  slug: string;
  name: string;
  location: string;
  area: VillaArea;
  bedrooms: number;
  bathrooms: number;
  showers?: number;
  maxGuests: string;
  amenities: Amenity[];
  pool: {
    size?: string;
    heated: boolean;
    saltwater: boolean;
  };
  distances: {
    beach?: string;
    restaurant?: string;
    shops?: string;
    airport?: string;
  };
  description: string;
  highlights: string[];
  images: string[];
  heroImage: string;
  supercontrolUrl?: string;
  refNumber?: string;
}

export type VillaArea =
  | 'quinta-da-balaia'
  | 'guia'
  | 'vale-paraiso'
  | 'falesia'
  | 'vilamoura'
  | 'quarteira'
  | 'almancil';

export const AREA_LABELS: Record<VillaArea, string> = {
  'quinta-da-balaia': 'Quinta da Balaia, Albufeira',
  'guia': 'Guia, Albufeira',
  'vale-paraiso': 'Vale Paraiso, Albufeira',
  'falesia': 'Falesia, Olhos d\'Agua',
  'vilamoura': 'Vilamoura',
  'quarteira': 'Quarteira',
  'almancil': 'Almancil',
};

export interface ContactInfo {
  email: string;
  phone: string;
  mobile: string;
  address: string;
  facebook: string;
  instagram: string;
}

export const CONTACT: ContactInfo = {
  email: 'info@portugala.com',
  phone: '+44 (0) 203 581 3433',
  mobile: '+44 (0) 7795 661 609',
  address: '43a Dollis Park, London, United Kingdom',
  facebook: 'https://www.facebook.com/portugalaholidays/',
  instagram: 'https://www.instagram.com/portugalavillas/',
};
