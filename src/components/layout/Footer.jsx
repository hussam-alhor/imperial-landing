 const Footer = () => {
  return (
    <footer className="bg-primary text-white py-16 px-6 border-t border-secondary-btn/30">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-right">
        
        {/* القسم الأول: الشعار */}
        <div className="flex flex-col items-center md:items-start">
          <img src="/img/logo.png" alt="Logo" className="w-32 mb-4" />
          <p className="text-gray-400 text-sm leading-relaxed">
            Imperial Haven، حيث تلتقي الفخامة بالراحة. وجهتك الأولى للاستجمام في قلب المدينة.
          </p>
        </div>

        {/* القسم الثاني: روابط سريعة */}
        <div>
          <h4 className="text-secondary-btn font-bold mb-6">روابط سريعة</h4>
          <ul className="space-y-4 text-gray-300">
            <li><a href="#" className="hover:text-white transition">الرئيسية</a></li>
            <li><a href="#room-section" className="hover:text-white transition">الغرف والأجنحة</a></li>
            <li><a href="#amenities-section" className="hover:text-white transition">المرافق والخدمات</a></li>
          </ul>
        </div>

        {/* القسم الثالث: التواصل */}
        <div>
          <h4 className="text-secondary-btn font-bold mb-6">اتصل بنا</h4>
          <ul className="space-y-4 text-gray-300 text-sm">
            <li>Homs, Syria</li>
            <li>info@imperialhaven.com</li>
            <li>+963 935 562 123</li>
          </ul>
        </div>
      </div>

      {/* حقوق النشر */}
      <div className="text-center mt-12 pt-8 border-t border-white/10 text-gray-500 text-xs">
        &copy; {new Date().getFullYear()} Imperial Haven Hotel. جميع الحقوق محفوظة.
      </div>
    </footer>
  );
};
export default Footer




