# My Site

- Use [Greg's site](https://gregives.co.uk/) as perfect example to follow.

- Many Vuetify tutorials for both written and video form are usually talking about
  something specific like a set of components or showing how to to build an App
  such as dashboard.

- Vuetify is a powerful framework to build regular websites. It's great for small
  businesses and anything really.

- Nuxtify is a template or example for that type of site to demonstrate how I
  think it could be structured.

- It seems that `stylelint` could be the solution for getting SCSS files to
  format on save. [This article](https://www.freecodecamp.org/news/integrating-prettier-with-eslint-and-stylelint-99e74fede33f/) could help.

## Special Notes

- It's critical that the `nuxt` prop gets used to take advantage of
  it's preloading feature that it uses by using `nuxt-link`. I NEED TO TEST
  THIS.

---

## General

- Using `v-text` for Vuetify components and `nuxt-link` is a good blog post idea.

---

## Optimizing

- Install `@mdi/js` package
- Import it into `vuetify.options.js` file and declare icons that need to be used.
- Many icons are already available and don't need to be imported though
- Use `$vuetify.icons.mdiGithub` in `template`

---

## Features

- The optimization mentioned above
- The handling of desktop and mobile navs

---

## Nuxt

- If a page route is capitalized such as `About.vue` then a route will get
  generated for `/about` and `/About` which would also shows up in the
  `sitemap.xml`. Because of this, I can't imagine this is a good thing so it
  seems like it's best to get pages lowercased.

### SEO & Meta

- I have a built a very simple but elegant solution. It's the `seo-handler.js`
  plugin file. It can be used as follows:

  ```js
  export default {
    head() {
      const { title, description } = this.post
      const seoMetaArray = this.$seo({ title, description })

      return {
        meta: [...seoMetaArray]
      }
    }
  }
  ```

### Head Meta

The best way of setting up the `titleTemplate` is by setting it in the layout
file, such as `default.vue`.

This is the only way to use some variable value from the `site.config.js` file.
Before this realization, you had to hard-code the title inside the function
which means it would need to be updated in 2 locations if its updated.

### Adding a Module

Using the `requireModule` function will allow this as shown in the example
below:

```js
export default function () {
  this.requireModule([
    '@nuxtjs/google-analytics',
    {
      id: 'UA-1234-5'
    }
  ])
}
```

---

## Vue

When using the `ref` attribute on a Vue component then you need to use the
`.$el` to access the underlying HTML element as shown here:

```js
const el = this.$refs.contactForm.$el
```

---

## Netlify

### Forms

You can't test netlify form submissions locally. While there might be a way of
doing this using Netlify Dev you're not using this.

---

In the Netlify docs it instructs to have a `netlify` or `data-netlify="true"`
attribute in within the `form` element. This actually causes an error with
Nuxt/Vuetify after deploying though.

Netlify uses these attributes to then genereate a hidden input field that it injects
into the form. It uses the `name` property of the `form` element to set as the
value of this hidden input. For example:

```html
<form name="myContactForm" netlify></form>

<!-- WILL BECOME -->

<form name="myContactForm">
  <input name="form-name" value="myContactForm"></input>
</form>
```

I believe problem with this is that this is incorrect HTML for an `input`
element.

---

## Vuetify

- **IMPORTANT:** key to customizing with SASS Variables is shown below:

```scss
$material-light: (
  // cards: blue,
  text:
    (
      primary: #2c3e50
    )
);
```

- This Vuetify Vuepress theme is a great resource for this project.
  Especially helpful for looking up SASS variable names.

- Need to start using the new typography classes of like `text-h1`. They make a
  lot more sense and the originals will be depreciated at some point probably.

- [This file](https://github.com/vuetifyjs/vuetify/blob/master/packages/vuetify/src/styles/settings/_light.scss) is key to setting up customizations for styles.

### Vuetify Icons

- For viewing the icons library when using `@mdi/js` -> <https://materialdesignicons.com/>

If you are referencing the `$vuetify.icons` to render an icon then how you do
this actually depends on whether its happening in the template or within the
`script/JavaScript`.

An example of showing the exact same icon is shown below using both ways.  
Notice the use of `.values`.

```html
<template>
  <v-icon>{{ vIcon }}</v-icon>
  <v-icon>$vuetify.icons.mdiGithub</v-icon>
</template>

<script>
  export default {
    computed: {
      vIcon() {
        return this.$vuetify.icons.values.mdiGithub
      }
    }
  }
</script>
```

### SASS Variables & Customization

- The key is to use the file reference within the DevTools that shoes where the
  styles are coming from. You realized this when trying to adjust the `code` styles.

- For customizing SASS variables, you **don't** need to import anything from
  Vuetify like mentioned in the docs.  
  I believe this is because the Nuxt/Vuetify module is handling it but I still
  need to look into this.

### Grid/Layout

If you want to created a column that isn't as wide like your contact form then
you can do the following:

```html
<template>
  <!-- BEST WAY -->
  <v-row justify="center" align="center">
    <v-col md="6">
      <github-projects></github-projects>
    </v-col>
  </v-row>
  <!-- ALTERNATE WAY -->
  <v-row>
    <v-col md="6" offset-md="3">
      <!-- Content Here -->
    </v-col>
  </v-row>
</template>
```

## PWA Icon

I believe the issues you experienced before has to do with the fact that if you
change which file is icon.png then it thinks it the same image as before and
don't reflect when trying to add as an app.

## NuxtCMS

Images referenced in markdown are only tested and working from `static`
directory.

## CodersRank

- Best idea seems to be there API I believe. Example endpoints I could use:
  - `https://api.codersrank.io/v2/users/davidroyer`
  - `https://api.codersrank.io/v2/users/davidroyer/badges`
  - `https://api.codersrank.io/v2/users/davidroyer/languages`

## VSCode

- Rewrap is the extension that was messing up markdown and yaml files wrapping content

- To disable or enable automatically importing components when using them inside the `template`, use the following setting:
  ```json
  {
    "vetur.completion.autoImport": false
  }
  ```
