<template>
  <section class="relative z-1">
    <the-title>
      <h1 slot="title" class="text-3xl">{{ title }}</h1>
      <p slot="subtitle" class="text-grey-darkest">
        Message me:
        <a :href="'mai' + 'lto:colletti.nick' + '@' + 'g' + 'mai' + 'l' + '.' + 'com'">{{
          'colletti.nick' + '(at)gm' + 'ail(dot)com'
        }}</a>
      </p>
    </the-title>
    <form :name="formName" method="post" class="text-grey-darkest" action="/thank-you" netlify netlify-honeypot="b">
      <p class="hidden" aria-hidden="true">
        <label>Don’t fill this out if you're human: <input name="b" type="text"/></label>
      </p>
      <input type="hidden" name="form-name" :value="formName"/>
      <label
        >Name
        <input
          type="text"
          name="name"
          autocomplete="name"
          placeholder="Your name..."
          required
          class="
            default-input
            mb-3 mt-2
            p-2
            rounded
            bg-grey-light-blue
            w-full
          "
        />
      </label>
      <label
        >Email
        <input
          type="email"
          name="email"
          autocomplete="email"
          placeholder="Your email..."
          required
          class="
            mb-3 mt-2
            p-2
            rounded
            bg-grey-light-blue
            w-full
          "
        />
      </label>
      <label
        >Message:
        <textarea
          name="message"
          placeholder="Your message..."
          required
          minlength="4"
          rows="4"
          class="
            mb-3 mt-2
            p-2
            rounded
            bg-grey-light-blue
            w-full max-w-full
          "
        ></textarea>
      </label>
      <div class="row flex justify-end">
        <button type="submit" class="button">Send</button>
      </div>
    </form>
  </section>
</template>

<script>
const TheTitle = () => import('~/components/base-texts/the-title')

const title = 'Contact'

export default {
  name: title,
  transition: 'page-opacity',
  head: {
    title,
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Contact for: Freelancing, Consultant, Emotional Support.',
      },
    ],
  },
  data() {
    return {
      title,
      formName: 'contact',
    }
  },
  components: {
    TheTitle,
  },
}
</script>
