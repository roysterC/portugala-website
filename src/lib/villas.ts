import type { Villa } from './types';

function villaImages(folder: string, files: string[]): string[] {
  return files.map((f) => `/images/villas/${folder}/${f}`);
}

const IMG = {
  borboleta: [
    '01.jpg','03.jpg','05.jpg','06.jpg','07.jpg','08.jpg','09.jpg','10.jpg',
    '11.jpg','12.jpg','13.jpg','14.jpg','15.jpg','16.jpg','17.jpg','18.jpg',
    '19.jpeg','20.jpeg','21.jpeg','22.jpg','23.jpg','24.jpg','25.jpg','26.jpg',
    '27.jpg','28.jpeg','29.jpg','30.jpeg','31.jpg','32.jpg','33.jpg','34.jpg',
    '35.jpg','36.jpeg','37.jpeg','38.jpg','39.jpeg','40.jpeg','41.jpg',
    '42.jpeg','43.jpg','44.jpg','45.jpg','46.jpg','47.jpg','48.jpg','49.jpg',
    '50.jpeg','51.jpg','52.jpg','53.jpg','54.jpg','55.jpeg','56.jpg','57.jpg',
    '58.jpeg','59.jpeg','60.jpg','61.jpg',
  ],
  'estrelicia-3bed': [
    '01.jpg','02.jpg','03.jpg','05.jpg','06.jpg','07.jpg','08.jpg',
    '09.jpeg','10.jpg','11.jpg','12.jpg','13.jpg','14.jpg','15.jpg',
    '16.jpeg','17.jpg','18.jpg','19.jpg','20.jpg','21.jpg','22.jpg',
    '23.jpg','24.jpg','25.jpg','26.jpg','27.jpg','28.jpg','29.jpg',
    '30.jpg','31.jpg','32.jpg','33.jpg','34.jpg','35.jpg','36.jpg',
    '37.jpg','38.jpg','39.jpg','40.jpg','41.jpg','42.jpg','43.jpg',
    '44.jpg','45.jpg','46.jpeg','47.jpeg','48.jpg','49.jpeg','50.jpeg',
    '51.jpg','52.jpg','53.jpeg','54.jpg','55.jpeg','56.jpg','57.jpg',
    '58.jpg','59.jpeg','60.jpg','61.jpg','62.jpg','63.jpg',
  ],
  'estrelicia-5bed': [
    '01.jpeg','03.jpeg','05.jpg','06.jpg','07.jpg','08.jpeg','09.jpeg',
    '10.jpg','11.jpeg','12.jpeg','13.jpeg','14.jpg','15.jpg','16.jpg',
    '17.jpeg','18.jpg','19.jpeg','20.jpeg','21.jpg','22.jpeg','23.jpeg',
    '24.jpg','25.jpeg','26.jpg','27.jpeg','28.jpg','29.jpg','30.jpg',
    '31.jpg','32.jpg','33.jpg','34.jpg','35.jpg','36.jpg','37.jpg',
    '38.jpg','39.jpg','40.jpg',
  ],
  ana: [
    '02.jpg','05.jpg','06.jpg','07.jpg','08.jpg','09.jpg','10.jpg',
    '11.jpeg','12.jpg','13.jpeg','14.jpg','15.jpg','16.jpg','17.jpg',
    '18.jpg','19.jpeg','20.jpeg','21.jpg','22.jpeg','23.jpg','24.jpg',
    '25.jpg','26.jpeg','27.jpg','28.jpg','29.jpg','30.jpg','31.jpg',
    '32.jpg','33.jpg','34.jpg','35.jpg','36.jpg','37.jpg','38.jpg',
    '39.jpg','40.jpg','41.jpg','42.jpg','43.jpg','44.jpg',
  ],
  julia: [
    '01.jpg','02.jpg','03.jpg','05.jpg','06.jpg','07.jpg','08.jpg',
    '09.jpg','10.jpg','11.jpg','12.jpg','13.jpg','14.jpg','15.jpg',
    '16.jpg','17.jpg','18.jpg','19.jpg','20.jpg','21.jpg','22.jpg',
    '23.jpg','24.jpg','25.jpg','26.jpg','27.jpg','28.jpg','29.jpg',
    '30.jpg',
  ],
  chico: [
    '01.jpg','02.jpg','03.jpg','05.jpg','06.jpg','07.jpg','08.jpg',
    '09.jpg','10.jpg','11.jpg','12.jpg','13.jpg','14.jpg','15.jpg',
    '16.jpg','17.jpg','18.jpg','19.jpg','20.jpg','21.jpg','22.jpg',
    '23.jpg','24.jpg','25.jpg','26.jpg','27.jpg','28.jpg','29.jpg',
    '30.jpg','31.jpg','32.jpg','33.jpg','34.jpg','35.jpg','36.jpg',
    '37.jpg','38.jpg','39.jpg','40.jpg','41.jpg','42.jpg','43.jpg',
    '44.jpg','45.jpg','46.jpg','47.jpg','48.jpg','49.jpg','50.jpg',
  ],
  jose: [
    '01.jpg','02.jpg','03.jpg','05.jpg','06.jpg','07.jpg','08.jpg',
    '09.jpg','10.jpg','11.jpg','12.jpg','13.jpg','14.jpg','15.jpg',
    '16.jpg','17.jpg','18.jpg','19.jpg','20.jpg','21.jpg','22.jpg',
    '23.jpg','24.jpg','25.jpg','26.jpg','27.jpg','28.jpg','29.jpg',
    '30.jpg','31.jpg','32.jpg','33.jpg','34.jpg','35.jpg','36.jpg',
    '37.jpg','38.jpg','39.jpg','40.jpg','41.jpg','42.jpg','43.jpg',
    '44.jpg','45.jpg','46.jpg',
  ],
} satisfies Record<string, string[]>;

