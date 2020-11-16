# startline

## ページリスト
ID：admin
pass: startline

トップページ : https://retailguide.dev-fmc.tokyo/


## コーディングガイド

テンプレートエンジンのejsとSassを使用しています。

`/src` ：ejs、Sass、JSファイルが含まれています。

`/public` ：書き出したHTML、CSS、minifyされたJS、画像ディレクトリが含まれています。画像のminifyは最後にまとめて行います。

### ejs

HTMLの作成や変更はejsフォルダの該当ファイルを変更・追加してください。
ejs/metaディレクトリのmeta.jsonを読み込みます。

about/index.ejsの場合
ファイル上部のpage: json['about']でmeta.jsonのaboutの情報を取得しています。
新規ページ作成する場合はmeta.jsonにもページのmeta情報を作成してください。

### Sass

Sassの構成は下記を参考にしてください。

    /* normalize, 変数(for Sass) */
    @import 'variables/**';

    /* mixin(for Sass) */
    @import 'mixins/**';

    /* ベースの要素スタイル */
    @import 'basis/**';

    /* ライブラリ */
    @import 'library/**';

    /* コンポーネント（パーツ） */
    @import 'component/**';

    /* 共通レイアウト(header, footer, etc.) */
    @import 'layout/**';

    /* ページごとのスタイル */
    @import 'page/**';

    /* ユーティリティ(color, size, spacing, etc.) */
    @import 'utility/**';

主に使用するのはcomponent, pageあたりになると思います。部分調整用にutilityを入れています。

### Gulp

コンパイルはgulpで行っています。

クローン後にコマンド `npm install` でパッケージがインストールされます。

コマンド `gulp` でローカルサーバーが立ち上がり、watch状態になります。新しくファイルを追加した場合は一旦終了し、再度 `gulp` してください。

## Gitブランチ

適宜ブランチを作成していただき（ブランチ名は担当者名やページ名など何でもOKです）、キリのいいところでmasterブランチにマージしてください。

コンフリクトを避けるために以下の手順でお願いします。

マージしたいブランチ（例：feature）でリモートmasterからプル

↓

（コンフリクトがあれば解決してから）リモートfeatureにプッシュ

↓

ブランチをmasterに切り替え

↓

リモートfeatureからプル

↓

リモートmasterにプッシュで完了

## デプロイ
自動でデプロイはしないようになっています。
