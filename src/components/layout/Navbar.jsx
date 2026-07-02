import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <motion.nav 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed top-0 left-0 w-full z-50 transition-all duration-500 bg-gradient-to-b from-[#6B1F2B]/80 to-transparent py-4"
    >
      <div className="container mx-auto flex justify-between items-center px-6">
        {/* اللوجو */}
        <div className="w-24">
          <img src="/img/logo.png" alt="Imperial Hotel" className="w-full h-auto" />
        </div>
        
        {/* الروابط */}
        <div className="hidden md:flex gap-8 text-white font-medium">
          <a href="#" className="hover:text-secondary-light transition">الرئيسية</a>
          <a href="#rooms-section" className="hover:text-secondary-light transition">الغرف</a>
          <a href="#faq-section" className="hover:text-secondary-light transition">الاسئلة الشائعة</a>
        </div>
    
        {/* زر الحجز */}
        <a
          href="#rooms-section"
          className="border border-secondary-btn text-white px-6 py-2 hover:bg-secondary-btn transition duration-300 inline-block"
        >
          احجز الآن
        </a>
      </div>
    </motion.nav>
  );
};

export default Navbar;