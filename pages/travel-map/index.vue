<template>
  <section class="relative z-1">
    <div class="flex flex-col items-center py-4">
      <h4 class="text-4xl mb-3 text-grey-darkest">Follow my Travels! 🌏</h4>
        <div class="map">
          <div class="triphappy-widget" style="width:800px; height: 500px; max-width:100%;">
            <div class="triphappy-widget-wrapper">
              <div class="triphappy-trip-menu">
                <span class="triphappy-trip-metrics">
                  <i class="fa fa-map-marker fa-lg"></i>
                  <span id="trip-metrics-cities">
                    <strong>7</strong><span> Cities</span>
                  </span>
                  <i class="fa fa-globe fa-lg"></i>
                  <span id="trip-metrics-countries">
                    <strong>5</strong><span> Countries</span>
                  </span>
                  <i class="fa fa-tachometer fa-lg"></i>
                  <span id="trip-metrics-distance">
                    <strong>12,728</strong><span> KM</span>
                  </span>
                </span>
                <a class="triphappy-view-link" href="https://triphappy.com/t/1643585" target="_blank" rel="nofollow" title="View my full itinerary on TripHappy">
                  <i class="fa fa-external-link fa-lg"></i>
                  <strong><span> View</span></strong>
                </a>
              </div>
              <div id="triphappy-map-container"></div>
              <div id="triphappy-credits" style="">
                <a href="https://triphappy.com/trip-planner-map" target="_blank" rel="nofollow">
                  <img class="triphappy-logo" src="https://triphappy.com/assets/triphappy-gray-logo-xs-745a145067f2763063563337ef0913b5c7b0c93a2d51a8465db2a47a3b2583bd.png"
                      alt="Map a trip for free using TripHappy's trip planner map"/>
                </a>
              </div>
            </div>

          </div>
        </div>
      <button class="button mb-8" @click="goToHome">Go Home</button>
      <div aria-hidden="true" class="text-grey text-xs">
        Thanks for the map, <a href="https://triphappy.com">TripHappy.com!</a>
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
    script: [
      { src: '//ajax.googleapis.com/ajax/libs/jquery/2.2.3/jquery.min.js'},
      { src: 'js/openmap.js'}
    ],
    link: [
      { rel: 'stylesheet', href: 'css/openmap.css' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Lato:400,900' },
      { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.6.3/css/font-awesome.min.css' }
    ]
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
