<template>
  <v-content>
    <v-container>
      <!-- justify-center align-center -->
      <v-layout row wrap>
        <v-flex xs12>
          <h1>Events</h1>
          <p>The Singapore Tech scene is indeed vibrant. Just look at the sheer number of events listed on these fabulous websites.</p>
          <p>(You may subscribe to these events in <a href="http://mcb.berkeley.edu/academic-programs/seminars/ical-feed-instructions" target="_blank">iCal</a> or <a href="https://support.google.com/calendar/answer/37100?hl=en" target="_blank">GCal</a> with this URL: <code>https://engineers.sg/cal</code>)</p>
          <p>
            There are also event listings on
            <v-menu open-on-hover bottom offset-y>
              <v-btn slot="activator" color="indigo" dark small>these other sites</v-btn>
              <v-list>
                <v-list-tile>
                  <v-list-tile-title><a href="http://www.thelist.asia/" target="_blank">TheList.SG</a></v-list-tile-title>
                </v-list-tile>
                <v-list-tile>
                  <v-list-tile-title><a href="http://connections.sg/" target="_blank">Connections.SG</a></v-list-tile-title>
                </v-list-tile>
                <v-list-tile>
                  <v-list-tile-title><a href="https://hackerspace.sg/calendar/" target="_blank">Hackerspace.SG</a></v-list-tile-title>
                </v-list-tile>
                <v-list-tile>
                  <v-list-tile-title><a href="https://bhappening.wordpress.com/" target="_blank">bHappening</a></v-list-tile-title>
                </v-list-tile>
                <v-list-tile>
                  <v-list-tile-title><a href="https://www.techinasia.com/heres-complete-list-tech-events-singapore" target="_blank">Tech In Asia</a></v-list-tile-title>
                </v-list-tile>
              </v-list>
            </v-menu> 
          </p>
        </v-flex>
      </v-layout>

      <v-layout v-for="day in days" :key="day.day" row class="py-2">
        <v-flex xs12>
          <v-card>
            <v-toolbar color="indigo" dark>
              <v-toolbar-title>{{ day.day }}</v-toolbar-title>
            </v-toolbar>
            <v-list>
              <template v-for="event in day.events">
                <v-card :key="event.url" class="mx-1 mt-2">
                  <v-card-title>
                    <div>
                      <div class="headline">{{ event.title }}</div>
                      <span class="grey--text">{{ event.meetupGroup }}</span><br>
                      <span>{{ event.dateTime }}</span><br>
                      <span>{{ event.venue }}</span>
                    </div>
                  </v-card-title>
                  <v-card-actions>
                    <v-btn color="indigo" dark target="_blank" :href="event.url">{{ event.attendees }}</v-btn>
                  </v-card-actions>
                </v-card>

                <!-- <v-list-tile :key="event.url" @click="test">
                  <v-list-tile-content>
                    <v-list-tile-title v-html="event.title" />
                    <v-list-tile-sub-title v-html="event.meetupGroup" />
                  </v-list-tile-content>
                </v-list-tile> -->
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
      ]
    }
  },
  methods: {
    test() {}
  }
}
</script>

<style scoped>
a {
  text-decoration: none;
}
</style>
