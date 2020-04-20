import EventService from '@/services/EventService.js'
import { exists } from 'fs'
import Axios from 'axios'

function getEventById(state, id) {
  return state.events.find(event => event.id === id)
}

function getEventIndexById(state, id) {
  return state.events.findIndex(event => event.id === id)
} // both made global functions so everything below can access them i.e. update and add/remove attendee

export const namespaced = true

export const state = {
  events: [],
  eventsTotal: 0,
  event: {},
  perPage: 3
}

export const mutations = {
  ADD_EVENT(state, event) {
    state.events.push(event)
  },
  UPDATE_EVENT(state, event) {
    const eventIndex = getEventIndexById(state, event.id)

    if (eventIndex < 0) {
      return
    }

    state.events[eventIndex] = event
  },
  SET_EVENTS(state, events) {
    state.events = events
  },
  SET_EVENTS_TOTAL(state, eventsTotal) {
    state.eventsTotal = eventsTotal
  },
  SET_EVENT(state, event) {
    state.event = event
  },
  ADD_EVENT_ATTENDEE(state, payload) {
    const eventIndex = getEventIndexById(state, payload.eventid)

    if (eventIndex < 0) {
      return
    }

    const event = state.events[eventIndex]

    const attendees = event.attendees

    const attendeeIndex = attendees.findIndex(attendee => {
      return attendee.id === payload.user.id
    })

    if (attendeeIndex >= 0) {
      return
    }

    event.attendees.push(payload.user)
  },

  REMOVE_EVENT_ATTENDEE(state, payload) {
    const eventIndex = getEventIndexById(state, payload.eventid)

    if (eventIndex < 0) {
      return
    }

    const event = state.events[eventIndex]

    const attendees = event.attendees

    const attendeeIndex = attendees.findIndex(attendee => {
      return attendee.id === payload.user.id
    })

    if (attendeeIndex < 0) {
      return
    }

    attendees.splice(payload.user, attendeeIndex + 1)
  }
}

export const actions = {
  //call the mutation
  createEvent({ commit, dispatch }, event) {
    return EventService.postEvent(event)
      .then(() => {
        commit('ADD_EVENT', event)
        commit('SET_EVENT', event)
        const notification = {
          type: 'success',
          message: 'Your event has been created!'
        }
        dispatch('notification/add', notification, { root: true })
      })
      .catch(error => {
        const notification = {
          type: 'error',
          message: 'There was a problem creating your event: ' + error.message
        }
        dispatch('notification/add', notification, { root: true })
        throw error
      })
  },

  fetchEvents({ commit, dispatch, state }, { page }) {
    return EventService.getEvents(state.perPage, page)
      .then(response => {
        commit('SET_EVENTS_TOTAL', parseInt(response.headers['x-total-count']))
        commit('SET_EVENTS', response.data)
      })
      .catch(error => {
        const notification = {
          type: 'error',
          message: 'There was a problem fetching events: ' + error.message
        }
        dispatch('notification/add', notification, { root: true })
      })
  },

  fetchEvent({ commit, getters, state }, id) {
    if (id == state.event.id) {
      return state.event
    }

    var event = getters.getEventById(state, id)

    if (event) {
      commit('SET_EVENT', event)
      return event
    } else {
      return EventService.getEvent(id).then(response => {
        commit('SET_EVENT', response.data)
        return response.data
      })
    }
  },

  /* eslint-disable */
  updateEvent({ commit }, payload) {
    return EventService.updateEvent(payload) //service function
      .then(response => {
        //as  update sent to the api and the response is the new updated data to replace the local db
        const event = response.data
        const eventIndex = getEventIndexById(state, event.id)
        //error protection
        if (eventIndex < 0) {
          //if event doesnt exist then add the event - call mutation
          commit('ADD_EVENT', event)
        } else {
          commit('UPDATE_EVENT', event) //else call update mutation
        }
      })
      .catch(error => {
        throw error
      })
  },

  //commit makes the call to the mutation - commit this data
  addEventUser({ commit }, payload) {
    commit('ADD_EVENT_ATTENDEE', payload) // payload is the data, the stuff i want to add
  },

  removeEventUser({ commit }, payload) {
    commit('REMOVE_EVENT_ATTENDEE', payload) //payload=data to remove
  }
}
export const getters = {
  getEventById: state => getEventById //retrive the event id
}
