import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqData = [
  { q: "هل يتوفر إفطار مجاني مع الحجز؟", a: "نعم، جميع حجوزاتنا تشمل بوفيه إفطار فاخر ومجاني في مطعم الفندق الرئيسي." },
  { q: "ما هي سياسة إلغاء الحجز؟", a: "يمكنك إلغاء الحجز مجاناً قبل 48 ساعة من موعد الوصول." },
  { q: "هل يتوفر مواقف للسيارات؟", a: "نعم، نوفر مواقف خاصة ومجانية لجميع نزلائنا مع خدمة إيقاف السيارات." },
  { q: "هل يمكنني تسجيل الوصول مبكراً؟", a: "يعتمد ذلك على توفر الغرف، سنبذل قصارى جهدنا لتلبية طلبك عند الوصول." }
];

const FAQItem = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div id="faq-section" className="border-b border-gray-200">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex justify-between items-center text-right text-lg font-bold text-primary hover:text-secondary-btn transition"
      >
        <span>{item.q}</span>
        <motion.span animate={{ rotate: isOpen ? 180 : 0 }}>
          <ChevronDown />
        </motion.span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-gray-600 leading-relaxed">{item.a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQ = () => {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="container mx-auto max-w-3xl">
        <h2 className="text-4xl font-bold text-primary text-center mb-12">أسئلة شائعة</h2>
        {faqData.map((item, index) => (
          <FAQItem key={index} item={item} />
        ))}
      </div>
    </section>
  );
};

export default FAQ;
