# Coding Agent Instructions

## Goal
「アイデアは、日常に転がっている。」という世界観を、関連づいたコンテンツの探索体験として実装する。

## Read first
`docs/REQUIREMENTS.md`, `docs/ARCHITECTURE.md`, `docs/CONTENT_MODEL.md`, `docs/DECISIONS.md`。

## Rules
- MVPの外側のCMS、API、認証、DBを独断で追加しない。
- Astroを静的ページのデフォルトとし、Reactは必要なIslandに限定。
- 依存追加は理由を説明。小規模グラフに大規模ライブラリを導入しない。
- UIの外側にノードとエッジのデータを置き、固定テキストを内部に閉じ込めない。
- 関係のないエッジや未存在URLを発明しない。
- すべてのインタラクションにキーボード操作と可視フォーカスを用意。
- `prefers-reduced-motion` を尊重する。
- 実装後は `pnpm check && pnpm build` を実行し、未実行なら明記。
- 公開実績や本人情報を勝手に創作しない。
- 変更は小さくし、受入条件に対する確認方法をPRへ書く。
