import React from 'react'

import dendi from "../assets/Gamepad-Cart-Small.png"
import laptop from "../assets/Monitor-Cart-Small.png"
import cart1 from "../assets/Bkash.png"
import cart2 from "../assets/Visa.png"
import cart3 from "../assets/Mastercard.png"
import cart4 from "../assets/Nagad.png"
import { useNavigate } from 'react-router-dom'


const Chekout = () => {
  const navigate=useNavigate()
  return (
    <div>
      <div className="min-h-screen bg-gray-50 py-8 px-4">
        <div className="max-w-7xl mx-auto">

          <p onClick={()=> navigate("/products")} className="text-sm text-gray-600 mb-8">
             Product / View Cart / <span className="font-semibold text-black">Checkout</span>
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div>
              <h2 className="text-2xl font-semibold mb-8">Billing Details</h2>

              <form className="space-y-6">
                <div className="grid grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">First name</label>
                    <input type="text" className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-transparent" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Last name</label>
                    <input type="text" className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Street address</label>
                  <input type="text" placeholder="House number and street name" className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500" />
                </div>

                <div>
                  <input type="text" placeholder="Apartment, floor, etc. (optional)" className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-red-500 focus:border-transparent" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Town/City</label>
                  <input type="text" className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone number</label>
                  <input type="tel" className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email address</label>
                  <input type="email" className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500" />
                </div>

                <div className="flex items-center gap-3 mt-8">
                  <input type="checkbox" id="save" className="w-5 h-5 text-red-500 rounded focus:ring-red-500" />
                  <label htmlFor="save" className="text-sm text-gray-700">
                    Save this information for faster check-out next time
                  </label>
                </div>
              </form>
            </div>

            <div className="space-y-8">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <img src={dendi} alt="LCD Monitor" className="w-14 h-14 rounded" />
                  <span className="font-medium">LCD Monitor</span>
                </div>
                <span className="text-gray-700">$650</span>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <img src={laptop} alt="Gamepad" className="w-14 h-14 rounded" />
                  <span className="font-medium">H1 Gamepad</span>
                </div>
                <span className="text-gray-700">$1100</span>
              </div>

              <div className="border-t pt-6 space-y-4">
                <div className="flex justify-between">
                  <span>Subtotal:</span>
                  <span>$1750</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping:</span>
                  <span>Free</span>
                </div>
                <div className="flex justify-between font-semibold text-lg">
                  <span>Total:</span>
                  <span>$1750</span>
                </div>
              </div>



              <div className="space-y-4">
                <label className="flex items-center gap-4 cursor-pointer">
                  <input type="radio" name="payment" className="w-5 h-5 text-red-500" defaultChecked />
                  <span>Bank</span>
                  <div className="flex gap-2 ml-auto">
                    <img src={cart2} alt="visa" />
                    <img src={cart3} alt="mastercard" />
                    <img src={cart1} alt="amex" />
                  </div>
                </label>

                <label className="flex items-center gap-4 cursor-pointer">
                  <input type="radio" name="payment" className="w-5 h-5 text-red-500" />
                  <span>Cash on delivery</span>
                </label>
              </div>

              <div className="flex gap-3">
                <input
                  type="text"
                  placeholder="Coupon Code"
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500"
                />
                <button className="px-8 py-3 bg-red-500 text-white rounded-md hover:bg-red-600 transition">
                  Apply
                </button>
              </div>

              <button className="w-full py-4 bg-red-500 text-white text-lg font-medium rounded-md hover:bg-red-600 transition">
                Place Order
              </button>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Chekout
