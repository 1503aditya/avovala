import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import {
  Facebook,
  Instagram,
  Linkedin,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";

// Define the links here for easy management
const SOCIAL_LINKS = [
  { Icon: Facebook, link: "#" }, // Add Facebook link if you have one later
  {
    Icon: Instagram,
    link: "https://www.instagram.com/avowalakol?igsh=MXNtdTc1ZjhnZGFvaw==",
  },
  { Icon: Linkedin, link: "#" }, // Add LinkedIn link if you have one later
];

const Footer = () => {
  const form = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("Sending...");

    // REPLACE THESE WITH YOUR ACTUAL EMAILJS KEYS
    emailjs
      .sendForm(
        "service_3rltsr7",
        "template_36sj2ca",
        form.current,
        "k6tF6VtWnDS75sEX1",
      )
      .then(
        (result) => {
          setStatus("Message Sent! 🥑");
          e.target.reset();
        },
        (error) => {
          setStatus("Failed to send. Try WhatsApp.");
        },
      );
  };

  return (
    <footer id="contact" className="bg-avo-dark text-white pt-16 pb-8">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12">
        {/* Left Side: Brand Info */}
        <div>
          <h2 className="text-3xl font-serif font-bold mb-6">AVOWALA 🥑</h2>
          <p className="text-gray-300 mb-6 max-w-md">
            Delivering the finest, farm-fresh avocados to promote a healthier
            lifestyle for you and your family.
          </p>

          <div className="space-y-4 text-gray-300">
            <div className="flex items-center space-x-3">
              <Mail size={20} className="text-avo-light" />
              <a
                href="mailto:avowalakol@gmail.com"
                className="hover:text-white transition"
              >
                avowalakol@gmail.com
              </a>
            </div>
            <div className="flex items-center space-x-3">
              <Phone size={20} className="text-avo-light" />
              <span>+91 9477547624</span>
            </div>
            <div className="flex items-center space-x-3">
              <MapPin size={20} className="text-avo-light" />
              <span>Kolkata, India</span>
            </div>
          </div>

          {/* Social Media Icons Section */}
          <div className="flex space-x-4 mt-8">
            {SOCIAL_LINKS.map(({ Icon, link }, idx) => (
              <a
                key={idx}
                href={link}
                target="_blank"
                rel="noopener noreferrer" // Security best practice for target="_blank"
                className="p-2 bg-white/10 rounded-full hover:bg-avo-main transition"
              >
                <Icon size={20} />
              </a>
            ))}
          </div>
        </div>

        {/* Right Side: Contact Form */}
        <div className="bg-white/5 p-8 rounded-2xl backdrop-blur-sm">
          <h3 className="text-2xl font-serif mb-4">Get in Touch</h3>
          <form ref={form} onSubmit={sendEmail} className="space-y-4">
            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              required
              className="w-full p-3 rounded bg-white/10 border border-white/20 focus:border-avo-light outline-none transition text-white placeholder-gray-400"
            />
            <input
              type="email"
              name="user_email"
              placeholder="Your Email"
              required
              className="w-full p-3 rounded bg-white/10 border border-white/20 focus:border-avo-light outline-none transition text-white placeholder-gray-400"
            />
            <input
              type="tel"
              name="user_phone"
              placeholder="Phone Number"
              className="w-full p-3 rounded bg-white/10 border border-white/20 focus:border-avo-light outline-none transition text-white placeholder-gray-400"
            />
            <textarea
              name="message"
              rows="3"
              placeholder="Message"
              required
              className="w-full p-3 rounded bg-white/10 border border-white/20 focus:border-avo-light outline-none transition text-white placeholder-gray-400"
            ></textarea>

            <button
              type="submit"
              className="w-full bg-avo-main hover:bg-avo-light text-avo-dark font-bold py-3 rounded transition"
            >
              {status || "Send Message"}
            </button>
          </form>
        </div>
      </div>

      <div className="text-center text-gray-400 mt-16 text-sm border-t border-white/10 pt-8">
        © {new Date().getFullYear()} AVOWALA. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
