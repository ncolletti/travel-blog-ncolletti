<template>
  <div class="flex flex-col content-around min-h-screen">
    <header role="banner">
      <the-header></the-header>
    </header>
    <main class=" flex-grow" role="main">
      <nuxt />
    </main>
    <footer role="contentinfo">
      <the-footer></the-footer>
    </footer>
  </div>
</template>

<script>
const TheHeader = () => import('~/components/main-presentation/head-nav')
const TheFooter = () => import('~/components/main-presentation/the-footer')
export default {
  components: {
    TheHeader,
    TheFooter,
  },
}
</script>

<style>
body {
  background-color: config('colors.grey-lightest');
  font-family: config('fonts.sans');
}
</style>
