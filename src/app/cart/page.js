
import { CartForm } from "./cart_form";

const Cart = async () => {

       
  return (
    <>
    
    <main>
      <section
        className="breadcrumb_section"
        style={{  backgroundColor:"#f7e6d6" }}
      >
        <div className="container">
          <div className="row">
            <div className="col col-lg-5">
              <div className="breadcrumb_content">
                <h1 className="page_title">Carrito de compras</h1>
                <ul className="breadcrumb_nav ul_li_center">
                  <li>
                    <a className="home_btn" href="/">
                      Inicio
                    </a>
                  </li>
                  <li>Carrito de compras</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CartForm/>



    </main>
    </>
  );
};

export default Cart;
