---
title: Optimized Async/Await When Multiple Requests Are Needed
---

## The Scenario

We need to make multiple request to an API to get some data. We have an array of all the content types we need to make a request to. This means we need to loop through this array, make the request to the approapriate content type API endpoint and then handle the response. Additionally and most importantly, **we want these request to happen at the same time instead of sequentially (one after another).**

This situation arose when working on a Wordpress Admin Plugin.

I needed to retrieve the data for all the content types of the site which included custom post types. So basically, I needed to get several different content types such as _Degrees, Faculty, Courses_.

It needs to be dynamic though. I needed it to work without knowing that those content types were though so it could work across different sites.

```js

const getContentTypes = async() => {
  const contentData = {}
  const { data } = await axios.get(`api/content-types/${type}`)
  return data.map(contentType => contentType.rest_base)
  // const contentTypes = data.map(contentType => contentType.rest_base)
}

const getContent = async(contentTypesArray) => ({

  const contentTypes = data.map(contentType => contentType.rest_base)
})

const contentTypes = getContentTypes()


```

Image the following scenario:

You are working on some functionality for an admin

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
