import React, { useEffect } from 'react'
import surhak from "../assets/Frame 611 (1).png"
import { useDispatch, useSelector } from 'react-redux'
import { getCarter } from '../reducers/wishlist'
import { Link } from "react-router-dom";
// import { Heart } from "lucide-react";
const Wishlist = () => {
  const list = useSelector((state) => state.cartSlices.list)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getCarter())
  }, [])
  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <div className="flex justify-between items-center mb-10">
        <h2 className="text-3xl font-bold">Wishlist (4)</h2>
        <button className="border border-gray-300 px-10 py-3 rounded hover:bg-gray-50 transition">
          Move All To Bag
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">

        {list?.map((elem) => {
          return (
            <div key={elem.id} className="bg-white rounded-lg overflow-hidden group relative hover:shadow-2xl transition-shadow">
              <div className="absolute top-3 left-3 bg-red-500 text-white px-3 py-1 text-xs font-bold rounded z-10">
                -40%
              </div>
              <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition z-10">
                <button className="w-9 h-9 bg-white rounded-full shadow flex items-center justify-center hover:bg-gray-100">
                  {/* <FaHeart onClick={() => navigate("/detail")} className="text-gray-700" /> */}
                </button>
                <button className="w-9 h-9 bg-white rounded-full shadow flex items-center justify-center hover:bg-gray-100">
                  {/* <FaEye className="text-gray-700" /> */}
                </button>
              </div>
              <div className="h-48 bg-gray-50 flex items-center justify-center p-4">
                <Link to={`/infopage/${elem.id}`}>
                  <img
                    src={`http://37.27.29.18:8002/images/${elem.image}`}
                    alt="Gamepad"
                    className="max-h-full max-w-full object-contain"
                  />
                </Link>
              </div>
              <div className="absolute cursor-pointer inset-x-0 bottom-0 bg-black text-white text-center py-3 opacity-0 group-hover:opacity-100 transition font-medium">
                Add To Cart
              </div>
              <div className="p-4">
                <h3 className="font-medium text-sm line-clamp-2">{elem.productName}</h3>
                <div className="flex items-center gap-3 mt-2">
                  <span className="text-red-500 font-bold"> $ {elem.price}</span>
                  <span className="text-gray-400 line-through text-sm">{elem.discountPrice} $</span>
                </div>
                <div className="flex items-center gap-2 mt-2">
                  <span className="text-yellow-400 text-lg">★★★★★</span>
                  <span className="text-gray-500 text-sm">({elem.categoryId})</span>
                </div>
              </div>
            </div>
          )
        })
        }
      </div>

      <div className="flex justify-between items-center mb-10">
        <div className="flex items-center gap-4">
          <div className="w-5 h-10 bg-red-500 rounded"></div>
          <span className="text-red-500 font-semibold">Just For You</span>
        </div>
        <button className="border border-gray-300 px-10 py-3 rounded hover:bg-gray-50 transition">
          See All
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">


        {list?.map((el) => {
          return (
            <div key={el.id} className="bg-white rounded-lg overflow-hidden group relative hover:shadow-2xl transition-shadow">
              <div  className="absolute top-3 left-3 bg-red-500 text-white px-3 py-1 text-xs font-bold rounded z-10">
                -40%
              </div>
              <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition z-10">
                <button className="w-9 h-9 bg-white rounded-full shadow flex items-center justify-center hover:bg-gray-100">
                  {/* <FaHeart onClick={() => navigate("/detail")} className="text-gray-700" /> */}
                </button>
                <button className="w-9 h-9 bg-white rounded-full shadow flex items-center justify-center hover:bg-gray-100">
                  {/* <FaEye className="text-gray-700" /> */}
                </button>
              </div>
              <div className="h-48 bg-gray-50 flex items-center justify-center p-4">
                <Link to={`/infopage/${el.id}`}>
                  <img
                    src={`http://37.27.29.18:8002/images/${el.image}`}
                    alt="Gamepad"
                    className="max-h-full max-w-full object-contain"
                  />
                </Link>
              </div>
              <div className="absolute cursor-pointer inset-x-0 bottom-0 bg-black text-white text-center py-3 opacity-0 group-hover:opacity-100 transition font-medium">
                Add To Cart
              </div>
              <div className="p-4">
                <h3 className="font-medium text-sm line-clamp-2">{el.productName}</h3>
                <div className="flex items-center gap-3 mt-2">
                  <span className="text-red-500 font-bold"> $ {el.price}</span>
                  <span className="text-gray-400 line-through text-sm">{el.discountPrice} $</span>
                </div>
                <div className="flex items-center gap-2 mt-2">
                  <span className="text-yellow-400 text-lg">★★★★★</span>
                  <span className="text-gray-500 text-sm">({el.categoryId})</span>
                </div>
              </div>
            </div>
          )
        })
        }

        <div className="bg-white rounded-lg overflow-hidden group relative">
          <div className="h-64 bg-gray-100 flex items-center justify-center p-8">
            <img src={surhak} alt="Keyboard" className="max-h-full object-contain" />
          </div>
          <div className="bg-black text-white text-center py-3 cursor-pointer hover:bg-gray-900 transition">
            Add To Cart
          </div>
          <div className="p-4">
            <h3 className="font-medium text-sm">AK-900 Wired Keyboard</h3>
            <div className="flex items-center gap-3 mt-2">
              <span className="text-red-500 font-bold">$200</span>
            </div>
            <div className="flex items-center gap-2 mt-2">
              <span className="text-yellow-400">★★★★★</span>
              <span className="text-gray-500 text-sm">(65)</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Wishlist
