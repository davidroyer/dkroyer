export default function({ isDev, store }) {
  if (store.state.menuIsActive === true) store.commit('toggleMenuState')
}
