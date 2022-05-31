import EventService from '@/services/EventService.js'

export const state = () => ({
  events: [],
  event: {}
})

export const mutations = {
  SET_EVENTS(state, events) {
    state.events = events
  },
  SET_EVENT(state, event) {
    state.event = event
  }
}

export const actions = {
  async fetchEvents({ commit }) {
    const res = await EventService.getEvents()
    commit('SET_EVENTS', res.data)
    return res
  },
  async fetchEvent({ commit }, id) {
    const res = await EventService.getEvent(id)
    commit('SET_EVENT', res.data)
    return res
  }
}
