# Unit testing with Sinon

```ts
import sinon from 'sinon';
import validate from '../../../../src/lib/validators'; //custom method

// note: if you use a default export, you need to import as an object like
import * as obj from '../../etc';
//then access the default on the object: obj.default
```

### method A - create a function to call inside stubs object

```ts
const stubs = {
  sayhi: () => 'abc',
};
sinon.stub(stubs, 'sayhi');
stubs.sayhi.returns('123');
expect(stubs.sayhi()).toEqual('123');
stubs.sayhi.restore();
expect(stubs.sayhi()).toEqual('abc');
```

### method B - creating an object for the stubbed function

```ts
const stubs = {
  validate: sinon.stub(validate, 'validate'),
};
stubs.validate.returns('123');
expect(stubs.validate()).toEqual('123');
stubs.validate.restore();
```

### method C - just the method (you just name - as object and function and call it)

```ts
sinon.stub(validate, 'validate');
validate.validate.returns('123');

expect(validate.validate()).toEqual('123');
validate.validate.restore();
```
