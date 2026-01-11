
import React, { useState, useMemo } from 'react';
import {
    X, Search, Filter, Play, Download,
    Zap, Bot, ShoppingCart, Users,
    Settings, ArrowRight, CheckCircle2,
    Code2, Share2, Sparkles
} from 'lucide-react';

interface Template {
    id: string;
    category: 'ecommerce' | 'ai' | 'crm' | 'utility';
    title: string;
    description: string;
    complexity: 'Cơ bản' | 'Trung bình' | 'Nâng cao';
    nodes: number;
    highlight: string;
    tags: string[];
}

interface TemplateLibraryModalProps {
    isOpen: boolean;
    onClose: () => void;
    onConsult: (templateTitle: string) => void;
}

export const TemplateLibraryModal: React.FC<TemplateLibraryModalProps> = ({ isOpen, onClose, onConsult }) => {
    const [activeCategory, setActiveCategory] = useState<string>('all');
    const [searchQuery, setSearchQuery] = useState('');

    const templates: Template[] = [
        {
            id: '1',
            category: 'ecommerce',
            title: 'Shopee -> Google Sheets Sync',
            description: 'Tự động lấy đơn hàng mới từ Shopee Partner API và lưu vào Google Sheets để báo cáo.',
            complexity: 'Trung bình',
            nodes: 12,
            highlight: 'Tiết kiệm 2h nhập liệu/ngày',
            tags: ['Shopee', 'Sheets', 'Order Sync']
        },
        {
            id: '2',
            category: 'ai',
            title: 'Zalo AI Customer Assistant',
            description: 'Tích hợp OpenAI GPT-4 với Zalo OA để tự động trả lời khách hàng 24/7 theo kịch bản.',
            complexity: 'Nâng cao',
            nodes: 15,
            highlight: 'Phản hồi ngay lập tức 100%',
            tags: ['Zalo', 'GPT-4', 'AI Agent']
        },
        {
            id: '3',
            category: 'crm',
            title: 'Facebook Lead -> HubSpot',
            description: 'Tự động đẩy thông tin khách hàng tiềm năng từ Facebook Lead Ads về CRM HubSpot.',
            complexity: 'Cơ bản',
            nodes: 8,
            highlight: 'Tăng 20% tỷ lệ chốt sales',
            tags: ['Facebook', 'HubSpot', 'CRM']
        },
        {
            id: '4',
            category: 'utility',
            title: 'Daily Business Summary (Telegram)',
            description: 'Tổng hợp doanh thu, traffic và tồn kho cuối ngày gửi báo cáo qua Telegram cho Manager.',
            complexity: 'Trung bình',
            nodes: 10,
            highlight: 'Nắm bắt chỉ số nhanh',
            tags: ['Telegram', 'Reporting', 'Admin']
        },
        {
            id: '5',
            category: 'ai',
            title: 'Audio Transcription & Summary',
            description: 'Tự động nhận diện file ghi âm cuộc họp, chuyển thành văn bản và tóm tắt ý chính.',
            complexity: 'Nâng cao',
            nodes: 18,
            highlight: 'Số hóa nội dung họp 100%',
            tags: ['Whisper', 'OpenAI', 'Slack']
        },
        {
            id: '6',
            category: 'ecommerce',
            title: 'Lazada Stock Sentinel',
            description: 'Cảnh báo khi tồn kho Lazada xuống dưới mức tối thiểu và tự động cập nhật kho Shopee.',
            complexity: 'Trung bình',
            nodes: 14,
            highlight: 'Tránh tình trạng hết hàng',
            tags: ['Lazada', 'Inventory', 'Multi-channel']
        }
    ];

    const filteredTemplates = useMemo(() => {
        return templates.filter(t => {
            const matchesCategory = activeCategory === 'all' || t.category === activeCategory;
            const matchesSearch = t.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                t.description.toLowerCase().includes(searchQuery.toLowerCase());
            return matchesCategory && matchesSearch;
        });
    }, [activeCategory, searchQuery]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[180] flex items-center justify-center overflow-hidden">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-[#020617]/95 backdrop-blur-3xl animate-in fade-in duration-500"
                onClick={onClose}
            />

            <div className="relative w-full h-full md:h-[90vh] md:max-w-6xl md:rounded-[3rem] bg-[#0B0F1A] border-white/5 border flex flex-col overflow-hidden animate-in slide-in-from-bottom-8 duration-500 shadow-3xl">
                {/* Header */}
                <div className="p-8 border-b border-white/5 flex flex-col md:flex-row md:items-center justify-between gap-6">
                    <div className="space-y-1">
                        <h2 className="text-3xl font-black text-white italic tracking-tight flex items-center">
                            <Sparkles className="text-indigo-500 mr-3" size={28} />
                            n8n Template Library
                        </h2>
                        <p className="text-slate-500 text-sm font-medium">Kho tài nguyên tự động hóa độc quyền cho khách hàng Nexcel</p>
                    </div>

                    <div className="flex flex-col md:flex-row items-stretch md:items-center gap-4">
                        <div className="relative group">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-indigo-500 transition-colors" size={18} />
                            <input
                                type="text"
                                placeholder="Tìm workflow mẫu..."
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
                        { id: 'all', label: 'Tất cả', icon: <Share2 size={14} /> },
                        { id: 'ecommerce', label: 'E-commerce', icon: <ShoppingCart size={14} /> },
                        { id: 'ai', label: 'AI Solutions', icon: <Bot size={14} /> },
                        { id: 'crm', label: 'CRM & Sales', icon: <Users size={14} /> },
                        { id: 'utility', label: 'Utilities', icon: <Settings size={14} /> },
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
                        {filteredTemplates.map((template, idx) => (
                            <div
                                key={template.id}
                                style={{ animationDelay: `${idx * 50}ms` }}
                                className="glass border border-white/5 rounded-3xl p-6 flex flex-col group hover:border-indigo-500/30 transition-all hover:-translate-y-1 animate-in fade-in slide-in-from-bottom-4 duration-500 fill-mode-both"
                            >
                                <div className="flex justify-between items-start mb-6">
                                    <div className={`p-3 rounded-2xl ${template.category === 'ecommerce' ? 'bg-blue-500/10 text-blue-400' :
                                            template.category === 'ai' ? 'bg-indigo-500/10 text-indigo-400' :
                                                template.category === 'crm' ? 'bg-purple-500/10 text-purple-400' : 'bg-pink-500/10 text-pink-400'
                                        }`}>
                                        {template.category === 'ecommerce' && <ShoppingCart size={24} />}
                                        {template.category === 'ai' && <Bot size={24} />}
                                        {template.category === 'crm' && <Users size={24} />}
                                        {template.category === 'utility' && <Settings size={24} />}
                                    </div>
                                    <div className="flex flex-col items-end">
                                        <span className="text-[9px] font-black uppercase text-indigo-500 tracking-widest">{template.complexity}</span>
                                        <span className="text-[10px] font-bold text-slate-400 mt-1">
                                            {template.nodes} Nodes
                                        </span>
                                    </div>
                                </div>

                                <h4 className="text-lg font-bold text-white mb-2 group-hover:text-indigo-400 transition-colors">
                                    {template.title}
                                </h4>
                                <div className="flex items-center space-x-2 mb-4">
                                    <span className="flex items-center text-[10px] font-bold text-green-400 py-1 px-2 rounded-lg bg-green-400/10">
                                        <CheckCircle2 size={10} className="mr-1" />
                                        {template.highlight}
                                    </span>
                                </div>
                                <p className="text-sm text-slate-400 leading-relaxed mb-6 flex-grow line-clamp-2">
                                    {template.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mb-6">
                                    {template.tags.map(tag => (
                                        <span key={tag} className="text-[9px] font-bold px-2 py-1 rounded-md bg-white/5 text-slate-500 uppercase tracking-tighter">
                                            #{tag}
                                        </span>
                                    ))}
                                </div>

                                <div className="pt-6 border-t border-white/5 flex items-center justify-between">
                                    <div className="flex items-center space-x-3">
                                        <button className="flex items-center text-[10px] font-bold text-slate-500 hover:text-white transition-colors">
                                            <Play size={12} className="mr-1.5" />
                                            Demo
                                        </button>
                                        <button className="flex items-center text-[10px] font-bold text-slate-500 hover:text-white transition-colors">
                                            <Download size={12} className="mr-1.5" />
                                            JSON
                                        </button>
                                    </div>
                                    <button
                                        onClick={() => onConsult(`Setup Template: ${template.title}`)}
                                        className="flex items-center px-4 py-2 bg-indigo-600/10 hover:bg-indigo-600 text-indigo-400 hover:text-white rounded-xl text-xs font-bold transition-all group/btn"
                                    >
                                        Cài đặt ngay
                                        <ArrowRight size={14} className="ml-1.5 group-hover/btn:translate-x-1 transition-transform" />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                    {filteredTemplates.length === 0 && (
                        <div className="py-20 text-center space-y-4">
                            <div className="w-20 h-20 bg-white/5 rounded-full flex items-center justify-center mx-auto text-slate-700">
                                <Search size={40} />
                            </div>
                            <p className="text-slate-500 font-medium">Không tìm thấy template nào phù hợp với từ khóa của bạn.</p>
                        </div>
                    )}
                </div>

                {/* Bottom CTA */}
                <div className="p-8 bg-indigo-600 flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="flex items-center space-x-4 text-white text-center md:text-left">
                        <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center flex-shrink-0">
                            <Zap className="fill-white" size={24} />
                        </div>
                        <div>
                            <h5 className="font-black italic text-lg leading-none">Cần một Template chuyên sâu hơn?</h5>
                            <p className="text-indigo-100 text-sm font-medium opacity-80">Chúng tôi hỗ trợ viết Script và tích hợp API tùy chỉnh cho doanh nghiệp.</p>
                        </div>
                    </div>
                    <button
                        onClick={() => onConsult('Custom Workflow Development')}
                        className="px-8 py-4 bg-white text-indigo-600 rounded-2xl font-black hover:scale-105 transition-all shadow-xl shadow-black/10 whitespace-nowrap"
                    >
                        Yêu cầu Template Riêng
                    </button>
                </div>
            </div>
        </div>
    );
};
