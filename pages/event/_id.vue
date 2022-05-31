<template>
  <div>
    <h4>
      {{ event.title }}
    </h4>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  head() {
    return {
      title: this.event.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'What you need to know about ' + this.event.title
        }
      ]
    }
  },
  async fetch({ store, error, params }) {
    try {
      await store.dispatch('events/fetchEvent', params.id)
    } catch (e) {
      error({
        statusCode: 503,
        message: 'Unable to fetch event ' + params.id
      })
    }
  },
  computed: {
    ...mapState('events', {
      event: 'event'
    })
  }
}
</script>
