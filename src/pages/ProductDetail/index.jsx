import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { FaShoppingCart, FaArrowLeft, FaCheck } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../redux/slices/cartSlice";

const ProductDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [added, setAdded] = useState(false);
  const [error, setError] = useState("");

  // Fetch product details
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await axios.get(`https://fakestoreapi.com/products/${id}`);
        setProduct(res.data);
      } catch (err) {
        setError("Failed to load product details.");
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id]);

  // Handle Add to Cart
  const handleAddToCart = () => {
    dispatch(addToCart(product));
    setAdded(true);
    setTimeout(() => setAdded(false), 1000);
  };

  if (loading) return <div className="text-center py-10 text-gray-600">Loading...</div>;
  if (error || !product) return <div className="text-center py-10 text-red-500">{error || "Product not found."}</div>;

  const isInCart = cartItems.some((item) => item.id === product.id);

  return (
    <div className="bg-gray-50 min-h-screen p-6">
      <Link to="/" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium mb-6">
        <FaArrowLeft /> Back to Products
      </Link>

      <div className="bg-white shadow rounded-2xl p-6 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Product Image */}
        <div className="flex justify-center items-center">
          <img src={product.image} alt={product.title} className="w-64 h-64 object-contain" />
        </div>

        {/* Product Details */}
        <div>
          <h1 className="text-2xl font-bold text-gray-800 mb-2">{product.title}</h1>
          <p className="text-gray-500 text-sm mb-3 capitalize">
            Category: <span className="text-gray-700">{product.category}</span>
          </p>

          <p className="text-gray-600 mb-4 leading-relaxed">{product.description}</p>

          <p className="text-3xl font-semibold text-blue-600 mb-6">₹{product.price}</p>

          {/* Add to Cart Button */}
          <button
            onClick={handleAddToCart}
            className={`flex items-center gap-2 px-6 py-3 rounded-lg text-white transition ${added ? "bg-green-600" : "bg-blue-600 hover:bg-blue-700"}`}
          >
            <FaShoppingCart />
            {added ? "Added!" : isInCart ? "Add One More" : "Add to Cart"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
