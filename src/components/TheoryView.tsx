
import React, { useState } from 'react';
import { Zap, ChevronRight } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Chapter, TheoryTopic } from '../types';

export const TheoryView: React.FC<{ chapter: Chapter }> = ({ chapter }) => {
  const [selectedTopic, setSelectedTopic] = useState<TheoryTopic | null>(chapter.topics[0]);

  return (
    <div className="flex flex-col md:flex-row gap-8 animate-in fade-in duration-700">
      <div className="md:w-1/4 flex flex-col gap-2">
        <h4 className="text-xs font-black text-gray-400 uppercase tracking-widest mb-4">Subtopics</h4>
        {chapter.topics.map(topic => (
          <button
            key={topic.id}
            onClick={() => setSelectedTopic(topic)}
            className={`text-left p-4 rounded-xl text-sm font-bold transition-all ${selectedTopic?.id === topic.id ? 'bg-indigo-900 text-white shadow-lg' : 'bg-white text-gray-600 hover:bg-indigo-50 border border-gray-100'}`}
          >
            {topic.title}
          </button>
        ))}
      </div>
      <div className="md:w-3/4">
        {selectedTopic && (
          <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
            <h2 className="text-3xl font-black text-gray-900 mb-4">{selectedTopic.title}</h2>
            <div className="prose prose-indigo max-w-none mb-8">
               <ReactMarkdown remarkPlugins={[remarkGfm]}>{selectedTopic.description}</ReactMarkdown>
            </div>
            
            <div className="grid gap-6">
              {Array.isArray(selectedTopic.content) ? (
                selectedTopic.content.map((p, i) => (
                  <div key={i} className="flex gap-4 p-4 bg-gray-50 rounded-2xl border-l-4 border-indigo-600">
                    <div className="mt-1 h-2 w-2 rounded-full bg-indigo-600 flex-shrink-0" />
                    <div className="text-gray-800 font-medium">
                      <ReactMarkdown remarkPlugins={[remarkGfm]}>{p}</ReactMarkdown>
                    </div>
                  </div>
                ))
              ) : (
                <div className="prose prose-indigo max-w-none">
                  <ReactMarkdown remarkPlugins={[remarkGfm]}>{selectedTopic.content}</ReactMarkdown>
                </div>
              )}
            </div>

            <div className="mt-12 grid gap-10">
              <h4 className="text-lg font-black text-indigo-900 flex items-center gap-2">
                <Zap className="w-5 h-5 text-amber-500" />
                Study Visualizations
              </h4>
              {selectedTopic.visualizations.map((vis) => (
                <div key={vis.id} className="bg-indigo-50/50 rounded-3xl p-6 border border-indigo-100">
                  <h5 className="font-bold text-indigo-800 mb-4 flex items-center justify-between">
                    {vis.title}
                    <span className="text-xs px-2 py-1 bg-indigo-200 text-indigo-700 rounded uppercase">{vis.type}</span>
                  </h5>
                  {vis.type === 'table' && 'headers' in vis.data ? (
                    <div className="overflow-x-auto rounded-xl shadow-sm">
                      <table className="w-full text-left text-sm">
                        <thead className="bg-indigo-900 text-white">
                          <tr>
                            {vis.data.headers.map((h: string, i: number) => <th key={i} className="px-4 py-3 font-black whitespace-nowrap">{h}</th>)}
                          </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-indigo-100">
                          {vis.data.rows.map((row: string[], i: number) => (
                            <tr key={i} className="hover:bg-indigo-50 transition-colors">
                              {row.map((cell, j) => <td key={j} className="px-4 py-4 text-gray-700 font-medium">{cell}</td>)}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  ) : vis.type === 'grid' && Array.isArray(vis.data) && typeof vis.data[0] !== 'string' ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {(vis.data as {label: string; desc: string}[]).map((item, i: number) => (
                        <div key={i} className="bg-white p-5 rounded-2xl border border-indigo-100 shadow-sm">
                          <p className="text-indigo-900 font-black text-sm mb-1 uppercase tracking-tight">{item.label}</p>
                          <p className="text-gray-600 text-sm font-medium">{item.desc}</p>
                        </div>
                      ))}
                    </div>
                  ) : vis.type === 'list' && Array.isArray(vis.data) ? (
                    <div className="flex flex-wrap gap-3">
                      {(vis.data as string[]).map((item, i) => (
                        <div key={i} className="bg-white p-4 rounded-xl border border-indigo-200 shadow-sm font-bold text-indigo-900 text-sm">
                          {item}
                        </div>
                      ))}
                    </div>
                  ) : vis.type === 'process' && Array.isArray(vis.data) ? (
                    <div className="grid grid-cols-1 gap-4">
                      {(vis.data as {title: string; description: string}[]).map((item, i: number) => (
                        <div key={i} className="bg-white p-5 rounded-2xl border border-indigo-100 shadow-sm flex items-center gap-4">
                          <div className="h-8 w-8 rounded-full bg-indigo-900 text-white flex items-center justify-center font-black flex-shrink-0 text-xs">
                            {i + 1}
                          </div>
                          <div>
                            <p className="text-indigo-900 font-black text-sm mb-0.5 uppercase tracking-tight">{item.title}</p>
                            <p className="text-gray-600 text-sm font-medium leading-relaxed">{item.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="flex flex-wrap items-center gap-3">
                      {Array.isArray(vis.data) && (vis.data as any[]).map((step, i, arr) => (
                        <React.Fragment key={i}>
                          <div className="bg-white p-4 rounded-xl border border-indigo-200 shadow-sm font-bold text-indigo-900 text-sm">
                            {typeof step === 'string' ? step : (step as any).label || (step as any).title || 'Step'}
                          </div>

                          {i < arr.length - 1 && <ChevronRight className="w-5 h-5 text-indigo-300" />}
                        </React.Fragment>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
