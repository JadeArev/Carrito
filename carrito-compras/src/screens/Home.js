import React from "react";
import Cards from "../components/Cards";
import Footer from "../components/Footer";
import Carrousel from "../components/Carrousel";
import Marcas from "../components/Marcas";

export default function Home() {    
    return (
        <>
            <Carrousel></Carrousel>
            <Cards></Cards>
            <Marcas></Marcas>
            <Footer></Footer>
        </>
    )
}