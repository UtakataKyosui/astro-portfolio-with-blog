# Personal Knowledge Website

> アイデアは、日常に転がっている。

日常の疑問から生まれたアイデア、作品、文章、実験をネットワークとして探索できる個人サイト。

## MVP
- `/`: コンセプト、インタラクティブなグラフ、思想、制作物、プロフィール
- `/works`: 制作物一覧（サンプルデータは仮置き）
- SVG + Reactによる小規模なノードグラフ。ノード選択と関連エッジの強調、情報パネル
- CMS・ブログ本文・独自バックエンドは対象外

## 技術
Astro / React / TypeScript / Tailwind CSS / 静的サイト。Cloudflare Workersへの配信を想定。

## 開始方法
```bash
pnpm install
pnpm dev
pnpm check
pnpm build
```

> パッケージの取得、実ビルド、Cloudflareへのデプロイはこの成果物の作成時点では実施していません。

## ドキュメント
要件・設計は GitHub Issue の Epic 本文で管理しています。
- [Milestone: MVP v0.1](https://github.com/UtakataKyosui/astro-portfolio-with-blog/milestone/1) / [Milestone: Post-MVP: Blog / CMS](https://github.com/UtakataKyosui/astro-portfolio-with-blog/milestone/2)
- [#1 Foundation](https://github.com/UtakataKyosui/astro-portfolio-with-blog/issues/1)：実装計画・アーキテクチャ・技術スタック・設計判断・参考資料
- [#2 Content](https://github.com/UtakataKyosui/astro-portfolio-with-blog/issues/2)：コンテンツモデル
- [#3 Experience](https://github.com/UtakataKyosui/astro-portfolio-with-blog/issues/3)：情報設計と画面仕様・サイトマップ
- [#4 Release](https://github.com/UtakataKyosui/astro-portfolio-with-blog/issues/4)：MVP要件定義
- [#5 Post-MVP](https://github.com/UtakataKyosui/astro-portfolio-with-blog/issues/5)：Blog・CMS・Graph Renderer 拡張
- [Coding Agent向けガイド](AGENTS.md)

## コンテンツの更新
`src/data/site.ts` の定数を更新します。作品は選定前なのでダミー項目として扱っています。実績を捏造しないため、公開前に必ず置き換えてください。
