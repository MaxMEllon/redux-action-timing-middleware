# redux-action-timing-middleware

![](./.github/demo.png)

> Add marker of redux-action to User Timing in profile.

Usage
---

```javascript
import { applyMiddleware, compose, createStore } from "redux";
import actionTiming from 'redux-action-timing-middleware'

export default (reducer, initialState) => {
  const middlewares = [
    // Please set first args, If you use only development
    // Please put top in middleware list if marking middleware action
    actionTiming(process.env.NODE_ENV === 'development'),

    middlewareA,
    middlewareB,
  ]

  const store = createStore(
    reducer,
    initialState,
    compose(applyMiddleware(...middlewares))
  )
}
```

LICENSE
---

Licensed under the MIT License.
