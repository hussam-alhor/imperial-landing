import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const ParallaxSection = ({ children, imageUrl, overlayColor = "bg-primary/85", strength = 300 }) => {
  const ref = useRef(null);
  
  // ربط حركة التمرير (Scroll) بالقسم الحالي
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"], // يبدأ الأنيميشن عندما يدخل القسم للشاشة وينتهي عندما يخرج
  });

  // تحويل قيمة الـ Scroll إلى حركة عمودية (Translate Y)
  // كلما زاد الـ strength، زادت مسافة حركة الصورة
  const y = useTransform(scrollYProgress, [0, 1], [-strength, strength]);

  return (
    <section ref={ref} className="relative py-32 px-6 overflow-hidden min-h-[60vh] flex items-center justify-center">
      {/* طبقة الصورة المتحركة (Parallax Image) */}
      <motion.img
        src={imageUrl}
        alt=""
        aria-hidden="true"
        loading="lazy"
        decoding="async"
        className="absolute inset-0 z-0 w-full h-full object-cover scale-110"
        style={{ y }}
      />
      
      {/* طبقة التظليل (Overlay) لضمان قراءة النصوص */}
      <div className={`absolute inset-0 z-10 ${overlayColor}`} />

      {/* المحتوى (يأتي فوق الخلفية والتظليل) */}
      <div className="container mx-auto relative z-20">
        {children}
      </div>
    </section>
  );
};

export default ParallaxSection;