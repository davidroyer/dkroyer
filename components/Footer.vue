<template>
  <footer class="footer">
    <div class="container">
      <div class="content has-text-centered">
        <p>Copyright David Royer</p>
        <!-- <p>
          <a class="icon" href="https://github.com/davidroyer">
            <icon name="github" color="#00d1b2" scale="2"></icon>
          </a> -->
          <div class="footer-icons">
            <a class="nav-item" href="https://github.com/davidroyer" rel="noopener" target="_blank">
              <icon name="github" color="#00d1b2" scale="2"></icon>
            </a>
            <a class="nav-item" href="https://twitter.com/DavidRoyer_" rel="noopener" target="_blank">
              <icon name="twitter" color="#00d1b2" scale="2"></icon>
            </a>
            <a class="nav-item" href="https://www.linkedin.com/in/dkroyer/" rel="noopener" target="_blank">
              <icon name="linkedin-square" color="#00d1b2" scale="2"></icon>
            </a>
          </div>
        <!-- </p> -->
      </div>
    </div>
  </footer>
</template>

<script>

</script>

<style lang="scss">
  .footer {
    padding-top: 1rem;
    padding-bottom: 0rem;

    .container {
      padding: 1.5em 1.5em 2.5em;
    }
    .footer-icons {
      display: flex;
      justify-content: center;
      flex-flow: row;
    }
  }
</style>
