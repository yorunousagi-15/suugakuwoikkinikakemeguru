数学航路 — GitHub Pages 完全直入れ版

このフォルダーの中身を GitHub リポジトリのルートへ、そのままアップロードしてください。

この版は ZIP の中にサイト用の親フォルダーを作っていません。
index.html / style.css / script.js / math-logo.svg が ZIP の最上位に直接入っています。

GitHub Pages の設定：
1. GitHub の Settings → Pages
2. Source で「Deploy from a branch」を選択
3. main ブランチ / /(root) を選択
4. Save

VitePress らしい UI（左サイドバー、右目次、検索、ライト/ダーク切替）を、依存パッケージなしの静的サイトとして実装しています。
記事は script.js の pages に追加できます。
