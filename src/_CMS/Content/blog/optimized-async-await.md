---
title: Optimized Async/Await When Multiple Requests Are Needed
---

## The Scenario

When You have an multiple endpoints you need to make requests to from an API and the order of execution does not matter, you can use async await as follows:

_**We Will Work Through The Following Code Step-By-Step**_

```js
import axios from 'axios'

axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com'

const apiData = {}
const apiEndpoints = ['posts', 'users', 'todos']

async function getEndpoints() {
  const DataPromises = apiEndpoints.map(async endpoint => {
    const { data } = await axios.get(endpoint)
    apiData[endpoint] = data
  })

  await Promise.all(DataPromises)
}

getEndpoints()
```

<!-- <br> -->

## The Breakdown

1. Create an array of these endpoints

   ```js
   const apiEndpoints = ['posts', 'users', 'todos']
   ```

2. Use `Array.map()` to execute the async/await logic for each request. This creates an Array of Promises.

   ```js
   const DataPromises = apiEndpoints.map(async endpoint => {
     const { data } = await axios.get(endpoint)
     apiData[endpoint] = data
   })
   ```

3. Await the complete response by using `Promise.all()`

   ```js
   await Promise.all(DataPromises)
   ```

4. All of this functionality needs to be wrapped within an `async` function

   ```js
   async function getEndpoints() {
     const DataPromises = apiEndpoints.map(async endpoint => {
       const { data } = await axios.get(endpoint)
       apiData[endpoint] = data
     })

     await Promise.all(DataPromises)
   }
   ```
