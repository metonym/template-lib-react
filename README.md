# template-lib-react

[![Build][build]][build-badge]
[![Coverage][codecov-shield]][codecov]

> Template for developing React libraries.

This template provides a boilerplate for building React.js libraries using TypeScript.

When building a React component or library, do not include `react` and `react-dom` as dependencies. Instead, include them as `devDependencies` and optionally add them as `peerDependencies`.

## Overview

### Develop

This command builds the project in watch mode. The source (i.e. entry) is in `src`, which is outputted in the designated folder `lib`.

```bash
yarn develop
```

### Build

This command first removes the `lib` folder before building the project.

```bash
yarn build
```

### Test

This command runs tests located in the `src/tests` folder.

```bash
yarn test
```

To facilitate component testing, this template uses `enzyme`. The [`src/tests/setup.ts`](src/tests/setup.ts) file uses the `enzyme` react 16 adapter.

```ts
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });
```

`enzyme-to-json` is the snapshot serializer used for snapshot testing.

```tsx
import toJson from 'enzyme-to-json';

it('matches the snapshot', () => {
  const wrapper = shallow<Component>(<Component />);
  expect(toJson(wrapper)).toMatchSnapshot();
});
```

To prevent unintended tslint warnings, `enzyme`, `enzyme-adapter-react-16` and `enzyme-to-json` are added to the whitelist of "no-implicit-dependencies" in the [tslint configuration file](tslint.json).

## Linting, formatting and committing

To ensure that committed code follows conventions, this project uses `prettier`, `tslint` and git hooks (via `husky`) to automate the linting and formatting of code and commit messages.

## License

[MIT](LICENSE)

[build]: https://travis-ci.com/metonym/template-lib-react.svg?branch=master
[build-badge]: https://travis-ci.com/metonym/template-lib-react
[codecov]: https://codecov.io/gh/metonym/template-lib-react
[codecov-shield]: https://img.shields.io/codecov/c/github/metonym/template-lib-react.svg
