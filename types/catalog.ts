export interface ICatalog {
  id: number;
  name: string;
  price: number;
  image: string;
  favorite: boolean;
  sizes?: number[];
}
