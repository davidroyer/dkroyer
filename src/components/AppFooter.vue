<template>
  <footer
    class="footer text-white text-sm w-full flex flex-col items-center justify-center py-6"
    role="contentinfo"
    itemscope
    itemtype="http://schema.org/WPFooter">
    <div>Copyright &copy; {{ fullYear }} David Royer</div>
    <div class="social-links flex justify-center">
      <a class="m-2" href="https://github.com/davidroyer" target="_blank" rel="noopener" aria-label="github">
        <fa-icon :icon="['fab', 'github']"></fa-icon>
      </a>
      <a class="m-2" href="https://twitter.com/DavidRoyer_" target="_blank" rel="noopener" aria-label="twitter">
        <fa-icon :icon="['fab', 'twitter']"></fa-icon>
      </a>
      <a class="m-2" href="https://www.linkedin.com/in/dkroyer/" target="_blank" rel="noopener" aria-label="linkedIn">
        <fa-icon :icon="['fab', 'linkedin-in']"></fa-icon>
      </a>
    </div>
  </footer>
</template>


<script>
export default {
  name: 'AppFooter',
  computed: {
    fullYear() {
      return new Date().getFullYear()
    }
  }
}
</script>

<style lang='scss'>
.footer {
  // background-color: hsla(208, 16%, 16%, 0.85);
  background-color: rgba(34, 41, 47, 0.9);
}
.svg-inline--fa {
  font-size: 24px;
}
</style>
