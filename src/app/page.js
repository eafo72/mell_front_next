import clienteAxios from "../config/axios";

import Link from 'next/link'


const getCategories = async () => {
  try {
    const res = await clienteAxios.get(`/categoria/obtener`);
    //console.log(res.data.categorias)
    return res.data.categorias;
  } catch (error) {
    console.log(error);
  }
};

const getCategoriesSix = async () => {
  try {
    const res = await clienteAxios.get(`/categoria/obtenerSeis`);
    //console.log(res.data.categorias)
    return res.data.categorias;
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

const Page = async () => {

  const categories = await getCategories();
  const categoriesSix = await getCategoriesSix();
  const products = await getProducts();

  return (
    <div className=".body">
      <main>
        {/*
        <SideMenu></SideMenu>
        */}

        <section className="slider_section main_slider_1">
          <div
            className="main_slider"
            data-slick='{"arrows": false, "dots": false}'
          >
            <div className="slider_item">
              <div className="container width_desktop">
                <div className="row justify-content-end">
                  <div className="col col-lg-5 col-md-6 col-sm-8">
                    <div className="slider_content text-white">
                      {/*
                  <h3 className="small_title" data-animation="fadeInUp2" data-delay=".2s">Para cualquier industria</h3>
                  */}
                      <h4
                        className="big_title text-pink"
                        data-animation="fadeInUp2"
                        data-delay=".4s"
                      >
                        <span style={{ fontFamily: "Margarita" }}>Estilo</span>{" "}
                        <span className="text-brown">a tu alcance</span>
                      </h4>
                      {/*
                  <p className="text-brown" data-animation="fadeInUp2" data-delay=".6s">
                    Para cualquier industria y en cualquier cantidad.
                  </p>
                  */}
                      <Link
                        className="btn btn_primary btn_rounded"
                        href="/categories/Todas/Vestidos"
                        data-animation="fadeInUp2"
                        data-delay=".8s"
                        style={{ fontSize: "1.2rem" }}
                      >
                        Vestidos{" "}
                        <i
                          className="fas fa-angle-right"
                          style={{ marginLeft: "20px" }}
                        ></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="category_section sec_space_large">
          <div className="container width_desktop">
            <div className="grid category_masonry_1 clearfix">
              <div className="grid-sizer"></div>

              {categories &&
                categories
                  .filter((element) => element.indexViewUp === "Sí")
                  .map((item1, index) => {
                    return index === 0 ? (
                      <div key={index} className="grid-item w_50">
                        <Link
                          className="category_item_1"
                          href={`/categories/Todas/${item1.nombre}`}
                        >
                          <img
                            src={`${item1.imagen}`}
                            alt={`${item1.imagen}`}
                          />
                          <span className="item_title">
                            {item1.nombre}{" "}
                            <i
                              className="fas fa-angle-right"
                              style={{
                                position: "absolute",
                                bottom: "20px",
                                right: "30px",
                              }}
                            ></i>
                          </span>
                        </Link>
                      </div>
                    ) : (
                      <div key={index} className="grid-item">
                        <Link
                          className="category_item_1"
                          href={`/categories/Todas/${item1.nombre}`}
                        >
                          <img
                            src={`${item1.imagen}`}
                            alt={`${item1.imagen}`}
                          />
                          <span className="item_title">
                            {item1.nombre}{" "}
                            <i
                              className="fas fa-angle-right"
                              style={{
                                position: "absolute",
                                bottom: "20px",
                                right: "30px",
                              }}
                            ></i>
                          </span>
                        </Link>
                      </div>
                    );
                  })}
            </div>
          </div>
        </div>

        <section className="fullwidth_deals_1">
          <div className="container width_desktop">
            <div className="row justify-content-end">
              <div className="col col-md-6 col-sm-8">
                <div className="deals_content">
                  <h2 className="bg-white text-uppercase">
                    Bienvenida a la boutique
                  </h2>
                  <h3 className="text-pink text-uppercase">
                    OBTÉN EL<span>10%</span>
                  </h3>
                  <p>En tu primera compra</p>
                  <a
                    data-bs-toggle="modal"
                    href="#cod_desc"
                    className="btn btn_primary btn_rounded"
                  >
                    OBTÉN CÓDIGO
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="product_section sec_space_large">
          <div className="container width_desktop">
            <div className="row align-items-center">
              <div className="col ">
                <div className="section_title">
                  <h2 className="title_text text-pink-light">
                    Tendencia a gran precio
                  </h2>
                  <p className="mb-0">Contamos con más de 1000 opciones</p>
                </div>
              </div>

              {/*Controles*/}
              <div className="col ">
                <ul className="product_tabnav_4 nav ul_li_right" role="tablist">
                  {/*Active*/}
                  <li>
                    <button
                      className="active"
                      data-bs-toggle="tab"
                      data-bs-target={`#${
                        categoriesSix &&
                        categoriesSix[0]["nombre"].split(" ").join("_")
                      }_tab`}
                      type="button"
                      role="tab"
                      aria-controls={`#${
                        categoriesSix &&
                        categoriesSix[0]["nombre"].split(" ").join("_")
                      }_tab`}
                      aria-selected="true"
                    >
                      {categoriesSix && categoriesSix[0]["nombre"]}
                    </button>
                  </li>

                  {/*los demas*/}
                  {categoriesSix &&
                    categoriesSix
                      .filter(
                        (element) =>
                          element.nombre !== categoriesSix[0]["nombre"]
                      )
                      .map((item) => (
                        <li key={item._id}>
                          <button
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
                      ))}
                </ul>
              </div>
            </div>

            {/*Contenido de cada tab*/}
            <div className="tab-content">
              {/*Active*/}
              <div
                className="tab-pane fade show active"
                id={`${
                  categories && categories[0]["nombre"].split(" ").join("_")
                }_tab`}
                role="tabpanel"
              >
                <div className="row">
                  {/*Producto*/}
                  {products &&
                    categories &&
                    products
                      .filter(
                        (element) =>
                          element.categoria === categories[0]["nombre"] &&
                          element.fotos_carrusel.length > 0
                      )
                      .map((item, index) => {
                        return index < 8 ? (
                          <div
                            key={item._id}
                            className="col col-lg-3 col-md-4 col-sm-6"
                          >
                            <div className="shop_layout_1">
                              <div className="shop_image_wrap">
                                <div className="tab-content">
                                  {/*foto 1*/}
                                  <div
                                    className="tab-pane fade show active"
                                    id=""
                                    role="tabpanel"
                                  >
                                    <button className="shop_image">
                                      <img
                                        src={`${item.foto_principal}`}
                                        alt={`${item.foto_principal}`}
                                        className="img-fluid"
                                      />
                                    </button>
                                  </div>
                                </div>
                              </div>

                              {/*info producto*/}
                              <div className="shop_content">
                                <h3 className="shop_title">
                                  <a href="#!">{item.nombre}</a>
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
                      <li><a href={`/categories/${item.categoria}`} > {item.categoria}</a></li>
                      */}
                                </ul>
                                {/*
                    <div className="rating_wrap">
                      <ul className="rating_star ul_li">
                        <li className="active"><i className="fas fa-star"></i></li>
                        <li className="active"><i className="fas fa-star"></i></li>
                        <li className="active"><i className="fas fa-star"></i></li>
                        <li className="active"><i className="fas fa-star"></i></li>
                        <li><i className="far fa-star"></i></li>
                      </ul>
                      <span className="shop_review_text">(7)</span>
                    </div>
                    */}
                              </div>
                            </div>
                          </div>
                        ) : (
                          <></>
                        );
                      })}
                  {/*fin producto*/}
                </div>
              </div>

              {/*los demas*/}
              {categories &&
                categories
                  .filter(
                    (element) => element.nombre !== categories[0]["nombre"]
                  )
                  .map((item1) => (
                    <div
                      key={item1._id}
                      className="tab-pane fade"
                      id={`${item1.nombre.split(" ").join("_")}_tab`}
                      role="tabpanel"
                    >
                      <div className="row">
                        {/*Producto*/}

                        {products &&
                          products
                            .filter(
                              (element) =>
                                element.categoria === item1.nombre &&
                                element.fotos_carrusel.length > 0
                            )
                            .map((item, index) => {
                              return index < 8 ? (
                                <div
                                  key={item._id}
                                  className="col col-lg-3 col-md-4 col-sm-6"
                                >
                                  <div className="shop_layout_1">
                                    <div className="shop_image_wrap">
                                      <div className="tab-content">
                                        {/*foto 1*/}
                                        <div
                                          className="tab-pane fade show active"
                                          id=""
                                          role="tabpanel"
                                        >
                                          <button className="shop_image">
                                            <img
                                              src={`${item.foto_principal}`}
                                              alt={`${item.foto_principal}`}
                                              className="img-fluid"
                                            />
                                          </button>
                                        </div>
                                      </div>
                                    </div>

                                    {/*info producto*/}
                                    <div className="shop_content">
                                      <h3 className="shop_title">
                                        <a href="#!">{item.nombre}</a>
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
                                        <li>{item.categoria}</li>
                                        {/*
                      <li><a href={`/categories/${item.categoria}`} > {item.categoria}</a></li>
                      */}
                                      </ul>
                                      {/*
                    <div className="rating_wrap">
                      <ul className="rating_star ul_li">
                        <li className="active"><i className="fas fa-star"></i></li>
                        <li className="active"><i className="fas fa-star"></i></li>
                        <li className="active"><i className="fas fa-star"></i></li>
                        <li className="active"><i className="fas fa-star"></i></li>
                        <li><i className="far fa-star"></i></li>
                      </ul>
                      <span className="shop_review_text">(7)</span>
                    </div>
                    */}
                                    </div>
                                  </div>
                                </div>
                              ) : (
                                <></>
                              );
                            })}
                        {/*fin producto*/}
                      </div>
                    </div>
                  ))}
            </div>

            {/*
        <div className="load_more text-center">
          <a className="btn border_black btn_rounded" href="#!">Ver más</a>
        </div>
        */}
          </div>

          {/*modal código descuento*/}
          <div
            className="modal fade"
            id="cod_desc"
            aria-hidden="true"
            tabIndex="-1"
          >
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Código de Descuento</h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body">
                  <p>
                    Utiliza este código y obtén un 10% de descuento:{" "}
                    <strong>mell10</strong>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="feature_section">
          <div className="container-fluid">
            <div className="row no_gap">
              {categories &&
                categories
                  .filter((element) => element.indexViewDown === "Sí")
                  .map((item1, index) => {
                    return index < 3 ? (
                      <div
                        key={index}
                        className="col col-lg-4 col-md-4 col-sm-12"
                      >
                        <div className="feature_item_1">
                          <Link
                            className="item_image"
                            href={`/categories/Todas/${item1.nombre}`}
                          >
                            <img
                              src={`${item1.imagen}`}
                              alt={`${item1.imagen}`}
                              style={{ minWidth: "100%" }}
                            />
                          </Link>
                          <div className="item_content">
                            <h3 className="item_title">
                              <Link href={`/categories/Todas/${item1.nombre}`}>
                                {item1.nombre}
                              </Link>
                            </h3>
                            <Link
                              href={`/categories/Todas/${item1.nombre}`}
                              className="item_badge"
                            >
                              VER{" "}
                              <i
                                className="fas fa-angle-right"
                                style={{ marginLeft: "10px" }}
                              ></i>
                            </Link>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <></>
                    );
                  })}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}


export default Page