import React from 'react'
import { Offcanvas, Stack } from 'react-bootstrap'
import { useShoppingCart } from '../context/ShoppingCartContext'
import { CartItem } from './CartItem'

interface IShoppingCartProviderProps{
  isOpen:boolean
}

export const ShoppingCart = ({isOpen}:IShoppingCartProviderProps) => {
  const {closeCart, cartItems} = useShoppingCart()
  
  return (
    <Offcanvas show={isOpen} onHide={closeCart} placement="end">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Cart</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Stack gap={3}>
          {cartItems.length === 0 ? <p>No items in cart!</p> : 
            cartItems.map(item => <CartItem key={item.id} {...item} />)
          }
          
        </Stack>
      </Offcanvas.Body>
    </Offcanvas>
  );
};