export const villas: Villa[] = [
  {
    slug: 'villa-borboleta',
    name: 'Villa Borboleta',
    location: 'Quinta da Balaia, Albufeira',
    area: 'quinta-da-balaia',
    bedrooms: 3,
    bathrooms: 4,
    maxGuests: '6-8',
    amenities: [
      'air-conditioning', 'wifi', 'private-pool', 'sound-system',
      'bbq', 'dishwasher', 'washing-machine', 'smart-tv', 'cable-tv',
      'alarm', 'safe', 'parking', 'garden', 'terrace',
    ],
    pool: { size: '8 x 4m', heated: false, saltwater: true },
    distances: {
      beach: '1.6 km',
      restaurant: '600m',
      shops: '700m',
    },
    description:
      'A spacious, fully air-conditioned luxury villa in the sought-after Quinta da Balaia resort. Three modern bedrooms each with private en-suite bathrooms finished in light marble. The open-plan living and dining area opens onto a large partly-covered terrace overlooking the saltwater pool and established gardens. Individual sound system in every room including the pool terrace. Optional pool heating to 27 degrees available.',
    highlights: [
      'Individual sound system in every room',
      'Saltwater pool with Roman steps',
      'Optional pool heating to 27°C',
      'Near Santa Eulalia Blue Flag beach',
      'Many returning guests year after year',
    ],
    images: villaImages('borboleta', IMG.borboleta),
    heroImage: '/images/villas/borboleta/01.jpg',
    refNumber: 'borboleta',
  },
  {
    slug: 'villa-estrelicia',
    name: 'Villa Estrelicia',
    location: 'Quinta da Balaia, Albufeira',
    area: 'quinta-da-balaia',
    bedrooms: 3,
    bathrooms: 4,
    maxGuests: '6-8',
    amenities: [
      'air-conditioning', 'wifi', 'private-pool', 'heated-pool',
      'sea-views', 'bbq', 'dishwasher', 'washing-machine',
      'smart-tv', 'cable-tv', 'alarm', 'safe', 'parking',
      'garden', 'terrace',
    ],
    pool: { size: '8 x 4m', heated: true, saltwater: true },
    distances: {
      beach: '1.6 km',
      restaurant: '600m',
      shops: '700m',
    },
    description:
      'A high-quality three-bedroom villa with stunning panoramic sea views and large heated saltwater pool. Located in the peaceful Quinta da Balaia resort, close to Santa Eulalia beach and all amenities. Each bedroom has its own private bathroom. The elevated position offers beautiful views across the countryside and coastline.',
    highlights: [
      'Panoramic sea and land views',
      'Heated saltwater pool',
      'Near Santa Eulalia beach',
      'Fully air-conditioned throughout',
      'Elevated, private position',
    ],
    images: villaImages('estrelicia-3bed', IMG['estrelicia-3bed']),
    heroImage: '/images/villas/estrelicia-3bed/01.jpg',
    refNumber: 'estrelicia',
  },
  {
    slug: 'villa-estrelicia-5bed',
    name: 'Villa Estrelicia Grande',
    location: 'Quinta da Balaia, Albufeira',
    area: 'quinta-da-balaia',
    bedrooms: 5,
    bathrooms: 5,
    maxGuests: '10-12',
    amenities: [
      'air-conditioning', 'wifi', 'private-pool', 'heated-pool',
      'sea-views', 'bbq', 'dishwasher', 'washing-machine',
      'smart-tv', 'cable-tv', 'alarm', 'safe', 'parking',
      'garden', 'terrace',
    ],
    pool: { size: '10 x 5m', heated: true, saltwater: true },
    distances: {
      beach: '1.6 km',
      restaurant: '600m',
      shops: '700m',
    },
    description:
      'The larger Estrelicia configuration offers five bedrooms and five bathrooms, ideal for extended families or groups. The same stunning panoramic sea and land views, heated saltwater pool, and proximity to Santa Eulalia beach. Fully air-conditioned with generous living spaces and beautiful established gardens.',
    highlights: [
      'Five bedrooms, five bathrooms',
      'Ideal for large groups up to 12',
      'Panoramic sea views',
      'Heated saltwater pool',
      'Sandy beaches from 1.6 km',
    ],
    images: villaImages('estrelicia-5bed', IMG['estrelicia-5bed']),
    heroImage: '/images/villas/estrelicia-5bed/01.jpeg',
    refNumber: '450076',
  },
  {
    slug: 'villa-ana',
    name: 'Villa Ana',
    location: 'Guia, Albufeira',
    area: 'guia',
    bedrooms: 3,
    bathrooms: 3,
    maxGuests: '6-8',
    amenities: [
      'wifi', 'private-pool', 'dishwasher', 'washing-machine',
      'smart-tv', 'parking', 'garden', 'terrace',
    ],
    pool: { heated: false, saltwater: false },
    distances: {
      beach: '4 km',
      restaurant: '500m',
      shops: '500m',
    },
    description:
      'A lovely villa in the charming village of Guia with three bedrooms, two en-suite bathrooms, and a very sunny private pool. Close to everything Guia offers: restaurants, shops, and daily markets. A relaxed base for exploring the Algarve coastline.',
    highlights: [
      'Very sunny private pool',
      'Charming village of Guia',
      'Two en-suite bathrooms',
      'Close to shops and restaurants',
      'Great base for exploring',
    ],
    images: villaImages('ana', IMG.ana),
    heroImage: '/images/villas/ana/02.jpg',
    refNumber: 'ana',
  },
  {
    slug: 'villa-julia',
    name: 'Villa Julia',
    location: 'Guia, Albufeira',
    area: 'guia',
    bedrooms: 3,
    bathrooms: 2,
    maxGuests: '1-6',
    amenities: [
      'wifi', 'private-pool', 'dishwasher', 'washing-machine',
      'smart-tv', 'parking', 'garden', 'terrace',
    ],
    pool: { heated: false, saltwater: false },
    distances: {
      beach: '4 km',
      restaurant: '500m',
      shops: '500m',
    },
    description:
      'An extremely good quality villa in a super private location near Guia. Three bedrooms, two bathrooms, and a very private pool surrounded by established gardens. Close to Guia, Albufeira beaches, and Albufeira Old Town. Popular with returning guests.',
    highlights: [
      'Very private setting',
      'Established surrounding gardens',
      'Close to Guia and Old Town',
      'Popular with returning guests',
      'Quiet, peaceful atmosphere',
    ],
    images: villaImages('julia', IMG.julia),
    heroImage: '/images/villas/julia/01.jpg',
    refNumber: '497057',
  },
  {
    slug: 'villa-chico',
    name: 'Villa Chico',
    location: 'Vale Paraiso, Albufeira',
    area: 'vale-paraiso',
    bedrooms: 4,
    bathrooms: 5,
    maxGuests: '8-10',
    amenities: [
      'air-conditioning', 'wifi', 'private-pool', 'bbq',
      'dishwasher', 'washing-machine', 'smart-tv', 'cable-tv',
      'parking', 'garden', 'terrace',
    ],
    pool: { heated: false, saltwater: false },
    distances: {
      beach: '2 km',
      restaurant: '1 km',
      shops: '1 km',
    },
    description:
      'A beautiful air-conditioned villa in Vale Paraiso with a relaxing atmosphere. Four bedrooms, five bathrooms, and a large fenced and gated pool, perfect for families. Well-located with easy access to beaches, restaurants, and Albufeira town.',
    highlights: [
      'Large fenced and gated pool',
      'Four bedrooms, five bathrooms',
      'Ideal for families with children',
      'Fully air-conditioned',
      'Relaxing, private atmosphere',
    ],
    images: villaImages('chico', IMG.chico),
    heroImage: '/images/villas/chico/01.jpg',
    refNumber: '1642355',
  },
  {
    slug: 'villa-jose',
    name: 'Villa Jose',
    location: 'Falesia, Olhos d\'Agua',
    area: 'falesia',
    bedrooms: 4,
    bathrooms: 3,
    maxGuests: '8-10',
    amenities: [
      'air-conditioning', 'wifi', 'private-pool', 'bbq',
      'dishwasher', 'washing-machine', 'smart-tv', 'cable-tv',
      'parking', 'garden', 'terrace',
    ],
    pool: { heated: false, saltwater: false },
    distances: {
      beach: '1 km',
      restaurant: '500m',
      shops: '500m',
    },
    description:
      'A quality four-bedroom villa in Falesia with air conditioning and private pool. Everything in Falesia and Olhos d\'Agua is within easy walking distance, including beautiful sandy beaches. Perfect for those who want to explore on foot.',
    highlights: [
      'Walk to beaches and everything',
      'Four bedrooms with A/C',
      'Close to Olhos d\'Agua village',
      'Easy access to Falesia beach',
      'Great for exploring on foot',
    ],
    images: villaImages('jose', IMG.jose),
    heroImage: '/images/villas/jose/01.jpg',
    refNumber: '1642356',
  },
];

export function getVillaBySlug(slug: string): Villa | undefined {
  return villas.find((v) => v.slug === slug);
}

export function getVillasByArea(area: string): Villa[] {
  return villas.filter((v) => v.area === area);
}
