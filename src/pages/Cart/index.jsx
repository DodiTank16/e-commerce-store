import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { FaTrash, FaPlus, FaMinus, FaShoppingCart } from "react-icons/fa";
import { addToCart, removeFromCart, clearCart, removeOneFromCart } from "../../redux/slices/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const totalAmount = cartItems.reduce((total, item) => total + item.price * item.qty, 0);

  if (cartItems.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[70vh] text-gray-600">
        <FaShoppingCart className="text-6xl mb-4 text-gray-400" />
        <h2 className="text-xl font-semibold">Your Cart is Empty</h2>
        <p className="text-sm mt-2">Add some products to see them here.</p>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen p-6">
      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-md p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold text-gray-800">Shopping Cart</h2>
          <button onClick={() => dispatch(clearCart())} className="text-sm text-red-600 hover:underline">
            Clear Cart
          </button>
        </div>

        <div className="space-y-6">
          {cartItems.map((item) => (
            <div key={item.id} className="flex flex-col sm:flex-row items-center justify-between border-b pb-4">
              <div className="flex items-center gap-4 w-full sm:w-auto">
                <img src={item.image} alt={item.title} className="w-20 h-20 object-contain rounded-md" />
                <div>
                  <h3 className="text-gray-800 font-medium">{item.title.length > 40 ? item.title.slice(0, 40) + "..." : item.title}</h3>
                  <p className="text-sm text-gray-500">₹{item.price}</p>
                </div>
              </div>

              <div className="flex items-center gap-3 mt-4 sm:mt-0">
                <button className="p-2 bg-gray-200 rounded-full hover:bg-gray-300" onClick={() => dispatch(addToCart(item))}>
                  <FaPlus size={12} />
                </button>

                <span className="px-3 text-gray-800 font-medium">{item.qty}</span>

                <button
                  className="p-2 bg-gray-200 rounded-full hover:bg-gray-300"
                  onClick={() => {
                    if (item.qty === 1) {
                      dispatch(removeFromCart(item.id));
                    } else {
                      dispatch(removeOneFromCart(item));
                    }
                  }}
                >
                  <FaMinus size={12} />
                </button>

                <button onClick={() => dispatch(removeFromCart(item.id))} className="ml-3 text-red-500 hover:text-red-700">
                  <FaTrash />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Total Section */}
        <div className="mt-8 flex justify-between items-center border-t pt-4">
          <h3 className="text-lg font-semibold text-gray-700">Total:</h3>
          <span className="text-2xl font-bold text-blue-600">₹{totalAmount}</span>
        </div>

        <div className="mt-6 text-right">
          <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">Checkout</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
