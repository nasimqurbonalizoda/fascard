import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getProductById } from '../reducers/product';
import { plus } from '../reducers/cart';
import { Heart, Share2, Truck, RefreshCw } from 'lucide-react';

const Infopage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const product = useSelector((state) => state.ProductSlice2.product);
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);

  useEffect(() => {
    dispatch(getProductById(id));
  }, [dispatch, id]);

  const handleAddToCart = () => {
    dispatch(plus({ ...product, quantity }));
  };

  if (!product) return null;

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-6 md:py-10">

        <button
          onClick={() => navigate(-1)}
          className="mb-6 text-red-600 font-medium flex items-center gap-2 hover:underline"
        >
          Back
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">

          <div className="space-y-6">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex md:flex-col gap-3 order-2 md:order-1">
                {product.images?.slice(0, 4).map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImage(idx)}
                    className={`w-20 h-20 rounded-lg border-2 overflow-hidden ${selectedImage === idx ? 'border-red-500' : 'border-gray-300'}`}
                  >
                    <img
                      src={`http://37.27.29.18:8002/images/${img.images}`}
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>

              <div className="relative bg-white rounded-2xl p-8 md:p-12 group order-1 md:order-2">
                <img
                  src={`http://37.27.29.18:8002/images/${product.images?.[selectedImage]?.images || product.images?.[0]?.images}`}
                  alt={product.productName}
                  className="w-full max-h-96 object-contain mx-auto"
                />

                {product.hasDiscount && (
                  <span className="absolute top-4 left-4 bg-red-500 text-white px-4 py-1 rounded-full text-sm font-bold">
                    -{Math.round(((product.price - product.discountPrice) / product.price) * 100)}%
                  </span>
                )}

                <div className="absolute top-4 right-4 flex flex-col gap-3 opacity-0 group-hover:opacity-100 transition">
                  <button className="bg-white p-3 rounded-full shadow-lg hover:scale-110">
                    <Heart className="w-5 h-5" />
                  </button>
                  <button className="bg-white p-3 rounded-full shadow-lg hover:scale-110">
                    <Share2 className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h1 className="text-2xl md:text-4xl font-bold">{product.productName}</h1>

            <div className="flex items-center gap-4 text-lg">
              <div className="flex text-yellow-500">★★★★★</div>
              <span className="text-gray-500">(150 Reviews)</span>
              <span className={`font-semibold ${product.quantity > 0 ? 'text-green-600' : 'text-red-600'}`}>
                {product.quantity > 0 ? 'In Stock' : 'Out of Stock'}
              </span>
            </div>

            <div className="text-3xl font-bold">
              {product.hasDiscount ? (
                <>
                  <span className="text-red-600">${product.discountPrice}</span>
                  <span className="text-gray-400 line-through ml-4 text-2xl">${product.price}</span>
                </>
              ) : (
                <span>${product.price}</span>
              )}
            </div>

            <p className="text-gray-600 leading-relaxed">
              {product.description || "High quality product with premium materials and excellent performance."}
            </p>

            <div className="border-t pt-6 space-y-6">

              <div className="flex items-center gap-6">
                <span className="text-gray-600">Colours:</span>
                <div className="flex gap-3">
                  <button className="w-9 h-9 bg-gray-800 rounded-full ring-4 ring-gray-800 ring-offset-2"></button>
                  <button className="w-9 h-9 bg-red-600 rounded-full"></button>
                </div>
              </div>

              <div className="flex items-center gap-6">
                <span className="text-gray-600">Size:</span>
                <div className="flex gap-3">
                  {['XS', 'S', 'M', 'L', 'XL'].map((size) => (
                    <button key={size} className="px-4 py-2 border border-gray-300 rounded hover:bg-red-500 hover:text-white transition">
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-4">
                <div className="flex border border-gray-300 rounded overflow-hidden">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-6 py-3 hover:bg-red-500 hover:text-white transition"
                  >
                    -
                  </button>
                  <span className="px-8 py-3 font-bold text-lg">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-6 py-3 hover:bg-red-500 hover:text-white transition"
                  >
                    +
                  </button>
                </div>

                <button
                  onClick={handleAddToCart}
                  className="flex-1 sm:flex-initial bg-red-500 text-white px-12 py-4 rounded font-semibold hover:bg-red-600 transition"
                >
                  Buy Now
                </button>

                <button className="p-4 border border-gray-300 rounded hover:bg-gray-100">
                  <Heart className="w-6 h-6" />
                </button>
              </div>

              <div className="space-y-4 border border-gray-300 rounded-lg overflow-hidden">
                <div className="flex items-center gap-5 p-6 border-b">
                  <Truck className="w-10 h-10" />
                  <div>
                    <div className="font-semibold">Free Delivery</div>
                    <div className="text-sm underline">Enter your postal code for Delivery Availability</div>
                  </div>
                </div>
                <div className="flex items-center gap-5 p-6">
                  <RefreshCw className="w-10 h-10" />
                  <div>
                    <div className="font-semibold">Return Delivery</div>
                    <div className="text-sm">Free 30 Days Delivery Returns. <u>Details</u></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-5 h-12 bg-red-500 rounded"></div>
            <h2 className="text-2xl md:text-3xl font-bold">Related Items</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="group cursor-pointer bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition">
                <div className="relative bg-gray-50 p-8">
                  <span className="absolute top-3 left-3 bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                    -40%
                  </span>
                  <img
                    src="https://via.placeholder.com/200"
                    alt="Related product"
                    className="w-full h-48 object-contain mx-auto"
                  />
                  <button className="absolute inset-x-0 bottom-0 bg-black text-white py-3 translate-y-full group-hover:translate-y-0 transition">
                    Add To Cart
                  </button>
                </div>
                <div className="p-4">
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
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Infopage;