
import Link from 'next/link'

import clienteAxios from "../../config/axios";

import { ToastContainer, toast } from "react-toastify";

const Contact = async () => {
  
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
                  <h1 className="page_title">Contacto</h1>
                  <ul className="breadcrumb_nav ul_li_center">
                    <li>
                      <Link className="home_btn" href="/">
                        Inicio
                      </Link>
                    </li>
                    <li>Contacto</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="contact_section sec_space_small p-4">
          <div className="container">
            <div className="contact3_wrap">
            
            <div className="row clearfix pt-3">
              <iframe 
              title="Map"
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3775.0506672214187!2d-99.1756667!3d18.8848333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTjCsDUzJzA1LjQiTiA5OcKwMTAnMzIuNCJX!5e0!3m2!1ses!2smx!4v1702410025817!5m2!1ses!2smx" 
              style={{width:"100%",height:"450px",border:"0"}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
              

              <div className="row">
                <div className="col">
                  <div className="contact_form3">
                    <form >
                      <h2>Contacto</h2>
                      <div className="form_item">
                        <h3 className="input_title">Nombre</h3>
                        <input
                          //onChange={(e) => setNombre(e.target.value)}
                          type="text"
                          name="nombre"
                          placeholder="Nombre"
                          id="nombre"
                        />
                      </div>
                      <div className="form_item">
                        <h3 className="input_title">Teléfono</h3>
                        <input
                          //onChange={(e) => setTelefono(e.target.value)}
                          type="tel"
                          name="telefono"
                          placeholder="Teléfono"
                          id="telefono"
                        />
                      </div>
                      <div className="form_item">
                        <h3 className="input_title">Correo</h3>
                        <input
                          //onChange={(e) => setCorreo(e.target.value)}
                          type="email"
                          name="correo"
                          placeholder="Correo"
                          id="correo"
                        />
                      </div>
                      <div className="form_item">
                        <h3 className="input_title">Mensaje</h3>
                        <textarea
                          //onChange={(e) => setMensaje(e.target.value)}
                          name="mensaje"
                          placeholder="Escribe tu mensaje, si es relacionado con una compra no olvides escribir tu id de compra"
                          id="mensaje"
                        ></textarea>
                      </div>
                      <button
                        className="btn btn_primary btn_rounded"
                        type="submit"
                      >
                        Enviar
                      </button>
                    </form>
                  </div>
                </div>
                <div className="col">
                  <div className="contact_form3">
                    <div className="info_list">
                      <h4>Nuestra ubicación</h4>
                      <ul className="ul_li_block">
                        <li>Av. Insurgentes #24,</li>
                        <li>Jiutepec, Morelos</li>
                      </ul>
                    </div>
                    <div className="info_list">
                      <h4>Contáctanos</h4>
                      <ul className="ul_li_block">
                        <li>ecommerce@mellfashionboutique.com</li>
                      </ul>
                    </div>
                    <div className="social_wrap">
                      <h4>Síguenos en:</h4>
                      <ul className="social_border ul_li">
                        <li>
                          <a href="https://www.facebook.com/fashionistaa.boutique" target="_blank" rel="noreferrer">
                            <i className="fab fa-facebook-f"></i>
                          </a>
                        </li>
                        {/*
                        <li><a href="#!"><i className="fab fa-twitter"></i></a></li>
                        <li><a href="#!"><i className="fab fa-skype"></i></a></li>
                        <li><a href="#!"><i className="fas fa-envelope"></i></a></li>
                        <li><a href="#!"><i className="fab fa-whatsapp"></i></a></li>
                        */}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Contact


