
import React, { useState, useEffect } from 'react';
import {
  Zap,
  Layers,
  Cpu,
  Globe,
  ShieldCheck,
  ChevronRight,
  Menu,
  X,
  BarChart3,
  Workflow,
  ArrowUpRight,
  Database,
  ExternalLink,
  Bot,
  Activity
} from 'lucide-react';
import { PricingSection } from './components/Pricing';
import { ServiceCard } from './components/ServiceCard';
import { WorkflowVisual } from './components/WorkflowVisual';
import { Footer } from './components/Footer';
import { GetStartedModal } from './components/GetStartedModal';
import { SolutionCatalog } from './components/SolutionCatalog';
import { WorkflowSolutionsModal } from './components/WorkflowSolutionsModal';
import { ITServicesModal } from './components/ITServicesModal';
import { PricingModal } from './components/PricingModal';
import { FooterContentModal, FooterContentType } from './components/FooterContentModal';
import { TemplateLibraryModal } from './components/TemplateLibraryModal';

const Logo = ({ className = "" }: { className?: string }) => (
  <a href="/" className={`flex items-center space-x-3 hover:opacity-80 transition-opacity ${className}`}>
    <div className="relative w-10 h-10 flex items-center justify-center">
      <div className="absolute inset-0 bg-indigo-600 rounded-xl rotate-6 opacity-20"></div>
      <div className="relative w-full h-full logo-gradient rounded-xl flex items-center justify-center shadow-lg shadow-indigo-600/30">
        <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 text-white" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 20V4l16 16V4" />
          <circle cx="4" cy="4" r="1.5" fill="currentColor" stroke="none" />
          <circle cx="20" cy="20" r="1.5" fill="currentColor" stroke="none" />
        </svg>
      </div>
    </div>
    <div className="flex flex-col -space-y-1">
      <span className="text-xl font-extrabold tracking-tight text-white">NEXCEL</span>
      <span className="text-[10px] font-bold tracking-[0.2em] text-indigo-400 uppercase">Tech Solutions</span>
    </div>
  </a>
);

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isGetStartedOpen, setIsGetStartedOpen] = useState(false);
  const [isCatalogOpen, setIsCatalogOpen] = useState(false);
  const [isWorkflowModalOpen, setIsWorkflowModalOpen] = useState(false);
  const [isITServicesOpen, setIsITServicesOpen] = useState(false);
  const [isPricingModalOpen, setIsPricingModalOpen] = useState(false);
  const [isTemplateLibraryOpen, setIsTemplateLibraryOpen] = useState(false);
  const [footerContent, setFooterContent] = useState<{ isOpen: boolean; type: FooterContentType | null }>({
    isOpen: false,
    type: null
  });
  const [getStartedConfig, setGetStartedConfig] = useState<{ service?: string; step?: 'SERVICE' | 'CONTACT' }>({});

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const features = [
    {
      icon: <Cpu className="text-indigo-400" />,
      title: "VPS n8n Chuyên dụng",
      description: "Máy chủ pre-built tối ưu riêng cho n8n, bảo vệ an toàn tuyệt đối."
    },
    {
      icon: <Workflow className="text-blue-400" />,
      title: "Giải pháp Workflow",
      description: "Thiết kế quy trình tự động hóa n8n & Power Automate chuyên nghiệp."
    },
    {
      icon: <Layers className="text-purple-400" />,
      title: "Power Apps & AppSheet",
      description: "Xây dựng ứng dụng quản trị Low-code linh hoạt cho doanh nghiệp."
    },
    {
      icon: <Globe className="text-pink-400" />,
      title: "Thiết kế Website",
      description: "Website doanh nghiệp chuẩn SEO, UI/UX hiện đại và chuyển đổi cao."
    }
  ];

  const handleConsultRequest = (context?: string) => {
    setIsCatalogOpen(false);
    setIsWorkflowModalOpen(false);
    setIsITServicesOpen(false);
    setIsPricingModalOpen(false);
    setFooterContent({ ...footerContent, isOpen: false });

    // Auto-select service and skip to contact if it's a VPS plan or Template setup
    if (context && (context.toLowerCase().includes('n8n') || context.toLowerCase().includes('vps'))) {
      setGetStartedConfig({ service: 'vps', step: 'CONTACT' });
    } else if (context && context.toLowerCase().includes('template')) {
      setGetStartedConfig({ service: 'automation', step: 'CONTACT' });
    } else {
      setGetStartedConfig({ service: undefined, step: 'SERVICE' });
    }

    setIsGetStartedOpen(true);
  };

  const openFooterLink = (type: FooterContentType) => {
    if (type === 'template-library' as any) {
      setIsTemplateLibraryOpen(true);
      return;
    }
    setFooterContent({ isOpen: true, type });
  };

  return (
    <div className="min-h-screen relative">
      <div className="hero-glow pointer-events-none" />

      {/* Navbar */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'glass py-3' : 'bg-transparent py-5'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <Logo />

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#vps" className="text-sm font-medium text-slate-400 hover:text-white transition-colors">VPS n8n</a>
            <button
              onClick={() => setIsWorkflowModalOpen(true)}
              className="text-sm font-medium text-slate-400 hover:text-white transition-colors"
            >
              Workflow & Low-code
            </button>
            <button
              onClick={() => setIsITServicesOpen(true)}
              className="text-sm font-medium text-slate-400 hover:text-white transition-colors"
            >
              Thiết kế Website
            </button>
            <button
              onClick={() => setIsTemplateLibraryOpen(true)}
              className="text-sm font-medium text-slate-400 hover:text-white transition-colors"
            >
              Kho Template
            </button>
            <button
              onClick={() => setIsPricingModalOpen(true)}
              className="text-sm font-medium text-slate-400 hover:text-white transition-colors"
            >
              Bảng giá
            </button>
            <button
              onClick={() => setIsGetStartedOpen(true)}
              className="px-6 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-full text-sm font-bold transition-all shadow-lg shadow-indigo-600/20"
            >
              Liên hệ ngay
            </button>
          </div>

          {/* Mobile Toggle */}
          <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-[#020617] border-b border-slate-800 p-6 flex flex-col space-y-4">
            <a href="#vps" onClick={() => setIsMenuOpen(false)} className="text-lg">VPS n8n</a>
            <button onClick={() => { setIsWorkflowModalOpen(true); setIsMenuOpen(false); }} className="text-left text-lg">Workflow & Low-code</button>
            <button onClick={() => { setIsITServicesOpen(true); setIsMenuOpen(false); }} className="text-left text-lg">Thiết kế Website</button>
            <button onClick={() => { setIsTemplateLibraryOpen(true); setIsMenuOpen(false); }} className="text-left text-lg">Kho Template n8n</button>
            <button onClick={() => { setIsPricingModalOpen(true); setIsMenuOpen(false); }} className="text-left text-lg">Bảng giá công khai</button>
            <button
              onClick={() => { setIsGetStartedOpen(true); setIsMenuOpen(false); }}
              className="w-full py-3 bg-indigo-600 rounded-lg text-white font-semibold"
            >
              Liên hệ tư vấn
            </button>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-40 pb-24 px-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-bold uppercase tracking-widest">
              <Activity size={14} className="mr-2" />
              High Performance Computing
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-[1.05]">
              Tự động hóa toàn diện <br />
              với <span className="gradient-text">Nexcel Tech Solutions</span>
            </h1>
            <p className="text-lg text-slate-400 max-w-lg leading-relaxed font-medium">
              Cung cấp VPS n8n dựng sẵn và giải pháp Low-code, giúp doanh nghiệp vận hành thông minh và giải phóng nguồn lực.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <button
                onClick={() => setIsGetStartedOpen(true)}
                className="px-10 py-4 bg-indigo-600 hover:bg-indigo-500 text-white rounded-2xl font-bold flex items-center justify-center transition-all group shadow-xl shadow-indigo-600/20"
              >
                Bắt đầu trải nghiệm
                <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </button>
              <button
                onClick={() => setIsCatalogOpen(true)}
                className="px-10 py-4 bg-slate-900/50 hover:bg-slate-800 text-white border border-slate-800 rounded-2xl font-bold flex items-center justify-center transition-all"
              >
                Xem Catalog giải pháp
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-tr from-indigo-500/10 via-purple-500/10 to-transparent rounded-[3rem] blur-3xl"></div>
            <div className="relative glass p-6 rounded-[2.5rem] border border-white/10 shadow-3xl overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 to-purple-600"></div>
              <WorkflowVisual />
            </div>
          </div>
        </div>
      </section>

      {/* Solution Hub - Unified Feature & Workflow Section */}
      <section id="services" className="py-32 relative overflow-hidden bg-[#020617]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-black uppercase tracking-[0.2em]">
              Giải pháp toàn diện
            </div>
            <h2 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
              Khai phóng tiềm năng <br /> bằng <span className="gradient-text">Công nghệ số</span>
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed font-medium">
              Chúng tôi tập trung vào 4 trụ cột cốt lõi giúp doanh nghiệp của bạn vận hành thông minh hơn, nhanh hơn và hiệu quả hơn.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, idx) => (
              <div
                key={idx}
                onClick={() => {
                  if (idx === 0) setIsPricingModalOpen(true);
                  if (idx === 1 || idx === 2) setIsWorkflowModalOpen(true);
                  if (idx === 3) setIsITServicesOpen(true);
                }}
                className="group relative p-8 glass rounded-[2.5rem] border border-white/5 hover:border-indigo-500/30 transition-all cursor-pointer hover:-translate-y-2"
              >
                <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-indigo-500/10 transition-all duration-500">
                  {React.cloneElement(feature.icon as React.ReactElement<any>, { size: 32 })}
                </div>
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-indigo-400 transition-colors uppercase tracking-tight">
                  {feature.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                  {feature.description}
                </p>
                <div className="flex items-center text-indigo-400 text-xs font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                  Xem chi tiết <ChevronRight size={14} className="ml-1" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section - Direct focus after services */}
      <div className="bg-[#020617] relative">
        <div className="absolute inset-0 bg-indigo-600/5 blur-3xl rounded-full translate-y-1/2 pointer-events-none"></div>
        <PricingSection onSelectPlan={handleConsultRequest} />
      </div>

      {/* Footer with handlers */}
      <div className="relative z-20">
        <Footer onLinkClick={openFooterLink} />
      </div>

      {/* Modals */}
      <GetStartedModal
        isOpen={isGetStartedOpen}
        onClose={() => setIsGetStartedOpen(false)}
        initialService={getStartedConfig.service}
        initialStep={getStartedConfig.step}
      />

      <SolutionCatalog
        isOpen={isCatalogOpen}
        onClose={() => setIsCatalogOpen(false)}
        onSelectSolution={handleConsultRequest}
      />

      <WorkflowSolutionsModal
        isOpen={isWorkflowModalOpen}
        onClose={() => setIsWorkflowModalOpen(false)}
        onConsult={handleConsultRequest}
      />

      <ITServicesModal
        isOpen={isITServicesOpen}
        onClose={() => setIsITServicesOpen(false)}
        onConsult={handleConsultRequest}
      />

      <PricingModal
        isOpen={isPricingModalOpen}
        onClose={() => setIsPricingModalOpen(false)}
        onSelectPlan={handleConsultRequest}
      />

      <TemplateLibraryModal
        isOpen={isTemplateLibraryOpen}
        onClose={() => setIsTemplateLibraryOpen(false)}
        onConsult={handleConsultRequest}
      />

      <FooterContentModal
        isOpen={footerContent.isOpen}
        contentType={footerContent.type}
        onClose={() => setFooterContent({ ...footerContent, isOpen: false })}
        onAction={handleConsultRequest}
      />

      {/* Floating CTA */}
      <div className="fixed bottom-8 right-8 z-50">
        <a
          href="https://zalo.me/0877200396"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-3 px-6 py-4 bg-indigo-600 hover:bg-indigo-500 text-white rounded-full shadow-2xl transition-all group active:scale-95"
        >
          <Zap size={20} className="group-hover:animate-pulse" />
          <span className="font-bold hidden md:inline">Zalo tư vấn (0877200396)</span>
        </a>
      </div>
    </div>
  );
};

export default App;
