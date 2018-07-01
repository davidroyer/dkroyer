<template>
  <div class="card max-w-sm rounded overflow-hidden my-6">
    <!-- <img class="w-full" src="https://tailwindcss.com/img/card-top.jpg" alt="Sunset in the mountains"> -->
    <div class="px-6 py-4">
      <slot name="header"></slot>
      <!-- <div class="font-bold text-xl mb-2">The Coldest Sunset</div> -->
      <slot name="content"></slot>
      <!-- <p class="text-grey-darker text-base">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
      </p> -->
    </div>
    <div class="px-6 py-4">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VCard'
}
</script>
