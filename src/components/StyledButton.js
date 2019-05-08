import styled from 'vue-styled-components'

const btnProps = { primary: Boolean, color: String, hollow: Boolean }

const StyledButton = styled('button', btnProps)`
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  background: ${props => (props.primary ? 'palevioletred' : 'white')};
  color: ${props => (props.primary ? 'white' : 'palevioletred')};
`
// console.log(StyledButton)
// export default {
//   name: 'VStyledButton',
//   functional: true,
//   nativeOn: {
//     click: this.nativeClickHandler,
//     focus: this.nativeFocusHandler,
//     mouseover: this.nativeMouseoverHandler
//   },
//   props: {
//     primary: {
//       type: Boolean
//     },
//     color: {
//       type: String
//     },
//     hollow: {
//       type: Boolean,
//       default: false
//     }
//   },
//   render() {
//     return <StyledButton />
//   }
//
//   render: function(createElement) {
//     return createElement(
//       StyledButton,
//       {
//         attrs: this.$attrs,
//         // on: this.$listeners,
//         class: this.classNames
//       },
//       this.$slots.default
//     )
//   }
// }
export default StyledButton
