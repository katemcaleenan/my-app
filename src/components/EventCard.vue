<template>
  <div>
    <router-link class="event-link" :to="{ name: 'event-show', params: { id: event.id } }">
      <div class="event-card -shadow">
        <span class="eyebrow">@{{ event.time }} on {{ event.date | date }}</span>
        <h4 class="title">{{ event.title }}</h4>
        <BaseIcon name="users">{{ event.attendees.length }} attending</BaseIcon>
      </div>
    </router-link>

    <!--the button calls the update status function within methods-->
    <button @click="updateStatus" :class="{ 'is-user-attending': isUserAttending }">{{ buttonText }}</button>
    <!-- the :class enables the styling of the function 
    if the user is attending button will be red to opt out-->

    <p></p>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  props: {
    event: {
      type: Object
    }
  },
  methods: {
    ...mapActions('event', ['updateEvent']), //'updateEvent' service folder

    optUserIn() {
      this.event.attendees.push(this.user.user)
    },

    optUserOut() {
      const attendeeIndex = this.findAttendeeIndex()
      this.event.attendees.splice(attendeeIndex, 1) //removes the index of the attendee and next
    },

    updateStatus() {
      this.isUserAttending ? this.optUserOut() : this.optUserIn() //ternary function whether the user IS attending then want to not attend otherwise/else call function to attend

      this.updateEvent(this.event) //call the update function to call to the  service store

      this.$store.getters['event/getEventById'] //calls the getter to find out the event that selected to attend or leave
    },

    findAttendeeIndex() {
      const user = this.user.user //retrieves the user info from the state store
      const attendees = this.event.attendees // retrieves the attendees witin the selected event

      return attendees.findIndex(attendee => {
        return attendee.id === user.id //checks the array of attendees for a matching user id
      })
    }
  },
  computed: {
    ...mapState(['user']),

    buttonText() {
      return this.isUserAttending ? 'Opt out' : 'Attend'
    },

    isUserAttending() {
      const attendeeIndex = this.findAttendeeIndex()
      return attendeeIndex >= 0 //if the user is in the list the index should be greater than or equal 0 otherwise nothing
    }
  }
}
</script>

<style scoped>
.event-card {
  padding: 20px;
  margin-bottom: 24px;
  transition: all 0.2s linear;
  cursor: pointer;
}
.event-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2), 0 1px 15px 0 rgba(0, 0, 0, 0.19);
}
.event-card > .title {
  margin: 0;
}
.event-link {
  color: black;
  text-decoration: none;
  font-weight: 100;
}

button {
  background: green;
}

button.is-user-attending {
  background: red;
}
</style>
