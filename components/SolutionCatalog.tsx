
import React, { useState, useMemo } from 'react';
import {
  X, Search, Filter, Cpu, Workflow, Bot,
  BarChart3, ArrowRight, Zap, Clock,
  TrendingUp, Layers, CheckCircle, Globe
} from 'lucide-react';

interface Solution {
  id: string;
  category: 'vps' | 'workflow' | 'lowcode' | 'web';
  title: string;
  description: string;
  impact: string;
  setupTime: string;
  tags: string[];
}

interface SolutionCatalogProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectSolution: (title: string) => void;
}

export const SolutionCatalog: React.FC<SolutionCatalogProps> = ({ isOpen, onClose, onSelectSolution }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const solutions: Solution[] = [
    {
      id: '1',
      category: 'vps',
      title: 'Managed n8n Standard',
      description: 'Máy chủ vps pre-built tối ưu riêng cho n8n, hỗ trợ Docker và bảo mật đa tầng.',
      impact: '99.9% Uptime',
      setupTime: '2 Giờ',
      tags: ['n8n', 'Docker', 'Backup']
    },
    {
      id: '2',
      category: 'workflow',
      title: 'E-commerce Auto-Sync',
      description: 'Tự động đồng bộ đơn hàng từ Shopee, Lazada về hệ thống quản trị và báo cáo.',
      impact: 'Tiết kiệm 4h/ngày',
      setupTime: '48 Giờ',
      tags: ['Automation', 'Shopee', 'API']
    },
    {
      id: '3',
      category: 'lowcode',
      title: 'Mobile Inventory App',
      description: 'Ứng dụng quản lý kho trên AppSheet, quét mã vạch và báo cáo tồn kho thời gian thực.',
      impact: 'No-loss Stock',
      setupTime: '5 Ngày',
      tags: ['AppSheet', 'Mobile', 'QR']
    },
    {
      id: '4',
      category: 'web',
      title: 'Premium Corporate Web',
      description: 'Thiết kế website doanh nghiệp chuẩn UI/UX hiện đại, tối ưu SEO và tốc độ load.',
      impact: '3x Conversion',
      setupTime: '10 Ngày',
      tags: ['UI/UX', 'SEO', 'React']
    },
    {
      id: '5',
      category: 'workflow',
      title: 'AI Agent CSKH n8n',
      description: 'Tích hợp AI Agent vào Workflow n8n để phản hồi khách hàng Zalo/Facebook 24/7.',
      impact: '80% Auto-Reply',
      setupTime: '72 Giờ',
      tags: ['Zalo AI', 'n8n', 'GPT']
    },
    {
      id: '6',
      category: 'lowcode',
      title: 'PowerApps HR Portal',
      description: 'Hệ thống quản lý nhân sự, chấm công và phê duyệt nghỉ phép nội bộ doanh nghiệp.',
      impact: 'Paperless Office',
      setupTime: '7 Ngày',
      tags: ['PowerApps', 'M365']
    }
  ];

  const filteredSolutions = useMemo(() => {
    return solutions.filter(s => {
      const matchesCategory = activeCategory === 'all' || s.category === activeCategory;
      const matchesSearch = s.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        s.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[120] flex items-center justify-center overflow-hidden">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-[#020617]/95 backdrop-blur-xl animate-in fade-in duration-500"
        onClick={onClose}
      />

      <div className="relative w-full h-full md:h-[90vh] md:max-w-6xl md:rounded-[3rem] bg-[#0B0F1A] border-white/5 border flex flex-col overflow-hidden animate-in slide-in-from-bottom-8 duration-500 shadow-3xl">
        {/* Header */}
        <div className="p-8 border-b border-white/5 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-1">
            <h2 className="text-3xl font-black text-white italic tracking-tight">Solution Catalog</h2>
            <p className="text-slate-500 text-sm font-medium">Khám phá các bản thiết kế hệ thống tối ưu cho doanh nghiệp</p>
          </div>

          <div className="flex flex-col md:flex-row items-stretch md:items-center gap-4">
            <div className="relative group">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-indigo-500 transition-colors" size={18} />
              <input
                type="text"
                placeholder="Tìm giải pháp..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-white/5 border border-white/10 rounded-2xl py-3 pl-12 pr-4 text-white focus:outline-none focus:border-indigo-500/50 min-w-[300px] transition-all"
              />
            </div>
            <button
              onClick={onClose}
              className="hidden md:flex p-3 bg-white/5 hover:bg-white/10 rounded-full text-slate-400 hover:text-white transition-all"
            >
              <X size={24} />
            </button>
          </div>
        </div>

        {/* Filter Bar */}
        <div className="px-8 py-4 bg-white/[0.02] border-b border-white/5 flex items-center space-x-2 overflow-x-auto no-scrollbar">
          <Filter size={16} className="text-slate-500 mr-2 flex-shrink-0" />
          {[
            { id: 'all', label: 'Tất cả', icon: <Layers size={14} /> },
            { id: 'vps', label: 'VPS n8n', icon: <Cpu size={14} /> },
            { id: 'workflow', label: 'Workflow Automation', icon: <Workflow size={14} /> },
            { id: 'lowcode', label: 'Low-code Apps', icon: <Layers size={14} /> },
            { id: 'web', label: 'Website Design', icon: <Globe size={14} /> },
          ].map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${activeCategory === cat.id
                ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/20'
                : 'bg-white/5 text-slate-400 hover:bg-white/10 hover:text-white'
                }`}
            >
              {cat.icon}
              <span>{cat.label}</span>
            </button>
          ))}
        </div>

        {/* Catalog Grid */}
        <div className="flex-grow overflow-y-auto p-8 no-scrollbar">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredSolutions.map((sol, idx) => (
              <div
                key={sol.id}
                style={{ animationDelay: `${idx * 50}ms` }}
                className="glass border border-white/5 rounded-3xl p-6 flex flex-col group hover:border-indigo-500/30 transition-all hover:-translate-y-1 animate-in fade-in slide-in-from-bottom-4 duration-500 fill-mode-both"
              >
                <div className="flex justify-between items-start mb-6">
                  <div className={`p-3 rounded-2xl ${sol.category === 'vps' ? 'bg-blue-500/10 text-blue-400' :
                    sol.category === 'workflow' ? 'bg-indigo-500/10 text-indigo-400' :
                      sol.category === 'lowcode' ? 'bg-purple-500/10 text-purple-400' : 'bg-pink-500/10 text-pink-400'
                    }`}>
                    {sol.category === 'vps' && <Cpu size={24} />}
                    {sol.category === 'workflow' && <Workflow size={24} />}
                    {sol.category === 'lowcode' && <Layers size={24} />}
                    {sol.category === 'web' && <Globe size={24} />}
                  </div>
                  <div className="flex flex-col items-end">
                    <span className="text-[10px] font-black uppercase text-indigo-500/80 tracking-widest">Impact</span>
                    <span className="text-xs font-bold text-slate-200 flex items-center">
                      <TrendingUp size={12} className="mr-1 text-green-500" />
                      {sol.impact}
                    </span>
                  </div>
                </div>

                <h4 className="text-lg font-bold text-white mb-3 group-hover:text-indigo-400 transition-colors">
                  {sol.title}
                </h4>
                <p className="text-sm text-slate-400 leading-relaxed mb-6 flex-grow">
                  {sol.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {sol.tags.map(tag => (
                    <span key={tag} className="text-[9px] font-bold px-2 py-1 rounded-md bg-white/5 text-slate-500 uppercase tracking-tighter">
                      #{tag}
                    </span>
                  ))}
                </div>

                <div className="pt-6 border-t border-white/5 flex items-center justify-between">
                  <div className="flex items-center text-slate-500 text-[10px] font-bold">
                    <Clock size={12} className="mr-1.5" />
                    Setup: {sol.setupTime}
                  </div>
                  <button
                    onClick={() => onSelectSolution(sol.title)}
                    className="p-2 bg-indigo-600/10 hover:bg-indigo-600 text-indigo-400 hover:text-white rounded-lg transition-all group/btn"
                  >
                    <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {filteredSolutions.length === 0 && (
            <div className="py-20 text-center space-y-4">
              <div className="w-20 h-20 bg-white/5 rounded-full flex items-center justify-center mx-auto text-slate-700">
                <Search size={40} />
              </div>
              <p className="text-slate-500 font-medium">Không tìm thấy giải pháp nào phù hợp với từ khóa của bạn.</p>
            </div>
          )}
        </div>

        {/* Bottom CTA */}
        <div className="p-8 bg-indigo-600 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center space-x-4 text-white">
            <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center">
              <Zap className="fill-white" size={24} />
            </div>
            <div>
              <h5 className="font-black italic text-lg leading-none">Bạn cần một giải pháp tùy chỉnh?</h5>
              <p className="text-indigo-100 text-sm font-medium opacity-80">Đội ngũ kỹ sư Nexcel sẵn sàng thiết kế riêng cho bạn.</p>
            </div>
          </div>
          <button
            onClick={() => onSelectSolution('Custom Solution')}
            className="px-8 py-4 bg-white text-indigo-600 rounded-2xl font-black hover:scale-105 transition-all shadow-xl shadow-black/10"
          >
            Liên hệ tư vấn Kỹ thuật
          </button>
        </div>
      </div>
    </div>
  );
};
