<template>
  <div class="post">
    <v-hero class="page-heading">
      <v-headline class="relative px-4 text-3xl sm:text-4xl md:text-5xl font-light text-center text-white" :tag="1">
        {{ post.title }}
      </v-headline>
    </v-hero>
    <v-wrapper>
      <div class="breadcrumbs absolute">
        <nuxt-link to="/">Home</nuxt-link> /
        <nuxt-link to="/blog">Blog</nuxt-link> /
      </div>
      <nuxtent-body class="content" :body="post.body" />
    </v-wrapper>
  </div>
</template>

<script>
const metaDescription = 'Get description from blog post'

export default {
  head() {
    return {
      title: this.post.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.post.description
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.post.description
        },
        {
          hid: 'og:type',
          property: 'og:type',
          content: 'article'
        }
      ],
      link: [
        {
          rel: 'stylesheet',
          href: 'https://cdnjs.cloudflare.com/ajax/libs/prism/1.14.0/themes/prism-tomorrow.css'
        }
      ]
    }
  },
  async asyncData({ app, route, payload }) {
    const post = payload || (await app.$content('/blog').get(route.path))
    return { post }
  }
}
</script>

<style lang="scss">
.breadcrumbs {
  left: 50%;
  transform: translateX(-50%);
  top: -5px;
}
.post {
  .container {
    position: relative;
    padding-top: 2.5rem !important;
  }
}
pre {
  border-radius: 6px;
}
.line-number,
code,
kbd {
  font-family: source-code-pro, Menlo, Monaco, Consolas, Courier New, monospace !important;
  font-size: 0.85em !important;
}
:not(pre) > code[class*='language-'],
pre[class*='language-'] {
  line-height: 1.4;
  padding: 1.25rem 1.5rem;
  /* margin: 0.85rem 0; */
  background: transparent;
  overflow: auto;
  /* color: #292c34; */
  background-color: #282c34;
}

.content code {
  color: #476582;
  padding: 0.25rem 0.5rem;
  margin: 0;
  font-size: 0.85em;
  background-color: rgba(27, 31, 35, 0.05);
  border-radius: 3px;
}

.content code[class*='language-'],
pre[class*='language-'] code {
  color: #f1f1f1 !important;
}

.content pre,
.content pre[class*='language-'] {
  line-height: 1.4;
  padding: 1.25rem 1.5rem;
  margin: 0.85rem 0;
}

@media (max-width: 419px) {
  .content pre[class*='language-'] {
    padding: 1.75rem 2.15rem;
    margin: 0.85rem -1.5rem !important;
    border-radius: 0 !important;
  }
}
:not(pre) > code[class*='language-'],
pre[class*='language-'] {
  background: #282c34 !important;
}
</style>
