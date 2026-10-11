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
- [要件定義](docs/REQUIREMENTS.md)
- [情報設計と画面仕様](docs/UX.md)
- [アーキテクチャ](docs/ARCHITECTURE.md)
- [コンテンツモデル](docs/CONTENT_MODEL.md)
- [実装計画](docs/PLAN.md)
- [設計判断](docs/DECISIONS.md)
- [Coding Agent向けガイド](AGENTS.md)

## コンテンツの更新
`src/data/site.ts` の定数を更新します。作品は選定前なのでダミー項目として扱っています。実績を捏造しないため、公開前に必ず置き換えてください。
