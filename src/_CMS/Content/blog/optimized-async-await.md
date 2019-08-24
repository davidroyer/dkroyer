---
title: Optimizing Multiple API Request With Async/Await
tags:
  - javascript
# draft: true
---

## The Scenario

<!-- We need to make multiple request to an API to get some data. We have an array of all the content types we need to make a request to. This means we need to loop through this array, make the request to the approapriate content type API endpoint and then handle the response. Additionally and most importantly, **we want these request to happen at the same time instead of sequentially (one after another).** -->

Imagine the following scenario:

You want to get data from several API endpoints and use that data on your site or page. We want to take advantage of JavaScript's async ability by requesting these resources simultaneously.

So if we had an array of endpoints we knew we needed to hit and used a `forEach` loop to make this functionality, it would cause these requests to happen synchronously (one right after another).

However, by using `.map()` and `Promise.all()`, we can keep it async **and** write the code in a clean, concise manner.

**Here is the complete example we will work through step-by-step:**

<!-- When You have an multiple endpoints you need to make requests to from an API and the order of execution does not matter, you can use async await as follows: -->

<!-- _**We Will Work Through The Following Code Step-By-Step**_ -->

```js
import axios from 'axios'
axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com'

const dataStore = {}
const apiResources = ['posts', 'users', 'todos']

async function getResource(resource) {
  const { data } = await axios.get(resource)
  dataStore[resource] = data
}

async function getAllResources() {
  const apiPromises = apiResources.map(getResource)
  await Promise.all(apiPromises)
}

getAllResources()
```

<!-- ::: tip YOU SHOULD KNOW...
:thumbsup: _In Part 2, we'll show how to use this approach to make batch updates_.
::: -->

## The Breakdown

### Step 1

This is our initial setup. We are:

1. Setting up `axios` to use to make our API request.
2. Creating `dataStore` as an empty object to use as state or store.
3. Creating `apiResources` as an array of the endpoints we want to call.

```js
import axios from 'axios'
axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com'

const dataStore = {}
const apiResources = ['posts', 'users', 'todos']
```

### Step 2

We're creating a function that is responsible for requesting and returning the data for a specific API endpoint.

```js
async function getResource(resource) {
  const { data } = await axios.get(resource)
  dataStore[resource] = data
}
```

### Step 3

Create a function that uses `Array.map()` to execute the async/await logic for each request.  
This creates an array of Promises.

```js
async function getAllResources() {
  const apiPromises = apiResources.map(getResource)
  await Promise.all(apiPromises)
}
```

### Step 4

Call the function.

```js
getAllResources()
```
