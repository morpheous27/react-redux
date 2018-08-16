import React from "react";
/* import { Product } from "../Product/Product";
import { Offer } from "../Product/Offer"; */
import {Product,Offer} from '../Product'
import { Customer } from "../Customer/Customer";

export const LeftSection = () => (
  <div id="section">
    <Offer/>
    <Product />
    <Customer/>
  </div>
);
