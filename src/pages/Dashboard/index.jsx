import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaShoppingCart, FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../redux/slices/cartSlice";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const Dashboard = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.cart.items);

  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [addedId, setAddedId] = useState(null);

  // Fetch products
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get("https://fakestoreapi.com/products");
        setProducts(res.data);
        setFilteredProducts(res.data);
      } catch (err) {
        console.error("Error fetching products:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  const handleProductDetils = (product) => {
    console.log(product);
    navigate("/product/" + product.id);
  };

  // Handle Add to Cart
  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    setAddedId(product.id);
    setTimeout(() => setAddedId(null), 1000);
  };

  useEffect(() => {
    const results = products.filter((item) => item.title.toLowerCase().includes(search.toLowerCase()));
    setFilteredProducts(results);
  }, [search, products]);

  return (
    <div className="bg-gray-50 min-h-screen p-6">
      {/* Search Bar */}
      <div className="flex justify-center mb-8">
        <div className="flex items-center bg-white shadow-md rounded-full px-4 py-2 w-full max-w-md">
          <FaSearch className="text-gray-500" />
          <input
            type="text"
            placeholder="Search products..."
            className="ml-2 w-full outline-none text-gray-700"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      {/* Loading State */}
      {loading ? (
        <div className="text-center text-gray-600">Loading products...</div>
      ) : filteredProducts.length === 0 ? (
        <div className="text-center text-gray-600">No products found.</div>
      ) : (
        /* Product Grid */
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => {
            const isInCart = cartItems.some((item) => item.id === product.id);
            return (
              <div
                key={product.id}
                className="bg-white shadow rounded-2xl p-4 flex flex-col hover:shadow-lg transition"
                onClick={() => {
                  handleProductDetils(product);
                }}
              >
                <LazyLoadImage src={product.image} alt={product.title} className="h-48 w-full object-contain mb-4" />
                {/* <img src={product.image} alt={product.title} className="h-48 w-full object-contain mb-4" /> */}
                <h2 className="text-gray-800 font-semibold text-sm mb-1">{product.title.length > 45 ? product.title.slice(0, 45) + "..." : product.title}</h2>
                <p className="text-gray-500 text-xs mb-2 line-clamp-2">{product.description}</p>
                <div className="flex justify-between items-center mt-auto pt-2">
                  <span className="text-lg font-bold text-blue-600">₹{product.price}</span>
                  <button
                    className={`flex items-center gap-1 text-white text-sm px-3 py-2 rounded-lg transition cursor-pointer ${
                      addedId === product.id ? "bg-green-600" : "bg-blue-600 hover:bg-blue-700"
                    }`}
                    onClick={(e) => {
                      e.stopPropagation();
                      handleAddToCart(product);
                    }}
                  >
                    <FaShoppingCart /> {addedId === product.id ? "Added!" : isInCart ? "Add One More" : "Add"}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Dashboard;
