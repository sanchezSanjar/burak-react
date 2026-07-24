import React, { useEffect } from "react";
import ActiveUsers from "./ActiveUsers";
import Advertisement from "./Advertisement";
import Events from "./Events";
import NewDishes from "./NewDishes";
import PopularDishes from "./PopularDishes";
import Statistics from "./Satistics";
import "../../../css/home.css";

import { useDispatch } from "react-redux";
import type {Dispatch} from "@reduxjs/toolkit";
import { setNewDishes, setPopularDishes, setTopUsers } from "./slice";
import type { Product } from "../../../lib/types/product";
import ProductService from "../../services/ProductService";
import { ProductCollection } from "../../../lib/enums/product.enum";
import MemberService from "../../services/MemberService";
import type { Member } from "../../../lib/types/member";

/** REDUX SLICE & SELECTOR */
const actionDispatch = (dispatch: Dispatch) => ({
  setPopularDishes: (data: Product[]) => dispatch(setPopularDishes(data)),
  setNewDishes: (data: Product[]) => dispatch(setPopularDishes(data)),
  setTopUsers: (data: Member[]) => dispatch(setTopUsers(data)),
});

export default function HomePage() {
const { setPopularDishes, setNewDishes, setTopUsers } = actionDispatch(useDispatch());
  useEffect(() => {
    // Backend server data fetch => Data
    const product = new ProductService();
    product.getProducts({
      page: 1,
      limit: 4,
      order: "productViews",
      productCollection: ProductCollection.DISH
    })
    .then((data) => setPopularDishes(data)) // Slice: Data => Store
      .catch((err)=> console.log(err))

       product
      .getProducts({
        page: 1,
        limit: 4,
        order: "createdAt",
        productCollection: ProductCollection.DISH,
      })
    .then((data) => setNewDishes(data)) // Slice: Data => Store
    .catch((err) => console.log(err));

    const member = new MemberService();
    member
      .getTopUsers()
      .then((data) => setTopUsers(data)) // Slice: Data => Store

  }, []);


  return (
    <div className={"homepage"}>
      <Statistics />
      <PopularDishes />
      <NewDishes />
      <Advertisement />
      <ActiveUsers />
      <Events />
    </div>
  );
}
