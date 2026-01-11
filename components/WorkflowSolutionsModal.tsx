
import React, { useState } from 'react';
import {
  X, Zap, ArrowRight, CheckCircle2,
  Workflow, Share2, Database, Mail,
  Bot, ShoppingCart, Users, Terminal, Monitor
} from 'lucide-react';

interface WorkflowSolutionsModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConsult: (flow: string) => void;
}

export const WorkflowSolutionsModal: React.FC<WorkflowSolutionsModalProps> = ({ isOpen, onClose, onConsult }) => {
  const [activeFlow, setActiveFlow] = useState(0);

  const workflows = [
    {
      id: 0,
      category: 'n8n Automation',
      title: 'Hệ thống n8n Tự động hóa Doanh nghiệp',
      icon: <Zap className="text-orange-400" />,
      steps: [
        { label: 'Connect', sub: 'HubSpot/Zalo/Sheets', icon: <Share2 size={16} /> },
        { label: 'Process', sub: 'n8n Logic Engine', icon: <Workflow size={16} /> },
        { label: 'AI Sync', sub: 'OpenAI Integration', icon: <Bot size={16} /> },
        { label: 'Output', sub: 'Report/Notification', icon: <Database size={16} /> }
      ],
      description: 'Dịch vụ thiết kế và triển khai quy trình tự động hóa trên nền tảng n8n, giúp kết nối hàng nghìn ứng dụng và tối ưu hóa vận hành 24/7.',
      impact: 'Tiết kiệm 70% thời gian vận hành cho doanh nghiệp.'
    },
    {
      id: 1,
      category: 'Power Platform',
      title: 'Power Automate & Microsoft 365',
      icon: <Users className="text-blue-400" />,
      steps: [
        { label: 'Event', sub: 'Outlook/Teams/SharePoint', icon: <Mail size={16} /> },
        { label: 'Automate', sub: 'Power Automate Flow', icon: <Zap size={16} /> },
        { label: 'Approval', sub: 'Digital Signature', icon: <CheckCircle2 size={16} /> },
        { label: 'Record', sub: 'Dataverse/SQL', icon: <Database size={16} /> }
      ],
      description: 'Tận dụng tối đa hệ sinh thái Microsoft 365 để xây dựng các luồng phê duyệt và thông báo tự động hóa chuyên nghiệp cho văn phòng.',
      impact: 'Số hóa 100% quy trình giấy tờ nội bộ.'
    },
    {
      id: 2,
      category: 'Low-code Apps',
      title: 'Phát triển ứng dụng Power Apps & AppSheet',
      icon: <Terminal className="text-green-400" />,
      steps: [
        { label: 'Interface', sub: 'UI/UX Mobile First', icon: <Monitor size={16} /> },
        { label: 'Database', sub: 'Cloud Data Hub', icon: <Database size={16} /> },
        { label: 'Logic', sub: 'No-code Functions', icon: <Zap size={16} /> },
        { label: 'Deploy', sub: 'Store/Enterprise', icon: <Share2 size={16} /> }
      ],
      description: 'Xây dựng ứng dụng quản trị doanh nghiệp (CRM, HRM, Inventory) nhanh chóng trên nền tảng Low-code, tích hợp mượt mà với n8n.',
      impact: 'Triển khai nhanh hơn 5x so với Code truyền thống.'
    }
  ];

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[150] flex items-center justify-center p-0 md:p-6 overflow-hidden">
      <div className="absolute inset-0 bg-[#020617]/90 backdrop-blur-2xl animate-in fade-in duration-500" onClick={onClose} />

      <div className="relative w-full h-full max-w-6xl bg-[#0B0F1A] border-white/5 md:border md:rounded-[3rem] flex flex-col overflow-hidden animate-in zoom-in-95 duration-500 shadow-3xl">
        {/* Header */}
        <div className="p-8 border-b border-white/5 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-indigo-500/10 rounded-2xl flex items-center justify-center text-indigo-400">
              <Workflow size={28} />
            </div>
            <div>
              <h2 className="text-2xl font-black text-white italic tracking-tight uppercase">Workflow Solutions</h2>
              <p className="text-slate-500 text-xs font-bold tracking-widest uppercase">Bản đồ tự động hóa doanh nghiệp</p>
            </div>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-white/5 rounded-full text-slate-500 hover:text-white transition-colors">
            <X size={28} />
          </button>
        </div>

        <div className="flex-grow overflow-y-auto no-scrollbar grid lg:grid-cols-12">
          {/* Navigation Sidebar */}
          <div className="lg:col-span-4 border-r border-white/5 p-6 space-y-4 bg-white/[0.01]">
            <span className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] ml-2">Danh mục giải pháp</span>
            {workflows.map((flow) => (
              <button
                key={flow.id}
                onClick={() => setActiveFlow(flow.id)}
                className={`w-full p-5 rounded-2xl border transition-all text-left group flex items-start space-x-4 ${activeFlow === flow.id
                  ? 'bg-indigo-600/10 border-indigo-500 shadow-lg shadow-indigo-600/5'
                  : 'bg-transparent border-white/5 hover:bg-white/5'
                  }`}
              >
                <div className={`p-3 rounded-xl transition-colors ${activeFlow === flow.id ? 'bg-indigo-600 text-white' : 'bg-white/5 text-slate-400 group-hover:text-white'}`}>
                  {flow.icon}
                </div>
                <div>
                  <span className={`text-[10px] font-bold uppercase tracking-widest ${activeFlow === flow.id ? 'text-indigo-400' : 'text-slate-500'}`}>
                    {flow.category}
                  </span>
                  <h4 className={`font-bold mt-1 leading-tight ${activeFlow === flow.id ? 'text-white' : 'text-slate-400 group-hover:text-slate-200'}`}>
                    {flow.title}
                  </h4>
                </div>
              </button>
            ))}

            <div className="mt-8 p-6 rounded-3xl border border-dashed border-white/10 text-center">
              <p className="text-sm text-slate-500 mb-4 font-medium italic">Bạn không tìm thấy quy trình phù hợp?</p>
              <button
                onClick={() => onConsult('Custom Workflow')}
                className="text-xs font-black text-indigo-400 hover:text-indigo-300 underline underline-offset-4"
              >
                Yêu cầu thiết kế riêng
              </button>
            </div>
          </div>

          {/* Visualization Area */}
          <div className="lg:col-span-8 p-10 flex flex-col">
            <div className="flex-grow space-y-12 animate-in fade-in slide-in-from-right-8 duration-700">
              <div className="space-y-4">
                <h3 className="text-3xl font-extrabold text-white leading-tight">{workflows[activeFlow].title}</h3>
                <p className="text-slate-400 text-lg leading-relaxed max-w-2xl">{workflows[activeFlow].description}</p>
              </div>

              {/* Interactive Flow Visual */}
              <div className="relative py-12 flex flex-col md:flex-row items-center justify-between">
                {/* Connection Line Background */}
                <div className="absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-pink-500/20 -translate-y-1/2 hidden md:block"></div>

                {workflows[activeFlow].steps.map((step, idx) => (
                  <React.Fragment key={idx}>
                    <div className="relative z-10 flex flex-col items-center group w-full md:w-auto mb-8 md:mb-0">
                      <div className="w-16 h-16 bg-[#0F172A] border border-white/10 rounded-2xl flex items-center justify-center text-indigo-400 group-hover:scale-110 group-hover:border-indigo-500 group-hover:shadow-[0_0_20px_rgba(99,102,241,0.3)] transition-all duration-500">
                        {step.icon}
                      </div>
                      <div className="mt-4 text-center">
                        <p className="text-xs font-black text-white uppercase tracking-tighter">{step.label}</p>
                        <p className="text-[10px] text-slate-500 font-bold">{step.sub}</p>
                      </div>
                      {idx < workflows[activeFlow].steps.length - 1 && (
                        <div className="md:hidden w-1 h-8 bg-indigo-500/20 my-2"></div>
                      )}
                    </div>
                    {idx < workflows[activeFlow].steps.length - 1 && (
                      <div className="hidden md:block relative z-10">
                        <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                          <ArrowRight size={14} className="text-slate-600" />
                        </div>
                      </div>
                    )}
                  </React.Fragment>
                ))}
              </div>

              <div className="grid md:grid-cols-2 gap-6 pt-8">
                <div className="p-6 bg-green-500/5 border border-green-500/10 rounded-2xl flex items-start space-x-4">
                  <CheckCircle2 className="text-green-500 mt-1" size={20} />
                  <div>
                    <span className="text-[10px] font-black text-green-500 uppercase tracking-widest">Business Impact</span>
                    <p className="text-white font-bold text-lg">{workflows[activeFlow].impact}</p>
                  </div>
                </div>
                <div className="p-6 bg-indigo-500/5 border border-indigo-500/10 rounded-2xl flex items-start space-x-4">
                  <Zap className="text-indigo-500 mt-1" size={20} />
                  <div>
                    <span className="text-[10px] font-black text-indigo-400 uppercase tracking-widest">Tech Stack</span>
                    <p className="text-white font-bold text-lg">n8n / Redis / Docker</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-white/5 flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="flex -space-x-2">
                  {[1, 2, 3].map(i => (
                    <div key={i} className="w-8 h-8 rounded-full border-2 border-[#0B0F1A] bg-slate-800" />
                  ))}
                </div>
                <span className="text-xs text-slate-500 font-medium">12 doanh nghiệp vừa triển khai luồng này</span>
              </div>
              <button
                onClick={() => onConsult(workflows[activeFlow].title)}
                className="px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white rounded-2xl font-black flex items-center transition-all shadow-xl shadow-indigo-600/20"
              >
                Tư vấn giải pháp này
                <ArrowRight size={20} className="ml-2" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
