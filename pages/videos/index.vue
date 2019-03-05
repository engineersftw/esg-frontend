<template>
  <v-content>
    <v-container>
      <v-layout row wrap>
        <v-flex xs12>
          <h1>All Videos {{ $route.params.slug }}</h1>
          <h2>Listing of the videos we record at local tech meetups/events.</h2>
          <v-autocomplete
            v-model="model"
            :items="states"
            label="Find A State - TBD change to find video"
            placeholder="Start typing to Search"
          />
          <p>3022 videos found. (may not be needed)</p>
        </v-flex>
        <v-flex xs12 text-xs-center>
          <v-pagination
            v-model="page"
            class="text-xs-center"
            :length="15"
            :total-visible="7"
          />
          <p>Displaying videos 1 - 18 of 3022 in total</p>
        </v-flex>
      </v-layout>
      <v-layout row wrap>
        <v-flex lg4 md6 sm12 class="pa-1">
          <presenter-video-card />
        </v-flex>
        <v-flex lg4 md6 sm12 class="pa-1">
          <presenter-video-card />
        </v-flex>
        <v-flex lg4 md6 sm12 class="pa-1">
          <presenter-video-card />
        </v-flex>
        <v-flex lg4 md6 sm12 class="pa-1">
          <presenter-video-card />
        </v-flex>
        <v-flex lg4 md6 sm12 class="pa-1">
          <presenter-video-card />
        </v-flex>
      </v-layout>
    </v-container>
  </v-content>
</template>

<script>
// should use own video card, just without presenter icon...
import PresenterVideoCard from '~/components/PresenterVideoCard.vue'

export default {
  components: {
    PresenterVideoCard
  },
  data: () => ({
    model: null,
    search: null,
    page: 1,
    states: [
      'Alabama',
      'Alaska',
      'American Samoa',
      'Arizona',
      'Arkansas',
      'California',
      'Colorado',
      'Connecticut',
      'Delaware',
      'District of Columbia',
      'Federated States of Micronesia',
      'Florida',
      'Georgia',
      'Guam',
      'Hawaii',
      'Idaho',
      'Illinois',
      'Indiana',
      'Iowa',
      'Kansas',
      'Kentucky',
      'Louisiana',
      'Maine',
      'Marshall Islands',
      'Maryland',
      'Massachusetts',
      'Michigan',
      'Minnesota',
      'Mississippi',
      'Missouri',
      'Montana',
      'Nebraska',
      'Nevada',
      'New Hampshire',
      'New Jersey',
      'New Mexico',
      'New York',
      'North Carolina',
      'North Dakota',
      'Northern Mariana Islands',
      'Ohio',
      'Oklahoma',
      'Oregon',
      'Palau',
      'Pennsylvania',
      'Puerto Rico',
      'Rhode Island',
      'South Carolina',
      'South Dakota',
      'Tennessee',
      'Texas',
      'Utah',
      'Vermont',
      'Virgin Island',
      'Virginia',
      'Washington',
      'West Virginia',
      'Wisconsin',
      'Wyoming'
    ]
  }),
  mounted() {
    console.log(this.$route.params.slug)
  }
}
</script>

<style scoped>
.aspect-ratio {
  position: relative;
  width: 100%;
  height: 0;
  padding-bottom: 51%;
}

.aspect-ratio iframe {
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
}
</style>
