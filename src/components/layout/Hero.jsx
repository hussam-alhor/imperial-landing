import { motion } from "framer-motion";
import RevealOnScroll from "../common/RevealOnScroll";

const Hero = () => {
  return (
    
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* الصورة كخلفية كاملة */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/img/hero.png')" }}
      />
      
      {/* طبقة تظليل لزيادة تباين النص */}
      <div className="absolute inset-0 bg-black/40" />

      {/* المحتوى */}
      <div className="relative z-10 text-center px-4">
        <RevealOnScroll delay={0.1} y={24} duration={0.7}>
          <motion.h1 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="text-5xl md:text-7xl font-bold text-white mb-6"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            فخامة لا تُنسى
          </motion.h1>
        </RevealOnScroll>
        
        <RevealOnScroll delay={0.25} y={24} duration={0.7}>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="text-xl text-white/90 mb-8 max-w-2xl mx-auto"
          >
            اكتشف الراحة المطلقة في Imperial Haven، حيث تلتقي العراقة بالخدمة الاستثنائية.
          </motion.p>
        </RevealOnScroll>

        <RevealOnScroll delay={0.4} y={24} duration={0.7}>
          <motion.a
            href="#rooms-section"
            whileHover={{ scale: 1.05 }}
            className="bg-secondary-btn text-white px-10 py-3 rounded-sm hover:bg-secondary-hover transition inline-block"
          >
            احجز إقامتك الآن
          </motion.a>
        </RevealOnScroll>
      </div>
    </section>
  );
};

export default Hero;