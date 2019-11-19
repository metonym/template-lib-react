# template-lib-react

[![Build][build]][build-badge]
[![Coverage][codecov-shield]][codecov]

> Template for developing React libraries in TypeScript and publishing to [npm](https://www.npmjs.com/).

## Available Scripts

### `yarn build`

Builds the project for production.

#### Linting, formatting and committing

To ensure that committed code follows conventions, this project uses `prettier`, `tslint` and git hooks (via `husky`) to automate the linting and formatting of code and commit messages.

### `yarn test`

Runs test using [Jest](https://jestjs.io/) and generates a code coverage report.

### `yarn test:tdd`

Runs tests in "Test-driven Development Mode."

## Publishing to NPM

You must create an NPM account before publishing packages on the NPM registry.

In [package.json](package.json), customize the following metadata before publishing to NPM.

```json
{
  "repository": {
    "type": "git",
    "url": "https://github.com/{USER-NAME}/{REPO-NAME}.git"
  },
  "homepage": "https://github.com/{USER-NAME}/{REPO-NAME}",
  "keywords": ["..."],
  "bugs": "https://github.com/{USER-NAME}/{REPO-NAME}/issues"
}
```

### `yarn publish`

Runs the `prepublishOnly` command, which first builds the project for production before publishing the library.

## Linting, formatting and committing

To ensure that committed code follows conventions, this project uses `prettier`, `tslint` and git hooks (via `husky`) to automate the linting and formatting of code and commit messages.

## Tips

When building a React component or library, do not include `react` and `react-dom` as direct dependencies. Instead, include them as `devDependencies` and `peerDependencies`.

This template specifies React minor version ^16.8.x for hooks support.

```json
"peerDependencies": {
  "react": "^16.8.x",
  "react-dom": "^16.8.x"
}
```

## License

[MIT](LICENSE)

[build]: https://travis-ci.com/metonym/template-lib-react.svg?branch=master
[build-badge]: https://travis-ci.com/metonym/template-lib-react
[codecov]: https://codecov.io/gh/metonym/template-lib-react
[codecov-shield]: https://img.shields.io/codecov/c/github/metonym/template-lib-react.svg
