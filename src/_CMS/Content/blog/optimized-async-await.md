---
title: Optimizing Multiple API Request With Async/Await
---

## The Scenario

<!-- We need to make multiple request to an API to get some data. We have an array of all the content types we need to make a request to. This means we need to loop through this array, make the request to the approapriate content type API endpoint and then handle the response. Additionally and most importantly, **we want these request to happen at the same time instead of sequentially (one after another).**

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


``` -->

Image the following scenario:

You want to get data from several API endpoints and use that data on your site or page. We want to take advantage of JavaScript's async ability by requesting these resources simultanesouly.

So if we had an array of endpoints we knew we needed to hit and used a `forEach` loop to make this functionality, it would cause these requests to happen synchronously (one right after another).

However, by using `.map()` and `Promise.all()`, we can keep it async **and** write the code in a clean, consise manner.

When You have an multiple endpoints you need to make requests to from an API and the order of execution does not matter, you can use async await as follows:

_**We Will Work Through The Following Code Step-By-Step**_

```js
import axios from 'axios'

axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com'

const dataStore = {}
const resourceTypes = ['posts', 'users', 'todos']

async function getResource(type) {
  const { data } = await axios.get(type)
  dataStore[type] = data
}

async function getAllResources() {
  const DataPromises = resourceTypes.map(getResource(resourceType))
  await Promise.all(DataPromises)
}

getAllResources()
```

<!-- <br> -->

## The Breakdown

### Step 1

Create an empty object that we'll use as our sample **store** an array of the endpoints listed below.

```js
const dataStore = {}
const resourceTypes = ['posts', 'users', 'todos']
```

### Step 2

Create a function that is responsible for requesting and returning the data for a specific API endpoint

```js
async function getResource(type) {
  const { data } = await axios.get(type)
  dataStore[type] = data
}
```

### Step 3

Create a function that uses `Array.map()` to execute the async/await logic for each request. This creates an Array of Promises.

```js
async function getAllResources() {
  const DataPromises = resourceTypes.map(getResource(resourceType))
  await Promise.all(DataPromises)
}
```

Await the complete response by using `Promise.all()`

```js
await Promise.all(DataPromises)
```

### Step 4

All of this functionality needs to be wrapped within an `async` function.

```js
async function getAllResources() {
  const DataPromises = contentTypes.map(async endpoint => {
    const { data } = await axios.get(endpoint)
    content[endpoint] = data
  })

  await Promise.all(DataPromises)
}
```

### Step 5

Call the function

```js
getAllResources()
```
