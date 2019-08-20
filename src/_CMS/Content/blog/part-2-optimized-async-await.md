---
title: Part 2 - Optimizing Multiple API Request With Async/Await
subtitle: Batch updates
# draft: true
---

## The Scenario

```js
import axios from 'axios'

axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com'

const dataStore = {}
const resourceTypes = ['posts', 'users', 'todos']

async function updateResource(type, updateObj) {
  const { data } = await axios.patch(`/${type}`, updateObj)
  dataStore[type] = data
}

async function udpateAllResources() {
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
