
import React, { useState } from 'react';
import { Check, Shield } from 'lucide-react';

interface PricingSectionProps {
  onSelectPlan: (plan: string) => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ onSelectPlan }) => {
  const [isAnnual, setIsAnnual] = useState(false);

  const plans = [
    {
      name: "n8n Basic",
      price: isAnnual ? "100k" : "120k",
      specs: "1 vCPU / 2GB RAM / 24GB SSD",
      features: [
        "Pre-installed n8n & Docker",
        "24GB SSD Storage",
        "Backup hàng tuần",
        "Truy cập kho Template n8n",
        "Hỗ trợ setup ban đầu",
      ],
      cta: "Bắt đầu ngay",
      popular: false
    },
    {
      name: "n8n Standard",
      price: isAnnual ? "170k" : "200k",
      specs: "2 vCPU / 4GB RAM / 32GB SSD",
      features: [
        "Tối ưu hiệu suất workflow",
        "32GB SSD Storage",
        "Truy cập All-access Template",
        "Hỗ trợ 24/7",
        "Tư vấn tối ưu quy trình",
        "Uptime SLA 99.99%"
      ],
      cta: "Gói phổ biến nhất",
      popular: true
    },
    {
      name: "n8n Premium",
      price: "Liên hệ",
      specs: "Cấu hình tùy chỉnh",
      features: [
        "Custom Hardware / Dedicated",
        "Full access Nexcel Templates",
        "Hệ thống ứng dụng chuyên biệt",
        "Tích hợp n8n sang ERP/CRM",
        "Bảo mật chuẩn Enterprise",
        "Hỗ trợ kỹ thuật ưu tiên"
      ],
      cta: "Liên hệ chuyên gia",
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-24 px-6 bg-slate-950/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-6 mb-16">
          <h2 className="text-4xl font-extrabold text-white">Bảng giá minh bạch</h2>
          <div className="flex items-center justify-center space-x-4">
            <span className={`text-sm ${!isAnnual ? 'text-white font-bold' : 'text-slate-500'}`}>Thanh toán tháng</span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className="w-12 h-6 bg-indigo-600 rounded-full relative transition-all"
            >
              <div className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition-transform ${isAnnual ? 'translate-x-6' : ''}`}></div>
            </button>
            <span className={`text-sm ${isAnnual ? 'text-white font-bold' : 'text-slate-500'}`}>Thanh toán năm <span className="text-indigo-400">(-20%)</span></span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan, idx) => (
            <div key={idx} className={`relative flex flex-col p-8 rounded-3xl border ${plan.popular ? 'border-indigo-500 bg-indigo-500/5' : 'border-slate-800 glass'} transition-transform hover:-translate-y-2`}>
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-indigo-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest">
                  Phổ biến nhất
                </div>
              )}
              <div className="mb-6">
                <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-slate-400 text-sm">{plan.specs}</p>
              </div>
              <div className="mb-8">
                <span className="text-4xl font-extrabold text-white">{plan.price}</span>
                {plan.price !== "Liên hệ" && <span className="text-slate-500 ml-1">/tháng</span>}
              </div>
              <div className="space-y-4 mb-10 flex-grow">
                {plan.features.map((feature, fIdx) => (
                  <div key={fIdx} className="flex items-start">
                    <Check size={18} className="text-indigo-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-300 text-sm">{feature}</span>
                  </div>
                ))}
              </div>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onSelectPlan(plan.name);
                }}
                className={`w-full py-4 rounded-xl font-bold transition-all ${plan.popular ? 'bg-indigo-600 text-white hover:bg-indigo-500' : 'bg-slate-800 text-white hover:bg-slate-700'}`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>

        <div className="mt-12 flex items-center justify-center text-slate-500 text-sm">
          <Shield size={16} className="mr-2" />
          Mọi thanh toán đều được bảo mật và hỗ trợ hoàn tiền trong 7 ngày.
        </div>
      </div>
    </section>
  );
};
