
import React from 'react';
import { Mail, ArrowRight, Share2, Save, Send } from 'lucide-react';

export const WorkflowVisual: React.FC = () => {
  return (
    <div className="w-full aspect-video bg-[#0B0F1A] rounded-xl overflow-hidden flex flex-col p-6">
      <div className="flex items-center space-x-2 mb-8 border-b border-white/5 pb-4">
        <div className="flex space-x-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500/40"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/40"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-green-500/40"></div>
        </div>
        <div className="text-[10px] text-slate-500 font-mono tracking-widest uppercase ml-4">Automation Flow Editor v2.4</div>
      </div>

      <div className="flex-grow flex items-center justify-between relative px-4">
        {/* Node 1 */}
        <div className="z-10 animate-bounce" style={{ animationDuration: '3s' }}>
          <div className="p-4 bg-indigo-600/20 border border-indigo-500/40 rounded-xl flex flex-col items-center space-y-2">
            <div className="w-10 h-10 bg-indigo-500 rounded-lg flex items-center justify-center text-white">
              <Mail size={20} />
            </div>
            <span className="text-[10px] font-bold text-indigo-300">New Email</span>
          </div>
        </div>

        {/* Connection 1 */}
        <div className="absolute left-[80px] top-1/2 -translate-y-1/2 w-[calc(100%-240px)] h-[1px] bg-gradient-to-r from-indigo-500/50 via-purple-500/50 to-pink-500/50">
          <div className="absolute top-1/2 -translate-y-1/2 left-0 h-1.5 w-1.5 rounded-full bg-indigo-400 shadow-[0_0_10px_#818cf8] animate-[ping_2s_infinite]"></div>
        </div>

        {/* Node 2 - AI Processor */}
        <div className="z-10 p-4 bg-purple-600/20 border border-purple-500/40 rounded-xl flex flex-col items-center space-y-2 translate-y-4">
          <div className="w-10 h-10 bg-purple-500 rounded-lg flex items-center justify-center text-white">
            <Share2 size={20} />
          </div>
          <span className="text-[10px] font-bold text-purple-300">AI Analysis</span>
        </div>

        {/* Node 3 - Result */}
        <div className="z-10 p-4 bg-pink-600/20 border border-pink-500/40 rounded-xl flex flex-col items-center space-y-2">
          <div className="w-10 h-10 bg-pink-500 rounded-lg flex items-center justify-center text-white">
            <Save size={20} />
          </div>
          <span className="text-[10px] font-bold text-pink-300">Update CRM</span>
        </div>
      </div>

      <div className="mt-8 flex justify-end space-x-3">
        <div className="px-3 py-1.5 bg-white/5 rounded text-[10px] text-slate-400 border border-white/5 flex items-center">
          <Send size={12} className="mr-1.5" />
          Test Flow
        </div>
        <div className="px-3 py-1.5 bg-indigo-600 rounded text-[10px] text-white font-bold flex items-center">
          Publish Changes
          <ArrowRight size={12} className="ml-1.5" />
        </div>
      </div>
    </div>
  );
};
