import { motion } from "framer-motion";
import { Star } from "lucide-react";
import RevealOnScroll from "../common/RevealOnScroll";

const testimonials = [
  { name: "أحمد السعد", role: "رجل أعمال", text: "تجربة ملكية بكل ما تحمله الكلمة من معنى. الخدمة كانت استثنائية." },
  { name: "سارة خالد", role: "عائلة", text: "الفندق نظيف جداً، والمرافق رائعة، خاصة النادي الصحي. سنعود حتماً!" },
  { name: "ماركوس جونسون", role: "سائح", text: "إطلالة الغرف مذهلة، وفريق العمل متعاون للغاية. شكرًا لكم." }
];

const Testimonials = () => {
  return (
    <section className="relative py-20 px-6 overflow-hidden">
      {/* الصورة تُحمّل لاحقاً لأنها ليست ضرورية للظهور الفوري */}
      <img
        src="/img/hotel-interior-blur.png"
        alt=""
        aria-hidden="true"
        loading="lazy"
        decoding="async"
        className="absolute inset-0 w-full h-full object-cover"
      />
      
      {/* طبقة تظليل (Overlay) - مهم جداً للقراءة */}
      <div className="absolute inset-0 bg-primary/80" />

      {/* المحتوى */}
      <div className="container mx-auto relative z-10">
        <RevealOnScroll className="text-center mb-16" delay={0.1}>
          <h2 className="text-4xl font-bold text-white mb-4">ماذا يقول ضيوفنا؟</h2>
          <div className="w-20 h-1 bg-secondary-btn mx-auto" />
        </RevealOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <RevealOnScroll 
              key={index}
              delay={0.1 + index * 0.12}
              className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20"
            >
              {/* التقييم */}
              <div className="flex text-secondary-btn mb-4">
                {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
              </div>
              
              <p className="text-white/90 mb-6 italic font-light">"{t.text}"</p>
              
              <div className="border-t border-white/20 pt-4">
                <h4 className="font-bold text-white">{t.name}</h4>
                <p className="text-sm text-white/60">{t.role}</p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;