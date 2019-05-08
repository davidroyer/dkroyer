<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-header">
          <slot name="header">
            default header
          </slot>
        </div>

        <div class="modal-body">
          <slot name="body">
            default body
          </slot>
        </div>

        <div class="modal-footer">
          <slot name="footer">
            Default Modal Footer
            <v-button
              class="bg-grey-darkest border-grey-darkest text-sm text-white modal-default-button"
              @click="$emit('close')"
            >
              Close
            </v-button>
          </slot>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'VModal'
}
</script>

<style lang="scss">
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
  display: flex;
  align-items: center;
  overflow: hidden;
}

.modal-wrapper {
  /* display: table-cell; */
  /* vertical-align: middle; */
}

.modal-wrapper {
  width: 300px;
  margin: 1rem auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  overflow-y: scroll;
  height: 100%;
  -webkit-overflow-scrolling: touch;
}

.modal-header h3 {
  margin-top: 0;
  color: #42b983;
}

.modal-body {
  margin: 20px 0;
}

.modal-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.modal-default-button {
  float: right;
}

/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-wrapper,
.modal-leave-active .modal-wrapper {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
