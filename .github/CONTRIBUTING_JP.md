# Hashiに貢献
進む前、[Code of Conduct](https://github.com/dev-protocol/.github/blob/main/CODE_OF_CONDUCT.md)を読んでください。

## 言語
- [英語](README_JP.md)
- **日本語 (ここにいます！)**

## 貢献流れのまとめ
1. このRepositoryをフォークして、ローカルでクローンします。
2. 全部の準備パーケジをインストールするために、`npm install`か`yarn install`をします。
   - Documentationに作業すると, `/docs`のフォルダーに`cd`をしてください。
   - あるいは, Testsに作業すると, `/tests`のフォルダーに`cd`をしてください。
   - そして、必要な準備のパーケジをインストール詳細があるますので、[これ](#installing-dependencies)を読んでください。
 
3. このフォーマットでブランチを作ります:

```text
[username]-[issue-number]_[issue-title]
```

4. コードする.
5. Pull Requestを開けます.
6. Pull Requestの確認を待ってください.
   - Pull Requestを確認したら、 `main`ブランチに合わせます.
7. 🎉 おめでとう! Hashiに貢献してきました！！

## Details on Contributing
### Contributing Scopes
When contributing to Hashi, it is important to keep in mind what a contributor can code and cannot code.

- Authoring new components are almost always left up to the internal team working on the design system.
- Code deviating from the specifications is NOT allowed. Follow the specifications in the design docs or in the `/specs` directory.

### Installing Dependencies
The current dependency list will always be compatible with the latest version of Hashi. However, the root directory, the tests and dev versions of the docs require the current in-development version of Hashi (aka the version you're working on). Which is why we're going to be using the `npm link` feature to easily link the dev version of Hashi to the tests and docs.

First `cd` into the source folder.
```sh
$ cd src
```

And execute the `link` command.
```sh
$ npm link

# or

$ yarn link
```

`cd` back into the root directory (or the tests, or docs directory).
```sh
$ cd ..
$ cd ../docs
$ cd ../tests
```

And finally, execute the linking command.
> NOTE: the `current-dev-version` is usually spat out in the terminal after running the first `npm link` command in the source directory. When using yarn, you usually don't have to worry about this.

```sh
$ npm link @dev-protocol/hashi@[current-dev-version]

# or

$ yarn link @devprotocol/hashi
```

### Code Style
If you're worried about code style, we've provided an `.editorconfig` file for you to consume.