
import React, { useState } from 'react';
import { X, Check, Shield, Zap, Star, Building, Users } from 'lucide-react';

interface PricingModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectPlan: (plan: string) => void;
}

export const PricingModal: React.FC<PricingModalProps> = ({ isOpen, onClose, onSelectPlan }) => {
  const [isAnnual, setIsAnnual] = useState(true);

  if (!isOpen) return null;

  const plans = [
    {
      name: "n8n Basic",
      icon: <Zap size={24} className="text-indigo-400" />,
      price: isAnnual ? "100k" : "120k",
      desc: "Lý tưởng cho doanh nghiệp bắt đầu tự động hóa với n8n.",
      features: ["1 vCPU / 2GB RAM", "Pre-installed n8n", "24GB SSD Storage", "Truy cập kho Template n8n", "Hỗ trợ setup nhanh"],
      color: "border-white/5",
      badge: ""
    },
    {
      name: "n8n Standard",
      icon: <Star size={24} className="text-yellow-400" />,
      price: isAnnual ? "170k" : "200k",
      desc: "Gói tối ưu hiệu suất cho workflow phức tạp.",
      features: ["2 vCPU / 4GB RAM", "32GB SSD Storage", "Truy cập All-access Template", "Hỗ trợ kỹ thuật 24/7", "Tư vấn thiết kế workflow", "SLA 99.9%"],
      color: "border-indigo-500 bg-indigo-500/5",
      badge: "Phổ biến nhất"
    },
    {
      name: "n8n Premium",
      icon: <Building size={24} className="text-purple-400" />,
      price: "Liên hệ",
      desc: "Giải pháp hạ tầng tùy chỉnh cho doanh nghiệp lớn.",
      features: ["Custom Hardware / Dedicated", "Full access Nexcel Template Hub", "Phát triển Low-code chuyên biệt", "AI Agent chuyên sâu", "Support 24/7 Hotline", "Audit bảo mật định kỳ"],
      color: "border-white/5",
      badge: ""
    }
  ];

  return (
    <div className="fixed inset-0 z-[170] flex items-center justify-center p-0 md:p-6 overflow-hidden">
      <div className="absolute inset-0 bg-[#020617]/95 backdrop-blur-2xl animate-in fade-in duration-500" onClick={onClose} />

      <div className="relative w-full h-full max-w-6xl bg-[#0B0F1A] border-white/5 md:border md:rounded-[3rem] flex flex-col overflow-hidden animate-in zoom-in-95 duration-500">
        {/* Header */}
        <div className="p-8 border-b border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-black text-white italic tracking-tight">Lựa chọn <span className="text-indigo-500">Kế hoạch</span> của bạn</h2>
            <p className="text-slate-500 text-sm font-bold uppercase tracking-widest mt-1">Minh bạch - Linh hoạt - Hiệu quả</p>
          </div>

          <div className="flex items-center space-x-4 bg-white/5 p-1.5 rounded-2xl border border-white/5">
            <button
              onClick={() => setIsAnnual(false)}
              className={`px-6 py-2 rounded-xl text-xs font-bold transition-all ${!isAnnual ? 'bg-indigo-600 text-white' : 'text-slate-500 hover:text-white'}`}
            >
              Tháng
            </button>
            <button
              onClick={() => setIsAnnual(true)}
              className={`px-6 py-2 rounded-xl text-xs font-bold transition-all relative ${isAnnual ? 'bg-indigo-600 text-white' : 'text-slate-500 hover:text-white'}`}
            >
              Năm
              {isAnnual && <span className="absolute -top-3 -right-3 bg-green-500 text-[8px] px-2 py-0.5 rounded-full text-white">-20%</span>}
            </button>
          </div>

          <button onClick={onClose} className="hidden md:block p-2 hover:bg-white/5 rounded-full text-slate-500 hover:text-white transition-colors">
            <X size={28} />
          </button>
        </div>

        {/* Content */}
        <div className="flex-grow overflow-y-auto p-8 md:p-12 no-scrollbar">
          <div className="grid md:grid-cols-3 gap-8 items-stretch">
            {plans.map((plan, idx) => (
              <div
                key={idx}
                className={`relative p-8 rounded-[2.5rem] border ${plan.color} flex flex-col group transition-all hover:-translate-y-2`}
              >
                {plan.badge && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-indigo-500 text-[10px] font-black uppercase tracking-widest text-white px-4 py-1.5 rounded-full shadow-lg">
                    {plan.badge}
                  </div>
                )}

                <div className="mb-8">
                  <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center mb-6">{plan.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-slate-500 text-xs leading-relaxed">{plan.desc}</p>
                </div>

                <div className="mb-10">
                  <div className="flex items-baseline">
                    <span className="text-4xl font-black text-white">{plan.price}</span>
                    {plan.price !== "Liên hệ" && <span className="text-slate-500 text-sm ml-1">/tháng</span>}
                  </div>
                  <p className="text-indigo-400 text-[10px] font-bold mt-2 uppercase tracking-widest">
                    {plan.price === "Liên hệ" ? "Dành cho tổ chức lớn" : (isAnnual ? "Thanh toán theo năm" : "Thanh toán từng tháng")}
                  </p>
                </div>

                <div className="space-y-4 mb-10 flex-grow">
                  {plan.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-start">
                      <Check size={16} className="text-indigo-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-300 text-sm font-medium">{feat}</span>
                    </div>
                  ))}
                </div>

                <button
                  onClick={() => onSelectPlan(plan.name)}
                  className={`w-full py-4 rounded-2xl font-black text-sm transition-all ${plan.badge ? 'bg-indigo-600 text-white hover:bg-indigo-500 shadow-xl shadow-indigo-600/20' : 'bg-white/5 text-white hover:bg-white/10'
                    }`}
                >
                  {plan.price === "Liên hệ" ? "Gửi yêu cầu báo giá" : "Đăng ký n8n VPS"}
                </button>
              </div>
            ))}
          </div>

          {/* Trusted By */}
          <div className="mt-16 text-center">
            <p className="text-[10px] font-black text-slate-500 uppercase tracking-[0.3em] mb-8">Tin dùng bởi các doanh nghiệp</p>
            <div className="flex flex-wrap justify-center items-center gap-12 opacity-30 grayscale hover:grayscale-0 hover:opacity-60 transition-all duration-500">
              <div className="flex items-center space-x-2 text-white font-black italic"><Shield size={20} /><span>BANK SECURITY</span></div>
              <div className="flex items-center space-x-2 text-white font-black italic"><Users size={20} /><span>LOGISTICS PRO</span></div>
              <div className="flex items-center space-x-2 text-white font-black italic"><Star size={20} /><span>E-COM HUB</span></div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-8 border-t border-white/5 bg-white/[0.01] flex items-center justify-center">
          <div className="flex items-center space-x-2 text-slate-500 text-xs">
            <Shield size={14} className="text-indigo-500" />
            <p>Hệ thống thanh toán bảo mật 256-bit SSL. Hỗ trợ hoàn tiền trong 7 ngày đầu tiên.</p>
          </div>
        </div>
      </div>
    </div>
  );
};
