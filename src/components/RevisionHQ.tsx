
import React, { useState } from 'react';
import { Search, Brain, FileText, Zap, ChevronRight, CheckCircle2 } from 'lucide-react';
import { Chapter } from '../types';

export const RevisionHQ: React.FC<{ chapter: Chapter }> = ({ chapter }) => {
  const [activeTab, setActiveTab] = useState<'mindmap' | 'flashcards' | 'cheatsheet'>('flashcards');
  const [currentCardIdx, setCurrentCardIdx] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  const curCard = chapter.flashcards[currentCardIdx];

  return (
    <div className="animate-in fade-in duration-700">
      <div className="flex gap-4 mb-8 bg-white p-2 rounded-2xl border border-gray-100 shadow-sm w-fit">
        {[
          { id: 'flashcards', label: 'Flashcards', icon: Zap },
          { id: 'mindmap', label: 'Mind Map', icon: Brain },
          { id: 'cheatsheet', label: 'Cheat Sheet', icon: FileText },
        ].map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as any)}
            className={`flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold transition-all ${activeTab === tab.id ? 'bg-indigo-900 text-white shadow-lg' : 'text-gray-500 hover:bg-indigo-50 hover:text-indigo-600'}`}
          >
            <tab.icon className={`w-4 h-4 ${activeTab === tab.id ? 'text-amber-400' : ''}`} />
            {tab.label}
          </button>
        ))}
      </div>

      <div className="min-h-[500px]">
        {activeTab === 'flashcards' && (
          <div className="flex flex-col items-center">
            <div className="w-full max-w-xl perspective-1000 mt-10">
              <div 
                onClick={() => setIsFlipped(!isFlipped)}
                className={`relative w-full h-[350px] transition-all duration-500 preserve-3d cursor-pointer ${isFlipped ? 'rotate-y-180' : ''}`}
              >
                {/* Front */}
                <div className="absolute inset-0 backface-hidden bg-white rounded-[2.5rem] p-12 shadow-xl border border-indigo-100 flex flex-col justify-center items-center text-center">
                  <span className="text-[10px] font-black text-indigo-400 uppercase tracking-[0.2em] mb-6 block">{curCard.category}</span>
                  <h3 className="text-2xl font-black text-gray-900 leading-tight italic">"{curCard.question}"</h3>
                  <p className="mt-10 text-xs font-bold text-gray-400 flex items-center gap-2">
                    <Zap className="w-3 h-3 text-amber-500" /> Click to reveal answer
                  </p>
                </div>
                {/* Back */}
                <div className="absolute inset-0 backface-hidden rotate-y-180 bg-indigo-900 rounded-[2.5rem] p-12 shadow-xl flex flex-col justify-center items-center text-center text-white">
                  <CheckCircle2 className="w-10 h-10 text-emerald-400 mb-6" />
                  <p className="text-xl font-bold leading-relaxed">{curCard.answer}</p>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-8 mt-12">
              <button 
                disabled={currentCardIdx === 0}
                onClick={() => { setCurrentCardIdx(i => i - 1); setIsFlipped(false); }}
                className="p-4 rounded-full bg-white border border-gray-100 text-indigo-900 shadow-sm disabled:opacity-30 disabled:cursor-not-allowed hover:bg-indigo-50 transition-all"
                aria-label="Previous card"
              >
                <ChevronRight className="w-6 h-6 rotate-180" />
              </button>
              <span className="text-sm font-black text-gray-500 tracking-widest">{currentCardIdx + 1} / {chapter.flashcards.length}</span>
              <button 
                disabled={currentCardIdx === chapter.flashcards.length - 1}
                onClick={() => { setCurrentCardIdx(i => i + 1); setIsFlipped(false); }}
                className="p-4 rounded-full bg-white border border-gray-100 text-indigo-900 shadow-sm disabled:opacity-30 disabled:cursor-not-allowed hover:bg-indigo-50 transition-all"
                aria-label="Next card"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        )}

        {activeTab === 'cheatsheet' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {chapter.cheatSheet.map((section, i) => (
              <div key={i} className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
                <h5 className="text-lg font-black text-indigo-900 mb-6 flex items-center gap-3">
                   <div className="h-2 w-2 rounded-full bg-indigo-500" />
                  {section.title}
                </h5>
                {Array.isArray(section.points || section.content) ? (
                  <ul className="grid gap-4">
                    {((section.points || section.content) as string[]).map((point: string, j: number) => (
                      <li key={j} className="flex gap-3 text-sm font-medium text-gray-600 bg-gray-50 p-4 rounded-2xl border border-gray-100">
                        <span className="text-indigo-400 font-black">#</span>
                        {point}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <div className="text-sm font-medium text-gray-600 bg-gray-50 p-6 rounded-2xl border border-gray-100 whitespace-pre-wrap">
                    {section.content}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {activeTab === 'mindmap' && (
          <div className="bg-white p-12 rounded-[3rem] border border-gray-100 shadow-sm flex justify-center">
            <div className="w-full max-w-2xl">
               <MindMapNodeView node={chapter.mindMap} isRoot />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const MindMapNodeView: React.FC<{ node: any; isRoot?: boolean }> = ({ node, isRoot }) => {
  return (
    <div className={`flex flex-col items-center ${isRoot ? '' : 'mt-6'}`}>
      <div className={`px-8 py-4 rounded-2xl font-black text-sm shadow-sm border transition-all ${isRoot ? 'bg-indigo-900 text-white border-indigo-800 scale-110 mb-8' : 'bg-white text-indigo-900 border-indigo-50 hover:bg-indigo-50'}`}>
        {node.label}
      </div>
      {node.children && (
        <div className="flex flex-wrap justify-center gap-x-12 relative w-full pt-8">
           <div className="absolute top-0 left-1/2 -content-[ ] w-px h-8 bg-indigo-100" />
           {node.children.map((child: any) => (
             <MindMapNodeView key={child.id} node={child} />
           ))}
        </div>
      )}
    </div>
  );
};
