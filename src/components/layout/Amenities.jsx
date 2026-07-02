import ParallaxSection from "./ParallaxSection";
import { motion } from "framer-motion";
import { Wifi, Coffee, Dumbbell, Utensils, Car, ShieldCheck } from "lucide-react";
import RevealOnScroll from "../common/RevealOnScroll";

const amenityList = [
  { icon: <Wifi size={30} />, title: "واي فاي فائق السرعة", desc: "بقاء متصل في كافة أنحاء الفندق." },
  { icon: <Coffee size={30} />, title: "ضيافة فاخرة", desc: "قهوة مختصة وخدمة غرف 24 ساعة." },
  { icon: <Dumbbell size={30} />, title: "نادي صحي", desc: "تجهيزات رياضية بأحدث المواصفات." },
  { icon: <Utensils size={30} />, title: "مطاعم عالمية", desc: "أشهى الأطباق من كبار الطهاة." },
  { icon: <Car size={30} />, title: "مواقف خاصة", desc: "خدمة إيقاف السيارات للنزلاء." },
  { icon: <ShieldCheck size={30} />, title: "أمن وخصوصية", desc: "أعلى معايير الأمان والخصوصية." },
];
const Amenities = () => {
  return (
    
    <ParallaxSection imageUrl="/img/gym.png" overlayColor="bg-primary/70" strength={200}>
      <RevealOnScroll className="text-center mb-16" delay={0.1}>
        <h2 className="text-4xl font-bold text-white mb-4">تجربة إقامة متكاملة</h2>
        <div className="w-20 h-1 bg-secondary-btn mx-auto" />
      </RevealOnScroll>

      <div  id="amenities-section" className="grid grid-cols-2 md:grid-cols-3 gap-10">
        {amenityList.map((item, index) => (
          <RevealOnScroll
            key={index}
            delay={0.1 + index * 0.08}
            className="flex flex-col items-center text-center p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/10"
          >
            <div className="text-secondary-btn mb-4">{item.icon}</div>
            <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
            <p className="text-gray-200 text-sm">{item.desc}</p>
          </RevealOnScroll>
        ))}
      </div>
    </ParallaxSection>
  );
};

export default Amenities;