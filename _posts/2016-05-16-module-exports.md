---
layout: post
title: "module.exports"
date:   2016-05-16 20:58:30
categories: [update]
---

So this weekend I struggled to get redux working properly. Specifically I had trouble with getting my cardReducer to hold data. It kept coming back undefined even though it seemed like it should have worked per the code below.

```javascript
import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import { cardReducer } from './card.reducer';

export default combineReducers({
  routing,
  cardState: cardReducer,
});
```

The problem lay in some es6 magic I didn't understand mixed with some simple fundamental javascript I was unfamiliar with.

```javascript
import { cardReducer } from './card.reducer';
```

Keep in mind I'm still wrapping my head around this as I try to explain it.

If we roll back to the start of my misunderstanding we find module.exports. In Node module.exports allows you to package up some functions and send them along for use in another file via require. SitePoint has a nice little article that explains it better than I can [here](https://www.sitepoint.com/understanding-module-exports-exports-node-js/).

Suppose I have a file called cardReducer.js. It's contents look like this:

```javascript
cardReducer = module.exports = {}
```

If I want to require it in another file I can assign module.exports to a variable like so.

```javascript
var cardReducer = require('./cardReducer');
```

I now have access to an empty object called cardReducer:

```javascript
//cardReducer
{}
```

I can add some functions to cardReducer.js and export them like so:

```javascript
cardReducer = module.exports = {}

cardReducer.foo = function(){
  return 'foo';
}

cardReducer.bar = function(){
  return 'bar';
}
```

Now when I require cardReducer I get an object that looks like this:

```javascript
{
  foo: function(){
    return 'foo';
  },
  bar: function(){
    return 'bar';
  }
}
```

I can then just use them like this:

```javascript
var cardReducer = require('./cardReducer');

console.log(cardReducer.foo) // prints 'foo' to console
console.log(cardReducer.bar) // prints 'bar' to console
```

With es6 we can write things a bit more succinctly.

```javascript
cardReducer = module.exports = {}

cardReducer.foo = function(){
  return 'foo';
}

cardReducer.bar = function(){
  return 'bar';
}
```

Can become

```javascript
export function foo(){
  return 'foo';
}

export function bar(){
  return 'bar';
}
```

This allows us to pick specific functions to import instead of just grabbing the whole thing like this:

```javascript
import { foo } from 'cardReducer.js';
```

cardReducer still exports an object with two functions on it. We are simply grabbing just the one we want off of that object.

We can use that function like this:

```javascript
console.log(foo()); // prints 'foo' to the console
```

The problem with what I did originally is that in my file cardReducer.js I wrote this:

```javascript
export default function cardReducer(state = initialState, action) {
  switch (action.type) {
    case CARD_CLICKED:
      return Object.assign({}, state, {
        name: 'I Was Here',
      });
    default:
      return state;
  }
}
```

Right there at the top I ```export default function...```

Now instead of adding functions to an object that I can pick and pull from I am instead replacing the object with my default function.

So the export I get from ./card/reducer looked like this:

```javascript
function cardReducer(state = initialState, action) {
  switch (action.type) {
    case CARD_CLICKED:
      return Object.assign({}, state, {
        name: 'I Was Here',
      });
    default:
      return state;
  }
}
```

When I tried to import with this line:

```javascript
import { cardReducer } from './card.reducer';
```

Javascript was expecting something like this:


```javascript
{
  cardReducer: function(state = initialState, action) {
    switch (action.type) {
      case CARD_CLICKED:
        return Object.assign({}, state, {
          name: 'I Was Here',
        });
      default:
        return state;
    }
  },
  anotherFunction: function(){
    return 'something';
  }
}
```

I was telling javascript that it should look for an function called cardReducer *on* the exports coming from './card.reducer';

The problem then is that the export coming from './card.reducer' *was* the function called cardReducer. When javascript couldn't find what it was looking for it just assigned undefined to cardReducer.

So to fix the bug I simply needed to do this:

```javascript
import cardReducer from './card.reducer';
```

Now instead of trying to import cardReducer on an object from './card.reducer' I am instead just importing cardReducer itself from './card.reducer';

And this is why I need to take remedial JS course :P
