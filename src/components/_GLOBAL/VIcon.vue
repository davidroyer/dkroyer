<template>
  <div class="icon-svg" v-html="iconHtml"
    :width="fontSize"
    :style="{ color: iconColor, fontSize: fontSize }"
    v-bind="$attrs"
    v-on="$listeners"
    :class="['icon', {'button': button}]"
    >
  </div>

<!-- <FontAwesomeIcon
    v-if="source === 'font-awesome'"
    :icon="faIcon"
    :width="fontSize"
    :style="{ color: iconColor, fontSize: fontSize }"
    v-bind="$attrs"
    v-on="$listeners"
    :class="['icon', {'button': button}]"
  />
  <span
    v-else-if="source === 'custom'"
    :class="customIconClass"
  /> -->
</template>

<script>
var library = require('@fortawesome/fontawesome-svg-core').library
var dom = require('@fortawesome/fontawesome-svg-core').dom
var findIconDefinition = require('@fortawesome/fontawesome-svg-core').findIconDefinition

var icon = require('@fortawesome/fontawesome-svg-core').icon
// var fas = require('@fortawesome/free-solid-svg-icons').fas
// import { library, findIconDefinition, icon } from '@fortawesome/fontawesome-svg-core'
import camelCase from 'lodash/camelCase'
import Case from 'case'

// import { faSync, faUser, faStar, faTag } from '@fortawesome/free-solid-svg-icons'
import { faTimesCircle } from '@fortawesome/free-regular-svg-icons'
import { faTwitter, faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'

const faSolidIcons = ['faSync', 'faUser', 'faStar', 'faTag']
const faRegularIcons = ['faTimesCircle']
const faBrandsIcons = ['faTwitter', 'faGithub', 'faLinkedinIn']

// import { faSolidIcons } from '@fortawesome/free-solid-svg-icons'
const faSolidIconsObject = {}
for (const [index, value] of faSolidIcons.entries()) {
  console.log(value)
  let faIcon = require('@fortawesome/free-solid-svg-icons')[value]
  faSolidIconsObject[faIcon.iconName] = faIcon
}
console.log(faSolidIconsObject)
// faSolidIcons.forEach(icon => {
//   icon[i]
//   import { icon } from '@fortawesome/free-brands-svg-icons'
//   library.add(icon)
// })
// icon(faLinkedinIn)

// console.log(Test)
// library.add(
//   faCoffee,
//   faChild,
//   faCircle,
//   faArchive,
//   faComment,
//   faTwitter
// )
export default {
  name: 'VIcon',
  inheritAttrs: false,
  components: {
    // FontAwesomeIcon
  },
  props: {
    button: {
      type: Boolean,
      default: false
    },
    source: {
      type: String,
      default: 'font-awesome'
    },
    name: {
      type: String,
      required: true
    },
    fontSize: {
      type: String,
      default: '24px'
    },
    iconColor: {
      type: String
    },
    prefix: {
      type: String,
      default: 'fas'
    },
    faStyle: {
      type: String,
      default: 'solid'
    }
  },

  mounted() {
    // Loop through each node and appending it to the DOM body
    // Array.from(i.node).map(n => document.body.appendChild(n))
  },
  computed: {
    // https://fontawesome.com/icons
    fontAwesomeIcon() {
      return {
        ...faSolidIconsObject,

        timesCircle: faTimesCircle,

        github: faGithub,
        twitter: faTwitter,
        linkedinIn: faLinkedinIn
      }[this.name]
    },
    iconHtml() {
      return icon(this.fontAwesomeIcon).html[0]
    },
    faIcon() {
      // let icon = 'edit'
      // let faIconName = 'fa' + Case.pascal(this.name)
      const faIconDefinition = findIconDefinition({
        prefix: this.prefix,
        iconName: this.name
      })

      return faIconDefinition
      // return require(`@fortawesome/free-${this.faStyle}-svg-icons/${faIconName}`)[faIconName]
      // console.log(faEdit)
      // return faEdit
      // return () => import(`./${this.componentFile}`)
    },
    // Gets a CSS module class, e.g. iconCustomLogo
    customIconClass() {
      return this.$style[camelCase('icon-custom-' + this.name)]
    }
  }
}
</script>

<style lang="scss">
.icon {
  &.button {
    cursor: pointer;
  }
}
</style>
