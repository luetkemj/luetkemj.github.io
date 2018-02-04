---
layout: post
title: "Mocking specific module functions with jest"
date:   2017-04-21 11:33:30
categories: [update]
---

I've recently given jest a try for unit testing. Until now I have really only ever used Mocha. One of the things that I always struggled with was mocking functions. In scribe, many of the generators make heavy use of random numbers. Testing random numbers is challenging and more than a little uncertain. Testing that a result is within a range is far less satisfying than an exact value.

Lodash is used heavily in a weather generator I am working on. The only lodash functionality I need to mock at the moment is random(). Jest automatically mocks modules for you which is cool but by default the mocks return nothing. In order to get my tests to work with the default mocks is to mock all of the lodash functions in the generator. Yuck.

Fortunately there is a way to mock only what you need. There seems to be a lot of [confusion](https://github.com/facebook/jest/issues/936) online regarding how to implement this. Here's how I got it working.

```javascript
// myModule.js
import { random } from 'lodash';

export function testRandomMock() {
  return random(1, 10);
}


// myModule.test.js
import * as myModule from './myModule.js';

// tell jest not to mock lodash
jest.unmock('lodash');
// require the actual module so that we can mock exports on the module
const lodash = require.requireActual('lodash');

test('random should be 1', () => {
  // mock lodash random to return the value 1 in first test
  lodash.random = jest.fn(() => 1);
  expect(myModule.testRandomMock(1)).toBe(1);
});

test('random should be 2', () => {
  // mock lodash random to return the value 2 in second test
  lodash.random = jest.fn(() => 2);
  expect(myModule.testRandomMock(2)).toBe(2);
});
```

### UPDATE 180204

As Darth mentions below in the comments the above example does not actually address the [confusion](https://github.com/facebook/jest/issues/936) in the discussion on github.

So how do we deal with mocking a function created and used internally by the same module you are testing?

Suppose you have module.js and want to mock `baz` when testing `foo`.

```javascript
// module.js
export function foo() {
  return baz();
}

export function baz() {
  return 'buzz';
}
```

If anyone knows how to do this without modifying module.js I'd love to know!

However, if you are willing to make a small change to module.js...

```javascript
// module.js
export function foo() {
  return lib.baz();
}

export function baz() {
  return 'buzz';
}

export const lib = {
  baz,
};
```

`lib.baz` can now be now be mocked like so

```javascript
// module.test.js
import * as module from './module';

module.lib.baz = jest.fn(() => 'bar');

describe('foo', () => {
  it('should work', () => {
    expect(module.foo()).toBe('bar');
  });
});
```

Try it out on [github](https://github.com/luetkemj/jest-mock-test)!
