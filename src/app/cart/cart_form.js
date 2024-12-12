"use client";

import React, { useState } from "react";

import { useRouter } from "next/navigation";

import clienteAxios from "../../config/axios";

import Select from "react-select";

import { toast } from 'sonner';

import { useCartStore } from '../../store/cart';

import { CardPayment } from '@mercadopago/sdk-react';

import { initMercadoPago } from '@mercadopago/sdk-react'
initMercadoPago('APP_USR-84f2c42a-e204-46f0-8dda-57e08f7579a9', {locale: 'es-MX'}); //'YOUR_PUBLIC_KEY')

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



export const CartForm = () => {
  const router = useRouter();

  const { cart, cart_subtotal, cart_descuento, cart_iva, cart_total } = useCartStore() //debe de ir aqui arriba por ser un hook y evitar errores

  const deleteCartItem = useCartStore((state) => state.remove_cart_item)
  const checkDiscountCode = useCartStore((state) => state.check_discount_code)
  const clearDiscountCode = useCartStore((state) => state.clear_discount_code)
  const clearCart = useCartStore((state) => state.clear_cart)

  const [datos_entrega_nombre, setDatosEntregaNombre] = useState();
  const [datos_entrega_direccion, setDatosEntregaDireccion] = useState();
  const [datos_entrega_correo, setDatosEntregaCorreo] = useState();
  const [datos_entrega_telefono, setDatosEntregaTelefono] = useState();
  const [agree, setAgree] = useState(false);

  const [formaEntrega, setFormaEntrega] = useState();

  const [costo_envio, setCostoEnvio] = useState(0);

  const [viewMPbutton, setViewMPbutton] = useState(false);
  const [viewContinuebutton, setViewContinuebutton] = useState(true);

  const allDeliveryTypes = [
    {"value":"Directo en Tienda", "label": "Directo en Tienda"},
    {"value":"Paquetería fuera de Cuernavaca", "label": "Paquetería fuera de Cuernavaca"},
    {"value":"Envío por Didi dentro de Morelos", "label": "Envío por Didi dentro de Morelos"},
    {"value":"Entrega directa Jiutepec, Jojutla, Cuernavaca", "label": "Entrega directa Jiutepec, Jojutla, Cuernavaca"},
  ];

  
  const mostrarMensaje = (mensaje) => {
    toast.error(mensaje);
  };

  const mostrarAviso = (mensaje) => {
    toast.success(mensaje);
  };

  const mostrarMPbutton = () => {
    //validamos campos
    if(formaEntrega === "" || formaEntrega === undefined) {
      mostrarMensaje("Debes seleccionar una forma de entrega"); 
    }else if(costo_envio === "" || costo_envio === undefined) {
      mostrarMensaje("Debes escribir el costo de envío");    
    }else if(datos_entrega_nombre === "" || datos_entrega_nombre === undefined) {
      mostrarMensaje("Debes escribir el nombre en datos de entrega");    
    }else if(formaEntrega.value != 'Directo en Tienda' && datos_entrega_direccion === "" || formaEntrega.value != 'Directo en Tienda' && datos_entrega_direccion === undefined) {
      mostrarMensaje("Debes escribir la direccion en datos de entrega");    
    }else if(datos_entrega_correo === "" || datos_entrega_correo === undefined) {
      mostrarMensaje("Debes escribir el correo en datos de entrega");    
    }else if(datos_entrega_telefono === "" || datos_entrega_telefono === undefined) {
      mostrarMensaje("Debes escribir el teléfono en datos de entrega");    
    }else if(agree === false) {
      mostrarMensaje("Debes aceptar los terminos y condiciones");    
    } else {
      setViewContinuebutton(false)
      setViewMPbutton(true)
    }  
  }

  const checkboxHandler = () => {
    // if agree === true, it will be set to false
    // if agree === false, it will be set to true
    setAgree(!agree);
    // Don't miss the exclamation mark
  }

  const remove = (index) => {
    deleteCartItem(index)
  }
    

  const findDiscount = async () => {
    const codigo = document.getElementById("codigo_descuento").value;

    if(codigo === ''){
      mostrarMensaje("Ingresa un código");
      return;
    }

    try {
      let res = await clienteAxios.get(`/codigo/validar/`+codigo);

      //console.log(res.data.single[0]);

      if(res.data.single.length > 0){

        mostrarAviso("Código encontrado " + res.data.single[0].porcentaje + "% de descuento");

        checkDiscountCode(res.data.single[0].porcentaje)
        

      }else{

        mostrarMensaje("Código no encontrado");

        clearDiscountCode()

      }  
                 
    } catch (error) {
      console.log(error);
    }

  };


  const sendData = () => {
                
        const createSell = async (dataForm) => {
         try {

            let res = await clienteAxios.post("/pedido/crear", dataForm);
            console.log(res);

            clearCart()
            
            setDatosEntregaNombre(null);
            setDatosEntregaDireccion(null);
            setDatosEntregaCorreo(null);
            setDatosEntregaTelefono(null);
            setFormaEntrega(null);

           //mostrarAviso("compra realizada");
           
           router.push(`/success/${res.data._id}`);

          } catch (error) {
            console.log(error);
            mostrarMensaje(error.response.data.msg);
          }
        };

        const datosVenta = { 
          tipo_venta:"Tienda online",
          subtotal:cart_subtotal,
          descuento:cart_descuento,
          iva:cart_iva,
          total:cart_total,
          descripcion:cart,
          usuario:"Cliente Web",
          entregar_a:datos_entrega_nombre,
          correo:datos_entrega_correo,
          direccion_entrega:datos_entrega_direccion,
          costo_envio:parseFloat(costo_envio),
          telefono:datos_entrega_telefono,
          estatus_pago:"Pagado",
          estatus_envio:"Pendiente",
          vendedor:"Tienda online",
          forma_entrega:formaEntrega.value,
          forma_pago:"Mercado Pago",
          num_parcialidades:1,
          parcialidades:null
        };

        console.log(datosVenta);

        createSell(datosVenta);
      
  };

 

  //funciones de mercado pago
  const onSubmit = async (formData) => {
    //console.log(formData);

       //vemos si hay existencias de todo
    try {
      let res = await clienteAxios.post("/pedido/checkStock", {
        tipo_venta: "Tienda online",
        subtotal: cart_subtotal,
        descuento: cart_descuento,
        iva: cart_iva,
        total: cart_total,
        descripcion: cart,
        usuario: "Cliente Web",
        entregar_a: datos_entrega_nombre,
        correo: datos_entrega_correo,
        direccion_entrega: datos_entrega_direccion,
        costo_envio: parseFloat(costo_envio),
        telefono: datos_entrega_telefono,
        estatus_pago: "Pagado",
        estatus_envio: "Pendiente",
        vendedor: "Tienda online",
        forma_entrega: formaEntrega.value,
        forma_pago: "Mercado Pago",
        num_parcialidades: 1,
        parcialidades: null,
      });

      console.log(res.data);

      if (res.data.disponible == true) {
        
       try {
          const res = await clienteAxios({
            method: "post",
            url: "/mercadopago/process_payment",
            data: JSON.stringify(formData),
            headers: {
              'Content-Type': 'application/json',
            },
          });

          console.log(res);

          //tipos de status
          //pending : El usuario no completo el proceso de pago todavía.
          //approved : El pago fue aprobado y acreditado.
          //authorized : El pago fue autorizado pero no capturado todavía.
          //in_process : El pago está en revisión.
          //in_mediation : El usuario inició una disputa.
          //rejected : El pago fue rechazado. El usuario podría reintentar el pago.
          //cancelled : El pago fue cancelado por una de las partes o el pago expiró.
          //refunded : El pago fue devuelto al usuario.
          //charged_back : Se ha realizado un contracargo en la tarjeta de crédito del comprador.


          //si no hubo error en el pago
          if(res.data.status === "approved"){
            sendData();
          }else{
            if(res.data.status === 'rejected'){
              mostrarMensaje("Lo sentimos tu pago fué rechazado, inténtalo nuevamente");
            }else if(res.data.status === 'pending'){
              mostrarMensaje("Lo sentimos, no se completó el proceso de pago todavía");
            }else if(res.data.status === 'authorized'){
            mostrarMensaje("Lo sentimos, el pago fué autorizado pero no capturado todavía");
            }else if(res.data.status === 'in_process'){
            mostrarMensaje("Lo sentimos, el pago está en revisión");
            }else if(res.data.status === 'cancelled'){
              mostrarMensaje("Lo sentimos, el pago fué cancelado por una de las partes o el pago expiró");
            }else if(res.data.status === 'refunded'){
              mostrarMensaje("Lo sentimos, el pago fué devuelto al usuario");
            }else{
              mostrarMensaje(res.data.status);
            }
          }  
      
     
        } catch (error) {
          console.log(error);
          mostrarMensaje(error);
        }
    
      } else {
        mostrarMensaje(
          "Lo sentimos, no hay stock suficiente para surtir este pedido"
        );
      }
    } catch (error) {
      console.log(error);
      mostrarMensaje(error.response.data.msg);
    }
    
  };
   
   const onError = async (error) => {
    // callback llamado para todos los casos de error de Brick
    console.log(error);
   };
   
   
   const onReady = async () => {
    
     // Callback llamado cuando Brick está listo.
     // Aquí puedes ocultar cargamentos de su sitio, por ejemplo.
    
   };


   const customStyles = {
    control: (base, state) => ({
      ...base,
      background: "white",
      textTransform:"none",
      paddingLeft:"10px",
      borderColor: state.isFocused ? "#c25885":"#cccccc",
      boxShadow: "0",
      "&:hover": {
        ...base,
        boxShadow: "0",
        borderColor: "#c25885 !important",
      }
    }),
    singleValue: (base, state) => ({
      ...base,
      color: "rgb(15 23 42 / var(--tw-text-opacity))",
    }),
    multiValueRemove: (base, state) => ({
      ...base,
      color: "red",
    }),
    option: (base, state) => {
      return {
        ...base,
        background: state.isSelected ? "#c25885" : state.isFocused ? "#c2588550": "transparent",
        color: state.isSelected ? "white" : "grey",
      };
    },
  };

  return (
    <>
    <section className="cart_section sec_space_large">
        <div className="container">
          <div className="cart_table_2">

            <div className="table-responsive">
            <table className="table">
              <tbody>

              {cart && cart.map((item,index) => {
                    return ( 
                                
                <tr key={index}>
                  <td>
                    <div className="cart_product">
                      <button type="button" className="remove_btn" onClick={() => remove(index)}>
                        <i className="fal fa-times"></i>
                      </button>
                      
                      <div className="item_image">
                        <img
                          src={item.foto_principal}
                          className="img-fluid"
                          alt={item.foto_principal}
                          unoptimized={true}
                        />
                      </div>
                      <div className="item_content">
                        <h4 className="item_title mb-0">
                          {/*
                          <a href="#!" onClick={() => goToDetails(item._id)}>The Comfy Lounge Chair</a>
                          */}  
                          {item.nombre_producto}
                        </h4>
                        <span className="item_code" style={{marginBottom:"0"}}>Código: {item.codigo}</span>
                        <span className="item_code" style={{marginBottom:"0"}}>Talla: {item.nombre_talla}</span>
                        <span className="item_code" style={{marginBottom:"0"}}>Color: {item.nombre_color}</span>
                      </div>
                    </div>
                  </td>
                  <td>
                    <span className="price_text">$ {item.precio}</span>
                  </td>
                  <td>
                    <div className="quantity_box">
                        <span><i className="fas fa-shopping-bag"></i></span>
                        <span>Cantidad:</span>
                        <span>{item.cantidad}</span>
                      </div>
                  </td>
                  </tr>
                 
                  )
              })}

              </tbody>
            </table>
            </div>  

          </div>

          <div className="row justify-content-lg-between">
            <div className="col col-lg-6">
              <div className="coupon_form_2">
                <div className="form_item mb-0">
                  <input type="text" className="coupon" placeholder="Código de descuento" id="codigo_descuento"/>
                  <button onClick={(e) => findDiscount()} className="btn btn_primary text-uppercase">
                    Aplicar
                  </button>
                </div>
              </div>
            </div>

            <div className="col col-lg-6">
              <div className="cart_pricing_table text-uppercase">
                <h3 className="table_title text-center">Total</h3>
                <ul className="ul_li_block clearfix">
                  <li style={{fontWeight: "800"}}>
                    <span>Subtotal</span> <span>$ {cart_subtotal.toFixed(2)}</span>
                  </li>
                  <li style={{fontWeight: "800"}}>
                    <span>Descuento</span> <span>$ {cart_descuento.toFixed(2)}</span>
                  </li>
                  <li style={{fontWeight: "800"}}>
                    <span>I.V.A.</span> <span>$ {cart_iva.toFixed(2)}</span>
                  </li>
                  <li style={{fontWeight: "800"}}>
                    <span>Total</span> <span>$ {cart_total.toFixed(2)}</span>
                  </li>

              
                
                  <li>

                  {viewContinuebutton === true ?
                  (<div className="contact3_wrap" style={{marginTop:"10px",border:"0"}}>

                    <div className="form_item">

                    {/*forma entrega*/}
                    <Select
                     instanceId={'formaEntrega'}
                     styles={customStyles}
                     placeholder="Seleccione una forma de entrega"
                     options={allDeliveryTypes}
                     onChange={setFormaEntrega}
                     value={formaEntrega}
                     isSearchable={false}
                    ></Select>

                   

                    {/*Entregar a:*/}
                    <input
                      onChange={(e) => setDatosEntregaNombre(e.target.value)}
                      placeholder="Entregar a:"
                      id="datos_entrega_nombre"
                      type="text"
                      style={{width:"100%",marginBottom:"8px",marginTop:"8px"}}
                      />

                      {/*Direccion de entrega*/}
                      <textarea
                      onChange={(e) => setDatosEntregaDireccion(e.target.value)}
                      placeholder="Dirección"
                      id="datos_entrega_direccion"
                      type="text"
                      style={{width:"100%"}}
                      />

                      <input
                      onChange={(e) => setDatosEntregaCorreo(e.target.value)}
                      placeholder="Correo"
                      id="datos_entrega_correo"
                      type="email"
                      style={{width:"100%",marginBottom:"8px",marginTop:"8px"}}
                      />

                      <input
                      onChange={(e) => setDatosEntregaTelefono(e.target.value)}
                      placeholder="Teléfono"
                      id="datos_entrega_telefono"
                      type="tel"
                      style={{width:"100%"}}
                      />

                    </div>

                      <input
                      onChange={checkboxHandler}
                      id="agree"
                      type="checkbox"
                      style={{marginTop:"30px"}}
                      /> 
                      <label style={{marginLeft:"10px",fontWeight: "800"}} htmlFor="agree"> Acepto los <a href="/terminos" target="_blank" style={{color:"#fb491d"}}>términos y condiciones</a></label>
                    

                  </div>
                  ):(<></>)
                  }
                  </li>
                  <li>
                  <div className="btn_wrap pt-0 text-center" style={{marginTop:"20px"}}>    

                         {cart && cart.length > 0 && viewContinuebutton === true ?
                          (
                          <button className="btn btn_primary text-uppercase" onClick={() => mostrarMPbutton()} >Continuar</button>
                          )
                          :(<></>)
                         }

                         {cart && cart.length > 0 && viewMPbutton === true ?
                          (<CardPayment
                          initialization={{amount:cart_total}}
                          onSubmit={onSubmit}
                          onReady={onReady}
                          onError={onError}
                          />
                         )
                         :(<></>)
                         }
                  </div>   
                  </li>

                  </ul>
                  
                
              </div>
            </div>
          </div>
        </div>
      </section>
      </>
  )
};


