// src/pages/Products.jsx
import React from "react";
import { motion } from "framer-motion";

const Products = () => {
  return (
    <motion.div
      className="products"
      initial={{ x: "-100vw" }}
      animate={{ x: 0 }}
      transition={{ type: "spring", stiffness: 50 }}
    >
      <h2>Our Products</h2>
      <p>Explore our cutting-edge software solutions.</p>
    </motion.div>
  );
};

export default Products;