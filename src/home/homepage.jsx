import React, { useEffect } from 'react'
import "../App.css"
import iphone from "../assets/hero_endframe__cvklg0xk3w6e_large 2.png"
import apply from "../assets/1200px-Apple_gray_logo 1.png"
import tel from "../assets/Category-CellPhone.png"
import komp from "../assets/Category-Computer.png"
import soat from "../assets/Category-SmartWatch.png"
import camera from "../assets/Category-Camera.png"
import naushnik from "../assets/Category-Headphone.png"
import game from "../assets/Category-Gamepad.png"
import tatani from "../assets/Frame 694.png"
import playstation from "../assets/ps5-slim-goedkope-playstation_large 1.png"
import dhtar from "../assets/attractive-woman-wearing-hat-posing-black-background 1.png"
import amazon from "../assets/Frame 707.png"
import trak from "../assets/icon-delivery.png"
import dota from "../assets/Icon-Customer service.png"
import { FaHeart, FaShoppingCart, FaEye, FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getProduct } from '../reducers/product'

const Homepage = () => {
    const navigate = useNavigate()
    const data = useSelector((state) => state.ProductSlice2.product)

    console.log(data);

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getProduct())
    }, [dispatch])

      const date = new Date()
      const hour= date.getHours()
       const minute=date.getMinutes()
       const second=date.getSeconds()
      const day = date.getDay()

    return (
        <div className="min-h-screen bg-gray-50">

            <div className="max-w-7xl mx-auto px-4 pt-10 flex flex-col lg:flex-row gap-8">

                <aside className="hidden lg:block w-64">
                    <ul className="space-y-5 text-gray-700 font-medium text-[15px]">
                        <li className="flex justify-between items-center hover:text-red-500 cursor-pointer">
                            <span>Woman’s Fashion</span><span>-›</span>
                        </li>
                        <li className="flex justify-between items-center hover:text-red-500 cursor-pointer">
                            <span>Men’s Fashion</span><span>-›</span>
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
                            <img src={iphone} className="w-72 md:w-96 mt-8 md:mt-0 object-contain" />
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
                                <div className="text-center"><span className="text-xs block text-gray-500">Days</span>{day}</div>
                                <span className="text-red-500">:</span>
                                <div className="text-center"><span className="text-xs block text-gray-500">Hours</span>{hour}</div>
                                <span className="text-red-500">:</span>
                                <div className="text-center"><span className="text-xs block text-gray-500">Minutes</span>{minute}</div>
                                <span className="text-red-500">:</span>
                                <div className="text-center"><span className="text-xs block text-gray-500">Seconds</span>{second}</div>
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
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                            {data?.products?.map((elem) => {
                                return (
                                    <div key={elem.id} className="bg-white rounded-lg overflow-hidden group relative hover:shadow-2xl transition-shadow">
                                        <div className="absolute top-3 left-3 bg-red-500 text-white px-3 py-1 text-xs font-bold rounded z-10">
                                            -40%
                                        </div>
                                        <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition z-10">
                                            <button className="w-9 h-9 bg-white rounded-full shadow flex items-center justify-center hover:bg-gray-100">
                                                <FaHeart onClick={()=> navigate("/detail")} className="text-gray-700" />
                                            </button>
                                            <button className="w-9 h-9 bg-white rounded-full shadow flex items-center justify-center hover:bg-gray-100">
                                                <FaEye className="text-gray-700" />
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
                                                <span className="text-red-500 font-bold"> $ {elem.discountPrice}</span>
                                                <span className="text-gray-400 line-through text-sm">{elem.price} $</span>
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

                        <div className="text-center mt-12">
                            <button className="bg-red-500 text-white px-12 py-4 rounded hover:bg-red-800 transition font-medium text-lg cursor-pointer">
                                <span onClick={() => navigate("/products")}>View All Products</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>


            <div className="min-h-screen bg-white">

                <div className="max-w-7xl mx-auto px-4 py-12">
                    <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center gap-4">
                            <div className="w-5 h-10 bg-red-500 rounded"></div>
                            <span className="text-red-500 font-semibold">Categories</span>
                        </div>
                        <h2 className="text-3xl font-bold">Browse By Category</h2>
                        <div className="flex gap-3">
                            <button className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200">
                                <span>←</span>
                            </button>
                            <button className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200">
                                <span>→</span>
                            </button>
                        </div>
                    </div>

                    <div className="grid grid-cols-3 md:grid-cols-6 gap-6">
                        <div className="border border-gray-200 rounded-lg p-6 hover:bg-red-500 hover:text-white transition group cursor-pointer">
                            <div className="w-16 h-16 mx-auto mb-3 bg-white/20 rounded flex items-center justify-center">
                                <img src={tel} alt="Phones" className="w-10 h-10" />
                            </div>
                            <p className="text-center text-sm">Phones</p>
                        </div>

                        <div className="border border-gray-200 rounded-lg p-6 hover:bg-red-500 hover:text-white transition group cursor-pointer">
                            <div className="w-16 h-16 mx-auto mb-3 bg-white/20 rounded flex items-center justify-center">
                                <img src={komp} alt="Computers" className="w-10 h-10" />
                            </div>
                            <p className="text-center text-sm">Computers</p>
                        </div>

                        <div className="border border-gray-200 rounded-lg p-6 hover:bg-red-500 hover:text-white transition group cursor-pointer">
                            <div className="w-16 h-16 mx-auto mb-3 bg-white/20 rounded flex items-center justify-center">
                                <img src={soat} alt="SmartWatch" className="w-10 h-10" />
                            </div>
                            <p className="text-center text-sm">SmartWatch</p>
                        </div>

                        <div className="border border-gray-200 rounded-lg p-6 hover:bg-red-500 hover:text-white transition group cursor-pointer">
                            <div className="w-16 h-16 mx-auto mb-3 bg-white/20 rounded flex items-center justify-center">
                                <img src={camera} alt="HeadPhones" className="w-10 h-10" />
                            </div>
                            <p className="text-center text-sm">Camera</p>
                        </div>

                        <div className="border border-gray-200 rounded-lg p-6 hover:bg-red-500 hover:text-white transition group cursor-pointer">
                            <div className="w-16 h-16 mx-auto mb-3 bg-white/20 rounded flex items-center justify-center">
                                <img src={naushnik} alt="HeadPhones" className="w-10 h-10" />
                            </div>
                            <p className="text-center text-sm">HeadPhones</p>
                        </div>

                        <div className="border border-gray-200 rounded-lg p-6 hover:bg-red-500 hover:text-white transition group cursor-pointer">
                            <div className="w-16 h-16 mx-auto mb-3 bg-white/20 rounded flex items-center justify-center">
                                <img src={game} alt="Gaming" className="w-10 h-10" />
                            </div>
                            <p className="text-center text-sm">Gaming</p>
                        </div>
                    </div>
                </div>


                <div className="max-w-7xl mx-auto px-4 py-12 border-t">
                    <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center gap-4">
                            <div className="w-5 h-10 bg-red-500 rounded"></div>
                            <span className="text-red-500 font-semibold">This Month</span>
                        </div>
                        <h2 className="text-3xl font-bold">Best Selling Products</h2>
                        <button className="bg-red-500 text-white px-10 py-3 rounded hover:bg-red-600 transition cursor-pointer">
                            <span onClick={() => navigate("/wishlist")}>View All</span>
                        </button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

                        
                   {data?.products?.map((elem) => {
                                return (
                                    <div key={elem.id} className="bg-white rounded-lg overflow-hidden group relative hover:shadow-2xl transition-shadow">
                                        <div className="absolute top-3 left-3 bg-red-500 text-white px-3 py-1 text-xs font-bold rounded z-10">
                                            -40%
                                        </div>
                                        <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition z-10">
                                            <button className="w-9 h-9 bg-white rounded-full shadow flex items-center justify-center hover:bg-gray-100">
                                                <FaHeart onClick={()=> navigate("/detail")} className="text-gray-700" />
                                            </button>
                                            <button className="w-9 h-9 bg-white rounded-full shadow flex items-center justify-center hover:bg-gray-100">
                                                <FaEye className="text-gray-700" />
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
                </div>



                <div className="bg-black text-white rounded-2xl max-w-7xl mx-auto px-4 py-16 my-20 relative overflow-hidden">
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
                        <div className="max-w-lg z-10">
                            <p className="text-green-400 text-sm font-semibold mb-2">Categories</p>
                            <h1 className="text-5xl font-bold leading-tight mb-8">
                                Enhance Your <br /> Music Experience
                            </h1>
                            <div className="flex gap-4 mb-8">
                                <div className="bg-white text-black rounded-full w-16 h-16 flex flex-col items-center justify-center">
                                    <span className="text-xl font-bold">23</span>
                                    <span className="text-xs">Hours</span>
                                </div>
                                <div className="bg-white text-black rounded-full w-16 h-16 flex flex-col items-center justify-center">
                                    <span className="text-xl font-bold">05</span>
                                    <span className="text-xs">Days</span>
                                </div>
                                <div className="bg-white text-black rounded-full w-16 h-16 flex flex-col items-center justify-center">
                                    <span className="text-xl font-bold">59</span>
                                    <span className="text-xs">Minutes</span>
                                </div>
                                <div className="bg-white text-black rounded-full w-16 h-16 flex flex-col items-center justify-center">
                                    <span className="text-xl font-bold">35</span>
                                    <span className="text-xs">Seconds</span>
                                </div>
                            </div>
                            <button className="bg-green-500 text-white px-12 py-4 rounded hover:bg-green-600 transition font-medium">
                                Buy Now!
                            </button>
                        </div>

                        <div className="z-10">
                            <img
                                src={tatani}
                                alt="JBL Speaker"
                                className="w-96 object-contain"
                            />
                        </div>
                    </div>
                </div>

            </div>




            <div className="max-w-7xl mx-auto px-4 py-16">

                <div className="flex items-center gap-4 mb-8">
                    <div className="w-5 h-10 bg-red-500 rounded"></div>
                    <span className="text-red-500 font-semibold">Our Products</span>
                </div>
                <h2 className="text-4xl font-bold mb-12">Explore Our Products</h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

                   {data?.products?.map((elem) => {
                                return (
                                    <div key={elem.id} className="bg-white rounded-lg overflow-hidden group relative hover:shadow-2xl transition-shadow">
                                        <div className="absolute top-3 left-3 bg-red-500 text-white px-3 py-1 text-xs font-bold rounded z-10">
                                            -40%
                                        </div>
                                        <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition z-10">
                                            <button className="w-9 h-9 bg-white rounded-full shadow flex items-center justify-center hover:bg-gray-100">
                                                <FaHeart onClick={()=> navigate("/detail")} className="text-gray-700" />
                                            </button>
                                            <button className="w-9 h-9 bg-white rounded-full shadow flex items-center justify-center hover:bg-gray-100">
                                                <FaEye className="text-gray-700" />
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

                <div className="text-center mt-16">
                    <button onClick={()=> navigate("/products")} className="bg-red-500 text-white px-12 py-4 cursor-pointer rounded hover:bg-red-600 transition font-medium text-lg">
                        View All Products
                    </button>
                </div>

            </div>

            <div className="max-w-7xl mx-auto px-4 py-16">
                <div className="flex items-center gap-4 mb-8">
                    <div className="w-5 h-10 bg-red-500 rounded"></div>
                    <span className="text-red-500 font-semibold">Featured</span>
                </div>
                <h2 className="text-4xl font-bold mb-12">New Arrival</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">


                    <div className="lg:col-span-2 lg:row-span-2 bg-black rounded-2xl overflow-hidden relative">
                        <img
                            src={playstation}
                            alt="PlayStation 5"
                            className="absolute inset-0 w-full h-full object-cover object-center"
                        />
                        <div className="absolute bottom-10 left-10 max-w-md text-white">
                            <h3 className="text-5xl font-bold mb-4">PlayStation 5</h3>
                            <p className="text-lg mb-6 opacity-90 leading-relaxed">
                                Black and White version of the PS5 coming out on sale.
                            </p>
                            <button className="underline text-lg flex items-center gap-2 hover:gap-4 transition-all">
                                Shop Now <span className="text-2xl">→</span>
                            </button>
                        </div>
                    </div>


                    <div className="bg-black rounded-2xl overflow-hidden relative">
                        <img
                            src={dhtar}
                            alt="Women's Collections"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                        <div className="absolute bottom-8 left-8 text-white">
                            <h3 className="text-3xl font-bold mb-3">Women’s Collections</h3>
                            <p className="text-base mb-5 opacity-90">
                                Featured woman collections that give you another vibe.
                            </p>
                            <button className="underline text-lg flex items-center gap-2 hover:gap-4 transition-all">
                                Shop Now <span className="text-2xl">→</span>
                            </button>
                        </div>
                    </div>


                    <div className="bg-black rounded-2xl overflow-hidden relative">
                        <img
                            src={amazon}
                            alt="Speakers"
                            className="w-full h-full object-cover object-center"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                        <div className="absolute bottom-8 left-8 text-white">
                            <h3 className="text-2xl font-bold mb-3">Speakers</h3>
                            <p className="text-base mb-5 opacity-90">Amazon wireless speakers</p>
                            <button className="underline text-lg flex items-center gap-2 hover:gap-4 transition-all">
                                Shop Now <span className="text-2xl">→</span>
                            </button>
                        </div>
                    </div>


                    <div className="bg-black rounded-2xl overflow-hidden relative">
                        <img
                            src={data}
                            alt="Perfume"
                            className="w-full h-full object-cover object-center"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                        <div className="absolute bottom-8 left-8 text-white">
                            <h3 className="text-2xl font-bold mb-3">Perfume</h3>
                            <p className="text-base mb-5 opacity-90">GUCCI INTENSE OUD EDP</p>
                            <button className="underline text-lg flex items-center gap-2 hover:gap-4 transition-all">
                                Shop Now <span className="text-2xl">→</span>
                            </button>
                        </div>
                    </div>

                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-20 border-t pt-16">

                <div className="text-center">
                    <div className="w-20 h-20 bg-black rounded-full mx-auto mb-4 flex items-center justify-center">
                        <span className="text-4xl"><img src={trak} alt="" /></span>
                    </div>
                    <h3 className="font-bold text-xl mb-2">FREE AND FAST DELIVERY</h3>
                    <p className="text-sm text-gray-600">Free delivery for all orders over $140</p>
                </div>

                <div className="text-center">
                    <div className="w-20 h-20 bg-black rounded-full mx-auto mb-4 flex items-center justify-center">
                        <span className="text-4xl"><img src={dota} alt="" /></span>
                    </div>
                    <h3 className="font-bold text-xl mb-2">24/7 CUSTOMER SERVICE</h3>
                    <p className="text-sm text-gray-600">Friendly 24/7 customer support</p>
                </div>

                <div className="text-center">
                    <div className="w-20 h-20 bg-black rounded-full mx-auto mb-4 flex items-center justify-center">
                        <span className="text-4xl"><img src={dota} alt="" /></span>
                    </div>
                    <h3 className="font-bold text-xl mb-2">MONEY BACK GUARANTEE</h3>
                    <p className="text-sm text-gray-600">We return money within 30 days</p>
                </div>

            </div>
        </div>
    )
}
export default Homepage
