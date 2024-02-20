"use client";

import Link from "next/link";

import {useState} from "react"

import useInterval from 'use-interval'

export const BtnCategoria = () => {

    const [activeCategory, setActiveCategory] = useState("Vestidos");

    const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);
    
    const [activeRoute, setActiveRoute] = useState("/categories/Todas/Vestidos");
    


    const categories =  [
        {"ruta":"/categories/Todas/Vestidos", "nombre":"Vestidos"},
        {"ruta":"/categories/Todas/Blusas", "nombre":"Blusas"},
    ]

    const changeCategory = () =>{
        if(activeCategoryIndex == 0){
            setActiveCategoryIndex(1);
            setActiveRoute(categories[1]['ruta'])
            setActiveCategory(categories[1]['nombre'])
        }else{
            setActiveCategoryIndex(0);
            setActiveRoute(categories[0]['ruta'])
            setActiveCategory(categories[0]['nombre'])

        }

    }

    useInterval(() => {
        changeCategory()
      }, 5000);

    /*OJO el key del boton sirve para volver renderizar despues de cambiar el contenido*/

  return (
    <Link
      key={activeCategory}        
      className="btn btn_primary btn_rounded fadeInUp"
      href={activeRoute}
      style={{ fontSize: "1.2rem", marginTop: "25px" }}
    >
      {activeCategory}
      <i className="fas fa-angle-right" style={{ marginLeft: "20px" }}></i>
    </Link>
  );
};


