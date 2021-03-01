/**
 * Temporary fix for taking an Array from `nav.yml` and turning it into an Object with the keys being the slug of the route. This enables the current SEO plugin to work properly for the description.
 *
 * You did this because using an Object in `nav.yml` was adding the `slug` and `title` properties for some reason.
 */

const arrayToObject = (arr, keyField) =>
  Object.assign({}, ...arr.map((item) => ({ [item[keyField]]: item })))

export default (navArray) => {
  const keyedNavArray = navArray.map((item) => {
    item.key = item.to.replace('/', '')
    return item
  })

  return arrayToObject(keyedNavArray, 'key')
}
