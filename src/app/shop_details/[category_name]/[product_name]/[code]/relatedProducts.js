"use client";

import Link from "next/link";

export const RelatedProducts = ({ productosRelacionados, codigo }) => {
  return (
    <section className="popular_product_section" style={{paddingTop:"70px", paddingBottom:"70px"}}>
      <div className="container width_tablet">
        <h2 className="title_text">Productos Relacionados</h2>

        <div className="row">
          {productosRelacionados &&
            productosRelacionados
              .filter(
                (element) =>
                  element.codigo !== codigo &&
                  element.fotos_carrusel.length > 0
              )
              .map((item, index) => (
                <div key={index} className="col col-lg-3 col-md-4 col-sm-6">
                  <div className="shop_layout_1">
                    <div className="shop_image_wrap">
                      <div className="tab-content">
                        {/*foto 1*/}
                        <div
                          className="tab-pane fade show active"
                          role="tabpanel"
                        >
                          <Link
                            className="shop_image"
                            href={`/shop_details/${item.categoria
                              .trim()
                              .replace(/\s/g, "-")}/${item.nombre
                              .trim()
                              .replace(/\s/g, "-")}/${item.codigo}`}
                          >
                            <img
                              src={`${item.foto_principal}`}
                              alt={`${item.foto_principal}`}
                              className="img-fluid"
                            />
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="shop_content clearfix">
                      <h3 className="shop_title"> 
                        <Link
                          href={`/shop_details/${item.categoria
                            .trim()
                            .replace(/\s/g, "-")}/${item.nombre
                            .trim()
                            .replace(/\s/g, "-")}/${item.codigo}`}
                        >
                          {item.nombre}
                        </Link>
                      </h3>

                      <div className="shop_price">
                        <span className="sale_price">$ {item.precio}</span>
                      </div>
                      <ul className="shop_category ul_li">
                        <li>{item.marca}</li>
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
        </div>
      </div>
    </section>
  );
};


