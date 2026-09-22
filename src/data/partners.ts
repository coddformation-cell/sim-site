export type Partner = {
  id: string;
  name: string;
  fullName?: string;
  sector: string;
};

// Partenaires réels de S.I.M. sarl (issus du catalogue officiel).
export const partners: Partner[] = [
  {
    id: 'onep',
    name: 'ONEP',
    fullName: 'Office National de l’Eau Potable',
    sector: 'Eau et infrastructures',
  },
  {
    id: 'sir',
    name: 'SIR',
    fullName: 'Société Ivoirienne de Raffinage',
    sector: 'Raffinage pétrolier',
  },
  {
    id: 'paa',
    name: 'PAA',
    fullName: 'Port Autonome d’Abidjan',
    sector: 'Infrastructures portuaires',
  },
  {
    id: 'smb',
    name: 'SMB',
    fullName: 'Société Multinationale de Bitumes',
    sector: 'Bitumes et matériaux',
  },
  {
    id: 'petroci',
    name: 'PETROCI',
    fullName: 'PETROCI Holding',
    sector: 'Pétrole & gaz',
  },
  {
    id: 'gestoci',
    name: 'GESTOCI',
    fullName: 'Société de Gestion des Stocks Pétroliers de Côte d’Ivoire',
    sector: 'Stockage pétrolier',
  },
  {
    id: 'seramar',
    name: 'SERAMAR',
    sector: 'Services maritimes',
  },
  {
    id: 'foxtrot',
    name: 'FOXTROT International',
    sector: 'Exploration & production',
  },
  {
    id: 'ocean-rig',
    name: 'OCEAN RIG',
    sector: 'Forage offshore',
  },
  {
    id: 'icm',
    name: 'ICM Holding',
    sector: 'Industrie & services',
  },
  {
    id: 'its',
    name: 'ITS',
    fullName: 'Ivoire Techniques et Services',
    sector: 'Services techniques',
  },
  {
    id: 'ateman',
    name: 'ATEMAN',
    fullName: 'Atelier de la Marine Nationale',
    sector: 'Marine et défense',
  },
];
