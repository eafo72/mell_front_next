"use client";

import Link from 'next/link'

import { useCartStore } from '../store/cart';


export const NavbarCartButton = () => {

  const { cart } = useCartStore() //debe de ir aqui arriba por ser un hook y evitar errores

  return (
    <Link className="cart_btn" href="/cart">
        <i className="far fa-shopping-bag"></i>
        <small className="cart_counter">{cart.length}</small>
    </Link>
  )
}





