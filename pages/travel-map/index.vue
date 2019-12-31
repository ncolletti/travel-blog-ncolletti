<template>
  <section class="relative z-1">
    <div class="flex flex-col items-center py-4">
      <h4 class="text-4xl mb-3 text-grey-darkest">Follow my Travels! 🌏</h4>
    <iframe src="https://www.google.com/maps/d/u/0/embed?mid=1qhJLJ552iVOhi0XUXid7dibgbm9Hbbwy" width="640" height="480"></iframe>
      <button class="button mb-8" @click="goToHome">Go Home</button>
      <div aria-hidden="true" class="text-grey text-xs">
        Thanks for the map, Google!
      </div>
    </div>
  </section>
</template>

<script>

export default {
  name: 'travel-map',
  transition: 'page-left',
  head: {
    meta: [{ hid: 'robots', name: 'robots', content: 'noindex' }],
  },
  data() {
    return {
    //   sent: false,
    }
  },
  methods: {
    onSubmit() {
      // this.sent = true
    },
    goToHome() {
      this.$router.push('/')
    },
  },
}
</script>
