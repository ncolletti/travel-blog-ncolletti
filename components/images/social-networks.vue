<template>
  <div> <!-- accepts display classes -->
    <ul class="flex my-0 pl-0">
      <li
        v-for="(network, i) in socialNetworks"
        :key="i"
        class="flex"
      >
        <external-link :href="network.link" class="block disable-underline">
          <svg
            class="w-6 mx-2 hover:fill-action transition:fill"
            viewBox="0 0 33 33"
            :class="{
              'fill-white': dark,
              'fill-primary': !dark,
            }"
          >
            <title>{{ network.name }}</title>
            <g>
              <path :d="network.iconPath"></path>
            </g>
          </svg>
        </external-link>
      </li>
    </ul>
  </div>
</template>
<script>
const ExternalLink = () => import('~/components/base-texts/external-link')
export default {
  name: 'SocialNetworks',
  props: {
    dark: {
      type: Boolean,
      default: true,
    }
  },
  data() {
    return {
      socialNetworks: [
        {
          name: 'Twitter',
          link: process.env.social.twitter.link,
          iconPath: 'M32 6.125c-0.539 0.297-2.156 0.891-3.664 1.039 0.967-0.521 2.398-2.228 2.752-3.586-0.93 0.594-3.065 1.459-4.119 1.459 0 0 0 0.002 0.002 0.004-1.203-1.258-2.895-2.041-4.774-2.041-3.644 0-6.601 2.955-6.601 6.602 0 0.506 0.060 0.998 0.17 1.471h-0.002c-4.945-0.127-10.726-2.605-13.984-6.848-2 3.465-0.27 7.316 2.002 8.721-0.775 0.060-2.209-0.088-2.883-0.744-0.047 2.299 1.061 5.346 5.092 6.449-0.777 0.42-2.148 0.301-2.748 0.209 0.211 1.943 2.93 4.482 5.9 4.482-1.059 1.223-4.672 3.447-9.143 2.738 3.037 1.85 6.578 2.92 10.326 2.92 10.65 0 18.922-8.631 18.477-19.279 0-0.012-0.004-0.025-0.004-0.035 0-0.029 0.004-0.059 0.004-0.084 0-0.033-0.004-0.064-0.004-0.1 0.969-0.66 2.27-1.832 3.201-3.377z'
        },
        {
          name: 'Instagram',
          link: process.env.social.instagram.link,
          iconPath: 'M 9.9980469 3 C 6.1390469 3 3 6.1419531 3 10.001953 L 3 20.001953 C 3 23.860953 6.1419531 27 10.001953 27 L 20.001953 27 C 23.860953 27 27 23.858047 27 19.998047 L 27 9.9980469 C 27 6.1390469 23.858047 3 19.998047 3 L 9.9980469 3 z M 22 7 C 22.552 7 23 7.448 23 8 C 23 8.552 22.552 9 22 9 C 21.448 9 21 8.552 21 8 C 21 7.448 21.448 7 22 7 z M 15 9 C 18.309 9 21 11.691 21 15 C 21 18.309 18.309 21 15 21 C 11.691 21 9 18.309 9 15 C 9 11.691 11.691 9 15 9 z M 15 11 A 4 4 0 0 0 11 15 A 4 4 0 0 0 15 19 A 4 4 0 0 0 19 15 A 4 4 0 0 0 15 11 z'
        }
      ]
    }
  },
  components: {
    ExternalLink
  }
}
</script>
