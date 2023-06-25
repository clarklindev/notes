# PureComponent

- import React, {PureComponent} from 'react'
- class Persons extends PureComponent
- if we need to check all the input props to checks for any changes, extend PureComponent.
- PureComponent has automatic implementation of shouldComponentUpdate checking all props for any changes

```js
import React, { PureComponent } from 'react';
class Persons extends PureComponent {}
```
