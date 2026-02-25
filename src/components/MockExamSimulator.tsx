import React, { useState, useEffect, useMemo } from 'react';
import { ChevronDown, RefreshCcw, Filter, AlertCircle, Sparkles } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { ALL_UNITS } from '../data';

export const MockExamSimulator: React.FC<{ onBack: () => void }> = ({ onBack }) => {
    const [questions, setQuestions] = useState<any[]>([]);
    const [filter, setFilter] = useState<'all' | 'mcq' | 'subjective'>('all');
    const [revealed, setRevealed] = useState<Set<string>>(new Set());
    const [isAnimating, setIsAnimating] = useState(false);

    // Flatten all questions across all 8 units
    const masterQuestionPool = useMemo(() => {
        const pool: any[] = [];
        ALL_UNITS.forEach(unit => {
            unit.sqp.forEach(q => {
                pool.push({ ...q, unitName: unit.name });
            });
        });
        return pool;
    }, []);

    const generateRandomPaper = () => {
        setIsAnimating(true);
        setRevealed(new Set());

        // Fisher-Yates shuffle
        const shuffled = [...masterQuestionPool];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }

        // Present all 140+ available questions
        setTimeout(() => {
            setQuestions(shuffled);
            setIsAnimating(false);
        }, 300);
    };

    useEffect(() => {
        generateRandomPaper();
    }, [masterQuestionPool]);

    const toggleReveal = (id: string) => {
        const newRevealed = new Set(revealed);
        if (newRevealed.has(id)) {
            newRevealed.delete(id);
        } else {
            newRevealed.add(id);
        }
        setRevealed(newRevealed);
    };

    const filteredQuestions = useMemo(() => {
        return questions.filter(q => {
            const isMcq = !!(q.optionA || q.optionB || q.optionC || q.optionD);
            if (filter === 'mcq') return isMcq;
            if (filter === 'subjective') return !isMcq;
            return true;
        });
    }, [questions, filter]);

    return (
        <div className="animate-in fade-in duration-700 max-w-5xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 border-b border-gray-200 pb-8">
                <div>
                    <button
                        onClick={onBack}
                        className="text-[10px] font-black text-indigo-700 hover:text-indigo-900 transition-colors flex items-center gap-1 mb-3 uppercase tracking-widest"
                    >
                        ← Back to Dashboard
                    </button>
                    <h1 className="text-3xl md:text-5xl font-black text-gray-900 tracking-tight flex items-center gap-3">
                        Mock Exam <span className="text-indigo-600">Simulator</span>
                    </h1>
                    <p className="text-gray-500 font-medium mt-2 max-w-2xl text-sm md:text-base leading-relaxed">
                        Ready to test your instincts? This engine randomizes the entire archive of over 140 historic SQP scenarios spanning all 8 units to create ultimate, unpredictable mock papers.
                    </p>
                </div>

                <button
                    onClick={generateRandomPaper}
                    disabled={isAnimating}
                    className="flex-shrink-0 flex items-center gap-2 bg-gradient-to-br from-indigo-900 to-indigo-800 hover:from-indigo-800 hover:to-indigo-700 text-white px-6 py-4 rounded-2xl font-black shadow-lg shadow-indigo-200 transition-all disabled:opacity-50"
                >
                    <RefreshCcw className={`w-5 h-5 ${isAnimating ? 'animate-spin' : ''}`} />
                    {isAnimating ? 'Synthesizing Paper...' : 'Generate New Paper'}
                </button>
            </div>

            <div className="bg-white rounded-3xl p-3 md:p-4 border border-gray-100 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
                <div className="flex items-center gap-2 px-3 text-sm font-black text-gray-400 uppercase tracking-widest">
                    <Filter className="w-4 h-4" /> Filter Engine Data
                </div>
                <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-hide">
                    {[
                        { id: 'all', label: 'Entire Archive (All Qs)' },
                        { id: 'mcq', label: 'Entrance MCQs Only' },
                        { id: 'subjective', label: 'Subjective Only' }
                    ].map(f => (
                        <button
                            key={f.id}
                            onClick={() => setFilter(f.id as any)}
                            className={`px-6 py-2.5 rounded-xl text-xs md:text-sm font-black transition-all whitespace-nowrap ${filter === f.id
                                ? 'bg-indigo-900 text-white shadow-md'
                                : 'bg-gray-50 text-gray-600 hover:bg-indigo-50 border border-gray-100'
                                }`}
                        >
                            {f.label}
                        </button>
                    ))}
                </div>
            </div>

            <div className={`grid gap-6 transition-opacity duration-300 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}>
                {filteredQuestions.length === 0 && !isAnimating ? (
                    <div className="text-center py-20 bg-white rounded-3xl border border-gray-100 border-dashed">
                        <p className="text-gray-400 font-bold">No questions found for the selected filter combination.</p>
                    </div>
                ) : (
                    filteredQuestions.map((q, index) => (
                        <div key={`${q.id}-${index}`} className="bg-white rounded-3xl p-6 md:p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow relative">
                            <div className="flex flex-wrap items-center gap-3 mb-6">
                                <span className="px-3 py-1 bg-gray-900 text-white text-[10px] font-black rounded-lg uppercase tracking-widest leading-none flex items-center gap-1">
                                    Q{index + 1} Target
                                </span>
                                <span className="px-3 py-1 bg-amber-100 text-amber-700 text-[10px] font-black rounded-full uppercase tracking-widest leading-none">
                                    {q.unitName}
                                </span>
                                <span className="px-3 py-1 bg-indigo-100 text-indigo-700 text-[10px] font-black rounded-full uppercase tracking-widest leading-none">
                                    {q.type} | {q.marks} MARKS
                                </span>
                            </div>

                            <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-6 leading-snug whitespace-pre-wrap">{q.questionNumber.replace(/^Q\d+\.\s*/, '')} {q.question}</h3>

                            {q.imageUrl && (
                                <div className="mb-6 rounded-xl overflow-hidden border border-gray-100 bg-white inline-block">
                                    <img src={q.imageUrl.startsWith('/') ? `${import.meta.env.BASE_URL}${q.imageUrl.slice(1)}` : q.imageUrl} alt="Question Figure" className="max-w-full h-auto object-contain" />
                                </div>
                            )}

                            {(q.optionA || q.optionB || q.optionC || q.optionD) && (
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                                    {[q.optionA, q.optionB, q.optionC, q.optionD].map((opt, i) => opt && (
                                        <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-gray-50 border border-gray-100 text-sm font-medium text-gray-700">
                                            <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full bg-gray-200 text-gray-600 font-bold text-xs mt-0.5">
                                                {String.fromCharCode(65 + i)}
                                            </span>
                                            <span className="leading-relaxed">{opt}</span>
                                        </div>
                                    ))}
                                </div>
                            )}

                            {revealed.has(q.id) ? (
                                <div className="grid md:grid-cols-2 gap-6 mt-6 pt-6 border-t border-gray-100 animate-in fade-in duration-300">
                                    <button
                                        onClick={() => toggleReveal(q.id)}
                                        className="absolute top-6 right-6 p-2 hover:bg-gray-100 rounded-lg transition-colors"
                                    >
                                        <ChevronDown className="w-5 h-5 text-gray-400 rotate-180" />
                                    </button>

                                    <div className="bg-indigo-50/50 p-6 rounded-2xl border border-indigo-100">
                                        <h5 className="text-[10px] font-black text-indigo-900 uppercase tracking-widest mb-3 border-b border-indigo-200 pb-2">Official Marking Scheme</h5>
                                        <div className="prose prose-sm prose-indigo max-w-none text-indigo-950 font-medium">
                                            <ReactMarkdown remarkPlugins={[remarkGfm]}>
                                                {q.markingScheme || q.answer || 'Refer to MS.'}
                                            </ReactMarkdown>
                                        </div>
                                    </div>

                                    <div className="bg-amber-50/50 p-6 rounded-2xl border border-amber-100">
                                        <h5 className="text-[10px] font-black text-amber-900 uppercase tracking-widest mb-3 flex items-center gap-2 border-b border-amber-200 pb-2">
                                            <Sparkles className="w-3 h-3 text-amber-500" />
                                            AI Reasoning & Breakdown
                                        </h5>
                                        <div className="prose prose-sm prose-amber max-w-none text-amber-900 font-medium leading-relaxed">
                                            <ReactMarkdown remarkPlugins={[remarkGfm]}>
                                                {q.aiExplanation || 'Logic implicitly clear from MS.'}
                                            </ReactMarkdown>
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                <button
                                    onClick={() => toggleReveal(q.id)}
                                    className="w-full mt-4 flex items-center justify-between gap-4 p-4 md:p-5 bg-gradient-to-r from-indigo-50 to-amber-50 hover:from-indigo-100 hover:to-amber-100 rounded-2xl border border-dashed border-indigo-200 transition-all group"
                                >
                                    <div className="flex items-center gap-3">
                                        <div className="flex gap-2">
                                            <span className="px-2 py-1 bg-indigo-100 text-indigo-700 text-[10px] font-black rounded mx-auto uppercase tracking-widest">MS</span>
                                            <span className="px-2 py-1 bg-amber-100 text-amber-700 text-[10px] font-black rounded mx-auto uppercase tracking-widest">AI</span>
                                        </div>
                                        <span className="text-sm font-bold text-gray-600 group-hover:text-gray-900 transition-colors">Compare with Official Marking Scheme</span>
                                    </div>
                                    <ChevronDown className="w-5 h-5 text-indigo-400 group-hover:text-indigo-600 transition-transform" />
                                </button>
                            )}
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};
