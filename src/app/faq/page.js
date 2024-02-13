import Link from "next/link";

import clienteAxios from "../../config/axios";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Faq = async () => {
  const getFaqs = async () => {
    try {
      const res = await clienteAxios.get(`/faq/obtener`);
      //console.log(res.data.faqs)
      return res.data.faqs;
    } catch (error) {
      console.log(error);
    }
  };

  const faqs = await getFaqs();

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
                  <h1 className="page_title">FAQ</h1>
                  <ul className="breadcrumb_nav ul_li_center">
                    <li>
                      <Link className="home_btn" href="/">
                        Inicio
                      </Link>
                    </li>
                    <li>FAQ</li>
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
                <h2 className="faq_title text-center" style={{marginTop:"50px"}}>Preguntas Frecuentes</h2>
                <div className="accordion_primary" id="accordion_primary">
                  {faqs &&
                    faqs.map((item, index) => (
                      <div key={index} className="accordion-item">
                        <button
                          className="collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target={`#accordion_primary_${index}`}
                          aria-expanded="false"
                          aria-controls={`accordion_primary_${index}`}
                        >
                          {item.pregunta}
                        </button>
                        <div
                          id={`accordion_primary_${index}`}
                          className="collapse"
                          data-bs-parent={`#accordion_primary_${index}`}
                        >
                          <div className="accordion-body">
                            <p>{item.respuesta}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Faq;
