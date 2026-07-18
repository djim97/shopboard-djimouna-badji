import { ProduitDto } from './produit.dto';

export interface ProduitVm extends Pick<ProduitDto, 'id' | 'nom'> {
  prixFormate: string;
  prix: number;      
  estDisponible: boolean;   
  dateAjout: string;        
  badgeStatut: 'En stock' | 'Rupture' | 'Stock faible';
}
export interface PanierArticle {
  produit: ProduitVm;
  quantite: number;
}