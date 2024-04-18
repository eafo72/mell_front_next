import Link from "next/link";

//import clienteAxios from "../../config/axios";

const Terminos = async () => {
  /*
  const getTerminos = async () => {
    try {
      const res = await clienteAxios.get(
        `/empresa/single/658c57daea3c61d484acf6fb`
      );
      //console.log(res.data)
      return res.data.single.terminos;
    } catch (error) {
      console.log(error);
    }
  };

  const terminos = await getTerminos();
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
                    <li>Términos y Condiciones</li>
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
                  <h3>GENERALIDADES</h3>

                  <p>
                    Esta página web es propiedad y está operado por Mell Fashion
                    Boutique. Estos Términos establecen los términos y
                    condiciones bajo los cuales tu puedes usar nuestra página
                    web y comprar los productos ofrecidos por nosotros. Al
                    acceder o usar la página web Mell Fashion Boutique, usted
                    aprueba que ha leído, entendido y aceptado estar sujeto a
                    estos Términos.
                  </p>

                  <p>
                    Podemos hacer actualizaciones a estos Términos y Condiciones
                    cuantas veces sea necesario por cuestiones legales o
                    reglamentarias o para permitir el óptimo funcionamiento del
                    Sitio Web de Mell Fashion Boutique. En caso de no estar de
                    acuerdo con estos nuevos Términos y Condiciones, deberás
                    suspender el uso de nuestro Sitio Web. Si después de la
                    fecha en que los cambios entren en vigor sigues utilizando
                    el Sitio Web de Mell Fashion Boutique, daremos por sentada
                    tu aceptación y obligación a estos nuevos Términos y
                    Condiciones.
                  </p>

                  <h3>DERECHOS DE PROPIEDAD</h3>

                  <p>
                    El Servicio y todos los materiales incluidos o transferidos,
                    incluyendo, sin limitación, software, imágenes, fotografías
                    de productos, texto, gráficos, logotipos, marcas
                    registradas, marcas de servicio, derechos de autor,
                    fotografías, audio, videos, música y todos los Derechos de
                    Propiedad Intelectual relacionados con ellos, son de
                    propiedad exclusiva de Mell Fashion Boutique. Salvo que se
                    indique explícitamente en este documento, no se considerará
                    que nada en estos Términos crea una licencia en o bajo
                    ninguno de dichos Derechos de Propiedad Intelectual, y tu
                    aceptas no vender, licenciar, alquilar, modificar,
                    distribuir, copiar, reproducir, transmitir, exhibir
                    públicamente, realizar públicamente, publicar, adaptar,
                    editar o crear trabajos derivados de los mismos.
                  </p>

                  <h3>PRIVACIDAD</h3>

                  <p>
                    Trataremos toda su información de forma confidencial y
                    solamente la utilizaremos de acuerdo con nuestra Política de
                    privacidad. Cuando usted compre en el e-commerce de Mell
                    Fashion Boutique, le solicitaremos que incluya sus datos
                    personales para poder identificarle, tales como su nombre,
                    dirección de correo electrónico, dirección de facturación,
                    dirección de entrega, tarjeta de crédito u otra información
                    de pago. Confirmamos que guardaremos esta información de
                    conformidad de acuerdo a lo Previsto en la Ley Federal de
                    Protección de Datos Personales.
                  </p>

                  <h3>COMPRA DE PRODUCTOS</h3>

                  <p>
                    Si usted compra cualquier producto ofertado en el e-commerce
                    de Mell Fashion Boutique, usted representa y garantiza que
                    tiene 18 años de edad o más. Se obliga a pagar la totalidad
                    de los precios de cualquier compra que haga, ya sea con
                    tarjeta de crédito/débito concurrente con su orden en línea
                    o por otro medio de pago aceptable para Mell Fashion
                    Boutique, Usted se obliga a pagar todos los impuestos
                    aplicables. Si el pago no es recibido por nosotros de parte
                    del emisor de su tarjeta de crédito o débito o de sus
                    agentes, usted se obliga a pagar todas las cantidades
                    debidas al momento de la reclamación por nuestra parte.
                    Algunos productos que usted compra a través de nuestro
                    e-commerce pueden estar sujetos a términos y condiciones
                    adicionales que le serán presentados al momento de dicha
                    compra.
                  </p>

                  <p>
                    En ocasiones la disponibilidad y existencia de nuestros
                    productos podrán variar sin previo aviso o sin que se vea
                    reflejado en el sitio web de forma instantánea, por lo que
                    nos reservamos el derecho de negarle la venta de dicho
                    producto. En caso de que sucediera lo anteriormente
                    mencionado, se le hará llegar un correo electrónico en el
                    que se le informe que su compra no ha podido ser concluida
                    debido a la falta de inventario o, en su defecto, se le
                    notificará sobre el tiempo previsto de entrega, el cual, en
                    este caso, será extendido.
                  </p>

                  <h3>PRECIOS</h3>

                  <p>
                    Los precios establecidos en los productos se encuentran
                    dados en moneda nacional mexicana (MXN) y ya incluyen IVA.
                    En caso de que el producto que desea comprar no tenga
                    precio, deberá seleccionar la opción “COTIZAR” y dejar los
                    datos solicitados en el formulario, uno de nuestros asesores
                    se contará con usted y le brindará una cotización de los
                    productos deseados.
                  </p>

                  <p>
                    Mell Fashion Boutique se reserva el derecho a realizar
                    cualquier ajuste y/o modificación en sus precios cuando se
                    presenten errores evidentes involuntarios, así como en
                    aquellas situaciones en las que no se cuente con stock y el
                    fabricante notifique un cambio en sus precios. Todo aquel
                    producto no contenido dentro del catálogo oficial, no
                    contará con un precio fijo y deberá ser cotizado cada vez
                    que sea solicitado por el cliente.
                  </p>

                  <h3>ENTREGAS</h3>
                  <p>
                    El plazo establecido de la entrega de nuestros productos
                    (siempre y cuando se encuentren disponibles en almacén) es
                    de 3 a 25 días hábiles después de haberse confirmado el
                    pedido. No nos hacemos responsables por retrasos ocasionados
                    por la empresa transportista seleccionada para la entrega de
                    dichos productos. Todas las entregas realizadas en la Ciudad
                    de México no tendrán costo de envío, para el interior de la
                    república, el cliente deberá pagar el costo de envío.
                  </p>

                  <h3>DEVOLUCIONES</h3>

                  <p>
                    Para que pueda aplicar la presente política de cambio o
                    devolución, el producto a devolver deberá estar en las
                    mismas condiciones que al momento de la compra, es decir,
                    sin mostrar alteración o daño e incluir todas sus partes,
                    accesorios, manuales, garantías y en su empaque original. El
                    cliente tiene un tiempo de 7 (siete) días hábiles a partir
                    de haber efectuado la compra para solicitar una devolución.
                    En caso de haber terminado este periodo, el trámite no se
                    considerará válido.
                  </p>

                  <h3>PROMOCIONES</h3>

                  <p>
                    Todas nuestras ofertas y promociones están sujetas a la
                    vigencia especificada en la promoción o hasta agotar
                    existencias. Las ofertas y promociones no son acumulables.
                    Las ofertas y promociones no son aplicables a LICITACIONES y
                    ESTUDIOS DE MERCADO.
                  </p>

                  <h3>LEY APLICABLE</h3>
                  <p>
                    Estos Términos y Condiciones estarán sujetos a las leyes de
                    los Estados Unidos Mexicanos.
                  </p>

                  <p>
                    Trataremos de resolver cualquier desacuerdo rápida y
                    eficientemente. Si no estuvieras conforme con la manera en
                    que tratemos cualquier desacuerdo y quisieras interponer
                    acciones legales, deberás hacerlo en la Ciudad de México.
                  </p>

                  <h3>INFORMACIÓN DE CONTACTO</h3>
                  <p>
                    Mell Fashion Boutique no será responsable por cualquier
                    incumplimiento de estos Términos y Condiciones, causado por
                    circunstancias fuera de su razonable control. Para Cualquier
                    duda o comentario, puede ponerse en contacto con nosotros a
                    nuestros números telefónicos +52 (55) 19914185, a través del
                    correo electrónico contacto@mellfashionboutique.com
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

export default Terminos;
