# 実装計画

```mermaid
flowchart TD
  A[基盤: Astro + React + Tailwind] --> B[サイト内容とモデル]
  B --> C[静的HomeとWorks]
  C --> D[グラフ選択・関係強調]
  D --> E[アクセシビリティ・レスポンシブ]
  E --> F[品質チェックと公開]
  F -. later .-> G[既存CMS + Blog]
  G -. later .-> H[自作CMSへの移行]
```

## Issue候補
### Epic 1: Foundation
- [ ] Astroアプリ初期化・React統合・Tailwind導入
- [ ] `check/build`をCI化
- [ ] 共通レイアウトとメタデータ

### Epic 2: Content
- [ ] コンセプト文とプロフィール確定
- [ ] 代表作品選定と情報投入
- [ ] コンテンツID・関連付けを検証

### Epic 3: Experience
- [ ] Graph選択と関連強調
- [ ] Graph情報パネルとページリンク
- [ ] レスポンシブ・通常ナビ・reduced-motion

### Epic 4: Release
- [ ] Playwright等で主要導線を確認
- [ ] SEO・OGPとアクセシビリティ検証
- [ ] Cloudflare公開

## 後続
- [ ] Blog記事一覧・詳細とRSS
- [ ] 暫定Headless CMSへのLoader
- [ ] 自作CMSプロジェクトを分離して設計
