
import React from 'react';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <h1 className="text-3xl font-bold underline">Welcome to Home!</h1>
    </motion.div>
  );
};
  