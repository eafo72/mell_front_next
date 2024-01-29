import Link from 'next/link'

import clienteAxios from "../../config/axios";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Aviso = async () => {
 

  const getAviso = async () => {
    try {
      const res = await clienteAxios.get(`/empresa/single/658c57daea3c61d484acf6fb`);
      //console.log(res.data)
      return res.data.single.aviso;
      
    } catch (error) {
      console.log(error);
    }
  };

  
  const avisoDeP = await getAviso();

  return (
    
    <>
    <ToastContainer />
    <main>
      <section
        className="breadcrumb_section"
        style={{ backgroundColor:"#d4d8dd" }}
      >
        <div className="container">
          <div className="row">
            <div className="col col-lg-6">
              <div className="breadcrumb_content">
                <h1 className="page_title">Aviso de privacidad</h1>
                <ul className="breadcrumb_nav ul_li_center">
                  <li>
                    <Link className="home_btn" href="/">
                      Inicio
                    </Link>
                  </li>
                  <li>Aviso de privacidad</li>
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
                
                  {avisoDeP}                
                
              </div>
            </div>
          </div>
        </section>
      </main>
      </>

  )
}

export default Aviso