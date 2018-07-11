export default function({ isDev, store }) {
  // let addedAlready = store.state.examplePageAdded
  // console.log('addedAlready', addedAlready)
  // if (isDev && !addedAlready) store.commit('addExamplePageToMenu')
  if (store.state.menuIsActive === true) store.commit('toggleMenuState')
}

// var examplesPage: { name: 'Examples', path: '/examples' };
//
// var navLinks = [
//   { name: 'Home', path: '/' },
//   { name: 'Site Info', path: '/site-info' },
//   { name: 'Blog', path: '/blog' },
//   { name: 'Contact', path: '/contact' },
// ]
// if (navLinks.includes(examplesPage)) alert("yes");
// else alert("no");
