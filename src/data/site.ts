export type NodeKind = 'idea' | 'work' | 'writing' | 'experiment' | 'about';
export type RelationKind = 'inspires' | 'produces' | 'documents' | 'relates_to';

export interface ContentNode {
  id: string;
  kind: NodeKind;
  label: string;
  description: string;
  href?: string;
  x: number;
  y: number;
}
export interface ContentEdge {
  source: string;
  target: string;
  relation: RelationKind;
}

export const nodes: ContentNode[] = [
  { id: 'ideas', kind: 'idea', label: 'Ideas', description: '日常の不便や疑問から、ものづくりが始まる。', x: 245, y: 155 },
  { id: 'works', kind: 'work', label: 'Works', description: 'アイデアを形にした制作物。掲載作品はこれから選定します。', href: '/works', x: 98, y: 93 },
  { id: 'writing', kind: 'writing', label: 'Writing', description: '考えたこと、試行錯誤、技術的な記録。ブログは今後追加予定。', x: 400, y: 78 },
  { id: 'lab', kind: 'experiment', label: 'Lab', description: 'まだ答えのない疑問や実験。今後拡張していきます。', x: 385, y: 255 },
  { id: 'about', kind: 'about', label: 'About', description: 'フロントエンドを中心に、必要に応じて異なる技術も使います。', href: '/#about', x: 109, y: 268 },
];
export const edges: ContentEdge[] = [
  { source: 'ideas', target: 'works', relation: 'produces' },
  { source: 'ideas', target: 'writing', relation: 'inspires' },
  { source: 'ideas', target: 'lab', relation: 'inspires' },
  { source: 'works', target: 'writing', relation: 'documents' },
  { source: 'works', target: 'lab', relation: 'relates_to' },
  { source: 'ideas', target: 'about', relation: 'relates_to' },
];
export const featuredWorks: {title:string;summary:string;href?:string}[] = [];
