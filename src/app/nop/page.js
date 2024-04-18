import Link from "next/link";

//import clienteAxios from "../../config/axios";

const Aviso = async () => {
  /*
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
  */

  return (
    <>
      <main>
        <section className="breadcrumb_section">
          <div className="container">
            <div className="row">
              <div className="col col-lg-6">
                <div className="breadcrumb_content">
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
              <div className="col-lg-8">
                <div style={{ padding: "30px 0px" }}>
                  <p>
                    De acuerdo a lo Previsto en la Ley Federal de Protección de
                    Datos Personales, declara Mell Fashion Boutique, ser una
                    empresa legalmente constituida de conformidad con las leyes
                    mexicanas y como responsable del tratamiento de sus datos
                    personales, hace de su conocimiento que la información de
                    nuestros clientes es tratada de forma estrictamente
                    confidencial por lo que, al proporcionar sus datos
                    personales, tales como:
                  </p>
                  <ul style={{ listStyle: "none" }}>
                    <li>1. Nombre Completo.</li>
                    <li>2. Nombre de la empresa</li>
                    <li>3. Teléfono</li>
                    <li>4. Correo</li>
                  </ul>

                  <p>
                    Estos serán utilizados única y exclusivamente para los
                    siguientes fines:
                  </p>
                  <ul style={{ listStyle: "none" }}>
                    <li>1. Información y Prestación de Servicios.</li>
                    <li>2. Actualización de la Base de Datos.</li>
                    <li>
                      3. Cualquier finalidad análoga o compatible con las
                      anteriores.
                    </li>
                  </ul>

                  <p>
                    Para prevenir el acceso no autorizado a sus datos personales
                    y con el fin de asegurar que la información sea utilizada
                    para los fines establecidos en este aviso de privacidad,
                    hemos establecido diversos procedimientos con la finalidad
                    de evitar el uso o divulgación no autorizados de sus datos,
                    permitiéndonos tratarlos debidamente.
                  </p>
                  <p>
                    Todos sus datos personales son tratados de acuerdo a la
                    legislación aplicable y vigente en el país, por ello le
                    informamos que usted tiene en todo momento los derechos de
                    acceder, rectificar, cancelar u oponerse al tratamiento que
                    le damos a sus datos personales; derecho que podrá hacer
                    valer a través de:
                  </p>
                  <p>
                    Área de Privacidad encargada de la seguridad de datos
                    personales en el Teléfono (55) 19914185, o al correo
                    electrónico: contacto@juanchoelreydelrancho.com
                  </p>
                  <p>
                    A través de estos canales usted podrá actualizar sus datos y
                    especificar el medio por el cual desea recibir información,
                    ya que, en caso de no contar con esta especificación de su
                    parte, Mell Fashion Boutique, establecerá libremente el
                    canal que considere pertinente para enviarle información.
                  </p>
                  <p>
                    Este aviso de privacidad podrá ser modificado, dichas
                    modificaciones le serán oportunamente informadas a través de
                    correo electrónico, teléfono, o cualquier otro medio de
                    comunicación que Mell Fashion Boutique, determine para tal
                    efecto.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Aviso;
