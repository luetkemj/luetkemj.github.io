---
layout: post
title: "Struggles"
date:   2016-05-15 21:12:30
categories: [update]
---

I've struggled this weekend trying to learn Redux. I've spent hours watching a very slow paced walk through that has brought lots of insight to the work I did last week. I've gotten pure components working with no problem but really that's just React and React is easy.

I've been getting a weird error that I can't figure out.

```
warning.js:44Warning: Failed propType: Required prop `cardState` was not specified in `CardContainer`. Check the render method of `Connect(CardContainer)`.
```

Basically, my state that I set up in the reducer isn't making it to my container.

I've added it to my root reducer.

```javascript
import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import { cardReducer } from './card.reducer';

export default combineReducers({
  routing,
  cardState: cardReducer,
});
```

I've set it up as a required propType

```javascript
CardContainer.propTypes = {
  cardState: PropTypes.object.isRequired,
  cardActions: PropTypes.object.isRequired,
};
```

And mapped it to my state.

```javascript
function mapStateToProps(state) {
  return {
    cardState: state.cardState,
  };
}
```

I've followed a pattern that worked on Friday last week so I know I'm just missing some key step or concept but after a weekend of research and trying to get it to work I just can't figure out what I'm doing wrong.

Beyond the obvious struggle I'm having with redux, I'm also struggling to be patient. I need to remember that I can't learn everything in a weekend. But I can learn it. Just because I'm bad at something now doesn't mean I will always be bad at that thing.

They say the Redux learning curve is steep but once you get it everything pretty simple. I feel like I'm super close to the top of that curve. Just need to to give it a bit more time.

Tomorrow I intend to provide a followup with the answer to the question I have tonight.
