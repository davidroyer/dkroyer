<template lang="html">
  <div class="grid max-w-4xl mx-auto p-8">
      <a href="https://unsplash.com/photos/YTmgx_ru39U" target="_blank" class="bg-white rounded h-full text-grey-darkest no-underline shadow-md">
          <h1 class="text-3xl py-1 px-2 my-0">fox.</h1>
          <img class="w-full block rounded-b" src="https://images.unsplash.com/photo-1505783495551-523774fe88b4?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=f65a6b38ef380b2d8f0c6ff5f6f7c403&auto=format&fit=crop&w=334&q=80" alt="A photo of a fox">
      </a>
      <a href="https://unsplash.com/photos/TtybI0ORH7w" target="_blank" class="bg-white rounded h-full text-grey-darkest no-underline shadow-md">
          <h1 class="text-3xl py-1 px-2 my-0">reeds.</h1>
          <img class="w-full block rounded-b" src="https://images.unsplash.com/photo-1445962125599-30f582ac21f4?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=38c096c472ba616dc4e8e76a8069c97a&auto=format&fit=crop&w=634&q=80" alt="A photo of some reeds">
      </a>
      <a href="https://unsplash.com/photos/YTmgx_ru39U" target="_blank" class="bg-white rounded h-full text-grey-darkest no-underline shadow-md">
          <h1 class="text-3xl py-1 px-2 my-0">fox.</h1>
          <img class="w-full block rounded-b" src="https://images.unsplash.com/photo-1505783495551-523774fe88b4?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=f65a6b38ef380b2d8f0c6ff5f6f7c403&auto=format&fit=crop&w=334&q=80" alt="A photo of a fox">
      </a>
      <a href="https://unsplash.com/photos/TtybI0ORH7w" target="_blank" class="bg-white rounded h-full text-grey-darkest no-underline shadow-md">
          <h1 class="text-3xl py-1 px-2 my-0">reeds.</h1>
          <img class="w-full block rounded-b" src="https://images.unsplash.com/photo-1445962125599-30f582ac21f4?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=38c096c472ba616dc4e8e76a8069c97a&auto=format&fit=crop&w=634&q=80" alt="A photo of some reeds">
      </a>
      <a href="https://unsplash.com/photos/YTmgx_ru39U" target="_blank" class="bg-white rounded h-full text-grey-darkest no-underline shadow-md">
          <h1 class="text-3xl py-1 px-2 my-0">fox.</h1>
          <img class="w-full block rounded-b" src="https://images.unsplash.com/photo-1505783495551-523774fe88b4?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=f65a6b38ef380b2d8f0c6ff5f6f7c403&auto=format&fit=crop&w=334&q=80" alt="A photo of a fox">
      </a>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
.grid {
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 1.5rem;
}

@media screen and (min-width: 581px) {
  .grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media screen and (min-width: 992px) {
  .grid {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>
