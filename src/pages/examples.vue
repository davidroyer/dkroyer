<template lang="html">
  <div class="examples">
    <v-hero class="page-heading">
      <v-headline class="relative px-4 text-3xl sm:text-4xl md:text-5xl font-light text-center text-white" :tag="1">
        Examples
      </v-headline>
    </v-hero>
    <v-wrapper>

      <v-test class="blue"></v-test>
      <v-card>
        <h2 slot="header">Card Header</h2>
        <p slot="body">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur culpa quibusdam laudantium fugiat autem cumque voluptate. Numquam in repellat, delectus.</p>
      </v-card>
      <div class="content">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem repellat aut accusantium, ducimus eos. Aperiam fugit rerum esse at quis ducimus ipsum perspiciatis inventore doloribus provident quidem reiciendis, laudantium ad iure nam quod, repudiandae eveniet, sed soluta eaque! Sapiente possimus impedit ullam, dolor voluptatibus. Magni repellat aperiam dolores ipsam provident!</p>
        <blockquote>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima, mollitia.
        </blockquote>
        <h2>Unordered List</h2>
        <ul>
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
        </ul>
        <h2>Ordered List</h2>
        <ol>
          <li>Ordered Item 1</li>
          <li>Ordered Item 2</li>
          <li>Ordered Item 3</li>
        </ol>

        <p>Molestias in laborum optio amet cumque nulla vitae nihil ea, nisi fugit voluptas! Est iste quo nesciunt at commodi dolor itaque quos natus amet facilis rerum sint dolore aspernatur, dolorum sit nam reiciendis voluptates consectetur, ducimus deserunt sequi assumenda sunt. Amet distinctio minima tenetur ratione beatae velit repellendus. Accusamus, consequatur.</p>
        <p>Ea sint, mollitia. Atque in sint cum, inventore itaque, voluptas labore nobis! Pariatur doloribus dolorem, ducimus, quam saepe a perferendis. Iure perferendis, aut error architecto velit est ducimus vel itaque eaque ab dolor nisi voluptatum blanditiis magnam accusantium illum sunt quibusdam distinctio, doloribus dicta totam qui optio! Autem, eius, magnam.</p>
        <p>Porro, asperiores quas fugit! Distinctio suscipit officia ex porro fugit ratione, quaerat asperiores vitae dolores natus molestiae inventore, sunt velit esse facilis. Sunt quia nemo vitae autem officiis soluta eum quae iste quasi odit voluptatum harum dolores, illum fugiat quod ipsum inventore reiciendis officia quos eaque dolorum tempore, consequatur laboriosam.</p>
      </div>

      <section class="border-b-2 my-8 py-8 promiseTest">
        <h2 class="mb-4">Promise Test - Without babel-ie-preset</h2>
        <div>{{$store.state.testValue}}</div>
        <v-button @click="$store.dispatch('promiseTest')">Run</v-button>
      </section>

      <section class="border-b-2 my-8 py-8 example-gallery">
        <v-gallery>
          <v-gallery-item v-for="(item, index) in 6" :key="index">
            <a href="https://unsplash.com/photos/YTmgx_ru39U" target="_blank" class=" bg-white rounded h-full text-grey-darkest no-underline shadow-md">
                <h1 class="text-3xl py-1 px-2 my-0">Fox. {{index}}</h1>
                <img class="w-full block rounded-b" src="https://images.unsplash.com/photo-1505783495551-523774fe88b4?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=f65a6b38ef380b2d8f0c6ff5f6f7c403&auto=format&fit=crop&w=334&q=80" alt="A photo of a fox">
            </a>
          </v-gallery-item>
        </v-gallery>
      </section>

      <section class="border-b-2 my-8 py-8 vicons">
        <h2 class="mb-4">Icons</h2>
        <fa-icon icon="user"></fa-icon>
        <!-- <fa-icon icon="xCircle"></fa-icon> -->
        <fa-icon icon="star"></fa-icon>
        <hr class="examples-hr">
        <fa-icon style="font-size: 40px" icon="user"></fa-icon>
        <!-- <fa-icon style="font-size: 40px" :icon="['far', 'timesCircle']"></fa-icon> -->
        <fa-icon style="font-size: 40px" icon="star"></fa-icon>
      </section>

      <section class="border-b-2 my-8 py-8 vinputs">
        <h2 class="mb-4">Inputs</h2>
        <v-input id="name" label="Your Name"></v-input>
      </section>

      <section class="border-b-2 my-8 py-8 vbuttons">
        <h2 class="text-center mb-4">Buttons</h2>
        <v-button @click="handleClick">Do Something</v-button>
        <form action="/" method="post">
          <v-input id="firstName" label="First Name"></v-input>
          <v-input id="lastName" label="Last Name"></v-input>
          <v-button class="mx-2" type="reset" value="Reset">Reset</v-button>
          <v-button class="mx-2" type="submit" value="Submit">Submit</v-button>
        </form>
      </section>

      <section class="border-b-2 my-8 py-8 vsidebar">
        <h2 class="mb-4">Sidebar</h2>
        <v-button @click="$store.commit('toggleSidebar')">Sidebar</v-button>
        <v-transition name="slide-x">
          <v-sidebar class="bg-grey-darkest text-white" v-if="$store.state.sidebarOpen">
            <!-- <fa-icon @click="$store.commit('toggleSidebar')" style="font-size: 32px" icon="user"></fa-icon> -->
            <v-button @click="$store.commit('toggleSidebar')">Close</v-button>
          </v-sidebar>
        </v-transition>
      </section>


    </v-wrapper>
  </div>
</template>

<script>
const metaDescription =
  'Examples demonstrating the features of this Nuxt.js starter template including the Global Component Library bundled with this starter template, which is made up components for icons, inputs, sidebars, and more.'

export default {
  head() {
    return {
      title: 'Examples',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: metaDescription
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: metaDescription
        }
      ]
    }
  },
  methods: {
    handleClick() {
      alert('You did something.')
    }
  }
}
</script>

<style lang="scss" scoped>
section {
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: space-around;
  position: relative;
  & > h2 {
    text-align: center;
    flex-basis: 100%;
    font-style: italic;
    font-weight: 300;
    font-size: 2.5rem;
  }

  &.example-gallery {
    display: block;
  }
}

.sidebar-close {
  right: 10px;
  top: 10px;
  z-index: 9999999;
}
.examples-hr {
  flex-basis: 100%;
  margin: 2em 0;
}
</style>
