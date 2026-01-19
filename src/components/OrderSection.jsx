import React, { useState } from "react";
import { motion } from "framer-motion";
import { MessageCircle, ShoppingBag, Plus, Minus } from "lucide-react";

const OrderSection = () => {
  const [unit, setUnit] = useState("500 gm");
  const [qty, setQty] = useState(1);

  const handleOrder = () => {
    const phoneNumber = "919477547624";
    const text = `Hello AVOWALA! 🥑\nI would like to order:\n\n*Item:* Premium Avocados\n*Unit:* ${unit}\n*Quantity:* ${qty}\n\nPlease let me know the price and availability.`;
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
          <div className="flex justify-center space-x-4 mb-8">
            {["500 gm", "1 kg", "1 piece"].map((opt) => (
              <button
                key={opt}
                onClick={() => {
                  setUnit(opt);
                  setQty(1);
                }}
                className={`px-4 py-2 rounded-lg font-medium transition-all ${
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
          <div className="flex items-center justify-center space-x-6 mb-8">
            <button
              onClick={() => setQty((q) => Math.max(1, q - 1))}
              className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 text-avo-dark"
            >
              <Minus size={20} />
            </button>
            <span className="text-2xl font-bold text-gray-800 w-12">{qty}</span>
            <button
              onClick={() => setQty((q) => q + 1)}
              className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 text-avo-dark"
            >
              <Plus size={20} />
            </button>
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
