
import React from 'react';
import { Facebook, Github, Linkedin, Twitter, Mail, Phone, MapPin } from 'lucide-react';
import { FooterContentType } from './FooterContentModal';

export interface FooterProps {
  onLinkClick?: (type: FooterContentType) => void;
}

const Logo = () => (
  <a href="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
    <div className="relative w-8 h-8 flex items-center justify-center">
      <div className="relative w-full h-full bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center text-white">
        <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="currentColor" strokeWidth="3">
          <path d="M4 20V4l16 16V4" />
        </svg>
      </div>
    </div>
    <div className="flex flex-col -space-y-1">
      <span className="text-lg font-black tracking-tight text-white leading-none">NEXCEL</span>
      <span className="text-[8px] font-bold tracking-[0.2em] text-indigo-400 uppercase">Tech Solutions</span>
    </div>
  </a>
);

export const Footer: React.FC<FooterProps> = ({ onLinkClick }) => {
  const handleClick = (type: FooterContentType) => {
    if (onLinkClick) onLinkClick(type);
  };

  return (
    <footer id="contact" className="bg-[#020617] pt-32 pb-16 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
          <div className="space-y-8">
            <Logo />
            <p className="text-slate-400 text-sm leading-relaxed font-medium">
              Kiến tạo giải pháp công nghệ dẫn đầu. Nexcel Tech Solutions đồng hành cùng doanh nghiệp trong hành trình chuyển đổi số và tự động hóa quy trình.
            </p>
            <div className="flex space-x-5">
              <a href="#" className="w-10 h-10 rounded-full border border-slate-800 flex items-center justify-center text-slate-500 hover:text-white hover:border-indigo-500 transition-all"><Facebook size={18} /></a>
              <a href="#" className="w-10 h-10 rounded-full border border-slate-800 flex items-center justify-center text-slate-500 hover:text-white hover:border-indigo-500 transition-all"><Linkedin size={18} /></a>
              <a href="#" className="w-10 h-10 rounded-full border border-slate-800 flex items-center justify-center text-slate-500 hover:text-white hover:border-indigo-500 transition-all"><Twitter size={18} /></a>
              <a href="#" className="w-10 h-10 rounded-full border border-slate-800 flex items-center justify-center text-slate-500 hover:text-white hover:border-indigo-500 transition-all"><Github size={18} /></a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-8">VPS n8n & Tự động hóa</h4>
            <ul className="space-y-4 text-sm text-slate-400 font-medium">
              <li><button onClick={() => handleClick('vps-pro')} className="hover:text-white transition-colors">VPS n8n Starter (120k)</button></li>
              <li><button onClick={() => handleClick('vps-pro')} className="hover:text-white transition-colors">VPS n8n Standard (200k)</button></li>
              <li><button onClick={() => handleClick('n8n-managed')} className="hover:text-white transition-colors">Managed n8n Server</button></li>
              <li><button onClick={() => handleClick('template-library' as any)} className="text-indigo-400 hover:text-indigo-300 transition-colors font-bold">Kho Template n8n (Free)</button></li>
              <li><button onClick={() => handleClick('n8n-managed')} className="hover:text-white transition-colors">Tư vấn bảo mật Workflow</button></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-8">Giải pháp Digital</h4>
            <ul className="space-y-4 text-sm text-slate-400 font-medium">
              <li><button onClick={() => handleClick('uiux')} className="hover:text-white transition-colors">Thiết kế Website Corporate</button></li>
              <li><button onClick={() => handleClick('uiux')} className="hover:text-white transition-colors">Thiết kế Landing Page</button></li>
              <li><button onClick={() => handleClick('erp-crm')} className="hover:text-white transition-colors">Xây dựng Power Apps</button></li>
              <li><button onClick={() => handleClick('erp-crm')} className="hover:text-white transition-colors">Google AppSheet Development</button></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-8">Liên hệ</h4>
            <ul className="space-y-5 text-sm text-slate-400 font-medium">
              <li className="flex items-start group">
                <div className="w-8 h-8 rounded-lg bg-indigo-500/10 flex items-center justify-center mr-4 group-hover:bg-indigo-500/20 transition-colors">
                  <Mail size={16} className="text-indigo-400" />
                </div>
                <div className="flex flex-col">
                  <span className="text-slate-500 text-[10px] uppercase font-bold tracking-wider">Email hỗ trợ</span>
                  <span className="text-slate-200">info@nexceltech.com</span>
                </div>
              </li>
              <li className="flex items-start group">
                <div className="w-8 h-8 rounded-lg bg-indigo-500/10 flex items-center justify-center mr-4 group-hover:bg-indigo-500/20 transition-colors">
                  <Phone size={16} className="text-indigo-400" />
                </div>
                <div className="flex flex-col">
                  <span className="text-slate-500 text-[10px] uppercase font-bold tracking-wider">Hotline / Zalo</span>
                  <span className="text-slate-200">0877200396</span>
                </div>
              </li>
              <li className="flex items-start group">
                <div className="w-8 h-8 rounded-lg bg-indigo-500/10 flex items-center justify-center mr-4 group-hover:bg-indigo-500/20 transition-colors">
                  <MapPin size={16} className="text-indigo-400" />
                </div>
                <div className="flex flex-col">
                  <span className="text-slate-500 text-[10px] uppercase font-bold tracking-wider">Trụ sở chính</span>
                  <span className="text-slate-200">496 Dương Quảng Hàm, Gò Vấp, TP HCM</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-slate-900/50 flex flex-col md:flex-row justify-between items-center text-slate-500 text-xs space-y-6 md:space-y-0">
          <div className="flex items-center space-x-1">
            <span className="font-bold text-slate-400 uppercase tracking-widest">Nexcel Tech Solutions</span>
            <span>© 2025. Đã đăng ký bản quyền.</span>
          </div>
          <div className="flex space-x-8 font-bold uppercase tracking-widest">
            <button onClick={() => handleClick('privacy')} className="hover:text-white transition-colors">Privacy</button>
            <button onClick={() => handleClick('terms')} className="hover:text-white transition-colors">Terms</button>
            <button onClick={() => handleClick('security')} className="hover:text-white transition-colors">Security</button>
          </div>
        </div>
      </div>
    </footer>
  );
};
