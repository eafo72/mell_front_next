import Image from 'next/image'

import clienteAxios from "../config/axios";

import logo_footer from "../images/logo/logo-mell-footer.png";
import Link from 'next/link'

export async function Footer() {

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

  return (
    <>
      <footer className="footer_section footer_style_6">
        <div className="footer_widget_area">
          <div className="container width_desktop">
            <div className="row">
              <div className="col col-lg-4 col-md-5 col-sm-6">
                <div className="footer_widget footer_about">
                  <div className="brand_logo">
                    <Link className="brand_link" href="/">
                      <Image
                        style={{ height: "100px", width: "100px" }}
                        src={logo_footer}
                        alt={logo_footer}
                      />
                    </Link>
                  </div>
                  <p>
                    Boutique Fashionista
                    <br />
                    Av. Insurgentes #24, Jiutepec, Morelos
                  </p>

                  {/*
                  <div className="fooetr_newsletter_4">
                    <form action="#">
                      <div className="form_item">
                        <input type="email" name="email" placeholder="Escribe tu correo"/>
                        <button type="submit" className="btn btn_primary btn_rounded bg-carnita">SUSCRIBIRME</button>
                      </div>
                    </form>
                  </div>
                  */}
                </div>
              </div>

              <div className="col col-lg-2 col-md-3 col-sm-6">
                <div className="footer_widget fooetr_useful_links">
                  <h3 className="footer_widget_title text-white">Categorías</h3>
                  <ul className="ul_li_block">
                    {categories &&
                      categories.map((item, index) => (
                        <li key={index}>
                          <Link href={`/categories/Todas/${item.nombre}`}>
                            {item.nombre}
                          </Link>
                        </li>
                      ))}
                  </ul>
                </div>
              </div>

              <div className="col col-lg-3 col-md-4 col-sm-6">
                <div className="footer_widget footer_twitter">
                  <h3 className="footer_widget_title text-white">Síguenos</h3>
                  <ul className="social_round ul_li">
                    <li>
                      <a
                        className="bg_facebook"
                        href="https://www.facebook.com/fashionistaa.boutique"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i className="fab fa-facebook-f"></i>
                      </a>
                    </li>
                    {/*
                    <li><a className="bg_tumblr" href="#!"><i className="fab fa-tumblr"></i></a></li>
                    <li><a className="bg_twitter" href="#!"><i className="fab fa-twitter"></i></a></li>
                    <li><a className="bg_youtube" href="#!"><i className="fab fa-youtube"></i></a></li>
                    */}
                  </ul>
                </div>
              </div>

              <div className="col col-lg-3 col-md-4 col-sm-6">
                <div className="row">
                  <div className="footer_widget">
                    <h3 className="footer_widget_title text-white">
                      Contáctanos
                    </h3>
                    <ul className="footer_contact_info ul_li_block">
                      <li>
                        <p>
                          Email:{" "}
                          <a href="mailto:ecommerce@mellfashionboutique.com">
                            ecommerce@mellfashionboutique.com
                          </a>
                        </p>
                      </li>
                    </ul>
                    {/*
                  <span className="hot_line">+38(043) 453-246-321</span>
                  */}
                  </div>
                </div>

                <div className="row">
                  <div className="footer_widget fooetr_useful_links">
                    <br />
                    <h3 className="footer_widget_title text-white">
                      Información
                    </h3>
                    <ul className="ul_li_block">
                      <li>
                        <Link href="/nop">Aviso de privacidad</Link>
                      </li>
                      <li>
                        <Link href="/terminos">Términos y Condiciones</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer_bottom">
          <div className="container width_desktop">
            <p className="copyright_text text-center">
              © Todos los derechos reservados{" "}
              <a href="index.html">Mell Fashion Boutique</a>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
