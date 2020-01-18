<template>
  <div class="flex flex-col content-around min-h-screen bg-container relative">
    <header role="banner" class="relative z-1">
      <the-header></the-header>
    </header>
    <main class="container mx-auto p-4 flex-grow" role="main">
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

<style lang="postcss">
.bg-container {
  -webkit-transition: width 2s;
  transition: width 2s;
  &:after {
    content: '';
    @apply absolute pin w-full h-full;
    background-image: url('~assets/images/map.svg');
    background-size: 100vw 50vh;
    background-repeat: no-repeat;
    pointer-events: none;
    background-position: center 25vw;

  }
}
@screen md {
  .bg-container:after {
    background-position: center 10vw;
  }
}
</style>
