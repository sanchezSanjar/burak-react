import type { Product } from "./product";
import type { Member } from "./member";


/** REACT APP STATE */
export interface AppRootState {
    homePage: HomePageState;
    productPage: ProductPageState;
}

/** HOMEPAGE */
export interface HomePageState {
    popularDishes: Product[];
    newDishes: Product[]; 
    topUsers: Member[];
}

export interface ProductPageState {
  restaurant: Member | null;
  chosenProduct: Product | null;
  products: Product[];
}

/** PRODUCTS PAGE */


/** ORDERS PAGE */