import React from 'react'

import dhtar from "../assets/Side Image.png"
import mardak from "../assets/Frame 874.png"
import mardak1 from "../assets/Frame 875.png"
import mardak2 from "../assets/Frame 876.png"

const About = () => {
  return (
    <div>
      <div className="min-h-screen bg-gray-50">
        <div className="bg-white py-16">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
           
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h1>
              <p className="text-gray-600 leading-relaxed mb-4">
                Launched in 2015, Exclusive is South Asia’s premier online shopping marketplace
                with an active presence in Bangladesh. Supported by wide range of tailored marketing,
                data and service solutions, Exclusive has 10,500 sellers and 300 brands and serves
                3 million customers across the region.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Exclusive has more than 1 Million products to offer, growing at a very fast.
                Exclusive offers a diverse assortment in categories ranging from consumer.
              </p>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-pink-500 rounded-2xl transform rotate-6"></div>
              <img src={dhtar} alt="Happy customers shopping"
                className="relative z-10 rounded-2xl shadow-2xl w-full object-cover h-[550px]"/>
            </div>
          </div>
        </div>

        <div className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-gray-900 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-3xl">10.5k</span>
              </div>
              <p className="font-semibold">Sellers active our site</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-red-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-3xl">33k</span>
              </div>
              <p className="font-semibold">Monthly Product Sale</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gray-900 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-3xl">45.5k</span>
              </div>
              <p className="font-semibold">Customer active in our site</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gray-900 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-3xl">25k</span>
              </div>
              <p className="font-semibold">Annual gross sale in our site</p>
            </div>
          </div>
        </div>

        <div className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
              <div>
                <img src={mardak} alt="Tom Cruise" className="w-full rounded-xl mb-6" />
                <h3 className="text-xl font-bold">Tom Cruise</h3>
                <p className="text-gray-600">Founder & Chairman</p>
                <div className="flex justify-center gap-4 mt-4">
                  <a href="#" className="text-gray-700 hover:text-black">t</a>
                  <a href="#" className="text-gray-700 hover:text-black">f</a>
                  <a href="#" className="text-gray-700 hover:text-black">l</a>
                </div>
              </div>

              <div>
                <img src={mardak1} alt="Emma Watson" className="w-full rounded-xl mb-6" />
                <h3 className="text-xl font-bold">Emma Watson</h3>
                <p className="text-gray-600">Managing Director</p>
                <div className="flex justify-center gap-4 mt-4">
                  <a href="#" className="text-gray-700 hover:text-black">t</a>
                  <a href="#" className="text-gray-700 hover:text-black">f</a>
                  <a href="#" className="text-gray-700 hover:text-black">l</a>
                </div>
              </div>

              <div>
                <img src={mardak2} alt="Will Smith" className="w-full rounded-xl mb-6" />
                <h3 className="text-xl font-bold">Will Smith</h3>
                <p className="text-gray-600">Product Designer</p>
                <div className="flex justify-center gap-4 mt-4">
                  <a href="#" className="text-gray-700 hover:text-black">t</a>
                  <a href="#" className="text-gray-700 hover:text-black">f</a>
                  <a href="#" className="text-gray-700 hover:text-black">l</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 bg-gray-900 rounded-full flex items-center justify-center mb-4">
                <span className="text-white text-4xl">Truck</span>
              </div>
              <h4 className="text-xl font-bold mt-6 mb-2">FREE AND FAST DELIVERY</h4>
              <p className="text-gray-600">Free delivery for all orders over $140</p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-20 h-20 bg-gray-900 rounded-full flex items-center justify-center mb-4">
                <span className="text-white text-4xl">Headphones</span>
              </div>
              <h4 className="text-xl font-bold mt-6 mb-2">24/7 CUSTOMER SERVICE</h4>
              <p className="text-gray-600">Friendly 24/7 customer support</p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-20 h-20 bg-gray-900 rounded-full flex items-center justify-center mb-4">
                <span className="text-white text-4xl">Shield</span>
              </div>
              <h4 className="text-xl font-bold mt-6 mb-2">MONEY BACK GUARANTEE</h4>
              <p className="text-gray-600">We return money within 30 days</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default About
