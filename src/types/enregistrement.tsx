export interface EnregistrementInterface {
  reference: string;
  name: string;
  lastname: string;
  profession: string;
  adresse: string;
  contact: string;
  lotissement: string;
  ilot: number;
  lot: number;
  category: string;
  superficie: number;
  observation: string;
  file: string;
  isFirstBuyer: string;
  antecedant: {
    vendeur: string;
    contactvendeur: string;
    adresseVendeur: string;
  };
}
