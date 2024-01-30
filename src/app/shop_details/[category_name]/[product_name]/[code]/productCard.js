"use client";

import { useState } from "react";

import Select from "react-select";


import ImageGallery from "react-image-gallery";

import { FacebookShareButton, FacebookIcon } from "react-share";

export const ProductCard = ({ fotos_carrusel, producto, allSizes }) => {
  const [talla, setTalla] = useState();
  const [color, setColor] = useState();
  const [cantidad, setCantidad] = useState(1);

  let images = []; 
 
  for (let i = 0; i < fotos_carrusel.length; i++) {
      images.push(
      {
        original: fotos_carrusel[i]["image"],
        thumbnail: fotos_carrusel[i]["image"],
        originalClass: "img-fluid",
      },
      );
  }

  const currentPageUrl = window.location.href;  

  const handleColorChange = (codigo, label) => {
    setColor({ value: codigo, label: label });
  };

  const mostrarMensaje = (mensaje) => {
    toast.error(mensaje, {
      position: "top-right",
      autoClose: 2500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      progress: undefined,
      theme: "dark",
    });
  };

  const mostrarAviso = (mensaje) => {
    toast.success(mensaje, {
      position: "top-right",
      autoClose: 2500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      progress: undefined,
      theme: "dark",
    });
  };

  const addToCart = (event) => {
    event.preventDefault();

    //validamos campos
    if (color === "" || color === undefined) {
      mostrarMensaje("Debes seleccionar un color");
    } else if (talla === "" || talla === undefined) {
      mostrarMensaje("Debes seleccionar una talla");
    } else if (cantidad === "" || cantidad === undefined) {
      mostrarMensaje("Debes escribir una cantidad");
    } else {
      dispatch({
        type: "ADD_TO_CART",
        value: {
          foto_principal,
          nombre_original,
          marca,
          categoria,
          subcategoria,
          codigo: producto.codigo + "-" + talla.value + "-" + color.value,
          codigo_producto: producto.codigo,
          nombre_producto: producto.nombre,
          codigo_talla: talla.value,
          nombre_talla: talla.label,
          codigo_color: color.value,
          nombre_color: color.label,
          cantidad: parseInt(cantidad),
          precio,
          total: parseInt(cantidad) * precio,
        },
      });

      /*
          setCart((cart) => [
            ...cart,
            {
              foto_principal,
              nombre_original,
              marca,
              categoria,
              subcategoria,
              codigo: producto.codigo + "-" + talla.value + "-" + color.value,
              codigo_producto: producto.codigo,
              nombre_producto: producto.nombre,
              codigo_talla: talla.value,
              nombre_talla: talla.label,
              codigo_color: color.value,
              nombre_color: color.label,
              cantidad: parseInt(cantidad),
              precio,
              total: parseInt(cantidad) * precio,
            },
          ]);
          */

      mostrarAviso("Producto Agregado");
    }
  };

  const customStyles = {
    control: (base, state) => ({
      ...base,
      background: "transparent",
    }),
    singleValue: (base, state) => ({
      ...base,
      color: "rgb(15 23 42 / var(--tw-text-opacity))",
    }),
    multiValueRemove: (base, state) => ({
      ...base,
      color: "red",
    }),
    option: (base, state) => {
      return {
        ...base,
        background: "",
        color: state.isFocused ? "black" : "grey",
      };
    },
  };

  return (
    <section className="shop_details bg_gray sec_space_small">
      <div className="container">
        <div className="row ">
          <div className="col col-lg-7 col-md-8">
            <ImageGallery items={images} />
          </div>

          <div className="col col-lg-5 col-md-8">
            <div className="shop_details_content">
              {/*
                <div className="item_badge">Sale</div>
                */}
              <h2 className="item_subtitle">
                {producto && producto.categoria}
              </h2>
              <h3 className="item_title">{producto && producto.nombre}</h3>
              <h4>{producto && producto.marca}</h4>
              <div className="item_price">
                <span className="sale_price">
                  $ {producto && producto.precio}
                </span>
                {/*
                  <del>$130.00</del>
                   */}
              </div>
              <p className="mb-0">{producto && producto.descripcion}</p>
              <hr />
              <div className="sd_info_layout">
                <h4 className="title_text">Color:</h4>

                <ul className="sd_color_list ul_li">
                  {producto &&
                    producto.color.map((item, index) => (
                      <li key={index}>
                        <input
                          style={{ backgroundColor: item.colorhexa }}
                          onChange={() =>
                            handleColorChange(item.value, item.label)
                          }
                          type="radio"
                          name="sd_item_color"
                        />
                      </li>
                    ))}
                </ul>
              </div>

              <div className="sd_info_layout">
                <h4 className="title_text">Talla:</h4>

                <div className="sd_item_size_input">
                  <Select
                    styles={customStyles}
                    placeholder="Seleccione"
                    options={allSizes}
                    value={talla}
                    onChange={setTalla}
                    isSearchable={true}
                  ></Select>
                </div>
              </div>

              <ul className="sd_btns_group ul_li">
                <li>
                  <div className="quantity_form">
                    <button
                      type="button"
                      className="input_number_decrement"
                      onClick={() => setCantidad(cantidad > 1 ? cantidad - 1 : 1)}
                    >
                      <i className="fal fa-minus"></i>
                    </button>
                    <input
                      className="input_number"
                      type="number"
                      onChange={(e) => setCantidad(e.target.value)}
                      value={cantidad}
                      min="1"
                    />
                    <button
                      type="button"
                      className="input_number_increment"
                      onClick={() => setCantidad(cantidad + 1)}
                    >
                      <i className="fal fa-plus"></i>
                    </button>
                  </div>
                </li>
                <li>
                  <button
                    className="btn btn_primary btn_rounded text-uppercase"
                    onClick={(e) => addToCart(e)}
                  >
                    Agregar al carrito
                  </button>
                </li>
              </ul>

              <hr />

              <div className="row align-items-center justify-content-between">
                <div className="col col-lg-7 col-md-6">
                  <div className="sd_info_layout mb-0">
                    <h4 className="title_text">Compartir:</h4>
                    <ul className="social_primary ul_li">
                      <li>
                          <FacebookShareButton
                          url={currentPageUrl}
                          >
                          <FacebookIcon></FacebookIcon>
                          </FacebookShareButton>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


