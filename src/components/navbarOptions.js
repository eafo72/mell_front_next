"use client";

import { useState, useEffect } from "react";

import Link from "next/link";

import { usePathname } from "next/navigation";

import { useCartStore } from '../store/cart';


export const NavbarOptions = ({categories,actualButton}) => {

  const { cart } = useCartStore() //debe de ir aqui arriba por ser un hook y evitar errores

  const [isOpen,setIsOpen] = useState(false);

  const pathname = usePathname();

  useEffect(() => {
    if (!isOpen){
      document.getElementById("btn_hamburger").click()
    }
  },[isOpen])

  return (
    <div className="menu_wrap">
              <nav className="main_menu navbar navbar-expand-lg">
                <button 
                    id="btn_hamburger" 
                    onClick={()=> setIsOpen(true)} 
                    className="mobile_menu_btn navbar-toggler" 
                    type="button" 
                    data-bs-toggle="collapse" 
                    data-bs-target="#main_menu_dropdown" 
                    aria-controls="main_menu_dropdown" 
                    aria-expanded={isOpen} 
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"><i className="fal fa-bars"></i></span>
                </button>
                <div className="main_menu_inner collapse navbar-collapse" id="main_menu_dropdown">
                  <ul className="main_menu_list ul_li">


                    {pathname === "/" ?
                    (
                    <li className="active dropdown">
                      <Link className="nav-link" href="/" onClick={() => {setIsOpen(false)}}>
                        Inicio
                      </Link>
                    </li>)
                    :
                    (
                      <li className="dropdown">
                        <Link className="nav-link" href="/" onClick={() => {setIsOpen(false)}}>
                          Inicio
                        </Link>
                      </li>)
                    }   

                    {pathname.startsWith("/categories") ?
                    (
                    <li className="active dropdown">
                      <Link href="#" className="nav-link"  id="categories_submenu" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Categorías
                      </Link>
                      <ul className="submenu dropdown-menu" aria-labelledby="categories_submenu">

                        {categories && categories.map((item,index) => (
                          
                          <li key={index}><Link href={`/categories/Todas/${item.nombre}`} onClick={() => {setIsOpen(false)}}>{item.nombre}</Link></li>
                        ))}
                      </ul>
                    </li>)
                    :
                    (
                      <li className="dropdown">
                        <Link href="#" className="nav-link"  id="categories_submenu" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                          Categorías
                        </Link>
                        <ul className="submenu dropdown-menu" aria-labelledby="categories_submenu">
  
                          {categories && categories.map((item,index) => (
                            
                            <li key={index}><Link href={`/categories/Todas/${item.nombre.trim().replace(/\s/g,"-")}`} onClick={() => {setIsOpen(false)}}>{item.nombre}</Link></li>
                          ))}
                        </ul>
                      </li>)

                    }




                    {pathname === "/faq" ?
                    (<li className="active dropdown">
                      <Link className="nav-link" href="/faq" onClick={() => {setIsOpen(false)}}>
                        FAQ
                      </Link>
                    </li>)
                    :
                    (<li className="dropdown">
                    <Link className="nav-link" href="/faq" onClick={() => {setIsOpen(false)}}>
                      FAQ
                    </Link>
                    </li>)
                    }

                    {pathname === "/contact" ?
                    (
                    <li className="active dropdown">
                      <Link className="nav-link" href="/contact" onClick={() => {setIsOpen(false)}}>
                        Contacto
                      </Link>
                    </li>)
                    :
                    (
                      <li className="dropdown">
                        <Link className="nav-link" href="/contact" onClick={() => {setIsOpen(false)}}>
                          Contacto
                        </Link>
                      </li>)    
                    }


                  </ul>
                </div>
              </nav>

              <ul className="header_icons_group ul_li">
                {/*
                <li>
                  <button type="button" className="main_search_btn" data-bs-toggle="collapse" data-bs-target="#main_search_collapse" aria-expanded="false" aria-controls="main_search_collapse">
                    <i className="search_icon far fa-search"></i>
                    <i className="search_close fal fa-times"></i>
                  </button>
                </li>
                */}              
                <li>
                    <Link className="cart_btn" href="/cart">
                        <i className="far fa-shopping-bag"></i>
                        <small className="cart_counter">{cart.length}</small>
                    </Link>
                </li>
              </ul>
            </div>
  )
}

