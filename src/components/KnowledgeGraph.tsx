import { useState } from 'react';
import { nodes, edges } from '../data/site';

export default function KnowledgeGraph() {
  const [selectedId, setSelectedId] = useState('ideas');
  const selected = nodes.find((node) => node.id === selectedId) ?? nodes[0]!;
  const related = new Set([selectedId]);
  for (const edge of edges) {
    if (edge.source === selectedId) related.add(edge.target);
    if (edge.target === selectedId) related.add(edge.source);
  }
  return (
    <div className="grid gap-6 lg:grid-cols-[1.6fr_1fr] lg:items-center">
      <div className="rounded-3xl border border-slate-700 bg-slate-900/50 p-2 sm:p-4">
        <svg viewBox="0 0 500 330" className="w-full" role="img" aria-label="IdeasとWorks、Writing、Lab、Aboutが結ばれた概念図">
          {edges.map((edge) => {
            const a = nodes.find((node) => node.id === edge.source)!;
            const b = nodes.find((node) => node.id === edge.target)!;
            const active = edge.source === selectedId || edge.target === selectedId;
            return <line key={`${edge.source}-${edge.target}`} x1={a.x} y1={a.y} x2={b.x} y2={b.y} stroke={active ? '#a5b4fc' : '#475569'} strokeWidth={active ? 2.8 : 1.4} opacity={active ? 1 : 0.45} />;
          })}
          {nodes.map((node) => {
            const active = node.id === selectedId;
            return <g key={node.id} opacity={related.has(node.id) ? 1 : 0.35}>
              <circle cx={node.x} cy={node.y} r={active ? 43 : 35} fill={active ? '#4f46e5' : '#1e293b'} stroke={active ? '#c7d2fe' : '#64748b'} strokeWidth="2" />
              <text x={node.x} y={node.y + 4} fill="white" fontSize="13" fontWeight="600" textAnchor="middle">{node.label}</text>
            </g>;
          })}
        </svg>
        <p className="px-2 pb-2 text-xs text-slate-400">下のボタンからノードを選択できます。図のほかに通常のナビゲーションも用意しています。</p>
        <div className="flex flex-wrap gap-2 p-2" aria-label="グラフのノードを選択">
          {nodes.map((node) => <button key={node.id} type="button" aria-pressed={selectedId === node.id} onClick={() => setSelectedId(node.id)} className={`rounded-full border px-3 py-2 text-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-300 ${selectedId === node.id ? 'border-indigo-300 bg-indigo-400 text-slate-950' : 'border-slate-600 text-slate-200 hover:border-indigo-300'}`}>{node.label}</button>)}
        </div>
      </div>
      <aside className="rounded-3xl border border-slate-700 p-6" aria-live="polite">
        <p className="mb-3 text-xs uppercase tracking-[0.2em] text-indigo-300">Selected node</p>
        <h3 className="mb-4 text-3xl font-semibold">{selected.label}</h3>
        <p className="leading-8 text-slate-300">{selected.description}</p>
        {selected.href && <a href={selected.href} className="mt-6 inline-block rounded-lg border border-indigo-300 px-4 py-2 text-indigo-200 hover:bg-indigo-300 hover:text-slate-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-300">詳しく見る →</a>}
      </aside>
    </div>
  );
}
