
import React from 'react';
import { X, Shield, ChevronRight, Lock, FileText, Info, ArrowRight, Zap, CheckCircle2, Globe, Layers } from 'lucide-react';

export type FooterContentType =
  | 'vps-pro' | 'dedicated' | 'n8n-managed' | 'vpn'
  | 'uiux' | 'erp-crm' | 'ai-agent' | 'devops'
  | 'privacy' | 'terms' | 'security';

interface FooterContentModalProps {
  isOpen: boolean;
  onClose: () => void;
  contentType: FooterContentType | null;
  onAction: () => void;
}

export const FooterContentModal: React.FC<FooterContentModalProps> = ({ isOpen, onClose, contentType, onAction }) => {
  if (!isOpen || !contentType) return null;

  const getContent = () => {
    switch (contentType) {
      case 'vps-pro':
        return {
          title: "VPS Automation Pro",
          icon: <Zap className="text-indigo-400" />,
          body: (
            <div className="space-y-6">
              <p>Giải pháp máy chủ ảo tối ưu hóa riêng cho các tác vụ chạy ngầm, automation workflow và bot 24/7. Sử dụng công nghệ ảo hóa KVM đảm bảo tài nguyên độc lập hoàn toàn.</p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 bg-white/5 rounded-2xl border border-white/5">
                  <h4 className="font-bold text-white mb-2">Thông số Kỹ thuật</h4>
                  <ul className="text-sm text-slate-400 space-y-2">
                    <li>• CPU: AMD EPYC Gen 3</li>
                    <li>• RAM: DDR4 ECC 3200Mhz</li>
                    <li>• Disk: NVMe Samsung Enterprise</li>
                    <li>• Port: 10Gbps Uplink</li>
                  </ul>
                </div>
                <div className="p-4 bg-white/5 rounded-2xl border border-white/5">
                  <h4 className="font-bold text-white mb-2">Tính năng đặc biệt</h4>
                  <ul className="text-sm text-slate-400 space-y-2">
                    <li>• Pre-installed Docker & n8n</li>
                    <li>• Tối ưu Latency tới Google/Meta</li>
                    <li>• Auto-snapshot hàng tuần</li>
                    <li>• Firewall chống DDoS tầng 7</li>
                  </ul>
                </div>
              </div>
            </div>
          )
        };
      case 'n8n-managed':
        return {
          title: "Managed n8n Server",
          icon: <Zap className="text-purple-400" />,
          body: (
            <div className="space-y-6">
              <p>Quên đi nỗi lo vận hành kỹ thuật. Nexcel quản trị toàn bộ hệ thống n8n cho bạn, từ bảo mật, update phiên bản đến tối ưu tài nguyên cho các workflow khổng lồ.</p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="text-green-500 mt-1" size={18} />
                  <div>
                    <h5 className="font-bold text-white">Security Hardening</h5>
                    <p className="text-sm text-slate-400">Thiết lập bảo mật 2 lớp, giới hạn IP truy cập và mã hóa dữ liệu nhạy cảm.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="text-green-500 mt-1" size={18} />
                  <div>
                    <h5 className="font-bold text-white">Auto-Scaling Resources</h5>
                    <p className="text-sm text-slate-400">Tự động tăng cường CPU/RAM khi hệ thống chạy các workflow nặng (batch processing).</p>
                  </div>
                </div>
              </div>
            </div>
          )
        };
      case 'uiux':
        return {
          title: "Thiết kế Website & UI/UX",
          icon: <Globe className="text-pink-400" />,
          body: (
            <div className="space-y-6">
              <p>Chúng tôi kiến tạo các không gian số đẳng cấp, nơi vẻ đẹp của giao diện (UI) hòa quyện cùng sự mượt mà của trải nghiệm (UX). Mỗi website được thiết kế đều nhắm tới mục tiêu chuyển đổi tối đa cho doanh nghiệp.</p>
              <ul className="grid md:grid-cols-2 gap-4">
                <li className="flex items-center space-x-2">
                  <CheckCircle2 className="text-indigo-500" size={16} />
                  <span className="text-sm">Chuẩn SEO Google mới nhất</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle2 className="text-indigo-500" size={16} />
                  <span className="text-sm">Tương thích 100% Mobile</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle2 className="text-indigo-500" size={16} />
                  <span className="text-sm">Hiệu ứng Animation mượt mà</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle2 className="text-indigo-500" size={16} />
                  <span className="text-sm">Bảo mật SSL & Chống Hack</span>
                </li>
              </ul>
            </div>
          )
        };
      case 'erp-crm':
        return {
          title: "Giải pháp Power Apps & Low-code",
          icon: <Layers className="text-purple-400" />,
          body: (
            <div className="space-y-6">
              <p>Xây dựng hệ thống quản trị nội bộ cực tốc với Power Apps và AppSheet. Giải pháp giúp số hóa quy trình phê duyệt, quản lý kho, CRM và báo cáo real-time mà không cần viết code truyền thống.</p>
              <div className="p-6 bg-white/5 rounded-2xl border border-white/5">
                <h4 className="font-bold text-white mb-4 italic">Lợi ích vượt trội:</h4>
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-400">Tốc độ triển khai</span>
                    <span className="text-indigo-400 font-bold">Nhanh hơn 5 lần</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-400">Chi phí vận hành</span>
                    <span className="text-indigo-400 font-bold">Tiết kiệm 60%</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-400">Khả năng mở rộng</span>
                    <span className="text-indigo-400 font-bold">Không giới hạn</span>
                  </div>
                </div>
              </div>
            </div>
          )
        };
      case 'privacy':
        return {
          title: "Chính sách Bảo mật",
          icon: <Shield className="text-green-400" />,
          body: (
            <div className="space-y-6 text-sm leading-relaxed text-slate-400">
              <section>
                <h4 className="text-white font-bold mb-2">1. Thu thập thông tin</h4>
                <p>Nexcel cam kết chỉ thu thập các thông tin cần thiết để phục vụ việc thiết lập hạ tầng và hỗ trợ kỹ thuật cho khách hàng.</p>
              </section>
              <section>
                <h4 className="text-white font-bold mb-2">2. Bảo mật dữ liệu trên VPS</h4>
                <p>Nexcel tuyệt đối không truy cập vào nội dung dữ liệu bên trong máy chủ của khách hàng trừ khi có yêu cầu hỗ trợ bằng văn bản chính thức.</p>
              </section>
              <section>
                <h4 className="text-white font-bold mb-2">3. Chia sẻ với bên thứ ba</h4>
                <p>Chúng tôi không bán hoặc chia sẻ thông tin cá nhân của bạn cho bất kỳ bên thứ ba nào vì mục đích quảng cáo.</p>
              </section>
            </div>
          )
        };
      case 'terms':
        return {
          title: "Điều khoản Dịch vụ",
          icon: <FileText className="text-yellow-400" />,
          body: (
            <div className="space-y-6 text-sm leading-relaxed text-slate-400">
              <section>
                <h4 className="text-white font-bold mb-2">1. Phạm vi Dịch vụ</h4>
                <p>Nexcel cung cấp hạ tầng VPS và giải pháp phần mềm n8n. Khách hàng chịu trách nhiệm hoàn toàn về nội dung và mục đích sử dụng các workflow được triển khai.</p>
              </section>
              <section>
                <h4 className="text-white font-bold mb-2">2. Chính sách Thanh toán</h4>
                <p>Dịch vụ được thanh toán trả trước theo chu kỳ tháng hoặc năm. Nexcel hỗ trợ bảo hành và hoàn tiền trong 7 ngày đầu tiên nếu dịch vụ không đạt cam kết.</p>
              </section>
              <section>
                <h4 className="text-white font-bold mb-2">3. Trách nhiệm Hữu hạn</h4>
                <p>Nexcel không chịu trách nhiệm về các thiệt hại gián tiếp phát sinh từ việc gián đoạn dịch vụ do lỗi từ phía nhà cung cấp hạ tầng hạ tầng gốc hoặc sự cố bất khả kháng.</p>
              </section>
            </div>
          )
        };
      case 'security':
        return {
          title: "Bảo mật Hệ thống",
          icon: <Lock className="text-indigo-400" />,
          body: (
            <div className="space-y-6">
              <p>Hệ thống của Nexcel được xây dựng trên tiêu chuẩn bảo mật đa tầng, bảo vệ hạ tầng cloud và dữ liệu khách hàng khỏi mọi nguy cơ tiềm tàng.</p>
              <ul className="space-y-3">
                <li className="flex items-center space-x-3 p-4 bg-white/5 rounded-xl">
                  <div className="w-2 h-2 rounded-full bg-indigo-500" />
                  <span className="text-sm">Mã hóa toàn bộ lưu trữ (Encryption at Rest)</span>
                </li>
                <li className="flex items-center space-x-3 p-4 bg-white/5 rounded-xl">
                  <div className="w-2 h-2 rounded-full bg-indigo-500" />
                  <span className="text-sm">Hệ thống Firewall IDS/IPS thời gian thực</span>
                </li>
                <li className="flex items-center space-x-3 p-4 bg-white/5 rounded-xl">
                  <div className="w-2 h-2 rounded-full bg-indigo-500" />
                  <span className="text-sm">Xác thực 2 lớp (2FA) cho mọi bảng điều khiển quản trị</span>
                </li>
              </ul>
            </div>
          )
        };
      default:
        return {
          title: "Chi tiết dịch vụ",
          icon: <Info className="text-slate-400" />,
          body: <p>Thông tin chi tiết về dịch vụ này đang được cập nhật. Vui lòng liên hệ đội ngũ kỹ thuật của Nexcel để nhận tư vấn trực tiếp.</p>
        };
    }
  };

  const content = getContent();

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-0 md:p-10 overflow-hidden">
      <div className="absolute inset-0 bg-[#020617]/90 backdrop-blur-xl animate-in fade-in duration-500" onClick={onClose} />

      <div className="relative w-full h-full max-w-4xl bg-[#0B0F1A] md:rounded-[3rem] border-white/5 md:border flex flex-col overflow-hidden animate-in slide-in-from-bottom-8 duration-500 shadow-3xl">
        <div className="p-8 border-b border-white/5 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center">
              {content.icon}
            </div>
            <h2 className="text-2xl font-black text-white italic">{content.title}</h2>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-white/5 rounded-full text-slate-500 hover:text-white transition-colors">
            <X size={28} />
          </button>
        </div>

        <div className="flex-grow overflow-y-auto p-8 md:p-12 no-scrollbar">
          <div className="max-w-2xl mx-auto">
            {content.body}
          </div>
        </div>

        <div className="p-8 border-t border-white/5 bg-white/[0.01] flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center space-x-2 text-slate-500 text-xs font-bold uppercase tracking-widest">
            <Shield size={14} className="text-indigo-500" />
            <span>Nexcel Tech Solutions - Security Certified</span>
          </div>
          <button
            onClick={onAction}
            className="px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white rounded-2xl font-black flex items-center transition-all shadow-xl shadow-indigo-600/20"
          >
            Đăng ký tư vấn chuyên sâu
            <ArrowRight size={18} className="ml-2" />
          </button>
        </div>
      </div>
    </div>
  );
};
