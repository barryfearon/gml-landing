"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import heroImg from "../public/gml-hero-banner-xwide-x1.png";
import devTeam from "../public/developer-team-1369460255.jpg";
import webDev from "../public/webdev-services-1082352287.jpg";
import webDesign from "../public/webdesign-2334924885.jpg";
import confCall from "../public/conference-call-1733849612.jpg";
import redesign from "../public/redesign-2528186535.jpg";
import eCommerce from "../public/ecommerce-2470294377.jpg";
import smallBiz from "../public/small-business-2475094055.jpg";
import customWeb from "../public/custom-web-dev-15797485.jpg";
import affordableWeb from "../public/affordable-163185698.jpg";
import responsiveWeb from "../public/responsive-design-concept-193510469.jpg";
import elevateImg from "../public/elevate-1625681305.jpg";

export default function HomePage() {
  // Common animation variants for fade-in from below
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <main className="flex flex-col items-center justify-center w-full bg-gml-design">
      {/* ========== HERO SECTION ========== */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        className="w-full mx-auto overflow-visible"
      >
        <div className="position-relative float-right right-[50%]">
          <Image
            src={heroImg}
            alt="Hero Placeholder"
            width={2400}
            height={600}
            className="right-[50%]"
            priority
          />
        </div>
      </motion.div>
      <section className="relative w-full bg-gml-softGray py-12 px-6">
        <motion.div
          className="max-w-5xl mx-auto text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h1 className="text-3xl md:text-5xl font-bold mb-4 text-gml-design">
            Empower Your Business with Professional Website Development
          </h1>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
            In today’s digital age, your website is often the first impression
            potential customers have of your business. Our team, based in the
            Isle of Man, proudly serves clients across the UK—crafting modern,
            responsive, and conversion-focused websites that help you stand out.
          </p>
        </motion.div>

        {/* HERO CTA (Unique) */}
        <motion.div
          className="max-w-5xl mx-auto mt-8 flex justify-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <button
            className="px-6 py-3 bg-gml-neonOrange text-white font-semibold rounded hover:bg-gml-neonOrangeDark transition"
            aria-label="CTA: Hero - Let's Grow Together"
          >
            Let’s Grow Together
          </button>
        </motion.div>
      </section>

      {/* ========== SECTION 1: Why You Need a Professional Website Dev in the UK ========== */}
      <motion.section
        className="max-w-5xl mx-auto py-12 px-6 bg-gml-design"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-100">
          Why You Need a Professional Website Development Company in the UK
        </h2>
        <p className="text-gray-100 mb-4">
          Choosing a <strong>website development company UK</strong> is about
          more than coding and pretty pages. It&apos;s about partnering with
          experts who can translate your business strategy into a seamless
          online experience. A professional web development team ensures
          optimized performance, conversion-focused design, scalable
          architecture, and robust security. Our knowledge of the UK market
          enables us to craft sites that resonate with local audiences—while
          still appealing to the global stage.
        </p>
        <div className="flex justify-center my-6">
          <Image
            src={devTeam}
            alt="Professional Website Development"
            width={800}
            height={400}
            className="rounded shadow"
          />
        </div>

        {/* CTA 1 (Unique) */}
        <div className="text-center mt-6">
          <button
            className="px-6 py-3 bg-gml-neonOrange text-white font-semibold rounded hover:bg-gml-neonOrangeDark transition"
            aria-label="CTA: Discuss Your Project"
          >
            Discuss Your Project
          </button>
        </div>
      </motion.section>

      {/* ========== SECTION 2: Comprehensive Web Dev Services ========== */}
      <motion.section
        className="bg-gml-softGray w-full py-12 px-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gml-design">
            Comprehensive Web Development Services UK Businesses Trust
          </h2>
          <p className="text-gray-700 mb-4">
            Our <strong>web development services UK</strong> package caters to
            startups, e-commerce ventures, and established enterprises alike.
            From custom builds to popular CMS platforms, we ensure each site is
            robust, scalable, and tailored to your unique goals. Whether you
            need an online store, a maintenance plan, or a responsive design
            overhaul, we have the expertise to turn your vision into reality.
          </p>
          <ul className="list-disc list-inside ml-4 text-gray-700">
            <li>Custom Website Development</li>
            <li>CMS Integration</li>
            <li>E-commerce Web Development</li>
            <li>Website Maintenance &amp; Support</li>
            <li>Responsive &amp; Mobile-Friendly Designs</li>
          </ul>
        </div>
        <motion.div
          className="max-w-5xl mx-auto mt-6 flex justify-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <Image
            src={webDev}
            alt="Comprehensive Web Dev"
            width={800}
            height={400}
            className="rounded shadow"
          />
        </motion.div>

        {/* CTA 2 (Unique) */}
        <div className="text-center mt-6">
          <button
            className="px-6 py-3 bg-gml-neonOrange text-white font-semibold rounded hover:bg-gml-neonOrangeDark transition"
            aria-label="CTA: Start Building Now"
          >
            Start Building Now
          </button>
        </div>
      </motion.section>

      {/* ========== SECTION 3: Advantages of a Website Design Company in the Isle of Man ========== */}
      <motion.section
        className="max-w-5xl mx-auto py-12 px-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-100">
          The Advantages of a Website Design Company in the Isle of Man
        </h2>
        <p className="text-gray-100 mb-4">
          Partnering with a <strong>website design company Isle of Man</strong>{" "}
          means personalized service, local market insight, and an agile
          approach. Despite being a small jurisdiction, the Isle of Man boasts a
          thriving technology scene, offering cost-effective, cutting-edge
          solutions. We’ve worked with local entrepreneurs and large
          organizations alike, bringing the same level of dedication and
          expertise to every project.
        </p>
        <div className="flex justify-center my-6">
          <Image
            src={webDesign}
            alt="Isle of Man Web Design"
            width={800}
            height={400}
            className="rounded shadow"
          />
        </div>

        {/* CTA 3 (Unique) */}
        <div className="text-center mt-6">
          <button
            className="px-6 py-3 bg-gml-neonOrange text-white font-semibold rounded hover:bg-gml-neonOrangeDark transition"
            aria-label="CTA: Contact Our Isle of Man Team"
          >
            Contact Our Isle of Man Team
          </button>
        </div>
      </motion.section>

      {/* ========== SECTION 4: Searching for a Web Agency Near Me? ========== */}
      <motion.section
        className="bg-gml-softGray w-full py-12 px-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gml-design">
            Searching for a Web Agency Near Me? Here’s Why Location Matters Less
          </h2>
          <p className="text-gray-700 mb-4">
            Thanks to modern communication tools, partnering with a{" "}
            <strong>web agency near me</strong>
            doesn’t need to be literal. Our team collaborates seamlessly with
            clients across the UK through video calls, messaging, and project
            management software. If you do prefer face-to-face meetings, the
            Isle of Man is just a short flight or ferry ride away.
          </p>
        </div>

        <div className="flex justify-center my-6">
          <Image
            src={confCall}
            alt="Web Agency Near Me - Isle of Man"
            width={800}
            height={400}
            className="rounded shadow"
          />
        </div>

        {/* CTA 4 (Unique) */}
        <div className="text-center mt-6">
          <button
            className="px-6 py-3 bg-gml-neonOrange text-white font-semibold rounded hover:bg-gml-neonOrangeDark transition"
            aria-label="CTA: Schedule a Virtual Meeting"
          >
            Schedule a Virtual Meeting
          </button>
        </div>
      </motion.section>

      {/* ========== SECTION 5: Website Redesign Services UK ========== */}
      <motion.section
        className="max-w-5xl mx-auto py-12 px-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-100">
          Website Redesign Services UK: Revitalize Your Online Presence
        </h2>
        <p className="text-gray-100 mb-4">
          Our <strong>website redesign services UK</strong> bring outdated,
          underperforming sites back to life. We conduct a thorough audit before
          crafting a strategic plan to improve everything from user experience
          to SEO. Whether you’re refreshing your homepage or implementing a full
          content migration, we minimize downtime while maximizing impact.
        </p>
        <div className="flex justify-center my-6">
          <Image
            src={redesign}
            alt="Website Redesign"
            width={800}
            height={400}
            className="rounded shadow"
          />
        </div>

        {/* CTA 5 (Unique) */}
        <div className="text-center mt-6">
          <button
            className="px-6 py-3 bg-gml-neonOrange text-white font-semibold rounded hover:bg-gml-neonOrangeDark transition"
            aria-label="CTA: Revamp Your Website"
          >
            Revamp Your Website
          </button>
        </div>
      </motion.section>

      {/* ========== SECTION 6: Ecommerce Web Development UK ========== */}
      <motion.section
        className="bg-gml-softGray w-full py-12 px-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gml-design">
            Ecommerce Web Development UK: Expand Your Market
          </h2>
          <p className="text-gray-700 mb-4">
            Our <strong>ecommerce web development UK</strong> services open new
            revenue streams, connecting you to a global audience. From secure
            payment solutions and intuitive shopping carts to scalable inventory
            management and integrated marketing tools, we build robust online
            storefronts that keep customers coming back.
          </p>
          <div className="flex justify-center my-6">
            <Image
              src={eCommerce}
              alt="Ecommerce Web Development"
              width={800}
              height={400}
              className="rounded shadow"
            />
          </div>
        </div>

        {/* CTA 6 (Unique) */}
        <div className="text-center mt-6">
          <button
            className="px-6 py-3 bg-gml-neonOrange text-white font-semibold rounded hover:bg-gml-neonOrangeDark transition"
            aria-label="CTA: Launch Your Online Store"
          >
            Launch Your Online Store
          </button>
        </div>
      </motion.section>

      {/* ========== SECTION 7: Best Website Developers for Small Business ========== */}
      <motion.section
        className="max-w-5xl mx-auto py-12 px-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-100">
          Best Website Developers for Small Business: Our Approach
        </h2>
        <p className="text-gray-100 mb-4">
          Small businesses often operate with tight budgets and lean teams.
          That’s why you need the{" "}
          <strong>best website developers for small business</strong> on your
          side. Our approach focuses on quick lead generation,
          cost-effectiveness, and highlighting the unique story behind your
          brand. We craft sites that look premium without breaking the bank.
        </p>
        <div className="flex justify-center my-6">
          <Image
            src={smallBiz}
            alt="Ecommerce Web Development"
            width={800}
            height={400}
            className="rounded shadow"
          />
        </div>

        {/* CTA 7 (Unique) */}
        <div className="text-center mt-6">
          <button
            className="px-6 py-3 bg-gml-neonOrange text-white font-semibold rounded hover:bg-gml-neonOrangeDark transition"
            aria-label="CTA: Kickstart Your Small Business Website"
          >
            Kickstart Your Small Business Website
          </button>
        </div>
      </motion.section>

      {/* ========== SECTION 8: Custom Web Development Solutions ========== */}
      <motion.section
        className="bg-gml-softGray w-full py-12 px-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gml-design">
            Custom Web Development Solutions Tailored to You
          </h2>
          <p className="text-gray-700 mb-4">
            Our <strong>custom web development solutions</strong> are perfect
            for businesses needing unique features or complex integrations. From
            advanced membership portals to interactive product configurators, we
            build from the ground up—ensuring an optimal performance, a
            distinctive look, and the flexibility to grow with your
            organization.
          </p>
          <div className="flex justify-center my-6">
            <Image
              src={customWeb}
              alt="Custom Web Development"
              width={800}
              height={400}
              className="rounded shadow"
            />
          </div>
        </div>

        {/* CTA 8 (Unique) */}
        <div className="text-center mt-6">
          <button
            className="px-6 py-3 bg-gml-neonOrange text-white font-semibold rounded hover:bg-gml-neonOrangeDark transition"
            aria-label="CTA: Get a Custom Quote"
          >
            Get a Custom Quote
          </button>
        </div>
      </motion.section>

      {/* ========== SECTION 9: Affordable Web Design for Startups & Entrepreneurs ========== */}
      <motion.section
        className="max-w-5xl mx-auto py-12 px-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-100">
          Affordable Web Design for Startups &amp; Entrepreneurs
        </h2>
        <p className="text-gray-100 mb-4">
          Our <strong>affordable web design for startups</strong> caters to the
          unique needs of budding businesses—maximizing impact on a limited
          budget. From streamlined designs to cost-effective hosting, we ensure
          your site has the essential features to make a strong first impression
          and attract potential investors or partners.
        </p>
        <div className="flex justify-center my-6">
          <Image
            src={affordableWeb}
            alt="Custom Web Development"
            width={800}
            height={400}
            className="rounded shadow"
          />
        </div>

        {/* CTA 9 (Unique) */}
        <div className="text-center mt-6">
          <button
            className="px-6 py-3 bg-gml-neonOrange text-white font-semibold rounded hover:bg-gml-neonOrangeDark transition"
            aria-label="CTA: Accelerate Your Startup"
          >
            Accelerate Your Startup
          </button>
        </div>
      </motion.section>

      {/* ========== SECTION 10: Responsive Website Development Agency ========== */}
      <motion.section
        className="bg-gml-softGray w-full py-12 px-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gml-design">
            Responsive Website Development Agency: Why Responsiveness Matters
          </h2>
          <p className="text-gray-700 mb-4">
            As a <strong>responsive website development agency</strong>, we
            ensure your site looks and functions flawlessly on devices of all
            sizes. Responsive design not only improves user experience but also
            boosts your search engine ranking, giving your business a
            competitive edge in today’s mobile-driven world.
          </p>
          <div className="flex justify-center my-6">
            <Image
              src={responsiveWeb}
              alt="Responsive Development"
              width={800}
              height={400}
              className="rounded shadow"
            />
          </div>
        </div>

        {/* CTA 10 (Unique) */}
        <div className="text-center mt-6">
          <button
            className="px-6 py-3 bg-gml-neonOrange text-white font-semibold rounded hover:bg-gml-neonOrangeDark transition"
            aria-label="CTA: Optimize for Every Device"
          >
            Optimize for Every Device
          </button>
        </div>
      </motion.section>

      {/* ========== FINAL CALL-TO-ACTION ========== */}
      <motion.section
        className="max-w-5xl mx-auto py-12 px-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-100">
          Ready to Elevate Your Online Presence?
        </h2>
        <p className="text-gray-100 mb-4">
          From startups to established enterprises, we’re dedicated to driving
          results through top-quality web development. If you’re looking for{" "}
          <strong>website redesign services UK</strong>, a new online storefront
          via our <strong>ecommerce web development UK</strong> solutions, or a
          partner for ongoing maintenance, we’d love to hear from you.
        </p>
        <p className="text-gray-100 mb-4">
          <strong>Take the Next Step:</strong> Contact us today for a free
          consultation and discover how our commitment to excellence, technical
          expertise, and passion for design can propel your business forward. We
          can’t wait to bring your vision to life.
        </p>
        <div className="flex justify-center my-6">
          <Image
            src={elevateImg}
            alt="Responsive Development"
            width={800}
            height={400}
            className="rounded shadow"
          />
        </div>

        {/* FINAL CTA (Unique) */}
        <div className="text-center mt-6">
          <button
            className="mt-6 px-6 py-3 bg-gml-neonOrange text-white font-semibold rounded hover:bg-gml-neonOrangeDark transition"
            aria-label="CTA: Elevate Your Online Presence"
          >
            Elevate Your Online Presence
          </button>
        </div>
      </motion.section>
    </main>
  );
}
