import React from 'react'
import den from "../assets/image 63.png"
import mayden from "../assets/image 58.png"
import surhak from "../assets/Frame 611 (1).png"
import { useParams } from 'react-router-dom'
const Detail = () => {
  return (
    <div className="max-w-7xl mx-auto p-6 font-sans bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">


        <div className="flex flex-col-reverse lg:flex-row gap-6">
        
          <div className="flex lg:flex-col gap-4">
            <div className="w-20 h-20 bg-gray-100 rounded-lg border-2 border-blue-500">
              <img src={mayden} className="w-full h-full object-contain p-2" />
            </div>
            <div className="w-20 h-20 bg-gray-100 rounded-lg">
              <img src={mayden} className="w-full h-full object-contain p-2" />
            </div>
            <div className="w-20 h-20 bg-gray-100 rounded-lg">
              <img src={mayden} className="w-full h-full object-contain p-2" />
            </div>
            <div className="w-20 h-20 bg-gray-100 rounded-lg">
              <img src={mayden} className="w-full h-full object-contain p-2" />
            </div>
          </div>
          
          <div className="relative bg-gray-50 rounded-2xl p-12 group">
            <img
              src={den}
              alt="Havic HV-G-92 Gamepad"
              className="max-w-full max-h-96 object-contain"
            />
            <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded text-sm font-bold">
              -40%
            </div>
            <div className="absolute top-4 right-4 flex flex-col gap-3 opacity-0 group-hover:opacity-100 transition">
              <button className="bg-white p-3 rounded-full shadow-lg hover:scale-110">
               
               
              </button>
              <button className="bg-white p-3 rounded-full shadow-lg hover:scale-110">
                
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center space-y-6">
          <h1 className="text-4xl font-bold">Havic HV-G-92 Gamepad</h1>

          <div className="flex items-center gap-4 text-lg">
            <div className="flex text-yellow-500 text-xl">★★★★★</div>
            <span className="text-gray-500">(150 Reviews)</span>
            <span className="text-green-600 font-semibold">In Stock</span>
          </div>

          <div className="text-3xl font-bold">$192.00</div>

          <p className="text-gray-600 leading-relaxed">
            PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive.
          </p>

          <div className="border-t border-gray-300 pt-6 space-y-8">
            
            <div>
              <span className="text-gray-600 mr-6">Colours:</span>
              <button className="w-8 h-8 bg-gray-800 rounded-full border-4 border-blue-500"></button>
              <button className="w-8 h-8 bg-red-600 rounded-full ml-3"></button>
            </div>
            
            <div>
              <span className="text-gray-600 mr-6">Size:</span>
              <button className="px-4 py-2 border border-gray-300 rounded hover:bg-red-500 hover:text-white">XS</button>
              <button className="px-4 py-2 border border-gray-300 rounded hover:bg-red-500 hover:text-white">S</button>
              <button className="px-4 py-2 border border-gray-300 rounded hover:bg-red-500 hover:text-white">M</button>
              <button className="px-4 py-2 border border-gray-300 rounded hover:bg-red-500 hover:text-white">L</button>
              <button className="px-4 py-2 border border-gray-300 rounded hover:bg-red-500 hover:text-white">XL</button>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex border border-gray-300 rounded overflow-hidden">
                <button className="px-5 py-3 hover:bg-red-500  hover:text-white">-</button>
                <span className="px-8 py-3 font-semibold">2</span>
                <button className="px-5 py-3 hover:bg-red-500 hover:text-white">+</button>
              </div>

              <button className="bg-red-500 text-white px-12 py-4 rounded font-semibold hover:bg-red-600 transition">
                Buy Now
              </button>

              <button className="p-4 border border-gray-300 rounded hover:bg-gray-50">
               <input type="checkbox" name="" id=""  className="p-4 border border-gray-300 rounded hover:bg-gray-50"/>
              </button>
            </div>

            <div className="border border-gray-300 rounded-lg overflow-hidden mt-10">
              <div className="flex gap-5 p-6 border-b border-gray-300">
               
                <div>
                  <div className="font-semibold">Free Delivery</div>
                  <div className="text-sm underline">Enter your postal code for Delivery Availability</div>
                </div>
              </div>
              <div className="flex gap-5 p-6">
                
                <div>
                  <div className="font-semibold">Return Delivery</div>
                  <div className="text-sm">Free 30 Days Delivery Returns. <u>Details</u></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="flex items-center gap-4 mb-8">
          <div className="w-5 h-10 bg-red-500 rounded"></div>
          <h2 className="text-2xl font-bold">Related Item</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          
          <div className="group cursor-pointer">
            <div className="relative bg-gray-50 p-8 rounded-t-lg">
              <div className="absolute top-3 left-3 bg-red-500 text-white px-2 py-1 text-sm rounded">-40%</div>
              <img src={surhak} className="w-full h-48 object-contain" />
              <button className="absolute bottom-0 left-0 right-0 bg-black text-white py-3 translate-y-full group-hover:translate-y-0 transition">
                Add To Cart
              </button>
            </div>
            <div className="bg-white p-4">
              <h3 className="font-medium">HAVIT HV-G92 Gamepad</h3>
              <div className="flex gap-3 my-2">
                <span className="text-red-500 font-bold">$120</span>
                <span className="text-gray-400 line-through">$160</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-yellow-500">★★★★★</span>
                <span className="text-gray-500 text-sm">(88)</span>
              </div>
            </div>
          </div>


          <div className="group cursor-pointer">
            <div className="relative bg-gray-50 p-8 rounded-t-lg">
              <div className="absolute top-3 left-3 bg-red-500 text-white px-2 py-1 text-sm rounded">-40%</div>
              <img src={surhak} className="w-full h-48 object-contain" />
              <button className="absolute bottom-0 left-0 right-0 bg-black text-white py-3 translate-y-full group-hover:translate-y-0 transition">
                Add To Cart
              </button>
            </div>
            <div className="bg-white p-4">
              <h3 className="font-medium">HAVIT HV-G92 Gamepad</h3>
              <div className="flex gap-3 my-2">
                <span className="text-red-500 font-bold">$120</span>
                <span className="text-gray-400 line-through">$160</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-yellow-500">★★★★★</span>
                <span className="text-gray-500 text-sm">(88)</span>
              </div>
            </div>
          </div>

          <div className="group cursor-pointer">
            <div className="relative bg-gray-50 p-8 rounded-t-lg">
              <div className="absolute top-3 left-3 bg-red-500 text-white px-2 py-1 text-sm rounded">-40%</div>
              <img src={surhak} className="w-full h-48 object-contain" />
              <button className="absolute bottom-0 left-0 right-0 bg-black text-white py-3 translate-y-full group-hover:translate-y-0 transition">
                Add To Cart
              </button>
            </div>
            <div className="bg-white p-4">
              <h3 className="font-medium">HAVIT HV-G92 Gamepad</h3>
              <div className="flex gap-3 my-2">
                <span className="text-red-500 font-bold">$120</span>
                <span className="text-gray-400 line-through">$160</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-yellow-500">★★★★★</span>
                <span className="text-gray-500 text-sm">(88)</span>
              </div>
            </div>
          </div>

          <div className="group cursor-pointer">
            <div className="relative bg-gray-50 p-8 rounded-t-lg">
              <div className="absolute top-3 left-3 bg-red-500 text-white px-2 py-1 text-sm rounded">-40%</div>
              <img src={surhak} className="w-full h-48 object-contain" />
              <button className="absolute bottom-0 left-0 right-0 bg-black text-white py-3 translate-y-full group-hover:translate-y-0 transition">
                Add To Cart
              </button>
            </div>
            <div className="bg-white p-4">
              <h3 className="font-medium">HAVIT HV-G92 Gamepad</h3>
              <div className="flex gap-3 my-2">
                <span className="text-red-500 font-bold">$120</span>
                <span className="text-gray-400 line-through">$160</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-yellow-500">★★★★★</span>
                <span className="text-gray-500 text-sm">(88)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Detail




