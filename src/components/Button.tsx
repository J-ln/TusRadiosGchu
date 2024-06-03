"use client";
import React from "react";
import { motion } from "framer-motion";

const Button = () => {
  return (
    <a href="#">
      <motion.div className="text-gray-900/80 font-black text-sm flex justify-center items-center h-12 w-28 rounded-xl contact-btn-bg">
        CONTACTO
      </motion.div>
    </a>
  );
};

export default Button;
