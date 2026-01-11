
import React, { useState } from 'react';
import { X, ChevronRight, CheckCircle2, Cpu, Workflow, Globe, Send, User, Mail, Building2, Phone } from 'lucide-react';

interface GetStartedModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
  initialStep?: Step;
}

type Step = 'SERVICE' | 'CONTACT' | 'SUCCESS';

export const GetStartedModal: React.FC<GetStartedModalProps> = ({ isOpen, onClose, initialService, initialStep }) => {
  const [step, setStep] = useState<Step>('SERVICE');
  const [selectedService, setSelectedService] = useState<string | null>(null);

  // Sync state with props when modal opens
  React.useEffect(() => {
    if (isOpen) {
      if (initialService) setSelectedService(initialService);
      if (initialStep) setStep(initialStep);
    }
  }, [isOpen, initialService, initialStep]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    company: '',
    phone: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  if (!isOpen) return null;

  const services = [
    { id: 'vps', title: 'VPS N8N', icon: <Cpu />, desc: 'Hạ tầng tốc độ cao cho ứng dụng.' },
    { id: 'automation', title: 'Workflow Automation', icon: <Workflow />, desc: 'Tự động hóa quy trình với n8n/AI.' },
    { id: 'web', title: 'Web & System Design', icon: <Globe />, desc: 'Thiết kế hệ thống chuyên sâu.' },
  ];

  const handleNext = async () => {
    if (step === 'SERVICE' && selectedService) {
      setStep('CONTACT');
    } else if (step === 'CONTACT') {
      setIsSubmitting(true);
      try {
        await fetch('https://n8n.longan.id/webhook/ea51d1df-dc05-43d3-ab9e-6b70b5b44d9d', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            ...formData,
            service: selectedService,
            source: 'Website Contact Form',
            timestamp: new Date().toISOString()
          })
        });
        setStep('SUCCESS');
      } catch (error) {
        console.error('Error submitting form:', error);
        // Fallback to success even on error for UX, or show error message
        setStep('SUCCESS');
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  const handleClose = () => {
    onClose();
    // Reset state after animation
    setTimeout(() => {
      setStep('SERVICE');
      setSelectedService(null);
      setFormData({ fullName: '', email: '', company: '', phone: '' });
      setIsSubmitting(false);
    }, 300);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-[#020617]/80 backdrop-blur-md animate-in fade-in duration-300"
        onClick={handleClose}
      />

      {/* Modal Container */}
      <div className="relative w-full max-w-2xl bg-[#0B0F1A] border border-white/10 rounded-[2.5rem] shadow-2xl overflow-hidden animate-in zoom-in-95 duration-300">
        <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500" />

        {/* Header */}
        <div className="p-8 flex justify-between items-start">
          <div>
            <h2 className="text-2xl font-extrabold text-white mb-2">
              {step === 'SERVICE' && "Bạn cần giải pháp nào?"}
              {step === 'CONTACT' && "Chúng tôi nên liên hệ ai?"}
              {step === 'SUCCESS' && "Yêu cầu đã được gửi!"}
            </h2>
            <p className="text-slate-400 text-sm">
              {step === 'SERVICE' && "Hãy chọn dịch vụ mà doanh nghiệp bạn đang quan tâm nhất."}
              {step === 'CONTACT' && "Nexcel sẽ liên hệ tư vấn chuyên sâu cho bạn trong 2 giờ làm việc."}
              {step === 'SUCCESS' && "Chuyên gia của Nexcel sẽ sớm kết nối với bạn qua thông tin đã cung cấp."}
            </p>
          </div>
          <button
            onClick={handleClose}
            className="p-2 hover:bg-white/5 rounded-full text-slate-500 hover:text-white transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        {/* Content Area */}
        <div className="px-8 pb-8">
          {step === 'SERVICE' && (
            <div className="space-y-4 animate-in slide-in-from-bottom-4 duration-500">
              {services.map((s) => (
                <button
                  key={s.id}
                  onClick={() => setSelectedService(s.id)}
                  className={`w-full flex items-center p-5 rounded-2xl border transition-all text-left group ${selectedService === s.id
                    ? 'bg-indigo-500/10 border-indigo-500 ring-1 ring-indigo-500'
                    : 'bg-white/5 border-white/5 hover:border-white/20'
                    }`}
                >
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mr-5 transition-colors ${selectedService === s.id ? 'bg-indigo-500 text-white' : 'bg-white/5 text-indigo-400 group-hover:bg-indigo-500/20'
                    }`}>
                    {s.icon}
                  </div>
                  <div className="flex-grow">
                    <h4 className="font-bold text-white group-hover:text-indigo-300 transition-colors">{s.title}</h4>
                    <p className="text-xs text-slate-500">{s.desc}</p>
                  </div>
                  <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${selectedService === s.id ? 'border-indigo-500 bg-indigo-500' : 'border-slate-700'
                    }`}>
                    {selectedService === s.id && <CheckCircle2 size={14} className="text-white" />}
                  </div>
                </button>
              ))}
            </div>
          )}

          {step === 'CONTACT' && (
            <div className="space-y-6 animate-in slide-in-from-bottom-4 duration-500">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">Họ và tên</label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      placeholder="Nguyễn Văn A"
                      className="w-full bg-white/5 border border-white/10 rounded-xl py-3.5 pl-12 pr-4 text-white focus:outline-none focus:border-indigo-500 transition-colors"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">Email công việc</label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="name@company.com"
                      className="w-full bg-white/5 border border-white/10 rounded-xl py-3.5 pl-12 pr-4 text-white focus:outline-none focus:border-indigo-500 transition-colors"
                    />
                  </div>
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">Tên công ty / Tổ chức</label>
                  <div className="relative">
                    <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      placeholder="Ví dụ: Công ty TNHH ABC"
                      className="w-full bg-white/5 border border-white/10 rounded-xl py-3.5 pl-12 pr-4 text-white focus:outline-none focus:border-indigo-500 transition-colors"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">Số điện thoại</label>
                  <div className="relative">
                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="090x xxx xxx"
                      className="w-full bg-white/5 border border-white/10 rounded-xl py-3.5 pl-12 pr-4 text-white focus:outline-none focus:border-indigo-500 transition-colors"
                    />
                  </div>
                </div>
              </div>
            </div>
          )}

          {step === 'SUCCESS' && (
            <div className="py-12 text-center space-y-6 animate-in zoom-in-95 duration-500">
              <div className="w-24 h-24 bg-green-500/10 rounded-full flex items-center justify-center mx-auto">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center text-white shadow-xl shadow-green-500/20">
                  <CheckCircle2 size={40} />
                </div>
              </div>
              <div className="space-y-2">
                <h3 className="text-3xl font-black text-white italic">Awesome!</h3>
                <p className="text-slate-400 max-w-xs mx-auto">Chúng tôi đã nhận được yêu cầu của bạn. Ticket ID: #NXC-2024</p>
              </div>
              <button
                onClick={handleClose}
                className="px-8 py-3 bg-white text-slate-900 rounded-xl font-bold hover:bg-indigo-50 transition-all"
              >
                Trở lại trang chủ
              </button>
            </div>
          )}
        </div>

        {/* Footer Actions */}
        {step !== 'SUCCESS' && (
          <div className="p-8 bg-white/[0.02] border-t border-white/5 flex items-center justify-between">
            <div className="flex space-x-2">
              {[1, 2].map((i) => (
                <div key={i} className={`h-1.5 rounded-full transition-all ${(step === 'SERVICE' && i === 1) || (step === 'CONTACT' && i === 2)
                  ? 'w-8 bg-indigo-500' : 'w-2 bg-white/10'
                  }`} />
              ))}
            </div>
            <div className="flex space-x-4">
              {step === 'CONTACT' && (
                <button
                  onClick={() => setStep('SERVICE')}
                  className="px-6 py-3 text-slate-400 font-bold hover:text-white transition-colors"
                >
                  Quay lại
                </button>
              )}
              <button
                disabled={(step === 'SERVICE' && !selectedService) || isSubmitting}
                onClick={handleNext}
                className={`px-8 py-3 rounded-xl font-bold flex items-center transition-all ${((step === 'SERVICE' && !selectedService) || isSubmitting)
                  ? 'bg-slate-800 text-slate-500 cursor-not-allowed'
                  : 'bg-indigo-600 text-white hover:bg-indigo-500 shadow-lg shadow-indigo-600/20'
                  }`}
              >
                {isSubmitting ? (
                  <div className="flex items-center">
                    <div className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin mr-2" />
                    Đang gửi...
                  </div>
                ) : (
                  <>
                    {step === 'SERVICE' ? "Tiếp tục" : "Gửi thông tin"}
                    {step === 'SERVICE' ? <ChevronRight size={18} className="ml-2" /> : <Send size={18} className="ml-2" />}
                  </>
                )}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
