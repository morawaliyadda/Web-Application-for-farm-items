import React  from "react";
import Category from "../components/Categories/Categories";
import VegetableProducts from "../components/Product/VegetaProducts";
import FruitsProducts from "../components/Product/FruitProduct";
import FarmProducts from "../components/Product/FarmProduct";


function Allproducts(){
    return(
     <div>
        <Category/>
        <VegetableProducts />
        <FruitsProducts/>
        <FarmProducts/>
    </div>
    );
}
export default Allproducts;