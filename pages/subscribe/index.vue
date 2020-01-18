<template>
  <section class="relative z-1">
    <the-title>
      <h1 slot="title" class="text-3xl">{{ title }} to my Blog!</h1>
    </the-title>

    <section class="mailchimp">
      <div id="mc_embed_signup">
      <form action="https://collettitravels.us4.list-manage.com/subscribe/post?u=16b3a3f0b7ca77af448a13268&amp;id=90d1086b50" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
          <div id="mc_embed_signup_scroll">
      <div class="mc-field-group">
        <label for="mce-EMAIL">Email Address</label>
        <input type="email" value="" name="EMAIL" class="
            mb-3 mt-2
            p-2
            rounded
            bg-grey-light-blue
            w-full
            required email" id="mce-EMAIL">
      </div>
      <div class="mc-field-group">
        <label for="mce-FNAME">First Name </label>
        <input type="text" value="" name="FNAME" class="
            mb-3 mt-2
            p-2
            rounded
            bg-grey-light-blue
            w-full" id="mce-FNAME">
      </div>
      <div class="mc-field-group">
        <label for="mce-LNAME">Last Name </label>
        <input type="text" value="" name="LNAME" class="
            mb-3 mt-2
            p-2
            rounded
            bg-grey-light-blue
            w-full" id="mce-LNAME">


      </div>
        <div id="mce-responses" class="clear">
          <div class="response" id="mce-error-response" style="display:none"></div>
          <div class="response" id="mce-success-response" style="display:none"></div>
        </div>
          <div style="position: absolute; left: -5000px;" aria-hidden="true">
            <input type="text" name="b_16b3a3f0b7ca77af448a13268_90d1086b50" tabindex="-1" value=""></div>
            <div class="clear">
              <div class="row flex justify-end">
                <button type="submit" name="subscribe" value="Subscribe" id="mc-embedded-subscribe" class="button">Subscribe</button>
              </div>

          </div>
          </div>
      </form>
      </div>
    </section>

  </section>
</template>

<script>
const TheTitle = () => import('~/components/base-texts/the-title')

const title = 'Subscribe'

export default {
  name: title,
  transition: 'page-opacity',
  head: {
    title,
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Subscribe for updates on my jounrey',
      },
    ],
    script: [
      { src: 'js/mailchimp.js'}
    ]
  },
  data() {
    return {
      title,
      formName: 'subscribe',
    }
  },
  components: {
    TheTitle,
  },
}
</script>
