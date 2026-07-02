import { motion } from "framer-motion";

const RoomCard = ({ room }) => {
  // رقم هاتفك (استبدله برقمك الحقيقي بصيغة دولية بدون + أو 00)
  const phoneNumber = "963935562123"; 
  
  // تجهيز نص الرسالة للواتساب
  const message = `مرحباً، أود حجز الغرفة رقم: ${room.roomNumber} - النوع: ${room.type} - السعر: ${room.pricePerNight} ريال/ليلة.`;
  
  // إنشاء رابط الواتساب المشفر
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <motion.div 
      whileHover={{ y: -10 }}
      className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-100 transition-all duration-300"
    >
      {/* الصورة */}
      <div className="relative h-64 w-full overflow-hidden">
        <img 
          src={room.images[0] || "/img/default-room.jpg"} 
          alt={room.type} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" 
        />
        {/* شارة الفئة (Category Tag) */}
        <div className="absolute top-4 left-4 bg-primary text-white text-xs px-3 py-1 rounded-full font-bold">
          {room.category}
        </div>
      </div>
      
      {/* التفاصيل */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-primary mb-2">{room.type}</h3>
        
        <p className="text-3xl font-bold text-secondary-btn mb-4">
          {room.pricePerNight} <span className="text-sm text-gray-500 font-normal">ريال / ليلة</span>
        </p>
        
        {/* الخدمات (Amenities) */}
        <div className="flex flex-wrap gap-2 mb-6">
          {room.amenities.map((item, index) => (
            <span key={index} className="text-[10px] bg-secondary-background px-3 py-1 rounded-full text-secondary-text uppercase tracking-wider">
              {item}
            </span>
          ))}
        </div>

        {/* زر الحجز عبر واتساب */}
        <a 
          href={whatsappUrl} 
          target="_blank" 
          rel="noopener noreferrer"
          className="block w-full py-3 text-center border-2 border-primary text-primary font-bold hover:bg-primary hover:text-white transition duration-300 uppercase tracking-widest"
        >
          احجز عبر واتساب
        </a>
      </div>
    </motion.div>
  );
};

export default RoomCard;