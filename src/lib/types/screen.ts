import type { Product } from "./product";
import type { Member } from "./member";


/** REACT APP STATE */
export interface AppRootState {
    homePage: HomePageState;
}

/** HOMEPAGE */
export interface HomePageState {
    popularDishes: Product[];
    newDishes: Product[]; 
    topUsers: Member[];
}

/** PRODUCTS PAGE */


/** ORDERS PAGE */