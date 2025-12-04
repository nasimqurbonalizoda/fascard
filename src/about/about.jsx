
import React from 'react'
import sideImage from "../assets/Side Image.png"
import tom from "../assets/Frame 874.png"
import emma from "../assets/Frame 875.png"
import will from "../assets/Frame 876.png"
const TruckIcon = () => <span className="text-4xl">Truck</span>
const HeadsetIcon = () => <span className="text-4xl">Headset</span>
const ShieldIcon = () => <span className="text-4xl">Shield</span>

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl font-bold text-gray-900 mb-8">Our Story</h1>
            <p className="text-gray-600 leading-relaxed mb-6">
              Launched in 2015, Exclusive is South Asia’s premier online shopping marketplace
              with an active presence in Bangladesh. Supported by a wide range of tailored marketing,
              data, and service solutions, Exclusive has 10,500 sellers and 300 brands and serves
              3 million customers across the region.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Exclusive has more than 1 Million products to offer, growing at a very fast pace.
              We offer a diverse assortment in categories ranging from consumer electronics to fashion.
            </p>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-pink-500 rounded-3xl -rotate-6 shadow-xl"></div>
            <img 
              src={sideImage} 
              alt="Happy customers shopping online" 
              className="relative z-10 rounded-3xl shadow-2xl w-full object-cover h-[560px]"
            />
          </div>
        </div>
      </section>
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-10">
          {[
            { value: "10.5k", label: "Sellers active on our site", bg: "bg-gray-900" },
            { value: "33k", label: "Monthly Product Sales", bg: "bg-red-500" },
            { value: "45.5k", label: "Customers active in our site", bg: "bg-gray-900" },
            { value: "25k", label: "Annual gross sale in our site", bg: "bg-gray-900" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className={`w-24 h-24 ${stat.bg} rounded-full mx-auto mb-5 flex items-center justify-center shadow-lg`}>
                <span className="text-white text-3xl font-bold">{stat.value}</span>
              </div>
              <p className="font-medium text-gray-800">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { img: tom, name: "Tom Cruise", role: "Founder & Chairman" },
              { img: emma, name: "Emma Watson", role: "Managing Director" },
              { img: will, name: "Will Smith", role: "Product Designer" },
            ].map((member) => (
              <div key={member.name} className="text-center">
                <img 
                  src={member.img} 
                  alt={member.name} 
                  className="w-full rounded-xl mb-6 object-cover shadow-md"
                />
                <h3 className="text-2xl font-bold text-gray-900">{member.name}</h3>
                <p className="text-gray-600 mt-1">{member.role}</p>
                <div className="flex justify-center gap-6 mt-5 text-2xl">
                  <a href="#" className="text-gray-700 hover:text-black transition">t</a>
                  <a href="#" className="text-gray-700 hover:text-black transition">f</a>
                  <a href="#" className="text-gray-700 hover:text-black transition">l</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          {[
            { Icon: TruckIcon, title: "FREE AND FAST DELIVERY", desc: "Free delivery for all orders over $140" },
            { Icon: HeadsetIcon, title: "24/7 CUSTOMER SERVICE", desc: "Friendly 24/7 customer support" },
            { Icon: ShieldIcon, title: "MONEY BACK GUARANTEE", desc: "We return money within 30 days" },
          ].map(({ Icon, title, desc }) => (
            <div key={title} className="flex flex-col items-center">
              <div className="w-24 h-24 bg-gray-900 rounded-full flex items-center justify-center mb-6 shadow-lg">
                <Icon />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">{title}</h4>
              <p className="text-gray-600">{desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default About