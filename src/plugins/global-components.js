/**
 * Globally register all base components for convenience, because they
 * will be used very frequently. Components are registered using the
 * PascalCased version of their file name.
 * @see https://webpack.js.org/guides/dependency-management/#require-context
 */
import Vue from 'vue'
import upperFirst from 'lodash/upperFirst'
import camelCase from 'lodash/camelCase'

// Register all Vue components in the sub folder `global`
const requireComponent = require.context(
  // The relative path of the components folder
  '../components/_GLOBAL/',
  // Whether or not to look in subfolders
  true,
  // The regular expression used to match base component filenames
  /[A-Z]\w+\.(vue|js)$/
)
// Require each matching file name
requireComponent.keys().forEach(fileName => {
  const componentConfig = requireComponent(fileName)
  // PascalCase name without file extension
  // console.log(componentConfig)
  const componentName = componentConfig.default.name
    ? componentConfig.default.name
    : upperFirst(camelCase(fileName.replace(/\.\w+$/, '')))

  // Globally register the component
  Vue.component(componentName, componentConfig.default || componentConfig)
})
