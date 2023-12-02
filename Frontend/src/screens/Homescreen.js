import React from "react";
import Category from "../components/Categories/Categories";
import VegetableProducts from "../components/Product/VegetaProducts";
import FruitsProducts from "../components/Product/FruitProduct";
import FarmProducts from "../components/Product/FarmProduct";
import SearchBar from "../components/SearchBar/Seachbar";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
 



function HomeScreen(){
    return(
     <div>
        <Header/>
        <SearchBar/>
        <Category/>
        <VegetableProducts />
        <FruitsProducts/>
        <FarmProducts/>
        <Footer/>
    </div>
    );
}
export default HomeScreen;