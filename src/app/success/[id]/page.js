import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Success = ({ params }) => {
  return (
    <>
      <ToastContainer />
      <main>
        <section
          className="breadcrumb_section"
          style={{ backgroundColor: "#d4d8dd" }}
        >
          <div className="container">
            <div className="row">
              <div className="col col-lg-6">
                <div className="breadcrumb_content">
                  <h1 className="page_title">Carrito de Compras</h1>
                  <ul className="breadcrumb_nav ul_li_center">
                    <li>
                      <a className="home_btn" href="/">
                        Inicio
                      </a>
                    </li>
                    <li>Carrito de Compras</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="faq_section sec_space_small">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-6">
                <h2 className="faq_title text-center">
                  Hemos recibido su pago, gracias por su compra.
                </h2>
                <p className="text-center">
                  Para rastrear su compra utilice la referencia : {params.id}
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Success;
