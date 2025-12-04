import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Heart } from "lucide-react";
import { getProduct } from "../reducers/product";
import { AddCart } from "../reducers/cart";
import { axiosRequest } from "../utility/api";

const Products = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.ProductSlice2.product?.products || []);
  const [category, setCategory] = useState([]);
  const [brand, setBrand] = useState([]);
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  async function fetchCategories() {
    try {
      const { data } = await axiosRequest.get("/Category/get-categories");
      setCategory(data.data);
    } catch (error) {
      console.log(error);
    }
  }

  async function fetchBrands() {
    try {
      const { data } = await axiosRequest.get("/Brand/get-brands");
      setBrand(data.data);
    } catch (error) {
      console.log(error);
    }
  }

  async function filterByCategory(id) {
    try {
      const { data } = await axiosRequest.get(`/Product/get-products?CategoryId=${id}`);
      dispatch(getProduct(data.data.products));
    } catch (error) {
      console.log(error);
    }
  }

  async function filterByBrand(id) {
    try {
      const { data } = await axiosRequest.get(`/Product/get-products?BrandId=${id}`);
      dispatch(getProduct(data.data.products));
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    dispatch(getProduct());
    fetchCategories();
    fetchBrands();
  }, [dispatch]);

  return (
    <div className="min-h-screen bg-gray-50">

      <div className="max-w-screen-2xl mx-auto px-4 py-6">
        <p className="text-sm text-gray-500">
          Home / <span className="font-medium text-black">Explore Our Products</span>
        </p>

        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mt-6">
          <h1 className="text-2xl sm:text-3xl font-bold">All products</h1>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <select className="w-full sm:w-48 border border-gray-300 rounded-lg px-4 py-3 text-sm">
              <option>Popular</option>
              <option>Newest</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
            </select>

            <button
              onClick={() => setMobileFilterOpen(!mobileFilterOpen)}
              className="sm:hidden p-3 border border-gray-300 rounded-lg"
            >
              Filters
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-screen-2xl mx-auto px-4 pb-20">
        <div className="flex flex-col lg:flex-row gap-8">

          <aside className={`lg:block fixed lg:relative inset-0 z-50 bg-white lg:bg-transparent w-full lg:w-80 overflow-y-auto transition-transform ${mobileFilterOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}`}>
            <div className="p-6 lg:p-0 space-y-10">
              <div className="flex justify-between items-center lg:hidden pb-4 border-b">
                <h3 className="text-xl font-bold">Filters</h3>
                <button onClick={() => setMobileFilterOpen(false)} className="text-2xl">×</button>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-4">Category</h3>
                <div className="space-y-3">
                  <label className="flex items-center gap-3">
                    <input type="radio" name="cat" className="accent-orange-500" defaultChecked onChange={() => dispatch(getProduct())} />
                    <span className="text-orange-500 font-medium">All products</span>
                  </label>
                  {category.map((item) => (
                    <label key={item.id} className="flex items-center gap-3 cursor-pointer">
                      <input type="radio" name="cat" className="accent-orange-500" onChange={() => filterByCategory(item.id)} />
                      <span className="text-gray-700">{item.categoryName}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-4">Brands</h3>
                <div className="space-y-3">
                  {brand.map((item) => (
                    <label key={item.id} className="flex items-center gap-3 cursor-pointer">
                      <input type="checkbox" className="accent-orange-500" onChange={(e) => e.target.checked && filterByBrand(item.id)} />
                      <span className="text-gray-700">{item.brandName}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-4">Price range</h3>
                <input type="range" className="w-full accent-orange-500" min="0" max="999999" />
                <div className="flex justify-between text-sm text-gray-600 mt-2">
                  <span>$0</span>
                  <span>$999,999</span>
                </div>
                <button className="w-full mt-4 bg-orange-500 text-white py-3 rounded-lg hover:bg-orange-600 transition">
                  Apply
                </button>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-4">Condition</h3>
                <label className="flex items-center gap-3"><input type="radio" name="cond" className="accent-orange-500" defaultChecked /><span>Any</span></label>
                <label className="flex items-center gap-3 text-red-600"><input type="radio" name="cond" className="accent-orange-500" /><span>Refurbished</span></label>
                <label className="flex items-center gap-3 text-green-600"><input type="radio" name="cond" className="accent-orange-500" /><span>Brand new</span></label>
              </div>
            </div>
          </aside>

          {mobileFilterOpen && <div onClick={() => setMobileFilterOpen(false)} className="fixed inset-0 bg-black/50 z-40 lg:hidden"></div>}

          <div className="flex-1">
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
              {products.map((item) => (
                <div key={item.id} className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all group overflow-hidden">

                  <div className="relative aspect-square bg-gray-100">
                    <Link to={`/infopage/${item.id}`}>
                      <img
                        src={`http://37.27.29.18:8002/images/${item.image}`}
                        alt={item.productName}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </Link>

                    {item.hasDiscount && (
                      <span className="absolute top-3 left-3 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                        -{Math.round(((item.price - item.discountPrice) / item.price) * 100)}%
                      </span>
                    )}

                    {item.quantity > 30 && (
                      <span className="absolute top-3 left-3 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                        New
                      </span>
                    )}

                    <button className="absolute top-3 right-3 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition">
                      <Heart className="w-5 h-5 text-gray-700 hover:fill-red-500 hover:text-red-500 transition" />
                    </button>
                  </div>

                  <div className="p-4">
                    <p className="text-xs text-gray-500 truncate">{item.categoryName}</p>
                    <Link to={`/infopage/${item.id}`}>
                      <h3 className="font-medium text-gray-900 mt-1 hover:text-orange-500 line-clamp-2">
                        {item.productName}
                      </h3>
                    </Link>

                    <div className="flex items-center gap-1 mt-2">
                      <span className="text-yellow-400">★★★★★</span>
                      <span className="text-xs text-gray-500">(95)</span>
                    </div>

                    <div className="mt-3 flex items-center gap-3">
                      {item.hasDiscount ? (
                        <>
                          <span className="text-lg font-bold">${item.discountPrice}</span>
                          <span className="text-sm text-gray-500 line-through">${item.price}</span>
                        </>
                      ) : (
                        <span className="text-lg font-bold">${item.price}</span>
                      )}
                    </div>

                    <button
                      onClick={() => dispatch(AddCart(item.id))}
                      className="mt-4 w-full bg-black text-white py-3 rounded-lg hover:bg-gray-900 transition text-sm font-medium"
                    >
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