import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "../reducers/product";
import { Link } from "react-router-dom";
import { Heart } from "lucide-react";
import { AddCart } from "../reducers/cart";

const Products = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.ProductSlice2.product?.products || []);

  useEffect(() => {
    dispatch(getProduct());
  }, [dispatch]);

  return (
    <div className="min-h-screen bg-gray-50">

      <div className="max-w-screen-2xl mx-auto px-4 pt-6">
        <p className="text-sm text-gray-500 mb-4">
          Home / <span className="text-gray-900 font-medium">Explore Our Products</span>
        </p>

        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
          <h1 className="text-2xl font-bold text-gray-900">All products</h1>
          <select className="w-full sm:w-48 border border-gray-300 rounded-lg px-5 py-3 text-sm">
            <option>Popular</option>
          </select>
        </div>
      </div>

      <div className="max-w-screen-2xl mx-auto px-4 pb-20">
        <div className="flex flex-col lg:flex-row gap-8">

          <aside className="hidden lg:block w-80 space-y-8">
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Category</h3>
              <div className="space-y-3">
                <label className="flex items-center gap-3"><input type="radio" name="cat" className="accent-orange-500" defaultChecked /><span className="text-orange-500 font-medium">All products</span></label>
                <label className="flex items-center gap-3"><input type="radio" name="cat" className="accent-orange-500" /><span className="text-gray-700">Electronics</span></label>
                <label className="flex items-center gap-3"><input type="radio" name="cat" className="accent-orange-500" /><span className="text-gray-700">Home & Lifestyle</span></label>
                <label className="flex items-center gap-3"><input type="radio" name="cat" className="accent-orange-500" /><span className="text-gray-700">Medicine</span></label>
                <label className="flex items-center gap-3"><input type="radio" name="cat" className="accent-orange-500" /><span className="text-gray-700">Sports & Outdoor</span></label>
              </div>
              <a href="#" className="text-orange-500 text-sm block mt-3">See all</a>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Brands</h3>
              <div className="space-y-3">
                {["Samsung","Apple","Huawei","Poco","Lenovo"].map((b) => (
                  <label key={b} className="flex items-center gap-3">
                    <input type="checkbox" className="accent-orange-500" />
                    <span className="text-gray-700">{b}</span>
                  </label>
                ))}
              </div>
              <a href="#" className="text-orange-500 text-sm block mt-3">See all</a>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Price range</h3>
              <input type="range" className="w-full accent-orange-500 mb-4" />
              <div className="flex justify-between text-sm text-gray-600 mb-4">
                <span>0</span>
                <span>999 999</span>
              </div>
              <button className="w-full bg-orange-500 text-white py-3 rounded-lg hover:bg-orange-600 transition">
                Apply
              </button>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Condition</h3>
              <label className="flex items-center gap-3 mb-3"><input type="radio" name="cond" className="accent-orange-500" defaultChecked /><span className="text-gray-700">Any</span></label>
              <label className="flex items-center gap-3 mb-3 text-red-600"><input type="radio" name="cond" className="accent-orange-500" /><span>Refurbished</span></label>
              <label className="flex items-center gap-3 text-green-600"><input type="radio" name="cond" className="accent-orange-500" /><span>Brand new</span></label>
            </div>
          </aside>

          <div className="flex-1">
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 lg:gap-6">

              {products.map((elem) => (
                <div key={elem.id} className="bg-white rounded-xl shadow-sm hover:shadow-xl transition-all group overflow-hidden">

                  <div className="relative aspect-square">
                    <Link to={`/infopage/${elem.id}`}>
                      <img
                        src={`http://37.27.29.18:8002/images/${elem.image}`}
                        alt={elem.productName}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </Link>

                    {elem.hasDiscount && (
                      <span className="absolute top-3 left-3 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full z-10">
                        -{Math.round(((elem.price - elem.discountPrice) / elem.price) * 100)}%
                      </span>
                    )}

                    {elem.quantity > 30 && (
                      <span className="absolute top-3 left-3 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full z-10">
                        New
                      </span>
                    )}

                    <button className="absolute top-3 right-3 bg-white/90 p-2 rounded-full shadow-md z-10 hover:bg-white">
                      <Heart className="w-5 h-5 text-gray-700 hover:fill-red-500 hover:text-red-500 transition" />
                    </button>
                  </div>

                  <div className="p-4">
                    <p className="text-xs text-gray-500 truncate">{elem.categoryName}</p>

                    <Link to={`/infopage/${elem.id}`}>
                      <h3 className="font-medium text-gray-900 mt-1 hover:text-orange-500 line-clamp-2">
                        {elem.productName}
                      </h3>
                    </Link>

                    <div className="flex items-center gap-1 mt-2">
                      <span className="text-yellow-400">★★★★★</span>
                      <span className="text-xs text-gray-500 ml-1">(95)</span>
                    </div>

                    <div className="mt-3 flex items-center gap-3">
                      {elem.hasDiscount ? (
                        <>
                          <span className="text-lg font-bold text-gray-900">${elem.discountPrice}</span>
                          <span className="text-sm text-gray-500 line-through">${elem.price}</span>
                        </>
                      ) : (
                        <span className="text-lg font-bold text-gray-900">${elem.price}</span>
                      )}
                    </div>

                    <button onClick={()=>dispatch(AddCart(elem.id))} className="mt-4 w-full bg-black text-white py-3 rounded-lg hover:bg-gray-900 transition font-medium text-sm">
                      Add to Cart
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;