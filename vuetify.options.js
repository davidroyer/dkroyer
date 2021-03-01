import colors from 'vuetify/lib/util/colors'
import {
  mdiGithub,
  mdiLabel,
  mdiLinkedin,
  mdiTwitter,
  mdiStar,
  mdiSourceFork
} from '@mdi/js'

export default function () {
  return {
    theme: {
      themes: {
        light: {
          // primary: '#2f365f',

          primary: '#2c3e50', // Vuetify color

          main: '#2f365f',
          secondary: colors.grey.darken4,
          drdark: '#22292f'
        }
      }
    },
    icons: {
      iconfont: 'mdiSvg',
      values: {
        mdiStar,
        mdiSourceFork,
        mdiGithub,
        mdiTwitter,
        mdiLinkedin,
        mdiLabel
      }
    }
  }
}
