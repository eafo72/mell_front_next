
import Image from 'next/image'
import Link from 'next/link'

import clienteAxios from "../config/axios";

import logo from "../images/logo/logo-mell.png";

import { NavbarCartButton } from "./navbarCartButton"

export async function Navbar() {

   
  const getActualButton = async () => {

    //console.log(window.location.pathname);
    //const combo =  (window.location.pathname).split("/");
    //const actual = "/"+combo[1];
    //console.log(actual);

    const actual = "";
    return actual;

  }

  const getSlogan = async () => {
    try {
      const res = await clienteAxios.get(`/empresa/single/658c57daea3c61d484acf6fb`);
      //console.log(res.data)
      return res.data.single.slogan;
      
    } catch (error) {
      console.log(error);
    }
  };

  const getCategories = async () => {
    try {
      const res = await clienteAxios.get(`/categoria/obtener`);
      //console.log(res.data.categorias)
      return res.data.categorias;
    } catch (error) {
      console.log(error);
    }
  };
  
 
  
  const categories = await getCategories();
  const slogan = await getSlogan();
  const actualButton  = await getActualButton();
   

  return (
    <>
  
    <header className="header_section header_1">
        <div className="container width_desktop">
          <div className="header_top">
            <p className="welcome_text">{slogan}</p>
            <ul className="header_icons_list ul_li">
              <li>
                <ul className="social_primary ul_li">
                  <li><a href="https://www.facebook.com/fashionistaa.boutique" target="_blank" rel="noreferrer"><i className="fab fa-facebook-f"></i></a></li>
                </ul>
              </li>
              <li>
                <a href="mailto:ecommerce@mellfashionboutique.com"><i className="fas fa-envelope"></i></a>
              </li>
              <li>
                <a href="https://mell-panel.web.app" target="_blank" rel="noreferrer" className="user_account_btn"><i className="fas fa-user"></i> Login</a>
              </li>
            </ul>
          </div>

          <div className="header_bottom">
            <div className="brand_logo">
              <Link className="brand_link" href="/">
              <Image
                 className="logo_size logo_m" src={logo} alt={logo} />
              </Link>
            </div>

            <div className="menu_wrap">
              <nav className="main_menu navbar navbar-expand-lg">
                <button id="btn_hamburger" className="mobile_menu_btn navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#main_menu_dropdown" aria-controls="main_menu_dropdown" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"><i className="fal fa-bars"></i></span>
                </button>
                <div className="main_menu_inner collapse navbar-collapse" id="main_menu_dropdown">
                  <ul className="main_menu_list ul_li">


                    {actualButton && actualButton === "/" ?
                    (
                    <li className="active dropdown">
                      <Link className="nav-link" href="/">
                        Inicio
                      </Link>
                    </li>)
                    :
                    (
                      <li className="dropdown">
                        <Link className="nav-link" href="/">
                          Inicio
                        </Link>
                      </li>)
                    }   

                    {actualButton && actualButton === "/categories" ?
                    (
                    <li className="active dropdown">
                      <Link href="#" className="nav-link"  id="categories_submenu" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Categorías
                      </Link>
                      <ul className="submenu dropdown-menu" aria-labelledby="categories_submenu">

                        {categories && categories.map((item,index) => (
                          
                          <li key={index}><Link href={`/categories/${item.nombre}`}>{item.nombre}</Link></li>
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
                            
                            <li key={index}><Link href={`/categories/Todas/${item.nombre}`}>{item.nombre}</Link></li>
                          ))}
                        </ul>
                      </li>)

                    }




                    {actualButton && actualButton === "/faq" ?
                    (<li className="active dropdown">
                      <Link className="nav-link" href="/faq">
                        FAQ
                      </Link>
                    </li>)
                    :
                    (<li className="dropdown">
                    <Link className="nav-link" href="/faq">
                      FAQ
                    </Link>
                    </li>)
                    }

                    {actualButton && actualButton === "/contact" ?
                    (
                    <li className="active dropdown">
                      <Link className="nav-link" href="/contact">
                        Contacto
                      </Link>
                    </li>)
                    :
                    (
                      <li className="dropdown">
                        <Link className="nav-link" href="/contact">
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
                  <NavbarCartButton/>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="main_search_collapse collapse" id="main_search_collapse">
          <div className="main_search_form card">
            <div className="container width_desktop">
              <form action="#">
                <div className="form_item">
                  <input type="search" name="search" placeholder="Search here..."/>
                  <button type="submit" className="submit_btn"><i className="fal fa-search"></i></button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </header>

                
      </>   
  );
}
