import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

import Header from "./components/Header";
import Hero from "./components/Hero";
import OrderSection from "./components/OrderSection";
import Footer from "./components/Footer";
import { BENEFITS, RECIPES } from "./data/content";

import benefitsImg from "../src/assets/B1.png";

// Simple FadeIn Wrapper
const FadeIn = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.6 }}
  >
    {children}
  </motion.div>
);

function App() {
  return (
    <HelmetProvider>
      <div className="font-sans text-gray-800 antialiased selection:bg-avo-light selection:text-avo-dark">
        <Helmet>
          <title>AVOWALA | Premium Organic Avocados in India</title>
          <meta
            name="description"
            content="Farm-fresh, organic avocados delivered to your doorstep. Rich in nutrients, perfect for a healthy lifestyle. Order now on WhatsApp!"
          />
          <meta
            name="keywords"
            content="Fresh avocados, Organic avocados, Healthy fruits, Avocado supplier India, AVOWALA, Keto diet"
          />
        </Helmet>

        <Header />
        <Hero />

        {/* Vision Section */}
        <section className="py-20 px-6 bg-white text-center">
          <FadeIn>
            <div className="max-w-4xl mx-auto">
              <h2 className="text-sm font-bold tracking-widest text-avo-main uppercase mb-4">
                Our Vision
              </h2>
              <p className="text-xl md:text-3xl font-serif leading-relaxed text-gray-700">
                "Our vision at{" "}
                <span className="text-avo-dark font-bold">AVOWALA</span> is to
                make fresh, premium-quality avocados easily accessible to
                everyone. We are committed to delivering consistent freshness,
                trust, and superior nutrition."
              </p>
            </div>
          </FadeIn>
        </section>

        <OrderSection />

        {/* Benefits Section */}
        <section id="benefits" className="py-20 px-6 bg-white">
          <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
            <FadeIn>
              <div className="relative">
                <div className="absolute -inset-4 bg-avo-cream rounded-full opacity-50 blur-3xl"></div>
                {/* NOTE: If you want to use a local image here:
                   1. Import it at the top: import benefitImg from './assets/benefit.png';
                   2. Replace the src string below with {benefitImg} 
                */}
                <img
                  src={benefitsImg}
                  alt="Fresh Avocado"
                  className="relative z-10 rounded-3xl shadow-2xl transform -rotate-6 hover:rotate-0 transition duration-500"
                />
              </div>
            </FadeIn>

            <FadeIn>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-avo-dark mb-8">
                Why Choose Avocados?
              </h2>
              <ul className="space-y-4">
                {BENEFITS.map((benefit, i) => (
                  <li key={i} className="flex items-start space-x-3">
                    <CheckCircle
                      className="text-avo-main flex-shrink-0 mt-1"
                      size={20}
                    />
                    <span className="text-lg text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </FadeIn>
          </div>
        </section>

        {/* Recipes Section */}
        <section id="recipes" className="py-20 px-6 bg-avo-cream/20">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-avo-dark mb-4">
                Delicious Ways to Enjoy
              </h2>
              <p className="text-gray-600">
                Simple, healthy, and tasty recipes to try at home.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {RECIPES.map((recipe, idx) => (
                <FadeIn key={idx}>
                  <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 h-full">
                    <img
                      src={recipe.img}
                      alt={recipe.title}
                      className="w-full h-48 hover:scale-105 transition duration-500"
                    />
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-avo-dark mb-2">
                        {recipe.title}
                      </h3>
                      {/* CRITICAL UPDATE: whitespace-pre-line added below */}
                      <p className="text-gray-600 text-sm whitespace-pre-line leading-relaxed">
                        {recipe.desc}
                      </p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* About Us */}
        <section
          id="about"
          className="py-20 px-6 bg-avo-dark text-white text-center"
        >
          <FadeIn>
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
                About AVOWALA
              </h2>
              <p className="text-lg leading-relaxed text-gray-200 mb-6">
                We believe that good health starts with good food. At AVOWALA,
                we don't just sell avocados; we deliver a promise of purity. Our
                avocados are sourced directly from sustainable farms, ensuring
                that every fruit you receive is chemically free, perfectly aged,
                and packed with nature's goodness.
              </p>
              <p className="text-lg leading-relaxed text-gray-200">
                Whether you are a gym enthusiast looking for healthy fats, a
                parent seeking nutritious options for your kids, or a chef
                creating culinary masterpieces, AVOWALA is your trusted partner
                in freshness.
              </p>
            </div>
          </FadeIn>
        </section>

        <Footer />
      </div>
    </HelmetProvider>
  );
}

export default App;
