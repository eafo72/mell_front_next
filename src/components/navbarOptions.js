"use client";

import Link from "next/link";

import { usePathname } from "next/navigation";

import { useCartStore } from "../store/cart";

export const NavbarOptions = ({ categories }) => {
  const { cart } = useCartStore(); //debe de ir aqui arriba por ser un hook y evitar errores

  
  const pathname = usePathname();

  function openNav() {
    document.getElementById("mySidenav").style.width = "100vw";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }

  
  return (
    <>
    <div className="menu_wrap">
      <nav className="main_menu navbar navbar-expand-lg">
        <button
          id="btn_hamburger"
          onClick={() => {openNav()}} 
          className="mobile_menu_btn navbar-toggler"
          type="button"
        >
          <span className="navbar-toggler-icon">
            <i className="fal fa-bars"></i>
          </span>
        </button>

        <div
          className="main_menu_inner collapse navbar-collapse"
          id="main_menu_dropdown"
        >
          <ul className="main_menu_list ul_li">
            {pathname === "/" ? (
              <li className="active dropdown">
                <Link
                  className="nav-link"
                  href="/"
                  
                >
                  Inicio
                </Link>
              </li>
            ) : (
              <li className="dropdown">
                <Link
                  className="nav-link"
                  href="/"
                  
                >
                  Inicio
                </Link>
              </li>
            )}

            {pathname.startsWith("/categories") ? (
              <li className="active dropdown">
                <Link
                  href="#"
                  className="nav-link"
                  id="categories_submenu"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Categorías
                </Link>
                <ul
                  className="submenu dropdown-menu"
                  aria-labelledby="categories_submenu"
                >
                  {categories &&
                    categories.map((item, index) => (
                      <li key={index}>
                        <Link
                          href={`/categories/Todas/${item.nombre}`}
                          
                        >
                          {item.nombre}
                        </Link>
                      </li>
                    ))}
                </ul>
              </li>
            ) : (
              <li className="dropdown">
                <Link
                  href="#"
                  className="nav-link"
                  id="categories_submenu"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Categorías
                </Link>
                <ul
                  className="submenu dropdown-menu"
                  aria-labelledby="categories_submenu"
                >
                  {categories &&
                    categories.map((item, index) => (
                      <li key={index}>
                        <Link
                          href={`/categories/Todas/${item.nombre
                            .trim()
                            .replace(/\s/g, "-")}`}
                         
                        >
                          {item.nombre}
                        </Link>
                      </li>
                    ))}
                </ul>
              </li>
            )}

            {pathname === "/faq" ? (
              <li className="active dropdown">
                <Link
                  className="nav-link"
                  href="/faq"
                  
                >
                  FAQ
                </Link>
              </li>
            ) : (
              <li className="dropdown">
                <Link
                  className="nav-link"
                  href="/faq"
                  
                >
                  FAQ
                </Link>
              </li>
            )}

            {pathname === "/contact" ? (
              <li className="active dropdown">
                <Link
                  className="nav-link"
                  href="/contact"
                  
                >
                  Contacto
                </Link>
              </li>
            ) : (
              <li className="dropdown">
                <Link
                  className="nav-link"
                  href="/contact"
                  
                >
                  Contacto
                </Link>
              </li>
            )}
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
          <Link className="cart_btn" href="/cart" onClick={() => {closeNav()}}>
            <i className="far fa-shopping-bag"></i>
            <small className="cart_counter">{cart.length}</small>
          </Link>
        </li>
      </ul>
    </div>

    <div id="mySidenav" className="sidenav">

      <button className="closebtn" onClick={() => {closeNav()}}  >X</button>

      <Link href="/" onClick={() => {closeNav()}} >Inicio</Link>
      <Link href="#menu_categorias" data-bs-toggle="collapse">Categorias</Link>

      <div id="menu_categorias" className="collapse">
        {categories && categories.map((item, index) => (
          
            <Link href={`/categories/Todas/${item.nombre}`}  onClick={() => {closeNav()}} key={index} className="submenu" >
              {item.nombre}
            </Link>
          
        ))}
      </div>              

      <Link href="/faq" onClick={() => {closeNav()}}>FAQ</Link>
      <Link href="/contact" onClick={() => {closeNav()}} >Contacto</Link>

      

    </div>

  </>
  );
};
