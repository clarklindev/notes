# Storybook

## installation

- install a project with create react app

```
npx create-react-app projectname
```

- add storybook

```
npx -p @storybook/cli sb init
```

- test / storybook / frontend

```
yarn test
yarn run storybook
yarn start

```

- automated testing with Storyshots

```
yarn add --dev @storybook/addon-storyshots react-test-renderer require-context.macro

```

- edit config to ensure require.context works in Jest

```js
// .storybook/config.js
import { configure } from '@storybook/react';
import requireContext from 'require-context.macro';

import '../src/index.css';

const req = requireContext('../src/components', true, /\.stories\.js$/);

function loadStories() {
	req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
```

```js
// src/storybook.test.js

import initStoryshots from '@storybook/addon-storyshots';
initStoryshots();
```
