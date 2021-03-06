---
title: Part 2 - Optimizing Multiple API Request With Async/Await
subtitle: Batch updates
description: Part 2 of articles providing a very efficient and beneficial way of making API request with async/await.
draft: true
---

## The Scenario

Imagine we have a Todo application and setting up the ability for the user to remove multiple todos.  
We'd keep track as we let them select each todo they'd like to remove.  
Then, there would be a button available that would then delete all the todos selected.

```js
import axios from 'axios'
axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com'

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

## The Breakdown

### Step 1

This is our initial setup. We are doing the following:

1. Setting up `axios` to use to make our API request.
2. We are hardcoding the value of `todosDeleteList` to more easily demonstrate the concepts that are within the scope of this post. In a real application, this value would be determined by the user selection.

```js
import axios from 'axios'
axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com'

const todosDeleteList = [1, 3]
```

### Step 2

We're creating an an async function that is responsible for deleting a todo.

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

Call the function passing our hardcoded Array of todo ID's.

```js
deleteTodos(todosDeleteList)
```
