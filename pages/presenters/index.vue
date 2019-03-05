<template>
  <v-content>
    <v-container>
      <v-layout row wrap>
        <v-flex xs12>
          <h1>Presenters</h1>
          <p>The presenters we recorded.</p>
          <h2>
            TODO: handle no picture, no presenters found when filtering...
          </h2>
          <v-autocomplete
            v-model="model"
            :items="states"
            label="Find A State - TBD change to find presenter - lazy load presenters..."
            placeholder="Start typing to Search"
          />
          <!--
            persistent-hint
            hide-no-data
            hide-selected
            item-text="Description"
            item-value="API"
            return-object
          -->
        </v-flex>
      </v-layout>
      <v-layout row wrap>
        <!-- <v-flex v-for="index in 10" :key="index" xs12 sm6 md4 :class="index % 3 == 0 ? 'py-3' : index % 3 == 1 ? 'py-3' : 'py-3 px-4'"> -->
        <v-flex v-for="index in 10" :key="index" xs6 sm4 md3 class="pa-2">
          <v-card>
            <v-toolbar color="indigo" dark dense>
              <nuxt-link :to="`/presenters/${index}`">
                <v-toolbar-title>Some One</v-toolbar-title>
              </nuxt-link>
            </v-toolbar>
            <v-container fill-height>
              <v-layout align-center justify-center>
                <v-img
                  width="auto"
                  src="https://pbs.twimg.com/profile_images/378800000325798111/ca48276f8ebbbbac9c6ce83aac3c8548_200x200.jpeg"
                />
              </v-layout>
            </v-container>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-content>
</template>

<script>
export default {
  data: () => ({
    descriptionLimit: 60,
    entries: [],
    isLoading: false,
    model: null,
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
  computed: {
    fields() {
      if (!this.model) return []

      return Object.keys(this.model).map(key => {
        return {
          key,
          value: this.model[key] || 'n/a'
        }
      })
    },
    items() {
      return this.entries.map(entry => {
        const Description =
          entry.Description.length > this.descriptionLimit
            ? entry.Description.slice(0, this.descriptionLimit) + '...'
            : entry.Description
        return Object.assign({}, entry, { Description })
      })
    }
  },
  watch: {}
}
</script>

<style scoped>
a {
  color: white;
  text-decoration: none;
}
</style>
