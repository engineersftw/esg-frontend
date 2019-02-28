<template>
  <v-content>
    <v-container>
      <!-- justify-center align-center -->
      <v-layout row wrap>
        <v-flex xs12>
          <h1>Events</h1>
          <p>The Singapore Tech scene is indeed vibrant. Just look at the sheer number of events listed on these fabulous websites.</p>
          <p>(You may subscribe to these events in iCal or GCal with this URL: https://engineers.sg/cal)</p>
        </v-flex>
      </v-layout>

      <v-layout v-for="day in days" :key="day.day" row wrap class="py-2">
        <v-flex xs12>
          <v-card>
            <v-toolbar color="indigo" dark>
              <v-toolbar-title>{{ day.day }}</v-toolbar-title>
            </v-toolbar>
            <v-list three-line>
              <template v-for="event in day.events">
                <!-- <v-divider v-else-if="item.divider" :key="index" :inset="item.inset" /> -->

                <v-list-tile :key="event.url" @click="test">
                  <v-list-tile-content>
                    <v-card>
                      <v-card-title>
                        <div>
                          <span class="grey--text">Number 10</span><br>
                          <span>Whitehaven Beach</span><br>
                          <span>Whitsunday Island, Whitsunday Islands</span>
                        </div>
                      </v-card-title>
                      <v-card-actions>
                        <v-btn flat color="orange">Share</v-btn>
                        <v-btn flat color="orange">Explore</v-btn>
                      </v-card-actions>
                    </v-card>
                    <!-- <v-list-tile-title v-html="event.title" />
                    <v-list-tile-sub-title v-html="event.meetupGroup" /> -->
                  </v-list-tile-content>
                </v-list-tile>
              </template>
            </v-list>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-content>
</template>

<script>
export default {
  data() {
    return {
      days: [
        {
          day: 'Friday, 01 March',
          events: [
            {
              title: 'AsiaVR Meetup x Pixel',
              meetupGroup: 'AsiaVR Association - Singapore Virtual Reality Meetup Group',
              dateTime: '01-Mar, Fri, 06:00 PM',
              venue: 'Pixel Building, 10 Central Exchange Green, Singapore',
              attendees: 'Join 89 Others',
              url: 'https://www.meetup.com/asiavrsg/events/258753526/'
            },
            {
              title: 'Go Meetup - Feb 2019',
              meetupGroup: 'GoSG',
              dateTime: '01-Mar, Fri, 06:30 PM',
              venue: 'AXA Tower, 8 Shenton Way, Singapore',
              attendees: 'Join 86 Others',
              url: 'https://www.meetup.com/golangsg/events/258485148/'
            }
          ]
        },
        {
          day: 'Saturday, 02 March',
          events: [
            {
              title: 'Agile Circles Singapore February Meetup',
              meetupGroup: 'Agile Circles Singapore',
              dateTime: '02-Mar, Sat, 09:00 AM',
              venue: 'Aviva Digital Garage Singapore, 38 Armenian Street',
              attendees: 'Join 24 Others',
              url: 'https://www.meetup.com/Agile-Circles-Singapore/events/258786457/'
            }
          ]
        }
      ],
      items: [
        { header: 'Today' },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
          title: 'Brunch this weekend?',
          subtitle:
            "<span class='text--primary'>Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?"
        },
        { divider: true, inset: true },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
          title: 'Summer BBQ <span class="grey--text text--lighten-1">4</span>',
          subtitle: "<span class='text--primary'>to Alex, Scott, Jennifer</span> &mdash; Wish I could come, but I'm out of town this weekend."
        },
        { divider: true, inset: true },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
          title: 'Oui oui',
          subtitle: "<span class='text--primary'>Sandra Adams</span> &mdash; Do you have Paris recommendations? Have you ever been?"
        },
        { divider: true, inset: true },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg',
          title: 'Birthday gift',
          subtitle: "<span class='text--primary'>Trevor Hansen</span> &mdash; Have any ideas about what we should get Heidi for her birthday?"
        },
        { divider: true, inset: true },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/5.jpg',
          title: 'Recipe to try',
          subtitle: "<span class='text--primary'>Britta Holt</span> &mdash; We should eat this: Grate, Squash, Corn, and tomatillo Tacos."
        }
      ]
    }
  },
  methods: {
    test() {}
  }
}
</script>

<style scoped>
</style>
