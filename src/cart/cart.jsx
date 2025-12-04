
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { deleted, deleteded, getCart, minus, plus } from '../reducers/cart'

const Cart = () => {
  const navigate = useNavigate()
  const cart = useSelector((state) => state.cartSlice.cart)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getCart())
  }, [dispatch])

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <p onClick={() => navigate("/products")} className="text-sm text-gray-600 mb-8 cursor-pointer">
          Home / <span className="font-semibold">Cart</span>
        </p>

        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="grid grid-cols-12 gap-4 px-8 py-5 bg-gray-50 text-sm font-medium text-gray-700">
            <div className="col-span-5">Product</div>
            <div className="col-span-2 text-center">Price</div>
            <div className="col-span-3 text-center">Quantity</div>
            <div className="col-span-2 text-right">Subtotal</div>
          </div>

          {cart?.[0]?.productsInCart?.map((elem) => (
            <div key={elem.id} className="grid grid-cols-12 gap-4 px-8 py-6 border-b items-center">
              <div className="col-span-5 flex items-center gap-4">
                <img 
                  src={`http://37.27.29.18:8002/images/${elem?.product?.image}`} 
                  alt={elem?.product?.productName}
                  className="w-14 h-14 rounded object-cover"
                />
                <span className="font-medium">{elem?.product?.productName}</span>
              </div>
              <div className="col-span-2 text-center text-gray-600">
                ${elem?.product?.price}
              </div>
              <div className="col-span-3 flex justify-center">
                <div className="flex items-center border border-gray-300 rounded-md w-24">
                  <button 
                    onClick={() => dispatch(minus(elem.id))} 
                    className="px-3 py-2 text-gray-600 hover:bg-gray-100"
                  >
                    -
                  </button>
                  <span className="px-4 py-2 w-12 text-center font-medium">
                    {elem.quantity}
                  </span>
                  <button 
                    onClick={() => dispatch(plus(elem.id))} 
                    className="px-3 py-2 text-gray-600 hover:bg-gray-100"
                  >
                    +
                  </button>
                </div>
              </div>
              <div className="col-span-2 text-right font-semibold">
                ${elem?.product?.price * elem.quantity}
              </div>
              <button 
                onClick={() => dispatch(deleted(elem.id))}
                className="justify-self-end text-red-500 hover:text-red-700 text-2xl"
              >
                ×
              </button>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 my-10">
          <button className="px-8 py-3 border border-gray-300 rounded-md hover:bg-gray-50 transition">
            Return To Shop
          </button>

          <div className="flex gap-4">
            <button className="px-8 py-3 border border-gray-300 rounded-md hover:bg-gray-50">
              Update Cart
            </button>
            <button 
              onClick={() => dispatch(deleteded())} 
              className="px-8 py-3 border border-red-500 text-red-500 rounded-md hover:bg-red-50"
            >
              Remove all
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-12">
          <div className="bg-white rounded-lg border border-gray-300 p-8">
            <h3 className="text-xl font-semibold mb-6">Cart Total</h3>
            <div className="space-y-4 pb-6 border-b">
              <div className="flex justify-between">
                <span>Subtotal:</span>
                <span>
                  ${cart?.[0]?.productsInCart?.reduce((acc, item) => 
                    acc + item.product.price * item.quantity, 0) || 0}
                </span>
              </div>
              <div className="flex justify-between">
                <span>Shipping:</span>
                <span>Free</span>
              </div>
              <div className="flex justify-between text-lg font-semibold">
                <span>Total:</span>
                <span>
                  ${cart?.[0]?.productsInCart?.reduce((acc, item) => 
                    acc + item.product.price * item.quantity, 0) || 0}
                </span>
              </div>
            </div>
            <button className="w-full mt-6 py-4 bg-red-500 text-white text-lg font-medium rounded-md hover:bg-red-600 transition">
              Proceed to checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart