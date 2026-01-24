import React, { useState } from "react";
import { motion } from "framer-motion";
import { MessageCircle, ShoppingBag, Plus, Minus, MapPin } from "lucide-react";

const OrderSection = () => {
  const [unit, setUnit] = useState("500 gm");
  const [qty, setQty] = useState(1);
  const [pincode, setPincode] = useState("");
  const [error, setError] = useState("");

  // Helper to calculate the total display string (e.g., "1.5 kg")
  const getTotalDisplay = () => {
    if (unit === "1 piece") {
      return `${qty} piece${qty > 1 ? "s" : ""}`;
    }
    if (unit === "1 kg") {
      return `${qty} kg`;
    }
    if (unit === "500 gm") {
      const totalGrams = qty * 500;
      if (totalGrams >= 1000) {
        return `${totalGrams / 1000} kg`;
      }
      return `${totalGrams} gm`;
    }
    return "";
  };

  const handleOrder = () => {
    // 1. Validation: Check if Pincode is entered
    if (!pincode.trim()) {
      setError("Please enter your Pincode for delivery.");
      return;
    }
    if (pincode.length < 6) {
      setError("Please enter a valid 6-digit Pincode.");
      return;
    }
    setError(""); // Clear error if valid

    // 2. Prepare WhatsApp Message
    const totalQuantity = getTotalDisplay();
    const phoneNumber = "919477547624";

    const text = `Hello AVOWALA! 🥑\nI would like to order:\n\n*Item:* Premium Avocados\n*Selected Pack:* ${unit}\n*Total Quantity:* ${totalQuantity}\n*Delivery Pincode:* ${pincode}\n\nPlease let me know the price and availability.`;

    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
  };

  return (
    <section id="order" className="py-20 bg-avo-cream/30">
      <div className="container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-avo-dark mb-4">
            Order Fresh Avocados
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Select your preferred quantity. Average weight per avocado is
            approx. 200–250 gm.
          </p>
        </motion.div>

        <div className="bg-white p-8 rounded-2xl shadow-xl max-w-lg mx-auto border border-avo-light/20">
          {/* Unit Selection */}
          <div className="flex justify-center space-x-2 md:space-x-4 mb-6">
            {["500 gm", "1 kg", "1 piece"].map((opt) => (
              <button
                key={opt}
                onClick={() => {
                  setUnit(opt);
                  setQty(1);
                }}
                className={`px-3 py-2 text-sm md:text-base md:px-4 rounded-lg font-medium transition-all ${
                  unit === opt
                    ? "bg-avo-dark text-white shadow-lg"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {opt}
              </button>
            ))}
          </div>

          {/* Quantity Counter */}
          <div className="flex flex-col items-center mb-6">
            <div className="flex items-center space-x-6 mb-2">
              <button
                onClick={() => setQty((q) => Math.max(1, q - 1))}
                className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 text-avo-dark"
              >
                <Minus size={20} />
              </button>
              <span className="text-2xl font-bold text-gray-800 w-12">
                {qty}
              </span>
              <button
                onClick={() => setQty((q) => q + 1)}
                className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 text-avo-dark"
              >
                <Plus size={20} />
              </button>
            </div>
            {/* Total Display Badge */}
            <div className="text-avo-main font-semibold bg-avo-cream/30 px-4 py-1 rounded-full text-sm">
              Total: {getTotalDisplay()}
            </div>
          </div>

          {/* Pincode Input Section */}
          <div className="mb-6 text-left">
            <label className="block text-gray-700 text-sm font-bold mb-2 ml-1">
              Delivery Pincode <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <MapPin
                className="absolute left-3 top-3 text-gray-400"
                size={20}
              />
              <input
                type="number"
                placeholder="Enter Pincode (e.g. 700001)"
                value={pincode}
                onChange={(e) => setPincode(e.target.value)}
                className={`w-full pl-10 p-3 rounded-xl border focus:outline-none focus:ring-2 transition-all ${
                  error
                    ? "border-red-500 focus:ring-red-200"
                    : "border-gray-200 focus:border-avo-main focus:ring-avo-light/50"
                }`}
              />
            </div>
            {error && <p className="text-red-500 text-xs mt-1 ml-1">{error}</p>}
          </div>

          <p className="text-sm text-gray-500 italic mb-6">
            *For pricing, please contact us on WhatsApp
          </p>

          <button
            onClick={handleOrder}
            className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white py-4 rounded-xl font-bold text-lg flex items-center justify-center space-x-2 transition-all shadow-md hover:shadow-lg"
          >
            <MessageCircle size={24} />
            <span>Order on WhatsApp</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default OrderSection;
