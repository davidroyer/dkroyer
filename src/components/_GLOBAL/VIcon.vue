<!-- <template>
  <div class="v-icon">
    <svg v-html="iconHtml"
      :width="fontSize"
      :height="fontSize"
      :style="{ color: iconColor, fontSize: fontSize }"
      v-bind="$attrs"
      v-on="$listeners"
      :class="['icon', 'v-icon-svg', 'icon-svg', {'button': button}]"
      >
    </svg>
  </div>
</template>

<script>
import Case from 'case'
// import { library, icon } from '@fortawesome/fontawesome-svg-core'
// import { faSync, faUser, faStar, faTag } from '@fortawesome/free-solid-svg-icons'
// import { faTimesCircle } from '@fortawesome/free-regular-svg-icons'
// import { faTwitter, faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
// library.add(faSync, faUser, faStar, faTag, faTimesCircle, faTwitter, faGithub, faLinkedinIn)

export default {
  name: 'VIcon',
  inheritAttrs: false,
  props: {
    button: {
      type: Boolean,
      default: false
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
  computed: {
    // https://fontawesome.com/icons
    fontAwesomeIcon() {
      return {
        sync: faSync,
        user: faUser,
        star: faStar,
        tag: faTag,
        timesCircle: faTimesCircle,
        github: faGithub,
        twitter: faTwitter,
        linkedinIn: faLinkedinIn
      }[this.name]
    },
    iconHtml() {
      return icon(this.fontAwesomeIcon).html[0]
    },
    // Gets a CSS module class, e.g. iconCustomLogo
    customIconClass() {
      return 'customIconClass'
    }
  }
}
</script>

<style lang="scss">
.v-icon {
  .button {
    cursor: pointer;
  }
}
</style> -->
