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
const mockApiData = [
  { id: 1, title: 'Todo 1', completed: false },
  { id: 2, title: 'Todo 2', completed: false },
  { id: 3, title: 'Todo 3', completed: false }
]
const todosDeleteList = [1, 3]

async function deleteTodo(id) {
  await axios.delete(`/todos/${id}`)
}

async function deleteTodos(todos) {
  const deletePromises = todos.map(deleteTodo)
  await Promise.all(deletePromises)
}

deleteTodos(todosDeleteList)
```

<!-- <br> -->

## The Breakdown

### Step 1

This is our initial setup. We are doing the following:

1. Setting up `axios` to use to make our API request.
2. Creating `dataStore` as an empty object to use as state or store.
3. In a real application, `todosDeleteList` would be determined by the user selection. However, as this is not the scope of this post, we can hardcode this value to more easily demonstrate the concepts that are within the scope of this post.

<!-- SHOULD #3 above be a container note or something??? -->

```js
import axios from 'axios'
axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com'

const dataStore = {}
const mockApiData = [
  { id: 1, title: 'Todo 1', completed: false },
  { id: 2, title: 'Todo 2', completed: false },
  { id: 3, title: 'Todo 3', completed: false }
]
const todosDeleteList = [1, 3]
```

### Step 2

We're creating an ansync function that is responsible for deleting a todo.

```js
async function deleteTodo(id) {
  await axios.delete(`/todos/${id}`)
}
```

### Step 3

Create a function that uses `Array.map()` to execute the async/await logic for each request.  
This creates an array of Promises.

```js
async function deleteTodos(todos) {
  const deletePromises = todos.map(deleteTodo)
  await Promise.all(deletePromises)
}
```

### Step 4

Call the function passing our mock Array of todo ID's.

```js
deleteTodos(todosDeleteList)
```

<!-- ```js
async function updateTodos() {
  const updatePromises = todosToDelete.map(
    updateTodo(todo, { completed: true })
  )
  await Promise.all(updatePromises)
}

async function updateTodo(todo, updateData) {
  const { id } = todo
  const { data } = await axios.patch(`/todos/${id}`, updateData)
  return data
}
``` -->
