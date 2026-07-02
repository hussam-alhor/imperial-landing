import { useQuery } from "@tanstack/react-query";
import { getRooms } from "../../services/api";
import RoomCard from "../common/RoomCard";
import RevealOnScroll from "../common/RevealOnScroll";

const RoomsSection = () => {
  const { data: rooms, isLoading, error } = useQuery({ 
    queryKey: ['rooms'], 
    queryFn: getRooms 
  });

  if (isLoading) return <div className="text-center py-20 text-primary font-bold">جاري استعراض الغرف الفاخرة...</div>;
  if (error) return <div className="text-center py-20 text-red-600">عذراً، لم نتمكن من جلب الغرف حالياً.</div>;

  return (
    <section id="rooms-section" className="py-20 px-6 bg-[#F6F1E8] scroll-mt-24">
      <div className="container mx-auto">
        <RevealOnScroll className="text-center mb-12" delay={0.1}>
          <h2 className="text-4xl font-bold text-primary mb-4">غرفنا المتاحة</h2>
          <div className="w-20 h-1 bg-secondary-btn mx-auto" />
        </RevealOnScroll>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {rooms.map((room, index) => (
            <RevealOnScroll key={room.id} delay={0.1 + index * 0.1}>
              <RoomCard room={room} />
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RoomsSection;