<template>
  <div>
    <h4>Events</h4>
    <event-card
      v-for="(event, index) in events"
      :key="index"
      :event="event"
      :data-index="index"
    />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import EventCard from '~/components/EventCard.vue'

export default {
  head() {
    return {
      title: 'Event Listing'
    }
  },
  async fetch({ store, error }) {
    try {
      await store.dispatch('events/fetchEvents')
    } catch (e) {
      error({
        statusCode: 503,
        message: 'Unable to fetch events. Please try again.'
      })
    }
  },
  components: {
    EventCard
  },
  /* 
  computed: mapState({
    events: state => state.events.events
  })
  */
  computed: {
    ...mapState('events', {
      events: 'events'
    })
  }
}
</script>
