import { motion } from "framer-motion";

const RevealOnScroll = ({ children, className = "", delay = 0, y = 30, duration = 0.6 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default RevealOnScroll;
