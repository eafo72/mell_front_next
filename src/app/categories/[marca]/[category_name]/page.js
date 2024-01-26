 


import Link from 'next/link'

import clienteAxios from "../../../../config/axios";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { CategorySelector } from "./categorySelector";
import { BrandSelector } from "./brandSelector";

const AllCategories = async ({params}) => {
 
 
  const getCategories = async () => {
    try {
      const res = await clienteAxios.get(`/categoria/obtener`);
      //console.log(res.data.categorias)
      return res.data.categorias;
    } catch (error) {
      console.log(error);
    }
  };

  const getBrands = async () => {
    try {
      const res = await clienteAxios.get(`/marca/obtener`);
      //console.log(res.data.marcas)
      return res.data.marcas;
    } catch (error) {
      console.log(error);
    }
  };

  const getProducts = async () => {
    try {
      const res = await clienteAxios.get(`/producto/obtener`);
      //console.log(res.data.productos)
      return res.data.productos;
    } catch (error) {
      console.log(error);
    }
  };

  
  const categories = await getCategories();
  const brands =  await getBrands();
  const products =  await getProducts();

  return (
    <>
    <ToastContainer />
    <div className="backtotop">
        <button className="scroll">
          <i className="far fa-arrow-up"></i>
        </button>
     </div>
    <main>
    <section
          className="breadcrumb_section"
          style={{ backgroundColor:"#f7e6d6" }}
        >
          <div className="container">
            <div className="row">
              <div className="col col-lg-6">
                <div className="breadcrumb_content">
                  <h1 className="page_title">Categorías</h1>
                  <ul className="breadcrumb_nav ul_li_center">
                    <li>
                      <Link className="home_btn" href="/">
                        Inicio
                      </Link>
                    </li>
                    <li>{params.category_name.replace("-"," ")}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

      <section className="product_section sec_space_small">
        <div className="container width_desktop">
          <div className="filter_input_group">
            <form action="#">
              <ul className="items_col ul_li">
               
                <li>
                  <h4 className="item_title text-uppercase">Categorías</h4>
                  <div className="select_option clearfix">
                    <CategorySelector brand_name = {params.marca.replace("-"," ")} category_name = {params.category_name.replace("-"," ")} categories = {categories} />
                  </div>
                </li>
               

                <li>
                  <h4 className="item_title text-uppercase">Marca</h4>
                  <div className="select_option clearfix">
                    <BrandSelector brand_name = {params.marca.replace("-"," ")} category_name = {params.category_name.replace("-"," ")} brands = {brands} />
                  </div>
                </li>
              </ul>
            </form>

           
          </div>

          {/*Controles OCULTOS*/}
          <div className="col col-lg-6 col-md-12 d-none">
            <ul className="product_tabnav_4 nav ul_li_right" role="tablist" id="MyTabs">
              
              {categories &&
                categories
                  .map((item) => {
                    return item.nombre === params.category_name.replace("-"," ") ? ( 
                      <li key={item._id}>
                      <button 
                        id={`${item.nombre.split(" ").join("_")}_btn`}
                        className="active"
                        data-bs-toggle="tab"
                        data-bs-target={`#${item.nombre
                          .split(" ")
                          .join("_")}_tab`}
                        type="button"
                        role="tab"
                        aria-controls={`#${item.nombre
                          .split(" ")
                          .join("_")}_tab`}
                        aria-selected="true"
                      >
                        {item.nombre}
                      </button>
                    </li>
                    ):(
                      <li key={item._id}>
                      <button id={`${item.nombre.split(" ").join("_")}_btn`}
                        data-bs-toggle="tab"
                        data-bs-target={`#${item.nombre
                          .split(" ")
                          .join("_")}_tab`}
                        type="button"
                        role="tab"
                        aria-controls={`#${item.nombre
                          .split(" ")
                          .join("_")}_tab`}
                        aria-selected="false"
                      >
                        {item.nombre}
                      </button>
                    </li>
                    )
                  })}
            </ul>
          </div>

          {/*Contenido de cada tab*/}
          <div className="tab-content">

           
            {categories && categories.map((item1) => {
              return item1.nombre === params.category_name.replace("-"," ") ? ( 

                  <div key={item1._id} className="tab-pane fade show active" id={`${item1.nombre.split(" ").join("_")}_tab`} role="tabpanel">
                    <div className="row shop_five_col">
                      {/*Producto*/}
                      {products &&
                        products
                          .filter(
                            (element) =>  params.marca.replace("-"," ") != 'Todas' ? element.categoria === item1.nombre && element.fotos_carrusel.length > 0 && element.marca === params.marca.replace("-"," ") : element.categoria === item1.nombre && element.fotos_carrusel.length > 0
                            )
                          .map((item) => (
                            <div key={item._id} className="col">
                              <div className="shop_layout_1">
                                <div className="shop_image_wrap">
                                  <div className="tab-content">
                                    {/*foto 1*/}
                                    <div
                                      className="tab-pane fade show active"
                                      id=""
                                      role="tabpanel"
                                    >
                                      <a className="shop_image" href={`/shop_details/${item.categoria.trim().replace(/\s/g,"-")}/${item.nombre.trim().replace(/\s/g,"-")}/${item.codigo}`}
                                      >
                                        <img
                                          src={`${item.foto_principal}`}
                                          alt={`${item.foto_principal}`}
                                          className="img-fluid"
                                        />
                                      </a>
                                    </div>

                                   
                                  </div>

                                 

                                 
                                </div>

                                {/*info producto*/}
                                <div className="shop_content">
                                  <h3 className="shop_title">
                                    <a href={`/shop_details/${item.categoria.trim().replace(/\s/g,"-")}/${item.nombre.trim().replace(/\s/g,"-")}/${item.codigo}`}
                                    >{item.nombre}
                                    </a>
                                  </h3>
                                  <div className="shop_price">
                                    <span className="sale_price">
                                      $ {item.precio}
                                    </span>
                                    {/*precio anterior
                                      <del>$120.00</del>
                                    */}
                                  </div>
                                  <ul className="shop_category ul_li">
                                    <li>{item.marca}</li>  
                                    {/*
                                    <li><a href="#!" onClick={() => goToCategories(item.categoria)}> {item.categoria}</a></li>
                                    */}

                                  </ul>
                                  {/*  
                                  <div className="rating_wrap">
                                    <ul className="rating_star ul_li">
                                      <li className="active">
                                        <i className="fas fa-star"></i>
                                      </li>
                                      <li className="active">
                                        <i className="fas fa-star"></i>
                                      </li>
                                      <li className="active">
                                        <i className="fas fa-star"></i>
                                      </li>
                                      <li className="active">
                                        <i className="fas fa-star"></i>
                                      </li>
                                      <li>
                                        <i className="far fa-star"></i>
                                      </li>
                                    </ul>
                                    <span className="shop_review_text">
                                      (7)
                                    </span>
                                  </div>
                                  */}  

                                </div>
                              </div>
                            </div>
                          ))}
                      {/*fin producto*/}
                    </div>
                  </div>
              ):(

                  <div key={item1._id} className="tab-pane fade" id={`${item1.nombre.split(" ").join("_")}_tab`} role="tabpanel">
<div className="row shop_five_col">
  {/*Producto*/}
  {products &&
    products
      .filter(
        (element) => params.marca.replace("-"," ") != 'Todas' ? element.categoria === item1.nombre && element.fotos_carrusel.length > 0 && element.marca === params.marca.replace("-"," ") : element.categoria === item1.nombre && element.fotos_carrusel.length > 0
      )
      .map((item) => (
        <div key={item._id} className="col">
          <div className="shop_layout_1">
            <div className="shop_image_wrap">
              <div className="tab-content">
                {/*foto 1*/}
                <div
                  className="tab-pane fade show active"
                  id=""
                  role="tabpanel"
                >
                 <a className="shop_image" href={`/shop_details/${item.categoria.trim().replace(/\s/g,"-")}/${item.nombre.trim().replace(/\s/g,"-")}/${item.codigo}`}
                  >
                    <img
                      src={`${item.foto_principal}`}
                      alt={`${item.foto_principal}`}
                      className="img-fluid"
                    />
                  </a>
                </div>

                
              </div>

              

             
            </div>

            {/*info producto*/}
            <div className="shop_content">
              <h3 className="shop_title">
              <a href={`/shop_details/${item.categoria.trim().replace(/\s/g,"-")}/${item.nombre.trim().replace(/\s/g,"-")}/${item.codigo}`}
                >{item.nombre}</a>
              </h3>
              <div className="shop_price">
                <span className="sale_price">
                  $ {item.precio}
                </span>
                {/*precio anterior
                  <del>$120.00</del>
                */}
              </div>
              <ul className="shop_category ul_li">
                <li>{item.marca}</li>
                {/*
                <li><a href="#!" onClick={() => goToCategories(item.categoria)}> {item.categoria}</a></li>
                */}

              </ul>
              {/*
              <div className="rating_wrap">

                <ul className="rating_star ul_li">
                  <li className="active">
                    <i className="fas fa-star"></i>
                  </li>
                  <li className="active">
                    <i className="fas fa-star"></i>
                  </li>
                  <li className="active">
                    <i className="fas fa-star"></i>
                  </li>
                  <li className="active">
                    <i className="fas fa-star"></i>
                  </li>
                  <li>
                    <i className="far fa-star"></i>
                  </li>
                </ul>
                <span className="shop_review_text">
                  (7)
                </span>
              </div>
              */}
            </div>
          </div>
        </div>
      ))}
  {/*fin producto*/}
</div>
                  </div>
              )


              })}
          </div>
        </div>
      </section>
    </main>
    </>
  );
};

export default AllCategories;
