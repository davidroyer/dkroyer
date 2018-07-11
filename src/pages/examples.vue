<template lang="html">
  <div class="examples">
    <v-hero class="page-heading">
      <v-headline class="relative px-4 text-3xl sm:text-4xl md:text-5xl font-light text-center text-white" :tag="1">
        Examples
      </v-headline>
    </v-hero>
    <v-wrapper>

      <section class="border-b-2 my-8 py-8">
        <StyledButton @click.native="handleClick" @mouseover="handleMouseOver" @focus.native="handleFocus">Normal</StyledButton>
        <StyledButton
          @click.native="handleClick"
          @mouseover.native="handleMouseOver"
          @focus.native="handleFocus"
          primary
        >
          Primary
        </StyledButton>
      </section>
      <section class="border-b-2 my-8 py-8 vsidebar">
        <h2 class="mb-4">Sidebar</h2>
        <v-button @click="$store.commit('toggleSidebar')">Sidebar</v-button>
        <transition-slide-in :duration="400">
          <v-sidebar v-clicked-outside="handleClickOutside" class="bg-grey-darkest text-white" v-if="$store.state.sidebarOpen">
            <v-button class="my-4 mx-4 border-white text-white" @click="$store.commit('toggleSidebar')">Close</v-button>
          </v-sidebar>
        </transition-slide-in>
      </section>
      <v-test class="blue"></v-test>

      <v-card>
        <v-card-header>
          <v-heading>Card Header</v-heading>
        </v-card-header>
        <v-card-body>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur culpa quibusdam laudantium fugiat autem cumque voluptate. Numquam in repellat, delectus.</p>
        </v-card-body>
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


      <section class="border-b-2 my-8 py-8 example-transition">
        <h2 class="mb-4">Transitions</h2>
        <div class="text-center">
          <button @click="toggle" class="px-4 py-2 bg-indigo text-white rounded">Toggle</button>
        </div>
        <transition-slide-up :duration="300">
          <div v-show="showFooter" class="z-10 fixed pin-b pin-x bg-indigo p-6 text-white text-center">
            Boo!
          </div>
        </transition-slide-up>


        <div>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
          sed diam nonumy eirmod tempor invidunt ut labore et dolore.
        </div>
        <transition-expand>
          <div v-if="expanded">
            Magna aliquyam erat, sed diam voluptua. At vero eos et
            accusam et justo duo dolores et ea rebum. Stet clita.
          </div>
        </transition-expand>
        <button @click="expanded = !expanded">
          {{ expanded ? `Shrink` : `Expand` }}
        </button>
      </section>

      <section class="border-b-2 my-8 py-8 promiseTest">
        <h2 class="mb-4">Promise Test - Without babel-ie-preset</h2>
        <div>{{$store.state.testValue}}</div>
        <v-button @click="$store.dispatch('promiseTest')">Run</v-button>
      </section>

      <section class="border-b-2 my-8 py-8 example-accordion">
        <div class="mb-8 text-center">
          <h2 class="mb-4">Accordion</h2>
          <span class="block -mt-6"><code>v-accordion-item</code>, <code>v-accordion-item</code></span>
        </div>
          <v-accordion-list>
            <v-accordion-item :item-id="1">
              <template slot="header">
                Item A
              </template>
              <template slot="content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec finibus auctor massa, vitae posuere sem tincidunt eget. Duis non vestibulum diam. Pellentesque eleifend interdum mollis. Donec porttitor dui enim. Maecenas a semper sem. Nunc molestie turpis vitae sem auctor, non venenatis velit ultricies.
              </template>
            </v-accordion-item>
            <v-accordion-item :item-id="2">
              <template slot="header">
                Item B
              </template>
              <template slot="content">
                Vestibulum nec urna non nisi viverra vehicula ut sed metus. Cras scelerisque condimentum nunc ut mattis. Curabitur euismod sagittis efficitur. Cras vel orci consectetur, ullamcorper magna vitae, sodales mauris. Aliquam tempus volutpat mi. Nunc vitae molestie ante. In sed varius tortor.
              </template>
            </v-accordion-item>
            <v-accordion-item :item-id="3">
              <template slot="header">
                Item C
              </template>
              <template slot="content">
                Sed porttitor mattis egestas. Duis nec rhoncus ligula. Etiam pellentesque mattis mauris. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas vel dapibus nulla. Phasellus lobortis nibh et faucibus tincidunt. Phasellus non iaculis turpis, vitae gravida lacus.
              </template>
            </v-accordion-item>
          </v-accordion-list>
      </section>


      <section class="border-b-2 my-8 py-8 example-gallery">
        <div class="mb-8 text-center">
          <h2 class="mb-4">Grid Gallery</h2>
          <span class="block -mt-6"><code>v-gallery</code></span>
        </div>
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
          <!-- <fa-icon :icon="['fas', 'chevron-right']"></fa-icon> -->
        <fa-icon style="font-size: 40px" icon="chevron-right"></fa-icon>
        <fa-icon style="font-size: 40px" icon="edit"></fa-icon>
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
    </v-wrapper>
  </div>
</template>

<script>
import StyledButton from '@/components/StyledButton.js'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faEdit, faChevronRight } from '@fortawesome/free-solid-svg-icons'
library.add(faEdit, faChevronRight)
const metaDescription =
  'Examples demonstrating the features of this Nuxt.js starter template including the Global Component Library bundled with this starter template, which is made up components for icons, inputs, sidebars, and more.'

export default {
  components: {
    StyledButton
  },
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

  data: () => ({
    showFooter: false,
    expanded: false
  }),

  methods: {
    handleClickOutside() {
      this.$store.commit('closeSidebar')
    },
    handleClick() {
      alert('You did something.')
    },
    handleFocus() {
      console.log('Focused!')
    },
    handleMouseOver() {
      console.log('mouseover')
    },
    toggle() {
      this.showFooter = !this.showFooter
    }
  }
}
</script>

<style>
main {
  z-index: initial !important;
}
</style>
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

  &.example {
    &-accordion,
    &-transition {
      flex-direction: column;
    }
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
