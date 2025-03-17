"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";

/**
 * A "Fat Footer" component for Next.js (TypeScript) + Tailwind CSS
 * Includes:
 * - Branding placeholder
 * - Navigation items for each landing page section
 * - Placeholder partner logos
 * - Contact form
 */

const Footer = () => {
  // For demonstration only; replace with your own form handling logic:
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // You could handle form submission here (e.g., API call)
    alert(`Thank you, ${formData.name}! Your message has been submitted.`);
    // Reset form
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <footer className="w-full bg-gray-900 text-gray-200 px-6 py-12" id="footer">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* ========== 1. Company Branding  ========== */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Your Brand</h2>
          <p className="text-sm text-gray-400">
            (Placeholder text)
            <br />
            1234 Example Street
            <br />
            Isle of Man, IM1
            <br />
            United Kingdom
          </p>
        </div>

        {/* ========== 2. Navigation for Each Section ========== */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Quick Links</h2>
          <nav className="flex flex-col space-y-2">
            {/* Replace the href anchors (#...) with real routes or anchors in your landing page */}
            <Link
              href="#hero-section"
              className="hover:text-white transition-colors"
            >
              Hero Section
            </Link>
            <Link
              href="#why-professional"
              className="hover:text-white transition-colors"
            >
              Why Professional Web Dev
            </Link>
            <Link
              href="#comprehensive-services"
              className="hover:text-white transition-colors"
            >
              Comprehensive Services
            </Link>
            <Link
              href="#isle-of-man-advantages"
              className="hover:text-white transition-colors"
            >
              Isle of Man Advantages
            </Link>
            <Link
              href="#web-agency-near-me"
              className="hover:text-white transition-colors"
            >
              Web Agency Near Me
            </Link>
            <Link
              href="#website-redesign"
              className="hover:text-white transition-colors"
            >
              Website Redesign
            </Link>
            <Link
              href="#ecommerce-dev"
              className="hover:text-white transition-colors"
            >
              Ecommerce Web Dev
            </Link>
            <Link
              href="#small-business-dev"
              className="hover:text-white transition-colors"
            >
              Small Business Dev
            </Link>
            <Link
              href="#custom-web-dev"
              className="hover:text-white transition-colors"
            >
              Custom Web Dev
            </Link>
            <Link
              href="#affordable-startups"
              className="hover:text-white transition-colors"
            >
              Affordable for Startups
            </Link>
            <Link
              href="#responsive-dev"
              className="hover:text-white transition-colors"
            >
              Responsive Dev Agency
            </Link>
            <Link
              href="#final-cta"
              className="hover:text-white transition-colors"
            >
              Final CTA
            </Link>
          </nav>
        </div>

        {/* ========== 3. Placeholder Partner Logos ========== */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Our Partners</h2>
          <div className="grid grid-cols-2 gap-4">
            {/* Replace with actual logos or sponsor images */}
            <div className="bg-gray-800 w-full h-12 flex items-center justify-center rounded">
              <span className="text-gray-400 text-sm">Logo 1</span>
            </div>
            <div className="bg-gray-800 w-full h-12 flex items-center justify-center rounded">
              <span className="text-gray-400 text-sm">Logo 2</span>
            </div>
            <div className="bg-gray-800 w-full h-12 flex items-center justify-center rounded">
              <span className="text-gray-400 text-sm">Logo 3</span>
            </div>
            <div className="bg-gray-800 w-full h-12 flex items-center justify-center rounded">
              <span className="text-gray-400 text-sm">Logo 4</span>
            </div>
          </div>
        </div>

        {/* ========== 4. Contact Form ========== */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
          <form onSubmit={handleSubmit} className="flex flex-col space-y-2">
            <input
              type="text"
              name="name"
              placeholder="Name"
              required
              value={formData.name}
              onChange={handleChange}
              className="rounded p-2 bg-gray-800 text-gray-100 placeholder-gray-400 focus:outline-none"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              value={formData.email}
              onChange={handleChange}
              className="rounded p-2 bg-gray-800 text-gray-100 placeholder-gray-400 focus:outline-none"
            />
            <textarea
              name="message"
              placeholder="Message"
              required
              rows={3}
              value={formData.message}
              onChange={handleChange}
              className="rounded p-2 bg-gray-800 text-gray-100 placeholder-gray-400 focus:outline-none"
            />
            <button
              type="submit"
              className="bg-gml-neonOrange hover:bg-gml-neonOrangeDark text-white font-semibold py-2 px-4 rounded transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Footer Bar / Copyright */}
      <div className="mt-8 border-t border-gray-700 pt-4 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} Your Company. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
