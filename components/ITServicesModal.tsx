
import React from 'react';
import {
  X, Cloud, Settings, Monitor, Zap, Check, ArrowRight, Globe
} from 'lucide-react';

interface ITServicesModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConsult: (service: string) => void;
}

export const ITServicesModal: React.FC<ITServicesModalProps> = ({ isOpen, onClose, onConsult }) => {
  if (!isOpen) return null;

  const serviceCategories = [
    {
      title: "Thiết kế Website Cao cấp",
      icon: <Globe className="text-pink-400" />,
      items: [
        "Landing Page chuyển đổi cao cho doanh nghiệp",
        "Website E-commerce (Shopee/Lazada Sync)",
        "Quản trị nội dung & Bảo trì kỹ thuật",
        "Tối ưu tốc độ tải trang & UI/UX"
      ]
    },
    {
      title: "SEO & Digital Marketing",
      icon: <Zap className="text-yellow-400" />,
      items: [
        "Quản trị Google Search Console / Analytics",
        "SEO On-page & Content chuyên sâu",
        "Cài đặt mã theo dõi (Pixel/GTM)",
        "Tư vấn giải pháp tăng trưởng Organic"
      ]
    },
    {
      title: "Managed VPS n8n",
      icon: <Cloud className="text-blue-400" />,
      items: [
        "Cài đặt & Cấu hình n8n chuyên sâu",
        "Bảo mật Firewall & Chống DDoS",
        "Cơ chế Backup & Phục hồi 24/7",
        "Nâng cấp & Bảo trì hệ thống định kỳ"
      ]
    },
    {
      title: "Tư vấn Chuyển đổi số",
      icon: <Monitor className="text-indigo-400" />,
      items: [
        "Khảo sát & Chuẩn hóa quy trình vận hành",
        "Lựa chọn Tech Stack phù hợp doanh nghiệp",
        "Đào tạo đội ngũ sử dụng n8n/Low-code",
        "Xây dựng chiến lược số hóa toàn diện"
      ]
    }
  ];

  return (
    <div className="fixed inset-0 z-[160] flex items-center justify-center p-0 md:p-6 overflow-hidden">
      <div className="absolute inset-0 bg-[#020617]/95 backdrop-blur-2xl animate-in fade-in duration-500" onClick={onClose} />

      <div className="relative w-full h-full max-w-5xl bg-[#0B0F1A] border-white/5 md:border md:rounded-[3rem] flex flex-col overflow-hidden animate-in slide-in-from-bottom-8 duration-500">
        <div className="absolute top-0 right-0 p-8 z-20">
          <button onClick={onClose} className="p-2 hover:bg-white/5 rounded-full text-slate-500 hover:text-white transition-colors">
            <X size={32} />
          </button>
        </div>

        <div className="p-8 md:p-12 overflow-y-auto no-scrollbar">
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-black text-white italic tracking-tight mb-4">Dịch vụ IT <span className="text-indigo-500">Toàn diện</span></h2>
            <p className="text-slate-400 text-lg max-w-2xl leading-relaxed">
              Nexcel cung cấp đội ngũ chuyên gia thay thế phòng IT nội bộ, giúp doanh nghiệp tập trung hoàn toàn vào kinh doanh cốt lõi.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {serviceCategories.map((cat, idx) => (
              <div
                key={idx}
                className="p-8 rounded-[2.5rem] bg-white/[0.02] border border-white/5 hover:border-indigo-500/30 transition-all group"
              >
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center group-hover:bg-indigo-500/10 group-hover:scale-110 transition-all duration-500">
                    {/* Fixed TypeScript error by casting to React.ReactElement<any> to allow 'size' prop */}
                    {React.cloneElement(cat.icon as React.ReactElement<any>, { size: 28 })}
                  </div>
                  <h3 className="text-xl font-bold text-white">{cat.title}</h3>
                </div>

                <ul className="space-y-4 mb-8">
                  {cat.items.map((item, iIdx) => (
                    <li key={iIdx} className="flex items-start text-slate-400 text-sm">
                      <Check size={16} className="text-indigo-500 mr-3 mt-1 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => onConsult(cat.title)}
                  className="flex items-center text-sm font-bold text-indigo-400 group-hover:text-indigo-300 transition-colors"
                >
                  Nhận báo giá dịch vụ này
                  <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            ))}
          </div>

          <div className="mt-16 p-10 rounded-[3rem] bg-gradient-to-br from-indigo-600 to-purple-700 text-white flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-2 text-center md:text-left">
              <h4 className="text-2xl font-black italic">Hợp đồng SLA Cam kết 99.9%</h4>
              <p className="text-indigo-100 opacity-80">Đảm bảo hệ thống của bạn luôn hoạt động trơn tru với sự hỗ trợ kỹ thuật 24/7/365.</p>
            </div>
            <button
              onClick={() => onConsult('Enterprise IT Support')}
              className="px-10 py-4 bg-white text-slate-900 rounded-2xl font-black hover:scale-105 transition-all shadow-xl shadow-black/10"
            >
              Đặt lịch họp tư vấn
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
