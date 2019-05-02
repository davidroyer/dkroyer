---
title: Vue.js - Create Dynamic Computed Properties
---

So\: This line *does* appear in the generated HTML.

## Example

```js
const dataObject = {}

contentTypeRoutes.forEach((type) => {
  dataObject[type] = function () {
    return this.$vStore[type]
  }
})

Vue.mixin({
  data: () => ({
    ...dataObject
  }),
  // OR
  computed: {
    ...dataObject
  }
})
```
