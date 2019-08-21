---
title: Part 2 - Optimizing Multiple API Request With Async/Await
subtitle: Batch updates
# draft: true
---

## The Scenario

Image we have a ToDo application and setting up the ability for the user to remove multiple todos.  
We'd keep track as we let them select each todo they'd like to remove.  
Then, there would be a button available that would then delete all the todos selected.

```js
import axios from 'axios'

axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com'

const dataStore = {}
const resourceTypes = ['posts', 'users', 'todos']
const todos = [
  { id: 1, title: 'Todo 1', completed: false },
  { id: 2, title: 'Todo 2', completed: false },
  { id: 3, title: 'Todo 3', completed: false }
]
const todosToUpdate = [1, 3]

async function updateTodo(todo, updateData) {
  const { id } = todo
  const { data } = await axios.patch(`/todos/${id}`, updateData)
  return data
}

async function deleteTodo(id) {
  const { data } = await axios.delete(`/todos/${id}`)
  return data
}

async function updateTodos() {
  const updatePromises = todosToUpdate.map(
    updateTodo(todo, { completed: true })
  )
  await Promise.all(updatePromises)
}

async function deleteTodos() {
  const deletePromises = todosToUpdate.map(deleteTodo)
  await Promise.all(deletePromises)
}

deleteTodos()
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
