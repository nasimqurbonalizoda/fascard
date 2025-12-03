import React from 'react'
import "../App.css"
import dendi from "../assets/Frame 611.png"
import iphone from "../assets/hero_endframe__cvklg0xk3w6e_large 2.png"
import apply from "../assets/1200px-Apple_gray_logo 1.png"
import klaviature from "../assets/Frame 612.png"
import monitor from "../assets/Frame 613.png"
import stul from "../assets/Frame 614.png"
import { FaHeart, FaShoppingCart, FaEye, FaArrowLeft, FaArrowRight } from 'react-icons/fa';
const Homes = () => {
  return (
        <div className="min-h-screen bg-gray-50">
    
          <div className="max-w-7xl mx-auto px-4 pt-10 flex flex-col lg:flex-row gap-8">
    
            <aside className="hidden lg:block w-64">
              <ul className="space-y-5 text-gray-700 font-medium text-[15px]">
                <li className="flex justify-between items-center hover:text-red-500 cursor-pointer">
                  <span>Woman’s Fashion</span><span>›</span>
                </li>
                <li className="flex justify-between items-center hover:text-red-500 cursor-pointer">
                  <span>Men’s Fashion</span><span>›</span>
                </li>
                <li className="hover:text-red-500 cursor-pointer">Electronics</li>
                <li className="hover:text-red-500 cursor-pointer">Home & Lifestyle</li>
                <li className="hover:text-red-500 cursor-pointer">Medicine</li>
                <li className="hover:text-red-500 cursor-pointer">Sports & Outdoor</li>
                <li className="hover:text-red-500 cursor-pointer">Baby’s & Toys</li>
                <li className="hover:text-red-500 cursor-pointer">Groceries & Pets</li>
                <li className="hover:text-red-500 cursor-pointer">Health & Beauty</li>
              </ul>
            </aside>
    
            <div className="flex-1">
    
              <div className="bg-black rounded-lg overflow-hidden relative mb-10">
                <div className="flex flex-col md:flex-row items-center justify-between text-white p-8 md:p-12">
                  <div className="max-w-md z-10">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12  rounded-full flex items-center justify-center">
                        <span className="text-black text-3xl font-bold"><img src={apply} alt="" /></span>
                      </div>
                      <p className="text-lg">iPhone 14 Series</p>
                    </div>
                    <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
                      Up to 10% <br /> off Voucher
                    </h1>
                    <button className="text-lg underline flex items-center gap-2 hover:gap-4 transition-all">
                      Shop Now <span className="text-2xl">→</span>
                    </button>
                  </div>
                  <img src={iphone}className="w-72 md:w-96 mt-8 md:mt-0 object-contain"/>
                </div>
                <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
                  <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
                  <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
                  <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
                </div>
              </div>
    
              <div>
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 gap-6">
                  <div>
                    <div className="flex items-center gap-4">
                      <div className="w-5 h-10 bg-red-500 rounded"></div>
                      <span className="text-red-500 font-semibold text-lg">Today's</span>
                    </div>
                    <h2 className="text-4xl font-bold mt-3">Flash Sales</h2>
                  </div>
    
                  <div className="flex items-center gap-4 text-3xl font-bold">
                    <div className="text-center"><span className="text-xs block text-gray-500">Days</span>03</div>
                    <span className="text-red-500">:</span>
                    <div className="text-center"><span className="text-xs block text-gray-500">Hours</span>23</div>
                    <span className="text-red-500">:</span>
                    <div className="text-center"><span className="text-xs block text-gray-500">Minutes</span>19</div>
                    <span className="text-red-500">:</span>
                    <div className="text-center"><span className="text-xs block text-gray-500">Seconds</span>56</div>
                  </div>
    
                  <div className="flex gap-3">
                    <button className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200">
                      <FaArrowLeft className="text-gray-600" />
                    </button>
                    <button className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200">
                      <FaArrowRight className="text-gray-600" />
                    </button>
                  </div>
                </div>
    
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
    
                  <div className="bg-white rounded-lg overflow-hidden group relative hover:shadow-2xl transition-shadow">
                    <div className="absolute top-3 left-3 bg-red-500 text-white px-3 py-1 text-xs font-bold rounded z-10">
                      -40%
                    </div>
    
                    <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition z-10">
                      <button className="w-9 h-9 bg-white rounded-full shadow flex items-center justify-center hover:bg-gray-100">
                        <FaHeart className="text-gray-700" />
                      </button>
                      <button className="w-9 h-9 bg-white rounded-full shadow flex items-center justify-center hover:bg-gray-100">
                        <FaEye className="text-gray-700" />
                      </button>
                    </div>
    
                    <div className="h-48 bg-gray-50 flex items-center justify-center p-4">
                      <img 
                        src={dendi} 
                        alt="Gamepad" 
                        className="max-h-full max-w-full object-contain"
                      />
                    </div>
    
                    <div className="absolute inset-x-0 bottom-0 bg-black text-white text-center py-3 opacity-0 group-hover:opacity-100 transition font-medium">
                      Add To Cart
                    </div>
    
                    <div className="p-4">
                      <h3 className="font-medium text-sm line-clamp-2">HAVIT HV-G92 Gamepad</h3>
                      <div className="flex items-center gap-3 mt-2">
                        <span className="text-red-500 font-bold">$120</span>
                        <span className="text-gray-400 line-through text-sm">$160</span>
                      </div>
                      <div className="flex items-center gap-2 mt-2">
                        <span className="text-yellow-400 text-lg">★★★★★</span>
                        <span className="text-gray-500 text-sm">(88)</span>
                      </div>
                    </div>
                  </div>
    
                  <div className="bg-white rounded-lg overflow-hidden group relative hover:shadow-2xl transition-shadow">
                    <div className="absolute top-3 left-3 bg-red-500 text-white px-3 py-1 text-xs font-bold rounded z-10">-35%</div>
                    <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition z-10">
                      <button className="w-9 h-9 bg-white rounded-full shadow flex items-center justify-center hover:bg-gray-100">
                        <FaHeart className="text-gray-700" />
                      </button>
                      <button className="w-9 h-9 bg-white rounded-full shadow flex items-center justify-center hover:bg-gray-100">
                        <FaEye className="text-gray-700" />
                      </button>
                    </div>
                    <div className="h-48 bg-gray-50 flex items-center justify-center p-4">
                      <img src={klaviature} alt="Keyboard" className="max-h-full max-w-full object-contain" />
                    </div>
                    <div className="absolute inset-x-0 bottom-0 bg-black text-white text-center py-3 opacity-0 group-hover:opacity-100 transition font-medium">
                      Add To Cart
                    </div>
                    <div className="p-4">
                      <h3 className="font-medium text-sm line-clamp-2">AK-900 Wired Keyboard</h3>
                      <div className="flex items-center gap-3 mt-2">
                        <span className="text-red-500 font-bold">$960</span>
                        <span className="text-gray-400 line-through text-sm">$1160</span>
                      </div>
                      <div className="flex items-center gap-2 mt-2">
                        <span className="text-yellow-400 text-lg">★★★★★</span>
                        <span className="text-gray-500 text-sm">(75)</span>
                      </div>
                    </div>
                  </div>
    
                  <div className="bg-white rounded-lg overflow-hidden group relative hover:shadow-2xl transition-shadow">
                    <div className="absolute top-3 left-3 bg-red-500 text-white px-3 py-1 text-xs font-bold rounded z-10">-35%</div>
                    <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition z-10">
                      <button className="w-9 h-9 bg-white rounded-full shadow flex items-center justify-center hover:bg-gray-100">
                        <FaHeart className="text-gray-700" />
                      </button>
                      <button className="w-9 h-9 bg-white rounded-full shadow flex items-center justify-center hover:bg-gray-100">
                        <FaEye className="text-gray-700" />
                      </button>
                    </div>
                    <div className="h-48 bg-gray-50 flex items-center justify-center p-4">
                      <img src={monitor} alt="Keyboard" className="max-h-full max-w-full object-contain" />
                    </div>
                    <div className="absolute inset-x-0 bottom-0 bg-black text-white text-center py-3 opacity-0 group-hover:opacity-100 transition font-medium">
                      Add To Cart
                    </div>
                    <div className="p-4">
                      <h3 className="font-medium text-sm line-clamp-2">AK-900 Wired Keyboard</h3>
                      <div className="flex items-center gap-3 mt-2">
                        <span className="text-red-500 font-bold">$960</span>
                        <span className="text-gray-400 line-through text-sm">$1160</span>
                      </div>
                      <div className="flex items-center gap-2 mt-2">
                        <span className="text-yellow-400 text-lg">★★★★★</span>
                        <span className="text-gray-500 text-sm">(75)</span>
                      </div>
                    </div>
                  </div>
    
                  <div className="bg-white rounded-lg overflow-hidden group relative hover:shadow-2xl transition-shadow">
                    <div className="absolute top-3 left-3 bg-red-500 text-white px-3 py-1 text-xs font-bold rounded z-10">-35%</div>
                    <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition z-10">
                      <button className="w-9 h-9 bg-white rounded-full shadow flex items-center justify-center hover:bg-gray-100">
                        <FaHeart className="text-gray-700" />
                      </button>
                      <button className="w-9 h-9 bg-white rounded-full shadow flex items-center justify-center hover:bg-gray-100">
                        <FaEye className="text-gray-700" />
                      </button>
                    </div>
                    <div className="h-48 bg-gray-50 flex items-center justify-center p-4">
                      <img src={stul} alt="Keyboard" className="max-h-full max-w-full object-contain" />
                    </div>
                    <div className="absolute inset-x-0 bottom-0 bg-black text-white text-center py-3 opacity-0 group-hover:opacity-100 transition font-medium">
                      Add To Cart
                    </div>
                    <div className="p-4">
                      <h3 className="font-medium text-sm line-clamp-2">AK-900 Wired Keyboard</h3>
                      <div className="flex items-center gap-3 mt-2">
                        <span className="text-red-500 font-bold">$960</span>
                        <span className="text-gray-400 line-through text-sm">$1160</span>
                      </div>
                      <div className="flex items-center gap-2 mt-2">
                        <span className="text-yellow-400 text-lg">★★★★★</span>
                        <span className="text-gray-500 text-sm">(75)</span>
                      </div>
                    </div>
                  </div>
    
                </div>
    
                <div className="text-center mt-12">
                  <button className="bg-red-500 text-white px-12 py-4 rounded hover:bg-red-600 transition font-medium text-lg">
                    View All Products
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
  )
}

export default Homes
